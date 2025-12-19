import { Topic, SlideContent } from '../types';

// --- SVG ASSET GENERATOR ---
const svg = (content: string, bg: string) => 
  `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style="background:${bg};width:100%;height:100%;">${content}</svg>`)}`;

// HOGWARTS WINTER ASSETS
const HP_BG = '#0f172a';
const HP_DEFS = `<defs><filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><pattern id="stars" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="#fff" opacity="0.5"/></pattern></defs><rect width="100%" height="100%" fill="#0f172a"/><rect width="100%" height="100%" fill="url(#stars)"/>`;

// Images
const IMG_CASTLE = svg(`${HP_DEFS}<path d="M100 500 L100 300 L200 200 L300 300 L300 500 Z" fill="#1e293b" stroke="#94a3b8"/><path d="M400 500 L400 150 L500 100 L600 150 L600 500 Z" fill="#1e293b" stroke="#94a3b8"/><circle cx="500" cy="250" r="30" fill="#fcd34d" filter="url(#glow)"/><rect x="0" y="500" width="800" height="100" fill="#f8fafc"/>`, HP_BG);
const IMG_SNITCH = svg(`${HP_DEFS}<circle cx="400" cy="300" r="30" fill="url(#goldGrad)" stroke="#d4af37" stroke-width="2" filter="url(#glow)"/><path d="M370 300 Q200 100 250 50" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="5,5"/><path d="M430 300 Q600 100 550 50" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="5,5"/><defs><radialGradient id="goldGrad"><stop offset="0%" stop-color="#fcd34d"/><stop offset="100%" stop-color="#b45309"/></radialGradient></defs>`, HP_BG);
const IMG_POTION = svg(`${HP_DEFS}<path d="M350 200 L350 150 L450 150 L450 200 Q450 250 500 300 L500 450 Q500 500 400 500 Q300 500 300 450 L300 300 Q350 250 350 200" fill="#10b981" opacity="0.8" stroke="#ecfdf5" stroke-width="2"/><ellipse cx="400" cy="350" rx="40" ry="10" fill="#34d399" filter="url(#glow)"/><text x="400" y="550" font-family="serif" font-size="40" fill="#10b981" text-anchor="middle">POLYJUICE</text>`, HP_BG);
const IMG_WAND = svg(`${HP_DEFS}<path d="M100 500 L700 100" stroke="#78350f" stroke-width="10" stroke-linecap="round"/><circle cx="700" cy="100" r="10" fill="#fff" filter="url(#glow)"/><path d="M700 100 L750 50" stroke="#fff" stroke-width="2" filter="url(#glow)"/>`, HP_BG);
const IMG_BROOM = svg(`${HP_DEFS}<path d="M100 300 L600 250" stroke="#92400e" stroke-width="8"/><path d="M600 250 L750 200 L750 300 L600 250" fill="#b45309"/><text x="400" y="400" font-family="serif" font-size="50" fill="#d4af37" text-anchor="middle">NIMBUS 2000</text>`, HP_BG);
const IMG_SCROLL = svg(`${HP_DEFS}<rect x="150" y="100" width="500" height="400" fill="#fef3c7"/><text x="400" y="200" font-family="serif" font-size="30" fill="#78350f" text-anchor="middle">THE DAILY PROPHET</text><rect x="200" y="250" width="400" height="200" fill="none" stroke="#78350f"/>`, HP_BG);
const IMG_OWL = svg(`${HP_DEFS}<circle cx="400" cy="300" r="100" fill="#e2e8f0"/><circle cx="360" cy="280" r="20" fill="#0f172a"/><circle cx="440" cy="280" r="20" fill="#0f172a"/><path d="M400 320 L380 350 L420 350 Z" fill="#fbbf24"/><text x="400" y="500" font-family="serif" font-size="40" fill="#fff" text-anchor="middle">HEDWIG</text>`, HP_BG);

export const TOPICS: Topic[] = [
  {
    id: 'topic-1',
    title: '6.2 Present Perfect: The Battle of Hogwarts',
    theme: 'hp-gryffindor',
    slides: [
      {
        id: '1-1-a',
        type: 'intro',
        title: 'Lead-in: The Aftermath',
        imageUrl: IMG_CASTLE, 
        leadText: 'Look at the heroes.',
        bulletPoints: [
           { lang: 'en', label: 'Observe', text: 'Harry is holding the Elder Wand. Neville is covered in dust and soot.' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-1-1', type: 'quiz', title: 'Quick Check 1', question: 'Harry is holding the wand. The battle...', options: ['is happening', 'is finished'], correctAnswer: 1 },
      { id: 'q-1-2', type: 'quiz', title: 'Quick Check 2', question: 'Neville is dirty because he...', options: ['has been fighting', 'has fought'], correctAnswer: 0, explanation: 'Evidence (dirt) suggests recent continuous activity.' },
      { id: 'q-1-3', type: 'quiz', title: 'Quick Check 3', question: 'Is the castle safe now?', options: ['Yes', 'No'], correctAnswer: 0 },

      {
        id: '1-1-b',
        type: 'concept',
        title: 'Scenario A: Harry',
        imageUrl: IMG_WAND,
        leadText: 'Harry has **defeated** Voldemort.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'The Dark Lord is gone.' },
          { lang: 'en', label: 'Result', text: 'The war is over. Result achieved.' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-2-1', type: 'quiz', title: 'Concept Check', question: 'Harry has defeated him. Focus is on:', options: ['The duration of the duel', 'The result (Victory)'], correctAnswer: 1 },
      { id: 'q-2-2', type: 'quiz', title: 'Form Check', question: 'He ____ Voldemort.', options: ['has defeated', 'have defeated'], correctAnswer: 0 },
      { id: 'q-2-3', type: 'quiz', title: 'Context Check', question: 'Can Voldemort come back?', options: ['No, he is defeated.', 'Maybe.'], correctAnswer: 0 },

      {
        id: '1-1-c',
        type: 'concept',
        title: 'Scenario B: Neville',
        imageUrl: IMG_CASTLE, 
        leadText: 'Neville has **been fighting** Death Eaters.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'He is out of breath and dirty.' },
          { lang: 'en', label: 'Activity', text: 'We see the evidence of the long fight.' }
        ]
      },
      // QUIZ BLOCK 3
      { id: 'q-3-1', type: 'quiz', title: 'Concept Check', question: 'Why is Neville dirty?', options: ['He has been fighting.', 'He has fought.'], correctAnswer: 0 },
      { id: 'q-3-2', type: 'quiz', title: 'Grammar Check', question: 'Select the Continuous form.', options: ['Has fought', 'Has been fighting'], correctAnswer: 1 },
      { id: 'q-3-3', type: 'quiz', title: 'Situation', question: 'Neville is still holding his sword. The action feels...', options: ['Recent/Vivid', 'Old/Distant'], correctAnswer: 0 },

      {
        id: '1-6-a',
        type: 'timeline',
        title: 'Timeline: Continuous Spell Casting',
        leadText: 'Present Perfect **Continuous**',
        visualContext: 'The Duel',
        visualData: [
            { label: 'Expelliarmus!', subLabel: 'Start', percentage: 10, type: 'start', color: 'red' },
            { label: 'Clashing', subLabel: 'Sparks Flying', percentage: 50, type: 'range', color: 'gold' },
            { label: 'NOW', subLabel: 'Exhausted', percentage: 90, type: 'end', color: 'green' }
        ]
      },
       // QUIZ BLOCK 4
       { id: 'q-4-1', type: 'quiz', title: 'Timeline Check', question: 'Does the timeline emphasize the END or the PROCESS?', options: ['End', 'Process'], correctAnswer: 1 },
       { id: 'q-4-2', type: 'quiz', title: 'Usage', question: 'Use this for:', options: ['I have broken my wand.', 'I have been practicing spells.'], correctAnswer: 1 },
       { id: 'q-4-3', type: 'quiz', title: 'Gap Fill', question: 'She ____ potions all morning.', options: ['has brewed', 'has been brewing'], correctAnswer: 1 },

       {
        id: '1-7-c',
        type: 'concept',
        title: 'Example: Quidditch',
        imageUrl: IMG_SNITCH,
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: 'Harry has **been chasing** the Snitch for 20 minutes. (Still flying/Just stopped)' },
          { lang: 'en', label: 'Simple', text: 'Harry has **caught** the Snitch. (Game Over)' }
        ]
      },
      // QUIZ BLOCK 5
      { id: 'q-5-1', type: 'quiz', title: 'Quidditch Test', question: 'The game is finished. Harry...', options: ['has caught it', 'has been catching it'], correctAnswer: 0 },
      { id: 'q-5-2', type: 'quiz', title: 'Quidditch Test', question: 'Harry is sweating. He...', options: ['has flown', 'has been flying'], correctAnswer: 1 },
      { id: 'q-5-3', type: 'quiz', title: 'Quantity', question: 'Harry ____ 150 points.', options: ['has scored', 'has been scoring'], correctAnswer: 0, explanation: 'Simple for quantities.' }
    ]
  },
  {
    id: 'topic-2',
    title: '9.2 Modals of Deduction: Potions Class',
    theme: 'hp-slytherin',
    slides: [
      {
        id: '2-1',
        type: 'intro',
        title: 'Lead-in: Snape\'s Dungeon',
        imageUrl: IMG_POTION,
        leadText: 'Analyze the cauldron.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'The potion is bright gold and smells like lucky socks.' },
          { lang: 'en', label: 'Deduction', text: 'It MUST be Felix Felicis. It CAN\'T be Polyjuice Potion.' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-2-1-1', type: 'quiz', title: 'Deduction 1', question: 'We are 100% sure it is Felix Felicis. We use:', options: ['Must', 'Might'], correctAnswer: 0 },
      { id: 'q-2-1-2', type: 'quiz', title: 'Deduction 2', question: 'Polyjuice looks like mud. This is gold. It ____ be Polyjuice.', options: ["can't", "mustn't"], correctAnswer: 0 },
      { id: 'q-2-1-3', type: 'quiz', title: 'Certainty', question: 'How sure is Snape?', options: ['Very sure', 'Guessing'], correctAnswer: 0 },

      {
        id: '2-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_POTION,
        bulletPoints: [
          { lang: 'en', label: 'MUST', text: '90-100% Sure. "It MUST be magic."' },
          { lang: 'en', label: 'CAN\'T', text: '90-100% Impossible. "He CAN\'T be a Muggle."' },
          { lang: 'en', label: 'MIGHT/COULD', text: '50% Possible. "It MIGHT explode."' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-2-2-1', type: 'quiz', title: 'Logic Check', question: 'Draco is flying a broom. He ____ be a wizard.', options: ['must', 'might'], correctAnswer: 0 },
      { id: 'q-2-2-2', type: 'quiz', title: 'Logic Check', question: 'Ron is eating slugs. The spell ____ backfired.', options: ['must have', "can't have"], correctAnswer: 0 },
      { id: 'q-2-2-3', type: 'quiz', title: 'Logic Check', question: 'Where is Hermione? She ____ be in the library.', options: ['might', 'can'], correctAnswer: 0 },

      {
        id: '2-6-a',
        type: 'timeline',
        title: 'Certainty Scale',
        leadText: 'Probability of Truth',
        visualContext: 'Veritaserum Level',
        visualData: [
            { label: "CAN'T", subLabel: 'Impossible', percentage: 10, type: 'point', color: 'red' },
            { label: "MIGHT", subLabel: 'Perhaps', percentage: 50, type: 'point', color: 'purple' },
            { label: "MUST", subLabel: 'Certain', percentage: 90, type: 'point', color: 'green' }
        ]
      },
      // QUIZ BLOCK 3
      { id: 'q-2-3-1', type: 'quiz', title: 'Scale Test', question: 'Which is stronger?', options: ['Must', 'Might'], correctAnswer: 0 },
      { id: 'q-2-3-2', type: 'quiz', title: 'Scale Test', question: 'Which means impossible?', options: ["Don't have to", "Can't"], correctAnswer: 1 },
      { id: 'q-2-3-3', type: 'quiz', title: 'Application', question: 'Harry has a scar. He ____ be the Chosen One.', options: ['must', 'could'], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-3',
    title: '10.2 Articles: Magical Objects',
    theme: 'hp-ravenclaw',
    slides: [
      {
        id: '3-1',
        type: 'intro',
        title: 'Lead-in: Diagon Alley',
        imageUrl: IMG_WAND,
        leadText: 'Shopping for school.',
        bulletPoints: [
          { lang: 'en', label: 'General', text: '"I need A wand." (Any wand will do... at first.)' },
          { lang: 'en', label: 'Specific', text: '"The wand chooses the wizard." (THAT specific wand.)' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-3-1-1', type: 'quiz', title: 'Article Check', question: '"I want to buy ____ owl."', options: ['an', 'the'], correctAnswer: 0 },
      { id: 'q-3-1-2', type: 'quiz', title: 'Article Check', question: '"Look at ____ moon!" (Only one moon)', options: ['a', 'the'], correctAnswer: 1 },
      { id: 'q-3-1-3', type: 'quiz', title: 'Concept', question: 'Do we say "The Hogwarts"?', options: ['Yes', 'No'], correctAnswer: 1 },

      {
        id: '3-6-b',
        type: 'concept',
        title: 'Magical Rules',
        imageUrl: IMG_OWL,
        bulletPoints: [
            { lang: 'en', label: 'First Mention', text: 'I saw A troll. THE troll was ugly.' },
            { lang: 'en', label: 'Unique', text: 'THE Daily Prophet. THE Minister of Magic.' },
            { lang: 'en', label: 'No Article', text: '(-) Dumbledore, (-) Quidditch, (-) Potions.' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-3-2-1', type: 'quiz', title: 'Grammar', question: 'Harry plays ____ Quidditch.', options: ['the', '(-)'], correctAnswer: 1 },
      { id: 'q-3-2-2', type: 'quiz', title: 'Grammar', question: 'She reads ____ Daily Prophet.', options: ['the', 'a'], correctAnswer: 0 },
      { id: 'q-3-2-3', type: 'quiz', title: 'Grammar', question: 'He is ____ wizard.', options: ['a', 'the'], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-4',
    title: '7.1 Used to/Would: History of Magic',
    theme: 'hp-hufflepuff',
    slides: [
      {
        id: '4-1',
        type: 'intro',
        title: 'Lead-in: The Founders',
        imageUrl: IMG_CASTLE,
        leadText: 'Past vs Present Hogwarts.',
        bulletPoints: [
            { lang: 'en', label: 'Habit', text: '"Godric Gryffindor USED TO duel Muggles."' },
            { lang: 'en', label: 'Routine', text: '"The founders WOULD eat together in the Great Hall."' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-4-1-1', type: 'quiz', title: 'History Check', question: 'Does Gryffindor duel Muggles now?', options: ['Yes', 'No'], correctAnswer: 1 },
      { id: 'q-4-1-2', type: 'quiz', title: 'Form', question: 'Use "Would" for...', options: ['States', 'Repeated Actions'], correctAnswer: 1 },
      { id: 'q-4-1-3', type: 'quiz', title: 'Form', question: 'Use "Used to" for...', options: ['Everything past', 'Habits & States'], correctAnswer: 1 },

      {
        id: '4-2',
        type: 'concept',
        title: 'States vs Actions',
        imageUrl: IMG_SCROLL,
        bulletPoints: [
          { lang: 'en', label: 'Used to (States)', text: 'Hogwarts USED TO BE smaller. (NOT would be)' },
          { lang: 'en', label: 'Used to (Possession)', text: 'Harry USED TO HAVE a cupboard. (NOT would have)' },
          { lang: 'en', label: 'Would (Actions)', text: 'Dobby WOULD BANG his head on the wall.' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-4-2-1', type: 'quiz', title: 'Select Correct', question: '"Salazar ____ be a founder."', options: ['used to', 'would'], correctAnswer: 0, explanation: '"Be" is a state.' },
      { id: 'q-4-2-2', type: 'quiz', title: 'Select Correct', question: '"They ____ fly every day."', options: ['used to / would', 'only used to'], correctAnswer: 0 },
      { id: 'q-4-2-3', type: 'quiz', title: 'Transformation', question: '"I didn\'t use to like Snape."', options: ['Correct', 'Incorrect'], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-5',
    title: '9.1 Comparatives: Broomsticks',
    theme: 'hp-winter',
    slides: [
      {
        id: '5-1',
        type: 'intro',
        title: 'Lead-in: Quality Quidditch Supplies',
        imageUrl: IMG_BROOM,
        leadText: 'Nimbus vs Firebolt',
        bulletPoints: [
          { lang: 'en', label: 'Comparison', text: 'The Firebolt is FASTER THAN the Nimbus 2000.' },
          { lang: 'en', label: 'Superlative', text: 'The Firebolt is THE FASTEST broom in the world.' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-5-1-1', type: 'quiz', title: 'Speed Check', question: 'Comparing two brooms. Use:', options: ['Fastest', 'Faster'], correctAnswer: 1 },
      { id: 'q-5-1-2', type: 'quiz', title: 'Best Check', question: 'Comparing one to all. Use:', options: ['Superlative', 'Comparative'], correctAnswer: 0 },
      { id: 'q-5-1-3', type: 'quiz', title: 'Grammar', question: 'The Firebolt is ____ expensive.', options: ['more', 'most'], correctAnswer: 0 },

      {
        id: '5-6-a',
        type: 'timeline',
        title: 'Speed Velocity',
        leadText: 'Broom Performance',
        visualContext: 'Acceleration',
        visualData: [
            { label: 'Cleansweep', subLabel: 'Slow', percentage: 20, type: 'start', color: 'blue' },
            { label: 'Nimbus', subLabel: 'Faster', percentage: 50, type: 'point', color: 'orange' },
            { label: 'Firebolt', subLabel: 'The Fastest', percentage: 80, type: 'end', color: 'gold' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-5-2-1', type: 'quiz', title: 'Modifying', question: 'The Firebolt is ____ faster than the Cleansweep.', options: ['much', 'many'], correctAnswer: 0 },
      { id: 'q-5-2-2', type: 'quiz', title: 'Structure', question: 'Ron is not ____ good as Harry.', options: ['as', 'than'], correctAnswer: 0 },
      { id: 'q-5-2-3', type: 'quiz', title: 'Irregular', question: 'The team played ____ than last year.', options: ['worse', 'badder'], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-6',
    title: '8.2 Unreal Conditionals: Ministry Dreams',
    theme: 'hp-gryffindor',
    slides: [
      {
        id: '6-1',
        type: 'intro',
        title: 'Lead-in: The Mirror of Erised',
        imageUrl: IMG_CASTLE,
        leadText: 'Desires of the heart.',
        bulletPoints: [
            { lang: 'en', label: 'Ron\'s Dream', text: '"If I WERE wealthy, I WOULD BUY a new wand."' },
            { lang: 'en', label: 'Reality', text: 'Ron is poor. He has a broken wand.' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-6-1-1', type: 'quiz', title: 'Reality Check', question: 'Is Ron wealthy?', options: ['Yes', 'No'], correctAnswer: 1 },
      { id: 'q-6-1-2', type: 'quiz', title: 'Grammar', question: 'If I ____ wealthy...', options: ['was', 'were'], correctAnswer: 1, explanation: 'Subjunctive "were" is formal/correct.' },
      { id: 'q-6-1-3', type: 'quiz', title: 'Result', question: '...I ____ buy a wand.', options: ['will', 'would'], correctAnswer: 1 },

      {
        id: '6-2',
        type: 'concept',
        title: 'Structure',
        imageUrl: IMG_SCROLL,
        bulletPoints: [
            { lang: 'en', label: 'Condition', text: 'IF + Past Simple (If I KNEW magic...)' },
            { lang: 'en', label: 'Result', text: 'WOULD + Infinitive (...I WOULD FLY.)' },
            { lang: 'en', label: 'Note', text: 'We use PAST tense to show distance from reality, not past time.' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-6-2-1', type: 'quiz', title: 'Translation', question: '"If I had a dragon..." -> Do I have one?', options: ['Yes', 'No'], correctAnswer: 1 },
      { id: 'q-6-2-2', type: 'quiz', title: 'Gap Fill', question: 'If Hermione ____ here, she would help.', options: ['were', 'is'], correctAnswer: 0 },
      { id: 'q-6-2-3', type: 'quiz', title: 'Advice', question: 'If I were you, I ____ enter the forest.', options: ["wouldn't", "won't"], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-7',
    title: '7.2 Questions: Rita Skeeter',
    theme: 'hp-slytherin',
    slides: [
      {
        id: '7-1',
        type: 'intro',
        title: 'Lead-in: The Interview',
        imageUrl: IMG_SCROLL,
        leadText: 'Rita Skeeter asks questions.',
        bulletPoints: [
          { lang: 'en', label: 'Object', text: '"Who DID you defeat?" (Voldemort).' },
          { lang: 'en', label: 'Subject', text: '"Who DEFEATED Voldemort?" (Harry).' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-7-1-1', type: 'quiz', title: 'Identify', question: '"Who saw you?" -> Asking about:', options: ['Subject', 'Object'], correctAnswer: 0 },
      { id: 'q-7-1-2', type: 'quiz', title: 'Identify', question: '"Who did you see?" -> Asking about:', options: ['Subject', 'Object'], correctAnswer: 1 },
      { id: 'q-7-1-3', type: 'quiz', title: 'Grammar', question: 'Who ____ the Triwizard Cup?', options: ['won', 'did win'], correctAnswer: 0 },

      {
        id: '7-2',
        type: 'concept',
        title: 'Indirect Questions',
        imageUrl: IMG_OWL,
        bulletPoints: [
          { lang: 'en', label: 'Polite', text: '"Could you tell me where Dumbledore IS?"' },
          { lang: 'en', label: 'Rule', text: 'No auxiliary (do/did). Word order is S+V.' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-7-2-1', type: 'quiz', title: 'Transformation', question: '"Where is Harry?" -> Do you know where...', options: ['Harry is', 'is Harry'], correctAnswer: 0 },
      { id: 'q-7-2-2', type: 'quiz', title: 'Transformation', question: '"Does he fly?" -> Can you tell me if...', options: ['he flies', 'does he fly'], correctAnswer: 0 },
      { id: 'q-7-2-3', type: 'quiz', title: 'Error Spot', question: 'Do you know who did do it?', options: ['Correct', 'Incorrect'], correctAnswer: 1 }
    ]
  },
  {
    id: 'topic-8',
    title: '8.1 Real Conditionals: O.W.L.s',
    theme: 'hp-ravenclaw',
    slides: [
      {
        id: '8-1',
        type: 'intro',
        title: 'Lead-in: Exam Rules',
        imageUrl: IMG_SCROLL,
        leadText: 'Facts vs Future.',
        bulletPoints: [
            { lang: 'en', label: 'Zero (Fact)', text: '"If you CAST Lumos, the wand LIGHTS up."' },
            { lang: 'en', label: 'First (Future)', text: '"If I STUDY hard, I WILL PASS the O.W.L.s."' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-8-1-1', type: 'quiz', title: 'Identify', question: '"If I drop the glass, it breaks."', options: ['Zero', 'First'], correctAnswer: 0 },
      { id: 'q-8-1-2', type: 'quiz', title: 'Identify', question: '"If he comes, I will go."', options: ['Zero', 'First'], correctAnswer: 1 },
      { id: 'q-8-1-3', type: 'quiz', title: 'Grammar', question: 'If it rains, we ____ wet.', options: ['get', 'will get'], correctAnswer: 0, explanation: 'Fact = Present.' },

      {
        id: '8-6-b',
        type: 'concept',
        title: 'Unless',
        imageUrl: IMG_POTION,
        bulletPoints: [
            { lang: 'en', label: 'Meaning', text: 'Unless = If not.' },
            { lang: 'en', label: 'Example', text: '"You won\'t pass UNLESS you study." (You won\'t pass if you don\'t study.)' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-8-2-1', type: 'quiz', title: 'Rewrite', question: '"If you don\'t run, you are late."', options: ['Unless you run...', 'Unless you don\'t run...'], correctAnswer: 0 },
      { id: 'q-8-2-2', type: 'quiz', title: 'Logic', question: '"Unless he uses magic, he will lose." ->', options: ['He must use magic to win.', 'He must not use magic.'], correctAnswer: 0 },
      { id: 'q-8-2-3', type: 'quiz', title: 'Gap Fill', question: 'I will stay ____ you need me.', options: ['if', 'unless'], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-9',
    title: '11.2 Should/Shouldn\'t have: Quidditch Fail',
    theme: 'hp-winter',
    slides: [
      {
        id: '9-1',
        type: 'intro',
        title: 'Lead-in: The Lost Match',
        imageUrl: IMG_SNITCH,
        leadText: 'Wood is angry.',
        bulletPoints: [
          { lang: 'en', label: 'Fact', text: 'Harry missed the Snitch. Gryffindor lost.' },
          { lang: 'en', label: 'Regret', text: '"You SHOULD HAVE CAUGHT it, Potter!"' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-9-1-1', type: 'quiz', title: 'Fact Check', question: 'Did Harry catch it?', options: ['Yes', 'No'], correctAnswer: 1 },
      { id: 'q-9-1-2', type: 'quiz', title: 'Grammar', question: 'You ____ have stopped.', options: ['should', 'must'], correctAnswer: 0 },
      { id: 'q-9-1-3', type: 'quiz', title: 'Meaning', question: 'Is Wood giving advice for the future?', options: ['Yes', 'No (Past Criticism)'], correctAnswer: 1 },

      {
        id: '9-2',
        type: 'concept',
        title: 'Structure',
        imageUrl: IMG_BROOM,
        bulletPoints: [
          { lang: 'en', label: 'Formula', text: 'Subject + SHOULD HAVE + V3 (Past Participle).' },
          { lang: 'en', label: 'Negative', text: 'Subject + SHOULDN\'T HAVE + V3.' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-9-2-1', type: 'quiz', title: 'Gap Fill', question: 'I shouldn\'t ____ eaten that candy.', options: ['have', 'had'], correctAnswer: 0 },
      { id: 'q-9-2-2', type: 'quiz', title: 'Gap Fill', question: 'We should have ____ harder.', options: ['try', 'tried'], correctAnswer: 1 },
      { id: 'q-9-2-3', type: 'quiz', title: 'Situation', question: 'Ron is sick. He ate a slug.', options: ['He shouldn\'t have eaten it.', 'He shouldn\'t eat it.'], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-10',
    title: '12.1 Reported Speech: The Pensieve',
    theme: 'hp-dark',
    slides: [
      {
        id: '10-1',
        type: 'intro',
        title: 'Lead-in: Dumbledore\'s Memory',
        imageUrl: IMG_WAND,
        leadText: 'Stepping into the past.',
        bulletPoints: [
          { lang: 'en', label: 'Direct', text: 'Voldemort: "I AM the greatest sorcerer."' },
          { lang: 'en', label: 'Reported', text: 'Harry: "He said HE WAS the greatest sorcerer."' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-10-1-1', type: 'quiz', title: 'Pronoun Shift', question: '"I" became...', options: ['He', 'She'], correctAnswer: 0 },
      { id: 'q-10-1-2', type: 'quiz', title: 'Tense Shift', question: '"Am" became...', options: ['Was', 'Were'], correctAnswer: 0 },
      { id: 'q-10-1-3', type: 'quiz', title: 'Concept', question: 'Are we talking about now or then?', options: ['Then (Past)', 'Now'], correctAnswer: 0 },

      {
        id: '10-3-a',
        type: 'timeline',
        title: 'The Time Shift',
        leadText: 'Backshift Logic',
        visualContext: 'Memory Thread',
        visualData: [
            { label: 'Present', subLabel: '"I am"', percentage: 20, type: 'start', color: 'blue' },
            { label: 'Past', subLabel: 'He was', percentage: 50, type: 'point', color: 'purple' },
            { label: 'Past Perfect', subLabel: 'He had been', percentage: 80, type: 'end', color: 'gold' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-10-2-1', type: 'quiz', title: 'Shift Check', question: '"I have a wand." -> He said he ____ a wand.', options: ['has', 'had'], correctAnswer: 1 },
      { id: 'q-10-2-2', type: 'quiz', title: 'Shift Check', question: '"I played Quidditch." -> He said he ____ Quidditch.', options: ['played', 'had played'], correctAnswer: 1 },
      { id: 'q-10-2-3', type: 'quiz', title: 'Modal Check', question: '"I will kill him." -> He said he ____ kill him.', options: ['will', 'would'], correctAnswer: 1 }
    ]
  },
  {
    id: 'topic-11',
    title: '12.2 Reported Questions: The Sorting Hat',
    theme: 'hp-dark',
    slides: [
      {
        id: '11-1',
        type: 'intro',
        title: 'Lead-in: The Sorting',
        imageUrl: IMG_CASTLE,
        leadText: 'The Hat whispers.',
        bulletPoints: [
          { lang: 'en', label: 'Direct', text: 'Hat: "Are you brave?"' },
          { lang: 'en', label: 'Reported', text: 'Harry: "It asked IF I WAS brave."' }
        ]
      },
      // QUIZ BLOCK 1
      { id: 'q-11-1-1', type: 'quiz', title: 'Connector', question: 'For Yes/No questions use:', options: ['If/Whether', 'That'], correctAnswer: 0 },
      { id: 'q-11-1-2', type: 'quiz', title: 'Word Order', question: 'It asked if ____ brave.', options: ['was I', 'I was'], correctAnswer: 1 },
      { id: 'q-11-1-3', type: 'quiz', title: 'Tense', question: '"Are" changed to:', options: ['Was', 'Is'], correctAnswer: 0 },

      {
        id: '11-6-b',
        type: 'concept',
        title: 'Rules of the Hat',
        imageUrl: IMG_SCROLL,
        bulletPoints: [
            { lang: 'en', label: 'Wh- Questions', text: 'Keep the word. "Where ARE you?" -> "Where I WAS."' },
            { lang: 'en', label: 'Yes/No', text: 'Use IF. "DO you like Slytherin?" -> "If I LIKED Slytherin."' }
        ]
      },
      // QUIZ BLOCK 2
      { id: 'q-11-2-1', type: 'quiz', title: 'Practice', question: '"Where do you live?" -> He asked where I ____.', options: ['live', 'lived'], correctAnswer: 1 },
      { id: 'q-11-2-2', type: 'quiz', title: 'Practice', question: '"Can you fly?" -> He asked if I ____ fly.', options: ['can', 'could'], correctAnswer: 1 },
      { id: 'q-11-2-3', type: 'quiz', title: 'Error', question: 'He asked where did I go.', options: ['Correct', 'Incorrect (Delete did)'], correctAnswer: 1 }
    ]
  }
];