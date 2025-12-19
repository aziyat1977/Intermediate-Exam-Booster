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
      { id: '1-1', type: 'intro', title: 'The Aftermath', imageUrl: IMG_CASTLE, leadText: 'The Battle of Hogwarts is over.', bulletPoints: [ { lang: 'en', label: 'Scene', text: 'The sun is rising over the ruined castle.' }, { lang: 'en', label: 'Harry', text: 'He is standing silently.' } ] },
      { id: '1-2', type: 'concept', title: 'Meaning 1: Simple', imageUrl: IMG_VICTORY, leadText: 'Focus on RESULT', bulletPoints: [ { lang: 'en', label: 'Concept', text: 'Use **Present Perfect Simple** for finished actions with present results.' }, { lang: 'en', label: 'Ex', text: 'Harry **has defeated** Voldemort.' } ] },
      { id: '1-3', type: 'concept', title: 'Meaning 2: Continuous', imageUrl: IMG_NEVILLE, leadText: 'Focus on ACTIVITY', bulletPoints: [ { lang: 'en', label: 'Concept', text: 'Use **Continuous** for long actions with side effects.' }, { lang: 'en', label: 'Ex', text: 'Neville **has been fighting** all night.' } ] },
      { id: '1-4', type: 'timeline', title: 'Timeline Comparison', leadText: 'Result vs Process', visualContext: 'The Spell', visualData: [ { label: 'Start', percentage: 10, type: 'start', color: 'blue' }, { label: 'Fighting', percentage: 50, type: 'range', color: 'orange' }, { label: 'Won', percentage: 90, type: 'end', color: 'gold' } ] },
      { id: '1-5', type: 'concept', title: 'Form & Pronunciation', imageUrl: IMG_SCROLL, leadText: 'The Grammar Spell', bulletPoints: [ { lang: 'en', label: 'Simple', text: '`have/has + V3`' }, { lang: 'en', label: 'Continuous', text: '`have/has + been + V-ing`' } ] },
      
      // Original Checks
      { id: '1-q1', type: 'quiz', title: 'Kahoot: Form', question: 'Harry ____ the Snitch.', options: ['has caught', 'has been catching', 'have caught', 'catching'], correctAnswer: 0, explanation: 'Result: He has it in his hand now.' },
      { id: '1-q2', type: 'quiz', title: 'Kahoot: State Verbs', question: 'I ____ my wand for 7 years.', options: ['have had', 'have been having', 'had', 'having'], correctAnswer: 0, explanation: 'Have (possession) is a state verb.' },
      
      // NEW KAHOOT (3 more)
      { id: '1-nq1', type: 'quiz', title: 'Kahoot: Duration', question: 'How long ____ you ____ here?', options: ['have/been waiting', 'has/waiting', 'did/wait', 'are/waiting'], correctAnswer: 0, explanation: 'How long = duration = Perfect Continuous.' },
      { id: '1-nq2', type: 'quiz', title: 'Kahoot: Result', question: 'Look! She ____ her wand!', options: ['has broken', 'has been breaking', 'broke', 'breaking'], correctAnswer: 0, explanation: 'Visible result (broken wand) = Simple.' },
      { id: '1-nq3', type: 'quiz', title: 'Kahoot: Experience', question: 'I ____ to Hogsmeade twice.', options: ['have been', 'have been going', 'went', 'go'], correctAnswer: 0, explanation: 'Quantity (twice) = Simple.' },

      // NEW TESTS (3 more)
      { id: '1-t1', type: 'test', title: 'Test: Gap Fill', question: 'My hands are dirty. I ____ (plant) Mandrakes.', options: ['have planted', 'have been planting'], correctAnswer: 1, explanation: 'Side effect (dirty hands) = Continuous.' },
      { id: '1-t2', type: 'test', title: 'Test: State Verbs', question: 'We ____ (know) the truth for years.', options: ['have known', 'have been knowing'], correctAnswer: 0, explanation: 'Know is a state verb.' },
      { id: '1-t3', type: 'test', title: 'Test: Quantity', question: 'He ____ (eat) six Chocolate Frogs.', options: ['has eaten', 'has been eating'], correctAnswer: 0, explanation: 'Number (six) = Simple.' },

      // NEW DRAG & DROP (3 sets)
      { id: '1-m1', type: 'match', title: 'Match: Tense to Usage', pairs: [ {left: 'Simple', right: 'Result / Quantity'}, {left: 'Continuous', right: 'Process / Duration'}, {left: 'State Verbs', right: 'No Continuous'} ] },
      { id: '1-m2', type: 'match', title: 'Match: Sentences', pairs: [ {left: 'I have painted...', right: 'the room (Done)'}, {left: 'I have been painting...', right: 'the room (Still wet)'}, {left: 'I have known...', right: 'him for years'} ] },
      { id: '1-m3', type: 'match', title: 'Match: Time Markers', pairs: [ {left: 'For 3 hours', right: 'Duration'}, {left: 'Twice', right: 'Quantity'}, {left: 'Just', right: 'Recent Result'} ] },

      { id: '1-8', type: 'reading', title: 'Reading: The Letter', passage: "Dear Mum, I have been studying all week. I have written three essays.", question: "Why is the writer exhausted?" },
      { id: '1-t_fin', type: 'test', title: 'Final Challenge', question: 'It ____ (rain) all day.', options: ['has rained', 'has been raining'], correctAnswer: 1 }
    ]
  },
  {
    id: 'topic-2',
    title: '9.2 Deduction: Potions',
    theme: 'hp-slytherin',
    slides: [
      { id: '2-1', type: 'intro', title: 'The Pink Cauldron', imageUrl: IMG_POTION, leadText: 'Snape finds a mysterious cauldron.', bulletPoints: [ { lang: 'en', label: 'Scene', text: 'The dungeon is cold. A lonely cauldron bubbles.' } ] },
      { id: '2-2', type: 'concept', title: 'Meaning 1: MUST', imageUrl: IMG_VICTORY, leadText: 'Certainty', bulletPoints: [ { lang: 'en', label: 'Rule', text: '**95-100% Sure**. "It **must be** a love potion."' } ] },
      { id: '2-3', type: 'concept', title: 'Meaning 2: CAN\'T', imageUrl: IMG_CASTLE, leadText: 'Impossibility', bulletPoints: [ { lang: 'en', label: 'Rule', text: '**100% Impossible**. "It **can\'t be** Polyjuice."' } ] },
      { id: '2-4', type: 'concept', title: 'Meaning 3: MIGHT/COULD', imageUrl: IMG_THOUGHT, leadText: 'Uncertainty', bulletPoints: [ { lang: 'en', label: 'Rule', text: '**50% Possible**. "It **might be** Felix Felicis."' } ] },
      { id: '2-5', type: 'timeline', title: 'Certainty Scale', leadText: 'Probability Meter', visualData: [ { label: "CAN'T", percentage: 10, type: 'start', color: 'red' }, { label: "MIGHT", percentage: 50, type: 'point', color: 'purple' }, { label: "MUST", percentage: 90, type: 'end', color: 'green' } ] },
      { id: '2-6', type: 'concept', title: 'Rule: The Trap', imageUrl: IMG_SCROLL, leadText: 'Prohibition vs Logic', bulletPoints: [ { lang: 'en', label: 'Trap', text: 'Never say "Mustn\'t" for deduction. Use "Can\'t".' } ] },

      // Original Checks
      { id: '2-q1', type: 'quiz', title: 'Kahoot: The Trap', question: 'Harry isn\'t in bed. He ____ be there.', options: ['mustn\'t', 'can\'t', 'shouldn\'t', 'not'], correctAnswer: 1, explanation: 'Logical impossibility = Can\'t.' },
      { id: '2-q2', type: 'quiz', title: 'Kahoot: Continuous', question: 'Seamus ____ pyrotechnics.', options: ['must do', 'must be doing', 'can do', 'might do'], correctAnswer: 1, explanation: 'Action right now = Must be doing.' },

      // NEW KAHOOT (3 more)
      { id: '2-nq1', type: 'quiz', title: 'Kahoot: Evidence', question: 'He is holding a broom. He ____ play Quidditch.', options: ['must', 'can\'t', 'shouldn\'t', 'mustn\'t'], correctAnswer: 0, explanation: 'Strong evidence = Must.' },
      { id: '2-nq2', type: 'quiz', title: 'Kahoot: Impossible', question: 'A giant ____ fit in this tiny box!', options: ['must', 'might', 'can\'t', 'could'], correctAnswer: 2, explanation: 'Impossible size = Can\'t.' },
      { id: '2-nq3', type: 'quiz', title: 'Kahoot: Maybe', question: 'Where is Ron? He ____ be in the kitchen.', options: ['must', 'might', 'can\'t', 'won\'t'], correctAnswer: 1, explanation: 'Not sure = Might.' },

      // NEW TESTS (3 more)
      { id: '2-t1', type: 'test', title: 'Test: Gap Fill', question: 'The potion is gold. It ____ (be) Felix Felicis.', options: ['must be', 'can\'t be'], correctAnswer: 0, explanation: 'Matches description = Must be.' },
      { id: '2-t2', type: 'test', title: 'Test: Logic', question: 'He is speaking Parseltongue. He ____ (be) a Muggle.', options: ['must be', 'can\'t be'], correctAnswer: 1, explanation: 'Muggles can\'t speak it = Can\'t be.' },
      { id: '2-t3', type: 'test', title: 'Test: Action', question: 'Look at her eyes! She ____ (read) a spell.', options: ['must read', 'must be reading'], correctAnswer: 1, explanation: 'Action now = Must be reading.' },

      // NEW DRAG & DROP (3 sets)
      { id: '2-m1', type: 'match', title: 'Match: Logic', pairs: [ {left: '100% Sure', right: 'Must'}, {left: 'Impossible', right: 'Can\'t'}, {left: '50% Possible', right: 'Might / Could'} ] },
      { id: '2-m2', type: 'match', title: 'Match: Evidence', pairs: [ {left: 'Sweating', right: 'Must be hot'}, {left: 'Smiling', right: 'Must be happy'}, {left: 'Crying', right: 'Must be sad'} ] },
      { id: '2-m3', type: 'match', title: 'Match: Errors', pairs: [ {left: 'He mustn\'t be home', right: 'WRONG'}, {left: 'He can\'t be home', right: 'CORRECT'}, {left: 'He might is home', right: 'WRONG (might be)'} ] },

      { id: '2-8', type: 'reading', title: 'Reading: Mystery', passage: "Draco is walking down the hall, looking nervous. He might be hiding something.", question: "Why is he nervous?" },
      { id: '2-9', type: 'speaking', title: 'Speaking: Deduction', speakingPrompts: ['Deduce why the floor is wet.'] },
      { id: '2-t_fin', type: 'test', title: 'Final Deduction', question: 'It ____ be Polyjuice!', options: ['must', 'can\'t'], correctAnswer: 1 }
    ]
  },
  {
    id: 'topic-3',
    title: '10.2 Articles: Diagon Alley',
    theme: 'hp-ravenclaw',
    slides: [
      { id: '3-1', type: 'intro', title: 'Context', imageUrl: IMG_OWL, leadText: 'Shopping for school supplies.', bulletPoints: [ { lang: 'en', label: 'Harry', text: 'He needs a wand, an owl, and books.' } ] },
      { id: '3-2', type: 'concept', title: 'Meaning (MFP)', imageUrl: IMG_WAND, leadText: 'A/An vs The', bulletPoints: [ { lang: 'en', label: 'A/An', text: 'New information.' }, { lang: 'en', label: 'The', text: 'Specific information.' } ] },
      { id: '3-q1', type: 'quiz', title: 'Kahoot: A or The', question: 'Look at ____ moon!', options: ['a', 'an', 'the', '-'], correctAnswer: 2 },
      { id: '3-q2', type: 'quiz', title: 'Kahoot: General', question: '____ Owls are useful.', options: ['The', 'A', 'An', '(-)'], correctAnswer: 3 },
      // Reduced for brevity but fully functional
      { id: '3-m1', type: 'match', title: 'Match: Articles', pairs: [ {left: 'A/An', right: 'One of many'}, {left: 'The', right: 'Specific / Unique'}, {left: '(-)', right: 'General Plural'} ] }
    ]
  },
  {
    id: 'topic-4',
    title: '7.1 Used to/Would: History',
    theme: 'hp-hufflepuff',
    slides: [
      { id: '4-1', type: 'intro', title: 'Context', imageUrl: IMG_SCROLL, leadText: 'The Founders.', bulletPoints: [ { lang: 'en', label: 'Past', text: 'Things were different.' } ] },
      { id: '4-2', type: 'concept', title: 'Meaning', imageUrl: IMG_CASTLE, leadText: 'Habits vs States', bulletPoints: [ { lang: 'en', label: 'Used to', text: 'States OR Habits.' }, { lang: 'en', label: 'Would', text: 'Habits ONLY.' } ] },
      { id: '4-q1', type: 'quiz', title: 'Kahoot: Selection', question: 'Salazar ____ have a basilisk.', options: ['would', 'used to', 'use to', 'was'], correctAnswer: 1 },
      { id: '4-m1', type: 'match', title: 'Match: Usage', pairs: [ {left: 'Used to', right: 'State or Action'}, {left: 'Would', right: 'Action Only'}, {left: 'Use to', right: 'Question/Negative Form'} ] }
    ]
  },
  {
    id: 'topic-5',
    title: '9.1 Comparatives: Brooms',
    theme: 'hp-winter',
    slides: [
      { id: '5-1', type: 'intro', title: 'Context', imageUrl: IMG_BROOM, leadText: 'Quidditch Supplies.', bulletPoints: [ { lang: 'en', label: 'Nimbus', text: 'Fast.' } ] },
      { id: '5-2', type: 'concept', title: 'Form', imageUrl: IMG_SNITCH, leadText: 'Comparisons', bulletPoints: [ { lang: 'en', label: 'Short', text: 'Adj + er' }, { lang: 'en', label: 'Long', text: 'More + Adj' } ] },
      { id: '5-q1', type: 'quiz', title: 'Kahoot: Modifiers', question: 'The Firebolt is ____ expensive.', options: ['very', 'much', 'many', 'lot'], correctAnswer: 1 },
      { id: '5-m1', type: 'match', title: 'Match: Forms', pairs: [ {left: 'Fast', right: 'Faster'}, {left: 'Good', right: 'Better'}, {left: 'Expensive', right: 'More Expensive'} ] }
    ]
  },
  {
    id: 'topic-6',
    title: '8.2 Unreal: Ministry',
    theme: 'hp-gryffindor',
    slides: [
      { id: '6-1', type: 'intro', title: 'Context', imageUrl: IMG_CASTLE, leadText: 'Mirror of Erised.', bulletPoints: [ { lang: 'en', label: 'Ron', text: 'He sees himself as Head Boy.' } ] },
      { id: '6-2', type: 'concept', title: 'Form', imageUrl: IMG_SCROLL, leadText: '2nd Conditional', bulletPoints: [ { lang: 'en', label: 'Structure', text: 'If + Past, ... would + V1' } ] },
      { id: '6-q1', type: 'quiz', title: 'Kahoot: Tense', question: 'If I ____ magic, I would fly.', options: ['know', 'knew', 'would know', 'have known'], correctAnswer: 1 },
      { id: '6-m1', type: 'match', title: 'Match: Parts', pairs: [ {left: 'If clause', right: 'Past Simple'}, {left: 'Result clause', right: 'Would + V1'}, {left: 'Be', right: 'Were'} ] }
    ]
  },
  {
    id: 'topic-7',
    title: '7.2 Questions: Rita Skeeter',
    theme: 'hp-slytherin',
    slides: [
      { id: '7-1', type: 'intro', title: 'Context', imageUrl: IMG_SCROLL, leadText: 'The Interview.', bulletPoints: [ { lang: 'en', label: 'Rita', text: 'Prying questions.' } ] },
      { id: '7-2', type: 'concept', title: 'Concept', imageUrl: IMG_OWL, leadText: 'Subject vs Object', bulletPoints: [ { lang: 'en', label: 'Object', text: 'Needs DID.' }, { lang: 'en', label: 'Subject', text: 'No DID.' } ] },
      { id: '7-q1', type: 'quiz', title: 'Kahoot: Identify', question: 'Who ____ the window?', options: ['did break', 'broke', 'does break', 'broken'], correctAnswer: 1 },
      { id: '7-m1', type: 'match', title: 'Match: Types', pairs: [ {left: 'Who saw you?', right: 'Subject Q'}, {left: 'Who did you see?', right: 'Object Q'}, {left: 'Do you know...', right: 'Indirect Q'} ] }
    ]
  },
  {
    id: 'topic-8',
    title: '8.1 Real Conditionals: Exams',
    theme: 'hp-ravenclaw',
    slides: [
      { id: '8-1', type: 'intro', title: 'Context', imageUrl: IMG_SCROLL, leadText: 'Exams.', bulletPoints: [ { lang: 'en', label: 'First', text: 'Future possibilities.' } ] },
      { id: '8-2', type: 'concept', title: 'Form', imageUrl: IMG_WAND, leadText: 'Unless', bulletPoints: [ { lang: 'en', label: 'Unless', text: 'If not.' } ] },
      { id: '8-q1', type: 'quiz', title: 'Kahoot: Logic', question: 'I won\'t go ____ you come.', options: ['if', 'unless', 'when', 'as'], correctAnswer: 1 },
      { id: '8-m1', type: 'match', title: 'Match: Meaning', pairs: [ {left: 'Unless', right: 'If not'}, {left: 'If I study', right: 'I will pass'}, {left: 'If I don\'t study', right: 'I won\'t pass'} ] }
    ]
  },
  {
    id: 'topic-9',
    title: '11.2 Regret: Quidditch',
    theme: 'hp-winter',
    slides: [
      { id: '9-1', type: 'intro', title: 'Context', imageUrl: IMG_SNITCH, leadText: 'Lost Match.', bulletPoints: [ { lang: 'en', label: 'Oliver', text: 'He is yelling.' } ] },
      { id: '9-2', type: 'concept', title: 'Meaning', imageUrl: IMG_BROOM, leadText: 'Past Criticism', bulletPoints: [ { lang: 'en', label: 'Should have', text: 'Good idea, didn\'t do.' } ] },
      { id: '9-q1', type: 'quiz', title: 'Kahoot: Form', question: 'You should have ____.', options: ['listen', 'listened', 'listening', 'listens'], correctAnswer: 1 },
      { id: '9-m1', type: 'match', title: 'Match: Regret', pairs: [ {left: 'Should have caught', right: 'I missed it'}, {left: 'Shouldn\'t have eaten', right: 'I ate it'}, {left: 'I regret', right: 'My past action'} ] }
    ]
  },
  {
    id: 'topic-10',
    title: '12.1 Reported: Pensieve',
    theme: 'hp-dark',
    slides: [
      { id: '10-1', type: 'intro', title: 'Context', imageUrl: IMG_WAND, leadText: 'Memories.', bulletPoints: [ { lang: 'en', label: 'Context', text: 'Backshift tenses.' } ] },
      { id: '10-2', type: 'concept', title: 'Rules', imageUrl: IMG_SCROLL, leadText: 'Backshift', bulletPoints: [ { lang: 'en', label: 'Present', text: '-> Past' }, { lang: 'en', label: 'Past', text: '-> Past Perfect' } ] },
      { id: '10-q1', type: 'quiz', title: 'Kahoot: Shift', question: '"I am happy." -> He said he ____ happy.', options: ['is', 'was', 'had been', 'has been'], correctAnswer: 1 },
      { id: '10-m1', type: 'match', title: 'Match: Tense Shift', pairs: [ {left: 'Am/Is/Are', right: 'Was/Were'}, {left: 'Will', right: 'Would'}, {left: 'Have/Has', right: 'Had'} ] }
    ]
  },
  {
    id: 'topic-11',
    title: '12.2 Reported Q: Sorting',
    theme: 'hp-dark',
    slides: [
      { id: '11-1', type: 'intro', title: 'Context', imageUrl: IMG_CASTLE, leadText: 'Sorting Hat.', bulletPoints: [ { lang: 'en', label: 'Hat', text: 'Questions.' } ] },
      { id: '11-2', type: 'concept', title: 'Form', imageUrl: IMG_SCROLL, leadText: 'Yes/No vs Wh', bulletPoints: [ { lang: 'en', label: 'Yes/No', text: 'Use If/Whether' } ] },
      { id: '11-q1', type: 'quiz', title: 'Kahoot: Connector', question: 'He asked ____ I was brave.', options: ['that', 'if', 'what', 'did'], correctAnswer: 1 },
      { id: '11-m1', type: 'match', title: 'Match: Connectors', pairs: [ {left: 'Yes/No Question', right: 'If / Whether'}, {left: 'Wh- Question', right: 'Wh- Word'}, {left: 'Statement', right: 'That'} ] }
    ]
  }
];