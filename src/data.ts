export interface TaskItem {
  id: string;
  sentence: string; // Use [blank] for input areas
  answers: string[];
  hint?: string;
  prefix?: string;
  suffix?: string;
  scrambled?: string[]; // For reorder tasks
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'fill-in' | 'transform' | 'challenge' | 'reorder';
  items: TaskItem[];
}

export interface Subunit {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Unit {
  id: string;
  title: string;
  subunits: Subunit[];
}

export interface Category {
  id: string;
  title: string;
  units: Unit[];
}

export const GRAMMAR_DATA: Category[] = [
  {
    id: 'tenses',
    title: 'Tenses',
    units: [
      {
        id: 'present',
        title: 'Present Tense',
    subunits: [
      {
        id: 'regular',
        title: 'Regular Verbs',
        tasks: [
          {
            id: 'reg-t1',
            title: 'The Conjugator',
            description: 'Fill in the correct form of the regular verbs in brackets.',
            type: 'fill-in',
            items: [
              { id: '1', sentence: 'Ich [blank] (spielen) jeden Tag Tennis.', answers: ['spiele'] },
              { id: '2', sentence: 'Wir [blank] (gehen) morgen zu Fuß in die Schule.', answers: ['gehen'] },
              { id: '3', sentence: 'Peter [blank] (trinken) abends nur Orangensaft.', answers: ['trinkt'] },
              { id: '4', sentence: 'Max und Anne [blank] (schreiben) einen Brief.', answers: ['schreiben'] },
              { id: '5', sentence: 'Was [blank] (kaufen) du heute in der Stadt, Mutti?', answers: ['kaufst'] },
              { id: '6', sentence: 'Am Wochenende [blank] (hören) ich sehr viel Radio.', answers: ['höre'] },
              { id: '7', sentence: '[blank] (Singen) Sie gut, Herr Schmidt?', answers: ['Singen'] },
              { id: '8', sentence: 'Was [blank] (suchen) ihr denn, Kinder?', answers: ['sucht'] },
              { id: '9', sentence: 'Der kleine Georg [blank] (machen) immer sein eigenes Bett.', answers: ['macht'] },
              { id: '10', sentence: 'Frau Braun [blank] (holen) die Brötchen.', answers: ['holt'] },
            ]
          },
          {
            id: 'reg-t2',
            title: 'Sentence Completion',
            description: 'Change the subject and complete the sentence with the correct verb form.',
            type: 'transform',
            items: [
              { id: 't1', prefix: 'Ich fotografiere viel im Sommer.', sentence: 'Er [blank].', answers: ['fotografiert viel im Sommer'] },
              { id: 't2', prefix: 'Erika besucht oft London.', sentence: 'Holger und Simone [blank].', answers: ['besuchen oft London'] },
              { id: 't3', prefix: 'Thomas und Susanne sagen nicht viel.', sentence: 'Dein neuer Freund [blank].', answers: ['sagt nicht viel'] },
              { id: 't4', prefix: 'Wir lernen Englisch seit vier Jahren.', sentence: 'Mein Bruder [blank].', answers: ['lernt Englisch seit vier Jahren'] },
              { id: 't5', prefix: 'Ich schwimme nicht sehr oft.', sentence: 'Du [blank].', answers: ['schwimmst nicht sehr oft'] },
              { id: 't6', prefix: 'Er versteht das nicht.', sentence: 'Ich [blank].', answers: ['verstehe das nicht'] },
              { id: 't7', prefix: 'Kennen Sie meinen Onkel?', sentence: '[blank] du [blank]?', answers: ['Kennst', 'meinen Onkel'] },
              { id: 't8', prefix: 'Das Auto gehört mir.', sentence: 'Die Bücher [blank].', answers: ['gehören mir'] },
              { id: 't9', prefix: 'Katja joggt jeden Morgen.', sentence: 'Wir [blank].', answers: ['joggen jeden Morgen'] },
              { id: 't10', prefix: 'Wir bleiben dieses Jahr zu Hause.', sentence: 'Sabine [blank].', answers: ['bleibt dieses Jahr zu Hause'] },
            ]
          },
          {
            id: 'reg-t3',
            title: 'Error Detective',
            description: 'Find and fix the conjugation errors in these sentences.',
            type: 'challenge',
            items: [
              { id: 'e1', prefix: 'Wir spielt Fußball.', sentence: 'Wir [blank] Fußball.', answers: ['spielen'] },
              { id: 'e2', prefix: 'Du mache Hausaufgaben.', sentence: 'Du [blank] Hausaufgaben.', answers: ['machst'] },
              { id: 'e3', prefix: 'Er trinken Wasser.', sentence: 'Er [blank] Wasser.', answers: ['trinkt'] },
              { id: 'e4', prefix: 'Ich gehen nach Hause.', sentence: 'Ich [blank] nach Hause.', answers: ['gehe'] },
              { id: 'e5', prefix: 'Sie (pl.) singt ein Lied.', sentence: 'Sie [blank] ein Lied.', answers: ['singen'] },
              { id: 'e6', prefix: 'Ihr lerne Deutsch.', sentence: 'Ihr [blank] Deutsch.', answers: ['lernt'] },
              { id: 'e7', prefix: 'Das Kind spielen im Garten.', sentence: 'Das Kind [blank] im Garten.', answers: ['spielt'] },
              { id: 'e8', prefix: 'Wir kaufst ein Auto.', sentence: 'Wir [blank] ein Auto.', answers: ['kaufen'] },
              { id: 'e9', prefix: 'Du trinkt Milch.', sentence: 'Du [blank] Milch.', answers: ['trinkst'] },
              { id: 'e10', prefix: 'Er wohnen in Berlin.', sentence: 'Er [blank] in Berlin.', answers: ['wohnt'] },
            ]
          }
        ]
      },
      {
        id: 'irregular',
        title: 'Irregular Verbs',
        tasks: [
          {
            id: 'irreg-t1',
            title: 'Vowel Changes',
            description: 'Watch out for vowel changes (e -> i, e -> ie, a -> ä).',
            type: 'fill-in',
            items: [
              { id: 'i1', sentence: 'Petra [blank] (nehmen) immer den Zug.', answers: ['nimmt'] },
              { id: 'i2', sentence: 'Holger, was [blank] (essen) du da?', answers: ['isst'] },
              { id: 'i3', sentence: 'Marion [blank] (lesen) heute einen spannenden Roman.', answers: ['liest'] },
              { id: 'i4', sentence: 'Wo [blank] (sein) du genau im Moment, Sarah?', answers: ['bist'] },
              { id: 'i5', sentence: 'Sigurd [blank] (haben) keine Geschwister.', answers: ['hat'] },
              { id: 'i6', sentence: 'Frank [blank] (treffen) seine Freundin vor dem Kino.', answers: ['trifft'] },
              { id: 'i7', sentence: 'Unser Deutschlehrer [blank] (helfen) us immer.', answers: ['hilft'] },
              { id: 'i8', sentence: 'Nein, diese Hose [blank] (gefallen) mir überhaupt nicht.', answers: ['gefällt'] },
              { id: 'i9', sentence: '[blank] (Halten) dieser Zug in Dormagen?', answers: ['Hält'] },
              { id: 'i10', sentence: 'Arne [blank] (schlafen) heute abend auf dem Sofa.', answers: ['schläft'] },
            ]
          },
          {
            id: 'irreg-t2',
            title: 'Verb Master',
            description: 'More irregular verb practice.',
            type: 'fill-in',
            items: [
              { id: 'i11', sentence: 'Heiko, du [blank] (vergessen) immer deine Hausaufgaben!', answers: ['vergisst'] },
              { id: 'i12', sentence: '[blank] (Sehen) du den blauen Wagen da drüben?', answers: ['Siehst'] },
              { id: 'i13', sentence: 'Simone, was [blank] (werfen) du da?', answers: ['wirfst'] },
              { id: 'i14', sentence: 'Der Briefträger [blank] (geben) ihm immer viele Briefe.', answers: ['gibt'] },
              { id: 'i15', sentence: 'Er [blank] (wissen) nicht mehr, wie das Gerät funktioniert.', answers: ['weiß'] },
              { id: 'i16', sentence: 'Mein Freund [blank] (empfehlen) das Restaurant.', answers: ['empfiehlt'] },
              { id: 'i17', sentence: 'Was [blank] (schlagen) du vor, Thomas?', answers: ['schlägst'] },
              { id: 'i18', sentence: 'Im Moment [blank] (fallen) mir gar nichts ein.', answers: ['fällt'] },
              { id: 'i19', sentence: 'Wo [blank] (sein) Ute?', answers: ['ist'] },
              { id: 'i20', sentence: 'Dein Benehmen [blank] (lassen) viel zu wünschen übrig!', answers: ['lässt'] },
            ]
          },
          {
            id: 'irreg-t3',
            title: 'Dialogue Challenge',
            description: 'Complete the dialogue with the correct irregular forms.',
            type: 'challenge',
            items: [
              { id: 'd1', sentence: 'A: [blank] (Helfen) du mir?', answers: ['Hilfst'] },
              { id: 'd2', sentence: 'B: Ja, ich [blank] (helfen) dir gerne.', answers: ['helfe'] },
              { id: 'd3', sentence: 'A: [blank] (Essen) du gerne Pizza?', answers: ['Isst'] },
              { id: 'd4', sentence: 'B: Nein, ich [blank] (essen) lieber Pasta.', answers: ['esse'] },
              { id: 'd5', sentence: 'A: [blank] (Sehen) du den film?', answers: ['Siehst'] },
              { id: 'd6', sentence: 'B: Ja, ich [blank] (sehen) ihn gerade.', answers: ['sehe'] },
              { id: 'd7', sentence: 'A: [blank] (Fahren) du nach Berlin?', answers: ['Fährst'] },
              { id: 'd8', sentence: 'B: Nein, ich [blank] (fahren) nach Hamburg.', answers: ['fahre'] },
              { id: 'd9', sentence: 'A: [blank] (Geben) du mir das Buch?', answers: ['Gibst'] },
              { id: 'd10', sentence: 'B: Ja, ich [blank] (geben) es dir.', answers: ['gebe'] },
              { id: 'd11', sentence: 'A: [blank] (Lesen) du die Zeitung?', answers: ['Liest'] },
              { id: 'd12', sentence: 'B: Nein, ich [blank] (lesen) ein Buch.', answers: ['lese'] },
              { id: 'd13', sentence: 'A: [blank] (Sprechen) du Deutsch?', answers: ['Sprichst'] },
              { id: 'd14', sentence: 'B: Ja, ich [blank] (sprechen) ein bisschen.', answers: ['spreche'] },
              { id: 'd15', sentence: 'A: [blank] (Schlafen) du schon?', answers: ['Schläfst'] },
              { id: 'd16', sentence: 'B: Nein, ich [blank] (schlafen) noch nicht.', answers: ['schlafe'] },
            ]
          },
          {
            id: 'irreg-t4',
            title: 'Error Detective',
            description: 'Find and fix the conjugation errors in these irregular verb sentences.',
            type: 'challenge',
            items: [
              { id: 'ie1', prefix: 'Er essen eine Pizza.', sentence: 'Er [blank] eine Pizza.', answers: ['isst'] },
              { id: 'ie2', prefix: 'Du sehst den Hund.', sentence: 'Du [blank] den Hund.', answers: ['siehst'] },
              { id: 'ie3', prefix: 'Ich fahrt nach Berlin.', sentence: 'Ich [blank] nach Berlin.', answers: ['fahre'] },
              { id: 'ie4', prefix: 'Wir nimmt den Bus.', sentence: 'Wir [blank] den Bus.', answers: ['nehmen'] },
              { id: 'ie5', prefix: 'Ihr lesen ein Buch.', sentence: 'Ihr [blank] ein Buch.', answers: ['lest'] },
              { id: 'ie6', prefix: 'Sie helft mir.', sentence: 'Sie [blank] mir.', answers: ['hilft'] },
              { id: 'ie7', prefix: 'Du gebst mir das Buch.', sentence: 'Du [blank] mir das Buch.', answers: ['gibst'] },
              { id: 'ie8', prefix: 'Er schlaft auf dem Sofa.', sentence: 'Er [blank] auf dem Sofa.', answers: ['schläft'] },
              { id: 'ie9', prefix: 'Wir sprecht Deutsch.', sentence: 'Wir [blank] Deutsch.', answers: ['sprechen'] },
              { id: 'ie10', prefix: 'Du vergesst die Hausaufgaben.', sentence: 'Du [blank] die Hausaufgaben.', answers: ['vergisst'] },
            ]
          }
        ]
      },
      {
        id: 'haben-sein',
        title: 'Haben or Sein',
        tasks: [
          {
            id: 'hab-t1',
            title: 'Haben Practice 1',
            description: 'Fill in the correct form of "haben".',
            type: 'fill-in',
            items: [
              { id: 'h1', sentence: 'Ich [blank] einen Hund. (haben)', answers: ['habe'] },
              { id: 'h2', sentence: 'Du [blank] viel Glück. (haben)', answers: ['hast'] },
              { id: 'h3', sentence: 'Er [blank] heute Zeit. (haben)', answers: ['hat'] },
              { id: 'h4', sentence: 'Wir [blank] ein großes Haus. (haben)', answers: ['haben'] },
              { id: 'h5', sentence: 'Ihr [blank] keine Angst. (haben)', answers: ['habt'] },
              { id: 'h6', sentence: 'Sie [blank] viele Freunde. (haben)', answers: ['haben'] },
              { id: 'h7', sentence: 'Frau Schmidt, [blank] Sie einen Moment? (haben)', answers: ['haben'] },
              { id: 'h8', sentence: 'Mein Bruder [blank] ein neues Auto. (haben)', answers: ['hat'] },
              { id: 'h9', sentence: 'Wir [blank] heute keine Schule. (haben)', answers: ['haben'] },
              { id: 'h10', sentence: 'Was [blank] du da? (haben)', answers: ['hast'] },
            ]
          },
          {
            id: 'hab-t2',
            title: 'Haben Practice 2',
            description: 'More practice with "haben".',
            type: 'fill-in',
            items: [
              { id: 'h11', sentence: 'Ich [blank] Hunger. (haben)', answers: ['habe'] },
              { id: 'h12', sentence: 'Du [blank] Recht. (haben)', answers: ['hast'] },
              { id: 'h13', sentence: 'Sie [blank] blaue Augen. (haben)', answers: ['hat'] },
              { id: 'h14', sentence: 'Wir [blank] Durst. (haben)', answers: ['haben'] },
              { id: 'h15', sentence: 'Ihr [blank] Pech. (haben)', answers: ['habt'] },
              { id: 'h16', sentence: 'Die Kinder [blank] Ferien. (haben)', answers: ['haben'] },
              { id: 'h17', sentence: 'Hast du Geschwister? Ja, ich [blank] eine Schwester. (haben)', answers: ['habe'] },
              { id: 'h18', sentence: 'Er [blank] Kopfschmerzen. (haben)', answers: ['hat'] },
              { id: 'h19', sentence: 'Wir [blank] eine Idee. (haben)', answers: ['haben'] },
              { id: 'h20', sentence: 'Ihr [blank] gute Noten. (haben)', answers: ['habt'] },
            ]
          },
          {
            id: 'sei-t1',
            title: 'Sein Practice 1',
            description: 'Fill in the correct form of "sein".',
            type: 'fill-in',
            items: [
              { id: 's1', sentence: 'Ich [blank] müde. (sein)', answers: ['bin'] },
              { id: 's2', sentence: 'Du [blank] sehr nett. (sein)', answers: ['bist'] },
              { id: 's3', sentence: 'Er [blank] mein Freund. (sein)', answers: ['ist'] },
              { id: 's4', sentence: 'Wir [blank] zu Hause. (sein)', answers: ['sind'] },
              { id: 's5', sentence: 'Ihr [blank] spät dran. (sein)', answers: ['seid'] },
              { id: 's6', sentence: 'Sie [blank] in Berlin. (sein)', answers: ['sind'] },
              { id: 's7', sentence: 'Wie alt [blank] du? (sein)', answers: ['bist'] },
              { id: 's8', sentence: 'Das Wetter [blank] heute schön. (sein)', answers: ['ist'] },
              { id: 's9', sentence: 'Wir [blank] fertig. (sein)', answers: ['sind'] },
              { id: 's10', sentence: 'Wo [blank] ihr? (sein)', answers: ['seid'] },
            ]
          },
          {
            id: 'sei-t2',
            title: 'Sein Practice 2',
            description: 'More practice with "sein".',
            type: 'fill-in',
            items: [
              { id: 's11', sentence: 'Ich [blank] glücklich. (sein)', answers: ['bin'] },
              { id: 's12', sentence: 'Du [blank] mein Bruder. (sein)', answers: ['bist'] },
              { id: 's13', sentence: 'Sie [blank] Lehrerin. (sein)', answers: ['ist'] },
              { id: 's14', sentence: 'Wir [blank] Deutsche. (sein)', answers: ['sind'] },
              { id: 's15', sentence: 'Ihr [blank] fleißig. (sein)', answers: ['seid'] },
              { id: 's16', sentence: 'Die Schüler [blank] im Klassenzimmer. (sind)', answers: ['sind'] },
              { id: 's17', sentence: 'Wer [blank] das? (sein)', answers: ['ist'] },
              { id: 's18', sentence: 'Ich [blank] hier. (sein)', answers: ['bin'] },
              { id: 's19', sentence: 'Wir [blank] bereit. (sein)', answers: ['sind'] },
              { id: 's20', sentence: 'Ihr [blank] willkommen. (sein)', answers: ['seid'] },
            ]
          },
          {
            id: 'hab-sei-mix',
            title: 'Haben and Sein Mixed',
            description: 'Choose between "haben" and "sein" and use the correct form.',
            type: 'fill-in',
            items: [
              { id: 'm1', sentence: 'Ich [blank] 15 Jahre alt. (sein/haben)', answers: ['bin'] },
              { id: 'm2', sentence: 'Du [blank] ein neues Handy. (sein/haben)', answers: ['hast'] },
              { id: 'm3', sentence: 'Er [blank] krank. (sein/haben)', answers: ['ist'] },
              { id: 'm4', sentence: 'Wir [blank] keine Lust. (sein/haben)', answers: ['haben'] },
              { id: 'm5', sentence: 'Ihr [blank] im Kino. (sein/haben)', answers: ['seid'] },
              { id: 'm6', sentence: 'Sie [blank] ein Auto. (sein/haben)', answers: ['haben'] },
              { id: 'm7', sentence: 'Ich [blank] heute frei. (sein/haben)', answers: ['habe'] },
              { id: 'm8', sentence: 'Wo [blank] meine Brille? (sein/haben)', answers: ['ist'] },
              { id: 'm9', sentence: 'Wir [blank] Hunger. (sein/haben)', answers: ['haben'] },
              { id: 'm10', sentence: 'Ihr [blank] sehr freundlich. (sein/haben)', answers: ['seid'] },
            ]
          },
          {
            id: 'hab-sei-err',
            title: 'Error Detective',
            description: 'Find and fix the errors with "haben" and "sein".',
            type: 'challenge',
            items: [
              { id: 'hse1', prefix: 'Ich hat einen Hund.', sentence: 'Ich [blank] einen Hund.', answers: ['habe'] },
              { id: 'hse2', prefix: 'Du bin sehr nett.', sentence: 'Du [blank] sehr nett.', answers: ['bist'] },
              { id: 'hse3', prefix: 'Er haben heute Zeit.', sentence: 'Er [blank] heute Zeit.', answers: ['hat'] },
              { id: 'hse4', prefix: 'Wir seid zu Hause.', sentence: 'Wir [blank] zu Hause.', answers: ['sind'] },
              { id: 'hse5', prefix: 'Ihr haben keine Angst.', sentence: 'Ihr [blank] keine Angst.', answers: ['habt'] },
              { id: 'hse6', prefix: 'Sie ist in Berlin.', sentence: 'Sie [blank] in Berlin.', answers: ['sind'] },
              { id: 'hse7', prefix: 'Das Wetter haben heute schön.', sentence: 'Das Wetter [blank] heute schön.', answers: ['ist'] },
              { id: 'hse8', prefix: 'Wir bin fertig.', sentence: 'Wir [blank] fertig.', answers: ['sind'] },
              { id: 'hse9', prefix: 'Wo hast ihr?', sentence: 'Wo [blank] ihr?', answers: ['seid'] },
              { id: 'hse10', prefix: 'Ich bist glücklich.', sentence: 'Ich [blank] glücklich.', answers: ['bin'] },
            ]
          }
        ]
      },
      {
        id: 'reflexive',
        title: 'Reflexive Verbs',
        tasks: [
          {
            id: 'ref-t1',
            title: 'Reflexive Verbs',
            description: 'Don\'t forget the reflexive pronoun (mich, dich, sich, uns, euch, sich).',
            type: 'transform',
            items: [
              { id: 'r1', prefix: 'Er entschuldigt sich bei dem Schulleiter.', sentence: 'Wir [blank].', answers: ['entschuldigen uns bei dem Schulleiter'] },
              { id: 'r2', prefix: 'Wir ziehen uns an.', sentence: 'Anke [blank].', answers: ['zieht sich an'] },
              { id: 'r3', prefix: 'Ich wasche mich im Badezimmer.', sentence: 'Meine Brüder [blank].', answers: ['waschen sich im Badezimmer'] },
              { id: 'r4', prefix: 'Wir machen uns jetzt auf den Weg.', sentence: 'Ich [blank].', answers: ['mache mich jetzt auf den Weg'] },
              { id: 'r5', prefix: 'Ich ruhe mich hier ein bisschen aus.', sentence: 'Du [blank].', answers: ['ruhst dich hier ein bisschen aus'] },
              { id: 'r6', prefix: 'Sie beklagt sich nicht sehr oft.', sentence: 'Ihr [blank].', answers: ['beklagt euch nicht sehr oft'] },
              { id: 'r7', prefix: 'Meine Katze fürchtet sich vor diesem Hund.', sentence: 'Wir [blank].', answers: ['fürchten uns vor diesem Hund'] },
              { id: 'r8', prefix: 'Ulrike erinnert sich nicht mehr daran.', sentence: 'Die Mädchen [blank].', answers: ['erinnern sich nicht mehr daran'] },
              { id: 'r9', prefix: 'Ich beeile mich.', sentence: 'Die Partygäste [blank].', answers: ['beeilen sich'] },
              { id: 'r10', prefix: 'Wir bedienen uns sehr gerne.', sentence: 'Ich [blank].', answers: ['bediene mich sehr gerne'] },
            ]
          }
        ]
      },
      {
        id: 'separable-inseparable',
        title: 'Separable or Inseparable',
        tasks: [
          {
            id: 'sep-t1',
            title: 'Separable Verbs Practice 1',
            description: 'Fill in both gaps with the correct verb form and the prefix.',
            type: 'fill-in',
            items: [
              { id: 's1', sentence: 'Ich [blank] das Fenster schnell [blank]. (aufmachen)', answers: ['mache', 'auf'] },
              { id: 's2', sentence: 'Der Zug [blank] um 20:30 Uhr [blank]. (ankommen)', answers: ['kommt', 'an'] },
              { id: 's3', sentence: 'Wir [blank] morgen früh um 7:00 Uhr [blank]. (losfahren)', answers: ['fahren', 'los'] },
              { id: 's4', sentence: 'Du [blank] zu viel Geld [blank]! (ausgeben)', answers: ['gibst', 'aus'] },
              { id: 's5', sentence: 'Meine Eltern [blank] heute abend [blank]. (ausgehen)', answers: ['gehen', 'aus'] },
              { id: 's6', sentence: 'Die Mutter [blank] die Tür heftig [blank]. (zumachen)', answers: ['macht', 'zu'] },
              { id: 's7', sentence: 'Du [blank] zu lange [blank]. (fortbleiben)', answers: ['bleibst', 'fort'] },
              { id: 's8', sentence: 'Lothar [blank] hier in den Bus [blank]. (einsteigen)', answers: ['steigt', 'ein'] },
              { id: 's9', sentence: 'Der alte Mann [blank] das Licht [blank]. (anmachen)', answers: ['macht', 'an'] },
              { id: 's10', sentence: 'Ich [blank] bald [blank]. (wegfahren)', answers: ['fahre', 'weg'] },
            ]
          },
          {
            id: 'sep-t2',
            title: 'Separable Verbs Practice 2',
            description: 'Fill in both gaps with the correct verb form and the prefix.',
            type: 'fill-in',
            items: [
              { id: 's11', sentence: 'Er [blank] sein Zimmer [blank]. (aufräumen)', answers: ['räumt', 'auf'] },
              { id: 's12', sentence: 'Wir [blank] dich später [blank]. (anrufen)', answers: ['rufen', 'an'] },
              { id: 's13', sentence: 'Wann [blank] der Film [blank]? (anfangen)', answers: ['fängt', 'an'] },
              { id: 's14', sentence: 'Ich [blank] jeden Abend [blank]. (fernsehen)', answers: ['sehe', 'fern'] },
              { id: 's15', sentence: 'Das Kind [blank] sofort [blank]. (einschlafen)', answers: ['schläft', 'ein'] },
              { id: 's16', sentence: 'Wir [blank] die Hausaufgaben [blank]. (abschreiben)', answers: ['schreiben', 'ab'] },
              { id: 's17', sentence: 'Du [blank] die Tür [blank]. (aufschließen)', answers: ['schließt', 'auf'] },
              { id: 's18', sentence: 'Der Lehrer [blank] das Buch [blank]. (vorlesen)', answers: ['liest', 'vor'] },
              { id: 's19', sentence: 'Ich [blank] meine Freunde [blank]. (mitbringen)', answers: ['bringe', 'mit'] },
              { id: 's20', sentence: 'Wann [blank] du [blank]? (aufstehen)', answers: ['stehst', 'auf'] },
            ]
          },
          {
            id: 'insep-t1',
            title: 'The Inseparables',
            description: 'Verbs with prefixes be-, ent-, er-, ver-, zer-, ge-, miss- are NOT separated.',
            type: 'fill-in',
            items: [
              { id: 'ins1', sentence: 'Ich [blank] (besuchen) meine Oma.', answers: ['besuche'] },
              { id: 'ins2', sentence: 'Er [blank] (erzählen) eine Geschichte.', answers: ['erzählt'] },
              { id: 'ins3', sentence: 'Wir [blank] (verstehen) die Aufgabe.', answers: ['verstehen'] },
              { id: 'ins4', sentence: 'Du [blank] (bezahlen) die Rechnung.', answers: ['bezahlst'] },
              { id: 'ins5', sentence: 'Sie [blank] (erklären) das Problem.', answers: ['erklärt'] },
              { id: 'ins6', sentence: 'Ich [blank] (vergessen) meinen Schlüssel.', answers: ['vergesse'] },
              { id: 'ins7', sentence: 'Der Hund [blank] (zerstören) das Spielzeug.', answers: ['zerstört'] },
              { id: 'ins8', sentence: 'Wir [blank] (gewinnen) das Spiel.', answers: ['gewinnen'] },
              { id: 'ins9', sentence: 'Er [blank] (entdecken) einen Schatz.', answers: ['entdeckt'] },
              { id: 'ins10', sentence: 'Ich [blank] (versprechen) es dir.', answers: ['verspreche'] },
            ]
          },
          {
            id: 'insep-sep-mix',
            title: 'Separable or Inseparable?',
            description: 'Decide if the verb is separable (2 gaps) or inseparable (1 gap). Fill in the correct form.',
            type: 'fill-in',
            items: [
              { id: 'mix1', sentence: 'Ich [blank] meine Freunde [blank]. (einladen)', answers: ['lade', 'ein'] },
              { id: 'mix2', sentence: 'Er [blank] das Buch [blank]. (verlieren)', answers: ['verliert', ''] },
              { id: 'mix3', sentence: 'Wir [blank] das Fenster [blank]. (aufmachen)', answers: ['machen', 'auf'] },
              { id: 'mix4', sentence: 'Du [blank] die Geschichte [blank]. (erzählen)', answers: ['erzählst', ''] },
              { id: 'mix5', sentence: 'Sie [blank] den Brief [blank]. (beantworten)', answers: ['beantwortet', ''] },
              { id: 'mix6', sentence: 'Ich [blank] den Fernseher [blank]. (anmachen)', answers: ['mache', 'an'] },
              { id: 'mix7', sentence: 'Wir [blank] das Zimmer [blank]. (aufräumen)', answers: ['räumen', 'auf'] },
              { id: 'mix8', sentence: 'Er [blank] den Termin [blank]. (vergessen)', answers: ['vergisst', ''] },
              { id: 'mix9', sentence: 'Du [blank] das Licht [blank]. (ausschalten)', answers: ['schaltest', 'aus'] },
              { id: 'mix10', sentence: 'Ich [blank] die Aufgabe [blank]. (verstehen)', answers: ['verstehe', ''] },
            ]
          },
          {
            id: 'insep-sep-mix-2',
            title: 'Separable or Inseparable 2',
            description: 'Fill in the correct form. Some verbs need one gap, some two.',
            type: 'fill-in',
            items: [
              { id: 'sm1', sentence: 'Ich [blank] (bestellen) eine Pizza.', answers: ['bestelle'] },
              { id: 'sm2', sentence: 'Er [blank] das Fenster [blank]. (zumachen)', answers: ['macht', 'zu'] },
              { id: 'sm3', sentence: 'Wir [blank] (erwarten) Besuch.', answers: ['erwarten'] },
              { id: 'sm4', sentence: 'Du [blank] das Buch [blank]. (mitbringen)', answers: ['bringst', 'mit'] },
              { id: 'sm5', sentence: 'Sie [blank] (verkaufen) ihr Auto.', answers: ['verkauft'] },
              { id: 'sm6', sentence: 'Wann [blank] du [blank]? (einkaufen)', answers: ['kaufst', 'ein'] },
              { id: 'sm7', sentence: 'Ich [blank] (empfehlen) den Wein.', answers: ['empfehle'] },
              { id: 'sm8', sentence: 'Der Film [blank] um 20 Uhr [blank]. (anfangen)', answers: ['fängt', 'an'] },
              { id: 'sm9', sentence: 'Wir [blank] (besprechen) das morgen.', answers: ['besprechen'] },
              { id: 'sm10', sentence: 'Ihr [blank] die Hausaufgaben [blank]. (abschreiben)', answers: ['schreibt', 'ab'] },
            ]
          },
          {
            id: 'sep-err',
            title: 'Error Detective',
            description: 'Find and fix the word order and conjugation errors in these separable verb sentences.',
            type: 'challenge',
            items: [
              { id: 'se1', prefix: 'Ich aufmache das Fenster.', sentence: 'Ich [blank] das Fenster [blank].', answers: ['mache', 'auf'] },
              { id: 'se2', prefix: 'Der Zug ankommt um 20:30 Uhr.', sentence: 'Der Zug [blank] um 20:30 Uhr [blank].', answers: ['kommt', 'an'] },
              { id: 'se3', prefix: 'Wir losfahren morgen früh.', sentence: 'Wir [blank] morgen früh [blank].', answers: ['fahren', 'los'] },
              { id: 'se4', prefix: 'Du ausgibst zu viel Geld.', sentence: 'Du [blank] zu viel Geld [blank].', answers: ['gibst', 'aus'] },
              { id: 'se5', prefix: 'Meine Eltern ausgehen heute abend.', sentence: 'Meine Eltern [blank] heute abend [blank].', answers: ['gehen', 'aus'] },
              { id: 'se6', prefix: 'Er aufräumt sein Zimmer.', sentence: 'Er [blank] sein Zimmer [blank].', answers: ['räumt', 'auf'] },
              { id: 'se7', prefix: 'Wir anrufen dich später.', sentence: 'Wir [blank] dich später [blank].', answers: ['rufen', 'an'] },
              { id: 'se8', prefix: 'Wann anfangen der Film?', sentence: 'Wann [blank] der Film [blank]?', answers: ['fängt', 'an'] },
              { id: 'se9', prefix: 'Ich fernsehe jeden Abend.', sentence: 'Ich [blank] jeden Abend [blank].', answers: ['sehe', 'fern'] },
              { id: 'se10', prefix: 'Das Kind einschlafen sofort.', sentence: 'Das Kind [blank] sofort [blank].', answers: ['schläft', 'ein'] },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'perfect',
    title: 'Perfect Tense',
    subunits: [
      {
        id: 'perfect-regular',
        title: 'Perfect Regular',
        tasks: [
          {
            id: 'perf-reg-t1',
            title: 'Haben + Ge...t (1)',
            description: 'Form the perfect tense using "haben" and the past participle.',
            type: 'fill-in',
            items: [
              { id: 'pr1', sentence: '[blank] du heute die Nachrichten im Radio [blank]? (hören)', answers: ['Hast', 'gehört'] },
              { id: 'pr2', sentence: 'Wer [blank] gestern mit dir Badminton [blank]? (spielen)', answers: ['hat', 'gespielt'] },
              { id: 'pr3', sentence: 'Unsere Nachbarn [blank] früher in Heidelberg [blank]. (wohnen)', answers: ['haben', 'gewohnt'] },
              { id: 'pr4', sentence: 'Ich [blank] mir letzte Woche ein Kleid [blank]. (kaufen)', answers: ['habe', 'gekauft'] },
              { id: 'pr5', sentence: 'Wann [blank] deine Eltern [blank]? (telefonieren)', answers: ['haben', 'telefoniert'] },
              { id: 'pr6', sentence: '[blank] Sie Ihr Auto schon [blank]? (verkaufen)', answers: ['Haben', 'verkauft'] },
              { id: 'pr7', sentence: 'Guten Tag, ich [blank] ein Einzelzimmer [blank]. (reservieren)', answers: ['habe', 'reserviert'] },
              { id: 'pr8', sentence: 'Die Anne [blank] heute nicht Klavier [blank]. (üben)', answers: ['hat', 'geübt'] },
              { id: 'pr9', sentence: 'Elke, wo [blank] du den schönen Ring [blank]? (kriegen)', answers: ['hast', 'gekriegt'] },
              { id: 'pr10', sentence: 'Wahrscheinlich [blank] er den Brief gestern [blank]. (schicken)', answers: ['hat', 'geschickt'] },
            ]
          },
          {
            id: 'perf-reg-t2',
            title: 'Haben + Ge...t (2)',
            description: 'More practice with regular verbs in the perfect tense.',
            type: 'fill-in',
            items: [
              { id: 'pr11', sentence: 'Ich [blank] gestern das ganze Haus [blank]. (putzen)', answers: ['habe', 'geputzt'] },
              { id: 'pr12', sentence: '[blank] du schon die Blumen [blank]? (gießen)', answers: ['Hast', 'gegossen'] }, // wait, gießen is irregular (gegossen). User asked for regular.
              // Let's use real regular verbs.
              { id: 'pr12_reg', sentence: '[blank] du schon die Blumen [blank]? (holen)', answers: ['Hast', 'geholt'] },
              { id: 'pr13', sentence: 'Wir [blank] lange auf den Bus [blank]. (warten)', answers: ['haben', 'gewartet'] },
              { id: 'pr14', sentence: 'Er [blank] mir die Geschichte [blank]. (glauben)', answers: ['hat', 'geglaubt'] },
              { id: 'pr15', sentence: 'Was [blank] ihr gestern [blank]? (kochen)', answers: ['habt', 'gekocht'] },
              { id: 'pr16', sentence: 'Sie [blank] leise [blank]. (lachen)', answers: ['haben', 'gelacht'] },
              { id: 'pr17', sentence: 'Ich [blank] ein Lied [blank]. (lernen)', answers: ['habe', 'gelernt'] },
              { id: 'pr18', sentence: 'Der Mechaniker [blank] das Auto [blank]. (reparieren)', answers: ['hat', 'repariert'] },
              { id: 'pr19', sentence: 'Wir [blank] ein Foto [blank]. (machen)', answers: ['haben', 'gemacht'] },
              { id: 'pr20', sentence: 'Wann [blank] du das [blank]? (sagen)', answers: ['hast', 'gesagt'] },
            ]
          }
        ]
      },
      {
        id: 'perfect-irregular',
        title: 'Perfect Irregular',
        tasks: [
          {
            id: 'perf-irreg-t1',
            title: 'Strong Verbs (1)',
            description: 'Identify the correct auxiliary verb and the irregular past participle.',
            type: 'fill-in',
            items: [
              { id: 'pi1', sentence: 'Wer [blank] das Fußballspiel [blank]? (gewinnen)', answers: ['hat', 'gewonnen'] },
              { id: 'pi2', sentence: 'Warum [blank] du die Straßenbahn [blank]? (nehmen)', answers: ['hast', 'genommen'] },
              { id: 'pi3', sentence: 'Wir [blank] zwei Glas Wein [blank]. (trinken)', answers: ['haben', 'getrunken'] },
              { id: 'pi4', sentence: 'Gestern [blank] ich einen 50 Euro Schein [blank]. (finden)', answers: ['habe', 'gefunden'] },
              { id: 'pi5', sentence: 'Was [blank] ihr zum Abendessen [blank]? (essen)', answers: ['habt', 'gegessen'] },
              { id: 'pi6', sentence: 'Heute [blank] Markus die Zeitung nicht [blank]. (lesen)', answers: ['hat', 'gelesen'] },
              { id: 'pi7', sentence: 'Wirklich? Das [blank] ich aber nicht [blank]. (wissen)', answers: ['habe', 'gewusst'] },
              { id: 'pi8', sentence: '[blank] Sie gut [blank], Herr Leffers? (schlafen)', answers: ['Haben', 'geschlafen'] },
              { id: 'pi9', sentence: 'Der Film [blank] mir gar nicht [blank]. (gefallen)', answers: ['hat', 'gefallen'] },
              { id: 'pi10', sentence: 'Wir [blank] Alfred und Frank vor dem Bahnhof [blank]. (treffen)', answers: ['haben', 'getroffen'] },
            ]
          },
          {
            id: 'perf-irreg-t2',
            title: 'Strong Verbs (2)',
            description: 'More practice with strong verbs.',
            type: 'fill-in',
            items: [
              { id: 'pi11', sentence: 'Ich [blank] den Brief [blank]. (schreiben)', answers: ['habe', 'geschrieben'] },
              { id: 'pi12', sentence: 'Er [blank] mir ein Geschenk [blank]. (geben)', answers: ['hat', 'gegeben'] },
              { id: 'pi13', sentence: 'Wir [blank] die ganze Nacht [blank]. (singen)', answers: ['haben', 'gesungen'] },
              { id: 'pi14', sentence: 'Hast du das [blank]? (sehen)', answers: ['gesehen'] },
              { id: 'pi15', sentence: 'Sie [blank] uns [blank]. (helfen)', answers: ['haben', 'geholfen'] },
              { id: 'pi16', sentence: 'Ich [blank] den Kuchen [blank]. (backen)', answers: ['habe', 'gebacken'] },
              { id: 'pi17', sentence: 'Er [blank] zu viel [blank]. (sprechen)', answers: ['hat', 'gesprochen'] },
              { id: 'pi18', sentence: 'Wir [blank] den Termin [blank]. (vergessen)', answers: ['haben', 'vergessen'] },
              { id: 'pi19', sentence: 'Was [blank] du [blank]? (tragen)', answers: ['hast', 'getragen'] },
              { id: 'pi20', sentence: 'Sie [blank] die Wahrheit [blank]. (lügen)', answers: ['haben', 'gelogen'] },
            ]
          },
          {
            id: 'perf-irreg-t3',
            title: 'Strong Verbs (3)',
            description: 'Even more strong verbs.',
            type: 'fill-in',
            items: [
              { id: 'pi21', sentence: 'Ich [blank] das Buch [blank]. (leihen)', answers: ['habe', 'geliehen'] },
              { id: 'pi22', sentence: 'Er [blank] den Hund [blank]. (beißen)', answers: ['hat', 'gebissen'] },
              { id: 'pi23', sentence: 'Wir [blank] den Berg [blank]. (steigen)', answers: ['sind', 'gestiegen'] },
              { id: 'pi24', sentence: 'Hast du das [blank]? (riechen)', answers: ['gerochen'] },
              { id: 'pi25', sentence: 'Sie [blank] das Seil [blank]. (ziehen)', answers: ['haben', 'gezogen'] },
              { id: 'pi26', sentence: 'Ich [blank] das Licht [blank]. (scheinen)', answers: ['habe', 'geschienen'] },
              { id: 'pi27', sentence: 'Er [blank] den Feind [blank]. (schlagen)', answers: ['hat', 'geschlagen'] },
              { id: 'pi28', sentence: 'Wir [blank] das Lied [blank]. (pfeifen)', answers: ['haben', 'gepfiffen'] },
              { id: 'pi29', sentence: 'Was [blank] du [blank]? (schreiben)', answers: ['hast', 'geschrieben'] },
              { id: 'pi30', sentence: 'Sie [blank] den Dieb [blank]. (fangen)', answers: ['haben', 'gefangen'] },
            ]
          },
          {
            id: 'perf-irreg-t4',
            title: 'Strong Verbs (4)',
            description: 'Keep practicing!',
            type: 'fill-in',
            items: [
              { id: 'pi31', sentence: 'Ich [blank] den Wein [blank]. (gießen)', answers: ['habe', 'gegossen'] },
              { id: 'pi32', sentence: 'Er [blank] den Brief [blank]. (erhalten)', answers: ['hat', 'erhalten'] },
              { id: 'pi33', sentence: 'Wir [blank] das Ziel [blank]. (beschließen)', answers: ['haben', 'beschlossen'] },
              { id: 'pi34', sentence: 'Hast du das [blank]? (versprechen)', answers: ['versprochen'] },
              { id: 'pi35', sentence: 'Sie [blank] den Kuchen [blank]. (essen)', answers: ['haben', 'gegessen'] },
              { id: 'pi36', sentence: 'Ich [blank] den Schlüssel [blank]. (verlieren)', answers: ['habe', 'verloren'] },
              { id: 'pi37', sentence: 'Er [blank] den Baum [blank]. (biegen)', answers: ['hat', 'gebogen'] },
              { id: 'pi38', sentence: 'Wir [blank] den Stein [blank]. (werfen)', answers: ['haben', 'geworfen'] },
              { id: 'pi39', sentence: 'Was [blank] du [blank]? (lesen)', answers: ['hast', 'gelesen'] },
              { id: 'pi40', sentence: 'Sie [blank] das Spiel [blank]. (gewinnen)', answers: ['haben', 'gewonnen'] },
            ]
          },
          {
            id: 'perf-irreg-t5',
            title: 'Strong Verbs (5)',
            description: 'Final strong verb challenge.',
            type: 'fill-in',
            items: [
              { id: 'pi41', sentence: 'Ich [blank] den Kaffee [blank]. (trinken)', answers: ['habe', 'getrunken'] },
              { id: 'pi42', sentence: 'Er [blank] den Weg [blank]. (weisen)', answers: ['hat', 'gewiesen'] },
              { id: 'pi43', sentence: 'Wir [blank] den Brief [blank]. (senden)', answers: ['haben', 'gesendet'] },
              { id: 'pi44', sentence: 'Hast du das [blank]? (wissen)', answers: ['gewusst'] },
              { id: 'pi45', sentence: 'Sie [blank] den Film [blank]. (sehen)', answers: ['haben', 'gesehen'] },
              { id: 'pi46', sentence: 'Ich [blank] den Apfel [blank]. (beißen)', answers: ['habe', 'gebissen'] },
              { id: 'pi47', sentence: 'Er [blank] den Text [blank]. (verstehen)', answers: ['hat', 'verstanden'] },
              { id: 'pi48', sentence: 'Wir [blank] den Berg [blank]. (steigen)', answers: ['sind', 'gestiegen'] },
              { id: 'pi49', sentence: 'Was [blank] du [blank]? (tun)', answers: ['hast', 'getan'] },
              { id: 'pi50', sentence: 'Sie [blank] den Dieb [blank]. (greifen)', answers: ['haben', 'gegriffen'] },
            ]
          }
        ]
      },
      {
        id: 'perfect-sein',
        title: 'Perfect with Sein',
        tasks: [
          {
            id: 'perf-sein-t1',
            title: 'Movement & Change (1)',
            description: 'Use "sein" for verbs of movement or change of state.',
            type: 'fill-in',
            items: [
              { id: 'ps1', sentence: 'Shakespeare [blank] 1616 [blank]. (sterben)', answers: ['ist', 'gestorben'] },
              { id: 'ps2', sentence: 'Um wieviel Uhr [blank] du in Hamburg [blank]? (ankommen)', answers: ['bist', 'angekommen'] },
              { id: 'ps3', sentence: 'Wir [blank] um 5 Uhr morgens [blank]. (aufstehen)', answers: ['sind', 'aufgestanden'] },
              { id: 'ps4', sentence: '[blank] Hans auch [blank]? (kommen)', answers: ['Ist', 'gekommen'] },
              { id: 'ps5', sentence: 'Warum [blank] die zwei Brüder in die Stadt [blank]? (gehen)', answers: ['sind', 'gegangen'] },
              { id: 'ps6', sentence: 'Wir [blank] gestern in einem Gasthof [blank]. (einkehren)', answers: ['sind', 'eingekehrt'] },
              { id: 'ps7', sentence: 'Was [blank] denn [blank]? (passieren)', answers: ['ist', 'passiert'] },
              { id: 'ps8', sentence: 'Meine Eltern [blank] letztes Jahr nach Spanien [blank]. (fliegen)', answers: ['sind', 'geflogen'] },
              { id: 'ps9', sentence: 'Ich [blank] die steile Treppe [blank]. (hinaufgehen)', answers: ['bin', 'hinaufgegangen'] },
              { id: 'ps10', sentence: '[blank] Petra schon [blank]? (zurückkommen)', answers: ['Ist', 'zurückgekommen'] },
            ]
          },
          {
            id: 'perf-sein-t2',
            title: 'Movement & Change (2)',
            description: 'More practice with "sein" verbs.',
            type: 'fill-in',
            items: [
              { id: 'ps11', sentence: 'Ich [blank] nach Hause [blank]. (laufen)', answers: ['bin', 'gelaufen'] },
              { id: 'ps12', sentence: 'Er [blank] in den See [blank]. (springen)', answers: ['ist', 'gesprungen'] },
              { id: 'ps13', sentence: 'Wir [blank] durch den Wald [blank]. (wandern)', answers: ['sind', 'gewandert'] },
              { id: 'ps14', sentence: 'Bist du [blank]? (fallen)', answers: ['gefallen'] },
              { id: 'ps15', sentence: 'Sie [blank] nach Amerika [blank]. (reisen)', answers: ['sind', 'gereist'] },
              { id: 'ps16', sentence: 'Ich [blank] schnell [blank]. (rennen)', answers: ['bin', 'gerannt'] },
              { id: 'ps17', sentence: 'Er [blank] spät [blank]. (aufwachen)', answers: ['ist', 'aufgewacht'] },
              { id: 'ps18', sentence: 'Wir [blank] im Hotel [blank]. (bleiben)', answers: ['sind', 'geblieben'] },
              { id: 'ps19', sentence: 'Was [blank] [blank]? (geschehen)', answers: ['ist', 'geschehen'] },
              { id: 'ps20', sentence: 'Sie [blank] [blank]. (verschwinden)', answers: ['sind', 'verschwunden'] },
            ]
          },
          {
            id: 'perf-sein-t3',
            title: 'Movement & Change (3)',
            description: 'Final "sein" verb practice.',
            type: 'fill-in',
            items: [
              { id: 'ps21', sentence: 'Ich [blank] in die Schule [blank]. (radeln)', answers: ['bin', 'geradelt'] },
              { id: 'ps22', sentence: 'Er [blank] über die Straße [blank]. (kriechen)', answers: ['ist', 'gekrochen'] },
              { id: 'ps23', sentence: 'Wir [blank] ans Meer [blank]. (fahren)', answers: ['sind', 'gefahren'] },
              { id: 'ps24', sentence: 'Bist du [blank]? (erschrecken)', answers: ['erschrocken'] },
              { id: 'ps25', sentence: 'Sie [blank] [blank]. (umziehen)', answers: ['sind', 'umgezogen'] },
              { id: 'ps26', sentence: 'Ich [blank] [blank]. (einschlafen)', answers: ['bin', 'eingeschlafen'] },
              { id: 'ps27', sentence: 'Er [blank] [blank]. (aussteigen)', answers: ['ist', 'ausgestiegen'] },
              { id: 'ps28', sentence: 'Wir [blank] [blank]. (mitkommen)', answers: ['sind', 'mitgekommen'] },
              { id: 'ps29', sentence: 'Was [blank] [blank]? (begegnen)', answers: ['ist', 'begegnet'] },
              { id: 'ps30', sentence: 'Sie [blank] [blank]. (folgen)', answers: ['sind', 'gefolgt'] },
            ]
          }
        ]
      },
      {
        id: 'perfect-mix-hab-sein',
        title: 'Haben vs. Sein',
        tasks: [
          {
            id: 'perf-story-t1',
            title: 'A Day in the Life (1)',
            description: 'Complete the story using either "haben" or "sein".',
            type: 'fill-in',
            items: [
              { id: 's1', sentence: 'Ich [blank] gestern um 7 Uhr [blank]. (aufwachen)', answers: ['bin', 'aufgewacht'] },
              { id: 's2', sentence: 'Um 7:15 [blank] ich [blank]. (aufstehen)', answers: ['bin', 'aufgestanden'] },
              { id: 's3', sentence: 'Dann [blank] ich in der Küche mein Frühstück [blank]. (essen)', answers: ['habe', 'gegessen'] },
              { id: 's4', sentence: 'Nach dem Frühstück [blank] ich in mein Zimmer [blank]. (gehen)', answers: ['bin', 'gegangen'] },
              { id: 's5', sentence: 'Dann [blank] ich mich im Badezimmer [blank]. (waschen)', answers: ['habe', 'gewaschen'] },
              { id: 's6', sentence: 'Danach [blank] ich Radio [blank]. (hören)', answers: ['habe', 'gehört'] },
              { id: 's7', sentence: 'Um 7:45 [blank] ich ins Wohnzimmer [blank]. (gehen)', answers: ['bin', 'gegangen'] },
              { id: 's8', sentence: 'Hier [blank] ich [blank]. (fernsehen)', answers: ['habe', 'ferngesehen'] },
              { id: 's9', sentence: 'Ich [blank] mit dem Bus zur Schule [blank]. (fahren)', answers: ['bin', 'gefahren'] },
              { id: 's10', sentence: 'In der Schule [blank] ich Deutsch [blank]. (lernen)', answers: ['habe', 'gelernt'] },
            ]
          },
          {
            id: 'perf-story-t2',
            title: 'A Day in the Life (2)',
            description: 'More story practice.',
            type: 'fill-in',
            items: [
              { id: 's11', sentence: 'Nach der Schule [blank] ich nach Hause [blank]. (kommen)', answers: ['bin', 'gekommen'] },
              { id: 's12', sentence: 'Ich [blank] meine Hausaufgaben [blank]. (machen)', answers: ['habe', 'gemacht'] },
              { id: 's13', sentence: 'Dann [blank] ich Fußball [blank]. (spielen)', answers: ['habe', 'gespielt'] },
              { id: 's14', sentence: 'Ich [blank] viel [blank]. (laufen)', answers: ['bin', 'gelaufen'] },
              { id: 's15', sentence: 'Am Abend [blank] ich Pizza [blank]. (bestellen)', answers: ['habe', 'bestellt'] },
              { id: 's16', sentence: 'Ich [blank] sie mit Genuss [blank]. (essen)', answers: ['habe', 'gegessen'] },
              { id: 's17', sentence: 'Danach [blank] ich ein Buch [blank]. (lesen)', answers: ['habe', 'gelesen'] },
              { id: 's18', sentence: 'Um 22 Uhr [blank] ich ins Bett [blank]. (gehen)', answers: ['bin', 'gegangen'] },
              { id: 's19', sentence: 'Ich [blank] sofort [blank]. (einschlafen)', answers: ['bin', 'eingeschlafen'] },
              { id: 's20', sentence: 'Ich [blank] gut [blank]. (schlafen)', answers: ['habe', 'geschlafen'] },
            ]
          },
          {
            id: 'perf-story-t3',
            title: 'A Weekend Trip',
            description: 'Complete the story about a weekend trip.',
            type: 'fill-in',
            items: [
              { id: 's21', sentence: 'Letztes Wochenende [blank] wir nach Berlin [blank]. (fahren)', answers: ['sind', 'gefahren'] },
              { id: 's22', sentence: 'Wir [blank] im Hotel [blank]. (einchecken)', answers: ['haben', 'eingecheckt'] },
              { id: 's23', sentence: 'Dann [blank] wir die Stadt [blank]. (besichtigen)', answers: ['haben', 'besichtigt'] },
              { id: 's24', sentence: 'Wir [blank] viel [blank]. (laufen)', answers: ['sind', 'gelaufen'] },
              { id: 's25', sentence: 'Am Abend [blank] wir in ein Restaurant [blank]. (gehen)', answers: ['sind', 'gegangen'] },
              { id: 's26', sentence: 'Wir [blank] typisch deutsches Essen [blank]. (probieren)', answers: ['haben', 'probiert'] },
              { id: 's27', sentence: 'Es [blank] sehr gut [blank]. (schmecken)', answers: ['hat', 'geschmeckt'] },
              { id: 's28', sentence: 'Am Sonntag [blank] wir ein Museum [blank]. (besuchen)', answers: ['haben', 'besucht'] },
              { id: 's29', sentence: 'Um 18 Uhr [blank] wir wieder nach Hause [blank]. (fliegen)', answers: ['sind', 'geflogen'] },
              { id: 's30', sentence: 'Die Reise [blank] uns sehr [blank]. (gefallen)', answers: ['hat', 'gefallen'] },
            ]
          }
        ]
      },
      {
        id: 'perfect-ref-sep',
        title: 'Reflexive & Separable',
        tasks: [
          {
            id: 'perf-ref-t1',
            title: 'Reflexive Perfect',
            description: 'Remember the position of the reflexive pronoun.',
            type: 'fill-in',
            items: [
              { id: 'pref1', sentence: 'Ich [blank] [blank] im Badezimmer [blank]. (sich waschen)', answers: ['habe', 'mich', 'gewaschen'] },
              { id: 'pref2', sentence: 'Nach dem Spiel [blank] wir [blank] [blank]. (sich ausruhen)', answers: ['haben', 'uns', 'ausgeruht'] },
              { id: 'pref3', sentence: 'Ich [blank] [blank] schnell [blank]. (sich ausziehen)', answers: ['habe', 'mich', 'ausgezogen'] },
              { id: 'pref4', sentence: 'Ich [blank] [blank] [blank]. (sich umziehen)', answers: ['habe', 'mich', 'umgezogen'] },
              { id: 'pref5', sentence: 'Im Wald [blank] wir [blank] [blank]. (sich verlaufen)', answers: ['haben', 'uns', 'verlaufen'] },
              { id: 'pref6', sentence: 'Dieter [blank] [blank] auf seine Kollegen [blank]. (sich verlassen)', answers: ['hat', 'sich', 'verlassen'] },
              { id: 'pref7', sentence: 'Die Gäste [blank] [blank] [blank]. (sich beschweren)', answers: ['haben', 'sich', 'beschwert'] },
              { id: 'pref8', sentence: 'Christoph [blank] [blank] schnell [blank]. (sich erholen)', answers: ['hat', 'sich', 'erholt'] },
              { id: 'pref9', sentence: 'Birgit [blank] [blank] nicht gut [blank]. (sich vorbereiten)', answers: ['hat', 'sich', 'vorbereitet'] },
              { id: 'pref10', sentence: 'Gestern [blank] ich [blank] wirklich [blank]. (sich ärgern)', answers: ['habe', 'mich', 'geärgert'] },
            ]
          },
          {
            id: 'perf-sep-t2',
            title: 'Separable Perfect (1)',
            description: 'The "ge" goes between the prefix and the verb stem.',
            type: 'fill-in',
            items: [
              { id: 'psep1', sentence: 'Die Schüler [blank] ihre Bücher [blank]. (aufmachen)', answers: ['haben', 'aufgemacht'] },
              { id: 'psep2', sentence: 'Ich [blank] das Licht erst um Mitternacht [blank]. (ausschalten)', answers: ['habe', 'ausgeschaltet'] },
              { id: 'psep3', sentence: 'Warum [blank] du nicht [blank]? (aufräumen)', answers: ['hast', 'aufgeräumt'] },
              { id: 'psep4', sentence: 'Wer [blank] [blank]? (abtrocknen)', answers: ['hat', 'abgetrocknet'] },
              { id: 'psep5', sentence: 'Mein Vater und ich [blank] [blank]. (abwaschen)', answers: ['haben', 'abgewaschen'] },
              { id: 'psep6', sentence: 'Der Lehrer [blank] die Tür [blank]. (zumachen)', answers: ['hat', 'zugemacht'] },
              { id: 'psep7', sentence: '[blank] ihr die Vokabeln [blank]? (aufschreiben)', answers: ['Habt', 'aufgeschrieben'] },
              { id: 'psep8', sentence: 'Die Polizei [blank] das Geld nicht [blank]. (zurückgeben)', answers: ['hat', 'zurückgegeben'] },
              { id: 'psep9', sentence: 'Ich [blank] den Brief nicht [blank]. (wiederfinden)', answers: ['habe', 'wiedergefunden'] },
              { id: 'psep10', sentence: 'Der Hausmeister [blank] us [blank]. (hineinlassen)', answers: ['hat', 'hineingelassen'] },
            ]
          },
          {
            id: 'perf-sep-t3',
            title: 'Separable Perfect (2)',
            description: 'More practice with separable verbs in the perfect tense.',
            type: 'fill-in',
            items: [
              { id: 'psep11', sentence: 'Ich [blank] dich gestern [blank]. (anrufen)', answers: ['habe', 'angerufen'] },
              { id: 'psep12', sentence: 'Wann [blank] der Film [blank]? (anfangen)', answers: ['hat', 'angefangen'] },
              { id: 'psep13', sentence: 'Wir [blank] gestern [blank]. (fernsehen)', answers: ['haben', 'ferngesehen'] },
              { id: 'psep14', sentence: 'Er [blank] die Tür [blank]. (aufschließen)', answers: ['hat', 'aufgeschlossen'] },
              { id: 'psep15', sentence: 'Hast du das Zimmer [blank]? (aufräumen)', answers: ['aufgeräumt'] },
              { id: 'psep16', sentence: 'Sie [blank] uns [blank]. (mitbringen)', answers: ['haben', 'mitgebracht'] },
              { id: 'psep17', sentence: 'Ich [blank] heute früh [blank]. (aufstehen)', answers: ['bin', 'aufgestanden'] },
              { id: 'psep18', sentence: 'Wir [blank] pünktlich [blank]. (ankommen)', answers: ['sind', 'angekommen'] },
              { id: 'psep19', sentence: 'Wann [blank] du [blank]? (losfahren)', answers: ['bist', 'losgefahren'] },
              { id: 'psep20', sentence: 'Er [blank] das Licht [blank]. (ausmachen)', answers: ['hat', 'ausgemacht'] },
            ]
          }
        ]
      },
      {
        id: 'perfect-inseparable',
        title: 'Inseparable Perfect',
        tasks: [
          {
            id: 'perf-insep-t1',
            title: 'Inseparable Perfect (1)',
            description: 'Inseparable verbs do NOT use "ge-" in the past participle.',
            type: 'fill-in',
            items: [
              { id: 'pins1', sentence: 'Ich [blank] meine Oma [blank]. (besuchen)', answers: ['habe', 'besucht'] },
              { id: 'pins2', sentence: 'Er [blank] eine Geschichte [blank]. (erzählen)', answers: ['hat', 'erzählt'] },
              { id: 'pins3', sentence: 'Wir [blank] die Aufgabe [blank]. (verstehen)', answers: ['haben', 'verstanden'] },
              { id: 'pins4', sentence: 'Hast du die Rechnung [blank]? (bezahlen)', answers: ['bezahlt'] },
              { id: 'pins5', sentence: 'Sie [blank] das Problem [blank]. (erklären)', answers: ['hat', 'erklärt'] },
              { id: 'pins6', sentence: 'Ich [blank] meinen Schlüssel [blank]. (vergessen)', answers: ['habe', 'vergessen'] },
              { id: 'pins7', sentence: 'Der Hund [blank] das Spielzeug [blank]. (zerstören)', answers: ['hat', 'zerstört'] },
              { id: 'pins8', sentence: 'Wir [blank] das Spiel [blank]. (gewinnen)', answers: ['haben', 'gewonnen'] },
              { id: 'pins9', sentence: 'Er [blank] einen Schatz [blank]. (entdecken)', answers: ['hat', 'entdeckt'] },
              { id: 'pins10', sentence: 'Ich [blank] es dir [blank]. (versprechen)', answers: ['habe', 'versprochen'] },
            ]
          },
          {
            id: 'perf-insep-t2',
            title: 'Inseparable Perfect (2)',
            description: 'More practice with inseparable verbs.',
            type: 'fill-in',
            items: [
              { id: 'pins11', sentence: 'Ich [blank] den Brief [blank]. (beantworten)', answers: ['habe', 'beantwortet'] },
              { id: 'pins12', sentence: 'Er [blank] das Haus [blank]. (verkaufen)', answers: ['hat', 'verkauft'] },
              { id: 'pins13', sentence: 'Wir [blank] den Termin [blank]. (bestätigen)', answers: ['haben', 'bestätigt'] },
              { id: 'pins14', sentence: 'Hast du das [blank]? (empfehlen)', answers: ['empfohlen'] },
              { id: 'pins15', sentence: 'Sie [blank] uns [blank]. (missverstehen)', answers: ['haben', 'missverstanden'] },
              { id: 'pins16', sentence: 'Ich [blank] die Stadt [blank]. (verlassen)', answers: ['habe', 'verlassen'] },
              { id: 'pins17', sentence: 'Er [blank] das Ziel [blank]. (erreichen)', answers: ['hat', 'erreicht'] },
              { id: 'pins18', sentence: 'Wir [blank] den Fehler [blank]. (bemerken)', answers: ['haben', 'bemerkt'] },
              { id: 'pins19', sentence: 'Wann [blank] du das [blank]? (erfahren)', answers: ['hast', 'erfahren'] },
              { id: 'pins20', sentence: 'Sie [blank] den Kuchen [blank]. (genießen)', answers: ['haben', 'genossen'] },
            ]
          },
          {
            id: 'perf-mix-sep-insep',
            title: 'Mix: Separable & Inseparable',
            description: 'Decide if the verb is separable or inseparable and form the perfect tense.',
            type: 'fill-in',
            items: [
              { id: 'pmix1', sentence: 'Ich [blank] das Fenster [blank]. (aufmachen)', answers: ['habe', 'aufgemacht'] },
              { id: 'pmix2', sentence: 'Er [blank] den Schlüssel [blank]. (vergessen)', answers: ['hat', 'vergessen'] },
              { id: 'pmix3', sentence: 'Wir [blank] dich [blank]. (anrufen)', answers: ['haben', 'angerufen'] },
              { id: 'pmix4', sentence: 'Hast du die Geschichte [blank]? (erzählen)', answers: ['erzählt'] },
              { id: 'pmix5', sentence: 'Sie [blank] den Brief [blank]. (beantworten)', answers: ['hat', 'beantwortet'] },
              { id: 'pmix6', sentence: 'Ich [blank] den Fernseher [blank]. (anmachen)', answers: ['habe', 'angemacht'] },
              { id: 'pmix7', sentence: 'Wir [blank] das Zimmer [blank]. (aufräumen)', answers: ['haben', 'aufgeräumt'] },
              { id: 'pmix8', sentence: 'Er [blank] den Termin [blank]. (verpassen)', answers: ['hat', 'verpasst'] },
              { id: 'pmix9', sentence: 'Du [blank] das Licht [blank]. (ausschalten)', answers: ['hast', 'ausgeschaltet'] },
              { id: 'pmix10', sentence: 'Ich [blank] die Aufgabe [blank]. (verstehen)', answers: ['habe', 'verstanden'] },
            ]
          }
        ]
      },
      {
        id: 'perfect-mixture',
        title: 'Perfect Mixture',
        tasks: [
          {
            id: 'perf-mix-t1',
            title: 'Mixed Practice (1)',
            description: 'A mix of all perfect tense rules.',
            type: 'fill-in',
            items: [
              { id: 'pm1', sentence: 'Ich [blank] zu viel Geld [blank]. (ausgeben)', answers: ['habe', 'ausgegeben'] },
              { id: 'pm2', sentence: 'Ich [blank] diese Erzählung noch nicht [blank]. (lesen)', answers: ['habe', 'gelesen'] },
              { id: 'pm3', sentence: 'Die alte Dame [blank] plötzlich [blank]. (stürzen)', answers: ['ist', 'gestürzt'] },
              { id: 'pm4', sentence: 'Der Bus [blank] fahrplanmäßig [blank]. (ankommen)', answers: ['ist', 'angekommen'] },
              { id: 'pm5', sentence: 'Wir [blank] viel schneller [blank]. (hinauffahren)', answers: ['sind', 'hinaufgefahren'] },
              { id: 'pm6', sentence: 'Die Schüler [blank] viel [blank]. (lachen)', answers: ['haben', 'gelacht'] },
              { id: 'pm7', sentence: 'Wer [blank] meine Briefmarken [blank]? (nehmen)', answers: ['hat', 'genommen'] },
              { id: 'pm8', sentence: '[blank] Sie in einem Hotel [blank]? (bleiben)', answers: ['Sind', 'geblieben'] },
              { id: 'pm9', sentence: 'Erich [blank] sein Buch [blank]. (aufschlagen)', answers: ['hat', 'aufgeschlagen'] },
              { id: 'pm10', sentence: 'Ich [blank] den Kuli nicht [blank]. (finden)', answers: ['habe', 'gefunden'] },
            ]
          },
          {
            id: 'perf-mix-t2',
            title: 'Mixed Practice (2)',
            description: 'More mixed practice.',
            type: 'fill-in',
            items: [
              { id: 'pm11', sentence: 'Ich [blank] den Film [blank]. (sehen)', answers: ['habe', 'gesehen'] },
              { id: 'pm12', sentence: 'Er [blank] nach Berlin [blank]. (fahren)', answers: ['ist', 'gefahren'] },
              { id: 'pm13', sentence: 'Wir [blank] das Lied [blank]. (singen)', answers: ['haben', 'gesungen'] },
              { id: 'pm14', sentence: 'Hast du das [blank]? (wissen)', answers: ['gewusst'] },
              { id: 'pm15', sentence: 'Sie [blank] uns [blank]. (helfen)', answers: ['haben', 'geholfen'] },
              { id: 'pm16', sentence: 'Ich [blank] heute früh [blank]. (aufstehen)', answers: ['bin', 'aufgestanden'] },
              { id: 'pm17', sentence: 'Er [blank] den Brief [blank]. (schreiben)', answers: ['hat', 'geschrieben'] },
              { id: 'pm18', sentence: 'Wir [blank] den Termin [blank]. (vergessen)', answers: ['haben', 'vergessen'] },
              { id: 'pm19', sentence: 'Was [blank] du [blank]? (tragen)', answers: ['hast', 'getragen'] },
              { id: 'pm20', sentence: 'Sie [blank] die Wahrheit [blank]. (lügen)', answers: ['haben', 'gelogen'] },
            ]
          },
          {
            id: 'perf-mix-t3',
            title: 'Mixed Practice (3)',
            description: 'Final mixed practice challenge.',
            type: 'fill-in',
            items: [
              { id: 'pm21', sentence: 'Ich [blank] den Kaffee [blank]. (trinken)', answers: ['habe', 'getrunken'] },
              { id: 'pm22', sentence: 'Er [blank] den Weg [blank]. (weisen)', answers: ['hat', 'gewiesen'] },
              { id: 'pm23', sentence: 'Wir [blank] den Brief [blank]. (senden)', answers: ['haben', 'gesendet'] },
              { id: 'pm24', sentence: 'Hast du das [blank]? (wissen)', answers: ['gewusst'] },
              { id: 'pm25', sentence: 'Sie [blank] den Film [blank]. (sehen)', answers: ['haben', 'gesehen'] },
              { id: 'pm26', sentence: 'Ich [blank] den Apfel [blank]. (beißen)', answers: ['habe', 'gebissen'] },
              { id: 'pm27', sentence: 'Er [blank] den Text [blank]. (verstehen)', answers: ['hat', 'verstanden'] },
              { id: 'pm28', sentence: 'Wir [blank] den Berg [blank]. (steigen)', answers: ['sind', 'gestiegen'] },
              { id: 'pm29', sentence: 'Was [blank] du [blank]? (tun)', answers: ['hast', 'getan'] },
              { id: 'pm30', sentence: 'Sie [blank] den Dieb [blank]. (greifen)', answers: ['haben', 'gegriffen'] },
            ]
          }
        ]
      },
    ]
  },
  {
    id: 'future',
    title: 'Future Tense',
    subunits: [
      {
        id: 'future-basics',
        title: 'Future Tense',
        tasks: [
          {
            id: 'fut-t1',
            title: 'Sentence Transformation',
            description: 'Rewrite the sentences in the future tense using "werden" + infinitive.',
            type: 'transform',
            items: [
              { id: 'f1', prefix: 'Heike kauft sich bald die neueste Platte.', sentence: 'Heike [blank].', answers: ['wird sich bald die neueste Platte kaufen'] },
              { id: 'f2', prefix: 'Wir spielen nach der Schule Fußball.', sentence: 'Wir [blank].', answers: ['werden nach der Schule Fußball spielen'] },
              { id: 'f3', prefix: 'Kommst du spät nach Hause?', sentence: '[blank] du [blank]?', answers: ['Wirst', 'spät nach Hause kommen'] },
              { id: 'f4', prefix: 'Ich lerne sehr schnell Spanisch.', sentence: 'Ich [blank].', answers: ['werde sehr schnell Spanisch lernen'] },
              { id: 'f5', prefix: 'Er trinkt dieses Bier sehr gern.', sentence: 'Er [blank].', answers: ['wird dieses Bier sehr gern trinken'] },
              { id: 'f6', prefix: 'Thorsten und Miriam gehen nächstes Jahr aufs Gymnasium.', sentence: 'Thorsten und Miriam [blank].', answers: ['werden nächstes Jahr aufs Gymnasium gehen'] },
              { id: 'f7', prefix: 'Ihr findet mich im Garten.', sentence: 'Ihr [blank].', answers: ['werdet mich im Garten finden'] },
              { id: 'f8', prefix: 'Wohnen Sie in einem Hotel, Frau Ladenthin?', sentence: '[blank] Sie [blank]?', answers: ['Werden', 'in einem Hotel wohnen'] },
              { id: 'f9', prefix: 'Wie erkennst du mich?', sentence: 'Wie [blank] du [blank]?', answers: ['wirst', 'mich erkennen'] },
              { id: 'f10', prefix: 'In den Sommerferien fahre ich nach Kreta.', sentence: 'In den Sommerferien [blank].', answers: ['werde ich nach Kreta fahren'] },
            ]
          },
          {
            id: 'fut-t2',
            title: 'Future Diary',
            description: 'Form sentences about Peter\'s week in the future tense.',
            type: 'fill-in',
            items: [
              { id: 'fd1', sentence: 'Montag: Er [blank] um 8:20 Uhr zum Zahnarzt [blank]. (gehen)', answers: ['wird', 'gehen'] },
              { id: 'fd2', sentence: 'Dienstag: Er [blank] einen Brief an Oma [blank]. (schreiben)', answers: ['wird', 'schreiben'] },
              { id: 'fd3', sentence: 'Mittwoch: Er [blank] um 19:00 Uhr Martin [blank]. (treffen)', answers: ['wird', 'treffen'] },
              { id: 'fd4', sentence: 'Donnerstag: Er [blank] im Garten [blank]. (arbeiten)', answers: ['wird', 'arbeiten'] },
              { id: 'fd5', sentence: 'Freitag: Er [blank] abends [blank]. (fernsehen)', answers: ['wird', 'fernsehen'] },
              { id: 'fd6', sentence: 'Samstag: Er [blank] eine Stunde Klavier [blank]. (üben)', answers: ['wird', 'üben'] },
              { id: 'fd7', sentence: 'Sonntag: Er [blank] mit Susi [blank]. (telefonieren)', answers: ['wird', 'telefonieren'] },
              { id: 'fd8', sentence: 'Anneliese und Christine [blank] schwimmen [blank]. (gehen)', answers: ['werden', 'gehen'] },
              { id: 'fd9', sentence: 'Sie [blank] Hausaufgaben [blank]. (machen)', answers: ['werden', 'machen'] },
              { id: 'fd10', sentence: 'Sie [blank] Weihnachtsgeschenke [blank]. (kaufen)', answers: ['werden', 'kaufen'] },
            ]
          },
          {
            id: 'fut-t3',
            title: 'Future Practice',
            description: 'Fill in the correct form of "werden" and the infinitive.',
            type: 'fill-in',
            items: [
              { id: 'fp1', sentence: 'Ich [blank] morgen [blank]. (kommen)', answers: ['werde', 'kommen'] },
              { id: 'fp2', sentence: 'Du [blank] das [blank]. (verstehen)', answers: ['wirst', 'verstehen'] },
              { id: 'fp3', sentence: 'Er [blank] uns [blank]. (helfen)', answers: ['wird', 'helfen'] },
              { id: 'fp4', sentence: 'Wir [blank] pünktlich [blank]. (sein)', answers: ['werden', 'sein'] },
              { id: 'fp5', sentence: 'Ihr [blank] viel Spaß [blank]. (haben)', answers: ['werdet', 'haben'] },
              { id: 'fp6', sentence: 'Sie [blank] nach Berlin [blank]. (reisen)', answers: ['werden', 'reisen'] },
              { id: 'fp7', sentence: 'Wann [blank] du [blank]? (anrufen)', answers: ['wirst', 'anrufen'] },
              { id: 'fp8', sentence: 'Ich [blank] das Auto [blank]. (waschen)', answers: ['werde', 'waschen'] },
              { id: 'fp9', sentence: 'Wir [blank] ein Haus [blank]. (bauen)', answers: ['werden', 'bauen'] },
              { id: 'fp10', sentence: 'Sie [blank] die Wahrheit [blank]. (sagen)', answers: ['werden', 'sagen'] },
            ]
          }
        ]
      },
      {
        id: 'werden-mastery',
        title: 'Forms of Werden',
        tasks: [
          {
            id: 'wer-t1',
            title: 'Conjugating Werden',
            description: 'Focus on all forms of "werden" in the future tense.',
            type: 'fill-in',
            items: [
              { id: 'w1', sentence: 'Ich [blank] morgen 16 Jahre alt. (werden)', answers: ['werde'] },
              { id: 'w2', sentence: 'Du [blank] sicher ein guter Arzt. (werden)', answers: ['wirst'] },
              { id: 'w3', sentence: 'Es [blank] bald regnen. (werden)', answers: ['wird'] },
              { id: 'w4', sentence: 'Wir [blank] euch helfen. (werden)', answers: ['werden'] },
              { id: 'w5', sentence: 'Ihr [blank] das Ziel erreichen. (werden)', answers: ['werdet'] },
              { id: 'w6', sentence: 'Sie [blank] pünktlich ankommen. (werden)', answers: ['werden'] },
              { id: 'w7', sentence: 'Wann [blank] Sie uns besuchen? (werden)', answers: ['werden'] },
              { id: 'w8', sentence: 'Mein Bruder [blank] bald Vater. (werden)', answers: ['wird'] },
              { id: 'w9', sentence: 'Wir [blank] morgen früh aufstehen. (werden)', answers: ['werden'] },
              { id: 'w10', sentence: 'Was [blank] du später von Beruf? (werden)', answers: ['wirst'] },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'conditional',
    title: 'Conditional Tense',
    subunits: [
      {
        id: 'conditional-basics',
        title: 'The "Würde" Form',
        tasks: [
          {
            id: 'cond-t1',
            title: 'Würde + Infinitive',
            description: 'Fill in the correct form of "würde" to complete the conditional sentences.',
            type: 'fill-in',
            items: [
              { id: 'c1', sentence: 'Wir [blank] ein neues Auto kaufen.', answers: ['würden'] },
              { id: 'c2', sentence: 'Harald [blank] nach Amerika fliegen.', answers: ['würde'] },
              { id: 'c3', sentence: 'Ich [blank] ein großes Haus bauen lassen.', answers: ['würde'] },
              { id: 'c4', sentence: 'Er [blank] nicht mehr in die Schule gehen.', answers: ['würde'] },
              { id: 'c5', sentence: 'Denis und Sandra [blank] die Oma in Australien besuchen.', answers: ['würden'] },
              { id: 'c6', sentence: 'Karla [blank] gar nichts machen.', answers: ['würde'] },
              { id: 'c7', sentence: 'Meine Eltern [blank] das Geld verschenken.', answers: ['würden'] },
              { id: 'c8', sentence: 'Mein Vater [blank] in den Ruhestand gehen.', answers: ['würde'] },
              { id: 'c9', sentence: 'Unsere Kollegen [blank] jeden Abend im Restaurant essen.', answers: ['würden'] },
              { id: 'c10', sentence: 'Ich [blank] ein Schwimmbad im Garten haben.', answers: ['würde'] },
            ]
          },
          {
            id: 'cond-t2',
            title: 'Conditional Scenarios',
            description: 'Complete the sentences with the correct form of "würde" and the infinitive.',
            type: 'fill-in',
            items: [
              { id: 'cs1', sentence: 'Andreas [blank] sich eine neue Stereoanlage [blank]. (besorgen)', answers: ['würde', 'besorgen'] },
              { id: 'cs2', sentence: 'Du [blank] nicht mehr deine Hausaufgaben [blank]. (machen)', answers: ['würdest', 'machen'] },
              { id: 'cs3', sentence: 'Ihr [blank] euer eigenes Zimmer [blank]. (haben)', answers: ['würdet', 'haben'] },
              { id: 'cs4', sentence: 'Wir [blank] [blank]. (umziehen)', answers: ['würden', 'umziehen'] },
              { id: 'cs5', sentence: 'Meine Frau [blank] nicht mehr zur Arbeit [blank]. (gehen)', answers: ['würde', 'gehen'] },
              { id: 'cs6', sentence: 'Mein Onkel und meine Tante [blank] regelmäßig zu uns [blank]. (kommen)', answers: ['würden', 'kommen'] },
              { id: 'cs7', sentence: 'Ich [blank] danke schön [blank]!', answers: ['würde', 'sagen'] },
              { id: 'cs8', sentence: 'Diana [blank] die Hälfte ihrer Mutter [blank]. (geben)', answers: ['würde', 'geben'] },
              { id: 'cs9', sentence: 'Und Alexandra? Sie [blank] das Geld [blank]. (sparen)', answers: ['würde', 'sparen'] },
              { id: 'cs10', sentence: 'Du [blank] nicht mehr in einem Caravan [blank]. (wohnen)', answers: ['würdest', 'wohnen'] },
            ]
          },
          {
            id: 'cond-t3',
            title: 'Mixed Conditional',
            description: 'More practice with the conditional tense.',
            type: 'fill-in',
            items: [
              { id: 'cm1', sentence: 'Er [blank] seine Nachhilfestunden [blank]. (aufgeben)', answers: ['würde', 'aufgeben'] },
              { id: 'cm2', sentence: 'Wir [blank] Drachenfliegen [blank]. (lernen)', answers: ['würden', 'lernen'] },
              { id: 'cm3', sentence: 'Ich [blank] eine Luxuswohnung in Las Vegas [blank]. (mieten)', answers: ['würde', 'mieten'] },
              { id: 'cm4', sentence: 'Mein Mann [blank] das Geld [blank]! (zählen)', answers: ['würde', 'zählen'] },
              { id: 'cm5', sentence: 'David [blank] anderen Menschen [blank]. (helfen)', answers: ['würde', 'helfen'] },
              { id: 'cm6', sentence: 'Was [blank] du mit einer Million Euro [blank]? (machen)', answers: ['würdest', 'machen'] },
              { id: 'cm7', sentence: 'Wir [blank] eine Weltreise [blank]. (planen)', answers: ['würden', 'planen'] },
              { id: 'cm8', sentence: 'Ich [blank] mir ein neues Handy [blank]. (kaufen)', answers: ['würde', 'kaufen'] },
              { id: 'cm9', sentence: 'Sie [blank] glücklicher [blank]. (sein)', answers: ['würden', 'sein'] },
              { id: 'cm10', sentence: 'Ihr [blank] mehr Zeit [blank]. (haben)', answers: ['würdet', 'haben'] },
            ]
          }
        ]
      },
      {
        id: 'wenn-clauses',
        title: 'Wenn Clauses',
        tasks: [
          {
            id: 'wen-h1',
            title: 'Wenn + Hätte/Wäre 1',
            description: 'Fill in the correct forms of "hätte" or "wäre".',
            type: 'fill-in',
            items: [
              { id: 'wh1', sentence: 'Wenn ich Zeit [blank], [blank] ich glücklich. (haben, sein)', answers: ['hätte', 'wäre'] },
              { id: 'wh2', sentence: 'Wenn du reich [blank], [blank] du ein Haus. (sein, haben)', answers: ['wärest', 'hättest'] },
              { id: 'wh3', sentence: 'Wenn er hier [blank], [blank] er uns helfen. (sein, haben)', answers: ['wäre', 'hätte'] },
              { id: 'wh4', sentence: 'Wenn wir Urlaub [blank], [blank] wir am Strand. (haben, sein)', answers: ['hätten', 'wären'] },
              { id: 'wh5', sentence: 'Wenn ihr Hunger [blank], [blank] ihr etwas essen. (haben, sein)', answers: ['hättet', 'wäret'] },
              { id: 'wh6', sentence: 'Wenn sie Mut [blank], [blank] sie es tun. (haben, sein)', answers: ['hätten', 'wären'] },
              { id: 'wh7', sentence: 'Wenn ich ein Vogel [blank], [blank] ich Flügel. (sein, haben)', answers: ['wäre', 'hätte'] },
              { id: 'wh8', sentence: 'Wenn es Sommer [blank], [blank] wir keine Jacken. (sein, haben)', answers: ['wäre', 'hätten'] },
              { id: 'wh9', sentence: 'Wenn wir Geld [blank], [blank] wir im Hotel. (haben, sein)', answers: ['hätten', 'wären'] },
              { id: 'wh10', sentence: 'Wenn du da [blank], [blank] ich keine Angst. (sein, haben)', answers: ['wärest', 'hättest'] },
            ]
          },
          {
            id: 'wen-h2',
            title: 'Wenn + Hätte/Wäre 2',
            description: 'More practice with "hätte" and "wäre" in "wenn" clauses.',
            type: 'fill-in',
            items: [
              { id: 'wh11', sentence: 'Wenn ich ein Auto [blank], [blank] ich mobil. (haben, sein)', answers: ['hätte', 'wäre'] },
              { id: 'wh12', sentence: 'Wenn du Lehrer [blank], [blank] du viel Geduld. (sein, haben)', answers: ['wärest', 'hättest'] },
              { id: 'wh13', sentence: 'Wenn sie Zeit [blank], [blank] sie bei uns. (haben, sein)', answers: ['hätte', 'wäre'] },
              { id: 'wh14', sentence: 'Wenn wir Freunde [blank], [blank] wir nicht allein. (haben, sein)', answers: ['hätten', 'wären'] },
              { id: 'wh15', sentence: 'Wenn ihr in Berlin [blank], [blank] ihr viel Spaß. (sein, haben)', answers: ['wäret', 'hättet'] },
              { id: 'wh16', sentence: 'Wenn sie Hunger [blank], [blank] sie im Restaurant. (haben, sein)', answers: ['hätten', 'wären'] },
              { id: 'wh17', sentence: 'Wenn ich du [blank], [blank] ich keine Sorgen. (sein, haben)', answers: ['wäre', 'hätte'] },
              { id: 'wh18', sentence: 'Wenn es regnen [blank], [blank] wir nass. (sein, sein)', answers: ['würde', 'wären'] },
              { id: 'wh19', sentence: 'Wenn wir Hilfe [blank], [blank] wir dankbar. (haben, sein)', answers: ['hätten', 'wären'] },
              { id: 'wh20', sentence: 'Wenn du Glück [blank], [blank] du der Gewinner. (haben, sein)', answers: ['hättest', 'wärest'] },
            ]
          },
          {
            id: 'wen-w1',
            title: 'Wenn + Würde 1',
            description: 'Fill in the correct form of "würde" and the infinitive.',
            type: 'fill-in',
            items: [
              { id: 'ww1', sentence: 'Wenn ich Zeit hätte, [blank] ich nach Paris [blank]. (reisen)', answers: ['würde', 'reisen'] },
              { id: 'ww2', sentence: 'Wenn du Geld hättest, [blank] du ein Auto [blank]. (kaufen)', answers: ['würdest', 'kaufen'] },
              { id: 'ww3', sentence: 'Wenn er uns hülfe, [blank] wir schneller [blank]. (fertig sein)', answers: ['würden', 'fertig sein'] },
              { id: 'ww4', sentence: 'Wenn wir Urlaub hätten, [blank] wir lange [blank]. (schlafen)', answers: ['würden', 'schlafen'] },
              { id: 'ww5', sentence: 'Wenn ihr Lust hättet, [blank] ihr mit uns [blank]. (kommen)', answers: ['würdet', 'kommen'] },
              { id: 'ww6', sentence: 'Wenn sie könnten, [blank] sie uns [blank]. (besuchen)', answers: ['würden', 'besuchen'] },
              { id: 'ww7', sentence: 'Wenn ich reich wäre, [blank] ich nicht mehr [blank]. (arbeiten)', answers: ['würde', 'arbeiten'] },
              { id: 'ww8', sentence: 'Wenn es nicht regnete, [blank] wir spazieren [blank]. (gehen)', answers: ['würden', 'gehen'] },
              { id: 'ww9', sentence: 'Wenn wir Zeit hätten, [blank] wir den Film [blank]. (sehen)', answers: ['würden', 'sehen'] },
              { id: 'ww10', sentence: 'Wenn du mich fragtest, [blank] ich "Ja" [blank]. (sagen)', answers: ['würde', 'sagen'] },
            ]
          },
          {
            id: 'wen-w2',
            title: 'Wenn + Würde 2',
            description: 'More practice with "würde" in "wenn" clauses.',
            type: 'fill-in',
            items: [
              { id: 'ww11', sentence: 'Wenn ich könnte, [blank] ich dir [blank]. (helfen)', answers: ['würde', 'helfen'] },
              { id: 'ww12', sentence: 'Wenn du wolltest, [blank] du es [blank]. (schaffen)', answers: ['würdest', 'schaffen'] },
              { id: 'ww13', sentence: 'Wenn sie Zeit hätte, [blank] sie uns [blank]. (anrufen)', answers: ['würde', 'anrufen'] },
              { id: 'ww14', sentence: 'Wenn wir Geld hätten, [blank] wir eine Weltreise [blank]. (machen)', answers: ['würden', 'machen'] },
              { id: 'ww15', sentence: 'Wenn ihr kämet, [blank] wir uns [blank]. (freuen)', answers: ['würden', 'freuen'] },
              { id: 'ww16', sentence: 'Wenn sie wüssten, [blank] sie es uns [blank]. (sagen)', answers: ['würden', 'sagen'] },
              { id: 'ww17', sentence: 'Wenn ich Zeit hätte, [blank] ich ein Buch [blank]. (schreiben)', answers: ['würde', 'schreiben'] },
              { id: 'ww18', sentence: 'Wenn es ginge, [blank] ich sofort [blank]. (kommen)', answers: ['würde', 'kommen'] },
              { id: 'ww19', sentence: 'Wenn wir dürften, [blank] wir hier [blank]. (bleiben)', answers: ['würden', 'bleiben'] },
              { id: 'ww20', sentence: 'Wenn du mich liebtest, [blank] du mir [blank]. (glauben)', answers: ['würdest', 'glauben'] },
            ]
          }
        ]
      },
      {
        id: 'auxiliary-mastery',
        title: 'Hätte, Wäre, Würde',
        tasks: [
          {
            id: 'aux-t1',
            title: 'All Forms',
            description: 'Practice all forms of "hätte", "wäre", and "würde".',
            type: 'fill-in',
            items: [
              { id: 'a1', sentence: 'Ich [blank] gerne ein Eis. (haben)', answers: ['hätte'] },
              { id: 'a2', sentence: 'Du [blank] gerne in Berlin. (sein)', answers: ['wärest'] },
              { id: 'a3', sentence: 'Er [blank] gerne nach Hause gehen. (würde)', answers: ['würde'] },
              { id: 'a4', sentence: 'Wir [blank] gerne mehr Zeit. (haben)', answers: ['hätten'] },
              { id: 'a5', sentence: 'Ihr [blank] gerne im Urlaub. (sein)', answers: ['wäret'] },
              { id: 'a6', sentence: 'Sie [blank] gerne ein Auto kaufen. (würde)', answers: ['würden'] },
              { id: 'a7', sentence: 'Ich [blank] gerne reich. (sein)', answers: ['wäre'] },
              { id: 'a8', sentence: 'Du [blank] gerne fliegen können. (würde)', answers: ['würdest'] },
              { id: 'a9', sentence: 'Wir [blank] gerne eine Antwort. (haben)', answers: ['hätten'] },
              { id: 'a10', sentence: 'Ihr [blank] gerne pünktlich. (sein)', answers: ['wäret'] },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'imperfect',
    title: 'Imperfect Tense (Präteritum)',
    subunits: [
      {
        id: 'imp-reg',
        title: 'Regular Verbs',
        tasks: [
          {
            id: 'imp-reg-t1',
            title: 'Daily Activities',
            description: 'Fill in the regular imperfect forms.',
            type: 'fill-in',
            items: [
              { id: 'ir1', sentence: 'Gestern nachmittag [blank] ich Tennis im Park. (spielen)', answers: ['spielte'] },
              { id: 'ir2', sentence: 'Es war sehr heiß und ich [blank] sehr. (schwitzen)', answers: ['schwitzte'] },
              { id: 'ir3', sentence: 'Danach [blank] ich mir eine große Flasche Limo. (kaufen)', answers: ['kaufte'] },
              { id: 'ir4', sentence: 'Das [blank] aber prima! (schmecken)', answers: ['schmeckte'] },
              { id: 'ir5', sentence: 'Hinterher [blank] ich und meine zwei Freunde uns Popmusik im Radio [blank]. (anhören)', answers: ['hörten', 'an'] },
              { id: 'ir6', sentence: 'Letzten Sommer [blank] wir zum ersten Mal nach Frankreich. (reisen)', answers: ['reisten'] },
              { id: 'ir7', sentence: 'Ich [blank] eine Kamera. (borgen)', answers: ['borgte'] },
              { id: 'ir8', sentence: 'Ich [blank] sehr viele Aufnahmen. (machen)', answers: ['machte'] },
              { id: 'ir9', sentence: 'Jeden Abend [blank] wir in der Disko. (tanzen)', answers: ['tanzten'] },
              { id: 'ir10', sentence: 'Ich [blank] viele neue Freunde kennen. (lernen)', answers: ['lernte'] },
            ]
          },
          {
            id: 'imp-reg-t2',
            title: 'Home and School',
            description: 'Fill in the regular imperfect forms.',
            type: 'fill-in',
            items: [
              { id: 'ir11', sentence: 'Letztes Wochenende [blank] ich fleißig zu Hause. (arbeiten)', answers: ['arbeitete'] },
              { id: 'ir12', sentence: 'Ich [blank] den Rasen. (mähen)', answers: ['mähte'] },
              { id: 'ir13', sentence: 'Ich [blank] Staub. (wischen)', answers: ['wischte'] },
              { id: 'ir14', sentence: 'Ich [blank] Kleidung. (bügeln)', answers: ['bügelte'] },
              { id: 'ir15', sentence: 'Ich [blank] auch. (kochen)', answers: ['kochte'] },
              { id: 'ir16', sentence: 'Heute [blank] Georg in der Schule sehr gut [blank]. (aufpassen)', answers: ['passte', 'auf'] },
              { id: 'ir17', sentence: 'Er [blank] viel in Mathe. (lernen)', answers: ['lernte'] },
              { id: 'ir18', sentence: 'Er [blank] aufmerksam in Französisch [blank]. (zuhören)', answers: ['hörte', 'zu'] },
              { id: 'ir19', sentence: 'Er [blank] alle Fragen richtig zu beantworten. (versuchen)', answers: ['versuchte'] },
              { id: 'ir20', sentence: 'Zu Hause [blank] er sorgfältig seine Hausaufgaben. (machen)', answers: ['machte'] },
            ]
          }
        ]
      },
      {
        id: 'imp-irr',
        title: 'Irregular Verbs',
        tasks: [
          {
            id: 'imp-irr-t1',
            title: 'Holiday and Bad Day',
            description: 'Fill in the irregular imperfect forms.',
            type: 'fill-in',
            items: [
              { id: 'ii1', sentence: 'Letztes Jahr [blank] wir nach Dänemark. (fahren)', answers: ['fuhren'] },
              { id: 'ii2', sentence: 'Das Wetter [blank] überraschend gut. (sein)', answers: ['war'] },
              { id: 'ii3', sentence: 'Wir [blank] in einem Ferienhaus. (bleiben)', answers: ['blieben'] },
              { id: 'ii4', sentence: 'Jeden Tag [blank] wir spazieren. (gehen)', answers: ['gingen'] },
              { id: 'ii5', sentence: 'Dänemark [blank] uns wirklich gut. (gefallen)', answers: ['gefiel'] },
              { id: 'ii6', sentence: 'Gestern [blank] ein schlechter Tag. (sein)', answers: ['war'] },
              { id: 'ii7', sentence: 'Ich [blank] spät [blank]. (aufstehen)', answers: ['stand', 'auf'] },
              { id: 'ii8', sentence: 'Ich [blank] mit dem Rad zur Schule. (fahren)', answers: ['fuhr'] },
              { id: 'ii9', sentence: 'Ich [blank] zehn Minuten zu spät [blank]. (ankommen)', answers: ['kam', 'an'] },
              { id: 'ii10', sentence: 'Ich [blank] meine Hausaufgaben. (verlieren)', answers: ['verlor'] },
            ]
          },
          {
            id: 'imp-irr-t2',
            title: 'The Bad Day Continues',
            description: 'Fill in the irregular imperfect forms.',
            type: 'fill-in',
            items: [
              { id: 'ii11', sentence: 'Ich [blank] auf dem Schulhof [blank]. (hinfallen)', answers: ['fiel', 'hin'] },
              { id: 'ii12', sentence: 'Ich [blank] einen Roman. (lesen)', answers: ['las'] },
              { id: 'ii13', sentence: 'Ich [blank] mit dem Schulleiter zu sprechen. (vergessen)', answers: ['vergaß'] },
              { id: 'ii14', sentence: 'Letzten Mittwoch [blank] ich im Wohnzimmer. (sitzen)', answers: ['saß'] },
              { id: 'ii15', sentence: 'Ich [blank] wie gewöhnlich [blank]. (fernsehen)', answers: ['sah', 'fern'] },
              { id: 'ii16', sentence: 'Meine Kinder [blank] auch dabei. (sein)', answers: ['waren'] },
              { id: 'ii17', sentence: 'Plötzlich [blank] meine Frau ins Zimmer. (kommen)', answers: ['kam'] },
              { id: 'ii18', sentence: 'Sie [blank] blaß [blank]. (aussehen)', answers: ['sah', 'aus'] },
              { id: 'ii19', sentence: 'Sie [blank] zu weinen. (beginnen)', answers: ['begann'] },
              { id: 'ii20', sentence: 'Ich [blank] sofort, was los [blank]. (wissen, sein)', answers: ['wusste', 'war'] },
            ]
          },
          {
            id: 'imp-irr-t3',
            title: 'The Cat and The Lottery',
            description: 'Fill in the irregular imperfect forms.',
            type: 'fill-in',
            items: [
              { id: 'ii21', sentence: 'Unsere Katze [blank] auf dem Tisch. (schlafen)', answers: ['schlief'] },
              { id: 'ii22', sentence: 'Die Uhr [blank] neun Uhr. (schlagen)', answers: ['schlug'] },
              { id: 'ii23', sentence: 'Die Katze [blank] [blank]. (aufstehen)', answers: ['stand', 'auf'] },
              { id: 'ii24', sentence: 'Sie [blank] mich fragend [blank]. (ansehen)', answers: ['sah', 'an'] },
              { id: 'ii25', sentence: 'Ich [blank] diesen Blick. (verstehen)', answers: ['verstand'] },
              { id: 'ii26', sentence: 'Ich [blank] ihr eine Schüssel Milch. (geben)', answers: ['gab'] },
              { id: 'ii27', sentence: 'Sie [blank] die Milch. (trinken)', answers: ['trank'] },
              { id: 'ii28', sentence: 'Sie [blank] zum Sofa. (kriechen)', answers: ['kroch'] },
              { id: 'ii29', sentence: 'Sie [blank] hinauf. (springen)', answers: ['sprang'] },
              { id: 'ii30', sentence: 'Sie [blank] an zu schnurren. (fangen)', answers: ['fing'] },
            ]
          }
        ]
      },
      {
        id: 'imp-mixed',
        title: 'Mixed Practice',
        tasks: [
          {
            id: 'imp-mix-t1',
            title: 'Mixed Sentences 1',
            description: 'Fill in the correct imperfect form.',
            type: 'fill-in',
            items: [
              { id: 'im1', sentence: 'Wir [blank] voriges Jahr in die Schweiz. (fahren)', answers: ['fuhren'] },
              { id: 'im2', sentence: 'Meine Mutter [blank] mir dieses Halsband zum Geburtstag. (schenken)', answers: ['schenkte'] },
              { id: 'im3', sentence: 'Der alte Mann [blank] vier Glas Bier. (trinken)', answers: ['trank'] },
              { id: 'im4', sentence: 'Die Brüder [blank] die Küste. (erreichen)', answers: ['erreichten'] },
              { id: 'im5', sentence: 'Ich [blank] nur die Hälfte davon. (bekommen)', answers: ['bekam'] },
              { id: 'im6', sentence: 'Er [blank] damals direkt in der Stadtmitte. (wohnen)', answers: ['wohnte'] },
              { id: 'im7', sentence: 'Beide Mädchen [blank] eine dunkle Hose. (tragen)', answers: ['trugen'] },
              { id: 'im8', sentence: 'Susanne [blank] nur 50 Pfund. (wechseln)', answers: ['wechselte'] },
              { id: 'im9', sentence: 'Die Schulkinder [blank] die Straße. (überqueren)', answers: ['überquerten'] },
              { id: 'im10', sentence: '[blank] du, dass Martin 50 Jahre alt ist? (wissen)', answers: ['Wusstest'] },
            ]
          },
          {
            id: 'imp-mix-t2',
            title: 'Mixed Sentences 2',
            description: 'Fill in the correct imperfect form.',
            type: 'fill-in',
            items: [
              { id: 'im11', sentence: 'Ich [blank] meinem Bruder, als er in der Türkei [blank]. (schreiben, sein)', answers: ['schrieb', 'war'] },
              { id: 'im12', sentence: 'Roland [blank] fast jeden Tag Badminton. (spielen)', answers: ['spielte'] },
              { id: 'im13', sentence: 'Susi [blank] sich einen teuren Tennisschläger. (kaufen)', answers: ['kaufte'] },
              { id: 'im14', sentence: 'Die Sonne [blank] oft auf Urlaub. (scheinen)', answers: ['schien'] },
              { id: 'im15', sentence: 'In den Ferien [blank] wir nur selten eine Zeitung. (lesen)', answers: ['lasen'] },
              { id: 'im16', sentence: 'Er [blank] sehr gerne Spaghetti. (essen)', answers: ['aß'] },
              { id: 'im17', sentence: 'Ich [blank] das Formular rasch [blank]. (ausfüllen)', answers: ['füllte', 'aus'] },
              { id: 'im18', sentence: 'Auf dem Heimweg [blank] mir ein junger Mann. (folgen)', answers: ['folgte'] },
              { id: 'im19', sentence: 'Der Film [blank] um 19:30 Uhr. (beginnen)', answers: ['begann'] },
              { id: 'im20', sentence: 'Das Theaterstück [blank] uns sehr gut. (gefallen)', answers: ['gefiel'] },
            ]
          },
          {
            id: 'imp-mix-t3',
            title: 'Mixed Sentences 3',
            description: 'Fill in the correct imperfect form.',
            type: 'fill-in',
            items: [
              { id: 'im21', sentence: 'Mein Opa [blank] mir eine riesengroße Geburtstagskarte. (schicken)', answers: ['schickte'] },
              { id: 'im22', sentence: 'Wir [blank] oft spazieren. (gehen)', answers: ['gingen'] },
              { id: 'im23', sentence: 'Thorsten und Astrid [blank] den Tisch. (decken)', answers: ['deckten'] },
              { id: 'im24', sentence: 'Er [blank] schnell nach links [blank]. (einbiegen)', answers: ['bog', 'ein'] },
              { id: 'im25', sentence: 'Ich [blank] allmählich den Rauch. (riechen)', answers: ['roch'] },
              { id: 'im26', sentence: 'Dann [blank] ich die Flammen. (sehen)', answers: ['sah'] },
              { id: 'im27', sentence: 'Wir [blank] das Problem sofort. (lösen)', answers: ['lösten'] },
              { id: 'im28', sentence: 'Sie [blank] den ganzen Abend. (lachen)', answers: ['lachten'] },
              { id: 'im29', sentence: 'Er [blank] mir die Wahrheit. (sagen)', answers: ['sagte'] },
              { id: 'im30', sentence: 'Ich [blank] meine Tasche im Bus. (vergessen)', answers: ['vergaß'] },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'pluperfect',
    title: 'Pluperfect Tense (Plusquamperfekt)',
    subunits: [
      {
        id: 'plu-basics',
        title: 'Pluperfect Basics',
        tasks: [
          {
            id: 'plu-t1',
            title: 'Pluperfect Sentences 1',
            description: 'Fill in the correct pluperfect form (hatte/war + participle).',
            type: 'fill-in',
            items: [
              { id: 'pl1', sentence: 'Nachdem wir den Film [blank] [blank], gingen wir ins Restaurant. (sehen)', answers: ['gesehen', 'hatten'] },
              { id: 'pl2', sentence: 'Er [blank] schon [blank], als ich am Bahnhof ankam. (losfahren)', answers: ['war', 'losgefahren'] },
              { id: 'pl3', sentence: 'Ich [blank] ihn seit Jahren nicht [blank]. (sehen)', answers: ['hatte', 'gesehen'] },
              { id: 'pl4', sentence: 'Die Kinder [blank] schon zu Mittag [blank], als ich nach Hause kam. (essen)', answers: ['hatten', 'gegessen'] },
              { id: 'pl5', sentence: 'Die Fußgänger [blank] das Auto nicht [blank], bis es zu spät war. (bemerken)', answers: ['hatten', 'bemerkt'] },
              { id: 'pl6', sentence: 'Klaus [blank] in die Stadt [blank], um Ersatzteile zu kaufen. (gehen)', answers: ['war', 'gegangen'] },
              { id: 'pl7', sentence: 'Bis gestern [blank] wir uns nicht [blank]. (kennenlernen)', answers: ['hatten', 'kennengelernt'] },
              { id: 'pl8', sentence: 'Obwohl Karola fast zwei Stunden [blank] [blank], wollte sie nicht gehen. (warten)', answers: ['gewartet', 'hatte'] },
              { id: 'pl9', sentence: 'Max [blank] [blank] hereinzukommen, aber ohne Erfolg. (versuchen)', answers: ['hatte', 'versucht'] },
              { id: 'pl10', sentence: 'Die Eltern [blank] zu Hause [blank], während die Kinder verreisten. (bleiben)', answers: ['waren', 'geblieben'] },
            ]
          },
          {
            id: 'plu-t2',
            title: 'Pluperfect Sentences 2',
            description: 'Fill in the correct pluperfect form.',
            type: 'fill-in',
            items: [
              { id: 'pl11', sentence: 'Bis heute [blank] ich immer nach Brüssel [blank]. (fliegen)', answers: ['war', 'geflogen'] },
              { id: 'pl12', sentence: 'Sobald Thorsten seine Hausaufgaben [blank] [blank], verließ er das Haus. (fertigschreiben)', answers: ['fertiggeschrieben', 'hatte'] },
              { id: 'pl13', sentence: 'Obwohl meine Freunde nie zuvor in Düsseldorf [blank] [blank], fanden sie das Haus schnell. (sein)', answers: ['gewesen', 'waren'] },
              { id: 'pl14', sentence: 'Ich dachte, dass er mich nicht [blank] [blank]. (hören)', answers: ['gehört', 'hatte'] },
              { id: 'pl15', sentence: 'Bevor er Zeit [blank] [blank], ist der Unfall geschehen. (haben)', answers: ['gehabt', 'hatte'] },
              { id: 'pl16', sentence: 'Obgleich seine Frau vor dreißig Jahren [blank] [blank], hatte er nicht wieder geheiratet. (sterben)', answers: ['gestorben', 'war'] },
              { id: 'pl17', sentence: 'Dass Martin 50.000 Euro [blank] [blank], wussten wir doch alle. (gewinnen)', answers: ['gewonnen', 'hatte'] },
              { id: 'pl18', sentence: 'Dirk und Carsten [blank] die alten Briefmarken schon längst [blank]. (verkaufen)', answers: ['hatten', 'verkauft'] },
              { id: 'pl19', sentence: 'Weißt du, ob er damals meinen Brief [blank] [blank]? (erhalten)', answers: ['erhalten', 'hatte'] },
              { id: 'pl20', sentence: 'So was Komisches [blank] meine Frau und ich nie zuvor [blank]. (erfahren)', answers: ['hatten', 'erfahren'] },
            ]
          },
          {
            id: 'plu-t3',
            title: 'Pluperfect Sentences 3',
            description: 'Fill in the correct pluperfect form.',
            type: 'fill-in',
            items: [
              { id: 'pl21', sentence: 'Julia [blank] ihn zum ersten Mal auf einer Party [blank]. (treffen)', answers: ['hatte', 'getroffen'] },
              { id: 'pl22', sentence: 'Warum [blank] du eigentlich in den Wald [blank]? (gehen)', answers: ['warst', 'gegangen'] },
              { id: 'pl23', sentence: 'Die Arbeiter [blank] gar nichts [blank]. (machen)', answers: ['hatten', 'gemacht'] },
              { id: 'pl24', sentence: 'Bis Anna mit Georg [blank] [blank], [blank] sie nichts. (sprechen, wissen)', answers: ['gesprochen', 'hatte', 'wusste'] },
              { id: 'pl25', sentence: 'So etwas Furchtbares [blank] wir nie zuvor [blank]. (erleben)', answers: ['hatten', 'erlebt'] },
              { id: 'pl26', sentence: 'Nachdem er die Prüfung [blank] [blank], feierte er. (bestehen)', answers: ['bestanden', 'hatte'] },
              { id: 'pl27', sentence: 'Sie [blank] bereits [blank], als wir ankamen. (gehen)', answers: ['war', 'gegangen'] },
              { id: 'pl28', sentence: 'Ich [blank] das Buch schon [blank]. (lesen)', answers: ['hatte', 'gelesen'] },
              { id: 'pl29', sentence: 'Wir [blank] uns lange nicht [blank]. (sehen)', answers: ['hatten', 'gesehen'] },
              { id: 'pl30', sentence: 'Er [blank] den Schlüssel [blank]. (verlieren)', answers: ['hatte', 'verloren'] },
            ]
          },
          {
            id: 'plu-nachdem',
            title: 'Focus on "Nachdem"',
            description: 'All sentences use "nachdem". Remember: Pluperfect in the "nachdem" clause!',
            type: 'fill-in',
            items: [
              { id: 'n1', sentence: 'Nachdem er [blank] [blank], ging er schlafen. (essen)', answers: ['gegessen', 'hatte'] },
              { id: 'n2', sentence: 'Nachdem wir [blank] [blank], fing die Party an. (ankommen)', answers: ['angekommen', 'waren'] },
              { id: 'n3', sentence: 'Nachdem sie das Buch [blank] [blank], gab sie es mir. (lesen)', answers: ['gelesen', 'hatte'] },
              { id: 'n4', sentence: 'Nachdem ich meine Hausaufgaben [blank] [blank], durfte ich spielen. (machen)', answers: ['gemacht', 'hatte'] },
              { id: 'n5', sentence: 'Nachdem der Film [blank] [blank], gingen wir nach Hause. (enden)', answers: ['geendet', 'hatte'] },
              { id: 'n6', sentence: 'Nachdem du [blank] [blank], fühltest du dich besser. (duschen)', answers: ['geduscht', 'hattest'] },
              { id: 'n7', sentence: 'Nachdem sie die Tür [blank] [blank], schaltete sie das Licht ein. (schließen)', answers: ['geschlossen', 'hatte'] },
              { id: 'n8', sentence: 'Nachdem wir den Berg [blank] [blank], machten wir eine Pause. (besteigen)', answers: ['bestiegen', 'hatten'] },
              { id: 'n9', sentence: 'Nachdem er das Auto [blank] [blank], verkaufte er es. (waschen)', answers: ['gewaschen', 'hatte'] },
              { id: 'n10', sentence: 'Nachdem ihr [blank] [blank], wart ihr sehr müde. (laufen)', answers: ['gelaufen', 'wart'] },
            ]
          }
        ]
      },
      {
        id: 'plu-aux',
        title: 'Hatte vs. War',
        tasks: [
          {
            id: 'plu-aux-t1',
            title: 'Choosing the Auxiliary 1',
            description: 'Decide whether to use "hatte" or "war".',
            type: 'fill-in',
            items: [
              { id: 'pa1', sentence: 'Ich [blank] das Fenster zugemacht.', answers: ['hatte'] },
              { id: 'pa2', sentence: 'Wir [blank] nach Hause gefahren.', answers: ['waren'] },
              { id: 'pa3', sentence: 'Er [blank] den ganzen Tag geschlafen.', answers: ['hatte'] },
              { id: 'pa4', sentence: 'Sie [blank] in den Park gegangen.', answers: ['waren'] },
              { id: 'pa5', sentence: 'Du [blank] mir die Wahrheit gesagt.', answers: ['hattest'] },
              { id: 'pa6', sentence: 'Das Kind [blank] schnell eingeschlafen.', answers: ['war'] },
              { id: 'pa7', sentence: 'Ihr [blank] viel gelacht.', answers: ['hattet'] },
              { id: 'pa8', sentence: 'Der Zug [blank] bereits abgefahren.', answers: ['war'] },
              { id: 'pa9', sentence: 'Ich [blank] meine Hausaufgaben vergessen.', answers: ['hatte'] },
              { id: 'pa10', sentence: 'Wir [blank] lange gewartet.', answers: ['hatten'] },
            ]
          },
          {
            id: 'plu-aux-t2',
            title: 'Choosing the Auxiliary 2',
            description: 'Decide whether to use "hatte" or "war".',
            type: 'fill-in',
            items: [
              { id: 'pa11', sentence: 'Er [blank] aus dem Fenster geschaut.', answers: ['hatte'] },
              { id: 'pa12', sentence: 'Sie [blank] nach Berlin gereist.', answers: ['war'] },
              { id: 'pa13', sentence: 'Ich [blank] ein Eis gekauft.', answers: ['hatte'] },
              { id: 'pa14', sentence: 'Wir [blank] den Film gesehen.', answers: ['hatten'] },
              { id: 'pa15', sentence: 'Du [blank] zu spät gekommen.', answers: ['warst'] },
              { id: 'pa16', sentence: 'Ihr [blank] das Haus verlassen.', answers: ['hattet'] },
              { id: 'pa17', sentence: 'Sie [blank] im Garten gearbeitet.', answers: ['hatten'] },
              { id: 'pa18', sentence: 'Der Hund [blank] weggelaufen.', answers: ['war'] },
              { id: 'pa19', sentence: 'Ich [blank] die Tür abgeschlossen.', answers: ['hatte'] },
              { id: 'pa20', sentence: 'Wir [blank] den Berg bestiegen.', answers: ['waren'] },
            ]
          },
          {
            id: 'plu-aux-t3',
            title: 'Choosing the Auxiliary 3',
            description: 'Decide whether to use "hatte" or "war".',
            type: 'fill-in',
            items: [
              { id: 'pa21', sentence: 'Er [blank] das Buch gelesen.', answers: ['hatte'] },
              { id: 'pa22', sentence: 'Sie [blank] in die Stadt gefahren.', answers: ['war'] },
              { id: 'pa23', sentence: 'Ich [blank] den Brief geschrieben.', answers: ['hatte'] },
              { id: 'pa24', sentence: 'Wir [blank] den Termin vergessen.', answers: ['hatten'] },
              { id: 'pa25', sentence: 'Du [blank] den Schlüssel gefunden.', answers: ['hattest'] },
              { id: 'pa26', sentence: 'Ihr [blank] den Kuchen gegessen.', answers: ['hattet'] },
              { id: 'pa27', sentence: 'Sie [blank] nach Hause gekommen.', answers: ['waren'] },
              { id: 'pa28', sentence: 'Der Vogel [blank] weggeflogen.', answers: ['war'] },
              { id: 'pa29', sentence: 'Ich [blank] die Musik gehört.', answers: ['hatte'] },
              { id: 'pa30', sentence: 'Wir [blank] das Ziel erreicht.', answers: ['hatten'] },
            ]
          }
        ]
      },
      {
        id: 'plu-narrative',
        title: 'Narrative Past',
        tasks: [
          {
            id: 'plu-nar-t1',
            title: 'Imperfect vs. Pluperfect 1',
            description: 'Fill in the correct tense (Imperfect for the main action, Pluperfect for the earlier action).',
            type: 'fill-in',
            items: [
              { id: 'pn1', sentence: 'Nachdem er [blank] [blank], [blank] er zur Arbeit. (frühstücken, gehen)', answers: ['gefrühstückt', 'hatte', 'ging|ist gegangen'] },
              { id: 'pn2', sentence: 'Als wir [blank], [blank] der Film bereits [blank]. (ankommen, beginnen)', answers: ['ankamen|sind angekommen', 'hatte', 'begonnen'] },
              { id: 'pn3', sentence: 'Ich [blank] den Mann, weil ich ihn schon einmal [blank] [blank]. (erkennen, sehen)', answers: ['erkannte|habe erkannt', 'gesehen', 'hatte'] },
              { id: 'pn4', sentence: 'Sie [blank] müde, weil sie die ganze Nacht [blank] [blank]. (sein, arbeiten)', answers: ['war|ist gewesen', 'gearbeitet', 'hatte'] },
              { id: 'pn5', sentence: 'Nachdem sie das Haus [blank] [blank], [blank] sie in den Urlaub. (verkaufen, fahren)', answers: ['verkauft', 'hatten', 'fuhren|sind gefahren'] },
              { id: 'pn6', sentence: 'Er [blank] mir das Buch, das er [blank] [blank]. (geben, lesen)', answers: ['gab|hat gegeben', 'gelesen', 'hatte'] },
              { id: 'pn7', sentence: 'Als ich [blank], [blank] sie schon [blank]. (anrufen, gehen)', answers: ['anrief|hat angerufen', 'war', 'gegangen'] },
              { id: 'pn8', sentence: 'Wir [blank] Hunger, weil wir nichts [blank] [blank]. (haben, essen)', answers: ['hatten|haben gehabt', 'gegessen', 'hatten'] },
              { id: 'pn9', sentence: 'Nachdem er den Brief [blank] [blank], [blank] er ihn [blank]. (schreiben, abschicken)', answers: ['geschrieben', 'hatte', 'schickte|hat', 'ab|abgeschickt'] },
              { id: 'pn10', sentence: 'Sie [blank] glücklich, weil sie die Prüfung [blank] [blank]. (sein, bestehen)', answers: ['war|ist gewesen', 'bestanden', 'hatte'] },
            ]
          },
          {
            id: 'plu-nar-t2',
            title: 'Imperfect vs. Pluperfect 2',
            description: 'Fill in the correct tense.',
            type: 'fill-in',
            items: [
              { id: 'pn11', sentence: 'Bevor er [blank], [blank] er seine Sachen [blank]. (gehen, packen)', answers: ['ging|ist gegangen', 'hatte', 'gepackt'] },
              { id: 'pn12', sentence: 'Nachdem wir [blank] [blank], [blank] wir spazieren. (essen, gehen)', answers: ['gegessen', 'hatten', 'gingen|sind gegangen'] },
              { id: 'pn13', sentence: 'Er [blank] den Schlüssel, den er [blank] [blank]. (finden, verlieren)', answers: ['fand|hat gefunden', 'verloren', 'hatte'] },
              { id: 'pn14', sentence: 'Als sie [blank], [blank] er bereits [blank]. (kommen, gehen)', answers: ['kam|ist gekommen', 'war', 'gegangen'] },
              { id: 'pn15', sentence: 'Ich [blank] das Auto, nachdem ich es [blank] [blank]. (waschen, verkaufen)', answers: ['wusch|habe gewaschen', 'gewaschen', 'hatte'] },
              { id: 'pn16', sentence: 'Sie [blank] uns, was [blank] [blank]. (erzählen, passieren)', answers: ['erzählte|hat erzählt', 'passiert', 'war'] },
              { id: 'pn17', sentence: 'Nachdem er die Tür [blank] [blank], [blank] er das Licht [blank]. (schließen, ausmachen)', answers: ['geschlossen', 'hatte', 'machte|hat', 'aus|ausgemacht'] },
              { id: 'pn18', sentence: 'Wir [blank] den Film, den wir schon [blank] [blank]. (sehen, kennen)', answers: ['sahen|haben gesehen', 'gekannt', 'hatten'] },
              { id: 'pn19', sentence: 'Bevor sie [blank], [blank] sie [blank]. (schlafen, fernsehen)', answers: ['schlief|hat geschlafen', 'hatte', 'ferngesehen'] },
              { id: 'pn20', sentence: 'Er [blank] die Antwort, weil er [blank] [blank]. (wissen, lernen)', answers: ['wusste|hat gewusst', 'gelernt', 'hatte'] },
            ]
          },
          {
            id: 'plu-nar-t3',
            title: 'Imperfect vs. Pluperfect 3',
            description: 'Fill in the correct tense.',
            type: 'fill-in',
            items: [
              { id: 'pn21', sentence: 'Nachdem er [blank] [blank], [blank] er sich [blank]. (aufstehen, anziehen)', answers: ['aufgestanden', 'war', 'zog|hat', 'an|angezogen'] },
              { id: 'pn22', sentence: 'Sie [blank] das Geld, das sie [blank] [blank]. (nehmen, finden)', answers: ['nahm|hat genommen', 'gefunden', 'hatte'] },
              { id: 'pn23', sentence: 'Als wir [blank], [blank] die Sonne bereits [blank]. (aufwachen, aufgehen)', answers: ['aufwachten|sind aufgewacht', 'war', 'aufgegangen'] },
              { id: 'pn24', sentence: 'Ich [blank] ihm, dass ich den Brief [blank] [blank]. (sagen, schicken)', answers: ['sagte|habe gesagt', 'geschickt', 'hatte'] },
              { id: 'pn25', sentence: 'Nachdem sie [blank] [blank], [blank] sie sich viel besser. (schlafen, fühlen)', answers: ['geschlafen', 'hatte', 'fühlte|hat gefühlt'] },
              { id: 'pn26', sentence: 'Er [blank] das Haus, das er [blank] [blank]. (bauen, planen)', answers: ['baute|hat gebaut', 'geplant', 'hatte'] },
              { id: 'pn27', sentence: 'Bevor er [blank], [blank] er [blank]. (antworten, nachdenken)', answers: ['antwortete|hat geantwortet', 'hatte', 'nachgedacht'] },
              { id: 'pn28', sentence: 'Sie [blank] den Kuchen, den sie selbst [blank] [blank]. (essen, backen)', answers: ['aß|hat gegessen', 'gebacken', 'hatte'] },
              { id: 'pn29', sentence: 'Nachdem wir das Spiel [blank] [blank], [blank] wir. (verlieren, weinen)', answers: ['verloren', 'hatten', 'weinten|haben geweint'] },
              { id: 'pn30', sentence: 'Er [blank] die Nachricht, die sie ihm [blank] [blank]. (lesen, schicken)', answers: ['las|hat gelesen', 'geschickt', 'hatte'] },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    subunits: [
      {
        id: 'modal-present',
        title: 'Modals in the present tense',
        tasks: [
          {
            id: 'mod-pres-dürfen',
            title: 'Dürfen (to be allowed to)',
            description: 'Fill in the correct form of "dürfen" in the present tense.',
            type: 'fill-in',
            items: [
              { id: 'd1', sentence: 'Ich [blank] heute länger aufbleiben. (dürfen)', answers: ['darf'] },
              { id: 'd2', sentence: 'Du [blank] hier nicht parken. (dürfen)', answers: ['darfst'] },
              { id: 'd3', sentence: 'Er [blank] das Auto seines Vaters fahren. (dürfen)', answers: ['darf'] },
              { id: 'd4', sentence: 'Wir [blank] im Unterricht kein Handy benutzen. (dürfen)', answers: ['dürfen'] },
              { id: 'd5', sentence: 'Ihr [blank] jetzt nach Hause gehen. (dürfen)', answers: ['dürft'] },
              { id: 'd6', sentence: 'Sie [blank] hier rauchen. (dürfen)', answers: ['dürfen'] },
              { id: 'd7', sentence: 'Darf ich Sie etwas fragen? Ja, Sie [blank]. (dürfen)', answers: ['dürfen'] },
              { id: 'd8', sentence: 'Das Kind [blank] kein Eis vor dem Essen. (dürfen)', answers: ['darf'] },
              { id: 'd9', sentence: 'Wann [blank] wir endlich anfangen? (dürfen)', answers: ['dürfen'] },
              { id: 'd10', sentence: '[blank] du heute Abend ins Kino? (dürfen)', answers: ['Darfst'] },
            ]
          },
          {
            id: 'mod-pres-können',
            title: 'Können (to be able to / can)',
            description: 'Fill in the correct form of "können" in the present tense.',
            type: 'fill-in',
            items: [
              { id: 'k1', sentence: 'Ich [blank] sehr gut Klavier spielen. (können)', answers: ['kann'] },
              { id: 'k2', sentence: 'Du [blank] morgen zu mir kommen. (können)', answers: ['kannst'] },
              { id: 'k3', sentence: 'Er [blank] kein Wort Deutsch. (können)', answers: ['kann'] },
              { id: 'k4', sentence: 'Wir [blank] das Problem gemeinsam lösen. (können)', answers: ['können'] },
              { id: 'k5', sentence: 'Ihr [blank] heute früher gehen. (können)', answers: ['könnt'] },
              { id: 'k6', sentence: 'Sie [blank] uns sicher helfen. (können)', answers: ['können'] },
              { id: 'k7', sentence: '[blank] du mir das Salz geben? (können)', answers: ['Kannst'] },
              { id: 'k8', sentence: 'Mein Bruder [blank] nicht schwimmen. (können)', answers: ['kann'] },
              { id: 'k9', sentence: 'Wann [blank] wir uns treffen? (können)', answers: ['können'] },
              { id: 'k10', sentence: '[blank] ihr das Fenster öffnen? (können)', answers: ['Könnt'] },
            ]
          },
          {
            id: 'mod-pres-mögen',
            title: 'Mögen (to like)',
            description: 'Fill in the correct form of "mögen" in the present tense.',
            type: 'fill-in',
            items: [
              { id: 'm1', sentence: 'Ich [blank] Schokolade sehr gern. (mögen)', answers: ['mag'] },
              { id: 'm2', sentence: 'Du [blank] keinen Fisch, oder? (mögen)', answers: ['magst'] },
              { id: 'm3', sentence: 'Er [blank] klassische Musik. (mögen)', answers: ['mag'] },
              { id: 'm4', sentence: 'Wir [blank] unsere neue Lehrerin. (mögen)', answers: ['mögen'] },
              { id: 'm5', sentence: 'Ihr [blank] wohl keine Überraschungen. (mögen)', answers: ['mögt'] },
              { id: 'm6', sentence: 'Sie [blank] es, im Garten zu arbeiten. (mögen)', answers: ['mögen'] },
              { id: 'm7', sentence: '[blank] du Pizza? (mögen)', answers: ['Magst'] },
              { id: 'm8', sentence: 'Mein Hund [blank] keine Katzen. (mögen)', answers: ['mag'] },
              { id: 'm9', sentence: 'Was [blank] ihr am liebsten? (mögen)', answers: ['mögt'] },
              { id: 'm10', sentence: 'Sie [blank] (pl.) diesen Film nicht. (mögen)', answers: ['mögen'] },
            ]
          },
          {
            id: 'mod-pres-müssen',
            title: 'Müssen (to have to / must)',
            description: 'Fill in the correct form of "müssen" in the present tense.',
            type: 'fill-in',
            items: [
              { id: 'mu1', sentence: 'Ich [blank] heute noch viel lernen. (müssen)', answers: ['muss'] },
              { id: 'mu2', sentence: 'Du [blank] pünktlich sein. (müssen)', answers: ['musst'] },
              { id: 'mu3', sentence: 'Er [blank] jeden Tag früh aufstehen. (müssen)', answers: ['muss'] },
              { id: 'mu4', sentence: 'Wir [blank] die Rechnung bezahlen. (müssen)', answers: ['müssen'] },
              { id: 'mu5', sentence: 'Ihr [blank] leise sein. (müssen)', answers: ['müsst'] },
              { id: 'mu6', sentence: 'Sie [blank] zum Arzt gehen. (müssen)', answers: ['müssen'] },
              { id: 'mu7', sentence: '[blank] du jetzt wirklich gehen? (müssen)', answers: ['Musst'] },
              { id: 'mu8', sentence: 'Man [blank] hier vorsichtig sein. (müssen)', answers: ['muss'] },
              { id: 'mu9', sentence: 'Wann [blank] wir abfahren? (müssen)', answers: ['müssen'] },
              { id: 'mu10', sentence: '[blank] ihr noch Hausaufgaben machen? (müssen)', answers: ['Müsst'] },
            ]
          },
          {
            id: 'mod-pres-sollen',
            title: 'Sollen (to be supposed to / should)',
            description: 'Fill in the correct form of "sollen" in the present tense.',
            type: 'fill-in',
            items: [
              { id: 's1', sentence: 'Ich [blank] mehr Sport treiben. (sollen)', answers: ['soll'] },
              { id: 's2', sentence: 'Du [blank] nicht so viel rauchen. (sollen)', answers: ['sollst'] },
              { id: 's3', sentence: 'Er [blank] seine Hausaufgaben machen. (sollen)', answers: ['soll'] },
              { id: 's4', sentence: 'Wir [blank] pünktlich im Büro sein. (sollen)', answers: ['sollen'] },
              { id: 's5', sentence: 'Ihr [blank] das Fenster zumachen. (sollen)', answers: ['sollt'] },
              { id: 's6', sentence: 'Sie [blank] die Wahrheit sagen. (sollen)', answers: ['sollen'] },
              { id: 's7', sentence: 'Was [blank] ich jetzt tun? (sollen)', answers: ['soll'] },
              { id: 's8', sentence: 'Der Arzt sagt, ich [blank] im Bett bleiben. (sollen)', answers: ['soll'] },
              { id: 's9', sentence: 'Wann [blank] wir da sein? (sollen)', answers: ['sollen'] },
              { id: 's10', sentence: '[blank] du nicht eigentlich arbeiten? (sollen)', answers: ['Sollst'] },
            ]
          },
          {
            id: 'mod-pres-wollen',
            title: 'Wollen (to want to)',
            description: 'Fill in the correct form of "wollen" in the present tense.',
            type: 'fill-in',
            items: [
              { id: 'w1', sentence: 'Ich [blank] später Arzt werden. (wollen)', answers: ['will'] },
              { id: 'w2', sentence: 'Du [blank] immer Recht haben. (wollen)', answers: ['willst'] },
              { id: 'w3', sentence: 'Er [blank] nach Berlin ziehen. (wollen)', answers: ['will'] },
              { id: 'w4', sentence: 'Wir [blank] ein neues Auto kaufen. (wollen)', answers: ['wollen'] },
              { id: 'w5', sentence: 'Ihr [blank] sicher auch mitkommen. (wollen)', answers: ['wollt'] },
              { id: 'w6', sentence: 'Sie [blank] nicht mehr warten. (wollen)', answers: ['wollen'] },
              { id: 'w7', sentence: 'Was [blank] du zum Geburtstag? (wollen)', answers: ['willst'] },
              { id: 'w8', sentence: 'Niemand [blank] den Müll rausbringen. (wollen)', answers: ['will'] },
              { id: 'w9', sentence: 'Wann [blank] wir essen? (wollen)', answers: ['wollen'] },
              { id: 'w10', sentence: '[blank] ihr wirklich gehen? (wollen)', answers: ['Wollt'] },
            ]
          }
        ]
      },
      {
        id: 'modal-imperfect',
        title: 'Modals in the Imperfect',
        tasks: [
          {
            id: 'mod-imp-dürfen',
            title: 'Dürfen (Imperfect)',
            description: 'Fill in the correct imperfect form of "dürfen".',
            type: 'fill-in',
            items: [
              { id: 'id1', sentence: 'Früher [blank] man hier rauchen. (dürfen)', answers: ['durfte'] },
              { id: 'id2', sentence: 'Du [blank] gestern nicht ins Kino. (dürfen)', answers: ['durftest'] },
              { id: 'id3', sentence: 'Das Kind [blank] kein Eis essen. (dürfen)', answers: ['durfte'] },
              { id: 'id4', sentence: 'Wir [blank] den Raum nicht verlassen. (dürfen)', answers: ['durften'] },
              { id: 'id5', sentence: 'Ihr [blank] damals noch nicht Auto fahren. (dürfen)', answers: ['durftet'] },
              { id: 'id6', sentence: 'Die Schüler [blank] im Unterricht nicht sprechen. (dürfen)', answers: ['durften'] },
              { id: 'id7', sentence: '[blank] du als Kind lange aufbleiben? (dürfen)', answers: ['Durftest'] },
              { id: 'id8', sentence: 'Ich [blank] nie alleine verreisen. (dürfen)', answers: ['durfte'] },
              { id: 'id9', sentence: 'Wann [blank] wir endlich nach Hause? (dürfen)', answers: ['durften'] },
              { id: 'id10', sentence: '[blank] ihr damals schon wählen? (dürfen)', answers: ['Durftet'] },
            ]
          },
          {
            id: 'mod-imp-können',
            title: 'Können (Imperfect)',
            description: 'Fill in the correct imperfect form of "können".',
            type: 'fill-in',
            items: [
              { id: 'ik1', sentence: 'Ich [blank] gestern nicht kommen. (können)', answers: ['konnte'] },
              { id: 'ik2', sentence: 'Du [blank] schon mit drei Jahren lesen. (können)', answers: ['konntest'] },
              { id: 'ik3', sentence: 'Er [blank] das Problem nicht lösen. (können)', answers: ['konnte'] },
              { id: 'ik4', sentence: 'Wir [blank] uns keinen Urlaub leisten. (können)', answers: ['konnten'] },
              { id: 'ik5', sentence: 'Ihr [blank] uns leider nicht helfen. (können)', answers: ['konntet'] },
              { id: 'ik6', sentence: 'Sie [blank] den Weg nicht finden. (können)', answers: ['konnten'] },
              { id: 'ik7', sentence: '[blank] du mir das früher sagen? (können)', answers: ['Konntest'] },
              { id: 'ik8', sentence: 'Niemand [blank] die Frage beantworten. (können)', answers: ['konnte'] },
              { id: 'ik9', sentence: 'Wann [blank] wir uns treffen? (können)', answers: ['konnten'] },
              { id: 'ik10', sentence: '[blank] ihr das Fenster öffnen? (können)', answers: ['Konntet'] },
            ]
          },
          {
            id: 'mod-imp-mögen',
            title: 'Mögen (Imperfect)',
            description: 'Fill in the correct imperfect form of "mögen".',
            type: 'fill-in',
            items: [
              { id: 'im1', sentence: 'Ich [blank] als Kind kein Gemüse. (mögen)', answers: ['mochte'] },
              { id: 'im2', sentence: 'Du [blank] diesen Film sehr. (mögen)', answers: ['mochtest'] },
              { id: 'im3', sentence: 'Er [blank] seine neue Arbeit nicht. (mögen)', answers: ['mochte'] },
              { id: 'im4', sentence: 'Wir [blank] den alten Lehrer lieber. (mögen)', answers: ['mochten'] },
              { id: 'im5', sentence: 'Ihr [blank] wohl keine Überraschungen. (mögen)', answers: ['mochtet'] },
              { id: 'im6', sentence: 'Sie [blank] es, am Strand zu liegen. (mögen)', answers: ['mochten'] },
              { id: 'im7', sentence: '[blank] du damals Schokolade? (mögen)', answers: ['Mochtest'] },
              { id: 'im8', sentence: 'Mein Hund [blank] den Briefträger nicht. (mögen)', answers: ['mochte'] },
              { id: 'im9', sentence: 'Was [blank] ihr an der Schule am meisten? (mögen)', answers: ['mochtet'] },
              { id: 'im10', sentence: 'Sie [blank] (pl.) die Musik nicht. (mögen)', answers: ['mochten'] },
            ]
          },
          {
            id: 'mod-imp-müssen',
            title: 'Müssen (Imperfect)',
            description: 'Fill in the correct imperfect form of "müssen".',
            type: 'fill-in',
            items: [
              { id: 'imu1', sentence: 'Ich [blank] gestern lange arbeiten. (müssen)', answers: ['musste'] },
              { id: 'imu2', sentence: 'Du [blank] pünktlich beim Arzt sein. (müssen)', answers: ['musstest'] },
              { id: 'imu3', sentence: 'Er [blank] die ganze Nacht lernen. (müssen)', answers: ['musste'] },
              { id: 'imu4', sentence: 'Wir [blank] die Rechnung sofort bezahlen. (müssen)', answers: ['mussten'] },
              { id: 'imu5', sentence: 'Ihr [blank] leise sein. (müssen)', answers: ['musstet'] },
              { id: 'imu6', sentence: 'Sie [blank] zum Bahnhof rennen. (müssen)', answers: ['mussten'] },
              { id: 'imu7', sentence: '[blank] du wirklich schon gehen? (müssen)', answers: ['Musstest'] },
              { id: 'imu8', sentence: 'Man [blank] hier vorsichtig sein. (müssen)', answers: ['musste'] },
              { id: 'imu9', sentence: 'Wann [blank] wir abfahren? (müssen)', answers: ['mussten'] },
              { id: 'imu10', sentence: '[blank] ihr noch Hausaufgaben machen? (müssen)', answers: ['Musstet'] },
            ]
          },
          {
            id: 'mod-imp-sollen',
            title: 'Sollen (Imperfect)',
            description: 'Fill in the correct imperfect form of "sollen".',
            type: 'fill-in',
            items: [
              { id: 'is1', sentence: 'Ich [blank] mehr Sport treiben. (sollen)', answers: ['sollte'] },
              { id: 'is2', sentence: 'Du [blank] nicht so viel rauchen. (sollen)', answers: ['solltest'] },
              { id: 'is3', sentence: 'Er [blank] seine Hausaufgaben machen. (sollen)', answers: ['sollte'] },
              { id: 'is4', sentence: 'Wir [blank] pünktlich im Büro sein. (sollen)', answers: ['sollten'] },
              { id: 'is5', sentence: 'Ihr [blank] das Fenster zumachen. (sollen)', answers: ['solltet'] },
              { id: 'is6', sentence: 'Sie [blank] die Wahrheit sagen. (sollen)', answers: ['sollten'] },
              { id: 'is7', sentence: 'Was [blank] ich damals tun? (sollen)', answers: ['sollte'] },
              { id: 'is8', sentence: 'Der Arzt sagte, ich [blank] im Bett bleiben. (sollen)', answers: ['sollte'] },
              { id: 'is9', sentence: 'Wann [blank] wir da sein? (sollen)', answers: ['sollten'] },
              { id: 'is10', sentence: '[blank] du nicht eigentlich arbeiten? (sollen)', answers: ['Solltest'] },
            ]
          },
          {
            id: 'mod-imp-wollen',
            title: 'Wollen (Imperfect)',
            description: 'Fill in the correct imperfect form of "wollen".',
            type: 'fill-in',
            items: [
              { id: 'iw1', sentence: 'Ich [blank] später Arzt werden. (wollen)', answers: ['wollte'] },
              { id: 'iw2', sentence: 'Du [blank] immer Recht haben. (wollen)', answers: ['wolltest'] },
              { id: 'iw3', sentence: 'Er [blank] nach Berlin ziehen. (wollen)', answers: ['wollte'] },
              { id: 'iw4', sentence: 'Wir [blank] ein neues Auto kaufen. (wollen)', answers: ['wollten'] },
              { id: 'iw5', sentence: 'Ihr [blank] sicher auch mitkommen. (wollen)', answers: ['wolltet'] },
              { id: 'iw6', sentence: 'Sie [blank] nicht mehr warten. (wollen)', answers: ['wollten'] },
              { id: 'iw7', sentence: 'Was [blank] du zum Geburtstag? (wollen)', answers: ['wolltest'] },
              { id: 'iw8', sentence: 'Niemand [blank] den Müll rausbringen. (wollen)', answers: ['wollte'] },
              { id: 'iw9', sentence: 'Wann [blank] wir essen? (wollen)', answers: ['wollten'] },
              { id: 'iw10', sentence: '[blank] ihr wirklich gehen? (wollen)', answers: ['Wolltet'] },
            ]
          }
        ]
      },
      {
        id: 'modal-conditional',
        title: 'Modals in the conditional form',
        tasks: [
          {
            id: 'mod-cond-dürfen',
            title: 'Dürfen (Conditional)',
            description: 'Fill in the correct conditional form (Konjunktiv II) of "dürfen".',
            type: 'fill-in',
            items: [
              { id: 'cd1', sentence: '[blank] ich Sie etwas fragen? (dürfen)', answers: ['Dürfte'] },
              { id: 'cd2', sentence: 'Wenn ich [blank], würde ich gehen. (dürfen)', answers: ['dürfte'] },
              { id: 'cd3', sentence: 'Du [blank] hier eigentlich nicht parken. (dürfen)', answers: ['dürftest'] },
              { id: 'cd4', sentence: 'Er [blank] das Auto fahren, wenn er einen Führerschein hätte. (dürfen)', answers: ['dürfte'] },
              { id: 'cd5', sentence: 'Wir [blank] heute früher gehen, wenn wir fertig wären. (dürfen)', answers: ['dürften'] },
              { id: 'cd6', sentence: 'Ihr [blank] nicht so laut sein. (dürfen)', answers: ['dürftet'] },
              { id: 'cd7', sentence: 'Sie [blank] gerne Platz nehmen. (dürfen)', answers: ['dürften'] },
              { id: 'cd8', sentence: 'Wenn du [blank], was würdest du tun? (dürfen)', answers: ['dürftest'] },
              { id: 'cd9', sentence: 'Ich [blank] das nicht sagen. (dürfen)', answers: ['dürfte'] },
              { id: 'cd10', sentence: '[blank] wir mal kurz stören? (dürfen)', answers: ['Dürften'] },
            ]
          },
          {
            id: 'mod-cond-können',
            title: 'Können (Conditional)',
            description: 'Fill in the correct conditional form (Konjunktiv II) of "können".',
            type: 'fill-in',
            items: [
              { id: 'ck1', sentence: 'Ich [blank] dir helfen, wenn ich Zeit hätte. (können)', answers: ['könnte'] },
              { id: 'ck2', sentence: '[blank] du mir das Fenster öffnen? (können)', answers: ['Könntest'] },
              { id: 'ck3', sentence: 'Er [blank] besser spielen, wenn er mehr üben würde. (können)', answers: ['könnte'] },
              { id: 'ck4', sentence: 'Wir [blank] morgen ins Kino gehen. (können)', answers: ['könnten'] },
              { id: 'ck5', sentence: 'Ihr [blank] uns wirklich einen Gefallen tun. (können)', answers: ['könntet'] },
              { id: 'ck6', sentence: 'Sie [blank] (pl.) uns sicher helfen. (können)', answers: ['könnten'] },
              { id: 'ck7', sentence: '[blank] Sie mir bitte sagen, wie spät es ist? (können)', answers: ['Könnten'] },
              { id: 'ck8', sentence: 'Das [blank] wahr sein. (können)', answers: ['könnte'] },
              { id: 'ck9', sentence: 'Wann [blank] wir uns treffen? (können)', answers: ['könnten'] },
              { id: 'ck10', sentence: '[blank] ihr mir mal kurz helfen? (können)', answers: ['Könntet'] },
            ]
          },
          {
            id: 'mod-cond-mögen',
            title: 'Mögen (Conditional/Polite)',
            description: 'Fill in the correct conditional form (Konjunktiv II) of "mögen" (usually "möchte").',
            type: 'fill-in',
            items: [
              { id: 'cm1', sentence: 'Ich [blank] gerne ein Eis. (mögen)', answers: ['möchte'] },
              { id: 'cm2', sentence: 'Was [blank] du trinken? (mögen)', answers: ['möchtest'] },
              { id: 'cm3', sentence: 'Er [blank] heute nicht arbeiten. (mögen)', answers: ['möchte'] },
              { id: 'cm4', sentence: 'Wir [blank] gerne einen Tisch reservieren. (mögen)', answers: ['möchten'] },
              { id: 'cm5', sentence: 'Was [blank] ihr essen? (mögen)', answers: ['möchtet'] },
              { id: 'cm6', sentence: 'Sie [blank] (pl.) gerne mitkommen. (mögen)', answers: ['möchten'] },
              { id: 'cm7', sentence: '[blank] Sie noch etwas Kaffee? (mögen)', answers: ['Möchten'] },
              { id: 'cm8', sentence: 'Ich [blank] mich gerne vorstellen. (mögen)', answers: ['möchte'] },
              { id: 'cm9', sentence: 'Wann [blank] du losfahren? (mögen)', answers: ['möchtest'] },
              { id: 'cm10', sentence: '[blank] ihr den Film sehen? (mögen)', answers: ['Möchtet'] },
            ]
          },
          {
            id: 'mod-cond-müssen',
            title: 'Müssen (Conditional)',
            description: 'Fill in the correct conditional form (Konjunktiv II) of "müssen".',
            type: 'fill-in',
            items: [
              { id: 'cmu1', sentence: 'Ich [blank] eigentlich mehr lernen. (müssen)', answers: ['müsste'] },
              { id: 'cmu2', sentence: 'Du [blank] vorsichtiger sein. (müssen)', answers: ['müsstest'] },
              { id: 'cmu3', sentence: 'Er [blank] pünktlich sein, wenn er den Job behalten will. (müssen)', answers: ['müsste'] },
              { id: 'cmu4', sentence: 'Wir [blank] mehr Zeit haben. (müssen)', answers: ['müssten'] },
              { id: 'cmu5', sentence: 'Ihr [blank] das eigentlich wissen. (müssen)', answers: ['müsstet'] },
              { id: 'cmu6', sentence: 'Sie [blank] (pl.) mehr Sport treiben. (müssen)', answers: ['müssten'] },
              { id: 'cmu7', sentence: 'Das [blank] doch klappen! (müssen)', answers: ['müsste'] },
              { id: 'cmu8', sentence: 'Ich [blank] jetzt wirklich gehen. (müssen)', answers: ['müsste'] },
              { id: 'cmu9', sentence: 'Wann [blank] wir da sein? (müssen)', answers: ['müssten'] },
              { id: 'cmu10', sentence: '[blank] du nicht eigentlich arbeiten? (müssen)', answers: ['Müsstest'] },
            ]
          },
          {
            id: 'mod-cond-sollen',
            title: 'Sollen (Conditional/Advice)',
            description: 'Fill in the correct conditional form (Konjunktiv II) of "sollen".',
            type: 'fill-in',
            items: [
              { id: 'cs1', sentence: 'Ich [blank] mehr Wasser trinken. (sollen)', answers: ['sollte'] },
              { id: 'cs2', sentence: 'Du [blank] zum Arzt gehen. (sollen)', answers: ['solltest'] },
              { id: 'cs3', sentence: 'Er [blank] nicht so viel fernsehen. (sollen)', answers: ['sollte'] },
              { id: 'cs4', sentence: 'Wir [blank] uns öfter treffen. (sollen)', answers: ['sollten'] },
              { id: 'cs5', sentence: 'Ihr [blank] leise sein. (sollen)', answers: ['solltet'] },
              { id: 'cs6', sentence: 'Sie [blank] (pl.) vorsichtiger sein. (sollen)', answers: ['sollten'] },
              { id: 'cs7', sentence: 'Was [blank] ich deiner Meinung nach tun? (sollen)', answers: ['sollte'] },
              { id: 'cs8', sentence: 'Man [blank] nicht alles glauben. (sollen)', answers: ['sollte'] },
              { id: 'cs9', sentence: 'Wann [blank] wir anrufen? (sollen)', answers: ['sollten'] },
              { id: 'cs10', sentence: '[blank] du nicht im Bett liegen? (sollen)', answers: ['Solltest'] },
            ]
          },
          {
            id: 'mod-cond-wollen',
            title: 'Wollen (Conditional)',
            description: 'Fill in the correct conditional form (Konjunktiv II) of "wollen".',
            type: 'fill-in',
            items: [
              { id: 'cw1', sentence: 'Ich [blank] gerne reich sein. (wollen)', answers: ['wollte'] },
              { id: 'cw2', sentence: 'Wenn du [blank], könnten wir gehen. (wollen)', answers: ['wolltest'] },
              { id: 'cw3', sentence: 'Er [blank] am liebsten den ganzen Tag schlafen. (wollen)', answers: ['wollte'] },
              { id: 'cw4', sentence: 'Wir [blank] eigentlich schon weg sein. (wollen)', answers: ['wollten'] },
              { id: 'cw5', sentence: 'Ihr [blank] doch sicher auch mitkommen. (wollen)', answers: ['wolltet'] },
              { id: 'cw6', sentence: 'Sie [blank] (pl.) gerne ein Haus am Meer. (wollen)', answers: ['wollten'] },
              { id: 'cw7', sentence: '[blank] du wirklich mit ihm sprechen? (wollen)', answers: ['Wolltest'] },
              { id: 'cw8', sentence: 'Ich [blank] das nicht so sagen. (wollen)', answers: ['wollte'] },
              { id: 'cw9', sentence: 'Wann [blank] wir uns treffen? (wollen)', answers: ['wollten'] },
              { id: 'cw10', sentence: '[blank] ihr wirklich hier bleiben? (wollen)', answers: ['Wolltet'] },
            ]
          }
        ]
      }
    ]
  }
]
},
{
  id: 'cases',
    title: 'Cases',
    units: [
      {
        id: 'nominative',
        title: 'Nominative Case',
        subunits: [
          {
            id: 'nom-articles',
            title: 'Definite & Indefinite Articles',
            tasks: [
              {
                id: 'nom-t1',
                title: 'Definite Articles',
                description: 'Fill in the correct definite article (der, die, das, die).',
                type: 'fill-in',
                items: [
                  { id: 'n1', sentence: '[blank] Mann ist hier. (der)', answers: ['Der'] },
                  { id: 'n2', sentence: '[blank] Frau singt. (die)', answers: ['Die'] },
                  { id: 'n3', sentence: '[blank] Kind spielt. (das)', answers: ['Das'] },
                  { id: 'n4', sentence: '[blank] Leute warten. (die, pl.)', answers: ['Die'] },
                  { id: 'n5', sentence: 'Wo ist [blank] Tisch? (der)', answers: ['der'] },
                  { id: 'n6', sentence: 'Hier ist [blank] Tür. (die)', answers: ['die'] },
                  { id: 'n7', sentence: 'Das ist [blank] Auto. (das)', answers: ['das'] },
                  { id: 'n8', sentence: 'Sind das [blank] Bücher? (die, pl.)', answers: ['die'] },
                  { id: 'n9', sentence: '[blank] Apfel ist rot. (der)', answers: ['Der'] },
                  { id: 'n10', sentence: '[blank] Sonne scheint. (die)', answers: ['Die'] },
                ]
              },
              {
                id: 'nom-t2',
                title: 'Indefinite Articles',
                description: 'Fill in the correct indefinite article (ein, eine, ein).',
                type: 'fill-in',
                items: [
                  { id: 'ni1', sentence: 'Das ist [blank] Hund. (der)', answers: ['ein'] },
                  { id: 'ni2', sentence: 'Das ist [blank] Katze. (die)', answers: ['eine'] },
                  { id: 'ni3', sentence: 'Das ist [blank] Haus. (das)', answers: ['ein'] },
                  { id: 'ni4', sentence: 'Hier steht [blank] Baum. (der)', answers: ['ein'] },
                  { id: 'ni5', sentence: 'Dort ist [blank] Blume. (die)', answers: ['eine'] },
                  { id: 'ni6', sentence: 'Ich sehe [blank] Buch. (das)', answers: ['ein'] },
                  { id: 'ni7', sentence: 'Ist das [blank] Computer? (der)', answers: ['ein'] },
                  { id: 'ni8', sentence: 'Das ist [blank] Lampe. (die)', answers: ['eine'] },
                  { id: 'ni9', sentence: 'Hier ist [blank] Fenster. (das)', answers: ['ein'] },
                  { id: 'ni10', sentence: 'Dort läuft [blank] Junge. (der)', answers: ['ein'] },
                ]
              },
              {
                id: 'nom-t3',
                title: 'Mixed Articles',
                description: 'Choose between definite and indefinite articles in the nominative.',
                type: 'fill-in',
                items: [
                  { id: 'nm1', sentence: 'Dort steht [blank] Baum. [blank] Baum ist groß. (ein, der)', answers: ['ein', 'Der'] },
                  { id: 'nm2', sentence: 'Das ist [blank] Frau. [blank] Frau ist meine Lehrerin. (eine, die)', answers: ['eine', 'Die'] },
                  { id: 'nm3', sentence: 'Hier liegt [blank] Buch. [blank] Buch ist alt. (ein, das)', answers: ['ein', 'Das'] },
                  { id: 'nm4', sentence: 'Sind das [blank] Kinder? Ja, das sind [blank] Kinder von Frau Schmidt. (-, die)', answers: ['', 'die'] },
                  { id: 'nm5', sentence: 'Ist das [blank] Apfel? Nein, das ist [blank] Birne. (ein, eine)', answers: ['ein', 'eine'] },
                  { id: 'nm6', sentence: '[blank] Sonne ist heute sehr heiß. (die)', answers: ['Die'] },
                  { id: 'nm7', sentence: 'Dort ist [blank] Park. [blank] Park ist sehr schön. (ein, der)', answers: ['ein', 'Der'] },
                  { id: 'nm8', sentence: 'Das ist [blank] Auto. [blank] Auto gehört mir. (ein, das)', answers: ['ein', 'Das'] },
                  { id: 'nm9', sentence: 'Hier ist [blank] Schule. [blank] Schule ist neu. (eine, die)', answers: ['eine', 'Die'] },
                  { id: 'nm10', sentence: 'Wo ist [blank] Bahnhof? (der)', answers: ['der'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'accusative-case',
        title: 'Accusative Case',
        subunits: [
          {
            id: 'acc-basics',
            title: 'Accusative Articles',
            tasks: [
              {
                id: 'acc-t1',
                title: 'Direct Objects 1',
                description: 'Fill in the correct accusative article (den, die, das, die).',
                type: 'fill-in',
                items: [
                  { id: 'ac1', sentence: 'Ich sehe [blank] Mann. (der)', answers: ['den'] },
                  { id: 'ac2', sentence: 'Er kauft [blank] Tasche. (die)', answers: ['die'] },
                  { id: 'ac3', sentence: 'Wir haben [blank] Auto. (das)', answers: ['das'] },
                  { id: 'ac4', sentence: 'Sie sucht [blank] Schlüssel. (die, pl.)', answers: ['die'] },
                  { id: 'ac5', sentence: 'Hast du [blank] Apfel? (der)', answers: ['den'] },
                  { id: 'ac6', sentence: 'Ich brauche [blank] Hilfe. (die)', answers: ['die'] },
                  { id: 'ac7', sentence: 'Er liest [blank] Buch. (das)', answers: ['das'] },
                  { id: 'ac8', sentence: 'Wir essen [blank] Bananen. (die, pl.)', answers: ['die'] },
                  { id: 'ac9', sentence: 'Kennt ihr [blank] Weg? (der)', answers: ['den'] },
                  { id: 'ac10', sentence: 'Ich trinke [blank] Tee. (der)', answers: ['den'] },
                ]
              },
              {
                id: 'acc-t2',
                title: 'Direct Objects 2',
                description: 'Fill in the correct indefinite accusative article (einen, eine, ein).',
                type: 'fill-in',
                items: [
                  { id: 'aci1', sentence: 'Ich habe [blank] Hund. (der)', answers: ['einen'] },
                  { id: 'aci2', sentence: 'Er sucht [blank] Wohnung. (die)', answers: ['eine'] },
                  { id: 'aci3', sentence: 'Wir kaufen [blank] Haus. (das)', answers: ['ein'] },
                  { id: 'aci4', sentence: 'Sie braucht [blank] Computer. (der)', answers: ['einen'] },
                  { id: 'aci5', sentence: 'Hast du [blank] Frage? (die)', answers: ['eine'] },
                  { id: 'aci6', sentence: 'Ich sehe [blank] Kind. (das)', answers: ['ein'] },
                  { id: 'aci7', sentence: 'Er isst [blank] Hamburger. (der)', answers: ['einen'] },
                  { id: 'aci8', sentence: 'Wir trinken [blank] Cola. (die)', answers: ['eine'] },
                  { id: 'aci9', sentence: 'Sie liest [blank] Comic. (der)', answers: ['einen'] },
                  { id: 'aci10', sentence: 'Ich schreibe [blank] E-Mail. (die)', answers: ['eine'] },
                ]
              },
              {
                id: 'acc-t3',
                title: 'Pronouns',
                description: 'Fill in the correct accusative personal pronoun (mich, dich, ihn, sie, es, uns, euch, sie, Sie).',
                type: 'fill-in',
                items: [
                  { id: 'ap1', sentence: 'Liebst du [blank]? (ich)', answers: ['mich'] },
                  { id: 'ap2', sentence: 'Ich sehe [blank]. (du)', answers: ['dich'] },
                  { id: 'ap3', sentence: 'Wir rufen [blank] an. (er)', answers: ['ihn'] },
                  { id: 'ap4', sentence: 'Er besucht [blank]. (sie, sing.)', answers: ['sie'] },
                  { id: 'ap5', sentence: 'Ich finde [blank] nicht. (das Buch -> es)', answers: ['es'] },
                  { id: 'ap6', sentence: 'Könnt ihr [blank] helfen? (wir)', answers: ['uns'] },
                  { id: 'ap7', sentence: 'Ich lade [blank] ein. (ihr)', answers: ['euch'] },
                  { id: 'ap8', sentence: 'Er kennt [blank]. (sie, pl.)', answers: ['sie'] },
                  { id: 'ap9', sentence: 'Ich frage [blank]. (Sie, formal)', answers: ['Sie'] },
                  { id: 'ap10', sentence: 'Siehst du [blank]? (der Mann -> ihn)', answers: ['ihn'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'dative-case',
        title: 'Dative Case',
        subunits: [
          {
            id: 'dat-basics',
            title: 'Dative Articles & Pronouns',
            tasks: [
              {
                id: 'dat-t1',
                title: 'Dative Articles',
                description: 'Fill in the correct dative article (dem, der, dem, den + n).',
                type: 'fill-in',
                items: [
                  { id: 'da1', sentence: 'Ich helfe [blank] Mann. (der)', answers: ['dem'] },
                  { id: 'da2', sentence: 'Wir danken [blank] Frau. (die)', answers: ['der'] },
                  { id: 'da3', sentence: 'Das gehört [blank] Kind. (das)', answers: ['dem'] },
                  { id: 'da4', sentence: 'Er antwortet [blank] Leuten. (die, pl.)', answers: ['den'] },
                  { id: 'da5', sentence: 'Ich gebe [blank] Bruder das Buch. (der)', answers: ['dem'] },
                  { id: 'da6', sentence: 'Sie zeigt [blank] Schwester das Foto. (die)', answers: ['der'] },
                  { id: 'da7', sentence: 'Wir gratulieren [blank] Baby. (das)', answers: ['dem'] },
                  { id: 'da8', sentence: 'Er vertraut [blank] Freunden. (die, pl.)', answers: ['den'] },
                  { id: 'da9', sentence: 'Ich schreibe [blank] Vater. (der)', answers: ['dem'] },
                  { id: 'da10', sentence: 'Sie begegnet [blank] Nachbarin. (die)', answers: ['der'] },
                ]
              },
              {
                id: 'dat-t2',
                title: 'Dative Pronouns',
                description: 'Fill in the correct dative personal pronoun (mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen).',
                type: 'fill-in',
                items: [
                  { id: 'dp1', sentence: 'Wie geht es [blank]? (du)', answers: ['dir'] },
                  { id: 'dp2', sentence: 'Es geht [blank] gut. (ich)', answers: ['mir'] },
                  { id: 'dp3', sentence: 'Ich helfe [blank]. (er)', answers: ['ihm'] },
                  { id: 'dp4', sentence: 'Wir danken [blank]. (sie, sing.)', answers: ['ihr'] },
                  { id: 'dp5', sentence: 'Das gefällt [blank]. (das Kind -> ihm)', answers: ['ihm'] },
                  { id: 'dp6', sentence: 'Könnt ihr [blank] antworten? (wir)', answers: ['uns'] },
                  { id: 'dp7', sentence: 'Ich gratuliere [blank]. (ihr)', answers: ['euch'] },
                  { id: 'dp8', sentence: 'Ich schreibe [blank]. (sie, pl.)', answers: ['ihnen'] },
                  { id: 'dp9', sentence: 'Wie kann ich [blank] helfen? (Sie, formal)', answers: ['Ihnen'] },
                  { id: 'dp10', sentence: 'Das schmeckt [blank] gut. (ich)', answers: ['mir'] },
                ]
              }
            ]
          },
          {
            id: 'dative-verbs-sub',
            title: 'Dative Verbs',
            tasks: [
              {
                id: 'dv-t1',
                title: 'Common Dative Verbs',
                description: 'Fill in the correct form for verbs that take the dative case.',
                type: 'fill-in',
                items: [
                  { id: 'dv1', sentence: 'Das gefällt [blank]. (meine Mutter)', answers: ['meiner Mutter'] },
                  { id: 'dv2', sentence: 'Ich helfe [blank]. (mein Bruder)', answers: ['meinem Bruder'] },
                  { id: 'dv3', sentence: 'Er folgt [blank]. (der Mann)', answers: ['dem Mann'] },
                  { id: 'dv4', sentence: 'Wir danken [blank]. (unsere Lehrerin)', answers: ['unserer Lehrerin'] },
                  { id: 'dv5', sentence: 'Das gehört [blank]. (dieses Mädchen)', answers: ['diesem Mädchen'] },
                  { id: 'dv6', sentence: 'Ich vertraue [blank]. (mein Freund)', answers: ['meinem Freund'] },
                  { id: 'dv7', sentence: 'Sie antwortet [blank]. (der Polizist)', answers: ['dem Polizisten'] },
                  { id: 'dv8', sentence: 'Das schadet [blank]. (die Gesundheit)', answers: ['der Gesundheit'] },
                  { id: 'dv9', sentence: 'Wir gratulieren [blank]. (das Brautpaar)', answers: ['dem Brautpaar'] },
                  { id: 'dv10', sentence: 'Er begegnet [blank]. (seine Ex-Freundin)', answers: ['seiner Ex-Freundin'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'genitive-case',
        title: 'Genitive Case',
        subunits: [
          {
            id: 'gen-basics',
            title: 'Genitive Articles',
            tasks: [
              {
                id: 'gen-t1',
                title: 'Possession 1',
                description: 'Fill in the correct genitive article (des ...s, der, des ...s, der).',
                type: 'fill-in',
                items: [
                  { id: 'g1', sentence: 'Das ist das Auto [blank] Vater[blank]. (der)', answers: ['des', 's'] },
                  { id: 'g2', sentence: 'Die Farbe [blank] Tür ist weiß. (die)', answers: ['der'] },
                  { id: 'g3', sentence: 'Das Spielzeug [blank] Kind[blank] ist hier. (das)', answers: ['des', 'es'] },
                  { id: 'g4', sentence: 'Die Namen [blank] Schüler sind bekannt. (die, pl.)', answers: ['der'] },
                  { id: 'g5', sentence: 'Der Garten [blank] Nachbar[blank] ist groß. (der)', answers: ['des', 'n'] },
                  { id: 'g6', sentence: 'Die Tasche [blank] Mutter ist neu. (die)', answers: ['der'] },
                  { id: 'g7', sentence: 'Das Dach [blank] Haus[blank] ist rot. (das)', answers: ['des', 'es'] },
                  { id: 'g8', sentence: 'Die Kleider [blank] Frauen sind elegant. (die, pl.)', answers: ['der'] },
                  { id: 'g9', sentence: 'Der Freund [blank] Bruder[blank] kommt heute. (der)', answers: ['des', 's'] },
                  { id: 'g10', sentence: 'Die Hauptstadt [blank] Schweiz ist Bern. (die)', answers: ['der'] },
                ]
              },
              {
                id: 'gen-t2',
                title: 'Possession 2',
                description: 'More practice with the genitive case.',
                type: 'fill-in',
                items: [
                  { id: 'g11', sentence: 'Das Ende [blank] Film[blank] war traurig. (der)', answers: ['des', 's'] },
                  { id: 'g12', sentence: 'Die Blätter [blank] Bäume fallen. (die, pl.)', answers: ['der'] },
                  { id: 'g13', sentence: 'Das Zimmer [blank] Schwester ist unordentlich. (die)', answers: ['der'] },
                  { id: 'g14', sentence: 'Der Preis [blank] Brot[blank] ist gestiegen. (das)', answers: ['des', 'es'] },
                  { id: 'g15', sentence: 'Die Meinung [blank] Experte[blank] ist wichtig. (der)', answers: ['des', 'n'] },
                  { id: 'g16', sentence: 'Die Haare [blank] Mädchen[blank] sind lang. (das)', answers: ['des', 's'] },
                  { id: 'g17', sentence: 'Die Fenster [blank] Wohnung sind groß. (die)', answers: ['der'] },
                  { id: 'g18', sentence: 'Der Geruch [blank] Essen[blank] ist gut. (das)', answers: ['des', 's'] },
                  { id: 'g19', sentence: 'Die Stimmen [blank] Kinder sind laut. (die, pl.)', answers: ['der'] },
                  { id: 'g20', sentence: 'Die Geschichte [blank] Land[blank] ist alt. (das)', answers: ['des', 'es'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'mixed-cases',
        title: 'Mixed Cases',
        subunits: [
          {
            id: 'mix-cases-sub',
            title: 'All Cases Mixed',
            tasks: [
              {
                id: 'mc1',
                title: 'Case Identification 1',
                description: 'Identify and fill in the correct case for the articles. (Gender provided)',
                type: 'fill-in',
                items: [
                  { id: 'mc1_1', sentence: '[blank] Hund (der) beißt [blank] Mann (der).', answers: ['Der', 'den'] },
                  { id: 'mc1_2', sentence: 'Ich gebe [blank] Kind (das) [blank] Apfel (der).', answers: ['dem', 'den'] },
                  { id: 'mc1_3', sentence: 'Das ist das Haus [blank] Frau (die).', answers: ['der'] },
                  { id: 'mc1_4', sentence: '[blank] Lehrer (der) hilft [blank] Schülern (die, pl.).', answers: ['Der', 'den'] },
                  { id: 'mc1_5', sentence: 'Sie sieht [blank] Film (der).', answers: ['den'] },
                  { id: 'mc1_6', sentence: 'Wir danken [blank] Gästen (die, pl.).', answers: ['den'] },
                  { id: 'mc1_7', sentence: 'Der Name [blank] Stadt (die) ist Berlin.', answers: ['der'] },
                  { id: 'mc1_8', sentence: '[blank] Katze (die) schläft.', answers: ['Die'] },
                  { id: 'mc1_9', sentence: 'Er kauft [blank] Buch (das).', answers: ['das'] },
                  { id: 'mc1_10', sentence: 'Ich vertraue [blank] Freund (der).', answers: ['dem'] },
                ]
              },
              {
                id: 'mc2',
                title: 'Case Identification 2',
                description: 'Identify and fill in the correct case for the articles. (Gender provided)',
                type: 'fill-in',
                items: [
                  { id: 'mc2_1', sentence: 'Ich sehe [blank] Jungen (der).', answers: ['den'] },
                  { id: 'mc2_2', sentence: 'Das ist [blank] Auto (das) [blank] Vater[blank] (der).', answers: ['das', 'des', 's'] },
                  { id: 'mc2_3', sentence: 'Wir helfen [blank] Frau (die).', answers: ['der'] },
                  { id: 'mc2_4', sentence: '[blank] Kinder (die, pl.) spielen im Garten.', answers: ['Die'] },
                  { id: 'mc2_5', sentence: 'Er gibt [blank] Freundin (die) [blank] Geschenk (das).', answers: ['der', 'das'] },
                  { id: 'mc2_6', sentence: 'Die Farbe [blank] Haus[blank] (das) ist blau.', answers: ['des', 'es'] },
                  { id: 'mc2_7', sentence: 'Kennst du [blank] Weg (der)?', answers: ['den'] },
                  { id: 'mc2_8', sentence: 'Wir danken [blank] Lehrer (der).', answers: ['dem'] },
                  { id: 'mc2_9', sentence: 'Das ist [blank] Tasche (die) [blank] Mädchen[blank] (das).', answers: ['die', 'des', 's'] },
                  { id: 'mc2_10', sentence: '[blank] Sonne (die) scheint.', answers: ['Die'] },
                ]
              },
              {
                id: 'mc3',
                title: 'Case Identification 3',
                description: 'Identify and fill in the correct case for the articles. (Gender provided)',
                type: 'fill-in',
                items: [
                  { id: 'mc3_1', sentence: 'Ich brauche [blank] Hilfe (die).', answers: ['die'] },
                  { id: 'mc3_2', sentence: 'Er antwortet [blank] Mann (der).', answers: ['dem'] },
                  { id: 'mc3_3', sentence: 'Die Tür [blank] Zimmer[blank] (das) ist offen.', answers: ['des', 's'] },
                  { id: 'mc3_4', sentence: '[blank] Apfel (der) schmeckt gut.', answers: ['Der'] },
                  { id: 'mc3_5', sentence: 'Wir suchen [blank] Bahnhof (der).', answers: ['den'] },
                  { id: 'mc3_6', sentence: 'Sie gratuliert [blank] Bruder (der).', answers: ['dem'] },
                  { id: 'mc3_7', sentence: 'Das ist [blank] Buch (das) [blank] Autor[blank] (der).', answers: ['das', 'des', 's'] },
                  { id: 'mc3_8', sentence: '[blank] Leute (die, pl.) warten.', answers: ['Die'] },
                  { id: 'mc3_9', sentence: 'Ich kauft [blank] Brötchen (das, pl.).', answers: ['die'] },
                  { id: 'mc3_10', sentence: 'Er vertraut [blank] Nachbarin (die).', answers: ['der'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'pronouns',
        title: 'Pronouns',
        subunits: [
          {
            id: 'acc-pronouns',
            title: 'Accusative Pronouns',
            tasks: [
              {
                id: 'ap1',
                title: 'Personal Pronouns 1',
                description: 'Fill in the correct accusative pronoun (mich, dich, ihn, sie, es, uns, euch, sie, Sie).',
                type: 'fill-in',
                items: [
                  { id: 'ap1_1', sentence: 'Ich liebe [blank] (du).', answers: ['dich'] },
                  { id: 'ap1_2', sentence: 'Siehst du [blank] (er)?', answers: ['ihn'] },
                  { id: 'ap1_3', sentence: 'Er besucht [blank] (wir) morgen.', answers: ['uns'] },
                  { id: 'ap1_4_fixed', sentence: 'Ich rufe [blank] (du) später an.', answers: ['dich'] },
                  { id: 'ap1_5', sentence: 'Wir suchen [blank] (das Kind/es).', answers: ['es'] },
                  { id: 'ap1_6', sentence: 'Kennst du [blank] (die Frau/sie)?', answers: ['sie'] },
                  { id: 'ap1_7_fixed', sentence: 'Ich lade [blank] (ihr) zur Party ein.', answers: ['euch'] },
                  { id: 'ap1_8', sentence: 'Hörst du [blank] (ich)?', answers: ['mich'] },
                  { id: 'ap1_9', sentence: 'Er fragt [blank] (Sie, formal).', answers: ['Sie'] },
                  { id: 'ap1_10', sentence: 'Wir verstehen [blank] (sie, pl.).', answers: ['sie'] },
                ]
              },
              {
                id: 'ap2',
                title: 'Personal Pronouns 2',
                description: 'More practice with accusative pronouns.',
                type: 'fill-in',
                items: [
                  { id: 'ap2_1', sentence: 'Ich kenne [blank] (er) schon lange.', answers: ['ihn'] },
                  { id: 'ap2_2', sentence: 'Kannst du [blank] (wir) hören?', answers: ['uns'] },
                  { id: 'ap2_3', sentence: 'Er liebt [blank] (sie, sing.).', answers: ['sie'] },
                  { id: 'ap2_4', sentence: 'Ich sehe [blank] (es) nicht.', answers: ['es'] },
                  { id: 'ap2_5', sentence: 'Wir besuchen [blank] (ihr) am Wochenende.', answers: ['euch'] },
                  { id: 'ap2_6', sentence: 'Fragst du [blank] (ich)?', answers: ['mich'] },
                  { id: 'ap2_7', sentence: 'Ich finde [blank] (du) nett.', answers: ['dich'] },
                  { id: 'ap2_8', sentence: 'Sie rufen [blank] (Sie, formal) an.', answers: ['Sie'] },
                  { id: 'ap2_9', sentence: 'Er braucht [blank] (sie, pl.).', answers: ['sie'] },
                  { id: 'ap2_10', sentence: 'Wir essen [blank] (der Apfel/ihn).', answers: ['ihn'] },
                ]
              },
              {
                id: 'ap3',
                title: 'Personal Pronouns 3',
                description: 'Final practice for accusative pronouns.',
                type: 'fill-in',
                items: [
                  { id: 'ap3_1', sentence: 'Ich hole [blank] (du) ab.', answers: ['dich'] },
                  { id: 'ap3_2', sentence: 'Siehst du [blank] (ich)?', answers: ['mich'] },
                  { id: 'ap3_3', sentence: 'Er vergisst [blank] (wir) nie.', answers: ['uns'] },
                  { id: 'ap3_4', sentence: 'Wir treffen [blank] (er) im Park.', answers: ['ihn'] },
                  { id: 'ap3_5', sentence: 'Ich mag [blank] (sie, sing.) sehr.', answers: ['sie'] },
                  { id: 'ap3_6', sentence: 'Kaufst du [blank] (das Buch/es)?', answers: ['es'] },
                  { id: 'ap3_7', sentence: 'Er grüßt [blank] (ihr).', answers: ['euch'] },
                  { id: 'ap3_8', sentence: 'Ich verstehe [blank] (Sie, formal) nicht.', answers: ['Sie'] },
                  { id: 'ap3_9', sentence: 'Wir suchen [blank] (sie, pl.).', answers: ['sie'] },
                  { id: 'ap3_10', sentence: 'Ich liebe [blank] (mein Hund/ihn).', answers: ['ihn'] },
                ]
              }
            ]
          },
          {
            id: 'dat-pronouns',
            title: 'Dative Pronouns',
            tasks: [
              {
                id: 'dp1',
                title: 'Personal Pronouns 1',
                description: 'Fill in the correct dative pronoun (mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen).',
                type: 'fill-in',
                items: [
                  { id: 'dp1_1', sentence: 'Kannst du [blank] (ich) helfen?', answers: ['mir'] },
                  { id: 'dp1_2', sentence: 'Ich danke [blank] (du).', answers: ['dir'] },
                  { id: 'dp1_3', sentence: 'Das gefällt [blank] (er) gut.', answers: ['ihm'] },
                  { id: 'dp1_4', sentence: 'Wir gratulieren [blank] (sie, sing.).', answers: ['ihr'] },
                  { id: 'dp1_5', sentence: 'Wie geht es [blank] (ihr)?', answers: ['euch'] },
                  { id: 'dp1_6', sentence: 'Das gehört [blank] (wir).', answers: ['uns'] },
                  { id: 'dp1_7', sentence: 'Ich antworte [blank] (Sie, formal).', answers: ['Ihnen'] },
                  { id: 'dp1_8', sentence: 'Es schmeckt [blank] (sie, pl.) lecker.', answers: ['ihnen'] },
                  { id: 'dp1_9', sentence: 'Was schenkst du [blank] (das Kind/ihm)?', answers: ['ihm'] },
                  { id: 'dp1_10', sentence: 'Glaubst du [blank] (ich)?', answers: ['mir'] },
                ]
              },
              {
                id: 'dp2',
                title: 'Personal Pronouns 2',
                description: 'More practice with dative pronouns.',
                type: 'fill-in',
                items: [
                  { id: 'dp2_1', sentence: 'Ich vertraue [blank] (du).', answers: ['dir'] },
                  { id: 'dp2_2', sentence: 'Er hilft [blank] (wir) beim Umzug.', answers: ['uns'] },
                  { id: 'dp2_3', sentence: 'Das Kleid steht [blank] (sie, sing.) gut.', answers: ['ihr'] },
                  { id: 'dp2_4', sentence: 'Wir danken [blank] (Sie, formal) für die Hilfe.', answers: ['Ihnen'] },
                  { id: 'dp2_5', sentence: 'Was fehlt [blank] (ihr)?', answers: ['euch'] },
                  { id: 'dp2_6', sentence: 'Ich glaube [blank] (er) kein Wort.', answers: ['ihm'] },
                  { id: 'dp2_7', sentence: 'Das Auto gehört [blank] (sie, pl.).', answers: ['ihnen'] },
                  { id: 'dp2_8', sentence: 'Kannst du [blank] (ich) verzeihen?', answers: ['mir'] },
                  { id: 'dp2_9', sentence: 'Es tut [blank] (wir) leid.', answers: ['uns'] },
                  { id: 'dp2_10', sentence: 'Ich antworte [blank] (du) bald.', answers: ['dir'] },
                ]
              },
              {
                id: 'dp3',
                title: 'Personal Pronouns 3',
                description: 'Final practice for dative pronouns.',
                type: 'fill-in',
                items: [
                  { id: 'dp3_1', sentence: 'Wie gefällt es [blank] (Sie, formal)?', answers: ['Ihnen'] },
                  { id: 'dp3_2', sentence: 'Er schenkt [blank] (ich) Blumen.', answers: ['mir'] },
                  { id: 'dp3_3', sentence: 'Wir gratulieren [blank] (du) zum Geburtstag.', answers: ['dir'] },
                  { id: 'dp3_4', sentence: 'Das gehört [blank] (er).', answers: ['ihm'] },
                  { id: 'dp3_5', sentence: 'Ich helfe [blank] (sie, pl.) gern.', answers: ['ihnen'] },
                  { id: 'dp3_6', sentence: 'Was sagst du [blank] (ihr)?', answers: ['euch'] },
                  { id: 'dp3_7', sentence: 'Es schmeckt [blank] (wir) ausgezeichnet.', answers: ['uns'] },
                  { id: 'dp3_8', sentence: 'Glaubst du [blank] (sie, sing.)?', answers: ['ihr'] },
                  { id: 'dp3_9', sentence: 'Ich danke [blank] (er) herzlich.', answers: ['ihm'] },
                  { id: 'dp3_10', sentence: 'Kannst du [blank] (wir) einen Rat geben?', answers: ['uns'] },
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    units: [
      {
        id: 'acc-preps',
        title: 'Accusative Prepositions',
        subunits: [
          {
            id: 'acc-preps-sub',
            title: 'Durch, Für, Gegen, Ohne, Um',
            tasks: [
              {
                id: 'ap-t1',
                title: 'Practice 1',
                description: 'Fill in the correct accusative form after the preposition.',
                type: 'fill-in',
                items: [
                  { id: 'ap_1', sentence: 'Wir gehen durch [blank]. (der Wald)', answers: ['den Wald'] },
                  { id: 'ap_2', sentence: 'Das Geschenk ist für [blank]. (meine Mutter)', answers: ['meine Mutter'] },
                  { id: 'ap_3', sentence: 'Er ist gegen [blank] gefahren. (der Baum)', answers: ['den Baum'] },
                  { id: 'ap_4', sentence: 'Ohne [blank] kann ich nicht lesen. (meine Brille)', answers: ['meine Brille'] },
                  { id: 'ap_5', sentence: 'Wir sitzen um [blank]. (der Tisch)', answers: ['den Tisch'] },
                  { id: 'ap_6', sentence: 'Ich habe nichts gegen [blank]. (der Plan)', answers: ['den Plan'] },
                  { id: 'ap_7', sentence: 'Das ist für [blank]. (du)', answers: ['dich'] },
                  { id: 'ap_8', sentence: 'Wir laufen durch [blank]. (der Park)', answers: ['den Park'] },
                  { id: 'ap_9', sentence: 'Ohne [blank] gehen wir nicht. (er)', answers: ['ihn'] },
                  { id: 'ap_10', sentence: 'Er kommt um [blank] Ecke. (die)', answers: ['die'] },
                ]
              },
              {
                id: 'ap-t2',
                title: 'Practice 2',
                description: 'More practice with accusative prepositions.',
                type: 'fill-in',
                items: [
                  { id: 'ap_11', sentence: 'Das Buch ist für [blank]. (mein Bruder)', answers: ['meinen Bruder'] },
                  { id: 'ap_12', sentence: 'Wir fahren gegen [blank] Uhr los. (acht)', answers: ['acht'] },
                  { id: 'ap_13', sentence: 'Ohne [blank] Hilfe schaffe ich das nicht. (deine)', answers: ['deine'] },
                  { id: 'ap_14', sentence: 'Der Weg führt durch [blank]. (das Dorf)', answers: ['das Dorf'] },
                  { id: 'ap_15', sentence: 'Sie läuft um [blank] Haus. (das)', answers: ['das'] },
                  { id: 'ap_16', sentence: 'Ich bin für [blank] Vorschlag. (der)', answers: ['den'] },
                  { id: 'ap_17', sentence: 'Er spielt gegen [blank] Weltmeister. (der)', answers: ['den'] },
                  { id: 'ap_18', sentence: 'Ohne [blank] (er) ist es langweilig.', answers: ['ihn'] },
                  { id: 'ap_19', sentence: 'Wir gehen durch [blank] Garten. (der)', answers: ['den'] },
                  { id: 'ap_20', sentence: 'Das ist für [blank] (wir).', answers: ['uns'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'dat-preps',
        title: 'Dative Prepositions',
        subunits: [
          {
            id: 'dat-preps-sub',
            title: 'Aus, Bei, Mit, Nach, Seit, Von, Zu',
            tasks: [
              {
                id: 'dp-t1',
                title: 'Practice 1',
                description: 'Fill in the correct dative form after the preposition.',
                type: 'fill-in',
                items: [
                  { id: 'dp_1', sentence: 'Ich komme aus [blank]. (die Schweiz)', answers: ['der Schweiz'] },
                  { id: 'dp_2', sentence: 'Er wohnt bei [blank]. (seine Eltern)', answers: ['seinen Eltern'] },
                  { id: 'dp_3', sentence: 'Wir fahren mit [blank]. (der Zug)', answers: ['dem Zug'] },
                  { id: 'dp_4', sentence: 'Nach [blank] gehe ich nach Hause. (die Schule)', answers: ['der Schule'] },
                  { id: 'dp_5', sentence: 'Ich lerne seit [blank] Deutsch. (ein Jahr)', answers: ['einem Jahr'] },
                  { id: 'dp_6', sentence: 'Das ist von [blank]. (mein Freund)', answers: ['meinem Freund'] },
                  { id: 'dp_7', sentence: 'Ich gehe zu [blank]. (der Arzt)', answers: ['dem Arzt|beim Arzt'] },
                  { id: 'dp_8', sentence: 'Gegenüber [blank] ist die Post. (das Kino)', answers: ['dem Kino'] },
                  { id: 'dp_9', sentence: 'Außer [blank] sind alle da. (du)', answers: ['dir'] },
                  { id: 'dp_10', sentence: 'Mit [blank] Hilfe schaffen wir es. (deine)', answers: ['deiner'] },
                ]
              },
              {
                id: 'dp-t2',
                title: 'Practice 2',
                description: 'More practice with dative prepositions.',
                type: 'fill-in',
                items: [
                  { id: 'dp_11', sentence: 'Er kommt von [blank] Arbeit. (die)', answers: ['der'] },
                  { id: 'dp_12', sentence: 'Wir wohnen seit [blank] Woche hier. (eine)', answers: ['einer'] },
                  { id: 'dp_13', sentence: 'Ich gehe mit [blank] Hund spazieren. (der)', answers: ['dem'] },
                  { id: 'dp_14', sentence: 'Aus [blank] Fenster sieht man den Park. (das)', answers: ['dem'] },
                  { id: 'dp_15', sentence: 'Bei [blank] Wetter bleibe ich zu Hause. (dieses)', answers: ['diesem'] },
                  { id: 'dp_16', sentence: 'Nach [blank] Essen trinken wir Tee. (das)', answers: ['dem'] },
                  { id: 'dp_17', sentence: 'Ich fahre zu [blank] Oma. (die)', answers: ['der'] },
                  { id: 'dp_18', sentence: 'Er kommt aus [blank] Küche. (die)', answers: ['der'] },
                  { id: 'dp_19', sentence: 'Von [blank] (ich) bekommst du nichts.', answers: ['mir'] },
                  { id: 'dp_20', sentence: 'Mit [blank] (du) macht es Spaß.', answers: ['dir'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'two-way-preps',
        title: 'Two-Way Prepositions',
        subunits: [
          {
            id: 'two-way-preps-sub',
            title: 'Two-Way Prepositions',
            tasks: [
              {
                id: 'tw-t1',
                title: 'Dative (Location)',
                description: 'Where? (Wo?) -> Dative.',
                type: 'fill-in',
                items: [
                  { id: 'twp1', sentence: 'Das Buch liegt auf [blank]. (der Tisch)', answers: ['dem Tisch'] },
                  { id: 'twp2', sentence: 'Wir sitzen in [blank]. (das Kino)', answers: ['dem Kino|im Kino'] },
                  { id: 'twp3', sentence: 'Das Bild hängt an [blank]. (die Wand)', answers: ['der Wand'] },
                  { id: 'twp4', sentence: 'Der Hund schläft unter [blank]. (das Bett)', answers: ['dem Bett'] },
                  { id: 'twp5', sentence: 'Ich warte vor [blank]. (die Schule)', answers: ['der Schule'] },
                  { id: 'twp6', sentence: 'Das Auto steht hinter [blank]. (das Haus)', answers: ['dem Haus'] },
                  { id: 'twp7', sentence: 'Wir wohnen neben [blank]. (der Park)', answers: ['dem Park'] },
                  { id: 'twp8', sentence: 'Die Lampe hängt über [blank]. (der Tisch)', answers: ['dem Tisch'] },
                  { id: 'twp9', sentence: 'Er steht zwischen [blank] und [blank]. (die Stühle)', answers: ['den Stühlen'] },
                  { id: 'twp10', sentence: 'Wir sind in [blank]. (die Stadt)', answers: ['der Stadt'] },
                ]
              },
              {
                id: 'tw-t2',
                title: 'Accusative (Direction)',
                description: 'Where to? (Wohin?) -> Accusative.',
                type: 'fill-in',
                items: [
                  { id: 'twa1', sentence: 'Ich lege das Buch auf [blank]. (der Tisch)', answers: ['den Tisch'] },
                  { id: 'twa2', sentence: 'Wir gehen in [blank]. (das Kino)', answers: ['das Kino'] },
                  { id: 'twa3', sentence: 'Er hängt das Bild an [blank]. (die Wand)', answers: ['die Wand'] },
                  { id: 'twa4', sentence: 'Der Hund läuft unter [blank]. (das Bett)', answers: ['das Bett'] },
                  { id: 'twa5', sentence: 'Ich gehe vor [blank]. (die Schule)', answers: ['die Schule'] },
                  { id: 'twa6', sentence: 'Er stellt das Auto hinter [blank]. (das Haus)', answers: ['das Haus'] },
                  { id: 'twa7', sentence: 'Wir ziehen neben [blank]. (der Park)', answers: ['den Park'] },
                  { id: 'twa8', sentence: 'Häng die Lampe über [blank]. (der Tisch)', answers: ['den Tisch'] },
                  { id: 'twa9', sentence: 'Er setzt sich zwischen [blank]. (die Stühle)', answers: ['die Stühle'] },
                  { id: 'twa10', sentence: 'Wir fahren in [blank]. (die Stadt)', answers: ['die Stadt'] },
                ]
              },
              {
                id: 'tw-mix-t1',
                title: 'Two-Way Mixed 1',
                description: 'Decide: Wo (Dative) or Wohin (Accusative)?',
                type: 'fill-in',
                items: [
                  { id: 'twm1_1', sentence: 'Ich hänge das Bild an [blank]. (die Wand)', answers: ['die Wand'] },
                  { id: 'twm1_2', sentence: 'Das Bild hängt an [blank]. (die Wand)', answers: ['der Wand'] },
                  { id: 'twm1_3', sentence: 'Wir gehen in [blank]. (der Garten)', answers: ['den Garten'] },
                  { id: 'twm1_4', sentence: 'Wir spielen in [blank]. (der Garten)', answers: ['dem Garten'] },
                  { id: 'twm1_5', sentence: 'Er stellt die Vase auf [blank]. (der Tisch)', answers: ['den Tisch'] },
                  { id: 'twm1_6', sentence: 'Die Vase steht auf [blank]. (der Tisch)', answers: ['dem Tisch'] },
                  { id: 'twm1_7', sentence: 'Die Katze läuft unter [blank]. (das Sofa)', answers: ['das Sofa'] },
                  { id: 'twm1_8', sentence: 'Die Katze schläft unter [blank]. (das Sofa)', answers: ['dem Sofa'] },
                  { id: 'twm1_9', sentence: 'Ich setze mich neben [blank]. (du)', answers: ['dich'] },
                  { id: 'twm1_10', sentence: 'Ich sitze neben [blank]. (du)', answers: ['dir'] },
                ]
              },
              {
                id: 'tw-mix-t2',
                title: 'Two-Way Mixed 2',
                description: 'Decide: Wo (Dative) or Wohin (Accusative)?',
                type: 'fill-in',
                items: [
                  { id: 'twm2_1', sentence: 'Er geht vor [blank] Haus. (das)', answers: ['das'] },
                  { id: 'twm2_2', sentence: 'Er steht vor [blank] Haus. (das)', answers: ['dem'] },
                  { id: 'twm2_3', sentence: 'Wir fahren in [blank] Berge. (die, pl.)', answers: ['die'] },
                  { id: 'twm2_4', sentence: 'Wir wandern in [blank] Bergen. (die, pl.)', answers: ['den'] },
                  { id: 'twm2_5', sentence: 'Leg das Buch zwischen [blank] Zeitungen. (die, pl.)', answers: ['die'] },
                  { id: 'twm2_6', sentence: 'Das Buch liegt zwischen [blank] Zeitungen. (die, pl.)', answers: ['den'] },
                  { id: 'twm2_7', sentence: 'Häng die Lampe über [blank] Tisch. (der)', answers: ['den'] },
                  { id: 'twm2_8', sentence: 'Die Lampe hängt über [blank] Tisch. (der)', answers: ['dem'] },
                  { id: 'twm2_9', sentence: 'Ich laufe hinter [blank] Baum. (der)', answers: ['den'] },
                  { id: 'twm2_10', sentence: 'Ich stehe hinter [blank] Baum. (der)', answers: ['dem'] },
                ]
              },
              {
                id: 'tw-mix-t3',
                title: 'Two-Way Mixed 3',
                description: 'Decide: Wo (Dative) or Wohin (Accusative)?',
                type: 'fill-in',
                items: [
                  { id: 'twm3_1', sentence: 'Sie setzt sich auf [blank] Stuhl. (der)', answers: ['den'] },
                  { id: 'twm3_2', sentence: 'Sie sitzt auf [blank] Stuhl. (der)', answers: ['dem'] },
                  { id: 'twm3_3', sentence: 'Wir gehen an [blank] Strand. (der)', answers: ['den'] },
                  { id: 'twm3_4', sentence: 'Wir sind an [blank] Strand. (der)', answers: ['dem'] },
                  { id: 'twm3_5', sentence: 'Er wirft den Ball über [blank] Zaun. (der)', answers: ['den'] },
                  { id: 'twm3_6', sentence: 'Der Vogel fliegt über [blank] Zaun. (der)', answers: ['dem'] },
                  { id: 'twm3_7', sentence: 'Ich stelle mich unter [blank] Dach. (das)', answers: ['das'] },
                  { id: 'twm3_8', sentence: 'Ich stehe unter [blank] Dach. (das)', answers: ['dem'] },
                  { id: 'twm3_9', sentence: 'Komm in [blank] Küche! (die)', answers: ['die'] },
                  { id: 'twm3_10', sentence: 'Wir essen in [blank] Küche. (die)', answers: ['der'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'gen-preps',
        title: 'Genitive Prepositions',
        subunits: [
          {
            id: 'gen-preps-sub',
            title: 'Während, Wegen, Trotz, (An)statt',
            tasks: [
              {
                id: 'gp-t1',
                title: 'Practice 1',
                description: 'Fill in the correct genitive form after the preposition.',
                type: 'fill-in',
                items: [
                  { id: 'gp1', sentence: 'Während [blank] (die Ferien) haben wir Zeit.', answers: ['der Ferien'] },
                  { id: 'gp2', sentence: 'Wegen [blank] (das Wetter) bleiben wir zu Hause.', answers: ['des Wetters'] },
                  { id: 'gp3', sentence: 'Trotz [blank] (der Regen) gehen wir spazieren.', answers: ['des Regens'] },
                  { id: 'gp4', sentence: 'Anstatt [blank] (ein Buch) kauft er ein Spiel.', answers: ['eines Buches'] },
                  { id: 'gp5', sentence: 'Während [blank] (die Woche) arbeite ich viel.', answers: ['der Woche'] },
                  { id: 'gp6', sentence: 'Wegen [blank] (die Krankheit) kommt er nicht.', answers: ['der Krankheit'] },
                  { id: 'gp7', sentence: 'Trotz [blank] (die Kälte) ist es schön.', answers: ['der Kälte'] },
                  { id: 'gp8', sentence: 'Statt [blank] (der Kaffee) trinke ich Tee.', answers: ['des Kaffees'] },
                  { id: 'gp9', sentence: 'Während [blank] (das Spiel) war es ruhig.', answers: ['des Spiels'] },
                  { id: 'gp10', sentence: 'Wegen [blank] (der Lärm) kann ich nicht schlafen.', answers: ['des Lärms'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'mixed-preps',
        title: 'Mixed Prepositions',
        subunits: [
          {
            id: 'mix-preps-sub',
            title: 'All Prepositions Mixed',
            tasks: [
              {
                id: 'mp1',
                title: 'Preposition Challenge 1',
                description: 'Identify the case and fill in the correct form.',
                type: 'fill-in',
                items: [
                  { id: 'mp1_1', sentence: 'Ich fahre mit [blank] (der Bus).', answers: ['dem Bus'] },
                  { id: 'mp1_2', sentence: 'Das ist für [blank] (meine Schwester).', answers: ['meine Schwester'] },
                  { id: 'mp1_3', sentence: 'Wir wohnen in [blank] (die Stadt).', answers: ['der Stadt'] },
                  { id: 'mp1_4', sentence: 'Wegen [blank] (der Stau) kommen wir zu spät.', answers: ['des Staus'] },
                  { id: 'mp1_5', sentence: 'Er geht durch [blank] (die Tür).', answers: ['die Tür'] },
                  { id: 'mp1_6', sentence: 'Ich danke [blank] (der Freund) für [blank] (die Hilfe).', answers: ['dem Freund', 'die Hilfe'] },
                  { id: 'mp1_7', sentence: 'Nach [blank] (das Essen) trinken wir Kaffee.', answers: ['dem Essen'] },
                  { id: 'mp1_8', sentence: 'Ohne [blank] (mein Handy) bin ich verloren.', answers: ['mein Handy'] },
                  { id: 'mp1_9', sentence: 'Das Buch liegt auf [blank] (der Boden).', answers: ['dem Boden'] },
                  { id: 'mp1_10', sentence: 'Während [blank] (die Nacht) hat es geschneit.', answers: ['der Nacht'] },
                ]
              },
              {
                id: 'mp2',
                title: 'Preposition Challenge 2',
                description: 'Identify the case and fill in the correct form.',
                type: 'fill-in',
                items: [
                  { id: 'mp2_1', sentence: 'Er kommt aus [blank] (das Haus).', answers: ['dem Haus'] },
                  { id: 'mp2_2', sentence: 'Wir gehen um [blank] (der Park).', answers: ['den Park'] },
                  { id: 'mp2_3', sentence: 'Trotz [blank] (der Regen) gehen wir raus.', answers: ['des Regens'] },
                  { id: 'mp2_4', sentence: 'Ich sitze an [blank] (der Tisch).', answers: ['dem Tisch'] },
                  { id: 'mp2_5', sentence: 'Das Geschenk ist von [blank] (meine Eltern).', answers: ['meinen Eltern'] },
                  { id: 'mp2_6', sentence: 'Er läuft gegen [blank] (die Wand).', answers: ['die Wand'] },
                  { id: 'mp2_7', sentence: 'Seit [blank] (ein Monat) bin ich hier.', answers: ['einem Monat'] },
                  { id: 'mp2_8', sentence: 'Wir warten vor [blank] (das Kino).', answers: ['dem Kino'] },
                  { id: 'mp2_9', sentence: 'Anstatt [blank] (der Wein) trinke ich Wasser.', answers: ['des Weins'] },
                  { id: 'mp2_10', sentence: 'Ich gehe zu [blank] (der Arzt).', answers: ['dem Arzt'] },
                ]
              },
              {
                id: 'mp3',
                title: 'Preposition Challenge 3',
                description: 'Identify the case and fill in the correct form.',
                type: 'fill-in',
                items: [
                  { id: 'mp3_1', sentence: 'Wir fahren mit [blank] (das Auto).', answers: ['dem Auto'] },
                  { id: 'mp3_2', sentence: 'Das ist für [blank] (du).', answers: ['dich'] },
                  { id: 'mp3_3', sentence: 'Er wohnt bei [blank] (seine Tante).', answers: ['seiner Tante'] },
                  { id: 'mp3_4', sentence: 'Wegen [blank] (die Kälte) bleiben wir hier.', answers: ['der Kälte'] },
                  { id: 'mp3_5', sentence: 'Ich lege das Buch auf [blank] (das Regal).', answers: ['das Regal'] },
                  { id: 'mp3_6', sentence: 'Wir gehen durch [blank] (der Tunnel).', answers: ['den Tunnel'] },
                  { id: 'mp3_7', sentence: 'Nach [blank] (die Arbeit) bin ich müde.', answers: ['der Arbeit'] },
                  { id: 'mp3_8', sentence: 'Ohne [blank] (deine Hilfe) schaffe ich es nicht.', answers: ['deine Hilfe'] },
                  { id: 'mp3_9', sentence: 'Das Bild hängt über [blank] (das Sofa).', answers: ['dem Sofa'] },
                  { id: 'mp3_10', sentence: 'Während [blank] (der Film) war es dunkel.', answers: ['des Films'] },
                ]
              },
              {
                id: 'mp4',
                title: 'Preposition Challenge 4',
                description: 'Identify the case and fill in the correct form.',
                type: 'fill-in',
                items: [
                  { id: 'mp4_1', sentence: 'Ich komme aus [blank] (der Wald).', answers: ['dem Wald'] },
                  { id: 'mp4_2', sentence: 'Er läuft um [blank] (der See).', answers: ['den See'] },
                  { id: 'mp4_3', sentence: 'Trotz [blank] (der Wind) segeln wir.', answers: ['des Windes'] },
                  { id: 'mp4_4', sentence: 'Das Buch liegt unter [blank] (die Zeitung).', answers: ['der Zeitung'] },
                  { id: 'mp4_5', sentence: 'Wir gehen zu [blank] (der Bahnhof).', answers: ['dem Bahnhof'] },
                  { id: 'mp4_6', sentence: 'Wegen [blank] (der Regen) fällt das Spiel aus.', answers: ['des Regens'] },
                  { id: 'mp4_7', sentence: 'Er spielt mit [blank] (sein Hund).', answers: ['seinem Hund'] },
                  { id: 'mp4_8', sentence: 'Das Geschenk ist von [blank] (meine Tante).', answers: ['meiner Tante'] },
                  { id: 'mp4_9', sentence: 'Wir fahren durch [blank] (die Schweiz).', answers: ['die Schweiz'] },
                  { id: 'mp4_10', sentence: 'Seit [blank] (ein Jahr) lerne ich Klavier.', answers: ['einem Jahr'] },
                ]
              },
              {
                id: 'mp5',
                title: 'Preposition Challenge 5',
                description: 'Identify the case and fill in the correct form.',
                type: 'fill-in',
                items: [
                  { id: 'mp5_1', sentence: 'Er sitzt auf [blank] (der Stuhl).', answers: ['dem Stuhl'] },
                  { id: 'mp5_2', sentence: 'Ich hänge die Jacke in [blank] (der Schrank).', answers: ['den Schrank'] },
                  { id: 'mp5_3', sentence: 'Während [blank] (die Prüfung) war es still.', answers: ['der Prüfung'] },
                  { id: 'mp5_4', sentence: 'Er kommt nach [blank] (das Training).', answers: ['dem Training'] },
                  { id: 'mp5_5', sentence: 'Ohne [blank] (dein Rat) hätte ich es nicht getan.', answers: ['deinen Rat'] },
                  { id: 'mp5_6', sentence: 'Wir sitzen am [blank] (der Tisch).', answers: ['dem Tisch'] },
                  { id: 'mp5_7', sentence: 'Er läuft gegen [blank] (der Pfosten).', answers: ['den Pfosten'] },
                  { id: 'mp5_8', sentence: 'Das ist für [blank] (ihr).', answers: ['euch'] },
                  { id: 'mp5_9', sentence: 'Ich wohne bei [blank] (mein Onkel).', answers: ['meinem Onkel'] },
                  { id: 'mp5_10', sentence: 'Statt [blank] (der Apfel) esse ich eine Banane.', answers: ['des Apfels'] },
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sentence-structure',
    title: 'Sentence Structure',
    units: [
      {
        id: 'coordinating-conjunctions',
        title: 'Coordinating Conjunctions (0-Position)',
        subunits: [
          {
            id: 'aduso',
            title: 'ADUSO Conjunctions',
            tasks: [
              {
                id: 'cc1',
                title: 'Basic Conjunctions (und, aber, oder)',
                description: 'Fill in the correct conjunction. These words do not change the word order (Position 0).',
                type: 'fill-in',
                items: [
                  { id: 'cc1_1', sentence: 'Ich trinke Tee [blank] ich esse einen Apfel.', answers: ['und'] },
                  { id: 'cc1_2', sentence: 'Er ist müde, [blank] er arbeitet weiter.', answers: ['aber'] },
                  { id: 'cc1_3', sentence: 'Gehen wir ins Kino [blank] bleiben wir zu Hause?', answers: ['oder'] },
                  { id: 'cc1_4', sentence: 'Sie spielt Klavier [blank] er spielt Gitarre.', answers: ['und'] },
                  { id: 'cc1_5', sentence: 'Das Auto ist alt, [blank] es fährt noch gut.', answers: ['aber'] },
                  { id: 'cc1_6', sentence: 'Möchtest du Saft [blank] Wasser?', answers: ['oder'] },
                  { id: 'cc1_7', sentence: 'Ich lerne Deutsch [blank] ich lerne auch Englisch.', answers: ['und'] },
                  { id: 'cc1_8', sentence: 'Wir wollten kommen, [blank] wir hatten keine Zeit.', answers: ['aber'] },
                  { id: 'cc1_9', sentence: 'Isst er Fleisch [blank] ist er Vegetarier?', answers: ['oder'] },
                  { id: 'cc1_10', sentence: 'Der Film war lang, [blank] er war sehr spannend.', answers: ['aber'] },
                ]
              },
              {
                id: 'cc2',
                title: 'Denn & Sondern',
                description: 'Practice using "denn" (because) and "sondern" (but/rather - after a negation).',
                type: 'fill-in',
                items: [
                  { id: 'cc2_1', sentence: 'Er kommt nicht, [blank] er ist krank.', answers: ['denn'] },
                  { id: 'cc2_2', sentence: 'Ich trinke keinen Kaffee, [blank] Tee.', answers: ['sondern'] },
                  { id: 'cc2_3', sentence: 'Wir bleiben hier, [blank] es regnet.', answers: ['denn'] },
                  { id: 'cc2_4', sentence: 'Das ist kein Hund, [blank] eine Katze.', answers: ['sondern'] },
                  { id: 'cc2_5', sentence: 'Sie lacht, [blank] sie ist glücklich.', answers: ['denn'] },
                  { id: 'cc2_6', sentence: 'Er lernt nicht Spanisch, [blank] Deutsch.', answers: ['sondern'] },
                  { id: 'cc2_7', sentence: 'Ich kaufe das Brot, [blank] ich habe Hunger.', answers: ['denn'] },
                  { id: 'cc2_8', sentence: 'Wir fahren nicht mit dem Auto, [blank] mit dem Bus.', answers: ['sondern'] },
                  { id: 'cc2_9', sentence: 'Sie geht schlafen, [blank] sie ist müde.', answers: ['denn'] },
                  { id: 'cc2_10', sentence: 'Das ist nicht mein Buch, [blank] deins.', answers: ['sondern'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'inversion',
        title: 'Inversion (V2 Rule)',
        subunits: [
          {
            id: 'time-place-inversion',
            title: 'Time & Place Starters',
            tasks: [
              {
                id: 'inv1',
                title: 'Time & Sequence',
                description: 'When a sentence starts with a time word, the verb must come next (Position 2). Fill in the verb and subject.',
                type: 'fill-in',
                items: [
                  { id: 'inv1_1', sentence: 'Heute [blank] [blank] (ich / gehen) ins Kino.', answers: ['gehe', 'ich'] },
                  { id: 'inv1_2', sentence: 'Gestern [blank] [blank] (wir / haben) viel Spaß.', answers: ['hatten', 'wir'] },
                  { id: 'inv1_3', sentence: 'Morgen [blank] [blank] (er / fahren) nach Berlin.', answers: ['fährt', 'er'] },
                  { id: 'inv1_4', sentence: 'Dann [blank] [blank] (wir / essen) zu Abend.', answers: ['essen', 'wir'] },
                  { id: 'inv1_5', sentence: 'Danach [blank] [blank] (sie / gehen) spazieren.', answers: ['gehen', 'sie'] },
                  { id: 'inv1_6', sentence: 'Später [blank] [blank] (ich / lesen) ein Buch.', answers: ['lese', 'ich'] },
                  { id: 'inv1_7', sentence: 'Zuvor [blank] [blank] (wir / trinken) einen Kaffee.', answers: ['trinken', 'wir'] },
                  { id: 'inv1_8', sentence: 'Neulich [blank] [blank] (ich / sehen) einen alten Freund.', answers: ['sah', 'ich'] },
                  { id: 'inv1_9', sentence: 'Früher [blank] [blank] (wir / wohnen) in Hamburg.', answers: ['wohnten', 'wir'] },
                  { id: 'inv1_10', sentence: 'Jetzt [blank] [blank] (du / müssen) lernen.', answers: ['musst', 'du'] },
                ]
              },
              {
                id: 'inv1_b',
                title: 'Time & Sequence 2',
                description: 'More practice with time words triggering inversion.',
                type: 'fill-in',
                items: [
                  { id: 'inv1_b1', sentence: 'Zuerst [blank] [blank] (ich / trinken) einen Tee.', answers: ['trinke', 'ich'] },
                  { id: 'inv1_b2', sentence: 'Danach [blank] [blank] (wir / machen) Hausaufgaben.', answers: ['machen', 'wir'] },
                  { id: 'inv1_b3', sentence: 'Später [blank] [blank] (er / kommen) vorbei.', answers: ['kommt', 'er'] },
                  { id: 'inv1_b4', sentence: 'Neulich [blank] [blank] (ich / treffen) meine Tante.', answers: ['traf', 'ich'] },
                  { id: 'inv1_b5', sentence: 'Früher [blank] [blank] (es / geben) hier einen Park.', answers: ['gab', 'es'] },
                  { id: 'inv1_b6', sentence: 'Heute [blank] [blank] (die Sonne / scheinen).', answers: ['scheint', 'die Sonne'] },
                  { id: 'inv1_b7', sentence: 'Gestern [blank] [blank] (ich / sein) krank.', answers: ['war', 'ich'] },
                  { id: 'inv1_b8', sentence: 'Morgen [blank] [blank] (wir / haben) frei.', answers: ['haben', 'wir'] },
                  { id: 'inv1_b9', sentence: 'Erst [blank] [blank] (ich / essen), dann schlafe ich.', answers: ['esse', 'ich'] },
                  { id: 'inv1_b10', sentence: 'Dann [blank] [blank] (wir / gehen) los.', answers: ['gehen', 'wir'] },
                ]
              },
              {
                id: 'inv1_c',
                title: 'Place Starters',
                description: 'When a sentence starts with a place word, the verb must come next.',
                type: 'fill-in',
                items: [
                  { id: 'inv1_c1', sentence: 'Hier [blank] [blank] (ich / wohnen).', answers: ['wohne', 'ich'] },
                  { id: 'inv1_c2', sentence: 'Dort [blank] [blank] (der Bahnhof / sein).', answers: ['ist', 'der Bahnhof'] },
                  { id: 'inv1_c3', sentence: 'Da [blank] [blank] (er / kommen).', answers: ['kommt', 'er'] },
                  { id: 'inv1_c4', sentence: 'Oben [blank] [blank] (die Kinder / spielen).', answers: ['spielen', 'die Kinder'] },
                  { id: 'inv1_c5', sentence: 'Unten [blank] [blank] (der Keller / sein).', answers: ['ist', 'der Keller'] },
                  { id: 'inv1_c6', sentence: 'Draußen [blank] [blank] (es / regnen).', answers: ['regnet', 'es'] },
                  { id: 'inv1_c7', sentence: 'Drinnen [blank] [blank] (es / sein) warm.', answers: ['ist', 'es'] },
                  { id: 'inv1_c8', sentence: 'Überall [blank] [blank] (man / hören) Musik.', answers: ['hört', 'man'] },
                  { id: 'inv1_c9', sentence: 'Nirgends [blank] [blank] (ich / finden) meinen Schlüssel.', answers: ['finde', 'ich'] },
                  { id: 'inv1_c10', sentence: 'Links [blank] [blank] (die Post / liegen).', answers: ['liegt', 'die Post'] },
                ]
              }
            ]
          },
          {
            id: 'opinion-logic-inversion',
            title: 'Opinion & Logic Starters',
            tasks: [
              {
                id: 'inv2',
                title: 'Opinion & Connectors',
                description: 'Practice inversion with opinion starters like "Meiner Meinung nach" or "Vielleicht".',
                type: 'fill-in',
                items: [
                  { id: 'inv2_1', sentence: 'Meiner Meinung nach [blank] [blank] (das / sein) eine gute Idee.', answers: ['ist', 'das'] },
                  { id: 'inv2_2', sentence: 'Vielleicht [blank] [blank] (er / kommen) heute.', answers: ['kommt', 'er'] },
                  { id: 'inv2_3', sentence: 'Hoffentlich [blank] [blank] (wir / gewinnen) das Spiel.', answers: ['gewinnen', 'wir'] },
                  { id: 'inv2_4', sentence: 'Deshalb [blank] [blank] (ich / brauchen) deine Hilfe.', answers: ['brauche', 'ich'] },
                  { id: 'inv2_5', sentence: 'Trotzdem [blank] [blank] (sie / arbeiten) weiter.', answers: ['arbeitet', 'sie'] },
                  { id: 'inv2_6', sentence: 'Jedoch [blank] [blank] (wir / haben) keine Zeit.', answers: ['haben', 'wir'] },
                  { id: 'inv2_7', sentence: 'Außerdem [blank] [blank] (er / lernen) Japanisch.', answers: ['lernt', 'er'] },
                  { id: 'inv2_8', sentence: 'Zum Beispiel [blank] [blank] (ich / essen) gern Pizza.', answers: ['esse', 'ich'] },
                  { id: 'inv2_9', sentence: 'Einerseits [blank] [blank] (ich / wollen) reisen.', answers: ['will', 'ich'] },
                  { id: 'inv2_10', sentence: 'Andererseits [blank] [blank] (es / kosten) viel Geld.', answers: ['kostet', 'es'] },
                ]
              },
              {
                id: 'inv2_b',
                title: 'Opinion Starters 2',
                description: 'More practice with opinion and probability words.',
                type: 'fill-in',
                items: [
                  { id: 'inv2_b1', sentence: 'Wahrscheinlich [blank] [blank] (er / haben) keine Zeit.', answers: ['hat', 'er'] },
                  { id: 'inv2_b2', sentence: 'Sicher [blank] [blank] (wir / finden) eine Lösung.', answers: ['finden', 'wir'] },
                  { id: 'inv2_b3', sentence: 'Bestimmt [blank] [blank] (du / bestehen) die Prüfung.', answers: ['bestehst', 'du'] },
                  { id: 'inv2_b4', sentence: 'Eigentlich [blank] [blank] (ich / wollen) schlafen.', answers: ['will', 'ich'] },
                  { id: 'inv2_b5', sentence: 'Natürlich [blank] [blank] (wir / helfen) dir.', answers: ['helfen', 'wir'] },
                  { id: 'inv2_b6', sentence: 'Leider [blank] [blank] (es / regnen) schon wieder.', answers: ['regnet', 'es'] },
                  { id: 'inv2_b7', sentence: 'Glücklicherweise [blank] [blank] (niemand / sein) verletzt.', answers: ['ist', 'niemand'] },
                  { id: 'inv2_b8', sentence: 'Unglücklicherweise [blank] [blank] (ich / verlieren) mein Geld.', answers: ['verlor', 'ich'] },
                  { id: 'inv2_b9', sentence: 'Möglicherweise [blank] [blank] (sie / kommen) später.', answers: ['kommt', 'sie'] },
                  { id: 'inv2_b10', sentence: 'Hoffentlich [blank] [blank] (die Sonne / scheinen) morgen.', answers: ['scheint', 'die Sonne'] },
                ]
              },
              {
                id: 'inv2_c',
                title: 'Logic & Connectors 2',
                description: 'More practice with logical connectors triggering inversion.',
                type: 'fill-in',
                items: [
                  { id: 'inv2_c1', sentence: 'Deswegen [blank] [blank] (er / sein) sauer.', answers: ['ist', 'er'] },
                  { id: 'inv2_c2', sentence: 'Darum [blank] [blank] (wir / gehen) jetzt.', answers: ['gehen', 'wir'] },
                  { id: 'inv2_c3', sentence: 'Daher [blank] [blank] (ich / wissen) das nicht.', answers: ['weiß', 'ich'] },
                  { id: 'inv2_c4', sentence: 'Also [blank] [blank] (wir / bleiben) hier.', answers: ['bleiben', 'wir'] },
                  { id: 'inv2_c5', sentence: 'Folglich [blank] [blank] (man / müssen) warten.', answers: ['muss', 'man'] },
                  { id: 'inv2_c6', sentence: 'Infolgedessen [blank] [blank] (die Preise / steigen).', answers: ['steigen', 'die Preise'] },
                  { id: 'inv2_c7', sentence: 'Dennoch [blank] [blank] (er / versuchen) es.', answers: ['versucht', 'er'] },
                  { id: 'inv2_c8', sentence: 'Allerdings [blank] [blank] (es / sein) teuer.', answers: ['ist', 'es'] },
                  { id: 'inv2_c9', sentence: 'Dagegen [blank] [blank] (ich / haben) nichts.', answers: ['habe', 'ich'] },
                  { id: 'inv2_c10', sentence: 'Zwar [blank] [blank] (er / sein) alt, aber fit.', answers: ['ist', 'er'] },
                ]
              }
            ]
          },
          {
            id: 'mixed-starters-inversion',
            title: 'Advanced Starters',
            tasks: [
              {
                id: 'inv3',
                title: 'Complex Starters Challenge',
                description: 'Practice with more complex starters from the list.',
                type: 'fill-in',
                items: [
                  { id: 'inv3_1', sentence: 'Glücklicherweise [blank] [blank] (wir / finden) den Schlüssel.', answers: ['fanden', 'wir'] },
                  { id: 'inv3_2', sentence: 'Leider [blank] [blank] (ich / können) nicht kommen.', answers: ['kann', 'ich'] },
                  { id: 'inv3_3', sentence: 'Ein Vorteil [blank] [blank] (sein / die Lage).', answers: ['ist', 'die'] },
                  { id: 'inv3_4', sentence: 'Ein Nachteil [blank] [blank] (es / geben) auch.', answers: ['gibt', 'es'] },
                  { id: 'inv3_5', sentence: 'Vor allem [blank] [blank] (ich / lieben) Schokolade.', answers: ['liebe', 'ich'] },
                  { id: 'inv3_6', sentence: 'Im Großen und Ganzen [blank] [blank] (wir / sein) zufrieden.', answers: ['sind', 'wir'] },
                  { id: 'inv3_7', sentence: 'Alles in allem [blank] [blank] (es / war) ein Erfolg.', answers: ['war', 'es'] },
                  { id: 'inv3_8', sentence: 'Insgesamt [blank] [blank] (wir / haben) viel gelernt.', answers: ['haben', 'wir'] },
                  { id: 'inv3_9', sentence: 'Zudem [blank] [blank] (er / brauchen) ein neues Auto.', answers: ['braucht', 'er'] },
                  { id: 'inv3_10', sentence: 'Folglich [blank] [blank] (wir / bleiben) zu Hause.', answers: ['bleiben', 'wir'] },
                ]
              },
              {
                id: 'inv3_b',
                title: 'Complex Phrases 2',
                description: 'Advanced practice with longer introductory phrases.',
                type: 'fill-in',
                items: [
                  { id: 'inv3_b1', sentence: 'Im Allgemeinen [blank] [blank] (ich / essen) gesund.', answers: ['esse', 'ich'] },
                  { id: 'inv3_b2', sentence: 'Darüber hinaus [blank] [blank] (wir / brauchen) Zeit.', answers: ['brauchen', 'wir'] },
                  { id: 'inv3_b3', sentence: 'Aus diesem Grund [blank] [blank] (er / kündigen).', answers: ['kündigt', 'er'] },
                  { id: 'inv3_b4', sentence: 'Besonders [blank] [blank] (ich / mögen) Musik.', answers: ['mag', 'ich'] },
                  { id: 'inv3_b5', sentence: 'Zum Beispiel [blank] [blank] (es / geben) viele Museen.', answers: ['gibt', 'es'] },
                  { id: 'inv3_b6', sentence: 'Im Großen und Ganzen [blank] [blank] (der Urlaub / sein) toll.', answers: ['war', 'der Urlaub'] },
                  { id: 'inv3_b7', sentence: 'Alles in allem [blank] [blank] (wir / haben) Glück gehabt.', answers: ['haben', 'wir'] },
                  { id: 'inv3_b8', sentence: 'Insgesamt [blank] [blank] (das / kosten) 50 Euro.', answers: ['kostet', 'das'] },
                  { id: 'inv3_b9', sentence: 'Zudem [blank] [blank] (sie / sprechen) fließend Deutsch.', answers: ['spricht', 'sie'] },
                  { id: 'inv3_b10', sentence: 'Vor allem [blank] [blank] (wir / wollen) Spaß haben.', answers: ['wollen', 'wir'] },
                ]
              },
              {
                id: 'inv3_c',
                title: 'Contrast Phrases',
                description: 'Practice inversion with phrases that show contrast or comparison.',
                type: 'fill-in',
                items: [
                  { id: 'inv3_c1', sentence: 'Einerseits [blank] [blank] (ich / sein) müde.', answers: ['bin', 'ich'] },
                  { id: 'inv3_c2', sentence: 'Andererseits [blank] [blank] (ich / müssen) arbeiten.', answers: ['muss', 'ich'] },
                  { id: 'inv3_c3', sentence: 'Auf der einen Seite [blank] [blank] (das / sein) gut.', answers: ['ist', 'das'] },
                  { id: 'inv3_c4', sentence: 'Auf der anderen Seite [blank] [blank] (es / haben) Nachteile.', answers: ['hat', 'es'] },
                  { id: 'inv3_c5', sentence: 'Dagegen [blank] [blank] (wir / können) nichts tun.', answers: ['können', 'wir'] },
                  { id: 'inv3_c6', sentence: 'Jedoch [blank] [blank] (er / kommen) nicht.', answers: ['kommt', 'er'] },
                  { id: 'inv3_c7', sentence: 'Allerdings [blank] [blank] (wir / brauchen) Hilfe.', answers: ['brauchen', 'wir'] },
                  { id: 'inv3_c8', sentence: 'Trotzdem [blank] [blank] (ich / gehen) raus.', answers: ['gehe', 'ich'] },
                  { id: 'inv3_c9', sentence: 'Dennoch [blank] [blank] (sie / lachen).', answers: ['lacht', 'sie'] },
                  { id: 'inv3_c10', sentence: 'Zwar [blank] [blank] (ich / haben) Zeit, aber keine Lust.', answers: ['habe', 'ich'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'subordinating-conjunctions',
        title: 'Subordinating Conjunctions',
        subunits: [
          {
            id: 'weil-da-dass-reorder',
            title: 'Weil, Da, Dass (Word Order)',
            tasks: [
              {
                id: 'sub-re1',
                title: 'Main + Subordinate',
                description: 'Rearrange the German words to match the English sentence. The verb goes to the end of the subordinate clause.',
                type: 'reorder',
                items: [
                  { 
                    id: 'subre1_1', 
                    sentence: 'I am staying at home because it is raining.', 
                    scrambled: ['bleibe', 'weil', 'regnet', 'Hause', 'es', 'Ich', 'zu', '.'],
                    answers: ['Ich bleibe zu Hause, weil es regnet.'] 
                  },
                  { 
                    id: 'subre1_2', 
                    sentence: 'I know that you are right.', 
                    scrambled: ['dass', 'hast', 'Ich', 'recht', 'du', 'weiß', '.'],
                    answers: ['Ich weiß, dass du recht hast.'] 
                  },
                  { 
                    id: 'subre1_3', 
                    sentence: 'He is not coming because he is ill.', 
                    scrambled: ['da', 'ist', 'krank', 'Er', 'kommt', 'er', 'nicht', '.'],
                    answers: ['Er kommt nicht, da er krank ist.'] 
                  },
                  { 
                    id: 'subre1_4', 
                    sentence: 'We hope that the sun is shining.', 
                    scrambled: ['dass', 'hoffen', 'scheint', 'Sonne', 'Wir', 'die', '.'],
                    answers: ['Wir hoffen, dass die Sonne scheint.'] 
                  },
                  { 
                    id: 'subre1_5', 
                    sentence: 'She is learning a lot because she wants to pass the exam.', 
                    scrambled: ['Prüfung', 'weil', 'will', 'Sie', 'bestehen', 'lernt', 'die', 'viel', '.'],
                    answers: ['Sie lernt viel, weil sie die Prüfung bestehen will.'] 
                  },
                  { 
                    id: 'subre1_6', 
                    sentence: 'I believe that he is coming today.', 
                    scrambled: ['dass', 'glaube', 'kommt', 'Ich', 'heute', 'er', '.'],
                    answers: ['Ich glaube, dass er heute kommt.'] 
                  },
                  { 
                    id: 'subre1_7', 
                    sentence: 'He is happy because he won the lottery.', 
                    scrambled: ['da', 'Lotto', 'hat', 'Er', 'gewonnen', 'freut', 'sich', 'im', '.'],
                    answers: ['Er freut sich, da er im Lotto gewonnen hat.'] 
                  },
                  { 
                    id: 'subre1_8', 
                    sentence: 'We see that it is already late.', 
                    scrambled: ['dass', 'sehen', 'ist', 'Wir', 'spät', 'schon', '.'],
                    answers: ['Wir sehen, dass es schon spät ist.'] 
                  },
                  { 
                    id: 'subre1_9', 
                    sentence: 'I drink water because I am thirsty.', 
                    scrambled: ['weil', 'trinke', 'habe', 'Ich', 'Durst', 'Wasser', '.'],
                    answers: ['Ich trinke Wasser, weil ich Durst habe.'] 
                  },
                  { 
                    id: 'subre1_10', 
                    sentence: 'She says that she has no time.', 
                    scrambled: ['dass', 'hat', 'Sie', 'keine', 'sagt', 'Zeit', '.'],
                    answers: ['Sie sagt, dass sie keine Zeit hat.'] 
                  },
                ]
              },
              {
                id: 'sub-re2',
                title: 'Subordinate + Main',
                description: 'Rearrange the words starting with the subordinate clause. Remember the "Verb-Verb sandwich"!',
                type: 'reorder',
                items: [
                  { 
                    id: 'subre2_1', 
                    sentence: 'Because it is raining, we are staying at home.', 
                    scrambled: ['bleiben', 'regnet', 'Hause', 'es', 'zu', 'Weil', 'wir', '.'],
                    answers: ['Weil es regnet, bleiben wir zu Hause.'] 
                  },
                  { 
                    id: 'subre2_2', 
                    sentence: 'Since he is ill, he is not coming.', 
                    scrambled: ['ist', 'krank', 'Da', 'kommt', 'er', 'nicht', 'er', '.'],
                    answers: ['Da er krank ist, kommt er nicht.'] 
                  },
                  { 
                    id: 'subre2_3', 
                    sentence: 'That you are right, I know.', 
                    scrambled: ['dass', 'hast', 'recht', 'du', 'weiß', 'Ich', '.'],
                    answers: ['Dass du recht hast, weiß ich.'] 
                  },
                  { 
                    id: 'subre2_4', 
                    sentence: 'Because she learns a lot, she passes the exam.', 
                    scrambled: ['Prüfung', 'lernt', 'besteht', 'sie', 'die', 'viel', 'Weil', 'sie', '.'],
                    answers: ['Weil sie viel lernt, besteht sie die Prüfung.'] 
                  },
                  { 
                    id: 'subre2_5', 
                    sentence: 'Since it is late, we are going to sleep.', 
                    scrambled: ['ist', 'gehen', 'spät', 'Da', 'wir', 'schlafen', 'es', '.'],
                    answers: ['Da es spät ist, gehen wir schlafen.'] 
                  },
                  { 
                    id: 'subre2_6', 
                    sentence: 'That he is coming today, I believe.', 
                    scrambled: ['dass', 'kommt', 'glaube', 'heute', 'er', 'Ich', '.'],
                    answers: ['Dass er heute kommt, glaube ich.'] 
                  },
                  { 
                    id: 'subre2_7', 
                    sentence: 'Because I am thirsty, I drink water.', 
                    scrambled: ['trinke', 'habe', 'Durst', 'Weil', 'ich', 'Wasser', 'ich', '.'],
                    answers: ['Weil ich Durst habe, trinke ich Wasser.'] 
                  },
                  { 
                    id: 'subre2_8', 
                    sentence: 'Since he won, he is happy.', 
                    scrambled: ['hat', 'Da', 'gewonnen', 'freut', 'sich', 'er', 'er', '.'],
                    answers: ['Da er gewonnen hat, freut er sich.'] 
                  },
                  { 
                    id: 'subre2_9', 
                    sentence: 'That she has no time, she says.', 
                    scrambled: ['dass', 'hat', 'keine', 'sagt', 'Zeit', 'sie', 'Sie', '.'],
                    answers: ['Dass sie keine Zeit hat, sagt sie.'] 
                  },
                  { 
                    id: 'subre2_10', 
                    sentence: 'Because the sun is shining, we are going for a walk.', 
                    scrambled: ['Sonne', 'scheint', 'gehen', 'die', 'spazieren', 'Weil', 'wir', '.'],
                    answers: ['Weil die Sonne scheint, gehen wir spazieren.'] 
                  },
                ]
              }
            ]
          },
          {
            id: 'sub-advanced-tenses',
            title: 'Subordinating (Advanced Tenses)',
            tasks: [
              {
                id: 'sub-perf1',
                title: 'Perfect Tense: Main + Sub',
                description: 'In the perfect tense, the auxiliary verb (haben/sein) goes to the very end of the subordinate clause.',
                type: 'reorder',
                items: [
                  { id: 'sp1_1', sentence: 'I am happy because I have seen my friend.', scrambled: ['habe', 'weil', 'meinen', 'Ich', 'gesehen', 'freue', 'mich', 'Freund', '.'], answers: ['Ich freue mich, weil ich meinen Freund gesehen habe.'] },
                  { id: 'sp1_2', sentence: 'He says that he has bought a car.', scrambled: ['dass', 'Auto', 'ein', 'Er', 'gekauft', 'sagt', 'hat', '.'], answers: ['Er sagt, dass er ein Auto gekauft hat.'] },
                  { id: 'sp1_3', sentence: 'We know that they have arrived.', scrambled: ['dass', 'sind', 'Wir', 'angekommen', 'sie', 'wissen', '.'], answers: ['Wir wissen, dass sie angekommen sind.'] },
                  { id: 'sp1_4', sentence: 'She is tired because she has worked a lot.', scrambled: ['gearbeitet', 'weil', 'hat', 'Sie', 'müde', 'ist', 'viel', '.'], answers: ['Sie ist müde, weil sie viel gearbeitet hat.'] },
                  { id: 'sp1_5', sentence: 'I believe that it has rained.', scrambled: ['dass', 'glaube', 'geregnet', 'Ich', 'hat', 'es', '.'], answers: ['Ich glaube, dass es geregnet hat.'] },
                  { id: 'sp1_6', sentence: 'He is sad because he has lost his key.', scrambled: ['weil', 'hat', 'Er', 'verloren', 'traurig', 'ist', 'seinen', 'Schlüssel', '.'], answers: ['Er ist traurig, weil er seinen Schlüssel verloren hat.'] },
                  { id: 'sp1_7', sentence: 'We hope that you have had fun.', scrambled: ['dass', 'hoffen', 'Spaß', 'Wir', 'gehabt', 'ihr', 'habt', '.'], answers: ['Wir hoffen, dass ihr Spaß gehabt habt.'] },
                  { id: 'sp1_8', sentence: 'I know that she has gone to Berlin.', scrambled: ['dass', 'nach', 'ist', 'Ich', 'gegangen', 'Berlin', 'sie', 'weiß', '.'], answers: ['Ich weiß, dass sie nach Berlin gegangen ist.'] },
                  { id: 'sp1_9', sentence: 'They say that they have forgotten the homework.', scrambled: ['dass', 'haben', 'sie', 'Hausaufgaben', 'Sagen', 'die', 'vergessen', '.'], answers: ['Sie sagen, dass sie die Hausaufgaben vergessen haben.'] },
                  { id: 'sp1_10', sentence: 'I am glad that everything has worked out.', scrambled: ['dass', 'geklappt', 'Ich', 'froh', 'hat', 'alles', 'bin', '.'], answers: ['Ich bin froh, dass alles geklappt hat.'] },
                ]
              },
              {
                id: 'sub-perf2',
                title: 'Perfect Tense: Sub + Main',
                description: 'Subordinate clause first, then main clause starting with the verb.',
                type: 'reorder',
                items: [
                  { id: 'sp2_1', sentence: 'Because I have seen my friend, I am happy.', scrambled: ['habe', 'gesehen', 'meinen', 'Weil', 'ich', 'Freund', 'freue', 'mich', 'ich', '.'], answers: ['Weil ich meinen Freund gesehen habe, freue ich mich.'] },
                  { id: 'sp2_2', sentence: 'Since he has bought a car, he has no money.', scrambled: ['hat', 'geauft', 'Auto', 'Da', 'er', 'ein', 'hat', 'er', 'Geld', 'kein', '.'], answers: ['Da er ein Auto gekauft hat, hat er kein Geld.'] },
                  { id: 'sp2_3', sentence: 'Because they have arrived, we are eating now.', scrambled: ['sind', 'angekommen', 'sie', 'Weil', 'jetzt', 'wir', 'essen', '.'], answers: ['Weil sie angekommen sind, essen wir jetzt.'] },
                  { id: 'sp2_4', sentence: 'Since she has worked a lot, she is tired.', scrambled: ['hat', 'gearbeitet', 'viel', 'Da', 'sie', 'müde', 'sie', 'ist', '.'], answers: ['Da sie viel gearbeitet hat, ist sie müde.'] },
                  { id: 'sp2_5', sentence: 'Because it has rained, the street is wet.', scrambled: ['hat', 'geregnet', 'es', 'Weil', 'nass', 'Straße', 'ist', 'die', '.'], answers: ['Weil es geregnet hat, ist die Straße nass.'] },
                  { id: 'sp2_6', sentence: 'Since he has lost his key, he is waiting.', scrambled: ['hat', 'verloren', 'seinen', 'Da', 'er', 'Schlüssel', 'wartet', 'er', '.'], answers: ['Da er seinen Schlüssel verloren hat, wartet er.'] },
                  { id: 'sp2_7', sentence: 'Because you have had fun, I am happy.', scrambled: ['habt', 'gehabt', 'Spaß', 'Weil', 'ihr', 'freue', 'mich', 'ich', '.'], answers: ['Weil ihr Spaß gehabt habt, freue ich mich.'] },
                  { id: 'sp2_8', sentence: 'Since she has gone to Berlin, she is living there.', scrambled: ['ist', 'gegangen', 'nach', 'Da', 'sie', 'Berlin', 'wohnt', 'sie', 'dort', '.'], answers: ['Da sie nach Berlin gegangen ist, wohnt sie dort.'] },
                  { id: 'sp2_9', sentence: 'Because they have forgotten the homework, they are staying here.', scrambled: ['haben', 'vergessen', 'Hausaufgaben', 'Weil', 'sie', 'die', 'bleiben', 'sie', 'hier', '.'], answers: ['Weil sie die Hausaufgaben vergessen haben, bleiben sie hier.'] },
                  { id: 'sp2_10', sentence: 'Since everything has worked out, we are celebrating.', scrambled: ['hat', 'geklappt', 'alles', 'Da', 'feiern', 'wir', '.'], answers: ['Da alles geklappt hat, feiern wir.'] },
                ]
              },
              {
                id: 'sub-fut1',
                title: 'Future Tense: Main + Sub',
                description: 'In the future tense, "werden" goes to the very end of the subordinate clause.',
                type: 'reorder',
                items: [
                  { id: 'sf1_1', sentence: 'I hope that it will be warm.', scrambled: ['dass', 'wird', 'hoffe', 'Ich', 'warm', 'es', '.'], answers: ['Ich hoffe, dass es warm wird.'] },
                  { id: 'sf1_2', sentence: 'He says that he will come tomorrow.', scrambled: ['dass', 'wird', 'Er', 'kommen', 'sagt', 'morgen', 'er', '.'], answers: ['Er sagt, dass er morgen kommen wird.'] },
                  { id: 'sf1_3', sentence: 'We know that they will help us.', scrambled: ['dass', 'werden', 'Wir', 'helfen', 'sie', 'uns', 'wissen', '.'], answers: ['Wir wissen, dass sie uns helfen werden.'] },
                  { id: 'sf1_4', sentence: 'She believes that she will win.', scrambled: ['dass', 'wird', 'Sie', 'gewinnen', 'glaubt', 'sie', '.'], answers: ['Sie glaubt, dass sie gewinnen wird.'] },
                  { id: 'sf1_5', sentence: 'I am sure that you will find it.', scrambled: ['dass', 'werdet', 'Ich', 'finden', 'sicher', 'bin', 'es', 'ihr', '.'], answers: ['Ich bin sicher, dass ihr es finden werdet.'] },
                  { id: 'sf1_6', sentence: 'He thinks that it will rain.', scrambled: ['dass', 'wird', 'Er', 'regnen', 'denkt', 'es', '.'], answers: ['Er denkt, dass es regnen wird.'] },
                  { id: 'sf1_7', sentence: 'We hope that the weather will stay good.', scrambled: ['dass', 'hoffen', 'Wetter', 'Wir', 'bleiben', 'wird', 'gut', 'das', '.'], answers: ['Wir hoffen, dass das Wetter gut bleiben wird.'] },
                  { id: 'sf1_8', sentence: 'I know that we will arrive late.', scrambled: ['dass', 'werden', 'Ich', 'ankommen', 'spät', 'wir', 'weiß', '.'], answers: ['Ich weiß, dass wir spät ankommen werden.'] },
                  { id: 'sf1_9', sentence: 'They say that they will buy the house.', scrambled: ['dass', 'werden', 'sie', 'Haus', 'Sagen', 'das', 'kaufen', '.'], answers: ['Sie sagen, dass sie das Haus kaufen werden.'] },
                  { id: 'sf1_10', sentence: 'I believe that everything will be fine.', scrambled: ['dass', 'wird', 'Ich', 'gut', 'glaube', 'alles', '.'], answers: ['Ich glaube, dass alles gut wird.'] },
                ]
              },
              {
                id: 'sub-fut2',
                title: 'Future Tense: Sub + Main',
                description: 'Future subordinate clause first, then main clause inversion.',
                type: 'reorder',
                items: [
                  { id: 'sf2_1', sentence: 'Because it will be warm, we are going to the beach.', scrambled: ['wird', 'warm', 'Weil', 'es', 'gehen', 'wir', 'Strand', 'zum', '.'], answers: ['Weil es warm wird, gehen wir zum Strand.'] },
                  { id: 'sf2_2', sentence: 'Since he will come tomorrow, we are waiting.', scrambled: ['wird', 'kommen', 'Da', 'er', 'morgen', 'warten', 'wir', '.'], answers: ['Da er morgen kommen wird, warten wir.'] },
                  { id: 'sf2_3', sentence: 'Because they will help us, we are happy.', scrambled: ['werden', 'helfen', 'sie', 'Weil', 'uns', 'sind', 'wir', 'froh', '.'], answers: ['Weil sie uns helfen werden, sind wir froh.'] },
                  { id: 'sf2_4', sentence: 'Since she will win, she is training hard.', scrambled: ['wird', 'gewinnen', 'Da', 'sie', 'trainiert', 'sie', 'hart', '.'], answers: ['Da sie gewinnen wird, trainiert sie hart.'] },
                  { id: 'sf2_5', sentence: 'Because you will find it, I am not worried.', scrambled: ['werdet', 'finden', 'ihr', 'Weil', 'es', 'bin', 'ich', 'nicht', 'besorgt', '.'], answers: ['Weil ihr es finden werdet, bin ich nicht besorgt.'] },
                  { id: 'sf2_6', sentence: 'Since it will rain, we are staying here.', scrambled: ['wird', 'regnen', 'Da', 'es', 'bleiben', 'wir', 'hier', '.'], answers: ['Da es regnen wird, bleiben wir hier.'] },
                  { id: 'sf2_7', sentence: 'Because the weather will stay good, we are planning a trip.', scrambled: ['wird', 'bleiben', 'gut', 'Wetter', 'Weil', 'das', 'planen', 'wir', 'einen', 'Ausflug', '.'], answers: ['Weil das Wetter gut bleiben wird, planen wir einen Ausflug.'] },
                  { id: 'sf2_8', sentence: 'Since we will arrive late, we are taking a taxi.', scrambled: ['werden', 'ankommen', 'spät', 'Da', 'wir', 'nehmen', 'wir', 'ein', 'Taxi', '.'], answers: ['Da wir spät ankommen werden, nehmen wir ein Taxi.'] },
                  { id: 'sf2_9', sentence: 'Because they will buy the house, they are happy.', scrambled: ['werden', 'kaufen', 'Haus', 'Weil', 'sie', 'das', 'sind', 'sie', 'froh', '.'], answers: ['Weil sie das Haus kaufen werden, sind sie froh.'] },
                  { id: 'sf2_10', sentence: 'Since everything will be fine, I am sleeping well.', scrambled: ['wird', 'gut', 'alles', 'Da', 'schlafe', 'ich', 'gut', '.'], answers: ['Da alles gut wird, schlafe ich gut.'] },
                ]
              },
              {
                id: 'sub-cond1',
                title: 'Conditional (würde): Main + Sub',
                description: 'In the conditional with "würde", the auxiliary "würde" goes to the end.',
                type: 'reorder',
                items: [
                  { id: 'sc1_1', sentence: 'I think that he would help.', scrambled: ['dass', 'würde', 'Ich', 'helfen', 'denke', 'er', '.'], answers: ['Ich denke, dass er helfen würde.'] },
                  { id: 'sc1_2', sentence: 'She says that she would come.', scrambled: ['dass', 'würde', 'Sie', 'kommen', 'sagt', 'sie', '.'], answers: ['Sie sagt, dass sie kommen würde.'] },
                  { id: 'sc1_3', sentence: 'We know that they would do it.', scrambled: ['dass', 'würden', 'Wir', 'machen', 'sie', 'es', 'wissen', '.'], answers: ['Wir wissen, dass sie es machen würden.'] },
                  { id: 'sc1_4', sentence: 'I believe that you would like it.', scrambled: ['dass', 'würde', 'Ich', 'gefallen', 'glaube', 'dir', 'das', '.'], answers: ['Ich glaube, dass dir das gefallen würde.'] },
                  { id: 'sc1_5', sentence: 'He hopes that it would work.', scrambled: ['dass', 'würde', 'Er', 'funktionieren', 'hofft', 'es', '.'], answers: ['Er hofft, dass es funktionieren würde.'] },
                  { id: 'sc1_6', sentence: 'They say that they would buy it.', scrambled: ['dass', 'würden', 'sie', 'kaufen', 'Sagen', 'es', '.'], answers: ['Sie sagen, dass sie es kaufen würden.'] },
                  { id: 'sc1_7', sentence: 'I know that she would stay here.', scrambled: ['dass', 'würde', 'Ich', 'bleiben', 'hier', 'sie', 'weiß', '.'], answers: ['Ich weiß, dass sie hier bleiben würde.'] },
                  { id: 'sc1_8', sentence: 'We think that we would find a solution.', scrambled: ['dass', 'würden', 'Wir', 'Lösung', 'eine', 'finden', 'denken', 'wir', '.'], answers: ['Wir denken, dass wir eine Lösung finden würden.'] },
                  { id: 'sc1_9', sentence: 'She hopes that he would call.', scrambled: ['dass', 'würde', 'Sie', 'anrufen', 'hofft', 'er', '.'], answers: ['Sie hofft, dass er anrufen würde.'] },
                  { id: 'sc1_10', sentence: 'I believe that everything would be better.', scrambled: ['dass', 'würde', 'Ich', 'besser', 'glaube', 'alles', '.'], answers: ['Ich glaube, dass alles besser würde.'] },
                ]
              },
              {
                id: 'sub-cond2',
                title: 'Conditional (würde): Sub + Main',
                description: 'Conditional subordinate clause first, then main clause inversion.',
                type: 'reorder',
                items: [
                  { id: 'sc2_1', sentence: 'If he would help, I would be happy.', scrambled: ['würde', 'helfen', 'Wenn', 'er', 'wäre', 'ich', 'froh', '.'], answers: ['Wenn er helfen würde, wäre ich froh.'] },
                  { id: 'sc2_2', sentence: 'If she would come, we would eat together.', scrambled: ['würde', 'kommen', 'Wenn', 'sie', 'essen', 'wir', 'zusammen', '.'], answers: ['Wenn sie kommen würde, essen wir zusammen.'] },
                  { id: 'sc2_3', sentence: 'If they would do it, it would be great.', scrambled: ['würden', 'machen', 'sie', 'Wenn', 'es', 'wäre', 'es', 'toll', '.'], answers: ['Wenn sie es machen würden, wäre es toll.'] },
                  { id: 'sc2_4', sentence: 'If you would like it, I would buy it.', scrambled: ['würde', 'gefallen', 'dir', 'Wenn', 'das', 'kaufte', 'ich', 'es', '.'], answers: ['Wenn dir das gefallen würde, kaufte ich es.'] },
                  { id: 'sc2_5', sentence: 'If it would work, we would stay.', scrambled: ['würde', 'funktionieren', 'Wenn', 'es', 'blieben', 'wir', '.'], answers: ['Wenn es funktionieren würde, blieben wir.'] },
                  { id: 'sc2_6', sentence: 'If they would buy it, they would need money.', scrambled: ['würden', 'kaufen', 'sie', 'Wenn', 'es', 'brauchten', 'sie', 'Geld', '.'], answers: ['Wenn sie es kaufen würden, brauchten sie Geld.'] },
                  { id: 'sc2_7', sentence: 'If she would stay here, I would be glad.', scrambled: ['würde', 'bleiben', 'hier', 'Wenn', 'sie', 'wäre', 'ich', 'froh', '.'], answers: ['Wenn sie hier bleiben würde, wäre ich froh.'] },
                  { id: 'sc2_8', sentence: 'If we would find a solution, everything would be fine.', scrambled: ['würden', 'finden', 'Lösung', 'eine', 'Wenn', 'wir', 'wäre', 'alles', 'gut', '.'], answers: ['Wenn wir eine Lösung finden würden, wäre alles gut.'] },
                  { id: 'sc2_9', sentence: 'If he would call, she would be happy.', scrambled: ['würde', 'anrufen', 'Wenn', 'er', 'wäre', 'sie', 'glücklich', '.'], answers: ['Wenn er anrufen würde, wäre sie glücklich.'] },
                  { id: 'sc2_10', sentence: 'If everything would be better, I would stay.', scrambled: ['würde', 'besser', 'alles', 'Wenn', 'bliebe', 'ich', '.'], answers: ['Wenn alles besser würde, bliebe ich.'] },
                ]
              },
              {
                id: 'sub-inv-mixed',
                title: 'Inversion + Subordinating',
                description: 'The main sentence starts with an inversion (time/opinion), followed by a subordinating clause.',
                type: 'reorder',
                items: [
                  { id: 'sim_1', sentence: 'Today I know that you are right.', scrambled: ['weiß', 'dass', 'hast', 'Heute', 'ich', 'recht', 'du', '.'], answers: ['Heute weiß ich, dass du recht hast.'] },
                  { id: 'sim_2', sentence: 'Yesterday he said that he was ill.', scrambled: ['sagte', 'dass', 'war', 'Gestern', 'er', 'krank', 'er', '.'], answers: ['Gestern sagte er, dass er krank war.'] },
                  { id: 'sim_3', sentence: 'Maybe they hope that it will rain.', scrambled: ['hoffen', 'dass', 'wird', 'Vielleicht', 'sie', 'regnen', 'es', '.'], answers: ['Vielleicht hoffen sie, dass es regnen wird.'] },
                  { id: 'sim_4', sentence: 'Fortunately we see that everything is fine.', scrambled: ['sehen', 'dass', 'ist', 'Glücklicherweise', 'wir', 'alles', 'gut', '.'], answers: ['Glücklicherweise sehen wir, dass alles gut ist.'] },
                  { id: 'sim_5', sentence: 'Therefore I believe that she is coming.', scrambled: ['glaube', 'dass', 'kommt', 'Deshalb', 'ich', 'sie', '.'], answers: ['Deshalb glaube ich, dass sie kommt.'] },
                  { id: 'sim_6', sentence: 'Actually I know that he is working.', scrambled: ['weiß', 'dass', 'arbeitet', 'Eigentlich', 'ich', 'er', '.'], answers: ['Eigentlich weiß ich, dass er arbeitet.'] },
                  { id: 'sim_7', sentence: 'Tomorrow we hope that the sun shines.', scrambled: ['hoffen', 'dass', 'scheint', 'Morgen', 'wir', 'Sonne', 'die', '.'], answers: ['Morgen hoffen wir, dass die Sonne scheint.'] },
                  { id: 'sim_8', sentence: 'Unfortunately she says that she has no time.', scrambled: ['sagt', 'dass', 'hat', 'Leider', 'sie', 'keine', 'Zeit', 'sie', '.'], answers: ['Leider sagt sie, dass sie keine Zeit hat.'] },
                  { id: 'sim_9', sentence: 'Probably he thinks that he is the best.', scrambled: ['denkt', 'dass', 'ist', 'Wahrscheinlich', 'er', 'Beste', 'der', 'er', '.'], answers: ['Wahrscheinlich denkt er, dass er der Beste ist.'] },
                  { id: 'sim_10', sentence: 'Overall I believe that it was a success.', scrambled: ['glaube', 'dass', 'war', 'Insgesamt', 'ich', 'Erfolg', 'ein', 'es', '.'], answers: ['Insgesamt glaube ich, dass es ein Erfolg war.'] },
                ]
              }
            ]
          },
          {
            id: 'obwohl-damit-sodass',
            title: 'Obwohl, Damit, Sodass',
            tasks: [
              {
                id: 'obwohl-re1',
                title: 'Obwohl (Although)',
                description: 'Rearrange the words. "Obwohl" introduces a contrast. The verb goes to the end.',
                type: 'reorder',
                items: [
                  { id: 'ob1_1', sentence: 'I am going for a walk although it is raining.', scrambled: ['gehe', 'obwohl', 'regnet', 'Ich', 'spazieren', 'es', '.'], answers: ['Ich gehe spazieren, obwohl es regnet.'] },
                  { id: 'ob1_2', sentence: 'Although it is raining, I am going for a walk.', scrambled: ['regnet', 'gehe', 'obwohl', 'spazieren', 'es', 'ich', '.'], answers: ['Obwohl es regnet, gehe ich spazieren.'] },
                  { id: 'ob1_3', sentence: 'He is working although he is tired.', scrambled: ['arbeitet', 'obwohl', 'ist', 'Er', 'müde', 'er', '.'], answers: ['Er arbeitet, obwohl er müde ist.'] },
                  { id: 'ob1_4', sentence: 'Although he was tired, he worked a lot.', scrambled: ['war', 'arbeitete', 'obwohl', 'müde', 'er', 'er', 'viel', '.'], answers: ['Obwohl er müde war, arbeitete er viel.'] },
                  { id: 'ob1_5', sentence: 'We are staying here although we have no time.', scrambled: ['bleiben', 'obwohl', 'haben', 'Wir', 'hier', 'Zeit', 'keine', 'wir', '.'], answers: ['Wir bleiben hier, obwohl wir keine Zeit haben.'] },
                  { id: 'ob1_6', sentence: 'She is eating although she is not hungry.', scrambled: ['isst', 'obwohl', 'hat', 'Sie', 'keinen', 'sie', 'Hunger', '.'], answers: ['Sie isst, obwohl sie keinen Hunger hat.'] },
                  { id: 'ob1_7', sentence: 'Although it is cold, he wears a T-shirt.', scrambled: ['kalt', 'trägt', 'obwohl', 'ist', 'T-Shirt', 'ein', 'er', 'es', '.'], answers: ['Obwohl es kalt ist, trägt er ein T-Shirt.'] },
                  { id: 'ob1_8', sentence: 'They are playing outside although it is dark.', scrambled: ['spielen', 'obwohl', 'dunkel', 'Sie', 'draußen', 'ist', 'es', '.'], answers: ['Sie spielen draußen, obwohl es dunkel ist.'] },
                  { id: 'ob1_9', sentence: 'Although I am learning a lot, I don\'t understand it.', scrambled: ['lerne', 'verstehe', 'obwohl', 'viel', 'ich', 'nicht', 'es', 'ich', '.'], answers: ['Obwohl ich viel lerne, verstehe ich es nicht.'] },
                  { id: 'ob1_10', sentence: 'He is laughing although he is sad.', scrambled: ['lacht', 'obwohl', 'ist', 'Er', 'traurig', 'er', '.'], answers: ['Er lacht, obwohl er traurig ist.'] },
                ]
              },
              {
                id: 'damit-re1',
                title: 'Damit (So that)',
                description: '"Damit" expresses purpose. The verb goes to the end.',
                type: 'reorder',
                items: [
                  { id: 'da1_1', sentence: 'I lerne Deutsch, damit ich in Berlin arbeiten kann.', scrambled: ['lerne', 'damit', 'kann', 'Ich', 'Deutsch', 'Berlin', 'in', 'arbeiten', 'ich', '.'], answers: ['Ich lerne Deutsch, damit ich in Berlin arbeiten kann.'] },
                  { id: 'da1_2', sentence: 'Damit ich in Berlin arbeiten kann, lerne ich Deutsch.', scrambled: ['kann', 'lerne', 'damit', 'arbeiten', 'ich', 'Berlin', 'in', 'Deutsch', 'ich', '.'], answers: ['Damit ich in Berlin arbeiten kann, lerne ich Deutsch.'] },
                  { id: 'da1_3', sentence: 'He gives her money so that she can buy a car.', scrambled: ['gibt', 'damit', 'kann', 'Er', 'ihr', 'Geld', 'Auto', 'ein', 'kaufen', 'sie', '.'], answers: ['Er gibt ihr Geld, damit sie ein Auto kaufen kann.'] },
                  { id: 'da1_4', sentence: 'We are speaking slowly so that you understand us.', scrambled: ['sprechen', 'damit', 'versteht', 'Wir', 'langsam', 'ihr', 'uns', '.'], answers: ['Wir sprechen langsam, damit ihr uns versteht.'] },
                  { id: 'da1_5', sentence: 'She is saving money so that she will travel in summer.', scrambled: ['spart', 'damit', 'wird', 'Sie', 'Geld', 'reisen', 'Sommer', 'im', 'sie', '.'], answers: ['Sie spart Geld, damit sie im Sommer reisen wird.'] },
                  { id: 'da1_6', sentence: 'I am opening the window so that fresh air comes in.', scrambled: ['öffne', 'damit', 'kommt', 'Ich', 'Fenster', 'das', 'frische', 'Luft', 'rein', '.'], answers: ['Ich öffne das Fenster, damit frische Luft rein kommt.'] },
                  { id: 'da1_7', sentence: 'He is training hard so that he wins the race.', scrambled: ['trainiert', 'damit', 'gewinnt', 'Er', 'hart', 'Rennen', 'das', 'er', '.'], answers: ['Er trainiert hart, damit er das Rennen gewinnt.'] },
                  { id: 'da1_8', sentence: 'We are going early so that we get a seat.', scrambled: ['gehen', 'damit', 'bekommen', 'Wir', 'früh', 'Platz', 'einen', 'wir', '.'], answers: ['Wir gehen früh, damit wir einen Platz bekommen.'] },
                  { id: 'da1_9', sentence: 'She is writing it down so that she doesn\'t forget it.', scrambled: ['schreibt', 'damit', 'vergisst', 'Sie', 'auf', 'es', 'nicht', 'sie', 'es', '.'], answers: ['Sie schreibt es auf, damit sie es nicht vergisst.'] },
                  { id: 'da1_10', sentence: 'They are helping us so that we finish faster.', scrambled: ['helfen', 'damit', 'fertig', 'Sie', 'uns', 'schneller', 'werden', 'wir', '.'], answers: ['Sie helfen uns, damit wir schneller fertig werden.'] },
                ]
              },
              {
                id: 'sodass-re1',
                title: 'Sodass (So that / With the result that)',
                description: '"Sodass" expresses a result. The verb goes to the end.',
                type: 'reorder',
                items: [
                  { id: 'so1_1', sentence: 'It rained a lot, so that the street was wet.', scrambled: ['regnete', 'sodass', 'war', 'Es', 'viel', 'nass', 'Straße', 'die', '.'], answers: ['Es regnete viel, sodass die Straße nass war.'] },
                  { id: 'so1_2', sentence: 'He worked too much, so that he became ill.', scrambled: ['arbeitete', 'sodass', 'wurde', 'Er', 'viel', 'zu', 'krank', 'er', '.'], answers: ['Er arbeitete zu viel, sodass er krank wurde.'] },
                  { id: 'so1_3', sentence: 'The sun is shining, so that we are going out.', scrambled: ['scheint', 'sodass', 'gehen', 'Sonne', 'die', 'raus', 'wir', '.'], answers: ['Die Sonne scheint, sodass wir raus gehen.'] },
                  { id: 'so1_4', sentence: 'She spoke very quietly, so that nobody heard her.', scrambled: ['sprach', 'sodass', 'hörte', 'Sie', 'leise', 'sehr', 'niemand', 'sie', '.'], answers: ['Sie sprach sehr leise, sodass niemand sie hörte.'] },
                  { id: 'so1_5', sentence: 'We have no money, so that we cannot buy it.', scrambled: ['haben', 'sodass', 'können', 'Wir', 'Geld', 'kein', 'kaufen', 'nicht', 'es', 'wir', '.'], answers: ['Wir haben kein Geld, sodass wir es nicht kaufen können.'] },
                  { id: 'so1_6', sentence: 'The door was locked, so that he couldn\'t enter.', scrambled: ['war', 'sodass', 'konnte', 'Tür', 'die', 'abgeschlossen', 'nicht', 'reinkommen', 'er', '.'], answers: ['Die Tür war abgeschlossen, sodass er nicht reinkommen konnte.'] },
                  { id: 'so1_7', sentence: 'It was very loud, so that I couldn\'t sleep.', scrambled: ['war', 'sodass', 'konnte', 'Es', 'laut', 'sehr', 'schlafen', 'nicht', 'ich', '.'], answers: ['Es war sehr laut, sodass ich nicht schlafen konnte.'] },
                  { id: 'so1_8', sentence: 'He arrived late, so that he missed the train.', scrambled: ['kam', 'sodass', 'verpasste', 'Er', 'spät', 'an', 'Zug', 'den', 'er', '.'], answers: ['Er kam spät an, sodass er den Zug verpasste.'] },
                  { id: 'so1_9', sentence: 'The car was broken, so that we had to walk.', scrambled: ['war', 'sodass', 'mussten', 'Das', 'Auto', 'kaputt', 'gehen', 'Fuß', 'zu', 'wir', '.'], answers: ['Das Auto war kaputt, sodass wir zu Fuß gehen mussten.'] },
                  { id: 'so1_10', sentence: 'I forgot my key, so that I couldn\'t open the door.', scrambled: ['habe', 'sodass', 'konnte', 'Ich', 'meinen', 'Schlüssel', 'vergessen', 'öffnen', 'nicht', 'Tür', 'die', 'ich', '.'], answers: ['Ich habe meinen Schlüssel vergessen, sodass ich die Tür nicht öffnen konnte.'] },
                ]
              }
            ]
          },
          {
            id: 'wenn-als',
            title: 'Wenn vs. Als',
            tasks: [
              {
                id: 'wenn-pres',
                title: 'Wenn (Present Tense)',
                description: 'Use "wenn" for present/future conditions. The verb goes to the end.',
                type: 'reorder',
                items: [
                  { id: 'wp_1', sentence: 'If I have time, I will come.', scrambled: ['habe', 'komme', 'Wenn', 'ich', 'Zeit', 'ich', '.'], answers: ['Wenn ich Zeit habe, komme ich.'] },
                  { id: 'wp_2', sentence: 'If it rains, we stay at home.', scrambled: ['regnet', 'bleiben', 'Wenn', 'es', 'wir', 'Hause', 'zu', '.'], answers: ['Wenn es regnet, bleiben wir zu Hause.'] },
                  { id: 'wp_3', sentence: 'I am happy when you visit me.', scrambled: ['froh', 'wenn', 'besuchst', 'Ich', 'bin', 'du', 'mich', '.'], answers: ['Ich bin froh, wenn du mich besuchst.'] },
                  { id: 'wp_4', sentence: 'If you learn, you pass the exam.', scrambled: ['lernst', 'bestehst', 'Wenn', 'du', 'du', 'Prüfung', 'die', '.'], answers: ['Wenn du lernst, bestehst du die Prüfung.'] },
                  { id: 'wp_5', sentence: 'When the sun shines, we go for a walk.', scrambled: ['Sonne', 'scheint', 'gehen', 'Wenn', 'die', 'wir', 'spazieren', '.'], answers: ['Wenn die Sonne scheint, gehen wir spazieren.'] },
                  { id: 'wp_6', sentence: 'If he is hungry, he eats a pizza.', scrambled: ['Hunger', 'hat', 'isst', 'Wenn', 'er', 'er', 'Pizza', 'eine', '.'], answers: ['Wenn er Hunger hat, isst er eine Pizza.'] },
                  { id: 'wp_7', sentence: 'I call you when I am ready.', scrambled: ['rufe', 'wenn', 'bin', 'Ich', 'dich', 'an', 'fertig', 'ich', '.'], answers: ['Ich rufe dich an, wenn ich fertig bin.'] },
                  { id: 'wp_8', sentence: 'If we have money, we buy the house.', scrambled: ['Geld', 'haben', 'kaufen', 'Wenn', 'wir', 'wir', 'Haus', 'das', '.'], answers: ['Wenn wir Geld haben, kaufen wir das Haus.'] },
                  { id: 'wp_9', sentence: 'When she sings, everyone listens.', scrambled: ['singt', 'hören', 'Wenn', 'sie', 'alle', 'zu', '.'], answers: ['Wenn sie singt, hören alle zu.'] },
                  { id: 'wp_10', sentence: 'If they help, we are faster.', scrambled: ['helfen', 'sind', 'Wenn', 'sie', 'wir', 'schneller', '.'], answers: ['Wenn sie helfen, sind wir schneller.'] },
                ]
              },
              {
                id: 'wenn-cond',
                title: 'Wenn (Conditional - No Modals)',
                description: 'Hypothetical situations using Konjunktiv II (würde-form or hätte/wäre).',
                type: 'reorder',
                items: [
                  { id: 'wc_1', sentence: 'If I had time, I would come.', scrambled: ['hätte', 'würde', 'Wenn', 'ich', 'Zeit', 'ich', 'kommen', '.'], answers: ['Wenn ich Zeit hätte, würde ich kommen.'] },
                  { id: 'wc_2', sentence: 'If it rained, we would stay at home.', scrambled: ['regnete', 'würden', 'Wenn', 'es', 'wir', 'Hause', 'zu', 'bleiben', '.'], answers: ['Wenn es regnete, würden wir zu Hause bleiben.'] },
                  { id: 'wc_3', sentence: 'I would be happy if you visited me.', scrambled: ['froh', 'wenn', 'besuchtest', 'Ich', 'wäre', 'du', 'mich', '.'], answers: ['Ich wäre froh, wenn du mich besuchtest.'] },
                  { id: 'wc_4', sentence: 'If you learned, you would pass the exam.', scrambled: ['lerntest', 'würdest', 'Wenn', 'du', 'du', 'Prüfung', 'die', 'bestehen', '.'], answers: ['Wenn du lerntest, würdest du die Prüfung bestehen.'] },
                  { id: 'wc_5', sentence: 'If the sun shone, we would go for a walk.', scrambled: ['Sonne', 'schiene', 'würden', 'Wenn', 'die', 'wir', 'spazieren', 'gehen', '.'], answers: ['Wenn die Sonne schiene, würden wir spazieren gehen.'] },
                  { id: 'wc_6', sentence: 'If he were hungry, he would eat a pizza.', scrambled: ['Hunger', 'hätte', 'würde', 'Wenn', 'er', 'er', 'Pizza', 'eine', 'essen', '.'], answers: ['Wenn er Hunger hätte, würde er eine Pizza essen.'] },
                  { id: 'wc_7', sentence: 'I would call you if I were ready.', scrambled: ['anrufen', 'wenn', 'wäre', 'Ich', 'würde', 'dich', 'fertig', 'ich', '.'], answers: ['Ich würde dich anrufen, wenn ich fertig wäre.'] },
                  { id: 'wc_8', sentence: 'If we had money, we would buy the house.', scrambled: ['Geld', 'hätten', 'würden', 'Wenn', 'wir', 'wir', 'Haus', 'das', 'kaufen', '.'], answers: ['Wenn wir Geld hätten, würden wir das Haus kaufen.'] },
                  { id: 'wc_9', sentence: 'If she sang, everyone would listen.', scrambled: ['sänge', 'würden', 'Wenn', 'sie', 'alle', 'zuhören', '.'], answers: ['Wenn sie sänge, würden alle zuhören.'] },
                  { id: 'wc_10', sentence: 'If they helped, we would be faster.', scrambled: ['hülfen', 'wären', 'Wenn', 'sie', 'wir', 'schneller', '.'], answers: ['Wenn sie hülfen, wären wir schneller.'] },
                ]
              },
              {
                id: 'wenn-cond-modal',
                title: 'Wenn (Conditional with Modals)',
                description: 'Hypothetical situations involving modal verbs (könnte, müsste, wollte, etc.).',
                type: 'reorder',
                items: [
                  { id: 'wcm_1', sentence: 'If I could speak German, I would work in Berlin.', scrambled: ['könnte', 'würde', 'Wenn', 'ich', 'Deutsch', 'sprechen', 'ich', 'Berlin', 'in', 'arbeiten', '.'], answers: ['Wenn ich Deutsch sprechen könnte, würde ich in Berlin arbeiten.'] },
                  { id: 'wcm_2', sentence: 'If he had to work, he couldn\'t come.', scrambled: ['müsste', 'könnte', 'Wenn', 'er', 'arbeiten', 'er', 'nicht', 'kommen', '.'], answers: ['Wenn er arbeiten müsste, könnte er nicht kommen.'] },
                  { id: 'wcm_3', sentence: 'If we wanted to go, we would need a car.', scrambled: ['wollten', 'würden', 'Wenn', 'wir', 'gehen', 'wir', 'Auto', 'ein', 'brauchen', '.'], answers: ['Wenn wir gehen wollten, würden wir ein Auto brauchen.'] },
                  { id: 'wcm_4', sentence: 'If she should help, she would do it.', scrambled: ['sollte', 'würde', 'Wenn', 'sie', 'helfen', 'sie', 'es', 'tun', '.'], answers: ['Wenn sie helfen sollte, würde sie es tun.'] },
                  { id: 'wcm_5', sentence: 'If you might stay, I would be glad.', scrambled: ['dürftest', 'wäre', 'Wenn', 'du', 'bleiben', 'ich', 'froh', '.'], answers: ['Wenn du bleiben dürftest, wäre ich froh.'] },
                  { id: 'wcm_6', sentence: 'If I could see you, I would be happy.', scrambled: ['könnte', 'wäre', 'Wenn', 'ich', 'dich', 'sehen', 'ich', 'glücklich', '.'], answers: ['Wenn ich dich sehen könnte, wäre ich glücklich.'] },
                  { id: 'wcm_7', sentence: 'If he had to stay, he would be sad.', scrambled: ['müsste', 'wäre', 'Wenn', 'er', 'bleiben', 'er', 'traurig', '.'], answers: ['Wenn er bleiben müsste, wäre er traurig.'] },
                  { id: 'wcm_8', sentence: 'If we wanted to win, we would have to train.', scrambled: ['wollten', 'müssten', 'Wenn', 'wir', 'gewinnen', 'wir', 'trainieren', '.'], answers: ['Wenn wir gewinnen wollten, müssten wir trainieren.'] },
                  { id: 'wcm_9', sentence: 'If she could sing, she would be famous.', scrambled: ['könnte', 'wäre', 'Wenn', 'sie', 'singen', 'sie', 'berühmt', '.'], answers: ['Wenn sie singen könnte, wäre sie berühmt.'] },
                  { id: 'wcm_10', sentence: 'If they should arrive, they would call.', scrambled: ['sollten', 'würden', 'Wenn', 'sie', 'ankommen', 'sie', 'anrufen', '.'], answers: ['Wenn sie ankommen sollten, würden sie anrufen.'] },
                ]
              },
              {
                id: 'als-past',
                title: 'Als (Past Tense)',
                description: '"Als" is used for a single, completed event in the past.',
                type: 'reorder',
                items: [
                  { id: 'al1_1', sentence: 'When I was a child, I lived in Berlin.', scrambled: ['war', 'wohnte', 'Als', 'ich', 'Kind', 'ein', 'ich', 'Berlin', 'in', '.'], answers: ['Als ich ein Kind war, wohnte ich in Berlin.'] },
                  { id: 'al1_2', sentence: 'I saw him when I was in town.', scrambled: ['sah', 'als', 'war', 'Ich', 'ihn', 'Stadt', 'der', 'in', 'ich', '.'], answers: ['Ich sah ihn, als ich in der Stadt war.'] },
                  { id: 'al1_3', sentence: 'When the sun rose, we started.', scrambled: ['aufging', 'fingen', 'Als', 'Sonne', 'die', 'wir', 'an', '.'], answers: ['Als die Sonne aufging, fingen wir an.'] },
                  { id: 'al1_4', sentence: 'When he arrived, it was already late.', scrambled: ['ankam', 'war', 'Als', 'er', 'spät', 'schon', 'es', '.'], answers: ['Als er ankam, war es schon spät.'] },
                  { id: 'al1_5', sentence: 'When I saw the accident, I called the police.', scrambled: ['sah', 'rief', 'Als', 'ich', 'Unfall', 'den', 'ich', 'Polizei', 'die', 'an', '.'], answers: ['Als ich den Unfall sah, rief ich die Polizei an.'] },
                  { id: 'al1_6', sentence: 'When we were in Paris, we saw the Eiffel Tower.', scrambled: ['waren', 'sahen', 'Als', 'wir', 'Paris', 'in', 'wir', 'Eiffelturm', 'den', '.'], answers: ['Als wir in Paris waren, sahen wir den Eiffelturm.'] },
                  { id: 'al1_7', sentence: 'When she was young, she played the piano.', scrambled: ['war', 'spielte', 'Als', 'sie', 'jung', 'sie', 'Klavier', '.'], answers: ['Als sie jung war, spielte sie Klavier.'] },
                  { id: 'al1_8', sentence: 'When the war ended, they went home.', scrambled: ['endete', 'gingen', 'Als', 'Krieg', 'der', 'sie', 'Hause', 'nach', '.'], answers: ['Als der Krieg endete, gingen sie nach Hause.'] },
                  { id: 'al1_9', sentence: 'When I opened the door, the cat ran out.', scrambled: ['öffnete', 'lief', 'Als', 'ich', 'Tür', 'die', 'Katze', 'die', 'raus', '.'], answers: ['Als ich die Tür öffnete, lief die Katze raus.'] },
                  { id: 'al1_10', sentence: 'When he won the lottery, he bought a house.', scrambled: ['gewann', 'kaufte', 'Als', 'er', 'Lotto', 'im', 'er', 'Haus', 'ein', '.'], answers: ['Als er im Lotto gewann, kaufte er ein Haus.'] },
                ]
              },
              {
                id: 'wenn-als-mixed',
                title: 'Wenn vs. Als (Mixed)',
                description: 'Decide between "wenn" (repeated/present/future) and "als" (single past event).',
                type: 'reorder',
                items: [
                  { id: 'wam_1', sentence: 'When I was small, I liked ice cream.', scrambled: ['war', 'mochte', 'Als', 'ich', 'klein', 'ich', 'Eis', '.'], answers: ['Als ich klein war, mochte ich Eis.'] },
                  { id: 'wam_2', sentence: 'When I am big, I want to be a pilot.', scrambled: ['bin', 'will', 'Wenn', 'ich', 'groß', 'ich', 'Pilot', 'werden', '.'], answers: ['Wenn ich groß bin, will ich Pilot werden.'] },
                  { id: 'wam_3', sentence: 'Whenever he comes, he brings chocolate.', scrambled: ['kommt', 'bringt', 'wenn', 'Er', 'Schokolade', 'mit', 'er', '.'], answers: ['Wenn er kommt, bringt er Schokolade mit.'] },
                  { id: 'wam_4', sentence: 'When he came yesterday, he was tired.', scrambled: ['kam', 'war', 'als', 'Gestern', 'er', 'müde', 'er', '.'], answers: ['Gestern als er kam, war er müde.'] },
                  { id: 'wam_5', sentence: 'If it is warm, we go swimming.', scrambled: ['ist', 'gehen', 'Wenn', 'es', 'warm', 'wir', 'schwimmen', '.'], answers: ['Wenn es warm ist, gehen wir schwimmen.'] },
                  { id: 'wam_6', sentence: 'When it was warm last year, we went swimming every day.', scrambled: ['war', 'gingen', 'als', 'Letztes', 'Jahr', 'es', 'warm', 'wir', 'jeden', 'Tag', 'schwimmen', '.'], answers: ['Letztes Jahr als es warm war, gingen wir jeden Tag schwimmen.'] },
                  { id: 'wam_7', sentence: 'When I have time, I read a book.', scrambled: ['habe', 'lese', 'wenn', 'Ich', 'Zeit', 'ich', 'Buch', 'ein', '.'], answers: ['Ich lese ein Buch, wenn ich Zeit habe.'] },
                  { id: 'wam_8', sentence: 'When I had time yesterday, I read a book.', scrambled: ['hatte', 'las', 'als', 'Gestern', 'ich', 'Zeit', 'ich', 'Buch', 'ein', '.'], answers: ['Gestern als ich Zeit hatte, las ich ein Buch.'] },
                  { id: 'wam_9', sentence: 'When the sun shines, I am happy.', scrambled: ['Sonne', 'scheint', 'bin', 'Wenn', 'die', 'ich', 'glücklich', '.'], answers: ['Wenn die Sonne scheint, bin ich glücklich.'] },
                  { id: 'wam_10', sentence: 'When the sun shone this morning, I was happy.', scrambled: ['Sonne', 'schien', 'war', 'als', 'Heute', 'Morgen', 'die', 'ich', 'glücklich', '.'], answers: ['Heute Morgen als die Sonne schien, war ich glücklich.'] },
                ]
              }
            ]
          },
          {
            id: 'nachdem-bevor',
            title: 'Nachdem & Bevor (Pluperfect)',
            tasks: [
              {
                id: 'nachdem-re1',
                title: 'Nachdem (After)',
                description: '"Nachdem" often requires the Pluperfect if the main clause is in the Past. The verb goes to the end.',
                type: 'reorder',
                items: [
                  { id: 'na1_1', sentence: 'After he had eaten, he went to bed.', scrambled: ['hatte', 'gegessen', 'ging', 'Nachdem', 'er', 'er', 'Bett', 'ins', '.'], answers: ['Nachdem er gegessen hatte, ging er ins Bett.'] },
                  { id: 'na1_2', sentence: 'After we had seen the film, we discussed it.', scrambled: ['hatten', 'gesehen', 'diskutierten', 'Nachdem', 'wir', 'Film', 'den', 'wir', 'darüber', '.'], answers: ['Nachdem wir den Film gesehen hatten, diskutierten wir darüber.'] },
                  { id: 'na1_3', sentence: 'After she had finished the work, she went home.', scrambled: ['hatte', 'beendet', 'ging', 'Nachdem', 'sie', 'Arbeit', 'die', 'sie', 'Hause', 'nach', '.'], answers: ['Nachdem sie die Arbeit beendet hatte, ging sie nach Hause.'] },
                  { id: 'na1_4', sentence: 'After it had rained, the air was fresh.', scrambled: ['hatte', 'geregnet', 'war', 'Nachdem', 'es', 'Luft', 'die', 'frisch', '.'], answers: ['Nachdem es geregnet hatte, war die Luft frisch.'] },
                  { id: 'na1_5', sentence: 'After they had arrived, they called us.', scrambled: ['waren', 'angekommen', 'riefen', 'Nachdem', 'sie', 'sie', 'uns', 'an', '.'], answers: ['Nachdem sie angekommen waren, riefen sie uns an.'] },
                  { id: 'na1_6', sentence: 'After I had done my homework, I was allowed to play.', scrambled: ['hatte', 'gemacht', 'durfte', 'Nachdem', 'ich', 'Hausaufgaben', 'meine', 'ich', 'spielen', '.'], answers: ['Nachdem ich meine Hausaufgaben gemacht hatte, durfte ich spielen.'] },
                  { id: 'na1_7', sentence: 'After he had washed the car, it shined again.', scrambled: ['hatte', 'gewaschen', 'glänzte', 'Nachdem', 'er', 'Auto', 'das', 'es', 'wieder', '.'], answers: ['Nachdem er das Auto gewaschen hatte, glänzte es wieder.'] },
                  { id: 'na1_8', sentence: 'After we had bought the tickets, we got on the train.', scrambled: ['hatten', 'gekauft', 'stiegen', 'Nachdem', 'wir', 'Fahrkarten', 'die', 'wir', 'Zug', 'den', 'in', '.'], answers: ['Nachdem wir die Fahrkarten gekauft hatten, stiegen wir in den Zug.'] },
                  { id: 'na1_9', sentence: 'After she had read the message, she started to cry.', scrambled: ['hatte', 'gelesen', 'fing', 'Nachdem', 'sie', 'Nachricht', 'die', 'sie', 'an', 'weinen', 'zu', '.'], answers: ['Nachdem sie die Nachricht gelesen hatte, fing sie an zu weinen.'] },
                  { id: 'na1_10', sentence: 'After the game had ended, the spectators went home.', scrambled: ['hatte', 'geendet', 'gingen', 'Nachdem', 'Spiel', 'das', 'Zuschauer', 'die', 'Hause', 'nach', '.'], answers: ['Nachdem das Spiel geendet hatte, gingen die Zuschauer nach Hause.'] },
                ]
              },
              {
                id: 'bevor-re1',
                title: 'Bevor (Before)',
                description: '"Bevor" introduces a clause that happens after the main clause. The verb goes to the end.',
                type: 'reorder',
                items: [
                  { id: 'be1_1', sentence: 'Before he went to bed, he had eaten.', scrambled: ['ging', 'hatte', 'Bevor', 'er', 'Bett', 'ins', 'er', 'gegessen', '.'], answers: ['Bevor er ins Bett ging, hatte er gegessen.'] },
                  { id: 'be1_2', sentence: 'Before we discussed the film, we had seen it.', scrambled: ['diskutierten', 'hatten', 'Bevor', 'wir', 'Film', 'den', 'wir', 'ihn', 'gesehen', '.'], answers: ['Bevor wir den Film diskutierten, hatten wir ihn gesehen.'] },
                  { id: 'be1_3', sentence: 'Before she went home, she had finished the work.', scrambled: ['ging', 'hatte', 'Bevor', 'sie', 'Hause', 'nach', 'sie', 'Arbeit', 'die', 'beendet', '.'], answers: ['Bevor sie nach Hause ging, hatte sie die Arbeit beendet.'] },
                  { id: 'be1_4', sentence: 'Before the air was fresh, it had rained.', scrambled: ['war', 'hatte', 'Bevor', 'Luft', 'die', 'frisch', 'es', 'geregnet', '.'], answers: ['Bevor die Luft frisch war, hatte es geregnet.'] },
                  { id: 'be1_5', sentence: 'Before they called us, they had arrived.', scrambled: ['riefen', 'waren', 'Bevor', 'sie', 'uns', 'an', 'sie', 'angekommen', '.'], answers: ['Bevor sie uns anriefen, waren sie angekommen.'] },
                  { id: 'be1_6', sentence: 'Before I was allowed to play, I had done my homework.', scrambled: ['durfte', 'hatte', 'Bevor', 'ich', 'spielen', 'ich', 'Hausaufgaben', 'meine', 'gemacht', '.'], answers: ['Bevor ich spielen durfte, hatte ich meine Hausaufgaben gemacht.'] },
                  { id: 'be1_7', sentence: 'Before the car shined again, he had washed it.', scrambled: ['glänzte', 'hatte', 'Bevor', 'das', 'Auto', 'wieder', 'er', 'es', 'gewaschen', '.'], answers: ['Bevor das Auto wieder glänzte, hatte er es gewaschen.'] },
                  { id: 'be1_8', sentence: 'Before we got on the train, we had bought the tickets.', scrambled: ['stiegen', 'hatten', 'Bevor', 'wir', 'Zug', 'den', 'in', 'wir', 'Fahrkarten', 'die', 'gekauft', '.'], answers: ['Bevor wir in den Zug stiegen, hatten wir die Fahrkarten gekauft.'] },
                  { id: 'be1_9', sentence: 'Before she started to cry, she had read the message.', scrambled: ['fing', 'hatte', 'Bevor', 'sie', 'an', 'weinen', 'zu', 'sie', 'Nachricht', 'die', 'gelesen', '.'], answers: ['Bevor sie anfing zu weinen, hatte sie die Nachricht gelesen.'] },
                  { id: 'be1_10', sentence: 'Before the spectators went home, the game had ended.', scrambled: ['gingen', 'hatte', 'Bevor', 'die', 'Zuschauer', 'Hause', 'nach', 'Spiel', 'das', 'geendet', '.'], answers: ['Bevor die Zuschauer nach Hause gingen, hatte das Spiel geendet.'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'zu-infinitives',
        title: 'Zu-Infinitives',
        subunits: [
          {
            id: 'um-zu',
            title: 'Um ... zu',
            tasks: [
              {
                id: 'um1',
                title: 'Purpose Clauses (1)',
                description: 'Use "um...zu" to express purpose. The "zu" comes before the infinitive at the end.',
                type: 'reorder',
                items: [
                  { id: 'um1_1', sentence: 'I am going to the kitchen to cook.', scrambled: ['Ich', 'gehe', 'in', 'die', 'Küche', ',', 'um', 'zu', 'kochen', '.'], answers: ['Ich gehe in die Küche, um zu kochen.'] },
                  { id: 'um1_2', sentence: 'He learns German to work in Berlin.', scrambled: ['Er', 'lernt', 'Deutsch', ',', 'um', 'in', 'Berlin', 'zu', 'arbeiten', '.'], answers: ['Er lernt Deutsch, um in Berlin zu arbeiten.'] },
                  { id: 'um1_3', sentence: 'We save money to buy a car.', scrambled: ['Wir', 'sparen', 'Geld', ',', 'um', 'ein', 'Auto', 'zu', 'kaufen', '.'], answers: ['Wir sparen Geld, um ein Auto zu kaufen.'] },
                  { id: 'um1_4', sentence: 'She goes to the gym to stay fit.', scrambled: ['Sie', 'geht', 'ins', 'Fitnessstudio', ',', 'um', 'fit', 'zu', 'bleiben', '.'], answers: ['Sie geht ins Fitnessstudio, um fit zu bleiben.'] },
                  { id: 'um1_5', sentence: 'They study hard to pass the exam.', scrambled: ['Sie', 'lernen', 'viel', ',', 'um', 'die', 'Prüfung', 'zu', 'bestehen', '.'], answers: ['Sie lernen viel, um die Prüfung zu bestehen.'] },
                  { id: 'um1_6', sentence: 'I need a key to open the door.', scrambled: ['Ich', 'brauche', 'einen', 'Schlüssel', ',', 'um', 'die', 'Tür', 'zu', 'öffnen', '.'], answers: ['Ich brauche einen Schlüssel, um die Tür zu öffnen.'] },
                  { id: 'um1_7', sentence: 'He calls his mother to congratulate her.', scrambled: ['Er', 'ruft', 'seine', 'Mutter', 'an', ',', 'um', 'ihr', 'zu', 'gratulieren', '.'], answers: ['Er ruft seine Mutter an, um ihr zu gratulieren.'] },
                  { id: 'um1_8', sentence: 'We go to the supermarket to buy bread.', scrambled: ['Wir', 'gehen', 'in', 'den', 'Supermarkt', ',', 'um', 'Brot', 'zu', 'kaufen', '.'], answers: ['Wir gehen in den Supermarkt, um Brot zu kaufen.'] },
                  { id: 'um1_9', sentence: 'She uses a dictionary to translate the text.', scrambled: ['Sie', 'benutzt', 'ein', 'Wörterbuch', ',', 'um', 'den', 'Text', 'zu', 'übersetzen', '.'], answers: ['Sie benutzt ein Wörterbuch, um den Text zu übersetzen.'] },
                  { id: 'um1_10', sentence: 'I am going to bed to sleep.', scrambled: ['Ich', 'gehe', 'ins', 'Bett', ',', 'um', 'zu', 'schlafen', '.'], answers: ['Ich gehe ins Bett, um zu schlafen.'] },
                ]
              },
              {
                id: 'um2',
                title: 'Purpose Clauses (2)',
                description: 'Practice sentences starting with "um...zu".',
                type: 'reorder',
                items: [
                  { id: 'um2_1', sentence: 'To let fresh air in, I open the window.', scrambled: ['Um', 'frische', 'Luft', 'reinzulassen', ',', 'mache', 'ich', 'das', 'Fenster', 'auf', '.'], answers: ['Um frische Luft reinzulassen, mache ich das Fenster auf.'] },
                  { id: 'um2_2', sentence: 'To catch the train, he gets up early.', scrambled: ['Um', 'den', 'Zug', 'zu', 'erreichen', ',', 'steht', 'er', 'früh', 'auf', '.'], answers: ['Um den Zug zu erreichen, steht er früh auf.'] },
                  { id: 'um2_3', sentence: 'To watch the news, we turn on the TV.', scrambled: ['Um', 'die', 'Nachrichten', 'zu', 'sehen', ',', 'schalten', 'wir', 'den', 'Fernseher', 'an', '.'], answers: ['Um die Nachrichten zu sehen, schalten wir den Fernseher an.'] },
                  { id: 'um2_4', sentence: 'To not freeze, she puts on a coat.', scrambled: ['Um', 'nicht', 'zu', 'frieren', ',', 'zieht', 'sie', 'einen', 'Mantel', 'an', '.'], answers: ['Um nicht zu frieren, zieht sie einen Mantel an.'] },
                  { id: 'um2_5', sentence: 'To celebrate together, they invite friends.', scrambled: ['Um', 'zusammen', 'zu', 'feiern', ',', 'laden', 'sie', 'Freunde', 'ein', '.'], answers: ['Um zusammen zu feiern, laden sie Freunde ein.'] },
                  { id: 'um2_6', sentence: 'To not get wet, I take an umbrella.', scrambled: ['Um', 'nicht', 'nass', 'zu', 'werden', ',', 'nehme', 'ich', 'einen', 'Regenschirm', 'mit', '.'], answers: ['Um nicht nass zu werden, nehme ich einen Regenschirm mit.'] },
                  { id: 'um2_7', sentence: 'To take a photo, he stops.', scrambled: ['Um', 'ein', 'Foto', 'zu', 'machen', ',', 'hält', 'er', 'an', '.'], answers: ['Um ein Foto zu machen, hält er an.'] },
                  { id: 'um2_8', sentence: 'To eat something, we go out.', scrambled: ['Um', 'etwas', 'zu', 'essen', ',', 'gehen', 'wir', 'aus', '.'], answers: ['Um etwas zu essen, gehen wir aus.'] },
                  { id: 'um2_9', sentence: 'To answer the question, she calls back.', scrambled: ['Um', 'die', 'Frage', 'zu', 'beantworten', ',', 'ruft', 'sie', 'zurück', '.'], answers: ['Um die Frage zu beantworten, ruft sie zurück.'] },
                  { id: 'um2_10', sentence: 'To relax, I listen to music.', scrambled: ['Um', 'mich', 'zu', 'entspannen', ',', 'höre', 'ich', 'Musik', '.'], answers: ['Um mich zu entspannen, höre ich Musik.'] },
                ]
              },
              {
                id: 'um3',
                title: 'Purpose Clauses (3)',
                description: 'Final "um...zu" challenge.',
                type: 'fill-in',
                items: [
                  { id: 'um3_1', sentence: 'Ich lerne fleißig, um gute Noten [blank]. (bekommen)', answers: ['zu bekommen'] },
                  { id: 'um3_2', sentence: 'Er geht in den Park, um [blank]. (spazieren gehen)', answers: ['spazieren zu gehen'] },
                  { id: 'um3_3', sentence: 'Wir brauchen Eier, um einen Kuchen [blank]. (backen)', answers: ['zu backen'] },
                  { id: 'um3_4', sentence: 'Sie fährt nach München, um ihre Tante [blank]. (besuchen)', answers: ['zu besuchen'] },
                  { id: 'um3_5', sentence: 'Ich brauche eine Brille, um besser [blank]. (sehen)', answers: ['zu sehen'] },
                  { id: 'um3_6', sentence: 'Er spart, um sich ein neues Handy [blank]. (kaufen)', answers: ['zu kaufen'] },
                  { id: 'um3_7', sentence: 'Wir machen Sport, um gesund [blank]. (bleiben)', answers: ['zu bleiben'] },
                  { id: 'um3_8', sentence: 'Sie geht zur Post, um ein Paket [blank]. (abholen)', answers: ['abzuholen'] },
                  { id: 'um3_9', sentence: 'Ich rufe dich an, um dir etwas [blank]. (erzählen)', answers: ['zu erzählen'] },
                  { id: 'um3_10', sentence: 'Er geht in die Bibliothek, um in Ruhe [blank]. (arbeiten)', answers: ['zu arbeiten'] },
                ]
              },
              {
                id: 'um4',
                title: 'Starting with Um...zu',
                description: 'Practice sentences that start with the purpose clause.',
                type: 'reorder',
                items: [
                  { id: 'um4_1', sentence: 'To cook, I go to the kitchen.', scrambled: ['Um', 'zu', 'kochen', ',', 'gehe', 'ich', 'in', 'die', 'Küche', '.'], answers: ['Um zu kochen, gehe ich in die Küche.'] },
                  { id: 'um4_2', sentence: 'To work in Berlin, he learns German.', scrambled: ['Um', 'in', 'Berlin', 'zu', 'arbeiten', ',', 'lernt', 'er', 'Deutsch', '.'], answers: ['Um in Berlin zu arbeiten, lernt er Deutsch.'] },
                  { id: 'um4_3', sentence: 'To buy a car, we save money.', scrambled: ['Um', 'ein', 'Auto', 'zu', 'kaufen', ',', 'sparen', 'wir', 'Geld', '.'], answers: ['Um ein Auto zu kaufen, sparen wir Geld.'] },
                  { id: 'um4_4', sentence: 'To stay fit, she goes to the gym.', scrambled: ['Um', 'fit', 'zu', 'bleiben', ',', 'geht', 'sie', 'ins', 'Fitnessstudio', '.'], answers: ['Um fit zu bleiben, geht sie ins Fitnessstudio.'] },
                  { id: 'um4_5', sentence: 'To pass the exam, they study hard.', scrambled: ['Um', 'die', 'Prüfung', 'zu', 'bestehen', ',', 'lernen', 'sie', 'viel', '.'], answers: ['Um die Prüfung zu bestehen, lernen sie viel.'] },
                  { id: 'um4_6', sentence: 'To open the door, I need a key.', scrambled: ['Um', 'die', 'Tür', 'zu', 'öffnen', ',', 'brauche', 'ich', 'einen', 'Schlüssel', '.'], answers: ['Um die Tür zu öffnen, brauche ich einen Schlüssel.'] },
                  { id: 'um4_7', sentence: 'To congratulate her, he calls his mother.', scrambled: ['Um', 'ihr', 'zu', 'gratulieren', ',', 'ruft', 'er', 'seine', 'Mutter', 'an', '.'], answers: ['Um ihr zu gratulieren, ruft er seine Mutter an.'] },
                  { id: 'um4_8', sentence: 'To buy bread, we go to the supermarket.', scrambled: ['Um', 'Brot', 'zu', 'kaufen', ',', 'gehen', 'wir', 'in', 'den', 'Supermarkt', '.'], answers: ['Um Brot zu kaufen, gehen wir in den Supermarkt.'] },
                  { id: 'um4_9', sentence: 'To translate the text, she uses a dictionary.', scrambled: ['Um', 'den', 'Text', 'zu', 'übersetzen', ',', 'benutzt', 'sie', 'ein', 'Wörterbuch', '.'], answers: ['Um den Text zu übersetzen, benutzt sie ein Wörterbuch.'] },
                  { id: 'um4_10', sentence: 'To sleep, I am going to bed.', scrambled: ['Um', 'zu', 'schlafen', ',', 'gehe', 'ich', 'ins', 'Bett', '.'], answers: ['Um zu schlafen, gehe ich ins Bett.'] },
                ]
              }
            ]
          },
          {
            id: 'ohne-anstatt',
            title: 'Ohne / Anstatt zu',
            tasks: [
              {
                id: 'ohne1',
                title: 'Ohne ... zu',
                description: '"Ohne...zu" means "without ...ing".',
                type: 'reorder',
                items: [
                  { id: 'oh1_1', sentence: 'He left without saying goodbye.', scrambled: ['Er', 'ging', ',', 'ohne', 'sich', 'zu', 'verabschieden', '.'], answers: ['Er ging, ohne sich zu verabschieden.'] },
                  { id: 'oh1_2', sentence: 'She entered the room without knocking.', scrambled: ['Sie', 'betrat', 'das', 'Zimmer', ',', 'ohne', 'anzuklopfen', '.'], answers: ['Sie betrat das Zimmer, ohne anzuklopfen.'] },
                  { id: 'oh1_3', sentence: 'We ate without being hungry.', scrambled: ['Wir', 'aßen', ',', 'ohne', 'Hunger', 'zu', 'haben', '.'], answers: ['Wir aßen, ohne Hunger zu haben.'] },
                  { id: 'oh1_4', sentence: 'He works without taking a break.', scrambled: ['Er', 'arbeitet', ',', 'ohne', 'eine', 'Pause', 'zu', 'machen', '.'], answers: ['Er arbeitet, ohne eine Pause zu machen.'] },
                  { id: 'oh1_5', sentence: 'She talks without thinking.', scrambled: ['Sie', 'redet', ',', 'ohne', 'nachzudenken', '.'], answers: ['Sie redet, ohne nachzudenken.'] },
                  { id: 'oh1_6', sentence: 'I live without having a TV.', scrambled: ['Ich', 'lebe', ',', 'ohne', 'einen', 'Fernseher', 'zu', 'haben', '.'], answers: ['Ich lebe, ohne einen Fernseher zu haben.'] },
                  { id: 'oh1_7', sentence: 'They help without being asked.', scrambled: ['Sie', 'helfen', ',', 'ohne', 'gefragt', 'zu', 'werden', '.'], answers: ['Sie helfen, ohne gefragt zu werden.'] },
                  { id: 'oh1_8', sentence: 'He drives without having a license.', scrambled: ['Er', 'fährt', ',', 'ohne', 'einen', 'Führerschein', 'zu', 'haben', '.'], answers: ['Er fährt, ohne einen Führerschein zu haben.'] },
                  { id: 'oh1_9', sentence: 'She sleeps without dreaming.', scrambled: ['Sie', 'schläft', ',', 'ohne', 'zu', 'träumen', '.'], answers: ['Sie schläft, ohne zu träumen.'] },
                  { id: 'oh1_10', sentence: 'We travel without spending much money.', scrambled: ['Wir', 'reisen', ',', 'ohne', 'viel', 'Geld', 'auszugeben', '.'], answers: ['Wir reisen, ohne viel Geld auszugeben.'] },
                ]
              },
              {
                id: 'anstatt1',
                title: 'Anstatt ... zu',
                description: '"Anstatt...zu" means "instead of ...ing".',
                type: 'reorder',
                items: [
                  { id: 'an1_1', sentence: 'Instead of working, he sleeps.', scrambled: ['Anstatt', 'zu', 'arbeiten', ',', 'schläft', 'er', '.'], answers: ['Anstatt zu arbeiten, schläft er.'] },
                  { id: 'an1_2', sentence: 'Instead of helping, she complains.', scrambled: ['Anstatt', 'zu', 'helfen', ',', 'beschwert', 'sie', 'sich', '.'], answers: ['Anstatt zu helfen, beschwert sie sich.'] },
                  { id: 'an1_3', sentence: 'Instead of walking, we take the bus.', scrambled: ['Anstatt', 'zu', 'laufen', ',', 'nehmen', 'wir', 'den', 'Bus', '.'], answers: ['Anstatt zu laufen, nehmen wir den Bus.'] },
                  { id: 'an1_4', sentence: 'Instead of studying, they play games.', scrambled: ['Anstatt', 'zu', 'lernen', ',', 'spielen', 'sie', 'Spiele', '.'], answers: ['Anstatt zu lernen, spielen sie Spiele.'] },
                  { id: 'an1_5', sentence: 'Instead of cooking, I order pizza.', scrambled: ['Anstatt', 'zu', 'kochen', ',', 'bestelle', 'ich', 'Pizza', '.'], answers: ['Anstatt zu kochen, bestelle ich Pizza.'] },
                  { id: 'an1_6', sentence: 'Instead of reading, he watches TV.', scrambled: ['Anstatt', 'zu', 'lesen', ',', 'sieht', 'er', 'fern', '.'], answers: ['Anstatt zu lesen, sieht er fern.'] },
                  { id: 'an1_7', sentence: 'Instead of saving, she spends everything.', scrambled: ['Anstatt', 'zu', 'sparen', ',', 'gibt', 'sie', 'alles', 'aus', '.'], answers: ['Anstatt zu sparen, gibt sie alles aus.'] },
                  { id: 'an1_8', sentence: 'Instead of waiting, we go now.', scrambled: ['Anstatt', 'zu', 'warten', ',', 'gehen', 'wir', 'jetzt', '.'], answers: ['Anstatt zu warten, gehen wir jetzt.'] },
                  { id: 'an1_9', sentence: 'Instead of asking, he just does it.', scrambled: ['Anstatt', 'zu', 'fragen', ',', 'macht', 'er', 'es', 'einfach', '.'], answers: ['Anstatt zu fragen, macht er es einfach.'] },
                  { id: 'an1_10', sentence: 'Instead of staying home, she goes out.', scrambled: ['Anstatt', 'zu', 'Hause', 'zu', 'bleiben', ',', 'geht', 'sie', 'aus', '.'], answers: ['Anstatt zu Hause zu bleiben, geht sie aus.'] },
                ]
              },
              {
                id: 'oa-mix',
                title: 'Ohne / Anstatt Mixed',
                description: 'Combine the sentences using ohne... zu or anstatt... zu.',
                type: 'transform',
                items: [
                  { id: 'oam_1', prefix: 'Er geht weg. Er sagt nicht Tschüss.', sentence: '[blank]', answers: ['Er geht weg, ohne Tschüss zu sagen.'] },
                  { id: 'oam_2', prefix: 'Sie bleibt zu Hause. Sie geht nicht ins Kino.', sentence: '[blank]', answers: ['Anstatt ins Kino zu gehen, bleibt sie zu Hause.'] },
                  { id: 'oam_3', prefix: 'Er isst einen Apfel. Er wäscht ihn nicht.', sentence: '[blank]', answers: ['Er isst einen Apfel, ohne ihn zu waschen.'] },
                  { id: 'oam_4', prefix: 'Wir lernen. Wir sehen nicht fern.', sentence: '[blank]', answers: ['Anstatt fernzusehen, lernen wir.'] },
                  { id: 'oam_5', prefix: 'Er fährt mit dem Auto. Er nimmt nicht den Bus.', sentence: '[blank]', answers: ['Anstatt den Bus zu nehmen, fährt er mit dem Auto.'] },
                  { id: 'oam_6', prefix: 'Sie schläft. Sie macht ihre Hausaufgaben nicht.', sentence: '[blank]', answers: ['Anstatt ihre Hausaufgaben zu machen, schläft sie.'] },
                  { id: 'oam_7', prefix: 'Er kauft ein neues Handy. Er repariert das alte nicht.', sentence: '[blank]', answers: ['Anstatt das alte zu reparieren, kauft er ein neues Handy.'] },
                  { id: 'oam_8', prefix: 'Sie geht spazieren. Sie räumt ihr Zimmer nicht auf.', sentence: '[blank]', answers: ['Anstatt ihr Zimmer aufzuräumen, geht sie spazieren.'] },
                  { id: 'oam_9', prefix: 'Er trinkt Wasser. Er trinkt keine Cola.', sentence: '[blank]', answers: ['Anstatt Cola zu trinken, trinkt er Wasser.'] },
                  { id: 'oam_10', prefix: 'Sie lacht. Sie weint nicht.', sentence: '[blank]', answers: ['Anstatt zu weinen, lacht sie.'] },
                ]
              }
            ]
          },
          {
            id: 'es-adj-zu',
            title: 'Es + Adjective + zu',
            tasks: [
              {
                id: 'esadj1',
                title: 'It is ... to ...',
                description: 'Sentences starting with "Es ist...".',
                type: 'reorder',
                items: [
                  { id: 'ea1_1', sentence: 'It is important to learn German.', scrambled: ['Es', 'ist', 'wichtig', ',', 'Deutsch', 'zu', 'lernen', '.'], answers: ['Es ist wichtig, Deutsch zu lernen.'] },
                  { id: 'ea1_2', sentence: 'It is healthy to eat fruit.', scrambled: ['Es', 'ist', 'gesund', ',', 'Obst', 'zu', 'essen', '.'], answers: ['Es ist gesund, Obst zu essen.'] },
                  { id: 'ea1_3', sentence: 'It is difficult to understand this.', scrambled: ['Es', 'ist', 'schwierig', ',', 'das', 'zu', 'verstehen', '.'], answers: ['Es ist schwierig, das zu verstehen.'] },
                  { id: 'ea1_4', sentence: 'It is nice to see you.', scrambled: ['Es', 'ist', 'schön', ',', 'dich', 'zu', 'sehen', '.'], answers: ['Es ist schön, dich zu sehen.'] },
                  { id: 'ea1_5', sentence: 'It is dangerous to swim here.', scrambled: ['Es', 'ist', 'gefährlich', ',', 'hier', 'zu', 'schwimmen', '.'], answers: ['Es ist gefährlich, hier zu schwimmen.'] },
                  { id: 'ea1_6', sentence: 'It is forbidden to smoke here.', scrambled: ['Es', 'ist', 'verboten', ',', 'hier', 'zu', 'rauchen', '.'], answers: ['Es ist verboten, hier zu rauchen.'] },
                  { id: 'ea1_7', sentence: 'It is easy to cook pasta.', scrambled: ['Es', 'ist', 'einfach', ',', 'Nudeln', 'zu', 'kochen', '.'], answers: ['Es ist einfach, Nudeln zu kochen.'] },
                  { id: 'ea1_8', sentence: 'It is boring to wait.', scrambled: ['Es', 'ist', 'langweilig', ',', 'zu', 'warten', '.'], answers: ['Es ist langweilig, zu warten.'] },
                  { id: 'ea1_9', sentence: 'It is necessary to work.', scrambled: ['Es', 'ist', 'notwendig', ',', 'zu', 'arbeiten', '.'], answers: ['Es ist notwendig, zu arbeiten.'] },
                  { id: 'ea1_10', sentence: 'It is interesting to travel.', scrambled: ['Es', 'ist', 'interessant', ',', 'zu', 'reisen', '.'], answers: ['Es ist interessant, zu reisen.'] },
                ]
              },
              {
                id: 'esadj2',
                title: 'I find it ... to ...',
                description: 'Sentences starting with "Ich finde es...".',
                type: 'reorder',
                items: [
                  { id: 'ea2_1', sentence: 'I find it difficult to get up early.', scrambled: ['Ich', 'finde', 'es', 'schwierig', ',', 'früh', 'aufzustehen', '.'], answers: ['Ich finde es schwierig, früh aufzustehen.'] },
                  { id: 'ea2_2', sentence: 'I find it nice to help others.', scrambled: ['Ich', 'finde', 'es', 'schön', ',', 'anderen', 'zu', 'helfen', '.'], answers: ['Ich finde es schön, anderen zu helfen.'] },
                  { id: 'ea2_3', sentence: 'I find it boring to watch TV.', scrambled: ['Ich', 'finde', 'es', 'langweilig', ',', 'fernzusehen', '.'], answers: ['Ich finde es langweilig, fernzusehen.'] },
                  { id: 'ea2_4', sentence: 'I find it important to be honest.', scrambled: ['Ich', 'finde', 'es', 'wichtig', ',', 'ehrlich', 'zu', 'sein', '.'], answers: ['Ich finde es wichtig, ehrlich zu sein.'] },
                  { id: 'ea2_5', sentence: 'I find it easy to learn languages.', scrambled: ['Ich', 'finde', 'es', 'einfach', ',', 'Sprachen', 'zu', 'lernen', '.'], answers: ['Ich finde es einfach, Sprachen zu lernen.'] },
                  { id: 'ea2_6', sentence: 'I find it interesting to read books.', scrambled: ['Ich', 'finde', 'es', 'interessant', ',', 'Bücher', 'zu', 'lesen', '.'], answers: ['Ich finde es interessant, Bücher zu lesen.'] },
                  { id: 'ea2_7', sentence: 'I find it exhausting to work a lot.', scrambled: ['Ich', 'finde', 'es', 'anstrengend', ',', 'viel', 'zu', 'arbeiten', '.'], answers: ['Ich finde es anstrengend, viel zu arbeiten.'] },
                  { id: 'ea2_8', sentence: 'I find it great to travel.', scrambled: ['Ich', 'finde', 'es', 'toll', ',', 'zu', 'reisen', '.'], answers: ['Ich finde es toll, zu reisen.'] },
                  { id: 'ea2_9', sentence: 'I find it funny to hear jokes.', scrambled: ['Ich', 'finde', 'es', 'lustig', ',', 'Witze', 'zu', 'hören', '.'], answers: ['Ich finde es lustig, Witze zu hören.'] },
                  { id: 'ea2_10', sentence: 'I find it sad to say goodbye.', scrambled: ['Ich', 'finde', 'es', 'traurig', ',', 'mich', 'zu', 'verabschieden', '.'], answers: ['Ich finde es traurig, mich zu verabschieden.'] },
                ]
              },
              {
                id: 'esadj3',
                title: 'Mixed Adjective Practice',
                description: 'Practice with various adjectives and "zu".',
                type: 'fill-in',
                items: [
                  { id: 'ea3_1', sentence: 'Es ist verboten, hier [blank]. (parken)', answers: ['zu parken'] },
                  { id: 'ea3_2', sentence: 'Ich finde es toll, dich [blank]. (treffen)', answers: ['zu treffen'] },
                  { id: 'ea3_3', sentence: 'Es ist gesund, viel Wasser [blank]. (trinken)', answers: ['zu trinken'] },
                  { id: 'ea3_4', sentence: 'Ich fand es schwierig, die Aufgabe [blank]. (lösen)', answers: ['zu lösen'] },
                  { id: 'ea3_5', sentence: 'Es ist schön, im Sommer am Meer [blank]. (sein)', answers: ['zu sein'] },
                  { id: 'ea3_6', sentence: 'Ich finde es wichtig, pünktlich [blank]. (kommen)', answers: ['zu kommen'] },
                  { id: 'ea3_7', sentence: 'Es ist einfach, dieses Spiel [blank]. (spielen)', answers: ['zu spielen'] },
                  { id: 'ea3_8', sentence: 'Ich fand es langweilig, den Film [blank]. (sehen)', answers: ['zu sehen'] },
                  { id: 'ea3_9', sentence: 'Es ist gefährlich, nachts allein [blank]. (ausgehen)', answers: ['auszugehen'] },
                  { id: 'ea3_10', sentence: 'Ich finde es gut, Sport [blank]. (treiben)', answers: ['zu treiben'] },
                ]
              }
            ]
          },
          {
            id: 'noun-zu',
            title: 'Nouns with zu',
            tasks: [
              {
                id: 'noun1',
                title: 'Lust, Zeit, Geld',
                description: 'Common nouns that take a "zu" infinitive clause.',
                type: 'reorder',
                items: [
                  { id: 'n1_1', sentence: 'I have no desire to work today.', scrambled: ['Ich', 'habe', 'keine', 'Lust', ',', 'heute', 'zu', 'arbeiten', '.'], answers: ['Ich habe keine Lust, heute zu arbeiten.'] },
                  { id: 'n1_2', sentence: 'Do you have time to help me?', scrambled: ['Hast', 'du', 'Zeit', ',', 'mir', 'zu', 'helfen', '?'], answers: ['Hast du Zeit, mir zu helfen?'] },
                  { id: 'n1_3', sentence: 'We have no money to buy a house.', scrambled: ['Wir', 'haben', 'kein', 'Geld', ',', 'um', 'ein', 'Haus', 'zu', 'kaufen', '.'], answers: ['Wir haben kein Geld, um ein Haus zu kaufen.'] },
                  { id: 'n1_4', sentence: 'She has the desire to travel.', scrambled: ['Sie', 'hat', 'den', 'Wunsch', ',', 'zu', 'reisen', '.'], answers: ['Sie hat den Wunsch, zu reisen.'] },
                  { id: 'n1_5', sentence: 'I have the intention to learn more.', scrambled: ['Ich', 'habe', 'die', 'Absicht', ',', 'mehr', 'zu', 'lernen', '.'], answers: ['Ich habe die Absicht, mehr zu lernen.'] },
                  { id: 'n1_6', sentence: 'They have no time to wait.', scrambled: ['Sie', 'haben', 'keine', 'Zeit', ',', 'zu', 'warten', '.'], answers: ['Sie haben keine Zeit, zu warten.'] },
                  { id: 'n1_7', sentence: 'He has no desire to go out.', scrambled: ['Er', 'hat', 'keine', 'Lust', ',', 'auszugehen', '.'], answers: ['Er hat keine Lust, auszugehen.'] },
                  { id: 'n1_8', sentence: 'We have the opportunity to work here.', scrambled: ['Wir', 'haben', 'die', 'Möglichkeit', ',', 'hier', 'zu', 'arbeiten', '.'], answers: ['Wir haben die Möglichkeit, hier zu arbeiten.'] },
                  { id: 'n1_9', sentence: 'She has no money to travel.', scrambled: ['Sie', 'hat', 'kein', 'Geld', ',', 'um', 'zu', 'reisen', '.'], answers: ['Sie hat kein Geld, um zu reisen.'] },
                  { id: 'n1_10', sentence: 'I have the hope to see you again.', scrambled: ['Ich', 'habe', 'die', 'Hoffnung', ',', 'dich', 'wiederzusehen', '.'], answers: ['Ich habe die Hoffnung, dich wiederzusehen.'] },
                ]
              },
              {
                id: 'noun2',
                title: 'Plan, Traum, Angst',
                description: 'More nouns with "zu".',
                type: 'reorder',
                items: [
                  { id: 'n2_1', sentence: 'He has the plan to build a house.', scrambled: ['Er', 'hat', 'den', 'Plan', ',', 'ein', 'Haus', 'zu', 'bauen', '.'], answers: ['Er hat den Plan, ein Haus zu bauen.'] },
                  { id: 'n2_2', sentence: 'She has the dream to become a singer.', scrambled: ['Sie', 'hat', 'den', 'Traum', ',', 'Sängerin', 'zu', 'werden', '.'], answers: ['Sie hat den Traum, Sängerin zu werden.'] },
                  { id: 'n2_3', sentence: 'I have fear to make mistakes.', scrambled: ['Ich', 'habe', 'Angst', ',', 'Fehler', 'zu', 'machen', '.'], answers: ['Ich habe Angst, Fehler zu machen.'] },
                  { id: 'n2_4', sentence: 'We have the task to clean the room.', scrambled: ['Wir', 'haben', 'die', 'Aufgabe', ',', 'das', 'Zimmer', 'zu', 'reinigen', '.'], answers: ['Wir haben die Aufgabe, das Zimmer zu reinigen.'] },
                  { id: 'n2_5', sentence: 'They have the idea to go to the cinema.', scrambled: ['Sie', 'haben', 'die', 'Idee', ',', 'ins', 'Kino', 'zu', 'gehen', '.'], answers: ['Sie haben die Idee, ins Kino zu gehen.'] },
                  { id: 'n2_6', sentence: 'He has the courage to say the truth.', scrambled: ['Er', 'hat', 'den', 'Mut', ',', 'die', 'Wahrheit', 'zu', 'sagen', '.'], answers: ['Er hat den Mut, die Wahrheit zu sagen.'] },
                  { id: 'n2_7', sentence: 'She has the duty to help her parents.', scrambled: ['Sie', 'hat', 'die', 'Pflicht', ',', 'ihren', 'Eltern', 'zu', 'helfen', '.'], answers: ['Sie hat die Pflicht, ihren Eltern zu helfen.'] },
                  { id: 'n2_8', sentence: 'I have the goal to lose weight.', scrambled: ['Ich', 'habe', 'das', 'Ziel', ',', 'abzunehmen', '.'], answers: ['Ich habe das Ziel, abzunehmen.'] },
                  { id: 'n2_9', sentence: 'We have the plan to travel to Asia.', scrambled: ['Wir', 'haben', 'den', 'Plan', ',', 'nach', 'Asien', 'zu', 'reisen', '.'], answers: ['Wir haben den Plan, nach Asien zu reisen.'] },
                  { id: 'n2_10', sentence: 'He has the dream to fly to the moon.', scrambled: ['Er', 'hat', 'den', 'Traum', ',', 'zum', 'Mond', 'zu', 'fliegen', '.'], answers: ['Er hat den Traum, zum Mond zu fliegen.'] },
                ]
              },
              {
                id: 'noun3',
                title: 'Noun + zu Challenge',
                description: 'Fill in the correct "zu" infinitive.',
                type: 'fill-in',
                items: [
                  { id: 'n3_1', sentence: 'Ich habe keine Lust, heute [blank]. (kochen)', answers: ['zu kochen'] },
                  { id: 'n3_2', sentence: 'Hast du Zeit, mir beim Umzug [blank]? (helfen)', answers: ['zu helfen'] },
                  { id: 'n3_3', sentence: 'Er hat den Plan, ein Jahr im Ausland [blank]. (leben)', answers: ['zu leben'] },
                  { id: 'n3_4', sentence: 'Wir haben die Absicht, das Haus [blank]. (verkaufen)', answers: ['zu verkaufen'] },
                  { id: 'n3_5', sentence: 'Sie hat Angst, den Zug [blank]. (verpassen)', answers: ['zu verpassen'] },
                  { id: 'n3_6', sentence: 'Ich habe die Hoffnung, die Prüfung [blank]. (bestehen)', answers: ['zu bestehen'] },
                  { id: 'n3_7', sentence: 'Habt ihr Lust, mit uns ins Kino [blank]? (gehen)', answers: ['zu gehen'] },
                  { id: 'n3_8', sentence: 'Er hat den Traum, einmal Weltmeister [blank]. (werden)', answers: ['zu werden'] },
                  { id: 'n3_9', sentence: 'Wir haben die Aufgabe, den Text [blank]. (übersetzen)', answers: ['zu übersetzen'] },
                  { id: 'n3_10', sentence: 'Ich habe keine Zeit, lange [blank]. (warten)', answers: ['zu warten'] },
                ]
              }
            ]
          },
          {
            id: 'verb-zu',
            title: 'Verbs with zu',
            tasks: [
              {
                id: 'verb1',
                title: 'Vorhaben, Planen, Vorschlagen',
                description: 'Verbs that are often followed by a "zu" infinitive clause.',
                type: 'reorder',
                items: [
                  { id: 'v1_1', sentence: 'I intend to visit you.', scrambled: ['Ich', 'habe', 'vor', ',', 'dich', 'zu', 'besuchen', '.'], answers: ['Ich habe vor, dich zu besuchen.'] },
                  { id: 'v1_2', sentence: 'He plans to buy a new car.', scrambled: ['Er', 'plant', ',', 'ein', 'neues', 'Auto', 'zu', 'kaufen', '.'], answers: ['Er plant, ein neues Auto zu kaufen.'] },
                  { id: 'v1_3', sentence: 'I suggest going to the cinema.', scrambled: ['Ich', 'schlage', 'vor', ',', 'ins', 'Kino', 'zu', 'gehen', '.'], answers: ['Ich schlage vor, ins Kino zu gehen.'] },
                  { id: 'v1_4', sentence: 'We intend to stay here.', scrambled: ['Wir', 'haben', 'vor', ',', 'hier', 'zu', 'bleiben', '.'], answers: ['Wir haben vor, hier zu bleiben.'] },
                  { id: 'v1_5', sentence: 'She plans to travel to Italy.', scrambled: ['Sie', 'plant', ',', 'nach', 'Italien', 'zu', 'reisen', '.'], answers: ['Sie plant, nach Italien zu reisen.'] },
                  { id: 'v1_6', sentence: 'He suggests eating pizza.', scrambled: ['Er', 'schlägt', 'vor', ',', 'Pizza', 'zu', 'essen', '.'], answers: ['Er schlägt vor, Pizza zu essen.'] },
                  { id: 'v1_7', sentence: 'I had intended to call you.', scrambled: ['Ich', 'hatte', 'vor', ',', 'dich', 'anzurufen', '.'], answers: ['Ich hatte vor, dich anzurufen.'] },
                  { id: 'v1_8', sentence: 'They plan to build a house.', scrambled: ['Sie', 'planen', ',', 'ein', 'Haus', 'zu', 'bauen', '.'], answers: ['Sie planen, ein Haus zu bauen.'] },
                  { id: 'v1_9', sentence: 'We suggest taking the train.', scrambled: ['Wir', 'schlagen', 'vor', ',', 'den', 'Zug', 'zu', 'nehmen', '.'], answers: ['Wir schlagen vor, den Zug zu nehmen.'] },
                  { id: 'v1_10', sentence: 'She had intended to come.', scrambled: ['Sie', 'hatte', 'vor', ',', 'zu', 'kommen', '.'], answers: ['Sie hatte vor, zu kommen.'] },
                ]
              },
              {
                id: 'verb2',
                title: 'Versuchen, Aufhören, Anfangen',
                description: 'More verbs with "zu".',
                type: 'reorder',
                items: [
                  { id: 'v2_1', sentence: 'I try to help you.', scrambled: ['Ich', 'versuche', ',', 'dir', 'zu', 'helfen', '.'], answers: ['Ich versuche, dir zu helfen.'] },
                  { id: 'v2_2', sentence: 'He stops smoking.', scrambled: ['Er', 'hört', 'auf', ',', 'zu', 'rauchen', '.'], answers: ['Er hört auf, zu rauchen.'] },
                  { id: 'v2_3', sentence: 'We start to work.', scrambled: ['Wir', 'fangen', 'an', ',', 'zu', 'arbeiten', '.'], answers: ['Wir fangen an, zu arbeiten.'] },
                  { id: 'v2_4', sentence: 'She tries to understand it.', scrambled: ['Sie', 'versucht', ',', 'es', 'zu', 'verstehen', '.'], answers: ['Sie versucht, es zu verstehen.'] },
                  { id: 'v2_5', sentence: 'They stop talking.', scrambled: ['Sie', 'hören', 'auf', ',', 'zu', 'reden', '.'], answers: ['Sie hören auf, zu reden.'] },
                  { id: 'v2_6', sentence: 'I start to read the book.', scrambled: ['Ich', 'fange', 'an', ',', 'das', 'Buch', 'zu', 'lesen', '.'], answers: ['Ich fange an, das Buch zu lesen.'] },
                  { id: 'v2_7', sentence: 'He tries to open the door.', scrambled: ['Er', 'versucht', ',', 'die', 'Tür', 'zu', 'öffnen', '.'], answers: ['Er versucht, die Tür zu öffnen.'] },
                  { id: 'v2_8', sentence: 'We stop waiting.', scrambled: ['Wir', 'hören', 'auf', ',', 'zu', 'warten', '.'], answers: ['Wir hören auf, zu warten.'] },
                  { id: 'v2_9', sentence: 'She starts to sing.', scrambled: ['Sie', 'fängt', 'an', ',', 'zu', 'singen', '.'], answers: ['Sie fängt an, zu singen.'] },
                  { id: 'v2_10', sentence: 'They try to find the key.', scrambled: ['Sie', 'versuchen', ',', 'den', 'Schlüssel', 'zu', 'finden', '.'], answers: ['Sie versuchen, den Schlüssel zu finden.'] },
                ]
              },
              {
                id: 'verb3',
                title: 'Verb + zu Challenge',
                description: 'Fill in the correct "zu" infinitive.',
                type: 'fill-in',
                items: [
                  { id: 'v3_1', sentence: 'Ich habe vor, morgen [blank]. (kommen)', answers: ['zu kommen'] },
                  { id: 'v3_2', sentence: 'Er plant, ein neues Auto [blank]. (kaufen)', answers: ['zu kaufen'] },
                  { id: 'v3_3', sentence: 'Wir schlagen vor, heute Abend [blank]. (ausgehen)', answers: ['auszugehen'] },
                  { id: 'v3_4', sentence: 'Sie versucht, die Prüfung [blank]. (bestehen)', answers: ['zu bestehen'] },
                  { id: 'v3_5', sentence: 'Ich höre auf, Schokolade [blank]. (essen)', answers: ['zu essen'] },
                  { id: 'v3_6', sentence: 'Er fängt an, Deutsch [blank]. (lernen)', answers: ['zu lernen'] },
                  { id: 'v3_7', sentence: 'Wir haben vor, nach Berlin [blank]. (fahren)', answers: ['zu fahren'] },
                  { id: 'v3_8', sentence: 'Sie plant, ihre Freunde [blank]. (besuchen)', answers: ['zu besuchen'] },
                  { id: 'v3_9', sentence: 'Ich schlage vor, den Bus [blank]. (nehmen)', answers: ['zu nehmen'] },
                  { id: 'v3_10', sentence: 'Er versucht, pünktlich [blank]. (sein)', answers: ['zu sein'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'double-conjunctions',
        title: 'Double Conjunctions',
        subunits: [
          {
            id: 'sowohl-als-auch',
            title: 'Sowohl ... als auch',
            tasks: [
              {
                id: 'saa1',
                title: 'Both ... and (1)',
                description: 'Use "sowohl ... als auch" to connect two equal parts of a sentence.',
                type: 'reorder',
                items: [
                  { id: 'saa1_1', sentence: 'I speak both German and English.', scrambled: ['Ich', 'spreche', 'sowohl', 'Deutsch', 'als', 'auch', 'Englisch', '.'], answers: ['Ich spreche sowohl Deutsch als auch Englisch.'] },
                  { id: 'saa1_2', sentence: 'He eats both meat and vegetables.', scrambled: ['Er', 'isst', 'sowohl', 'Fleisch', 'als', 'auch', 'Gemüse', '.'], answers: ['Er isst sowohl Fleisch als auch Gemüse.'] },
                  { id: 'saa1_3', sentence: 'We have both time and money.', scrambled: ['Wir', 'haben', 'sowohl', 'Zeit', 'als', 'auch', 'Geld', '.'], answers: ['Wir haben sowohl Zeit als auch Geld.'] },
                  { id: 'saa1_4', sentence: 'She likes both tea and coffee.', scrambled: ['Sie', 'mag', 'sowohl', 'Tee', 'als', 'auch', 'Kaffee', '.'], answers: ['Sie mag sowohl Tee als auch Kaffee.'] },
                  { id: 'saa1_5', sentence: 'The hotel is both cheap and clean.', scrambled: ['Das', 'Hotel', 'ist', 'sowohl', 'billig', 'als', 'auch', 'sauber', '.'], answers: ['Das Hotel ist sowohl billig als auch sauber.'] },
                  { id: 'saa1_6', sentence: 'He is both a teacher and an author.', scrambled: ['Er', 'ist', 'sowohl', 'Lehrer', 'als', 'auch', 'Autor', '.'], answers: ['Er ist sowohl Lehrer als auch Autor.'] },
                  { id: 'saa1_7', sentence: 'We visit both Berlin and Munich.', scrambled: ['Wir', 'besuchen', 'sowohl', 'Berlin', 'als', 'auch', 'München', '.'], answers: ['Wir besuchen sowohl Berlin als auch München.'] },
                  { id: 'saa1_8', sentence: 'She plays both piano and guitar.', scrambled: ['Sie', 'spielt', 'sowohl', 'Klavier', 'als', 'auch', 'Gitarre', '.'], answers: ['Sie spielt sowohl Klavier als auch Gitarre.'] },
                  { id: 'saa1_9', sentence: 'I need both a pen and paper.', scrambled: ['Ich', 'brauche', 'sowohl', 'einen', 'Stift', 'als', 'auch', 'Papier', '.'], answers: ['Ich brauche sowohl einen Stift als auch Papier.'] },
                  { id: 'saa1_10', sentence: 'The weather is both sunny and warm.', scrambled: ['Das', 'Wetter', 'ist', 'sowohl', 'sonnig', 'als', 'auch', 'warm', '.'], answers: ['Das Wetter ist sowohl sonnig als auch warm.'] },
                ]
              },
              {
                id: 'saa2',
                title: 'Both ... and (2)',
                description: 'Complete the sentences with "sowohl" and "als auch".',
                type: 'fill-in',
                items: [
                  { id: 'saa2_1', sentence: 'Er ist [blank] nett [blank] hilfsbereit.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_2', sentence: 'Wir kaufen [blank] Brot [blank] Milch.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_3', sentence: 'Sie kann [blank] singen [blank] tanzen.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_4', sentence: 'Das Buch ist [blank] spannend [blank] lehrreich.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_5', sentence: 'Ich habe [blank] Hunger [blank] Durst.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_6', sentence: 'Er arbeitet [blank] am Tag [blank] in der Nacht.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_7', sentence: 'Wir brauchen [blank] Hilfe [blank] Geduld.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_8', sentence: 'Sie ist [blank] klug [blank] mutig.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_9', sentence: 'Das Wetter war [blank] windig [blank] regnerisch.', answers: ['sowohl', 'als auch'] },
                  { id: 'saa2_10', sentence: 'Ich mag [blank] Äpfel [blank] Birnen.', answers: ['sowohl', 'als auch'] },
                ]
              }
            ]
          },
          {
            id: 'weder-noch',
            title: 'Weder ... noch',
            tasks: [
              {
                id: 'wn1',
                title: 'Neither ... nor (1)',
                description: 'Use "weder ... noch" to express a double negation.',
                type: 'reorder',
                items: [
                  { id: 'wn1_1', sentence: 'I speak neither French nor Spanish.', scrambled: ['Ich', 'spreche', 'weder', 'Französisch', 'noch', 'Spanisch', '.'], answers: ['Ich spreche weder Französisch noch Spanisch.'] },
                  { id: 'wn1_2', sentence: 'He eats neither fish nor meat.', scrambled: ['Er', 'isst', 'weder', 'Fisch', 'noch', 'Fleisch', '.'], answers: ['Er isst weder Fisch noch Fleisch.'] },
                  { id: 'wn1_3', sentence: 'We have neither time nor desire.', scrambled: ['Wir', 'haben', 'weder', 'Zeit', 'noch', 'Lust', '.'], answers: ['Wir haben weder Zeit noch Lust.'] },
                  { id: 'wn1_4', sentence: 'She likes neither rain nor snow.', scrambled: ['Sie', 'mag', 'weder', 'Regen', 'noch', 'Schnee', '.'], answers: ['Sie mag weder Regen noch Schnee.'] },
                  { id: 'wn1_5', sentence: 'The car is neither new nor fast.', scrambled: ['Das', 'Auto', 'ist', 'weder', 'neu', 'noch', 'schnell', '.'], answers: ['Das Auto ist weder neu noch schnell.'] },
                  { id: 'wn1_6', sentence: 'He is neither rich nor famous.', scrambled: ['Er', 'ist', 'weder', 'reich', 'noch', 'berühmt', '.'], answers: ['Er ist weder reich noch berühmt.'] },
                  { id: 'wn1_7', sentence: 'We visit neither the museum nor the park.', scrambled: ['Wir', 'besuchen', 'weder', 'das', 'Museum', 'noch', 'den', 'Park', '.'], answers: ['Wir besuchen weder das Museum noch den Park.'] },
                  { id: 'wn1_8', sentence: 'She plays neither tennis nor football.', scrambled: ['Sie', 'spielt', 'weder', 'Tennis', 'noch', 'Fußball', '.'], answers: ['Sie spielt weder Tennis noch Fußball.'] },
                  { id: 'wn1_9', sentence: 'I need neither help nor money.', scrambled: ['Ich', 'brauche', 'weder', 'Hilfe', 'noch', 'Geld', '.'], answers: ['Ich brauche weder Hilfe noch Geld.'] },
                  { id: 'wn1_10', sentence: 'The weather is neither cold nor windy.', scrambled: ['Das', 'Wetter', 'ist', 'weder', 'kalt', 'noch', 'windig', '.'], answers: ['Das Wetter ist weder kalt noch windig.'] },
                ]
              },
              {
                id: 'wn2',
                title: 'Neither ... nor (2)',
                description: 'Complete the sentences with "weder" and "noch".',
                type: 'fill-in',
                items: [
                  { id: 'wn2_1', sentence: 'Er hat [blank] ein Handy [blank] einen Computer.', answers: ['weder', 'noch'] },
                  { id: 'wn2_2', sentence: 'Wir trinken [blank] Bier [blank] Wein.', answers: ['weder', 'noch'] },
                  { id: 'wn2_3', sentence: 'Sie kann [blank] kochen [blank] backen.', answers: ['weder', 'noch'] },
                  { id: 'wn2_4', sentence: 'Das Haus ist [blank] groß [blank] modern.', answers: ['weder', 'noch'] },
                  { id: 'wn2_5', sentence: 'Ich habe [blank] Geschwister [blank] Haustiere.', answers: ['weder', 'noch'] },
                  { id: 'wn2_6', sentence: 'Er arbeitet [blank] heute [blank] morgen.', answers: ['weder', 'noch'] },
                  { id: 'wn2_7', sentence: 'Wir brauchen [blank] Zucker [blank] Salz.', answers: ['weder', 'noch'] },
                  { id: 'wn2_8', sentence: 'Sie ist [blank] traurig [blank] wütend.', answers: ['weder', 'noch'] },
                  { id: 'wn2_9', sentence: 'Das Wetter war [blank] schön [blank] schlecht.', answers: ['weder', 'noch'] },
                  { id: 'wn2_10', sentence: 'Ich mag [blank] Winter [blank] Sommer.', answers: ['weder', 'noch'] },
                ]
              }
            ]
          },
          {
            id: 'entweder-oder',
            title: 'Entweder ... oder',
            tasks: [
              {
                id: 'eo1',
                title: 'Either ... or (1)',
                description: 'Use "entweder ... oder" to express an alternative.',
                type: 'reorder',
                items: [
                  { id: 'eo1_1', sentence: 'Either we go to the cinema or we stay home.', scrambled: ['Entweder', 'wir', 'gehen', 'ins', 'Kino', 'oder', 'wir', 'bleiben', 'zu', 'Hause', '.'], answers: ['Entweder wir gehen ins Kino oder wir bleiben zu Hause.'] },
                  { id: 'eo1_2', sentence: 'Either you help me or I do it alone.', scrambled: ['Entweder', 'du', 'hilfst', 'mir', 'oder', 'ich', 'mache', 'es', 'allein', '.'], answers: ['Entweder du hilfst mir oder ich mache es allein.'] },
                  { id: 'eo1_3', sentence: 'Either he comes today or he comes tomorrow.', scrambled: ['Entweder', 'er', 'kommt', 'heute', 'oder', 'er', 'kommt', 'morgen', '.'], answers: ['Entweder er kommt heute oder er kommt morgen.'] },
                  { id: 'eo1_4', sentence: 'Either we eat pizza or we cook pasta.', scrambled: ['Entweder', 'wir', 'essen', 'Pizza', 'oder', 'wir', 'kochen', 'Nudeln', '.'], answers: ['Entweder wir essen Pizza oder wir kochen Nudeln.'] },
                  { id: 'eo1_5', sentence: 'Either you buy the car or you rent it.', scrambled: ['Entweder', 'du', 'kaufst', 'das', 'Auto', 'oder', 'du', 'mietest', 'es', '.'], answers: ['Entweder du kaufst das Auto oder du mietest es.'] },
                  { id: 'eo1_6', sentence: 'Either she is in the office or she is at home.', scrambled: ['Entweder', 'sie', 'ist', 'im', 'Büro', 'oder', 'sie', 'ist', 'zu', 'Hause', '.'], answers: ['Entweder sie ist im Büro oder sie ist zu Hause.'] },
                  { id: 'eo1_7', sentence: 'Either we take the train or we take the car.', scrambled: ['Entweder', 'wir', 'fahren', 'mit', 'dem', 'Zug', 'oder', 'wir', 'nehmen', 'das', 'Auto', '.'], answers: ['Entweder wir fahren mit dem Zug oder wir nehmen das Auto.'] },
                  { id: 'eo1_8', sentence: 'Either you tell the truth or you remain silent.', scrambled: ['Entweder', 'du', 'sagst', 'die', 'Wahrheit', 'oder', 'du', 'schweigst', '.'], answers: ['Entweder du sagst die Wahrheit oder du schweigst.'] },
                  { id: 'eo1_9', sentence: 'Either it rains or the sun shines.', scrambled: ['Entweder', 'es', 'regnet', 'oder', 'die', 'Sonne', 'scheint', '.'], answers: ['Entweder es regnet oder die Sonne scheint.'] },
                  { id: 'eo1_10', sentence: 'Either we win or we lose.', scrambled: ['Entweder', 'wir', 'gewinnen', 'oder', 'wir', 'verlieren', '.'], answers: ['Entweder wir gewinnen oder wir verlieren.'] },
                ]
              },
              {
                id: 'eo2',
                title: 'Either ... or (2)',
                description: 'Complete the sentences with "entweder" and "oder".',
                type: 'fill-in',
                items: [
                  { id: 'eo2_1', sentence: '[blank] du kommst mit, [blank] du bleibst hier.', answers: ['Entweder', 'oder'] },
                  { id: 'eo2_2', sentence: 'Wir essen [blank] im Restaurant [blank] zu Hause.', answers: ['entweder', 'oder'] },
                  { id: 'eo2_3', sentence: '[blank] er ruft an, [blank] er schreibt eine E-Mail.', answers: ['Entweder', 'oder'] },
                  { id: 'eo2_4', sentence: 'Du kannst [blank] Tee [blank] Kaffee haben.', answers: ['entweder', 'oder'] },
                  { id: 'eo2_5', sentence: '[blank] wir fliegen [blank] wir fahren mit dem Schiff.', answers: ['Entweder', 'oder'] },
                  { id: 'eo2_6', sentence: 'Er ist [blank] in Berlin [blank] in Hamburg.', answers: ['entweder', 'oder'] },
                  { id: 'eo2_7', sentence: '[blank] du lernst jetzt, [blank] du fällst durch.', answers: ['Entweder', 'oder'] },
                  { id: 'eo2_8', sentence: 'Wir gehen [blank] spazieren [blank] wir lesen ein Buch.', answers: ['entweder', 'oder'] },
                  { id: 'eo2_9', sentence: '[blank] es ist wahr, [blank] es ist gelogen.', answers: ['Entweder', 'oder'] },
                  { id: 'eo2_10', sentence: 'Du kaufst [blank] Äpfel [blank] Bananen.', answers: ['entweder', 'oder'] },
                ]
              }
            ]
          },
          {
            id: 'nicht-nur-sondern-auch',
            title: 'Nicht nur ... sondern auch',
            tasks: [
              {
                id: 'nnsa1',
                title: 'Not only ... but also (1)',
                description: 'Use "nicht nur ... sondern auch" to emphasize two things.',
                type: 'reorder',
                items: [
                  { id: 'nnsa1_1', sentence: 'He is not only intelligent but also hard-working.', scrambled: ['Er', 'ist', 'nicht', 'nur', 'intelligent', ',', 'sondern', 'auch', 'fleißig', '.'], answers: ['Er ist nicht nur intelligent, sondern auch fleißig.'] },
                  { id: 'nnsa1_2', sentence: 'She speaks not only German but also Japanese.', scrambled: ['Sie', 'spricht', 'nicht', 'nur', 'Deutsch', ',', 'sondern', 'auch', 'Japanisch', '.'], answers: ['Sie spricht nicht nur Deutsch, sondern auch Japanisch.'] },
                  { id: 'nnsa1_3', sentence: 'We have not only a house but also a garden.', scrambled: ['Wir', 'haben', 'nicht', 'nur', 'ein', 'Haus', ',', 'sondern', 'auch', 'einen', 'Garten', '.'], answers: ['Wir haben nicht nur ein Haus, sondern auch einen Garten.'] },
                  { id: 'nnsa1_4', sentence: 'The food is not only tasty but also healthy.', scrambled: ['Das', 'Essen', 'ist', 'nicht', 'nur', 'lecker', ',', 'sondern', 'auch', 'gesund', '.'], answers: ['Das Essen ist nicht nur lecker, sondern auch gesund.'] },
                  { id: 'nnsa1_5', sentence: 'He plays not only football but also basketball.', scrambled: ['Er', 'spielt', 'nicht', 'nur', 'Fußball', ',', 'sondern', 'auch', 'Basketball', '.'], answers: ['Er spielt nicht nur Fußball, sondern auch Basketball.'] },
                  { id: 'nnsa1_6', sentence: 'She is not only beautiful but also nice.', scrambled: ['Sie', 'ist', 'nicht', 'nur', 'schön', ',', 'sondern', 'auch', 'nett', '.'], answers: ['Sie ist nicht nur schön, sondern auch nett.'] },
                  { id: 'nnsa1_7', sentence: 'We visit not only Paris but also London.', scrambled: ['Wir', 'besuchen', 'nicht', 'nur', 'Paris', ',', 'sondern', 'auch', 'London', '.'], answers: ['Wir besuchen nicht nur Paris, sondern auch London.'] },
                  { id: 'nnsa1_8', sentence: 'I need not only help but also time.', scrambled: ['Ich', 'brauche', 'nicht', 'nur', 'Hilfe', ',', 'sondern', 'auch', 'Zeit', '.'], answers: ['Ich brauche nicht nur Hilfe, sondern auch Zeit.'] },
                  { id: 'nnsa1_9', sentence: 'The weather is not only warm but also sunny.', scrambled: ['Das', 'Wetter', 'ist', 'nicht', 'nur', 'warm', ',', 'sondern', 'auch', 'sonnig', '.'], answers: ['Das Wetter ist nicht nur warm, sondern auch sonnig.'] },
                  { id: 'nnsa1_10', sentence: 'He is not only my colleague but also my friend.', scrambled: ['Er', 'ist', 'nicht', 'nur', 'mein', 'Kollege', ',', 'sondern', 'auch', 'mein', 'Freund', '.'], answers: ['Er ist nicht nur mein Kollege, sondern auch mein Freund.'] },
                ]
              },
              {
                id: 'nnsa2',
                title: 'Not only ... but also (2)',
                description: 'Complete the sentences with "nicht nur" and "sondern auch".',
                type: 'fill-in',
                items: [
                  { id: 'nnsa2_1', sentence: 'Er lernt [blank] Englisch, [blank] Spanisch.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_2', sentence: 'Wir kaufen [blank] Obst, [blank] Gemüse.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_3', sentence: 'Sie kann [blank] Klavier, [blank] Geige spielen.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_4', sentence: 'Das Auto ist [blank] schnell, [blank] sicher.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_5', sentence: 'Ich habe [blank] einen Hund, [blank] eine Katze.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_6', sentence: 'Er arbeitet [blank] viel, [blank] gern.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_7', sentence: 'Wir brauchen [blank] Geld, [blank] Ideen.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_8', sentence: 'Sie ist [blank] klug, [blank] bescheiden.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_9', sentence: 'Das Wetter war [blank] heiß, [blank] schwül.', answers: ['nicht nur', 'sondern auch'] },
                  { id: 'nnsa2_10', sentence: 'Ich mag [blank] Pizza, [blank] Pasta.', answers: ['nicht nur', 'sondern auch'] },
                ]
              }
            ]
          },
          {
            id: 'je-desto',
            title: 'Je ... desto',
            tasks: [
              {
                id: 'jd1',
                title: 'The ... the (1)',
                description: 'Use "je ... desto" to express a proportional relationship. "Je" starts a subordinate clause (verb at end), "desto" starts the main clause (verb in 2nd position).',
                type: 'reorder',
                items: [
                  { id: 'jd1_1', sentence: 'The more I learn, the better I become.', scrambled: ['Je', 'mehr', 'ich', 'lerne', ',', 'desto', 'besser', 'werde', 'ich', '.'], answers: ['Je mehr ich lerne, desto besser werde ich.'] },
                  { id: 'jd1_2', sentence: 'The longer I wait, the more impatient I become.', scrambled: ['Je', 'länger', 'ich', 'warte', ',', 'desto', 'ungeduldiger', 'werde', 'ich', '.'], answers: ['Je länger ich warte, desto ungeduldiger werde ich.'] },
                  { id: 'jd1_3', sentence: 'The more often we train, the fitter we become.', scrambled: ['Je', 'öfter', 'wir', 'trainieren', ',', 'desto', 'fitter', 'werden', 'wir', '.'], answers: ['Je öfter wir trainieren, desto fitter werden wir.'] },
                  { id: 'jd1_4', sentence: 'The faster you drive, the more dangerous it is.', scrambled: ['Je', 'schneller', 'du', 'fährst', ',', 'desto', 'gefährlicher', 'ist', 'es', '.'], answers: ['Je schneller du fährst, desto gefährlicher ist es.'] },
                  { id: 'jd1_5', sentence: 'The colder it is, the more clothes I need.', scrambled: ['Je', 'kälter', 'es', 'ist', ',', 'desto', 'mehr', 'Kleidung', 'brauche', 'ich', '.'], answers: ['Je kälter es ist, desto mehr Kleidung brauche ich.'] },
                  { id: 'jd1_6', sentence: 'The more expensive the car is, the nicer it is.', scrambled: ['Je', 'teurer', 'das', 'Auto', 'ist', ',', 'desto', 'schöner', 'ist', 'es', '.'], answers: ['Je teurer das Auto ist, desto schöner ist es.'] },
                  { id: 'jd1_7', sentence: 'The more sport one does, the healthier one lives.', scrambled: ['Je', 'mehr', 'Sport', 'man', 'macht', ',', 'desto', 'gesünder', 'lebt', 'man', '.'], answers: ['Je mehr Sport man macht, desto gesünder lebt man.'] },
                  { id: 'jd1_8', sentence: 'The earlier we go, the better it is.', scrambled: ['Je', 'früher', 'wir', 'gehen', ',', 'desto', 'besser', 'ist', 'es', '.'], answers: ['Je früher wir gehen, desto besser ist es.'] },
                  { id: 'jd1_9', sentence: 'The less I sleep, the more tired I am.', scrambled: ['Je', 'weniger', 'ich', 'schlafe', ',', 'desto', 'müder', 'bin', 'ich', '.'], answers: ['Je weniger ich schlafe, desto müder bin ich.'] },
                  { id: 'jd1_10', sentence: 'The more people come, the funnier it becomes.', scrambled: ['Je', 'mehr', 'Leute', 'kommen', ',', 'desto', 'lustiger', 'wird', 'es', '.'], answers: ['Je mehr Leute kommen, desto lustiger wird es.'] },
                ]
              },
              {
                id: 'jd2',
                title: 'The ... the (2)',
                description: 'Complete the sentences with "je" and "desto".',
                type: 'fill-in',
                items: [
                  { id: 'jd2_1', sentence: '[blank] mehr ich lese, [blank] mehr weiß ich.', answers: ['Je', 'desto'] },
                  { id: 'jd2_2', sentence: '[blank] kleiner das Haus ist, [blank] billiger ist es.', answers: ['Je', 'desto'] },
                  { id: 'jd2_3', sentence: '[blank] fleißiger du bist, [blank] erfolgreicher wirst du.', answers: ['Je', 'desto'] },
                  { id: 'jd2_4', sentence: '[blank] dunkler es wird, [blank] weniger sieht man.', answers: ['Je', 'desto'] },
                  { id: 'jd2_5', sentence: '[blank] höher der Berg ist, [blank] kälter ist die Luft.', answers: ['Je', 'desto'] },
                  { id: 'jd2_6', sentence: '[blank] mehr wir reden, [blank] besser verstehen wir uns.', answers: ['Je', 'desto'] },
                  { id: 'jd2_7', sentence: '[blank] später es wird, [blank] müder werde ich.', answers: ['Je', 'desto'] },
                  { id: 'jd2_8', sentence: '[blank] mehr du übst, [blank] einfacher ist es.', answers: ['Je', 'desto'] },
                  { id: 'jd2_9', sentence: '[blank] schöner das Wetter ist, [blank] mehr Leute sind draußen.', answers: ['Je', 'desto'] },
                  { id: 'jd2_10', sentence: '[blank] besser der Wein ist, [blank] teurer ist er.', answers: ['Je', 'desto'] },
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'adjectives',
        title: 'Adjectives',
        units: [
          {
            id: 'adj-endings',
            title: 'Adjective Endings',
            subunits: [
          {
            id: 'weak-declension',
            title: 'Weak Declension',
            tasks: [
              {
                id: 'wd1',
                title: 'After Definite Articles 1',
                description: 'Fill in the correct ending (-e or -en) after der, die, das.',
                type: 'fill-in',
                items: [
                  { id: 'wd1_1', sentence: 'Der alt[blank] Mann geht spazieren.', answers: ['e'] },
                  { id: 'wd1_2', sentence: 'Ich sehe die klein[blank] Katze.', answers: ['e'] },
                  { id: 'wd1_3', sentence: 'Das neu[blank] Auto ist schnell.', answers: ['e'] },
                  { id: 'wd1_4', sentence: 'Wir helfen den arm[blank] Leuten.', answers: ['en'] },
                  { id: 'wd1_5', sentence: 'Er kauft den teur[blank] Mantel.', answers: ['en'] },
                  { id: 'wd1_6', sentence: 'Die schön[blank] Blumen blühen.', answers: ['en'] },
                  { id: 'wd1_7', sentence: 'Ich gebe dem nett[blank] Kind einen Apfel.', answers: ['en'] },
                  { id: 'wd1_8', sentence: 'Das ist das Haus der alt[blank] Dame.', answers: ['en'] },
                  { id: 'wd1_9', sentence: 'Die jung[blank] Frau lacht.', answers: ['e'] },
                  { id: 'wd1_10', sentence: 'Wir suchen das groß[blank] Paket.', answers: ['e'] },
                ]
              },
              {
                id: 'wd2',
                title: 'After Definite Articles 2',
                description: 'More practice with weak declension.',
                type: 'fill-in',
                items: [
                  { id: 'wd2_1', sentence: 'Der hoh[blank] Berg ist weit weg.', answers: ['e'] },
                  { id: 'wd2_2', sentence: 'Ich mag die rot[blank] Tasche.', answers: ['e'] },
                  { id: 'wd2_3', sentence: 'Das kalt[blank] Wasser erfrischt.', answers: ['e'] },
                  { id: 'wd2_4', sentence: 'Er spricht mit dem fremd[blank] Mann.', answers: ['en'] },
                  { id: 'wd2_5', sentence: 'Die fleißig[blank] Schüler lernen viel.', answers: ['en'] },
                  { id: 'wd2_6', sentence: 'Ich kenne den berühmt[blank] Maler.', answers: ['en'] },
                  { id: 'wd2_7', sentence: 'Das ist die Meinung des klug[blank] Professors.', answers: ['en'] },
                  { id: 'wd2_8', sentence: 'Die dunkel[blank] Wolken bringen Regen.', answers: ['en'] },
                  { id: 'wd2_9', sentence: 'Wir besuchen die alt[blank] Kirche.', answers: ['e'] },
                  { id: 'wd2_10', sentence: 'Das grün[blank] Licht bedeutet "Gehen".', answers: ['e'] },
                ]
              },
              {
                id: 'wd3',
                title: 'After Definite Articles 3',
                description: 'Final practice for weak declension.',
                type: 'fill-in',
                items: [
                  { id: 'wd3_1', sentence: 'Der lang[blank] Weg führt zum Ziel.', answers: ['e'] },
                  { id: 'wd3_2', sentence: 'Sie trägt das weiß[blank] Kleid.', answers: ['e'] },
                  { id: 'wd3_3', sentence: 'Ich sehe die bunt[blank] Lichter.', answers: ['en'] },
                  { id: 'wd3_4', sentence: 'Er hilft der krank[blank] Frau.', answers: ['en'] },
                  { id: 'wd3_5', sentence: 'Wir essen den lecker[blank] Kuchen.', answers: ['en'] },
                  { id: 'wd3_6', sentence: 'Das ist der Name des neu[blank] Schülers.', answers: ['en'] },
                  { id: 'wd3_7', sentence: 'Die schwierig[blank] Aufgabe ist gelöst.', answers: ['e'] },
                  { id: 'wd3_8', sentence: 'Ich höre die laut[blank] Musik.', answers: ['e'] },
                  { id: 'wd3_9', sentence: 'Wir wohnen in dem gelb[blank] Haus.', answers: ['en'] },
                  { id: 'wd3_10', sentence: 'Die müd[blank] Kinder schlafen.', answers: ['en'] },
                ]
              }
            ]
          },
          {
            id: 'mixed-declension',
            title: 'Mixed Declension',
            tasks: [
              {
                id: 'md1',
                title: 'After Indefinite Articles 1',
                description: 'Fill in the correct ending after ein, mein, kein, etc.',
                type: 'fill-in',
                items: [
                  { id: 'md1_1', sentence: 'Ein alt[blank] Mann sitzt auf der Bank.', answers: ['er'] },
                  { id: 'md1_2', sentence: 'Ich habe eine klein[blank] Katze.', answers: ['e'] },
                  { id: 'md1_3', sentence: 'Das ist ein neu[blank] Auto.', answers: ['es'] },
                  { id: 'md1_4', sentence: 'Meine alt[blank] Freunde kommen zu Besuch.', answers: ['en'] },
                  { id: 'md1_5', sentence: 'Er kauft keinen teur[blank] Mantel.', answers: ['en'] },
                  { id: 'md1_6', sentence: 'Ich sehe ein schön[blank] Haus.', answers: ['es'] },
                  { id: 'md1_7', sentence: 'Wir helfen einer arm[blank] Frau.', answers: ['en'] },
                  { id: 'md1_8', sentence: 'Das ist mein best[blank] Freund.', answers: ['er'] },
                  { id: 'md1_9', sentence: 'Sie trägt ein weiß[blank] Hemd.', answers: ['es'] },
                  { id: 'md1_10', sentence: 'Ich brauche keine neu[blank] Schuhe.', answers: ['en'] },
                ]
              },
              {
                id: 'md2',
                title: 'After Indefinite Articles 2',
                description: 'More practice with mixed declension.',
                type: 'fill-in',
                items: [
                  { id: 'md2_1', sentence: 'Ein klug[blank] Kind fragt viel.', answers: ['es'] },
                  { id: 'md2_2', sentence: 'Ich kenne einen gut[blank] Arzt.', answers: ['en'] },
                  { id: 'md2_3', sentence: 'Deine neu[blank] Tasche gefällt mir.', answers: ['e'] },
                  { id: 'md2_4', sentence: 'Er wohnt in einem groß[blank] Haus.', answers: ['en'] },
                  { id: 'md2_5', sentence: 'Wir haben keine kalt[blank] Getränke mehr.', answers: ['en'] },
                  { id: 'md2_6', sentence: 'Ein hoh[blank] Baum steht im Garten.', answers: ['er'] },
                  { id: 'md2_7', sentence: 'Ich suche ein passend[blank] Geschenk.', answers: ['es'] },
                  { id: 'md2_8', sentence: 'Sie hilft ihrem alt[blank] Opa.', answers: ['en'] },
                  { id: 'md2_9', sentence: 'Ein lang[blank] Tag geht zu Ende.', answers: ['er'] },
                  { id: 'md2_10', sentence: 'Ich sehe eine interessant[blank] Sendung.', answers: ['e'] },
                ]
              },
              {
                id: 'md3',
                title: 'After Indefinite Articles 3',
                description: 'Final practice for mixed declension.',
                type: 'fill-in',
                items: [
                  { id: 'md3_1', sentence: 'Ein fleißig[blank] Student lernt viel.', answers: ['er'] },
                  { id: 'md3_2', sentence: 'Ich habe ein wichtig[blank] Treffen.', answers: ['es'] },
                  { id: 'md3_3', sentence: 'Meine klein[blank] Schwester spielt.', answers: ['e'] },
                  { id: 'md3_4', sentence: 'Er trinkt einen heiß[blank] Tee.', answers: ['en'] },
                  { id: 'md3_5', sentence: 'Wir besuchen unsere nett[blank] Nachbarn.', answers: ['en'] },
                  { id: 'md3_6', sentence: 'Ein dunkel[blank] Wald ist unheimlich.', answers: ['er'] },
                  { id: 'md3_7', sentence: 'Ich brauche ein scharf[blank] Messer.', answers: ['es'] },
                  { id: 'md3_8', sentence: 'Sie trägt eine rot[blank] Jacke.', answers: ['e'] },
                  { id: 'md3_9', sentence: 'Kein gut[blank] Mensch würde das tun.', answers: ['er'] },
                  { id: 'md3_10', sentence: 'Wir essen ein lecker[blank] Eis.', answers: ['es'] },
                ]
              }
            ]
          },
          {
            id: 'strong-declension',
            title: 'Strong Declension',
            tasks: [
              {
                id: 'sd1',
                title: 'No Article 1',
                description: 'Fill in the correct ending when there is no article.',
                type: 'fill-in',
                items: [
                  { id: 'sd1_1', sentence: 'Kalt[blank] Wasser ist gesund.', answers: ['es'] },
                  { id: 'sd1_2', sentence: 'Gut[blank] Wein schmeckt toll.', answers: ['er'] },
                  { id: 'sd1_3', sentence: 'Frisch[blank] Milch ist lecker.', answers: ['e'] },
                  { id: 'sd1_4', sentence: 'Klein[blank] Kinder brauchen Schlaf.', answers: ['e'] },
                  { id: 'sd1_5', sentence: 'Er trinkt heiß[blank] Kaffee.', answers: ['en'] },
                  { id: 'sd1_6', sentence: 'Wir essen spanisch[blank] Orangen.', answers: ['e'] },
                  { id: 'sd1_7', sentence: 'Mit viel[blank] Dank verabschiede ich mich.', answers: ['em'] },
                  { id: 'sd1_8', sentence: 'Das ist ein Glas rot[blank] Wein.', answers: ['en'] },
                  { id: 'sd1_9', sentence: 'Schön[blank] Wetter macht gute Laune.', answers: ['es'] },
                  { id: 'sd1_10', sentence: 'Ich mag italienisch[blank] Essen.', answers: ['es'] },
                ]
              },
              {
                id: 'sd2',
                title: 'No Article 2',
                description: 'More practice with strong declension.',
                type: 'fill-in',
                items: [
                  { id: 'sd2_1', sentence: 'Dunkel[blank] Bier ist kräftig.', answers: ['es'] },
                  { id: 'sd2_2', sentence: 'Süß[blank] Schokolade macht glücklich.', answers: ['e'] },
                  { id: 'sd2_3', sentence: 'Groß[blank] Hunde brauchen Auslauf.', answers: ['e'] },
                  { id: 'sd2_4', sentence: 'Er schreibt mit blau[blank] Tinte.', answers: ['er'] },
                  { id: 'sd2_5', sentence: 'Wir kaufen billig[blank] Brot.', answers: ['es'] },
                  { id: 'sd2_6', sentence: 'Alt[blank] Käse riecht stark.', answers: ['er'] },
                  { id: 'sd2_7', sentence: 'Ich höre gern klassisch[blank] Musik.', answers: ['e'] },
                  { id: 'sd2_8', sentence: 'Bei schlecht[blank] Wetter bleiben wir hier.', answers: ['em'] },
                  { id: 'sd2_9', sentence: 'Teur[blank] Autos sind oft schnell.', answers: ['e'] },
                  { id: 'sd2_10', sentence: 'Er hat groß[blank] Angst.', answers: ['e'] },
                ]
              },
              {
                id: 'sd3',
                title: 'No Article 3',
                description: 'Final practice for strong declension.',
                type: 'fill-in',
                items: [
                  { id: 'sd3_1', sentence: 'Stark[blank] Wind weht von Norden.', answers: ['er'] },
                  { id: 'sd3_2', sentence: 'Leicht[blank] Gepäck ist besser.', answers: ['es'] },
                  { id: 'sd3_3', sentence: 'Bunt[blank] Farben sind fröhlich.', answers: ['e'] },
                  { id: 'sd3_4', sentence: 'Er isst gern fett[blank] Fleisch.', answers: ['es'] },
                  { id: 'sd3_5', sentence: 'Wir trinken kalt[blank] Saft.', answers: ['en'] },
                  { id: 'sd3_6', sentence: 'Hoh[blank] Berge sind beeindruckend.', answers: ['e'] },
                  { id: 'sd3_7', sentence: 'Ich mag frisch[blank] Obst.', answers: ['es'] },
                  { id: 'sd3_8', sentence: 'Aus rein[blank] Gold ist die Kette.', answers: ['em'] },
                  { id: 'sd3_9', sentence: 'Lang[blank] Haare sind schön.', answers: ['e'] },
                  { id: 'sd3_10', sentence: 'Er hat gut[blank] Ideen.', answers: ['e'] },
                ]
              }
            ]
          },
          {
            id: 'adj-mix-declension',
            title: 'Mixed Practice',
            tasks: [
              {
                id: 'am1',
                title: 'All Declensions 1',
                description: 'Identify the declension type and fill in the ending.',
                type: 'fill-in',
                items: [
                  { id: 'am1_1', sentence: 'Der alt[blank] Baum (der) steht dort.', answers: ['e'] },
                  { id: 'am1_2', sentence: 'Ein alt[blank] Baum (der) steht dort.', answers: ['er'] },
                  { id: 'am1_3', sentence: 'Alt[blank] Bäume (die, pl.) stehen dort.', answers: ['e'] },
                  { id: 'am1_4', sentence: 'Ich sehe das neu[blank] Haus (das).', answers: ['e'] },
                  { id: 'am1_5', sentence: 'Ich sehe ein neu[blank] Haus (das).', answers: ['es'] },
                  { id: 'am1_6', sentence: 'Ich sehe neu[blank] Häuser (die, pl.).', answers: ['e'] },
                  { id: 'am1_7', sentence: 'Wir helfen der nett[blank] Frau (die).', answers: ['en'] },
                  { id: 'am1_8', sentence: 'Wir helfen einer nett[blank] Frau (die).', answers: ['en'] },
                  { id: 'am1_9', sentence: 'Nett[blank] Frauen (die, pl.) helfen uns.', answers: ['e'] },
                  { id: 'am1_10', sentence: 'Er kauft den teur[blank] Wagen (der).', answers: ['en'] },
                ]
              },
              {
                id: 'am2',
                title: 'All Declensions 2',
                description: 'Identify the declension type and fill in the ending.',
                type: 'fill-in',
                items: [
                  { id: 'am2_1', sentence: 'Das kalt[blank] Wasser (das) ist gut.', answers: ['e'] },
                  { id: 'am2_2', sentence: 'Kalt[blank] Wasser (das) ist gut.', answers: ['es'] },
                  { id: 'am2_3', sentence: 'Ein Glas kalt[blank] Wasser (das).', answers: ['es'] },
                  { id: 'am2_4', sentence: 'Die jung[blank] Leute (die, pl.) tanzen.', answers: ['en'] },
                  { id: 'am2_5', sentence: 'Jung[blank] Leute (die, pl.) tanzen.', answers: ['e'] },
                  { id: 'am2_6', sentence: 'Viele jung[blank] Leute (die, pl.) tanzen.', answers: ['e'] },
                  { id: 'am2_7', sentence: 'Er spricht mit seinem alt[blank] Vater (der).', answers: ['en'] },
                  { id: 'am2_8', sentence: 'Er spricht mit dem alt[blank] Vater (der).', answers: ['en'] },
                  { id: 'am2_9', sentence: 'Alt[blank] Väter (die, pl.) wissen viel.', answers: ['e'] },
                  { id: 'am2_10', sentence: 'Ich mag den süß[blank] Saft (der).', answers: ['en'] },
                ]
              },
              {
                id: 'am3',
                title: 'All Declensions 3',
                description: 'Identify the declension type and fill in the ending.',
                type: 'fill-in',
                items: [
                  { id: 'am3_1', sentence: 'Die schwierig[blank] Aufgabe (die) ist fertig.', answers: ['e'] },
                  { id: 'am3_2', sentence: 'Eine schwierig[blank] Aufgabe (die) ist fertig.', answers: ['e'] },
                  { id: 'am3_3', sentence: 'Schwierig[blank] Aufgaben (die, pl.) sind fertig.', answers: ['e'] },
                  { id: 'am3_4', sentence: 'Das ist der Name des neu[blank] Lehrers (der).', answers: ['en'] },
                  { id: 'am3_5', sentence: 'Das ist der Name eines neu[blank] Lehrers (der).', answers: ['en'] },
                  { id: 'am3_6', sentence: 'Neu[blank] Lehrer (die, pl.) kommen morgen.', answers: ['e'] },
                  { id: 'am3_7', sentence: 'Ich trinke den heiß[blank] Tee (der).', answers: ['en'] },
                  { id: 'am3_8', sentence: 'Ich trinke einen heiß[blank] Tee (der).', answers: ['en'] },
                  { id: 'am3_9', sentence: 'Heiß[blank] Tee (der) ist gesund.', answers: ['er'] },
                  { id: 'am3_10', sentence: 'Wir suchen das klein[blank] Kind (das).', answers: ['e'] },
                ]
              },
              {
                id: 'am4',
                title: 'Ultimate Declension Challenge',
                description: 'Mixed practice covering all three declension types (Weak, Mixed, Strong).',
                type: 'fill-in',
                items: [
                  { id: 'am4_1', sentence: 'Ich trinke gern kalt[blank] Wasser.', answers: ['es'] },
                  { id: 'am4_2', sentence: 'Der alt[blank] Mann hilft mir.', answers: ['e'] },
                  { id: 'am4_3', sentence: 'Ein nett[blank] Kollege hat angerufen.', answers: ['er'] },
                  { id: 'am4_4', sentence: 'Wir sehen die schön[blank] Bilder.', answers: ['en'] },
                  { id: 'am4_5', sentence: 'Er kauft teur[blank] Schuhe.', answers: ['e'] },
                  { id: 'am4_6', sentence: 'Das ist ein groß[blank] Problem.', answers: ['es'] },
                  { id: 'am4_7', sentence: 'Ich mag italienisch[blank] Wein.', answers: ['er'] },
                  { id: 'am4_8', sentence: 'Die klein[blank] Kinder spielen.', answers: ['en'] },
                  { id: 'am4_9', sentence: 'Ein gut[blank] Freund ist wichtig.', answers: ['er'] },
                  { id: 'am4_10', sentence: 'Wir essen den lecker[blank] Kuchen.', answers: ['en'] },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'comp-super',
        title: 'Comparative & Superlative',
        subunits: [
          {
            id: 'comparative',
            title: 'Comparative',
            tasks: [
              {
                id: 'c1',
                title: 'Basic Comparatives 1',
                description: 'Fill in the comparative form of the adjective in brackets.',
                type: 'fill-in',
                items: [
                  { id: 'c1_1', sentence: 'Mein Bruder ist [blank] (alt) als ich.', answers: ['älter'] },
                  { id: 'c1_2', sentence: 'Ein Auto ist [blank] (schnell) als ein Fahrrad.', answers: ['schneller'] },
                  { id: 'c1_3', sentence: 'Dieser Berg ist [blank] (hoch) als der andere.', answers: ['höher'] },
                  { id: 'c1_4', sentence: 'Ich finde Mathe [blank] (schwer) als Englisch.', answers: ['schwerer'] },
                  { id: 'c1_5', sentence: 'Der Sommer ist [blank] (warm) als der Frühling.', answers: ['wärmer'] },
                  { id: 'c1_6', sentence: 'Dieses Buch ist [blank] (interessant) als das letzte.', answers: ['interessanter'] },
                  { id: 'c1_7', sentence: 'Er läuft [blank] (schnell) als sein Freund.', answers: ['schneller'] },
                  { id: 'c1_8', sentence: 'Meine Tasche ist [blank] (groß) als deine.', answers: ['größer'] },
                  { id: 'c1_9', sentence: 'Heute ist das Wetter [blank] (gut) als gestern.', answers: ['besser'] },
                  { id: 'c1_10', sentence: 'Ich esse [blank] (gern) Pizza als Pasta.', answers: ['lieber'] },
                ]
              },
              {
                id: 'c2',
                title: 'Basic Comparatives 2',
                description: 'More practice with comparatives.',
                type: 'fill-in',
                items: [
                  { id: 'c2_1', sentence: 'Der Zug ist [blank] (bequem) als der Bus.', answers: ['bequemer'] },
                  { id: 'c2_2', sentence: 'Berlin ist [blank] (groß) als München.', answers: ['größer'] },
                  { id: 'c2_3', sentence: 'Ein Elefant ist [blank] (stark) als ein Löwe.', answers: ['stärker'] },
                  { id: 'c2_4', sentence: 'Ich bin [blank] (jung) als meine Schwester.', answers: ['jünger'] },
                  { id: 'c2_5', sentence: 'Das neue Handy ist [blank] (teuer) als das alte.', answers: ['teurer'] },
                  { id: 'c2_6', sentence: 'Er spricht [blank] (laut) als sie.', answers: ['lauter'] },
                  { id: 'c2_7', sentence: 'Dieser Weg ist [blank] (kurz) als der andere.', answers: ['kürzer'] },
                  { id: 'c2_8', sentence: 'Ich trinke [blank] (viel) Kaffee als Tee.', answers: ['mehr'] },
                  { id: 'c2_9', sentence: 'Das Wasser ist hier [blank] (tief) als dort.', answers: ['tiefer'] },
                  { id: 'c2_10', sentence: 'Sie ist [blank] (fleißig) als ihr Bruder.', answers: ['fleißiger'] },
                ]
              },
              {
                id: 'c3',
                title: 'Irregular Comparatives',
                description: 'Focus on irregular and umlaut comparatives.',
                type: 'fill-in',
                items: [
                  { id: 'c3_1', sentence: 'Gut -> [blank]', answers: ['besser'] },
                  { id: 'c3_2', sentence: 'Viel -> [blank]', answers: ['mehr'] },
                  { id: 'c3_3', sentence: 'Gern -> [blank]', answers: ['lieber'] },
                  { id: 'c3_4', sentence: 'Hoch -> [blank]', answers: ['höher'] },
                  { id: 'c3_5', sentence: 'Nah -> [blank]', answers: ['näher'] },
                  { id: 'c3_6', sentence: 'Groß -> [blank]', answers: ['größer'] },
                  { id: 'c3_7', sentence: 'Alt -> [blank]', answers: ['älter'] },
                  { id: 'c3_8', sentence: 'Jung -> [blank]', answers: ['jünger'] },
                  { id: 'c3_9', sentence: 'Kalt -> [blank]', answers: ['kälter'] },
                  { id: 'c3_10', sentence: 'Lang -> [blank]', answers: ['länger'] },
                ]
              }
            ]
          },
          {
            id: 'superlative',
            title: 'Superlative',
            tasks: [
              {
                id: 's1',
                title: 'Basic Superlatives 1',
                description: 'Fill in the superlative form (am ...-sten).',
                type: 'fill-in',
                items: [
                  { id: 's1_1', sentence: 'Dieser Berg ist [blank] (hoch).', answers: ['am höchsten'] },
                  { id: 's1_2', sentence: 'Er läuft [blank] (schnell).', answers: ['am schnellsten'] },
                  { id: 's1_3', sentence: 'Der Mount Everest ist der [blank] (hoch) Berg.', answers: ['höchste'] },
                  { id: 's1_4', sentence: 'Ich esse Pizza [blank] (gern).', answers: ['am liebsten'] },
                  { id: 's1_5', sentence: 'Heute ist der [blank] (warm) Tag des Jahres.', answers: ['wärmste'] },
                  { id: 's1_6', sentence: 'Dieses Buch ist [blank] (interessant).', answers: ['am interessantesten'] },
                  { id: 's1_7', sentence: 'Wer ist der [blank] (alt) Schüler?', answers: ['älteste'] },
                  { id: 's1_8', sentence: 'Im Winter ist es [blank] (kalt).', answers: ['am kältesten'] },
                  { id: 's1_9', sentence: 'Er spielt [blank] (gut) Fußball.', answers: ['am besten'] },
                  { id: 's1_10', sentence: 'Das ist das [blank] (teuer) Auto.', answers: ['teuerste'] },
                ]
              },
              {
                id: 's2',
                title: 'Basic Superlatives 2',
                description: 'More practice with superlatives.',
                type: 'fill-in',
                items: [
                  { id: 's2_1', sentence: 'Der Zug ist [blank] (bequem).', answers: ['am bequemsten'] },
                  { id: 's2_2', sentence: 'Sie ist die [blank] (jung) in der Klasse.', answers: ['jüngste'] },
                  { id: 's2_3', sentence: 'Dieses Geschenk ist [blank] (schön).', answers: ['am schönsten'] },
                  { id: 's2_4', sentence: 'Er trinkt [blank] (viel) Wasser.', answers: ['am meisten'] },
                  { id: 's2_5', sentence: 'Das war die [blank] (schwer) Aufgabe.', answers: ['schwerste'] },
                  { id: 's2_6', sentence: 'Im Sommer sind die Tage [blank] (lang).', answers: ['am längsten'] },
                  { id: 's2_7', sentence: 'Wer kann [blank] (laut) schreien?', answers: ['am lautesten'] },
                  { id: 's2_8', sentence: 'Das ist der [blank] (kurz) Weg.', answers: ['kürzeste'] },
                  { id: 's2_9', sentence: 'Dieses Haus ist [blank] (alt).', answers: ['am ältesten'] },
                  { id: 's2_10', sentence: 'Sie lernt [blank] (fleißig).', answers: ['am fleißigsten'] },
                ]
              },
              {
                id: 's3',
                title: 'Irregular Superlatives',
                description: 'Focus on irregular and umlaut superlatives.',
                type: 'fill-in',
                items: [
                  { id: 's3_1', sentence: 'Gut -> am [blank]', answers: ['besten'] },
                  { id: 's3_2', sentence: 'Viel -> am [blank]', answers: ['meisten'] },
                  { id: 's3_3', sentence: 'Gern -> am [blank]', answers: ['liebsten'] },
                  { id: 's3_4', sentence: 'Hoch -> am [blank]', answers: ['höchsten'] },
                  { id: 's3_5', sentence: 'Nah -> am [blank]', answers: ['nächsten'] },
                  { id: 's3_6', sentence: 'Groß -> am [blank]', answers: ['größten'] },
                  { id: 's3_7', sentence: 'Alt -> am [blank]', answers: ['ältesten'] },
                  { id: 's3_8', sentence: 'Jung -> am [blank]', answers: ['jüngsten'] },
                  { id: 's3_9', sentence: 'Kalt -> am [blank]', answers: ['kältesten'] },
                  { id: 's3_10', sentence: 'Lang -> am [blank]', answers: ['längsten'] },
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
