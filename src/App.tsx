import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  GraduationCap, 
  Layout, 
  Lightbulb, 
  RotateCcw, 
  User,
  Menu,
  X,
  HelpCircle
} from 'lucide-react';
import { GRAMMAR_DATA, Unit, Subunit, Task, TaskItem, Category } from './data';

const Unravel = ({ id, title, children, activeId, setActiveId }: { id: string, title: string, children: ReactNode, activeId: string | null, setActiveId: (id: string | null) => void }) => {
  const isOpen = activeId === id;
  return (
    <div className="mt-2 border border-border-main rounded-xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setActiveId(isOpen ? null : id)}
        className={`w-full flex items-center justify-between px-4 py-2.5 transition-all text-xs font-bold ${
          isOpen ? 'bg-primary text-white' : 'bg-slate-50 text-text-main hover:bg-slate-100'
        }`}
      >
        <span className="flex items-center gap-2">
          <BookOpen size={14} />
          {title}
        </span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-4 bg-white text-xs border-t border-border-main leading-relaxed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(GRAMMAR_DATA[0]);
  const [activeUnit, setActiveUnit] = useState<Unit>(GRAMMAR_DATA[0].units[0]);
  const [activeSubunit, setActiveSubunit] = useState<Subunit>(GRAMMAR_DATA[0].units[0].subunits[0]);
  const [activeTask, setActiveTask] = useState<Task>(GRAMMAR_DATA[0].units[0].subunits[0].tasks[0]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string[]>>({});
  const [results, setResults] = useState<Record<string, boolean[]>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set([GRAMMAR_DATA[0].id]));
  const [showRules, setShowRules] = useState(true);
  const [activeUnravelId, setActiveUnravelId] = useState<string | null>(null);

  // Progress tracking
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const handleInputChange = (itemId: string, index: number, value: string) => {
    if (activeUnravelId) setActiveUnravelId(null);
    setUserAnswers(prev => {
      const current = prev[itemId] || [];
      const updated = [...current];
      updated[index] = value;
      return { ...prev, [itemId]: updated };
    });
  };

  const handleWordClick = (itemId: string, word: string, wordIdx: number) => {
    if (isChecking) return;
    setUserAnswers(prev => {
      const current = prev[itemId] || [];
      const isSelected = current.some((w, idx) => w === word && idx === wordIdx); // This is tricky if words repeat
      // Better to use index-based tracking
      return prev;
    });
  };

  // Let's refine handleWordClick to use indices
  const toggleWord = (itemId: string, wordIdx: number) => {
    if (isChecking) return;
    if (activeUnravelId) setActiveUnravelId(null);
    setUserAnswers(prev => {
      const selectedIndices = (prev[itemId] || []).map(Number);
      const isSelected = selectedIndices.includes(wordIdx);
      let updated: string[];
      if (isSelected) {
        updated = selectedIndices.filter(i => i !== wordIdx).map(String);
      } else {
        updated = [...selectedIndices, wordIdx].map(String);
      }
      return { ...prev, [itemId]: updated };
    });
  };

  const checkAnswers = () => {
    setIsChecking(true);
    const newResults: Record<string, boolean[]> = {};
    let allCorrect = true;

    activeTask.items.forEach(item => {
      const answers = userAnswers[item.id] || [];
      
      if (activeTask.type === 'reorder') {
        const selectedWords = answers.map(idx => item.scrambled![Number(idx)]).join(' ');
        const isCorrect = item.answers.some(correct => {
          const possibleAnswers = correct.split('|').map(a => a.trim().toLowerCase());
          return possibleAnswers.includes(selectedWords.trim().toLowerCase());
        });
        newResults[item.id] = [isCorrect];
        if (!isCorrect) allCorrect = false;
      } else {
        const itemResults = item.answers.map((correct, idx) => {
          const possibleAnswers = correct.split('|').map(a => a.trim().toLowerCase());
          const isCorrect = possibleAnswers.includes((answers[idx] || '').trim().toLowerCase());
          if (!isCorrect) allCorrect = false;
          return isCorrect;
        });
        newResults[item.id] = itemResults;
      }
    });

    setResults(newResults);
    if (allCorrect) {
      setCompletedTasks(prev => new Set([...prev, activeTask.id]));
    }
  };

  const resetTask = () => {
    setUserAnswers({});
    setResults({});
    setIsChecking(false);
    setActiveUnravelId(null);
  };

  useEffect(() => {
    resetTask();
  }, [activeTask]);

  const totalTasks = GRAMMAR_DATA.reduce((acc, cat) => 
    acc + cat.units.reduce((uAcc, unit) => 
      uAcc + unit.subunits.reduce((sAcc, sub) => sAcc + sub.tasks.length, 0), 0
    ), 0
  );
  const progressPercent = Math.round((completedTasks.size / totalTasks) * 100);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-bg-main">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-sidebar border-r border-border-main flex flex-col p-6 transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 text-primary font-extrabold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">G</div>
            GrammarFlow
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-text-muted">
            <X size={20} />
          </button>
        </div>

        <div className="text-[11px] uppercase tracking-wider text-text-muted font-bold mb-4">Curriculum</div>

        <div className="flex-1 overflow-y-auto space-y-8">
          {GRAMMAR_DATA.map(category => (
            <div key={category.id} className="category-group">
              <div 
                onClick={() => toggleCategory(category.id)}
                className={`text-[11px] uppercase tracking-widest font-black mb-4 px-3 flex items-center justify-between cursor-pointer group ${
                  category.id === 'tenses' ? 'text-blue-600' :
                  category.id === 'cases' ? 'text-emerald-600' :
                  category.id === 'prepositions' ? 'text-orange-600' :
                  category.id === 'adjectives' ? 'text-purple-600' :
                  category.id === 'sentence-structure' ? 'text-rose-600' :
                  'text-text-muted'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    category.id === 'tenses' ? 'bg-blue-600' :
                    category.id === 'cases' ? 'bg-emerald-600' :
                    category.id === 'prepositions' ? 'bg-orange-600' :
                    category.id === 'adjectives' ? 'bg-purple-600' :
                    category.id === 'sentence-structure' ? 'bg-rose-600' :
                    'bg-primary'
                  }`} />
                  {category.title}
                </div>
                {expandedCategories.has(category.id) ? (
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:scale-110" />
                ) : (
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                )}
              </div>
              
              <AnimatePresence initial={false}>
                {expandedCategories.has(category.id) && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden space-y-4"
                  >
                    {category.units.map(unit => (
                      <div key={unit.id} className="unit-group">
                        <div className="flex items-center justify-between px-3 py-1.5 text-text-main font-bold text-xs mb-1">
                          {unit.title}
                        </div>
                        <ul className="ml-3 border-l border-border-main space-y-0.5">
                          {unit.subunits.map(subunit => (
                            <li 
                              key={subunit.id}
                              onClick={() => {
                                setActiveCategory(category);
                                setActiveUnit(unit);
                                setActiveSubunit(subunit);
                                setActiveTask(subunit.tasks[0]);
                              }}
                              className={`pl-4 py-1.5 text-[13px] cursor-pointer rounded-r-lg transition-all ${
                                activeSubunit.id === subunit.id 
                                  ? 'bg-primary/5 text-primary font-semibold border-l-2 border-primary -ml-[1px]' 
                                  : 'text-text-muted hover:text-text-main hover:bg-slate-50'
                              }`}
                            >
                              {subunit.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-border-main">
          <div className="flex justify-between text-[11px] text-text-muted mb-2">
            <span>Course Progress</span>
            <span>{completedTasks.size}/{totalTasks} Tasks</span>
          </div>
          <div className="h-1.5 w-full bg-border-main rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              className="h-full bg-primary"
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-border-main">
          <button onClick={() => setIsSidebarOpen(true)} className="text-text-main">
            <Menu size={24} />
          </button>
          <div className="font-bold text-primary">GrammarFlow</div>
          <div className="w-6" />
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
              <div className="text-sm text-text-muted flex items-center gap-2">
                <span className="opacity-50">{activeCategory.title}</span>
                <ChevronRight size={12} className="opacity-30" />
                <span className="opacity-50">{activeUnit.title}</span>
                <ChevronRight size={12} className="opacity-30" />
                <span className="opacity-50">{activeSubunit.title}</span>
                <ChevronRight size={12} className="opacity-30" />
                <strong className="text-text-main font-semibold">{activeTask.title}</strong>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted bg-white px-3 py-1.5 rounded-full border border-border-main shadow-sm">
                <div className={`w-2 h-2 rounded-full ${completedTasks.has(activeTask.id) ? 'bg-success-main' : 'bg-slate-300'}`} />
                Student: Tina Rainer
              </div>
            </div>

            <motion.div
              key={activeTask.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{activeSubunit.title}</h1>
                <button 
                  onClick={() => setShowRules(!showRules)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    showRules 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white text-text-muted border border-border-main hover:border-primary/50'
                  }`}
                  title={showRules ? "Hide Rules" : "Show Rules"}
                >
                  <HelpCircle size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Rules</span>
                </button>
              </div>
              <h2 className="text-xl font-semibold text-text-main mb-2">{activeTask.title}</h2>
              <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
                {activeTask.description}
              </p>
            </motion.div>

            {/* Teacher's Note / Rules */}
            <AnimatePresence>
              {showRules && (
                <motion.div 
                  initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginBottom: 32 }}
                  exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white border border-border-main rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                    <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">Teacher's Note & Rules</div>
                      <div className="text-sm text-text-muted leading-relaxed">
                        {activeSubunit.id === 'regular' && (
                          <>
                            <p>Regular verbs follow a strict pattern. The endings are: <span className="font-mono font-bold">-e, -st, -t, -en, -t, -en</span>.</p>
                            <Unravel 
                              id="reg-endings" 
                              title="Conjugation Table (Present)" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="grid grid-cols-2 gap-2 font-mono">
                                <div>ich -e</div><div>wir -en</div>
                                <div>du -st</div><div>ihr -t</div>
                                <div>er/sie/es -t</div><div>sie/Sie -en</div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'irregular' && (
                          <>
                            <p>Irregular verbs change their vowel in the <span className="font-bold">du</span> and <span className="font-bold">er/sie/es</span> forms.</p>
                            <Unravel 
                              id="irreg-vowels" 
                              title="Common Vowel Changes" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-1">
                                <li><span className="font-bold">e → i:</span> helfen (hilft), essen (isst), geben (gibt)</li>
                                <li><span className="font-bold">e → ie:</span> lesen (liest), sehen (sieht), empfehlen (empfiehlt)</li>
                                <li><span className="font-bold">a → ä:</span> fahren (fährt), schlafen (schläft), laufen (läuft)</li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'haben-sein' && (
                          <>
                            <p>Haben and Sein are the most important verbs in German. They are irregular!</p>
                            <Unravel 
                              id="haben-sein-table" 
                              title="Conjugation: Haben & Sein" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="font-bold border-b mb-1">Haben</p>
                                  <div className="font-mono text-[10px] space-y-0.5">
                                    <div>ich habe</div><div>du hast</div><div>er/sie/es hat</div>
                                    <div>wir haben</div><div>ihr habt</div><div>sie/Sie haben</div>
                                  </div>
                                </div>
                                <div>
                                  <p className="font-bold border-b mb-1">Sein</p>
                                  <div className="font-mono text-[10px] space-y-0.5">
                                    <div>ich bin</div><div>du bist</div><div>er/sie/es ist</div>
                                    <div>wir sind</div><div>ihr seid</div><div>sie/Sie sind</div>
                                  </div>
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'reflexive' && (
                          <>
                            <p>Reflexive pronouns must match the subject. 'Ich' goes with 'mich', 'Du' with 'dich', etc.</p>
                            <Unravel 
                              id="reflexive-table" 
                              title="Reflexive Pronouns Table" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-3">
                                <table className="w-full text-left text-[10px]">
                                  <thead>
                                    <tr className="border-b border-border-main">
                                      <th className="py-1">Subject</th>
                                      <th className="py-1">Accusative</th>
                                      <th className="py-1">Dative</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr><td className="py-1">ich</td><td className="py-1 font-bold">mich</td><td className="py-1 font-bold">mir</td></tr>
                                    <tr><td className="py-1">du</td><td className="py-1 font-bold">dich</td><td className="py-1 font-bold">dir</td></tr>
                                    <tr><td className="py-1">er/sie/es</td><td className="py-1 font-bold">sich</td><td className="py-1 font-bold">sich</td></tr>
                                    <tr><td className="py-1">wir</td><td className="py-1 font-bold">uns</td><td className="py-1 font-bold">uns</td></tr>
                                    <tr><td className="py-1">ihr</td><td className="py-1 font-bold">euch</td><td className="py-1 font-bold">euch</td></tr>
                                    <tr><td className="py-1">sie/Sie</td><td className="py-1 font-bold">sich</td><td className="py-1 font-bold">sich</td></tr>
                                  </tbody>
                                </table>
                                <div className="bg-blue-50 p-2 rounded text-[10px]">
                                  <p className="font-bold">When to use Dative?</p>
                                  <p>Use Dative if there is already a direct object in the sentence.</p>
                                  <p className="italic mt-1">"Ich wasche <span className="font-bold">mich</span>." (Acc)</p>
                                  <p className="italic">"Ich wasche <span className="font-bold">mir</span> die Hände." (Dat - 'die Hände' is the direct object)</p>
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'separable-inseparable' && (
                          <>
                            <p>Separable prefixes move to the end in the present tense. Inseparable prefixes stay attached.</p>
                            <Unravel 
                              id="prefix-hints" 
                              title="Prefix Cheat Sheet" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <div>
                                  <span className="font-bold text-rose-500">Inseparable:</span> be-, ent-, er-, ge-, ver-, zer-, emp-, miss-
                                  <p className="text-[10px] italic">Hint: "The verb stays together!"</p>
                                </div>
                                <div>
                                  <span className="font-bold text-blue-500">Separable:</span> ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, zu-
                                  <p className="text-[10px] italic">Hint: "The prefix kicks to the end!"</p>
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'perfect' && (
                          <>
                            <p>The Perfect Tense uses an auxiliary verb (haben/sein) + Past Participle at the end.</p>
                            <Unravel 
                              id="perfect-formation" 
                              title="Participle Formation" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-3">
                                <div>
                                  <p className="font-bold">Regular Verbs:</p>
                                  <p className="text-xs">ge + stem + t (e.g., <span className="italic">gemacht, gelernt</span>)</p>
                                </div>
                                <div>
                                  <p className="font-bold">Irregular Verbs:</p>
                                  <p className="text-xs">ge + stem (often changed) + en (e.g., <span className="italic">gesehen, gesungen</span>)</p>
                                </div>
                                <div>
                                  <p className="font-bold">Separable Verbs:</p>
                                  <p className="text-xs">prefix + ge + stem + t/en (e.g., <span className="italic">auf-ge-macht, an-ge-rufen</span>)</p>
                                  <p className="text-[10px] italic text-slate-500">Note: The "ge" is sandwiched between prefix and stem.</p>
                                </div>
                                <div>
                                  <p className="font-bold">Inseparable Verbs:</p>
                                  <p className="text-xs">NO "ge-"! Just prefix + stem + t/en (e.g., <span className="italic">besucht, erzählt</span>)</p>
                                  <p className="text-[10px] italic text-slate-500">Note: be-, ent-, er-, ge-, ver-, zer- prefixes never take "ge".</p>
                                </div>
                                <div className="bg-slate-50 p-2 rounded">
                                  <p className="font-bold text-[10px]">-ieren Verbs:</p>
                                  <p className="text-[10px]">No "ge-"! (e.g., <span className="italic">studiert, reserviert</span>)</p>
                                </div>
                              </div>
                            </Unravel>
                            <Unravel 
                              id="sein-vs-haben" 
                              title="When to use 'sein' or 'haben'?" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <div>
                                  <p className="font-bold">Use 'sein' for:</p>
                                  <ul className="list-disc ml-4 space-y-1 text-xs">
                                    <li>Movement from A to B (gehen, fahren, kommen)</li>
                                    <li>Change of state (aufwachen, sterben, einschlafen)</li>
                                    <li>Exceptions: sein, bleiben, werden, passieren, geschehen</li>
                                  </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                  <div>
                                    <p className="font-bold border-b mb-1">Haben</p>
                                    <div className="font-mono text-[9px] space-y-0.5">
                                      <div>ich habe</div><div>du hast</div><div>er/sie/es hat</div>
                                      <div>wir haben</div><div>ihr habt</div><div>sie/Sie haben</div>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="font-bold border-b mb-1">Sein</p>
                                    <div className="font-mono text-[9px] space-y-0.5">
                                      <div>ich bin</div><div>du bist</div><div>er/sie/es ist</div>
                                      <div>wir sind</div><div>ihr seid</div><div>sie/Sie sind</div>
                                    </div>
                                  </div>
                                </div>
                                <p className="mt-2 text-[10px] italic">Everything else uses 'haben'!</p>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'imperfect' && (
                          <>
                            <p>The Imperfect (Präteritum) is used mainly in written German (stories, news). Regular verbs add -te, -test, -te, -ten, -tet, -ten.</p>
                            <Unravel 
                              id="imperfect-rules" 
                              title="Regular vs. Irregular Formation" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <div>
                                  <p className="font-bold">Regular (e.g., machen):</p>
                                  <p className="text-xs">Stem + -te, -test, -te, -ten, -tet, -ten.</p>
                                  <p className="text-xs font-mono">ich machte, du machtest, er machte, wir machten, ihr machtet, sie machten</p>
                                </div>
                                <div>
                                  <p className="font-bold">Irregular (e.g., gehen):</p>
                                  <p className="text-xs">Change the stem vowel and use endings: -, -st, -, -en, -t, -en.</p>
                                  <p className="text-xs font-mono">ich ging, du gingst, er ging, wir gingen, ihr gingt, sie gingen</p>
                                </div>
                                <div className="bg-blue-50 p-2 rounded">
                                  <p className="font-bold text-[10px]">Common Irregular Stems:</p>
                                  <ul className="text-[10px] grid grid-cols-2 gap-1">
                                    <li>fahren → fuhr</li>
                                    <li>sehen → sah</li>
                                    <li>kommen → kam</li>
                                    <li>geben → gab</li>
                                    <li>lesen → las</li>
                                    <li>trinken → trank</li>
                                  </ul>
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'pluperfect' && (
                          <>
                            <p>The Pluperfect (Plusquamperfekt) describes an action that happened BEFORE another past action.</p>
                            <Unravel 
                              id="pluperfect-formation" 
                              title="Formation & Examples" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <p className="font-bold">hatte / war + Past Participle</p>
                                <div className="bg-slate-50 p-2 rounded italic text-xs">
                                  "Nachdem ich gegessen <span className="font-bold">hatte</span>, <span className="font-bold">ging</span> ich ins Bett."
                                </div>
                                <p className="text-[10px]">Use 'hatte' if the verb takes 'haben' in the perfect, and 'war' if it takes 'sein'.</p>
                                <div className="mt-2">
                                  <p className="font-bold text-[10px]">Examples:</p>
                                  <ul className="text-[10px] list-disc ml-4">
                                    <li>Er <span className="italic">war</span> schon <span className="italic">gegangen</span>, bevor ich ankam.</li>
                                    <li>Wir <span className="italic">hatten</span> es <span className="italic">vergessen</span>, deshalb waren wir traurig.</li>
                                    <li>Nachdem sie den Film <span className="italic">gesehen hatte</span>, schlief sie ein.</li>
                                  </ul>
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'future' && (
                          <>
                            <p>The Future Tense uses 'werden' + the infinitive verb at the end of the sentence.</p>
                            <Unravel 
                              id="future-werden" 
                              title="Conjugation: Werden" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                                <div>ich werde</div><div>wir werden</div>
                                <div>du wirst</div><div>ihr werdet</div>
                                <div>er/sie/es wird</div><div>sie/Sie werden</div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'conditional' && (
                          <>
                            <p>The Conditional (Konjunktiv II) is used for wishes, polite requests, and hypothetical 'if' situations.</p>
                            <Unravel 
                              id="conditional-würde" 
                              title="Würde + Infinitive" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <p className="text-xs">Most verbs use <span className="font-bold">würde</span> + infinitive.</p>
                                <div className="grid grid-cols-2 gap-1 font-mono text-[10px]">
                                  <div>ich würde</div><div>wir würden</div>
                                  <div>du würdest</div><div>ihr würdet</div>
                                  <div>er/sie/es würde</div><div>sie/Sie würden</div>
                                </div>
                              </div>
                            </Unravel>
                            <Unravel 
                              id="conditional-wenn" 
                              title="Wenn-Sentences" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <p className="text-xs">In 'wenn' clauses, the verb goes to the end. The main clause then starts with the verb.</p>
                                <div className="bg-slate-50 p-2 rounded italic text-[10px]">
                                  "<span className="font-bold">Wenn</span> ich Zeit <span className="font-bold text-rose-500">hätte</span>, <span className="font-bold text-blue-500">würde</span> ich kommen."
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeCategory.id === 'tenses' && activeUnit.id === 'modal-verbs' && (
                          <>
                            <p>Modal verbs express ability, permission, or necessity. They change their vowel in singular forms (except 'sollen') and have no endings for 'ich' and 'er/sie/es'.</p>
                            <Unravel 
                              id="modal-present-table" 
                              title="Present Tense Table" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="overflow-x-auto">
                                <table className="w-full text-[10px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-100">
                                      <th className="border p-1 text-left">Verb</th>
                                      <th className="border p-1">ich / er / sie / es</th>
                                      <th className="border p-1">du</th>
                                      <th className="border p-1">wir / sie / Sie</th>
                                      <th className="border p-1">ihr</th>
                                    </tr>
                                  </thead>
                                  <tbody className="font-mono">
                                    <tr><td className="border p-1 font-bold">können</td><td className="border p-1">kann</td><td className="border p-1">kannst</td><td className="border p-1">können</td><td className="border p-1">könnt</td></tr>
                                    <tr><td className="border p-1 font-bold">müssen</td><td className="border p-1">muss</td><td className="border p-1">musst</td><td className="border p-1">müssen</td><td className="border p-1">müsst</td></tr>
                                    <tr><td className="border p-1 font-bold">dürfen</td><td className="border p-1">darf</td><td className="border p-1">darfst</td><td className="border p-1">dürfen</td><td className="border p-1">dürft</td></tr>
                                    <tr><td className="border p-1 font-bold">wollen</td><td className="border p-1">will</td><td className="border p-1">willst</td><td className="border p-1">wollen</td><td className="border p-1">wollt</td></tr>
                                    <tr><td className="border p-1 font-bold">sollen</td><td className="border p-1">soll</td><td className="border p-1">sollst</td><td className="border p-1">sollen</td><td className="border p-1">sollt</td></tr>
                                    <tr><td className="border p-1 font-bold">mögen</td><td className="border p-1">mag</td><td className="border p-1">magst</td><td className="border p-1">mögen</td><td className="border p-1">mögt</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            </Unravel>

                            <Unravel 
                              id="modal-imperfect-table" 
                              title="Imperfect (Präteritum) Table" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="overflow-x-auto">
                                <table className="w-full text-[10px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-100">
                                      <th className="border p-1 text-left">Verb</th>
                                      <th className="border p-1">ich / er / sie / es</th>
                                      <th className="border p-1">du</th>
                                      <th className="border p-1">wir / sie / Sie</th>
                                      <th className="border p-1">ihr</th>
                                    </tr>
                                  </thead>
                                  <tbody className="font-mono">
                                    <tr><td className="border p-1 font-bold">können</td><td className="border p-1">konnte</td><td className="border p-1">konntest</td><td className="border p-1">konnten</td><td className="border p-1">konntet</td></tr>
                                    <tr><td className="border p-1 font-bold">müssen</td><td className="border p-1">musste</td><td className="border p-1">musstest</td><td className="border p-1">mussten</td><td className="border p-1">musstet</td></tr>
                                    <tr><td className="border p-1 font-bold">dürfen</td><td className="border p-1">durfte</td><td className="border p-1">durftest</td><td className="border p-1">durften</td><td className="border p-1">durftet</td></tr>
                                    <tr><td className="border p-1 font-bold">wollen</td><td className="border p-1">wollte</td><td className="border p-1">wolltest</td><td className="border p-1">wollten</td><td className="border p-1">wolltet</td></tr>
                                    <tr><td className="border p-1 font-bold">sollen</td><td className="border p-1">sollte</td><td className="border p-1">solltest</td><td className="border p-1">sollten</td><td className="border p-1">solltet</td></tr>
                                    <tr><td className="border p-1 font-bold">mögen</td><td className="border p-1">mochte</td><td className="border p-1">mochtest</td><td className="border p-1">mochten</td><td className="border p-1">mochtet</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            </Unravel>

                            <Unravel 
                              id="modal-conditional-table" 
                              title="Conditional (Konjunktiv II) Table" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="overflow-x-auto">
                                <table className="w-full text-[10px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-100">
                                      <th className="border p-1 text-left">Verb</th>
                                      <th className="border p-1">ich / er / sie / es</th>
                                      <th className="border p-1">du</th>
                                      <th className="border p-1">wir / sie / Sie</th>
                                      <th className="border p-1">ihr</th>
                                    </tr>
                                  </thead>
                                  <tbody className="font-mono">
                                    <tr><td className="border p-1 font-bold">können</td><td className="border p-1">könnte</td><td className="border p-1">könntest</td><td className="border p-1">könnten</td><td className="border p-1">könntet</td></tr>
                                    <tr><td className="border p-1 font-bold">müssen</td><td className="border p-1">müsste</td><td className="border p-1">müsstest</td><td className="border p-1">müssten</td><td className="border p-1">müsstet</td></tr>
                                    <tr><td className="border p-1 font-bold">dürfen</td><td className="border p-1">dürfte</td><td className="border p-1">dürftest</td><td className="border p-1">dürften</td><td className="border p-1">dürftet</td></tr>
                                    <tr><td className="border p-1 font-bold">wollen</td><td className="border p-1">wollte</td><td className="border p-1">wolltest</td><td className="border p-1">wollten</td><td className="border p-1">wolltet</td></tr>
                                    <tr><td className="border p-1 font-bold">sollen</td><td className="border p-1">sollte</td><td className="border p-1">solltest</td><td className="border p-1">sollten</td><td className="border p-1">solltet</td></tr>
                                    <tr><td className="border p-1 font-bold">mögen</td><td className="border p-1">möchte</td><td className="border p-1">möchtest</td><td className="border p-1">möchten</td><td className="border p-1">möchtet</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'modal-present' && (
                          <>
                            <p>Modal verbs change their vowel in the singular (except 'sollen') and have NO ending in the 'ich' and 'er/sie/es' forms.</p>
                            <Unravel 
                              id="modal-present-table" 
                              title="Modal Verb Tables (Present)" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="overflow-x-auto">
                                <table className="w-full text-[10px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-100">
                                      <th className="border p-1">Verb</th>
                                      <th className="border p-1">ich / er / sie / es</th>
                                      <th className="border p-1">du</th>
                                      <th className="border p-1">wir / sie / Sie</th>
                                      <th className="border p-1">ihr</th>
                                    </tr>
                                  </thead>
                                  <tbody className="font-mono">
                                    <tr><td className="border p-1 font-bold">können</td><td className="border p-1">kann</td><td className="border p-1">kannst</td><td className="border p-1">können</td><td className="border p-1">könnt</td></tr>
                                    <tr><td className="border p-1 font-bold">müssen</td><td className="border p-1">muss</td><td className="border p-1">musst</td><td className="border p-1">müssen</td><td className="border p-1">müsst</td></tr>
                                    <tr><td className="border p-1 font-bold">dürfen</td><td className="border p-1">darf</td><td className="border p-1">darfst</td><td className="border p-1">dürfen</td><td className="border p-1">dürft</td></tr>
                                    <tr><td className="border p-1 font-bold">wollen</td><td className="border p-1">will</td><td className="border p-1">willst</td><td className="border p-1">wollen</td><td className="border p-1">wollt</td></tr>
                                    <tr><td className="border p-1 font-bold">sollen</td><td className="border p-1">soll</td><td className="border p-1">sollst</td><td className="border p-1">sollen</td><td className="border p-1">sollt</td></tr>
                                    <tr><td className="border p-1 font-bold">mögen</td><td className="border p-1">mag</td><td className="border p-1">magst</td><td className="border p-1">mögen</td><td className="border p-1">mögt</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'modal-imperfect' && (
                          <>
                            <p>In the imperfect (Präteritum), modal verbs lose their umlaut and add the endings: -te, -test, -te, -ten, -tet, -ten.</p>
                            <Unravel 
                              id="modal-imperfect-table" 
                              title="Modal Verb Tables (Imperfect)" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="overflow-x-auto">
                                <table className="w-full text-[10px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-100">
                                      <th className="border p-1">Verb</th>
                                      <th className="border p-1">ich / er / sie / es</th>
                                      <th className="border p-1">du</th>
                                      <th className="border p-1">wir / sie / Sie</th>
                                      <th className="border p-1">ihr</th>
                                    </tr>
                                  </thead>
                                  <tbody className="font-mono">
                                    <tr><td className="border p-1 font-bold">können</td><td className="border p-1">konnte</td><td className="border p-1">konntest</td><td className="border p-1">konnten</td><td className="border p-1">konntet</td></tr>
                                    <tr><td className="border p-1 font-bold">müssen</td><td className="border p-1">musste</td><td className="border p-1">musstest</td><td className="border p-1">mussten</td><td className="border p-1">musstet</td></tr>
                                    <tr><td className="border p-1 font-bold">dürfen</td><td className="border p-1">durfte</td><td className="border p-1">durftest</td><td className="border p-1">durften</td><td className="border p-1">durftet</td></tr>
                                    <tr><td className="border p-1 font-bold">wollen</td><td className="border p-1">wollte</td><td className="border p-1">wolltest</td><td className="border p-1">wollten</td><td className="border p-1">wolltet</td></tr>
                                    <tr><td className="border p-1 font-bold">sollen</td><td className="border p-1">sollte</td><td className="border p-1">solltest</td><td className="border p-1">sollten</td><td className="border p-1">solltet</td></tr>
                                    <tr><td className="border p-1 font-bold">mögen</td><td className="border p-1">mochte</td><td className="border p-1">mochtest</td><td className="border p-1">mochten</td><td className="border p-1">mochtet</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'modal-conditional' && (
                          <>
                            <p>The Konjunktiv II (Conditional) of modal verbs is formed from the imperfect form + umlaut (except 'sollen' and 'wollen').</p>
                            <Unravel 
                              id="modal-conditional-table" 
                              title="Modal Verb Tables (Conditional)" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="overflow-x-auto">
                                <table className="w-full text-[10px] border-collapse">
                                  <thead>
                                    <tr className="bg-slate-100">
                                      <th className="border p-1">Verb</th>
                                      <th className="border p-1">ich / er / sie / es</th>
                                      <th className="border p-1">du</th>
                                      <th className="border p-1">wir / sie / Sie</th>
                                      <th className="border p-1">ihr</th>
                                    </tr>
                                  </thead>
                                  <tbody className="font-mono">
                                    <tr><td className="border p-1 font-bold">können</td><td className="border p-1">könnte</td><td className="border p-1">könntest</td><td className="border p-1">könnten</td><td className="border p-1">könntet</td></tr>
                                    <tr><td className="border p-1 font-bold">müssen</td><td className="border p-1">müsste</td><td className="border p-1">müsstest</td><td className="border p-1">müssten</td><td className="border p-1">müsstet</td></tr>
                                    <tr><td className="border p-1 font-bold">dürfen</td><td className="border p-1">dürfte</td><td className="border p-1">dürftest</td><td className="border p-1">dürften</td><td className="border p-1">dürftet</td></tr>
                                    <tr><td className="border p-1 font-bold">mögen</td><td className="border p-1">möchte</td><td className="border p-1">möchtest</td><td className="border p-1">möchten</td><td className="border p-1">möchtet</td></tr>
                                    <tr><td className="border p-1 font-bold">wollen</td><td className="border p-1">wollte</td><td className="border p-1">wolltest</td><td className="border p-1">wollten</td><td className="border p-1">wolltet</td></tr>
                                    <tr><td className="border p-1 font-bold">sollen</td><td className="border p-1">sollte</td><td className="border p-1">solltest</td><td className="border p-1">sollten</td><td className="border p-1">solltet</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeCategory.id === 'sentence-structure' && activeSubunit.id !== 'aduso' && activeUnit.id !== 'subordinating-conjunctions' && activeUnit.id !== 'double-conjunctions' && activeUnit.id !== 'zu-infinitives' && (
                          <>
                            <p>The verb is ALWAYS the second idea! If you start with a time word or an opinion phrase, the verb must come next, followed by the subject (Inversion).</p>
                            <div className="mt-2 p-2 bg-slate-50 rounded italic text-xs">
                              "<span className="font-bold text-blue-500">Heute</span> <span className="font-bold text-rose-500">gehe</span> ich ins Kino."
                            </div>
                          </>
                        )}
                        {activeSubunit.id === 'aduso' && (
                          <>
                            <p>ADUSO words (Aber, Denn, Und, Sondern, Oder) are '0-words'. They don't count as a position, so the subject usually follows in Position 1 and the verb in Position 2.</p>
                            <div className="mt-2 p-2 bg-slate-50 rounded italic text-xs">
                              "Ich bin müde, <span className="font-bold">aber</span> ich arbeite." (Position 0, 1, 2)
                            </div>
                          </>
                        )}
                        {activeSubunit.id === 'ohne-anstatt' && (
                          <>
                            <p>The constructions <span className="font-bold">ohne... zu</span> (without ...ing) and <span className="font-bold">anstatt... zu</span> (instead of ...ing) are used to connect an action with a missing or alternative action. The "zu" always comes right before the infinitive at the very end of the clause.</p>
                            <Unravel 
                              id="ohne-anstatt-examples" 
                              title="Detailed Rules & More Examples" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-3 text-[10px]">
                                <div>
                                  <span className="font-bold block text-rose-600">Ohne... zu (Without ...ing):</span>
                                  <ul className="list-disc ml-4 italic">
                                    <li>"Er ging, <span className="font-bold">ohne</span> sich <span className="font-bold">zu</span> verabschieden." (He left without saying goodbye.)</li>
                                    <li>"Sie isst, <span className="font-bold">ohne</span> Hunger <span className="font-bold">zu</span> haben." (She eats without being hungry.)</li>
                                    <li>"Wir arbeiten, <span className="font-bold">ohne</span> eine Pause <span className="font-bold">zu</span> machen." (We work without taking a break.)</li>
                                  </ul>
                                </div>
                                <div>
                                  <span className="font-bold block text-blue-600">Anstatt... zu (Instead of ...ing):</span>
                                  <ul className="list-disc ml-4 italic">
                                    <li>"Er schläft, <span className="font-bold">anstatt zu</span> arbeiten." (He sleeps instead of working.)</li>
                                    <li>"Wir nehmen den Bus, <span className="font-bold">anstatt zu</span> laufen." (We take the bus instead of walking.)</li>
                                    <li>"Sie kauft ein neues Handy, <span className="font-bold">anstatt</span> das alte <span className="font-bold">zu</span> reparieren." (She buys a new phone instead of repairing the old one.)</li>
                                  </ul>
                                </div>
                                <div className="p-2 bg-amber-50 rounded border border-amber-100">
                                  <span className="font-bold">Important Rule:</span> These structures only work if the <span className="underline">subject</span> of both clauses is the same. 
                                  <br/>If the subjects are different, you must use <span className="font-bold">ohne dass</span> or <span className="font-bold">anstatt dass</span>.
                                  <br/><span className="italic">"Ich gehe, ohne dass du es merkst."</span> (I go without you noticing it.)
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'es-adj-zu' && (
                          <>
                            <p>Many adjectives can be followed by a 'zu' infinitive clause. This is very common with 'Es ist...' or 'Ich finde es...'. It allows you to describe an action as having a certain quality.</p>
                            <Unravel 
                              id="es-adj-examples" 
                              title="Adjective List & Examples" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2 text-[10px]">
                                <p><span className="font-bold">Structure:</span> Es ist + [Adjective] + (Objekt) + zu + Infinitiv.</p>
                                <ul className="grid grid-cols-2 gap-1 italic">
                                  <li>Es ist <span className="font-bold">wichtig</span>, ... zu lernen.</li>
                                  <li>Es ist <span className="font-bold">gesund</span>, ... zu essen.</li>
                                  <li>Es ist <span className="font-bold">schwierig</span>, ... zu verstehen.</li>
                                  <li>Es ist <span className="font-bold">verboten</span>, ... zu rauchen.</li>
                                  <li>Ich finde es <span className="font-bold">toll</span>, ... zu reisen.</li>
                                  <li>Ich finde es <span className="font-bold">anstrengend</span>, ... zu arbeiten.</li>
                                </ul>
                                <p className="mt-2 font-bold">More Examples:</p>
                                <ul className="list-disc ml-4 italic">
                                  <li>"Es ist <span className="font-bold">notwendig</span>, pünktlich zu sein." (It is necessary to be on time.)</li>
                                  <li>"Ich finde es <span className="font-bold">interessant</span>, neue Leute zu treffen." (I find it interesting to meet new people.)</li>
                                  <li>"Es ist <span className="font-bold">gefährlich</span>, hier zu schwimmen." (It is dangerous to swim here.)</li>
                                </ul>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'noun-zu' && (
                          <>
                            <p>Certain nouns often trigger a 'zu' infinitive clause. These usually express desire, time, a plan, or a feeling.</p>
                            <Unravel 
                              id="noun-zu-examples" 
                              title="Common Nouns & Examples" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2 text-[10px]">
                                <ul className="space-y-1">
                                  <li><span className="font-bold text-rose-600">Lust:</span> "Ich habe keine Lust, heute zu kochen." (I have no desire to cook today.)</li>
                                  <li><span className="font-bold text-blue-600">Zeit:</span> "Hast du Zeit, mir beim Umzug zu helfen?" (Do you have time to help me move?)</li>
                                  <li><span className="font-bold text-emerald-600">Angst:</span> "Er hat Angst, den Zug zu verpassen." (He is afraid of missing the train.)</li>
                                  <li><span className="font-bold text-purple-600">Plan:</span> "Wir haben den Plan, nach Japan zu reisen." (We have a plan to travel to Japan.)</li>
                                  <li><span className="font-bold">Absicht:</span> "Ich habe die Absicht, mehr Sport zu treiben." (I have the intention to do more sport.)</li>
                                  <li><span className="font-bold">Traum:</span> "Sie hat den Traum, Sängerin zu werden." (She has the dream of becoming a singer.)</li>
                                  <li><span className="font-bold">Möglichkeit:</span> "Wir haben die Möglichkeit, hier zu arbeiten." (We have the opportunity to work here.)</li>
                                </ul>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'verb-zu' && (
                          <>
                            <p>Some verbs are followed by another verb in the 'zu' infinitive form. These verbs often express an intention, a try, a start/stop, or a suggestion.</p>
                            <Unravel 
                              id="verb-zu-examples" 
                              title="Verb List & Examples" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2 text-[10px]">
                                <ul className="space-y-1">
                                  <li><span className="font-bold text-rose-600">Versuchen:</span> "Ich versuche, die Tür zu öffnen." (I try to open the door.)</li>
                                  <li><span className="font-bold text-blue-600">Aufhören:</span> "Er hört auf, Fleisch zu essen." (He stops eating meat.)</li>
                                  <li><span className="font-bold text-emerald-600">Anfangen:</span> "Wir fangen an, das Buch zu lesen." (We start reading the book.)</li>
                                  <li><span className="font-bold text-purple-600">Vorhaben:</span> "Ich habe vor, dich morgen zu besuchen." (I intend to visit you tomorrow.)</li>
                                  <li><span className="font-bold">Planen:</span> "Sie plant, ein Haus zu bauen." (She plans to build a house.)</li>
                                  <li><span className="font-bold">Vorschlagen:</span> "Er schlägt vor, ins Kino zu gehen." (He suggests going to the cinema.)</li>
                                  <li><span className="font-bold">Vergessen:</span> "Ich habe vergessen, dich anzurufen." (I forgot to call you.)</li>
                                  <li><span className="font-bold">Versprechen:</span> "Er verspricht, pünktlich zu sein." (He promises to be on time.)</li>
                                </ul>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeCategory.id === 'adjectives' && (
                          <>
                            <p>Adjective endings in German depend on three things: the <span className="font-bold">gender</span> (Masc, Fem, Neut), the <span className="font-bold">case</span> (Nom, Acc, Dat, Gen), and the <span className="font-bold text-purple-600">type of article</span> preceding the adjective.</p>
                            <Unravel 
                              id="weak-declension" 
                              title="Weak Declension (After Definite Articles)" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <p className="text-[10px]">Used after <span className="font-bold">der, die, das, dieser, jener, jeder, welcher</span>. The endings are very simple: mostly <span className="font-bold">-e</span> or <span className="font-bold">-en</span>.</p>
                                <div className="overflow-x-auto">
                                  <table className="w-full text-[10px] border-collapse">
                                    <thead>
                                      <tr className="bg-slate-100">
                                        <th className="border p-1">Case</th>
                                        <th className="border p-1">Masc</th>
                                        <th className="border p-1">Fem</th>
                                        <th className="border p-1">Neut</th>
                                        <th className="border p-1">Plur</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border p-1 font-bold">Nom</td><td className="border p-1">-e</td><td className="border p-1">-e</td><td className="border p-1">-e</td><td className="border p-1">-en</td></tr>
                                      <tr><td className="border p-1 font-bold">Acc</td><td className="border p-1 text-rose-600 font-bold">-en</td><td className="border p-1">-e</td><td className="border p-1">-e</td><td className="border p-1">-en</td></tr>
                                      <tr><td className="border p-1 font-bold">Dat</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td></tr>
                                      <tr><td className="border p-1 font-bold">Gen</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Unravel>
                            <Unravel 
                              id="mixed-declension" 
                              title="Mixed Declension (After Indefinite Articles)" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <p className="text-[10px]">Used after <span className="font-bold">ein, mein, dein, sein, kein</span>, etc. In the Nominative and Accusative, the adjective takes the ending of the definite article (der → -er, das → -es).</p>
                                <div className="overflow-x-auto">
                                  <table className="w-full text-[10px] border-collapse">
                                    <thead>
                                      <tr className="bg-slate-100">
                                        <th className="border p-1">Case</th>
                                        <th className="border p-1">Masc</th>
                                        <th className="border p-1">Fem</th>
                                        <th className="border p-1">Neut</th>
                                        <th className="border p-1">Plur (keine)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border p-1 font-bold">Nom</td><td className="border p-1 text-blue-600 font-bold">-er</td><td className="border p-1">-e</td><td className="border p-1 text-blue-600 font-bold">-es</td><td className="border p-1">-en</td></tr>
                                      <tr><td className="border p-1 font-bold">Acc</td><td className="border p-1">-en</td><td className="border p-1">-e</td><td className="border p-1 text-blue-600 font-bold">-es</td><td className="border p-1">-en</td></tr>
                                      <tr><td className="border p-1 font-bold">Dat</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td></tr>
                                      <tr><td className="border p-1 font-bold">Gen</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td><td className="border p-1">-en</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Unravel>
                            <Unravel 
                              id="strong-declension" 
                              title="Strong Declension (No Article)" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2">
                                <p className="text-[10px]">Used when there is <span className="font-bold">no article</span>. The adjective itself must show the gender and case by taking the ending of the definite article (except Genitive Masculine/Neuter).</p>
                                <div className="overflow-x-auto">
                                  <table className="w-full text-[10px] border-collapse">
                                    <thead>
                                      <tr className="bg-slate-100">
                                        <th className="border p-1">Case</th>
                                        <th className="border p-1">Masc</th>
                                        <th className="border p-1">Fem</th>
                                        <th className="border p-1">Neut</th>
                                        <th className="border p-1">Plur</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border p-1 font-bold">Nom</td><td className="border p-1">-er</td><td className="border p-1">-e</td><td className="border p-1">-es</td><td className="border p-1">-e</td></tr>
                                      <tr><td className="border p-1 font-bold">Acc</td><td className="border p-1">-en</td><td className="border p-1">-e</td><td className="border p-1">-es</td><td className="border p-1">-e</td></tr>
                                      <tr><td className="border p-1 font-bold">Dat</td><td className="border p-1">-em</td><td className="border p-1">-er</td><td className="border p-1">-em</td><td className="border p-1">-en</td></tr>
                                      <tr><td className="border p-1 font-bold">Gen</td><td className="border p-1">-en</td><td className="border p-1">-er</td><td className="border p-1">-en</td><td className="border p-1">-er</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'comparative' && (
                          <>
                            <p>The comparative is used to compare two things. Add <span className="text-rose-500 font-bold">-er</span> to the adjective.</p>
                            <Unravel 
                              id="comparative-rules" 
                              title="Comparative Rules" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-2 text-[10px]">
                                <li><span className="font-bold">Regular:</span> Add -er. <br/><span className="italic">"schnell → schneller"</span></li>
                                <li><span className="font-bold">Umlaut:</span> Short adjectives (a, o, u) often get an umlaut. <br/><span className="italic">"alt → älter", "groß → größer"</span></li>
                                <li><span className="font-bold">Irregular:</span> <br/>gut → besser <br/>viel → mehr <br/>gern → lieber</li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'superlative' && (
                          <>
                            <p>The superlative expresses the highest degree. Use <span className="text-blue-500 font-bold">am ... -sten</span>.</p>
                            <Unravel 
                              id="superlative-rules" 
                              title="Superlative Rules" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-2 text-[10px]">
                                <li><span className="font-bold">Regular:</span> Use am ... -sten. <br/><span className="italic">"schnell → am schnellsten"</span></li>
                                <li><span className="font-bold">Umlaut:</span> Short adjectives (a, o, u) often get an umlaut. <br/><span className="italic">"alt → am ältesten", "groß → am größten"</span></li>
                                <li><span className="font-bold">Irregular:</span> <br/>gut → am besten <br/>viel → am meisten <br/>gern → am liebsten</li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'subordinating-conjunctions' && (
                          <>
                            <p>In subordinating clauses (weil, da, dass), the conjugated verb kicks to the very end! If the subordinate clause starts the sentence, the main clause must start with the verb (Verb-Verb sandwich).</p>
                            <div className="mt-2 p-2 bg-slate-50 rounded italic text-xs">
                              "Ich bleibe hier, weil es <span className="font-bold text-rose-500">regnet</span>."
                            </div>
                          </>
                        )}
                        {activeUnit.id === 'double-conjunctions' && (
                          <>
                            <p>Double conjunctions connect two parts of a sentence. Some like 'je... desto...' trigger a special word order (verb at the end in the 'je' clause, verb in position 1 in the 'desto' clause).</p>
                            <Unravel 
                              id="double-conj-examples" 
                              title="Examples & Rules" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-2 text-[10px]">
                                <li><span className="font-bold">Sowohl... als auch:</span> Both... and. <br/><span className="italic">"Ich mag sowohl Tee als auch Kaffee."</span></li>
                                <li><span className="font-bold">Weder... noch:</span> Neither... nor. <br/><span className="italic">"Er spricht weder Englisch noch Deutsch."</span></li>
                                <li><span className="font-bold">Entweder... oder:</span> Either... or. <br/><span className="italic">"Entweder wir gehen jetzt oder wir bleiben hier."</span></li>
                                <li><span className="font-bold">Nicht nur... sondern auch:</span> Not only... but also. <br/><span className="italic">"Sie ist nicht nur klug, sondern auch sehr nett."</span></li>
                                <li><span className="font-bold">Je... desto:</span> The... the. (Verb at end in 'je', verb in pos 1 in 'desto'). <br/><span className="italic">"Je mehr ich lerne, desto besser werde ich."</span></li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeSubunit.id === 'um-zu' && (
                          <>
                            <p>The 'um... zu...' structure expresses purpose. The 'zu' comes right before the infinitive verb at the end.</p>
                            <div className="mt-2 p-2 bg-slate-50 rounded italic text-xs">
                              "Ich lerne Deutsch, <span className="font-bold">um</span> in Deutschland <span className="font-bold">zu</span> arbeiten."
                            </div>
                          </>
                        )}
                        {activeUnit.id === 'nominative' && (
                          <>
                            <p>The Nominative case is for the subject of the sentence (the person or thing doing the action). Articles: der, die, das, die (pl.).</p>
                          </>
                        )}
                        {activeUnit.id === 'accusative-case' && (
                          <>
                            <p>The Accusative case is for the direct object. Only masculine articles change: der → den, ein → einen. Feminine, neuter, and plural stay the same.</p>
                          </>
                        )}
                        {activeUnit.id === 'dative-case' && (
                          <>
                            <p>The Dative case is for the indirect object. Articles change: der/das → dem, die → der, die (pl.) → den + n at the end of the noun. Pronouns: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.</p>
                            <Unravel 
                              id="dative-verbs-rules" 
                              title="Verbs that always take the Dative" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2 text-[10px]">
                                <p>Some verbs <strong>always</strong> take the Dative case, even if there is no direct object. Common ones include: <strong>helfen</strong> (to help), <strong>danken</strong> (to thank), <strong>gefallen</strong> (to please/like), <strong>gehören</strong> (to belong to), <strong>gratulieren</strong> (to congratulate).</p>
                                <ul className="space-y-1 mt-2 list-disc pl-4">
                                  <li>Ich <strong>helfe</strong> <em>dem</em> Mann. (I help the man.)</li>
                                  <li>Wir <strong>danken</strong> <em>dir</em>. (We thank you.)</li>
                                  <li>Das Auto <strong>gehört</strong> <em>meinem</em> Vater. (The car belongs to my father.)</li>
                                  <li>Das Buch <strong>gefällt</strong> <em>mir</em>. (I like the book / The book pleases me.)</li>
                                  <li>Sie <strong>gratuliert</strong> <em>ihrer</em> Schwester. (She congratulates her sister.)</li>
                                </ul>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'genitive-case' && (
                          <>
                            <p>The Genitive case shows possession. It is the "of" case.</p>
                            <Unravel 
                              id="genitive-rules" 
                              title="Genitive Rules & Word Order" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-2 text-[10px]">
                                <p><strong>Articles:</strong> der/das → des, die/die(pl) → der.</p>
                                <p><strong>Noun Endings:</strong> Masculine and neuter nouns get an <strong>-s</strong> or <strong>-es</strong> at the end (e.g., des Mann<strong>es</strong>, des Auto<strong>s</strong>).</p>
                                <p><strong>Word Order:</strong> In German, the possessed object comes first, followed by the owner. For example, "my sister's car" or "the car of my sister" is translated as:</p>
                                <p className="italic text-center font-bold">das Auto meiner Schwester</p>
                              </div>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'acc-preps' && (
                          <>
                            <p>These prepositions ALWAYS take the <span className="font-bold text-rose-500">Accusative</span> case, regardless of movement or location.</p>
                            <Unravel 
                              id="acc-preps-rules" 
                              title="Accusative Prepositions List" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-2 text-[10px]">
                                <li><span className="font-bold">durch</span> (through)</li>
                                <li><span className="font-bold">für</span> (for)</li>
                                <li><span className="font-bold">gegen</span> (against)</li>
                                <li><span className="font-bold">ohne</span> (without)</li>
                                <li><span className="font-bold">um</span> (around / at [time])</li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'dat-preps' && (
                          <>
                            <p>These prepositions ALWAYS take the <span className="font-bold text-blue-500">Dative</span> case, regardless of movement or location.</p>
                            <Unravel 
                              id="dat-preps-rules" 
                              title="Dative Prepositions List" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-2 text-[10px]">
                                <li><span className="font-bold">aus</span> (out of / from)</li>
                                <li><span className="font-bold">außer</span> (except for)</li>
                                <li><span className="font-bold">bei</span> (at / near / with)</li>
                                <li><span className="font-bold">mit</span> (with)</li>
                                <li><span className="font-bold">nach</span> (after / to [cities/countries])</li>
                                <li><span className="font-bold">seit</span> (since / for [time])</li>
                                <li><span className="font-bold">von</span> (from / by)</li>
                                <li><span className="font-bold">zu</span> (to)</li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'two-way-preps' && (
                          <>
                            <p>Two-way prepositions take the <span className="font-bold text-blue-500">Dative</span> if you are describing a LOCATION (Wo? - static) and the <span className="font-bold text-rose-500">Accusative</span> if you are describing a DIRECTION or MOVEMENT towards a destination (Wohin?).</p>
                            <Unravel 
                              id="two-way-preps-rules" 
                              title="Two-Way Prepositions List" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-2 text-[10px]">
                                <li><span className="font-bold">The 9 Prepositions:</span> an, auf, hinter, in, neben, über, unter, vor, zwischen.</li>
                                <li><span className="font-bold">Dative (Wo?):</span> "Ich bin <span className="text-blue-500">in dem (im)</span> Kino." (I am in the cinema - static location).</li>
                                <li><span className="font-bold">Accusative (Wohin?):</span> "Ich gehe <span className="text-rose-500">in das (ins)</span> Kino." (I am going into the cinema - movement to a destination).</li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeUnit.id === 'gen-preps' && (
                          <>
                            <p>These prepositions take the <span className="font-bold text-emerald-600">Genitive</span> case.</p>
                            <Unravel 
                              id="gen-preps-rules" 
                              title="Genitive Prepositions List" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <ul className="space-y-2 text-[10px]">
                                <li><span className="font-bold">während</span> (during)</li>
                                <li><span className="font-bold">wegen</span> (because of)</li>
                                <li><span className="font-bold">trotz</span> (despite)</li>
                                <li><span className="font-bold">(an)statt</span> (instead of)</li>
                              </ul>
                            </Unravel>
                          </>
                        )}
                        {activeCategory.id === 'cases' && activeUnit.id === 'mixed-cases-unit' && (
                          <>
                            <p>Test your knowledge of all four cases! Remember to identify the role of the noun (Subject, Direct Object, Indirect Object, or Possession) and its gender.</p>
                          </>
                        )}
                        {activeCategory.id === 'cases' && (
                          <>
                            <p>German has four cases. The case depends on the role of the noun in the sentence.</p>
                            <Unravel 
                              id="article-declension" 
                              title="Article Declension Table" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <div className="space-y-4">
                                <div>
                                  <p className="font-bold text-[10px] mb-1">Definite Articles (der, die, das)</p>
                                  <table className="w-full text-[9px] border-collapse">
                                    <thead>
                                      <tr className="bg-slate-100">
                                        <th className="border p-1">Case</th><th className="border p-1">Masc</th><th className="border p-1">Fem</th><th className="border p-1">Neut</th><th className="border p-1">Plural</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border p-1 font-bold">Nom</td><td className="border p-1">der</td><td className="border p-1">die</td><td className="border p-1">das</td><td className="border p-1">die</td></tr>
                                      <tr><td className="border p-1 font-bold">Acc</td><td className="border p-1 text-rose-500 font-bold">den</td><td className="border p-1">die</td><td className="border p-1">das</td><td className="border p-1">die</td></tr>
                                      <tr><td className="border p-1 font-bold">Dat</td><td className="border p-1">dem</td><td className="border p-1">der</td><td className="border p-1">dem</td><td className="border p-1">den (+n)</td></tr>
                                      <tr><td className="border p-1 font-bold">Gen</td><td className="border p-1">des (+s)</td><td className="border p-1">der</td><td className="border p-1">des (+s)</td><td className="border p-1">der</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div>
                                  <p className="font-bold text-[10px] mb-1">Indefinite Articles (ein, eine, ein)</p>
                                  <table className="w-full text-[9px] border-collapse">
                                    <thead>
                                      <tr className="bg-slate-100">
                                        <th className="border p-1">Case</th><th className="border p-1">Masc</th><th className="border p-1">Fem</th><th className="border p-1">Neut</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr><td className="border p-1 font-bold">Nom</td><td className="border p-1">ein</td><td className="border p-1">eine</td><td className="border p-1">ein</td></tr>
                                      <tr><td className="border p-1 font-bold">Acc</td><td className="border p-1 text-rose-500 font-bold">einen</td><td className="border p-1">eine</td><td className="border p-1">ein</td></tr>
                                      <tr><td className="border p-1 font-bold">Dat</td><td className="border p-1">einem</td><td className="border p-1">einer</td><td className="border p-1">einem</td></tr>
                                      <tr><td className="border p-1 font-bold">Gen</td><td className="border p-1">eines (+s)</td><td className="border p-1">einer</td><td className="border p-1">eines (+s)</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Unravel>
                            <Unravel 
                              id="pronoun-declension" 
                              title="Personal Pronouns Table" 
                              activeId={activeUnravelId} 
                              setActiveId={setActiveUnravelId}
                            >
                              <table className="w-full text-[9px] border-collapse">
                                <thead>
                                  <tr className="bg-slate-100">
                                    <th className="border p-1">Nom</th><th className="border p-1">Acc</th><th className="border p-1">Dat</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr><td className="border p-1">ich</td><td className="border p-1">mich</td><td className="border p-1">mir</td></tr>
                                  <tr><td className="border p-1">du</td><td className="border p-1">dich</td><td className="border p-1">dir</td></tr>
                                  <tr><td className="border p-1">er / sie / es</td><td className="border p-1">ihn / sie / es</td><td className="border p-1">ihm / ihr / ihm</td></tr>
                                  <tr><td className="border p-1">wir</td><td className="border p-1">uns</td><td className="border p-1">uns</td></tr>
                                  <tr><td className="border p-1">ihr</td><td className="border p-1">euch</td><td className="border p-1">euch</td></tr>
                                  <tr><td className="border p-1">sie / Sie</td><td className="border p-1">sie / Sie</td><td className="border p-1">ihnen / Ihnen</td></tr>
                                </tbody>
                              </table>
                            </Unravel>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Task Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {activeSubunit.tasks.map((task, idx) => (
                <button
                  key={task.id}
                  onClick={() => setActiveTask(task)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeTask.id === task.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-text-muted border border-border-main hover:border-primary/50'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    activeTask.id === task.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {idx + 1}
                  </span>
                  {task.title}
                  {completedTasks.has(task.id) && <CheckCircle2 size={14} />}
                </button>
              ))}
            </div>

            {/* Task Content */}
            <div className="space-y-4 mb-12">
              {activeTask.items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="card card-hover flex flex-col gap-3"
                >
                  {item.prefix && (
                    <div className="text-sm text-text-muted italic bg-slate-50 p-2 rounded border-l-4 border-slate-200">
                      {item.prefix}
                    </div>
                  )}
                  
                  {activeTask.type === 'reorder' ? (
                    <div className="space-y-4">
                      <div className="text-sm font-medium text-text-muted flex items-center gap-2">
                        <BookOpen size={14} className="text-primary" />
                        {item.sentence}
                      </div>
                      
                      <div className="min-h-[3rem] p-3 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-wrap gap-2 items-center">
                        <span className="text-slate-400 font-mono text-sm w-6">{idx + 1}.</span>
                        {(userAnswers[item.id] || []).map((wordIdx) => (
                          <motion.button
                            layoutId={`${item.id}-${wordIdx}`}
                            key={wordIdx}
                            onClick={() => toggleWord(item.id, Number(wordIdx))}
                            disabled={isChecking}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-all ${
                              isChecking
                                ? results[item.id]?.[0]
                                  ? 'bg-success-main text-white'
                                  : 'bg-error-main text-white'
                                : 'bg-primary text-white hover:bg-primary-dark'
                            }`}
                          >
                            {item.scrambled![Number(wordIdx)]}
                          </motion.button>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.scrambled!.map((word, wordIdx) => {
                          const isSelected = (userAnswers[item.id] || []).includes(String(wordIdx));
                          if (isSelected) return null;
                          return (
                            <motion.button
                              layoutId={`${item.id}-${wordIdx}`}
                              key={wordIdx}
                              onClick={() => toggleWord(item.id, wordIdx)}
                              disabled={isChecking}
                              className="px-3 py-1.5 bg-white border border-border-main rounded-lg text-sm font-medium text-text-main hover:border-primary hover:text-primary transition-all shadow-sm"
                            >
                              {word}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-lg flex flex-wrap items-center gap-x-2 gap-y-3">
                      <span className="text-slate-400 font-mono text-sm w-6">{idx + 1}.</span>
                      {item.sentence.split('[blank]').map((part, i, arr) => (
                        <span key={i} className="flex items-center gap-2">
                          {part}
                          {i < arr.length - 1 && (
                            <input
                              type="text"
                              value={userAnswers[item.id]?.[i] || ''}
                              onChange={(e) => handleInputChange(item.id, i, e.target.value)}
                              disabled={isChecking && results[item.id]?.[i]}
                              className={`input-field ${
                                isChecking 
                                  ? results[item.id]?.[i] 
                                    ? 'input-correct' 
                                    : 'input-incorrect'
                                  : ''
                              }`}
                              placeholder="..."
                            />
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  {isChecking && results[item.id]?.some(r => !r) && item.hint && (
                    <div className="text-xs text-primary flex items-center gap-1 mt-1">
                      <Lightbulb size={12} />
                      Hint: {item.hint}
                    </div>
                  )}
                  {isChecking && activeTask.type === 'reorder' && !results[item.id]?.[0] && (
                    <div className="text-xs text-success-main font-medium mt-1">
                      Correct: {item.answers[0].split('|')[0]}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 sticky bottom-6 bg-bg-main/80 backdrop-blur-sm py-4 border-t border-border-main">
              <button 
                onClick={checkAnswers}
                className="btn-primary flex items-center gap-2 py-3 px-8 shadow-lg shadow-primary/20"
              >
                <CheckCircle2 size={18} />
                Check Answers
              </button>
              <button 
                onClick={resetTask}
                className="btn-secondary flex items-center gap-2 py-3 px-6"
              >
                <RotateCcw size={18} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
