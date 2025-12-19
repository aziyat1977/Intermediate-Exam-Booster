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
    title: '6.2 Present Perfect: The Battle',
    theme: 'hp-gryffindor',
    slides: [
      {
        id: '1-1', type: 'intro', title: 'Context', imageUrl: IMG_CASTLE, leadText: 'The Battle of Hogwarts is over.',
        bulletPoints: [ { lang: 'en', label: 'Harry', text: 'Harry is standing still. He holds the broken Elder Wand.' }, { lang: 'en', label: 'Neville', text: 'Neville is wiping sweat and dust from his face.' } ]
      },
      {
        id: '1-2', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_WAND, leadText: 'Simple vs Continuous',
        bulletPoints: [
          { lang: 'en', label: 'Simple', text: '**Result**. The action is finished. We care about the achievement.' },
          { lang: 'en', label: 'Continuous', text: '**Activity**. The action has side effects (dirty, tired). We care about the process.' }
        ]
      },
      {
        id: '1-3', type: 'timeline', title: 'Timeline', leadText: 'Visualizing the Difference', visualContext: 'The Spell Casting',
        visualData: [ { label: 'Start', percentage: 10, type: 'start', color: 'blue' }, { label: 'Been Fighting', subLabel: 'Process', percentage: 50, type: 'range', color: 'gold' }, { label: 'Has Won', subLabel: 'Result', percentage: 90, type: 'end', color: 'red' } ]
      },
      {
        id: '1-4', type: 'concept', title: 'Form (MFP)', imageUrl: IMG_SCROLL, leadText: 'Grammar Formulas',
        bulletPoints: [
          { lang: 'en', label: 'Simple', text: '`S + have/has + V3` (Harry **has won**).' },
          { lang: 'en', label: 'Continuous', text: '`S + have/has + been + V-ing` (Neville **has been fighting**).' }
        ]
      },
      { id: '1-q1', type: 'quiz', title: 'Kahoot: Form', question: 'She ____ the potion.', options: ['has drunk', 'has drank', 'have drunk', 'has been drunk'], correctAnswer: 0, explanation: 'Drink - Drank - Drunk (V3).' },
      { id: '1-q2', type: 'quiz', title: 'Kahoot: Usage', question: 'Look at his hands! He ____ in the garden.', options: ['worked', 'has worked', 'has been working', 'works'], correctAnswer: 2, explanation: 'Dirty hands = Visible side effect of recent activity.' },
      {
        id: '1-5', type: 'reading', title: 'Reading Practice', 
        passage: "Harry looked around the Great Hall. He has defeated the Dark Lord at last. The war has ended, but many friends have fallen. Hermione has been crying for an hour, her eyes red and puffy. Ron has been comforting her.",
        question: "Why are Hermione's eyes red?"
      },
      { id: '1-t1', type: 'test', title: 'Final Test', question: 'Harry ____ 3 horcruxes.', options: ['has destroyed', 'has been destroying'], correctAnswer: 0, explanation: 'Quantity (3) requires Simple.' }
    ]
  },
  {
    id: 'topic-2',
    title: '9.2 Deduction: Potions',
    theme: 'hp-slytherin',
    slides: [
      {
        id: '2-1', type: 'intro', title: 'Context', imageUrl: IMG_POTION, leadText: 'Snape finds a mysterious cauldron.',
        bulletPoints: [ { lang: 'en', label: 'Evidence', text: 'It is pink. It bubbles. It smells like obsession.' } ]
      },
      {
        id: '2-2', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_SCROLL, leadText: 'Levels of Certainty',
        bulletPoints: [
          { lang: 'en', label: 'Must', text: '**90-100% Sure**. We have strong evidence.' },
          { lang: 'en', label: 'Can\'t', text: '**90-100% Impossible**. We are sure it is NOT true.' },
          { lang: 'en', label: 'Might/Could', text: '**50% Possible**. Maybe yes, maybe no.' }
        ]
      },
      {
        id: '2-3', type: 'timeline', title: 'Certainty Scale', leadText: 'Probability Meter', visualContext: 'Truth Serum',
        visualData: [ { label: "CAN'T", subLabel: 'Impossible', percentage: 10, type: 'point', color: 'red' }, { label: "MIGHT", subLabel: 'Maybe', percentage: 50, type: 'point', color: 'purple' }, { label: "MUST", subLabel: 'Certain', percentage: 90, type: 'point', color: 'green' } ]
      },
      { id: '2-q1', type: 'quiz', title: 'Kahoot: Logic', question: 'He is wearing a Slytherin robe. He ____ be a Gryffindor.', options: ['must', 'might', "can't", "mustn't"], correctAnswer: 2, explanation: 'It is impossible.' },
      { id: '2-q2', type: 'quiz', title: 'Kahoot: Deduction', question: 'The broom is very fast. It ____ be a Firebolt.', options: ['must', 'can', 'should', 'need'], correctAnswer: 0, explanation: 'Strong evidence.' },
      {
        id: '2-4', type: 'reading', title: 'Reading: The Mystery',
        passage: "Draco is walking down the hall. He looks nervous. He keeps checking his pocket. He might be hiding something. It could be a cursed necklace. It can't be a book, because the object is too small.",
        question: "Why can't it be a book?"
      }
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
        id: '10-1', type: 'intro', title: 'Context', imageUrl: IMG_WAND, leadText: 'Dumbledore\'s Memories.',
        bulletPoints: [ { lang: 'en', label: 'Direct', text: 'Voldemort: "I am great."' }, { lang: 'en', label: 'Reported', text: 'Harry: "He said he was great."' } ]
      },
      {
        id: '10-2', type: 'concept', title: 'Form (MFP)', imageUrl: IMG_SCROLL, leadText: 'The Backshift',
        bulletPoints: [
          { lang: 'en', label: 'Present', text: 'Becomes **Past**. (am -> was)' },
          { lang: 'en', label: 'Past', text: 'Becomes **Past Perfect**. (did -> had done)' },
          { lang: 'en', label: 'Will', text: 'Becomes **Would**.' }
        ]
      },
      { id: '10-q1', type: 'quiz', title: 'Kahoot: Shift', question: '"I have a plan." -> He said he ____ a plan.', options: ['has', 'had', 'have', 'having'], correctAnswer: 1 },
      { id: '10-q2', type: 'quiz', title: 'Kahoot: Shift', question: '"I saw him." -> He said he ____ him.', options: ['saw', 'had seen', 'has seen', 'sees'], correctAnswer: 1 }
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
      { id: '11-q1', type: 'quiz', title: 'Kahoot: Connector', question: 'He asked ____ I liked magic.', options: ['that', 'if', 'what', 'did'], correctAnswer: 1 },
      { id: '11-q2', type: 'quiz', title: 'Kahoot: Word Order', question: 'She asked what ____.', options: ['time is it', 'time it was', 'time was it', 'is it time'], correctAnswer: 1 }
    ]
  }
];