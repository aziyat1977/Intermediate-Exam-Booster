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

// NEW SPECIFIC ASSETS FOR YEAR 6
const IMG_VICTORY = svg(`${HP_DEFS}<path d="M300 500 L300 300 L400 200 L500 300 L500 500 Z" fill="#740001" opacity="0.8"/><circle cx="400" cy="180" r="40" fill="#fcd34d" filter="url(#glow)"/><path d="M400 500 L400 220" stroke="#d4af37" stroke-width="5"/><text x="400" y="550" font-family="serif" font-size="40" fill="#d4af37" text-anchor="middle">VICTORY</text>`, HP_BG);
const IMG_NEVILLE = svg(`${HP_DEFS}<path d="M200 500 L250 350 L350 350 L400 500 Z" fill="#334155"/><circle cx="300" cy="300" r="40" fill="#e2e8f0"/><path d="M280 290 L290 310 L310 290" fill="none" stroke="#000" stroke-width="2"/><path d="M300 250 L300 280" stroke="#94a3b8" stroke-width="2"/><text x="600" y="100" font-family="serif" font-size="100" fill="#fff" opacity="0.2">SWEAT</text><rect x="0" y="0" width="800" height="600" fill="#78350f" opacity="0.2"/>`, HP_BG);
const IMG_CLOCK = svg(`${HP_DEFS}<circle cx="400" cy="300" r="150" fill="#0f172a" stroke="#d4af37" stroke-width="10"/><path d="M400 300 L400 180" stroke="#d4af37" stroke-width="5"/><path d="M400 300 L500 300" stroke="#d4af37" stroke-width="5"/><circle cx="400" cy="300" r="10" fill="#d4af37"/><text x="400" y="550" font-family="serif" font-size="40" fill="#fff" text-anchor="middle">HOW LONG?</text>`, HP_BG);
const IMG_THOUGHT = svg(`${HP_DEFS}<path d="M200 400 Q100 200 300 100 Q500 0 600 200 Q700 400 400 500 Q300 550 200 400" fill="#e2e8f0" opacity="0.9"/><text x="400" y="300" font-family="serif" font-size="60" fill="#0f172a" text-anchor="middle">KNOW</text><text x="400" y="380" font-family="serif" font-size="60" fill="#0f172a" text-anchor="middle">BELIEVE</text>`, HP_BG);


export const TOPICS: Topic[] = [
  {
    id: 'topic-1',
    title: '6.2 Present Perfect: The Battle',
    theme: 'hp-gryffindor',
    slides: [
      // 1. IMMERSIVE INTRO
      {
        id: '1-1', type: 'intro', title: 'The Aftermath', imageUrl: IMG_CASTLE, leadText: 'The Battle of Hogwarts is over.',
        bulletPoints: [ 
          { lang: 'en', label: 'Scene', text: 'The sun is rising over the ruined castle. The air is still.' },
          { lang: 'en', label: 'Harry', text: 'He is standing silently. The war is finished.' },
          { lang: 'en', label: 'Neville', text: 'He is sitting on a rock, breathing hard, covered in dust.' } 
        ]
      },
      
      // 2. MEANING: SIMPLE (RESULT)
      {
        id: '1-2', type: 'concept', title: 'Meaning 1: Simple', imageUrl: IMG_VICTORY, leadText: 'Focus on RESULT',
        bulletPoints: [
          { lang: 'en', label: 'Concept', text: 'We use **Present Perfect Simple** when the action is finished and the RESULT is important.' },
          { lang: 'en', label: 'Example', text: 'Harry **has defeated** Voldemort.' },
          { lang: 'ru', label: 'RU', text: 'Гарри победил Волан-де-Морта. (Результат: он мертв)' },
          { lang: 'uz', label: 'UZ', text: 'Garri Voldemortni mag‘lub etdi. (Natija)' }
        ]
      },

      // 3. MEANING: CONTINUOUS (PROCESS)
      {
        id: '1-3', type: 'concept', title: 'Meaning 2: Continuous', imageUrl: IMG_NEVILLE, leadText: 'Focus on ACTIVITY',
        bulletPoints: [
          { lang: 'en', label: 'Concept', text: 'We use **Present Perfect Continuous** when the activity was long, recent, and has visible SIDE EFFECTS.' },
          { lang: 'en', label: 'Example', text: 'Neville **has been fighting** all night.' },
          { lang: 'ru', label: 'RU', text: 'Невилл сражался всю ночь. (Процесс, он грязный)' },
          { lang: 'uz', label: 'UZ', text: 'Nevill tuni bilan jang qildi. (Jarayon)' }
        ]
      },

      // 4. TIMELINE VISUALIZATION
      {
        id: '1-4', type: 'timeline', title: 'Timeline Comparison', leadText: 'Result vs Process', visualContext: 'The Spell',
        visualData: [ 
          { label: 'Start', percentage: 10, type: 'start', color: 'blue' }, 
          { label: 'Been Fighting', subLabel: 'The Process (Sweat)', percentage: 50, type: 'range', color: 'orange' }, 
          { label: 'Has Won', subLabel: 'The Result (Victory)', percentage: 90, type: 'end', color: 'gold' } 
        ]
      },

      // 5. FORM & PRONUNCIATION
      {
        id: '1-5', type: 'concept', title: 'Form & Pronunciation', imageUrl: IMG_SCROLL, leadText: 'The Grammar Spell',
        bulletPoints: [
          { lang: 'en', label: 'Simple', text: '`S + have/has + V3` -> "I **have eaten**."' },
          { lang: 'en', label: 'Continuous', text: '`S + have/has + been + V-ing` -> "I **have been eating**."' },
          { lang: 'en', label: 'Sound', text: 'We use contractions: "I\'ve been", "She\'s been".' }
        ]
      },

      // 6. KAHOOT CHECK 1
      { id: '1-q1', type: 'quiz', title: 'Kahoot: Form', question: 'Harry ____ the Snitch.', options: ['has caught', 'has been catching', 'have caught', 'catching'], correctAnswer: 0, explanation: 'Result: He has it in his hand now.' },

      // 7. SURGICAL RULE: STATE VERBS
      {
        id: '1-6', type: 'concept', title: 'Surgical Rule: State Verbs', imageUrl: IMG_THOUGHT, leadText: 'Mental Magic',
        bulletPoints: [
          { lang: 'en', label: 'Rule', text: 'Verbs of the mind, feeling, or possession CANNOT be Continuous.' },
          { lang: 'en', label: 'List', text: 'Know, Believe, Like, Love, Have (possession), Understand.' },
          { lang: 'en', label: 'Example', text: '"I **have known** Ron for years." (NOT have been knowing).' },
          { lang: 'ru', label: 'RU', text: 'Глаголы состояния не используются в Continuous.' },
          { lang: 'uz', label: 'UZ', text: 'Holat fe’llari Continuous zamonida ishlatilmaydi.' }
        ]
      },
      
      // 8. KAHOOT CHECK 2
      { id: '1-q2', type: 'quiz', title: 'Kahoot: State Verbs', question: 'I ____ my wand for 7 years.', options: ['have had', 'have been having', 'had', 'having'], correctAnswer: 0, explanation: 'Have (possession) is a state verb.' },

      // 9. SURGICAL RULE: QUANTITY VS DURATION
      {
        id: '1-7', type: 'concept', title: 'Rule: Quantity vs Duration', imageUrl: IMG_CLOCK, leadText: 'Counting vs Timing',
        bulletPoints: [
          { lang: 'en', label: 'How Many (Simple)', text: 'If you count the number of times/things -> **Simple**. "He has drunk **3** potions."' },
          { lang: 'en', label: 'How Long (Continuous)', text: 'If you focus on the time -> **Continuous**. "He has been flying **for 2 hours**."' }
        ]
      },

      // 10. KAHOOT CHECK 3
      { id: '1-q3', type: 'quiz', title: 'Kahoot: Quantity', question: 'Hermione ____ ten books today.', options: ['has read', 'has been reading', 'reading', 'read'], correctAnswer: 0, explanation: 'Quantity (10 books) = Simple.' },

      // 11. READING PASSAGE
      {
        id: '1-8', type: 'reading', title: 'Reading: The Letter', 
        passage: "Dear Mum, I hope you are well. I have been studying for my O.W.L.s all week. I am exhausted! I have read five textbooks and I have written three essays. Ron has been helping me, but he has fallen asleep.",
        question: "Why is the writer exhausted?"
      },

      // 12. FINAL TEST
      { id: '1-t1', type: 'test', title: 'Gap Fill Challenge', question: 'Look at the ground! It ____ (rain).', options: ['has rained', 'has been raining'], correctAnswer: 1, explanation: 'Visible side effect (wet ground) = Continuous.' }
    ]
  },
  {
    id: 'topic-2',
    title: '9.2 Deduction: Potions',
    theme: 'hp-slytherin',
    slides: [
      // 1. INTRO
      {
        id: '2-1', type: 'intro', title: 'The Pink Cauldron', imageUrl: IMG_POTION, leadText: 'Snape finds a mysterious cauldron.',
        bulletPoints: [ 
            { lang: 'en', label: 'Scene', text: 'The dungeon is cold. A lonely cauldron bubbles in the corner.' },
            { lang: 'en', label: 'Evidence', text: 'It is bright pink. It smells like strawberries and obsession.' } 
        ]
      },
      
      // 2. CONCEPT: MUST
      {
        id: '2-2', type: 'concept', title: 'Meaning 1: MUST', imageUrl: IMG_VICTORY, leadText: 'The Logic of Certainty',
        bulletPoints: [
          { lang: 'en', label: 'Certainty', text: '**95-100% Sure**. The evidence is overwhelming.' },
          { lang: 'en', label: 'Example', text: '"It smells like Amortentia. It **must be** a love potion."' },
          { lang: 'ru', label: 'RU', text: 'Это, должно быть, любовное зелье.' },
          { lang: 'uz', label: 'UZ', text: 'Bu sevgi damlamasi bo‘lsa kerak.' }
        ]
      },

      // 3. CONCEPT: CAN'T
      {
        id: '2-3', type: 'concept', title: 'Meaning 2: CAN\'T', imageUrl: IMG_CASTLE, leadText: 'The Logic of Impossibility',
        bulletPoints: [
          { lang: 'en', label: 'Impossibility', text: '**95-100% Impossible**. The evidence proves it is NOT true.' },
          { lang: 'en', label: 'Example', text: '"It is clear like water. It **can\'t be** Polyjuice." (Polyjuice is mud-colored).' },
          { lang: 'en', label: 'Note', text: 'We do NOT use "mustn\'t" for deduction.' }
        ]
      },

      // 4. CONCEPT: MIGHT/COULD
      {
        id: '2-4', type: 'concept', title: 'Meaning 3: MIGHT/COULD', imageUrl: IMG_THOUGHT, leadText: 'The Fog of Uncertainty',
        bulletPoints: [
          { lang: 'en', label: 'Possibility', text: '**50% Possible**. It is possible, but not certain.' },
          { lang: 'en', label: 'Example', text: '"It is gold. It **might be** Felix Felicis. Or it **could be** fake."' },
          { lang: 'ru', label: 'RU', text: 'Возможно, это Феликс Фелицис.' },
          { lang: 'uz', label: 'UZ', text: 'Balki bu Feliks Felicisdir.' }
        ]
      },

      // 5. TIMELINE
      {
        id: '2-5', type: 'timeline', title: 'Certainty Scale', leadText: 'Probability Meter', visualContext: 'Truth Serum',
        visualData: [ { label: "CAN'T", subLabel: 'Impossible (0%)', percentage: 10, type: 'start', color: 'red' }, { label: "MIGHT", subLabel: 'Maybe (50%)', percentage: 50, type: 'point', color: 'purple' }, { label: "MUST", subLabel: 'Certain (100%)', percentage: 90, type: 'end', color: 'green' } ]
      },

      // 6. SURGICAL RULE: MUSTN'T vs CAN'T
      {
        id: '2-6', type: 'concept', title: 'Surgical Rule: The Trap', imageUrl: IMG_SCROLL, leadText: 'Prohibition vs Logic',
        bulletPoints: [
          { lang: 'en', label: 'Mustn\'t', text: 'Rules & Laws. "You **mustn\'t** drink this!" (It is forbidden).' },
          { lang: 'en', label: 'Can\'t', text: 'Logic & Deduction. "It **can\'t** be poison." (It smells too sweet).' },
          { lang: 'en', label: 'Trap', text: 'Never say "He mustn\'t be home" to mean "He isn\'t home". Say "He **can\'t** be home".' }
        ]
      },

      // 7. KAHOOT CHECK 1
      { id: '2-q1', type: 'quiz', title: 'Kahoot: The Trap', question: 'Harry isn\'t in his bed. He ____ be in the dormitory.', options: ['mustn\'t', 'can\'t', 'shouldn\'t', 'not'], correctAnswer: 1, explanation: 'Logical impossibility = Can\'t.' },

      // 8. CONCEPT: CONTINUOUS
      {
        id: '2-7', type: 'concept', title: 'Advanced: Continuous', imageUrl: IMG_NEVILLE, leadText: 'Action in Progress',
        bulletPoints: [
          { lang: 'en', label: 'Form', text: '`Modal + be + V-ing`.' },
          { lang: 'en', label: 'Usage', text: 'When we deduce an action happening NOW.' },
          { lang: 'en', label: 'Example', text: '"Snape is looking at Harry. He **must be reading** his mind."' }
        ]
      },

      // 9. KAHOOT CHECK 2
      { id: '2-q2', type: 'quiz', title: 'Kahoot: Continuous', question: 'Listen to that boom! Seamus ____ pyrotechnics again.', options: ['must do', 'must be doing', 'can do', 'might do'], correctAnswer: 1, explanation: 'Action happening right now (Listen!) = Must be doing.' },

      // 10. READING PASSAGE
      {
        id: '2-8', type: 'reading', title: 'Reading: The Mystery',
        passage: "Draco is walking down the hall. He looks nervous. He keeps checking his pocket. He might be hiding something. It could be a cursed necklace. It can't be a book, because the object is too small.",
        question: "Why can't it be a book?"
      },
      
      // 11. SPEAKING
      {
        id: '2-9', type: 'speaking', title: 'Speaking: Deduction', speakingPrompts: ['Look at the evidence: The floor is wet. Deduce why.'],
        leadText: 'Be the Detective',
        bulletPoints: [ { lang: 'en', label: 'Tip', text: 'Use "must be + ing" or "might be".' } ]
      },

      // 12. FINAL TEST
      { id: '2-t1', type: 'test', title: 'Final Deduction', question: 'The potion turns him into a cat. It ____ be Polyjuice!', options: ['must', 'can\'t'], correctAnswer: 1, explanation: 'Polyjuice only changes you into humans. It is impossible.' }
    ]
  },
  {
    id: 'topic-3',
    title: '10.2 Articles: Diagon Alley',
    theme: 'hp-ravenclaw',
    slides: [
      {
        id: '3-1', type: 'intro', title: 'Context', imageUrl: IMG_OWL, leadText: 'Shopping for school supplies.',
        bulletPoints: [ { lang: 'en', label: 'Harry', text: 'He needs a wand, an owl, and books.' } ]
      },
      {
        id: '3-2', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_WAND, leadText: 'A/An vs The',
        bulletPoints: [
          { lang: 'en', label: 'A/An', text: 'New information. One of many. "I saw **a** goblin."' },
          { lang: 'en', label: 'The', text: 'Specific information. We know which one. "**The** goblin was grumpy."' },
          { lang: 'en', label: 'Zero (-)', text: 'General plurals. "(-) Goblins love gold."' }
        ]
      },
      { id: '3-q1', type: 'quiz', title: 'Kahoot: A or The', question: 'Look at ____ moon!', options: ['a', 'an', 'the', '-'], correctAnswer: 2, explanation: 'Unique object (only one moon).' },
      { id: '3-q2', type: 'quiz', title: 'Kahoot: General', question: '____ Owls are useful pets.', options: ['The', 'A', 'An', '(-)'], correctAnswer: 3, explanation: 'General plural statement.' },
      {
        id: '3-3', type: 'reading', title: 'Reading: The Shop',
        passage: "Harry entered a shop. A bell rang. The shopkeeper appeared. He was holding a wand. 'The wand is holly and phoenix feather,' he said. Harry paid the man and left.",
        question: "Why 'The' wand in the second mention?"
      }
    ]
  },
  {
    id: 'topic-4',
    title: '7.1 Used to/Would: History',
    theme: 'hp-hufflepuff',
    slides: [
      {
        id: '4-1', type: 'intro', title: 'Context', imageUrl: IMG_SCROLL, leadText: 'The Founders of Hogwarts.',
        bulletPoints: [ { lang: 'en', label: 'Past', text: 'Things were different 1000 years ago.' } ]
      },
      {
        id: '4-2', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_CASTLE, leadText: 'Habits vs States',
        bulletPoints: [
          { lang: 'en', label: 'Used to', text: 'Past states OR habits. "Hogwarts **used to be** smaller."' },
          { lang: 'en', label: 'Would', text: 'Past habits ONLY. Action verbs. "Helga **would cook** feasts."' },
          { lang: 'en', label: 'Rule', text: 'Never use WOULD for states (be, have, live, love).' }
        ]
      },
      {
        id: '4-3', type: 'timeline', title: 'Timeline', leadText: 'Past vs Present', visualContext: 'Time Magic',
        visualData: [ { label: 'Past', percentage: 10, type: 'start', color: 'blue' }, { label: 'Used to Be', subLabel: 'State', percentage: 40, type: 'point', color: 'green' }, { label: 'Would Cook', subLabel: 'Action', percentage: 60, type: 'point', color: 'red' }, { label: 'Now', percentage: 90, type: 'end', color: 'gold' } ]
      },
      { id: '4-q1', type: 'quiz', title: 'Kahoot: Selection', question: 'Salazar ____ have a basilisk.', options: ['would', 'used to', 'use to', 'was'], correctAnswer: 1, explanation: 'Have = State verb. Must use "Used to".' },
      { id: '4-q2', type: 'quiz', title: 'Kahoot: Negative', question: 'I ____ like Potions.', options: ['didn\'t used to', 'didn\'t use to', 'wouldn\'t', 'not used to'], correctAnswer: 1, explanation: 'Did... use to (drop the d).' }
    ]
  },
  {
    id: 'topic-5',
    title: '9.1 Comparatives: Brooms',
    theme: 'hp-winter',
    slides: [
      {
        id: '5-1', type: 'intro', title: 'Context', imageUrl: IMG_BROOM, leadText: 'Quality Quidditch Supplies.',
        bulletPoints: [ { lang: 'en', label: 'Nimbus', text: 'Fast.' }, { lang: 'en', label: 'Firebolt', text: 'Very Fast.' } ]
      },
      {
        id: '5-2', type: 'concept', title: 'Form (MFP)', imageUrl: IMG_SNITCH, leadText: 'Making Comparisons',
        bulletPoints: [
          { lang: 'en', label: 'Short', text: 'Adj + er + than. "Fast -> **Faster than**".' },
          { lang: 'en', label: 'Long', text: 'More + Adj + than. "Dangerous -> **More dangerous than**".' },
          { lang: 'en', label: 'Exceptions', text: 'Good -> Better. Bad -> Worse. Far -> Further.' }
        ]
      },
      {
        id: '5-3', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_WAND, leadText: 'Modifiers',
        bulletPoints: [
          { lang: 'en', label: 'Big Difference', text: 'Use **MUCH, FAR, A LOT**. "Much faster".' },
          { lang: 'en', label: 'Small Difference', text: 'Use **A BIT, SLIGHTLY**. "Slightly older".' }
        ]
      },
      { id: '5-q1', type: 'quiz', title: 'Kahoot: Modifiers', question: 'The Firebolt is ____ expensive than the Comet.', options: ['very', 'much', 'many', 'lot'], correctAnswer: 1, explanation: 'Use "much" with comparatives.' },
      { id: '5-q2', type: 'quiz', title: 'Kahoot: Irregular', question: 'My flying is ____ than yours.', options: ['badder', 'worse', 'baddest', 'worst'], correctAnswer: 1 }
    ]
  },
  {
    id: 'topic-6',
    title: '8.2 Unreal: Ministry',
    theme: 'hp-gryffindor',
    slides: [
      {
        id: '6-1', type: 'intro', title: 'Context', imageUrl: IMG_CASTLE, leadText: 'The Mirror of Erised.',
        bulletPoints: [ { lang: 'en', label: 'Ron', text: 'He sees himself as Head Boy. But he is not Head Boy.' } ]
      },
      {
        id: '6-2', type: 'concept', title: 'Form (MFP)', imageUrl: IMG_SCROLL, leadText: 'Second Conditional',
        bulletPoints: [
          { lang: 'en', label: 'Structure', text: '`If + Past Simple, ... would + V1`' },
          { lang: 'en', label: 'To Be', text: 'Use **WERE** for everyone. "If I **were** you..."' }
        ]
      },
      {
        id: '6-3', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_WAND, leadText: 'Imaginary Present',
        bulletPoints: [
          { lang: 'en', label: 'Usage', text: 'Impossible or unlikely situations NOW.' },
          { lang: 'en', label: 'Example', text: '"If I **had** a dragon, I **would fly** to school." (I don\'t have a dragon).' }
        ]
      },
      { id: '6-q1', type: 'quiz', title: 'Kahoot: Tense', question: 'If I ____ magic, I would stop time.', options: ['know', 'knew', 'would know', 'have known'], correctAnswer: 1, explanation: 'If + Past Simple.' },
      { id: '6-q2', type: 'quiz', title: 'Kahoot: Result', question: 'If she were here, she ____ help us.', options: ['will', 'can', 'would', 'did'], correctAnswer: 2 }
    ]
  },
  {
    id: 'topic-7',
    title: '7.2 Questions: Rita Skeeter',
    theme: 'hp-slytherin',
    slides: [
      {
        id: '7-1', type: 'intro', title: 'Context', imageUrl: IMG_SCROLL, leadText: 'The Interview.',
        bulletPoints: [ { lang: 'en', label: 'Rita', text: 'She asks prying questions to Harry.' } ]
      },
      {
        id: '7-2', type: 'concept', title: 'Concept (MFP)', imageUrl: IMG_OWL, leadText: 'Subject vs Object',
        bulletPoints: [
          { lang: 'en', label: 'Object Q', text: 'Ask about receiver. Needs DO/DID. "Who **did** you see?"' },
          { lang: 'en', label: 'Subject Q', text: 'Ask about doer. NO do/did. "Who **saw** you?"' }
        ]
      },
      { id: '7-q1', type: 'quiz', title: 'Kahoot: Identify', question: 'Who ____ the window?', options: ['did break', 'broke', 'does break', 'broken'], correctAnswer: 1, explanation: 'Subject Question (Who did it?).' },
      {
        id: '7-3', type: 'concept', title: 'Form (MFP)', imageUrl: IMG_POTION, leadText: 'Indirect Questions',
        bulletPoints: [
          { lang: 'en', label: 'Intro', text: '"Can you tell me..." / "Do you know..."' },
          { lang: 'en', label: 'Rule', text: 'Normal word order (S+V). No auxiliary do/did.' },
          { lang: 'en', label: 'Example', text: '"Where **is he**?" -> "Do you know where **he is**?"' }
        ]
      },
      { id: '7-q2', type: 'quiz', title: 'Kahoot: Indirect', question: 'Tell me where ____.', options: ['does he live', 'he lives', 'lives he', 'he live'], correctAnswer: 1 }
    ]
  },
  {
    id: 'topic-8',
    title: '8.1 Real Conditionals: Exams',
    theme: 'hp-ravenclaw',
    slides: [
      {
        id: '8-1', type: 'intro', title: 'Context', imageUrl: IMG_SCROLL, leadText: 'O.W.L. Exam Rules.',
        bulletPoints: [ { lang: 'en', label: 'Zero', text: 'Facts. "If you heat water, it boils."' }, { lang: 'en', label: 'First', text: 'Future. "If I study, I will pass."' } ]
      },
      {
        id: '8-2', type: 'concept', title: 'Form (MFP)', imageUrl: IMG_WAND, leadText: 'Unless',
        bulletPoints: [
          { lang: 'en', label: 'Meaning', text: 'Unless = If Not.' },
          { lang: 'en', label: 'Example', text: '"You will fail **unless** you study." = "You will fail **if** you **do not** study."' }
        ]
      },
      { id: '8-q1', type: 'quiz', title: 'Kahoot: Logic', question: 'I won\'t go ____ you come with me.', options: ['if', 'unless', 'when', 'as'], correctAnswer: 1 },
      { id: '8-q2', type: 'quiz', title: 'Kahoot: Tense', question: 'If it rains, we ____ wet.', options: ['get', 'will get', 'got', 'getting'], correctAnswer: 1, explanation: 'Specific future event (First Conditional).' }
    ]
  },
  {
    id: 'topic-9',
    title: '11.2 Regret: Quidditch',
    theme: 'hp-winter',
    slides: [
      {
        id: '9-1', type: 'intro', title: 'Context', imageUrl: IMG_SNITCH, leadText: 'The lost match.',
        bulletPoints: [ { lang: 'en', label: 'Oliver Wood', text: 'He is yelling at Harry. "You missed the Snitch!"' } ]
      },
      {
        id: '9-2', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_BROOM, leadText: 'Past Criticism',
        bulletPoints: [
          { lang: 'en', label: 'Should have', text: 'It was a good idea, but you didn\'t do it.' },
          { lang: 'en', label: 'Shouldn\'t have', text: 'It was a bad idea, but you did it.' }
        ]
      },
      {
        id: '9-3', type: 'timeline', title: 'Timeline', leadText: 'Too Late', visualContext: 'Time Turner',
        visualData: [ { label: 'Mistake', percentage: 20, type: 'start', color: 'red' }, { label: 'Should Have', subLabel: 'Ideal', percentage: 20, type: 'start', color: 'green' }, { label: 'Now', subLabel: 'Regret', percentage: 80, type: 'end', color: 'blue' } ]
      },
      { id: '9-q1', type: 'quiz', title: 'Kahoot: Form', question: 'You should have ____.', options: ['listen', 'listened', 'listening', 'listens'], correctAnswer: 1, explanation: 'Should have + V3.' },
      { id: '9-q2', type: 'quiz', title: 'Kahoot: Meaning', question: 'I feel sick. I shouldn\'t have eaten that frog.', options: ['I ate it.', 'I didn\'t eat it.'], correctAnswer: 0 }
    ]
  },
  {
    id: 'topic-10',
    title: '12.1 Reported: Pensieve',
    theme: 'hp-dark',
    slides: [
      {
        id: '10-1', type: 'intro', title: 'The Pensieve', imageUrl: IMG_WAND, leadText: 'Dumbledore\'s Memories',
        bulletPoints: [ { lang: 'en', label: 'Context', text: 'We are stepping into a memory. We are reporting what people said in the past.' } ]
      },
      
      // --- SECTION 1: PRESENT -> PAST ---
      {
        id: '10-p1-1', type: 'concept', title: '1. Present -> Past', imageUrl: IMG_SCROLL, leadText: 'The Backshift Rule',
        bulletPoints: [
          { lang: 'en', label: 'Meaning', text: 'When we report past speech, we shift the tense BACK one step into the past.' },
          { lang: 'en', label: 'Form', text: 'Direct: Present Simple (`V1`) -> Reported: Past Simple (`V2`).' },
          { lang: 'en', label: 'Pronouns', text: 'I -> He/She.' }
        ]
      },
      {
        id: '10-p1-2', type: 'concept', title: 'Examples: Present -> Past', imageUrl: IMG_CASTLE, leadText: 'Listen and Report',
        bulletPoints: [
          { lang: 'en', label: 'Ex 1', text: 'Direct: "I **am** Lord Voldemort."' },
          { lang: 'en', label: 'Reported', text: 'He said he **was** Lord Voldemort.' },
          { lang: 'ru', label: 'RU', text: 'Он сказал, что он Лорд Волан-де-Морт.' },
          { lang: 'uz', label: 'UZ', text: 'U Lord Voldemort ekanligini aytdi.' },
          
          { lang: 'en', label: 'Ex 2', text: 'Direct: "I **study** at Hogwarts."' },
          { lang: 'en', label: 'Reported', text: 'He said he **studied** at Hogwarts.' },
          { lang: 'ru', label: 'RU', text: 'Он сказал, что учился в Хогвартсе.' },
          { lang: 'uz', label: 'UZ', text: 'U Xogvartsda o‘qishini aytdi.' },

          { lang: 'en', label: 'Ex 3', text: 'Direct: "I **want** power."' },
          { lang: 'en', label: 'Reported', text: 'He said he **wanted** power.' },
          { lang: 'ru', label: 'RU', text: 'Он сказал, что хочет власти.' },
          { lang: 'uz', label: 'UZ', text: 'U hokimiyatni xohlashini aytdi.' }
        ]
      },
      {
        id: '10-p1-3', type: 'timeline', title: 'Time Shift', leadText: 'Shifting Back', visualContext: 'Memory',
        visualData: [ { label: 'Direct Speech', subLabel: 'Present', percentage: 20, type: 'start', color: 'blue' }, { label: 'Reported Speech', subLabel: 'Past', percentage: 60, type: 'point', color: 'purple' }, { label: 'Now', percentage: 90, type: 'end', color: 'gold' } ]
      },
      { id: '10-p1-k', type: 'quiz', title: 'Kahoot: Present -> Past', question: '"I like snakes." -> He said he ____ snakes.', options: ['likes', 'liked', 'has liked', 'liking'], correctAnswer: 1 },
      { id: '10-p1-t', type: 'test', title: 'Gap Fill', question: '"I am busy." -> Tom said he ____ busy.', options: ['is', 'was'], correctAnswer: 1 },

      // --- SECTION 2: PAST -> PAST PERFECT ---
      {
        id: '10-p2-1', type: 'concept', title: '2. Past -> Past Perfect', imageUrl: IMG_POTION, leadText: 'Double Past',
        bulletPoints: [
          { lang: 'en', label: 'Meaning', text: 'If the direct speech is ALREADY in the past, it moves to the "Past of the Past".' },
          { lang: 'en', label: 'Form', text: 'Direct: Past Simple (`V2`) -> Reported: Past Perfect (`had + V3`).' }
        ]
      },
      {
        id: '10-p2-2', type: 'concept', title: 'Examples: Past -> Past Perfect', imageUrl: IMG_SNITCH, leadText: 'Deep Memories',
        bulletPoints: [
          { lang: 'en', label: 'Ex 1', text: 'Direct: "I **opened** the Chamber."' },
          { lang: 'en', label: 'Reported', text: 'He said he **had opened** the Chamber.' },
          { lang: 'ru', label: 'RU', text: 'Он сказал, что открыл Тайную комнату.' },
          { lang: 'uz', label: 'UZ', text: 'U Sirli xonani ochganini aytdi.' },
          
          { lang: 'en', label: 'Ex 2', text: 'Direct: "We **won** the Cup."' },
          { lang: 'en', label: 'Reported', text: 'They said they **had won** the Cup.' },
          { lang: 'ru', label: 'RU', text: 'Они сказали, что выиграли Кубок.' },
          { lang: 'uz', label: 'UZ', text: 'Ular Kubokni yutganliklarini aytishdi.' },

          { lang: 'en', label: 'Ex 3', text: 'Direct: "I **found** the diadem."' },
          { lang: 'en', label: 'Reported', text: 'He said he **had found** the diadem.' },
          { lang: 'ru', label: 'RU', text: 'Он сказал, что нашел диадему.' },
          { lang: 'uz', label: 'UZ', text: 'U diademani topganini aytdi.' }
        ]
      },
      {
        id: '10-p2-3', type: 'timeline', title: 'Double Shift', leadText: 'Past to Pre-Past', visualContext: 'Ancient History',
        visualData: [ { label: 'Direct', subLabel: 'Past', percentage: 40, type: 'start', color: 'blue' }, { label: 'Reported', subLabel: 'Past Perfect', percentage: 20, type: 'point', color: 'purple' }, { label: 'Now', percentage: 90, type: 'end', color: 'gold' } ]
      },
      { id: '10-p2-k', type: 'quiz', title: 'Kahoot: Past -> P.Perfect', question: '"I saw him." -> She said she ____ him.', options: ['saw', 'sees', 'had seen', 'has seen'], correctAnswer: 2 },
      { id: '10-p2-t', type: 'test', title: 'Gap Fill', question: '"I lost my wand." -> He said he ____ his wand.', options: ['lost', 'had lost'], correctAnswer: 1 },

      // --- SECTION 3: WILL -> WOULD ---
      {
        id: '10-p3-1', type: 'concept', title: '3. Will -> Would', imageUrl: IMG_BROOM, leadText: 'Future in the Past',
        bulletPoints: [
          { lang: 'en', label: 'Meaning', text: 'Promises or predictions made in the past.' },
          { lang: 'en', label: 'Form', text: 'Direct: `Will + V1` -> Reported: `Would + V1`.' }
        ]
      },
      {
        id: '10-p3-2', type: 'concept', title: 'Examples: Will -> Would', imageUrl: IMG_OWL, leadText: 'Past Promises',
        bulletPoints: [
          { lang: 'en', label: 'Ex 1', text: 'Direct: "I **will** return."' },
          { lang: 'en', label: 'Reported', text: 'He said he **would** return.' },
          { lang: 'ru', label: 'RU', text: 'Он сказал, что вернется.' },
          { lang: 'uz', label: 'UZ', text: 'U qaytishini aytdi.' },
          
          { lang: 'en', label: 'Ex 2', text: 'Direct: "It **will** be easy."' },
          { lang: 'en', label: 'Reported', text: 'He said it **would** be easy.' },
          { lang: 'ru', label: 'RU', text: 'Он сказал, что это будет легко.' },
          { lang: 'uz', label: 'UZ', text: 'U bu oson bo‘lishini aytdi.' },

          { lang: 'en', label: 'Ex 3', text: 'Direct: "We **will** fight."' },
          { lang: 'en', label: 'Reported', text: 'They said they **would** fight.' },
          { lang: 'ru', label: 'RU', text: 'Они сказали, что будут сражаться.' },
          { lang: 'uz', label: 'UZ', text: 'Ular kurashishlarini aytishdi.' }
        ]
      },
      {
        id: '10-p3-3', type: 'timeline', title: 'Future Shift', leadText: 'Will becomes Would', visualContext: 'Prophecy',
        visualData: [ { label: 'Said', subLabel: 'Past', percentage: 20, type: 'start', color: 'blue' }, { label: '"Will"', subLabel: 'Future from Past', percentage: 50, type: 'range', color: 'purple' }, { label: 'Now', percentage: 80, type: 'end', color: 'gold' } ]
      },
      { id: '10-p3-k', type: 'quiz', title: 'Kahoot: Will -> Would', question: '"I will help." -> He said he ____ help.', options: ['will', 'would', 'can', 'should'], correctAnswer: 1 },
      { id: '10-p3-t', type: 'test', title: 'Gap Fill', question: '"The train will leave." -> He said the train ____ leave.', options: ['will', 'would'], correctAnswer: 1 }
    ]
  },
  {
    id: 'topic-11',
    title: '12.2 Reported Q: Sorting',
    theme: 'hp-dark',
    slides: [
      {
        id: '11-1', type: 'intro', title: 'Context', imageUrl: IMG_CASTLE, leadText: 'The Sorting Hat.',
        bulletPoints: [ { lang: 'en', label: 'Hat', text: '"Are you brave?"' } ]
      },
      {
        id: '11-2', type: 'concept', title: 'Form (MFP)', imageUrl: IMG_SCROLL, leadText: 'Reporting Questions',
        bulletPoints: [
          { lang: 'en', label: 'Yes/No', text: 'Use **IF** or **WHETHER**. "It asked **if** I was brave."' },
          { lang: 'en', label: 'Wh- Q', text: 'Keep the word. "Where are you?" -> "Asked **where** I was."' },
          { lang: 'en', label: 'Order', text: 'Change to Statement Order (Subject + Verb).' }
        ]
      },
      { id: '11-q1', type: 'quiz', title: 'Kahoot: Connector', question: 'He asked ____ I liked magic.', options: ['that', 'if', 'what', 'did'], correctAnswer: 1, explanation: 'Should have + V3.' },
      { id: '11-q2', type: 'quiz', title: 'Kahoot: Word Order', question: 'She asked what ____.', options: ['time is it', 'time it was', 'time was it', 'is it time'], correctAnswer: 1 }
    ]
  }
];