import { Topic } from '../types';

// --- SVG ASSET GENERATOR ---
// We use Data URIs to ensure images are pre-loaded with the bundle (No placeholders)

const svg = (content: string, bg: string) => 
  `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style="background:${bg};width:100%;height:100%;">${content}</svg>`)}`;

// 1. SURGICAL THEME (Blue/White, Clean, Geometric)
const SURGICAL_BG = '#f0f9ff';
const SURGICAL_DEFS = `
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0f2fe" stroke-width="1"/>
    </pattern>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)" />
`;
const IMG_SURGICAL_INTRO = svg(`${SURGICAL_DEFS}<circle cx="400" cy="300" r="150" fill="url(#blueGrad)"/><path d="M300 300 L500 300 L400 450 Z" fill="#0284c7" opacity="0.5"/><text x="400" y="300" font-family="sans-serif" font-weight="900" font-size="40" fill="#0369a1" text-anchor="middle" dominant-baseline="middle">MODULE INTRO</text>`, SURGICAL_BG);
const IMG_SURGICAL_CONCEPT = svg(`${SURGICAL_DEFS}<rect x="200" y="150" width="400" height="300" rx="20" fill="url(#blueGrad)"/><circle cx="600" cy="150" r="50" fill="#0ea5e9"/><text x="400" y="300" font-family="sans-serif" font-weight="900" font-size="40" fill="#0369a1" text-anchor="middle">CONCEPT DATA</text>`, SURGICAL_BG);
const IMG_SURGICAL_TEST = svg(`${SURGICAL_DEFS}<path d="M200 200 L600 200 L400 500 Z" fill="url(#blueGrad)" stroke="#0ea5e9" stroke-width="4"/><circle cx="400" cy="200" r="20" fill="#0284c7"/><text x="400" y="350" font-family="sans-serif" font-weight="900" font-size="40" fill="#ffffff" text-anchor="middle">ASSESSMENT</text>`, SURGICAL_BG);

// 2. GTA THEME (Dark, Neon Green, Scanlines, Wireframe)
const GTA_BG = '#020617';
const GTA_DEFS = `
  <defs>
    <pattern id="gtaGrid" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="none" stroke="#22c55e" stroke-width="0.5" opacity="0.3"/>
    </pattern>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#0f172a" />
  <rect width="100%" height="100%" fill="url(#gtaGrid)" />
`;
const IMG_GTA_HEIST = svg(`${GTA_DEFS}<rect x="100" y="100" width="600" height="400" fill="none" stroke="#22c55e" stroke-width="4" filter="url(#glow)"/><text x="400" y="300" font-family="monospace" font-weight="bold" font-size="60" fill="#22c55e" text-anchor="middle" filter="url(#glow)">MISSION: HEIST</text><path d="M100 100 L200 200" stroke="#22c55e" stroke-width="2"/><path d="M700 100 L600 200" stroke="#22c55e" stroke-width="2"/>`, GTA_BG);
const IMG_GTA_MONEY = svg(`${GTA_DEFS}<text x="400" y="300" font-family="monospace" font-weight="bold" font-size="120" fill="#22c55e" text-anchor="middle" opacity="0.2">$ $ $</text><path d="M200 300 L300 150 L400 300 L500 150 L600 300" fill="none" stroke="#4ade80" stroke-width="5" filter="url(#glow)"/><text x="400" y="500" font-family="monospace" font-size="40" fill="#4ade80" text-anchor="middle">LAUNDERED</text>`, GTA_BG);
const IMG_GTA_ACTION = svg(`${GTA_DEFS}<circle cx="400" cy="300" r="150" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="20,10" filter="url(#glow)"/><text x="400" y="300" font-family="monospace" font-weight="bold" font-size="50" fill="#ef4444" text-anchor="middle">WANTED *****</text>`, GTA_BG);
const IMG_GTA_MAP = svg(`${GTA_DEFS}<rect x="150" y="100" width="500" height="400" rx="20" fill="#1e293b" stroke="#22c55e" stroke-width="2"/><path d="M200 400 L300 200 L500 250 L600 150" fill="none" stroke="#22c55e" stroke-width="3" stroke-dasharray="10,5"/><circle cx="600" cy="150" r="10" fill="#ef4444" filter="url(#glow)"/><text x="400" y="80" font-family="monospace" font-size="30" fill="#22c55e" text-anchor="middle">GPS TRACKING</text>`, GTA_BG);

// 3. WUKONG THEME (Red/Gold, Clouds, Ancient, Ink)
const WUKONG_BG = '#450a0a';
const WUKONG_DEFS = `
  <defs>
    <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#fcd34d;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#b45309;stop-opacity:0.2" />
    </radialGradient>
    <pattern id="clouds" width="100" height="100" patternUnits="userSpaceOnUse">
       <path d="M10 50 Q 30 20 50 50 T 90 50" fill="none" stroke="#d97706" stroke-width="2" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#2a0a0a" />
  <rect width="100%" height="100%" fill="url(#clouds)" />
`;
const IMG_WUKONG_SAGE = svg(`${WUKONG_DEFS}<circle cx="400" cy="300" r="120" fill="url(#goldGrad)" opacity="0.6"/><text x="400" y="300" font-family="serif" font-weight="bold" font-size="80" fill="#fef3c7" text-anchor="middle" dominant-baseline="middle">SAGE</text><path d="M200 500 Q 400 400 600 500" fill="none" stroke="#f59e0b" stroke-width="5"/>`, WUKONG_BG);
const IMG_WUKONG_SCROLL = svg(`${WUKONG_DEFS}<rect x="200" y="100" width="400" height="400" fill="#fffbeb" rx="5"/><text x="400" y="300" font-family="serif" font-size="40" fill="#450a0a" text-anchor="middle" writing-mode="tb">ANCIENT WISDOM</text><rect x="180" y="80" width="40" height="440" fill="#78350f"/><rect x="580" y="80" width="40" height="440" fill="#78350f"/>`, WUKONG_BG);
const IMG_WUKONG_CLOUD = svg(`${WUKONG_DEFS}<path d="M200 300 Q 300 200 400 300 T 600 300" fill="none" stroke="#fcd34d" stroke-width="8" filter="url(#glow)"/><circle cx="400" cy="200" r="60" fill="#fcd34d" opacity="0.5"/><text x="400" y="450" font-family="serif" font-size="40" fill="#fcd34d" text-anchor="middle">NIMBUS</text>`, WUKONG_BG);


export const TOPICS: Topic[] = [
  {
    id: 'topic-1',
    title: '6.2 Present Perfect: The Big Score',
    theme: 'gta',
    slides: [
      {
        id: '1-1-a',
        type: 'intro',
        title: 'Lead-in: The Safehouse',
        imageUrl: IMG_GTA_HEIST, 
        leadText: 'Look at the crew.',
        bulletPoints: [
           { lang: 'en', label: 'Observe', text: 'Michael is drinking by the pool. Trevor is covered in mud.' }
        ]
      },
      {
        id: '1-1-b',
        type: 'concept',
        title: 'Scenario A: Michael',
        imageUrl: IMG_GTA_MONEY,
        leadText: 'Michael has **laundered** the money.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'The job is done.' },
          { lang: 'en', label: 'Result', text: 'He is clean. The money is safe.' }
        ]
      },
      {
        id: '1-1-c',
        type: 'concept',
        title: 'Scenario B: Trevor',
        imageUrl: IMG_GTA_ACTION, 
        leadText: 'Trevor has **been burying** the gold.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'He is still dirty from the desert.' },
          { lang: 'en', label: 'Activity', text: 'He has dirt on his hands. He might not be finished.' }
        ]
      },
      {
        id: '1-1-d',
        type: 'intro',
        title: 'Critical Choice',
        imageUrl: IMG_GTA_MAP,
        leadText: 'Analyze the Heist.',
        question: 'Which sentence focuses on the PAYOUT (Result)? Which one focuses on the GRIND (Activity)?'
      },
      {
        id: '1-2-a',
        type: 'concept',
        title: 'Continuous: The Grind',
        imageUrl: IMG_GTA_ACTION,
        leadText: 'Present Perfect **Continuous**',
        bulletPoints: [
          { lang: 'en', label: 'Focus', text: 'Focuses on the **ACTIVITY** (The Heist/Chase).' },
          { lang: 'en', label: 'Detail', text: 'Action is unfinished or explains a physical state (Wasted/Tired).' }
        ]
      },
      {
        id: '1-2-b',
        type: 'concept',
        title: 'Simple: Mission Passed',
        imageUrl: IMG_GTA_MONEY,
        leadText: 'Present Perfect **Simple**',
        bulletPoints: [
          { lang: 'en', label: 'Focus', text: 'Focuses on the **RESULT** (Mission Passed).' },
          { lang: 'en', label: 'Detail', text: 'The job is done. We see the money.' }
        ]
      },
      {
        id: '1-2-c',
        type: 'concept',
        title: 'Translations',
        imageUrl: IMG_GTA_MAP,
        bulletPoints: [
          { lang: 'uz', label: 'Continuous', text: 'Harakatning o‘ziga urg‘u (Jarayon). Ish tugamagan bo‘lishi mumkin.' },
          { lang: 'uz', label: 'Simple', text: 'Natijaga urg‘u (Mission Passed).' },
          { lang: 'ru', label: 'Continuous', text: 'Акцент на **процессе** (Погоня/Стрельба).' },
          { lang: 'ru', label: 'Simple', text: 'Акцент на **результате** (Деньги получены).' }
        ]
      },
      {
        id: '1-3-a',
        type: 'intro',
        title: 'Concept Check 1',
        imageUrl: IMG_GTA_ACTION,
        leadText: 'Franklin is out of breath.',
        bulletPoints: [
            { lang: 'en', label: 'Situation', text: 'Franklin is sweating and panting behind a wall.' }
        ]
      },
      {
        id: '1-3-b',
        type: 'quiz',
        title: 'Concept Check 1: Question',
        imageUrl: IMG_GTA_ACTION,
        question: 'What do you say?',
        options: ['You have escaped.', 'You have been running from the cops.'],
        correctAnswer: 1,
        explanation: 'Correct! We see the physical evidence of the activity (sweat/breath).'
      },
      {
        id: '1-4-a',
        type: 'intro',
        title: 'Concept Check 2',
        imageUrl: IMG_GTA_MONEY,
        leadText: 'The Union Depository Vault.',
        bulletPoints: [
            { lang: 'en', label: 'Situation', text: 'The vault door is open. The gold bars are GONE.' }
        ]
      },
      {
        id: '1-4-b',
        type: 'quiz',
        title: 'Concept Check 2: Question',
        imageUrl: IMG_GTA_MONEY,
        question: 'What happened?',
        options: ['Someone has stolen the gold.', 'Someone has been stealing the gold.'],
        correctAnswer: 0,
        explanation: 'Correct! The gold is gone. Result achieved.'
      },
      {
        id: '1-5-a',
        type: 'intro',
        title: 'Concept Check 3',
        imageUrl: IMG_GTA_MAP,
        leadText: 'Lester Crest at his computer.',
        bulletPoints: [
            { lang: 'en', label: 'Situation', text: 'Lester started hacking the FIB server an hour ago. He is still typing.' }
        ]
      },
      {
        id: '1-5-b',
        type: 'quiz',
        title: 'Concept Check 3: Question',
        imageUrl: IMG_GTA_MAP,
        question: 'Which is correct?',
        options: ['I have hacked the server.', 'I have been hacking the server.'],
        correctAnswer: 1,
        explanation: 'Correct! The hacking is unfinished. He is still doing it.'
      },
      {
        id: '1-6-a',
        type: 'timeline',
        title: 'Timeline: Continuous',
        leadText: 'Present Perfect **Continuous**',
        visualContext: 'Wanted Level Active',
        visualData: [
            { label: 'Crime', subLabel: 'Start', percentage: 10, type: 'start', color: 'red' },
            { label: 'Evading', subLabel: 'Driving Fast', percentage: 50, type: 'range', color: 'orange' },
            { label: 'NOW', subLabel: 'Still Wanted', percentage: 90, type: 'end', color: 'green' }
        ]
      },
      {
        id: '1-6-b',
        type: 'timeline',
        title: 'Timeline: Simple',
        leadText: 'Present Perfect **Simple**',
        visualContext: 'Wanted Level Gone',
        visualData: [
            { label: 'Escape', subLabel: 'Action', percentage: 40, type: 'range', color: 'blue' },
            { label: 'HIDDEN', subLabel: 'Stars Flashing', percentage: 60, type: 'point', color: 'red' },
            { label: 'NOW', subLabel: 'Safe', percentage: 90, type: 'end', color: 'green' }
        ]
      },
      {
        id: '1-6-c',
        type: 'concept',
        title: 'Timeline Intel',
        imageUrl: IMG_GTA_MAP,
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: '"I\'ve been driving for hours." (Focus on the getaway duration.)' },
          { lang: 'en', label: 'Simple', text: '"I\'ve lost the cops." (Focus on safety.)' },
          { lang: 'en', label: 'State Verbs', text: 'Verbs like "Own", "Know", "Have" (property) use **Simple**. "I have owned this garage for years."' }
        ]
      },
      {
        id: '1-7-a',
        type: 'concept',
        title: 'Example 1: Planning vs Ready',
        imageUrl: IMG_GTA_HEIST,
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: 'Lester has **been planning** the heist all week. (He is busy.)' },
          { lang: 'en', label: 'Simple', text: 'Lester has **planned** the heist. (We are ready to go.)' }
        ]
      },
      {
        id: '1-7-b',
        type: 'concept',
        title: 'Example 2: Damage',
        imageUrl: IMG_GTA_ACTION,
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: 'Why is the car smoking? I\'ve **been drifting**. (Explanation of state).' },
          { lang: 'en', label: 'Simple', text: 'I have **crashed** the car. (It is destroyed).' }
        ]
      },
      {
        id: '1-7-c',
        type: 'concept',
        title: 'Example 3: Duration vs Count',
        imageUrl: IMG_GTA_MONEY,
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: 'How long **have you been modding** this car?' },
          { lang: 'en', label: 'Simple', text: 'How many cars **have you stolen** today?' }
        ]
      },
      {
        id: '1-8',
        type: 'test',
        title: 'Job Test 1',
        imageUrl: IMG_GTA_ACTION,
        question: 'Look at Trevor\'s truck! It\'s covered in mud. He ______ off-road.',
        options: ['has driven', 'has been driving', 'drove'],
        correctAnswer: 1,
        explanation: 'Evidence (mud) implies recent continuous activity.'
      },
      {
        id: '1-9',
        type: 'test',
        title: 'Job Test 2',
        imageUrl: IMG_GTA_MONEY,
        question: 'I ______ three banks this month.',
        options: ['have been robbing', 'have robbed', 'rob'],
        correctAnswer: 1,
        explanation: 'Quantity specified (3 banks) = Simple.'
      },
      {
        id: '1-10',
        type: 'test',
        title: 'Job Test 3',
        imageUrl: IMG_GTA_MAP,
        question: 'Lester is angry. "Where are you? I ______ for 20 minutes!"',
        options: ['have waited', 'did wait', 'have been waiting'],
        correctAnswer: 2,
        explanation: 'Focus on duration up to now.'
      },
      {
        id: '1-11',
        type: 'quiz',
        title: 'True/False Quiz',
        imageUrl: IMG_GTA_ACTION,
        question: 'True or False: We use Continuous to say how many guards we have knocked out.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Quantities use Simple.'
      },
      {
        id: '1-12',
        type: 'quiz',
        title: 'Spot the Snitch',
        imageUrl: IMG_GTA_HEIST,
        question: 'Is this correct? "I have been knowing Michael for 10 years."',
        options: ['Yes', 'No, "know" is a state verb.'],
        correctAnswer: 1,
        explanation: 'Correct. "Know" is a state verb. Use "have known".'
      },
      {
        id: '1-13',
        type: 'quiz',
        title: 'Context Match',
        imageUrl: IMG_GTA_ACTION,
        question: 'Your hands are covered in grease. Why?',
        options: ["I've fixed the engine.", "I've been fixing the engine."],
        correctAnswer: 1,
        explanation: 'Grease on hands is evidence of the activity.'
      },
      {
        id: '1-14',
        type: 'test',
        title: 'Rapid Fire',
        question: 'Select the one that implies UNFINISHED action.',
        imageUrl: IMG_GTA_HEIST,
        options: ['He has escaped prison.', 'She has bought a weapon.', 'I\'ve been scoping out the bank.'],
        correctAnswer: 2
      },
      {
        id: '1-15',
        type: 'gap-fill',
        title: 'Heist Prep 1',
        imageUrl: IMG_GTA_ACTION,
        leadText: '"You look exhausted, Franklin!" "Yes, I __________ (work) on the car all night."',
        correctAnswer: 'have been working'
      },
      {
        id: '1-16',
        type: 'gap-fill',
        title: 'Heist Prep 2',
        imageUrl: IMG_GTA_MONEY,
        leadText: '"Mission Passed! You __________ (win) the race!"',
        correctAnswer: 'have won'
      },
      {
        id: '1-17',
        type: 'gap-fill',
        title: 'Heist Prep 3',
        imageUrl: IMG_GTA_MAP,
        leadText: '"Lester, pick up! What __________ (you / do) all morning?"',
        correctAnswer: 'have you been doing'
      },
      {
        id: '1-18-a',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: IMG_GTA_HEIST,
        passage: '"The crew **has been planning** the Union Depository job for months. They **have found** a weakness in the security. The guards **have been patrolling** the same route every day. Recently, Trevor **has stolen** a helicopter for the getaway. The FIB **has been watching** them closely."',
        question: 'Q1: Why "have been planning"?',
        options: ['Because the plan is finished.', 'Because it is a long process continuing up to now.'],
        correctAnswer: 1
      },
      {
        id: '1-18-b',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: IMG_GTA_MAP,
        passage: '"...They **have found** a weakness in the security..."',
        question: 'Q2: "They have found..." implies:',
        options: ['A completed result / discovery.', 'An ongoing search.'],
        correctAnswer: 0
      },
      {
        id: '1-18-c',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: IMG_GTA_ACTION,
        passage: '"...The guards **have been patrolling** the same route every day..."',
        question: 'Q3: "Have been patrolling" focuses on:',
        options: ['The total number of patrols.', 'The repeated continuous activity.'],
        correctAnswer: 1
      },
      {
        id: '1-18-d',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: IMG_GTA_ACTION,
        passage: '"...Recently, Trevor **has stolen** a helicopter for the getaway..."',
        question: 'Q4: Why "has stolen"?',
        options: ['The helicopter is now in his possession (Result).', 'He is still stealing it.'],
        correctAnswer: 0
      },
      {
        id: '1-18-e',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: IMG_GTA_MAP,
        passage: '"...The FIB **has been watching** them closely."',
        question: 'Q5: "Has been watching" means:',
        options: ['They watched once.', 'They have done this repeatedly recently and might continue.'],
        correctAnswer: 1
      },
      {
        id: '1-19-a',
        type: 'speaking',
        title: 'Interrogation 1',
        imageUrl: IMG_GTA_HEIST,
        leadText: 'Record your answer for the FIB.',
        speakingPrompts: [
          'Why are your clothes dirty? What have you been doing in the desert?'
        ]
      },
      {
        id: '1-19-b',
        type: 'speaking',
        title: 'Interrogation 2',
        imageUrl: IMG_GTA_MONEY,
        leadText: 'Record your answer for the FIB.',
        speakingPrompts: [
          'How much money have you stolen from the bank? (Use Simple)'
        ]
      },
      {
        id: '1-19-c',
        type: 'speaking',
        title: 'Interrogation 3',
        imageUrl: IMG_GTA_ACTION,
        leadText: 'Record your answer for the FIB.',
        speakingPrompts: [
          'You look tired. Have you been running from the police?'
        ]
      }
    ]
  },
  {
    id: 'topic-2',
    title: '9.2 Modals of Deduction',
    slides: [
      {
        id: '2-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Look at the scenario.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'A Ferrari parked outside a ruined house.' },
          { lang: 'en', label: 'Deduction', text: 'He MUST be rich to buy the car. He CAN\'T live in that house!' }
        ],
        question: 'How do we change the word "tall" to compare two things vs one thing to everything?'
      },
      {
        id: '2-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: 'MUST', text: '90-100% Sure it is TRUE.' },
          { lang: 'en', label: 'CAN\'T', text: '90-100% Sure it is FALSE.' },
          { lang: 'en', label: 'MIGHT/COULD', text: '50% Sure. Possible.' },
          { lang: 'uz', label: 'Must', text: 'Aniq shunday bo‘lishi kerak.' },
          { lang: 'uz', label: 'Can\'t', text: 'Bunday bo‘lishi mumkin emas.' },
          { lang: 'ru', label: 'Must', text: 'Должно быть (уверенность).' }
        ]
      },
      {
        id: '2-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'The lights are off. The car is gone. They _____ be home.',
        options: ['must', "can't"],
        correctAnswer: 1
      },
      {
        id: '2-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'She is speaking fluent Japanese. She _____ be from Japan or studied there.',
        options: ['must', "can't"],
        correctAnswer: 0
      },
      {
        id: '2-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'The sky is grey. It _____ rain later.',
        options: ['must', 'might'],
        correctAnswer: 1
      },
      {
        id: '2-6-a',
        type: 'timeline',
        title: 'Certainty Scale',
        leadText: 'Degree of Certainty & Possibility',
        visualContext: 'The Probability Cline',
        visualData: [
            { label: "CAN'T", subLabel: 'Impossible (0%)', percentage: 10, type: 'point', color: 'red' },
            { label: "MIGHT / COULD", subLabel: 'Possible (50%)', percentage: 50, type: 'point', color: 'orange' },
            { label: "MUST", subLabel: 'Certain (100%)', percentage: 90, type: 'point', color: 'green' }
        ]
      },
      {
        id: '2-6-b',
        type: 'concept',
        title: 'Key Scale Points',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: '0% (Impossible)', text: "CAN'T: 'It can't be true.'" },
          { lang: 'en', label: '50% (Possible)', text: "MIGHT / COULD: 'It might be true.'" },
          { lang: 'en', label: '100% (Certainty)', text: "MUST: 'It must be true.'" }
        ]
      },
      {
        id: '2-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: 'True Certainty', text: 'Look at his Rolex. He MUST be wealthy.' },
          { lang: 'en', label: 'False Certainty', text: 'He’s been under water for 10 mins. He CAN\'T be alive.' },
          { lang: 'en', label: 'Possibility', text: 'It MIGHT be in the kitchen.' }
        ]
      },
      {
        id: '2-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'That woman looks exactly like Beyonce.',
        options: ['She must be her sister.', "She can't be her sister.", "She mustn't be her sister."],
        correctAnswer: 0
      },
      {
        id: '2-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'You just ate a whole pizza! You _____ be hungry already.',
        options: ['might', 'must', "can't"],
        correctAnswer: 2
      },
      {
        id: '2-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Someone is knocking." "It _____ be the postman. He usually comes at this time."',
        options: ["can't", 'could', "won't"],
        correctAnswer: 1
      },
      {
        id: '2-11',
        type: 'quiz',
        title: 'Odd One Out',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Which word implies 50% possibility?',
        options: ['Must', 'Could', "Can't"],
        correctAnswer: 1
      },
      {
        id: '2-12',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Transform: "I\'m sure he is French."',
        options: ['He might be French.', 'He must be French.'],
        correctAnswer: 1
      },
      {
        id: '2-13',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Transform: "It is impossible that that is my phone."',
        options: ["That can't be my phone.", "That mustn't be my phone."],
        correctAnswer: 0
      },
      {
        id: '2-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"A human ____ walk there!"',
        options: ['must', "can't", 'might'],
        correctAnswer: 1
      },
      {
        id: '2-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"You\'ve been travelling for 24 hours. You __________ (be) exhausted."',
        correctAnswer: 'must be'
      },
      {
        id: '2-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"Whose bag is this?" "I\'m not sure. It __________ (belong) to the new student."',
        correctAnswer: 'might belong'
      },
      {
        id: '2-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"That answer __________ (be) right. Paris is in France, not Italy!"',
        correctAnswer: "can't be"
      },
      {
        id: '2-18',
        type: 'reading',
        title: 'Detective Reading',
        imageUrl: IMG_SURGICAL_TEST,
        passage: "The window was broken from the inside. 'The thief **must be** someone who works here,' said Detective Miller. 'They **can't be** a stranger, because the alarm didn't ring.'",
        question: 'Why does Miller think the thief works there?',
        options: ['He saw them.', 'He deduced it from the window.'],
        correctAnswer: 1
      },
      {
        id: '2-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Speculate on the situation.',
        speakingPrompts: [
          'Your best friend didn\'t come to school today. Where are they?',
          'You see a student holding a trophy and crying. Why?',
          'There is a rumor that a new student is a famous star. Look at their clothes.'
        ]
      }
    ]
  },
  {
    id: 'topic-3',
    title: '10.2 Articles (a/an, the, zero)',
    slides: [
      {
        id: '3-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Compare the two scenarios.',
        bulletPoints: [
          { lang: 'en', label: 'Scenario A', text: '"I want AN apple." (Any apple from the bowl will do.)' },
          { lang: 'en', label: 'Scenario B', text: '"I want THE apple." (The specific one on the desk.)' }
        ],
        question: 'Why does one sentence use "an" and the other use "the"?'
      },
      {
        id: '3-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: 'a/an (Indefinite)', text: 'One of many. First mention or professions.' },
          { lang: 'en', label: 'the (Definite)', text: 'The only one. Specific, unique, or mentioned before.' },
          { lang: 'en', label: 'No article (Zero)', text: 'General plurals, abstract nouns, locations like home/work.' },
          { lang: 'uz', label: 'a/an', text: 'Bir dona, noaniq narsa. Birinchi marta aytilganda.' },
          { lang: 'uz', label: 'the', text: 'Aniq narsa. Tinglovchi biladi.' },
          { lang: 'ru', label: 'a/an', text: 'Один из многих. Впервые или профессия.' },
          { lang: 'ru', label: 'the', text: 'Конкретный предмет.' }
        ]
      },
      {
        id: '3-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"I love ____ dogs." (Speaking generally about all dogs).',
        options: ['the', '(-) no article'],
        correctAnswer: 1,
        explanation: 'Correct! When talking about plural nouns in general, we use no article.'
      },
      {
        id: '3-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Look at ____ moon!"',
        options: ['a', 'the'],
        correctAnswer: 1,
        explanation: 'Correct! There is only one moon implies uniqueness.'
      },
      {
        id: '3-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"My brother is in ____ prison (he is a prisoner)."',
        options: ['the', '(-) no article'],
        correctAnswer: 1,
        explanation: 'Correct! If referring to the purpose (punishment), use no article.'
    },
    {
        id: '3-6-a',
        type: 'timeline',
        title: 'Decision Flowchart',
        leadText: 'Follow the steps to pick the right article',
        visualContext: 'The Article Logic Path',
        visualData: [
            { label: 'Countable?', subLabel: 'Count it?', percentage: 20, type: 'start', color: 'blue' },
            { label: 'Singular?', subLabel: 'Just one?', percentage: 50, type: 'point', color: 'purple' },
            { label: 'Specific?', subLabel: 'Known?', percentage: 80, type: 'end', color: 'green' }
        ]
    },
    {
        id: '3-6-b',
        type: 'concept',
        title: 'Flowchart Rules',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Step 1: Countable?', text: 'No -> Zero Article (water) or The.' },
            { lang: 'en', label: 'Step 2: Singular?', text: 'No (Plural) -> Zero (General) or The (Specific).' },
            { lang: 'en', label: 'Step 3: Specific?', text: 'Yes -> THE. No -> A/AN.' }
        ]
    },
    {
        id: '3-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'First vs Second Mention', text: 'I saw A movie. THE movie was scary.' },
            { lang: 'en', label: 'General vs Specific', text: '(-) Children learn fast. vs THE children in this class are smart.' },
            { lang: 'en', label: 'Special Places', text: 'He goes to (-) school (to study). vs Mom went to THE school (building).' }
        ]
    },
    {
        id: '3-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Can you shut ____ door, please?',
        options: ['a', 'the', '(-)'],
        correctAnswer: 1,
        explanation: 'Both speakers know which door.'
    },
    {
        id: '3-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'He is ____ engineer.',
        options: ['a', 'an', 'the'],
        correctAnswer: 1,
        explanation: 'Professions take a/an; starts with vowel sound.'
    },
    {
        id: '3-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'I usually have ____ lunch at 1 PM.',
        options: ['the', 'a', '(-)'],
        correctAnswer: 2,
        explanation: 'Meals usually take no article.'
    },
    {
        id: '3-11',
        type: 'quiz',
        title: 'True/False Quiz',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'True or False: We always use "the" with names of countries (e.g., The France).',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Only plural names or "Kingdom/Republic" (The USA, The UK).'
    },
    {
        id: '3-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Is "I want to learn the guitar" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 0,
        explanation: 'Yes. With musical instruments, we often use "the".'
    },
    {
        id: '3-13',
        type: 'quiz',
        title: 'Context Match',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Standing outside a hospital looking at the building: "I am looking at _____ hospital."',
        options: ['(-)', 'the'],
        correctAnswer: 1,
        explanation: 'You are referring to the specific building, not the medical service.'
    },
    {
        id: '3-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"I want to be ____ artist."',
        options: ['a', 'an', 'the'],
        correctAnswer: 1
    },
    {
        id: '3-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"I bought __________ (a/an/the) new phone yesterday."',
        correctAnswer: 'a'
    },
    {
        id: '3-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"Where is __________ (a/an/the) phone? I can\'t find it." (Referring to the one I bought).',
        correctAnswer: 'the'
    },
    {
        id: '3-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"My sister goes to __________ university in London." (Type - for no article)',
        correctAnswer: '-'
    },
    {
        id: '3-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SURGICAL_TEST,
        passage: "**The** Olympic Games originated long ago in **(-)** ancient Greece. One story about **the** origin concerns **the** god Zeus. It is said that he fought his father for **(-)** control of **the** world. The games were held in **a** valley called Olympia. Today, **(-)** athletes from all over the world travel to **the** games to compete for **(-)** gold medals.",
        question: 'Why "The Olympic Games"?',
        options: ['It is a specific, unique event.', 'It is a general game.'],
        correctAnswer: 0
    },
    {
        id: '3-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Record your answer.',
        speakingPrompts: [
          'Do you prefer books or movies? Tell me about the last movie you watched.',
          'What do you want to be in the future? (Use a/an for professions)',
          'Describe your school. Is the library big?'
        ]
      }
    ]
  },
  {
    id: 'topic-4',
    title: '7.1 Used to and would',
    slides: [
      {
        id: '4-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Compare Past vs Present.',
        bulletPoints: [
            { lang: 'en', label: 'Past', text: '"I used to be in a rock band. I would play guitar every day."' },
            { lang: 'en', label: 'Present', text: '"Now I am an accountant."' }
        ],
        question: 'Did he stop playing? Do these habits exist now?'
      },
      {
        id: '4-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: 'Used to', text: 'Past habits AND past states that are not true anymore.' },
          { lang: 'en', label: 'Would', text: 'ONLY for past habits / repeated actions. NOT for states.' },
          { lang: 'uz', label: 'Used to', text: 'O‘tmishdagi odatlar yoki holatlar (hozir mavjud emas).' },
          { lang: 'uz', label: 'Would', text: 'O‘tmishdagi takrorlanuvchi harakatlar. Holatlar uchun emas.' },
          { lang: 'ru', label: 'Used to', text: 'Прошлые привычки или состояния.' },
          { lang: 'ru', label: 'Would', text: 'Только для повторяющихся действий. Не для состояний.' }
        ]
      },
      {
        id: '4-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"I _____ have a small car, but now I have a big one."',
        options: ['used to', 'would'],
        correctAnswer: 0,
        explanation: 'Correct! "Have" here is a state (possession), so we cannot use "would".'
      },
      {
        id: '4-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Every summer, we _____ go to the beach."',
        options: ['used to', 'would', 'Both are correct'],
        correctAnswer: 2,
        explanation: 'Correct! "Go" is an action verb, so both are fine.'
      },
      {
        id: '4-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"I used to smoke." Does this person smoke now?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: '"Used to" implies the habit has stopped.'
      },
      {
        id: '4-6-a',
        type: 'timeline',
        title: 'Past Habits Timeline',
        leadText: 'Action happened regularly in past, not now.',
        visualContext: 'Broken Habits',
        visualData: [
            { label: 'Past Habit', subLabel: 'Repeated', percentage: 20, type: 'range', color: 'blue' },
            { label: 'STOP', subLabel: 'Change', percentage: 60, type: 'point', color: 'red' },
            { label: 'NOW', subLabel: 'Different', percentage: 90, type: 'end', color: 'purple' }
        ]
      },
      {
        id: '4-6-b',
        type: 'concept',
        title: 'Timeline Rules',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Rule', text: 'STATE VERBS (Love, Be, Have, Know) -> Only Used To.' },
            { lang: 'en', label: 'Action Verbs', text: 'Can use both Used To and Would.' }
        ]
      },
      {
        id: '4-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Action (Both OK)', text: 'We used to visit Grandma. / We would visit Grandma.' },
            { lang: 'en', label: 'State (Only Used To)', text: 'I used to live in Paris. (NOT would live)' },
            { lang: 'en', label: 'Negative', text: 'I didn\'t use to like coffee.' }
        ]
      },
      {
        id: '4-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'My grandfather ____ tell us amazing stories.',
        options: ['used to', 'would', 'Both A and B'],
        correctAnswer: 2,
        explanation: '"Tell" is an action.'
      },
      {
        id: '4-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'I ____ be afraid of the dark.',
        options: ['used to', 'would'],
        correctAnswer: 0,
        explanation: '"Be" is a state verb.'
      },
      {
        id: '4-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Did you _____ play football?',
        options: ['use to', 'used to'],
        correctAnswer: 0,
        explanation: 'In questions with "Did", we drop the "d".'
      },
      {
        id: '4-11',
        type: 'quiz',
        title: 'Categorization',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Is "Understand" a State or Action verb?',
        options: ['State', 'Action'],
        correctAnswer: 0,
        explanation: 'State. So use "used to", not "would".'
      },
      {
        id: '4-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Is "I would have long hair" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'No. Possession is a state. "I used to have long hair."'
      },
      {
        id: '4-13',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Would" adds a sense of nostalgia or storytelling.',
        options: ['True', 'False'],
        correctAnswer: 0
      },
      {
        id: '4-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"He ____ be a teacher."',
        options: ['used to', 'would'],
        correctAnswer: 0
      },
      {
        id: '4-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"Before the internet, people __________ (send) letters."',
        correctAnswer: 'used to send'
      },
      {
        id: '4-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"This building __________ (be) a cinema."',
        correctAnswer: 'used to be'
      },
      {
        id: '4-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"I __________ (not / use to) enjoy reading, but now I do."',
        correctAnswer: 'didn\'t use to'
      },
      {
        id: '4-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SURGICAL_TEST,
        passage: 'Office life has changed. In the past, people **would spend** ages typing documents on typewriters. There **used to be** a lot more paper everywhere. Managers **would smoke** inside the office! It **used to be** very noisy. People **didn\'t use to** have emails.',
        question: '"Would spend" refers to:',
        options: ['A single event.', 'A repeated habit in the past.'],
        correctAnswer: 1
      },
      {
        id: '4-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Record your answer about childhood.',
        speakingPrompts: [
          'What cartoons did you use to watch? Describe your routine.',
          'What food did you use to hate that you like now?',
          'How has your school life changed?'
        ]
      }
    ]
  },
  {
    id: 'topic-5',
    title: '9.1 Comparatives and Superlatives',
    slides: [
      {
        id: '5-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Compare the sizes.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'House: Small. Apartment: Taller than house. Burj Khalifa: The tallest.' },
        ],
        question: 'How do we change the word "tall" to compare two things vs one thing to everything?'
      },
      {
        id: '5-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: 'Comparatives', text: 'Compare two things. Keyword: THAN. (e.g., taller, more expensive)' },
          { lang: 'en', label: 'Superlatives', text: 'Compare one vs group. Keyword: THE. (e.g., the tallest)' },
          { lang: 'en', label: 'Modifiers', text: 'Small diff: a bit, slightly. Big diff: much, far, a lot.' },
          { lang: 'uz', label: 'Comparatives', text: 'Ikki narsani solishtirish. Kalit: than.' },
          { lang: 'uz', label: 'Superlatives', text: 'Eng katta/kichik. Kalit: the.' },
          { lang: 'ru', label: 'Comparatives', text: 'Сравнительная степень. Ключ: than.' },
          { lang: 'ru', label: 'Superlatives', text: 'Превосходная степень. Ключ: the.' }
        ]
      },
      {
        id: '5-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Ferrari is faster than Ford." How many cars are we talking about?',
        options: ['Two', 'All cars in the world'],
        correctAnswer: 0,
        explanation: 'Correct! Comparatives compare two specific things.'
      },
      {
        id: '5-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Mount Everest is the highest mountain."',
        options: ['Comparing it to one other mountain.', 'Comparing it to all mountains.'],
        correctAnswer: 1,
        explanation: 'Correct! Superlatives pick one out of a group.'
      },
      {
        id: '5-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"She is MUCH older than him." Is the age difference small or big?',
        options: ['Small', 'Big'],
        correctAnswer: 1,
        explanation: '"Much" indicates a large difference.'
      },
      {
        id: '5-6-a',
        type: 'timeline',
        title: 'Comparison Scale',
        leadText: 'Degrees of Comparison',
        visualContext: 'The Quality Scale',
        visualData: [
            { label: 'GOOD', subLabel: 'Base', percentage: 20, type: 'start', color: 'blue' },
            { label: 'BETTER', subLabel: 'Comparative', percentage: 50, type: 'point', color: 'orange' },
            { label: 'BEST', subLabel: 'Superlative', percentage: 80, type: 'end', color: 'green' }
        ]
      },
      {
        id: '5-6-b',
        type: 'concept',
        title: 'Formation Rules',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: '1 Syllable', text: 'add -er / -est (Fast -> Faster -> The Fastest)' },
            { lang: 'en', label: 'Ending in -y', text: 'remove -y, add -ier / -iest (Happy -> Happier)' },
            { lang: 'en', label: '2+ Syllables', text: 'add more / the most (Modern -> More modern)' },
            { lang: 'en', label: 'Irregular', text: 'Good -> Better -> Best | Bad -> Worse -> Worst' }
        ]
      },
      {
        id: '5-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Equality', text: 'I am AS TALL AS my dad. (Same height)' },
            { lang: 'en', label: 'Comparative', text: 'London is FAR MORE EXPENSIVE THAN Tashkent.' },
            { lang: 'en', label: 'Superlative', text: 'It was THE HAPPIEST day of my life.' }
        ]
      },
      {
        id: '5-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'This exam was ____ than the last one.',
        options: ['difficult', 'more difficult', 'most difficult'],
        correctAnswer: 1,
        explanation: 'Comparison + "than" requires comparative form.'
      },
      {
        id: '5-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Who is the ____ person in your family?',
        options: ['younger', 'youngest', 'most young'],
        correctAnswer: 1,
        explanation: 'Superlative requires "est".'
      },
      {
        id: '5-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'The weather is ____ better today.',
        options: ['a lot', 'more', 'very'],
        correctAnswer: 0,
        explanation: 'Modifier for comparative: "a lot better".'
      },
      {
        id: '5-11',
        type: 'quiz',
        title: 'Spelling Bee',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Make "Big" comparative.',
        options: ['Biger', 'Bigger'],
        correctAnswer: 1,
        explanation: 'Double the "g": Bigger.'
      },
      {
        id: '5-12',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'True or False: We can say "more gooder".',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Irregular: Better.'
      },
      {
        id: '5-13',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Rewrite: "Tom is taller than Jerry." -> "Jerry is not..."',
        options: ['...as short as Tom.', '...as tall as Tom.'],
        correctAnswer: 1,
        explanation: 'Jerry is not as tall as Tom.'
      },
      {
        id: '5-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"This is the ____ pizza I\'ve ever eaten."',
        options: ['best', 'better'],
        correctAnswer: 0
      },
      {
        id: '5-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"Calculus is __________ (complicated) than arithmetic."',
        correctAnswer: 'more complicated'
      },
      {
        id: '5-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"That is the __________ (bad) movie I have ever seen."',
        correctAnswer: 'worst'
      },
      {
        id: '5-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"She is a bit __________ (rich) than her sister."',
        correctAnswer: 'richer'
      },
      {
        id: '5-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SURGICAL_TEST,
        passage: 'Humans are **taller** now than in the past. Nutrition is **much better**. However, our brains are actually **slightly smaller** than they were 20,000 years ago. Life today is **easier** and **less dangerous** than it was for cavemen, so we don\'t need to be **as aggressive as** our ancestors.',
        question: 'Are humans the same height as in the past?',
        options: ['Yes.', 'No, they are taller.'],
        correctAnswer: 1
      },
      {
        id: '5-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Record your answer.',
        speakingPrompts: [
            'Compare iPhone and Samsung. Which is better? Which is more expensive?',
            'Is it harder to study Math or English? Why?',
            'Who is the most famous person in the world right now?'
        ]
      }
    ]
  },
  {
    id: 'topic-6',
    title: '8.2 Unreal Conditionals',
    slides: [
      {
        id: '6-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Reality vs Dream',
        bulletPoints: [
            { lang: 'en', label: 'Reality', text: 'He has no money. He cannot buy a plane.' },
            { lang: 'en', label: 'Dream', text: '"If I HAD a million dollars, I WOULD BUY a jet."' }
        ],
        question: 'Is this real or imaginary? Does he have the money now?'
      },
      {
        id: '6-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Use', text: 'Imaginary, impossible, or unlikely situations in PRESENT/FUTURE.' },
            { lang: 'en', label: 'Formula', text: 'If + Past Simple, ... would + Verb.' },
            { lang: 'en', label: 'Advice', text: 'Use "If I WERE you" (not was).' },
            { lang: 'uz', label: 'Ma’nosi', text: 'Hozirgi hayoliy vaziyatlar.' },
            { lang: 'ru', label: 'Значение', text: 'Воображаемые ситуации. "Если бы..."' }
        ]
      },
      {
        id: '6-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"If I had wings, I would fly." Do I have wings?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Correct! This is imaginary.'
      },
      {
        id: '6-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"If I became President, I would change the law." Is this likely to happen tomorrow?',
        options: ['Yes', 'No, unlikely.'],
        correctAnswer: 1,
        explanation: 'Correct! We use 2nd conditional for unlikely dreams.'
      },
      {
        id: '6-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Which sentence is about the PRESENT/FUTURE?',
        options: ['If I had time, I would go.', 'If I had had time, I would have gone.'],
        correctAnswer: 0,
        explanation: 'Even though we use "had" (past tense), the meaning is NOW.'
      },
      {
        id: '6-6-a',
        type: 'timeline',
        title: 'Structure Visualization',
        leadText: 'Hypothetical Situation Structure',
        visualContext: 'The Dream Chain',
        visualData: [
            { label: 'IF', subLabel: 'Condition', percentage: 20, type: 'start', color: 'blue' },
            { label: 'PAST SIMPLE', subLabel: 'Imaginary', percentage: 50, type: 'point', color: 'purple' },
            { label: 'WOULD + VERB', subLabel: 'Result', percentage: 80, type: 'end', color: 'green' }
        ]
      },
      {
        id: '6-6-b',
        type: 'concept',
        title: 'Structure Rules',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Condition', text: 'IF + Past Simple ("If I LIVED in Italy")' },
            { lang: 'en', label: 'Result', text: 'WOULD + Infinitive ("I WOULD EAT pizza")' },
            { lang: 'en', label: 'Inversion', text: 'No comma if "If" is in the middle.' }
        ]
      },
      {
        id: '6-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Imaginary', text: 'If I WON the lottery, I WOULD TRAVEL the world.' },
            { lang: 'en', label: 'Advice', text: 'If I WERE you, I WOULDN\'T DO that.' },
            { lang: 'en', label: 'Question', text: 'What WOULD you DO if you SAW a ghost?' }
        ]
      },
      {
        id: '6-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'If I ____ his number, I would call him.',
        options: ['know', 'knew', 'would know'],
        correctAnswer: 1,
        explanation: 'If + Past Simple.'
      },
      {
        id: '6-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'If she ____ rich, she wouldn\'t work.',
        options: ['is', 'were', 'would be'],
        correctAnswer: 1,
        explanation: 'Subjunctive "were" is preferred.'
      },
      {
        id: '6-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'We ____ go to the beach if it wasn\'t raining.',
        options: ['will', 'can', 'could'],
        correctAnswer: 2,
        explanation: '"Could" means "would be able to".'
      },
      {
        id: '6-11',
        type: 'quiz',
        title: 'Matching',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Complete: "If I were invisible..."',
        options: ['...I would rob a bank.', '...I would help you.'],
        correctAnswer: 0
      },
      {
        id: '6-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Is "If I would have money, I would buy a car" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Never put "would" in the If-clause.'
      },
      {
        id: '6-13',
        type: 'quiz',
        title: 'Translation Check',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Translate: "Agar mening vaqtim bo‘lsa (hozir), yordam berardim."',
        options: ['If I had time, I would help.', 'If I have time, I will help.'],
        correctAnswer: 0,
        explanation: 'Real conditional uses "will", Unreal (hypothetical) uses "would".'
      },
      {
        id: '6-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"If I ____ a superhero, I would fly."',
        options: ['were', 'am'],
        correctAnswer: 0
      },
      {
        id: '6-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"If I __________ (be) you, I would study harder."',
        correctAnswer: 'were'
      },
      {
        id: '6-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"He __________ (not / be) so tired if he went to bed earlier."',
        correctAnswer: 'wouldn\'t be'
      },
      {
        id: '6-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"If we __________ (live) in London, we would speak better English."',
        correctAnswer: 'lived'
      },
      {
        id: '6-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SURGICAL_TEST,
        passage: 'Life would be very different if we **didn\'t have** electricity. If the internet **disappeared** tomorrow, most businesses **would stop** working. We **would have** to write letters! If I **had** to live without a phone, I **would feel** lonely. Maybe people **would talk** more if they **weren\'t** looking at screens.',
        question: 'Do we have electricity now?',
        options: ['Yes.', 'No.'],
        correctAnswer: 0
      },
      {
        id: '6-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Record your answer.',
        speakingPrompts: [
          'If you could have any superpower, what would it be?',
          'If you met your favorite celebrity, what would you say?',
          'If you were the Principal of your school for one day, what changes would you make?'
        ]
      }
    ]
  },
  {
    id: 'topic-7',
    title: '7.2 Questions (Subject/Object & Indirect)',
    slides: [
      {
        id: '7-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Look at the scenarios.',
        bulletPoints: [
          { lang: 'en', label: 'Scene A (Subject)', text: '"Who SAW the crime?" (Asking about the witness).' },
          { lang: 'en', label: 'Scene B (Object)', text: '"Who DID you SEE?" (Asking about the suspect).' },
          { lang: 'en', label: 'Scene C (Indirect)', text: '"Could you tell me what time it is?"' }
        ],
        question: 'Note the word order differences.'
      },
      {
        id: '7-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: 'Object Questions', text: 'Ask about object. Use do/does/did. "What DID you buy?"' },
          { lang: 'en', label: 'Subject Questions', text: 'Ask about subject. NO auxiliary. "Who BOUGHT the milk?"' },
          { lang: 'en', label: 'Indirect Questions', text: 'Polite. Statement word order. "Where the bank IS."' },
          { lang: 'uz', label: 'Subject', text: 'Ega haqida. Yordamchi fe’l yo‘q.' },
          { lang: 'uz', label: 'Indirect', text: 'Muloyim savollar. So‘z tartibi darak gapdek.' }
        ]
      },
      {
        id: '7-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Who called you?"',
        options: ['Asking about the receiver.', 'Asking about the caller.'],
        correctAnswer: 1,
        explanation: 'Correct! "Who" is the subject (the caller).'
      },
      {
        id: '7-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Who did you call?"',
        options: ['Asking about the receiver.', 'Asking about the caller.'],
        correctAnswer: 0,
        explanation: 'Correct! "You" made the call. We want to know the receiver.'
      },
      {
        id: '7-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Can you tell me where ____?"',
        options: ['is the station', 'the station is'],
        correctAnswer: 1,
        explanation: 'Indirect questions use statement word order.'
      },
      {
        id: '7-6-a',
        type: 'timeline',
        title: 'Word Order Construction',
        leadText: 'Building the correct sentence structure',
        visualContext: 'Object Question Order',
        visualData: [
            { label: 'Q-WORD', subLabel: 'Where', percentage: 20, type: 'start', color: 'blue' },
            { label: 'AUX', subLabel: 'Do / Did', percentage: 40, type: 'point', color: 'orange' },
            { label: 'SUBJECT', subLabel: 'You', percentage: 60, type: 'point', color: 'purple' },
            { label: 'VERB', subLabel: 'Go', percentage: 80, type: 'end', color: 'green' }
        ]
      },
      {
        id: '7-6-b',
        type: 'concept',
        title: 'Structure Rules',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Object', text: 'Q-Word + Auxiliary + Subject + Verb? (Where DID you go?)' },
            { lang: 'en', label: 'Subject', text: 'Who/What + Verb? (Who WENT home?)' },
            { lang: 'en', label: 'Indirect', text: 'Phrase + Q-Word + Subject + Verb? (Do you know where HE WENT?)' }
        ]
      },
      {
        id: '7-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Subject', text: '"Who broke the window?" (John broke it).' },
            { lang: 'en', label: 'Object', text: '"What did John break?" (The window).' },
            { lang: 'en', label: 'Indirect', text: '"I wonder why she LEFT." (Not did she leave).' }
        ]
      },
      {
        id: '7-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Who ____ that book?',
        options: ['did write', 'wrote', 'did wrote'],
        correctAnswer: 1,
        explanation: 'Subject question.'
      },
      {
        id: '7-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Where ____ live?',
        options: ['do you', 'you', 'you do'],
        correctAnswer: 0,
        explanation: 'Object question needs auxiliary.'
      },
      {
        id: '7-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Do you know what time ____?',
        options: ['does the film start', 'the film starts', 'starts the film'],
        correctAnswer: 1,
        explanation: 'Indirect question = statement order.'
      },
      {
        id: '7-11',
        type: 'quiz',
        title: 'Matching',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Match meaning: "Who loves Jane?"',
        options: ['Jane loves Tom.', 'Tom loves Jane.'],
        correctAnswer: 1,
        explanation: 'Subject question: Who is the lover?'
      },
      {
        id: '7-12',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Indirect form of "Is he married?"',
        options: ['Can you tell me if he is married?', 'Can you tell me if is he married?'],
        correctAnswer: 0
      },
      {
        id: '7-13',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Is "Do you know where does he work?" correct?',
        options: ['Yes', 'No, "where he works"'],
        correctAnswer: 1,
        explanation: 'Indirect questions do not use "does".'
      },
      {
        id: '7-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Who ____ the race?"',
        options: ['won', 'did win'],
        correctAnswer: 0
      },
      {
        id: '7-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"What __________ (happen) yesterday?"',
        correctAnswer: 'happened'
      },
      {
        id: '7-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"Could you tell me how much __________ (cost / this ticket)?"',
        correctAnswer: 'this ticket costs'
      },
      {
        id: '7-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"Who __________ (you / invite) to the party?"',
        correctAnswer: 'did you invite'
      },
      {
        id: '7-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SURGICAL_TEST,
        passage: 'William James Sidis was a genius. **Who inspired him?** His parents. **What did he study?** Math at Harvard. Later, journalists asked, "**Could you tell us why you left academic life?**" Sidis wanted privacy. He wondered **why people were so interested** in him.',
        question: '"Could you tell us why you left..." is:',
        options: ['Direct question.', 'Indirect question.'],
        correctAnswer: 1
      },
      {
        id: '7-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Record polite questions for a stranger.',
        speakingPrompts: [
          'Ask them where they live, but politely.',
          'Ask them what their hobbies are politely.',
          'Ask "Who is your favorite singer?" directly.'
        ]
      }
    ]
  },
  {
    id: 'topic-8',
    title: '8.1 Real Conditionals (Zero & First)',
    slides: [
      {
        id: '8-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Fact vs Prediction',
        bulletPoints: [
            { lang: 'en', label: 'Fact (Zero)', text: '"If it rains, plants grow." (Always true).' },
            { lang: 'en', label: 'Prediction (First)', text: '"If you study hard, you will pass." (Future result).' }
        ]
      },
      {
        id: '8-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Zero Conditional', text: 'General truths, habits. (If + Present, ... Present).' },
            { lang: 'en', label: 'First Conditional', text: 'Possible future. (If + Present, ... Will).' },
            { lang: 'en', label: 'Unless', text: 'Means "If not".' },
            { lang: 'uz', label: 'Zero', text: 'Doimiy haqiqatlar.' },
            { lang: 'uz', label: 'First', text: 'Kelajakdagi aniq vaziyatlar.' },
            { lang: 'ru', label: 'Unless', text: 'Если не...' }
        ]
      },
      {
        id: '8-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"If I miss the bus, I am late for work." (Every day)',
        options: ['Zero Conditional', 'First Conditional'],
        correctAnswer: 0,
        explanation: 'Correct! Routine/Fact = Zero.'
      },
      {
        id: '8-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"If it rains tomorrow, we will stay home."',
        options: ['Zero Conditional', 'First Conditional'],
        correctAnswer: 1,
        explanation: 'Correct! Specific future event = First.'
      },
      {
        id: '8-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"I won\'t go unless he calls."',
        options: ['I will go if he calls.', 'I will go if he doesn\'t call.'],
        correctAnswer: 0,
        explanation: 'Unless = If not. "I won\'t go if he doesn\'t call" means I need him to call.'
      },
      {
        id: '8-6-a',
        type: 'timeline',
        title: 'Conditional Flow',
        leadText: 'Structure of Cause and Effect',
        visualContext: 'First Conditional Logic',
        visualData: [
            { label: 'IF', subLabel: 'Trigger', percentage: 20, type: 'start', color: 'blue' },
            { label: 'PRESENT', subLabel: 'Condition', percentage: 50, type: 'point', color: 'purple' },
            { label: 'WILL + VERB', subLabel: 'Result', percentage: 80, type: 'end', color: 'green' }
        ]
      },
      {
        id: '8-6-b',
        type: 'concept',
        title: 'Conditional Rules',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'General Fact?', text: 'YES -> Present + Present (Zero)' },
            { lang: 'en', label: 'Future Possibility?', text: 'YES -> Present + Will (First)' }
        ]
      },
      {
        id: '8-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Zero', text: '"If you mix red and blue, you get purple."' },
            { lang: 'en', label: 'First', text: '"If you don\'t leave now, you will miss the train."' },
            { lang: 'en', label: 'Unless', text: '"You can\'t enter unless you are 18."' }
        ]
      },
      {
        id: '8-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'If people eat too much, they ____ fat.',
        options: ['get', 'will get', 'got'],
        correctAnswer: 0,
        explanation: 'General fact -> Zero conditional.'
      },
      {
        id: '8-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'If I ____ her, I\'ll tell her.',
        options: ['see', 'will see', 'saw'],
        correctAnswer: 0,
        explanation: 'Never use "will" in the If-clause.'
      },
      {
        id: '8-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'We won\'t win ____ we practice.',
        options: ['if', 'unless', 'when'],
        correctAnswer: 1,
        explanation: '"We won\'t win if we don\'t practice".'
      },
      {
        id: '8-11',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'In First Conditional, we use Future Tense in both parts?',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. If + Present, ... Will.'
      },
      {
        id: '8-12',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"If you don\'t run, you won\'t catch it." -> Unless...',
        options: ['Unless you run, you won\'t catch it.', 'Unless you don\'t run...'],
        correctAnswer: 0
      },
      {
        id: '8-13',
        type: 'quiz',
        title: 'Matching',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Match: "If water reaches 100°C..."',
        options: ['...it boils.', '...it will boil.'],
        correctAnswer: 0,
        explanation: 'Scientific fact = Zero conditional.'
      },
      {
        id: '8-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"If you ____ (drop) glass, it breaks."',
        options: ['drop', 'will drop'],
        correctAnswer: 0
      },
      {
        id: '8-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"If you __________ (need) help, call me."',
        correctAnswer: 'need'
      },
      {
        id: '8-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"Unless we leave now, we __________ (be) late."',
        correctAnswer: 'will be'
      },
      {
        id: '8-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"If he __________ (not / come) soon, we will leave without him."',
        correctAnswer: 'doesn\'t come'
      },
      {
        id: '8-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SURGICAL_TEST,
        passage: 'Happiness is simple. **If people enjoy their job, they are happier** (Zero). However, **if you change your routine, you will feel** strange (First). Experts say that **unless you sleep enough, you won\'t focus** well.',
        question: '"If you change your routine, you will feel strange." This is:',
        options: ['A likely result in the future.', 'A fact that always happens instantly.'],
        correctAnswer: 0
      },
      {
        id: '8-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Record your answer.',
        speakingPrompts: [
          'What will you do if it rains this weekend?',
          'What happens if you don\'t charge your phone?',
          'Complete: "If I get good grades this year, I will..."'
        ]
      }
    ]
  },
  {
    id: 'topic-9',
    title: '11.2 Should/Shouldn\'t have',
    slides: [
      {
        id: '9-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Look at the scenario.',
        bulletPoints: [
          { lang: 'en', label: 'Fact', text: 'He PLAYED video games all night. He DIDN\'T study.' },
          { lang: 'en', label: 'Regret', text: '"I SHOULD HAVE STUDIED. I SHOULDN\'T HAVE PLAYED."' }
        ],
        question: 'Can he change the grade now? No.'
      },
      {
        id: '9-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
          { lang: 'en', label: 'Use', text: 'Criticize past actions or express regret.' },
          { lang: 'en', label: 'Formula', text: 'Should have + Past Participle (V3).' },
          { lang: 'uz', label: 'Ma’nosi', text: 'O‘tmishdagi afsuslanish. "Qilishim kerak edi".' },
          { lang: 'ru', label: 'Значение', text: 'Сожаление о прошлом. "Следовало бы..."' }
        ]
      },
      {
        id: '9-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"You should have called me." Did you call me?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Correct! I am criticizing you because you didn\'t call.'
      },
      {
        id: '9-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"I shouldn\'t have eaten that cake." How do I feel now?',
        options: ['Happy and full.', 'Sick or guilty.'],
        correctAnswer: 1,
        explanation: 'Correct! I regret eating it.'
      },
      {
        id: '9-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Is "He should have been more careful" about Future or Past?',
        options: ['Future', 'Past'],
        correctAnswer: 1,
        explanation: '"Have + V3" signals we are looking back.'
      },
      {
        id: '9-6-a',
        type: 'timeline',
        title: 'Timeline of Regret',
        leadText: 'Looking back at a past mistake',
        visualContext: 'Retrospective View',
        visualData: [
            { label: 'MISTAKE', subLabel: 'Past Action', percentage: 20, type: 'range', color: 'red' },
            { label: 'TIME', subLabel: 'Passes', percentage: 50, type: 'range', color: 'orange' },
            { label: 'NOW', subLabel: 'Regret', percentage: 80, type: 'point', color: 'purple' }
        ]
      },
      {
        id: '9-6-b',
        type: 'concept',
        title: 'Analysis',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Past Point', text: 'Mistake happens here.' },
            { lang: 'en', label: 'Present Point', text: 'Looking back with regret.' },
            { lang: 'en', label: 'Check', text: 'Did I do it? Yes. Was it good? No.' }
        ]
      },
      {
        id: '9-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SURGICAL_CONCEPT,
        bulletPoints: [
            { lang: 'en', label: 'Self-Regret', text: '"I SHOULD HAVE GONE to bed earlier."' },
            { lang: 'en', label: 'Criticism', text: '"You SHOULDN\'T HAVE LAUGHED at him."' },
            { lang: 'en', label: 'Polite Advice', text: '"You SHOULD HAVE TOLD me you were coming!"' }
        ]
      },
      {
        id: '9-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'The movie was terrible. We ____ gone to see it.',
        options: ['should have', 'shouldn\'t have', 'must have'],
        correctAnswer: 1,
        explanation: 'Regret: It was a mistake to go.'
      },
      {
        id: '9-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'You ____ invited Tom. He is really fun!',
        options: ['should have', 'shouldn\'t have', 'would have'],
        correctAnswer: 0,
        explanation: 'Criticism: You didn\'t invite him, but it was a good idea.'
      },
      {
        id: '9-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'I ____ left my phone in the car. It got stolen.',
        options: ['shouldn\'t have', 'should have', 'didn\'t have'],
        correctAnswer: 0,
        explanation: 'Regret about a bad action.'
      },
      {
        id: '9-11',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"Should have" is used to give advice for the future.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. It is for the past.'
      },
      {
        id: '9-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'Is "You should have go to the doctor" correct?',
        options: ['Yes', 'No, "gone"'],
        correctAnswer: 1,
        explanation: 'V3 required.'
      },
      {
        id: '9-13',
        type: 'quiz',
        title: 'Context Match',
        imageUrl: IMG_SURGICAL_TEST,
        question: 'You are wet because you forgot your umbrella.',
        options: ['I should have brought my umbrella.', 'I shouldn\'t have brought my umbrella.'],
        correctAnswer: 0
      },
      {
        id: '9-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SURGICAL_TEST,
        question: '"He ____ worn sunscreen."',
        options: ['should have', 'shouldn\'t have'],
        correctAnswer: 0
      },
      {
        id: '9-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"I didn\'t study for the test. I __________ (study) more."',
        correctAnswer: 'should have studied'
      },
      {
        id: '9-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"We got lost. We __________ (take) a map."',
        correctAnswer: 'should have taken'
      },
      {
        id: '9-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SURGICAL_CONCEPT,
        leadText: '"My stomach hurts. I __________ (eat) so much chocolate."',
        correctAnswer: 'shouldn\'t have eaten'
      },
      {
        id: '9-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SURGICAL_TEST,
        passage: 'The \'Love Bug\' virus was a disaster. Millions of people received an email with the subject \'I Love You\'. They opened it, and it destroyed their files. Security experts said people **should have been** more suspicious. They **shouldn\'t have opened** emails from strangers. Companies **should have warned** their employees sooner.',
        question: 'Did people open the email?',
        options: ['Yes.', 'No.'],
        correctAnswer: 0
      },
      {
        id: '9-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SURGICAL_INTRO,
        leadText: 'Record your opinion.',
        speakingPrompts: [
          'A girl posted a photo of her friend sleeping. Comment on it.',
          'You stayed up all night watching TikToks and failed. Regret it.',
          'Your friend bought expensive shoes but has no money. Criticize gently.'
        ]
      }
    ]
  },
  {
    id: 'topic-10',
    title: '12.1 Reported Speech: Wukong\'s Wisdom',
    theme: 'wukong',
    slides: [
      {
        id: '10-1',
        type: 'intro',
        title: 'The Great Sage speaks.',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: 'Wukong is a master of time and change.',
        bulletPoints: [
          { lang: 'en', label: 'The Concept', text: 'When we report what someone said, we step BACK in time. Just like Wukong steps into the past.' },
          { lang: 'en', label: 'Mechanism', text: 'Direct Speech (Present) -> Reported Speech (Past)' }
        ],
        question: 'Prepare to shift reality.'
      },
      {
        id: '10-2-a',
        type: 'concept',
        title: 'The Pronoun Shift',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: 'Identity Transformation (72 Forms)',
        bulletPoints: [
          { lang: 'en', label: 'I becomes He/She', text: 'Wukong says "I am strong." -> He said HE was strong.' },
          { lang: 'en', label: 'My becomes His/Her', text: 'Wukong says "My staff is heavy." -> He said HIS staff was heavy.' },
          { lang: 'en', label: 'We becomes They', text: '"We are fighting." -> They said THEY were fighting.' }
        ]
      },
      {
        id: '10-2-b',
        type: 'quiz',
        title: 'Pronoun Test',
        imageUrl: IMG_WUKONG_CLOUD,
        question: 'Direct: "I lost my book." -> Reported: He said ____ lost ____ book.',
        options: ['I / my', 'he / his'],
        correctAnswer: 1,
        explanation: 'We must shift the perspective to HIM.'
      },
      {
        id: '10-3-a',
        type: 'timeline',
        title: 'Shift 1: Present to Past',
        leadText: 'The Present Realm -> The Past Realm',
        visualContext: 'The Golden Staff Shift',
        visualData: [
            { label: 'DIRECT: "I AM"', subLabel: 'Present', percentage: 15, type: 'start', color: 'gold' },
            { label: 'THE BARRIER', subLabel: 'Time Wall', percentage: 50, type: 'range', color: 'red' },
            { label: 'REPORTED: HE WAS', subLabel: 'Past', percentage: 85, type: 'end', color: 'orange' }
        ]
      },
      {
        id: '10-3-b',
        type: 'concept',
        title: 'Analysis: Present -> Past',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: 'One step backward.',
        bulletPoints: [
            { lang: 'en', label: 'Am/Is -> Was', text: '"I am ready." -> He said he WAS ready.' },
            { lang: 'en', label: 'Are -> Were', text: '"We are flying." -> They said they WERE flying.' },
            { lang: 'en', label: 'Have -> Had', text: '"I have a peach." -> He said he HAD a peach.' },
            { lang: 'en', label: 'Do/Does -> Did', text: '"I do kung fu." -> He said he DID kung fu.' }
        ]
      },
      {
        id: '10-4',
        type: 'quiz',
        title: 'Quick Check: Present',
        imageUrl: IMG_WUKONG_CLOUD,
        question: 'Wukong says: "I want the fan." -> He said he ____ the fan.',
        options: ['wants', 'wanted'],
        correctAnswer: 1,
        explanation: 'Present Simple "want" becomes Past Simple "wanted".'
      },
      {
        id: '10-5-a',
        type: 'timeline',
        title: 'Shift 2: Past to Perfect',
        leadText: 'The Past Realm -> The Void (Perfect)',
        visualContext: 'Deep Meditation',
        visualData: [
            { label: 'DIRECT: "I ATE"', subLabel: 'Past Simple', percentage: 15, type: 'start', color: 'orange' },
            { label: 'DEEP TIME', subLabel: 'Shift Back', percentage: 50, type: 'range', color: 'purple' },
            { label: 'REPORTED: HE HAD EATEN', subLabel: 'Past Perfect', percentage: 85, type: 'end', color: 'gold' }
        ]
      },
      {
        id: '10-5-b',
        type: 'concept',
        title: 'Analysis: Past -> Past Perfect',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: 'The action was ALREADY past. Now it is ANCIENT.',
        bulletPoints: [
            { lang: 'en', label: 'V2 (Past) -> Had + V3', text: '"I defeated the demon." -> He said he HAD DEFEATED the demon.' },
            { lang: 'en', label: 'Was/Were -> Had been', text: '"It was cold." -> He said it HAD BEEN cold.' },
            { lang: 'en', label: 'Did -> Had done', text: '"I did it." -> He said he HAD DONE it.' }
        ]
      },
      {
        id: '10-6',
        type: 'quiz',
        title: 'Quick Check: Past',
        imageUrl: IMG_WUKONG_CLOUD,
        question: 'Pigsy says: "I slept all day." -> He said he ____ all day.',
        options: ['slept', 'had slept'],
        correctAnswer: 1,
        explanation: 'Past Simple "slept" backshifts to Past Perfect "had slept".'
      },
      {
        id: '10-7-a',
        type: 'timeline',
        title: 'Shift 3: The Modals',
        leadText: 'Future (Will) -> Conditional (Would)',
        visualContext: 'Cloud Somersault',
        visualData: [
            { label: 'DIRECT: "I WILL"', subLabel: 'Certainty', percentage: 15, type: 'start', color: 'blue' },
            { label: 'THE CLOUD', subLabel: 'Softening', percentage: 50, type: 'range', color: 'gold' },
            { label: 'REPORTED: HE WOULD', subLabel: 'Distance', percentage: 85, type: 'end', color: 'green' }
        ]
      },
      {
        id: '10-7-b',
        type: 'concept',
        title: 'Analysis: Modals',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: 'The shape changes, but the meaning remains.',
        bulletPoints: [
            { lang: 'en', label: 'Will -> Would', text: '"I will go." -> He said he WOULD go.' },
            { lang: 'en', label: 'Can -> Could', text: '"I can fly." -> He said he COULD fly.' },
            { lang: 'en', label: 'Must -> Had to', text: '"I must leave." -> He said he HAD TO leave.' },
            { lang: 'en', label: 'Static', text: 'Should, Could, Might do NOT change.' }
        ]
      },
      {
        id: '10-8',
        type: 'quiz',
        title: 'Quick Check: Modals',
        imageUrl: IMG_WUKONG_CLOUD,
        question: '"I can see the future." -> He said he ____ see the future.',
        options: ['can', 'could'],
        correctAnswer: 1,
        explanation: 'Can becomes Could.'
      },
      {
        id: '10-9-a',
        type: 'concept',
        title: 'Time & Place Shifting',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: 'Teleportation Logic',
        bulletPoints: [
            { lang: 'en', label: 'Now -> Then', text: '"I am busy NOW." -> He was busy THEN.' },
            { lang: 'en', label: 'Here -> There', text: '"Come HERE." -> Go THERE.' },
            { lang: 'en', label: 'Tomorrow -> The next day', text: '"I will win TOMORROW." -> He would win THE NEXT DAY.' },
            { lang: 'en', label: 'Yesterday -> The day before', text: '"I won YESTERDAY." -> He had won THE DAY BEFORE.' }
        ]
      },
      {
        id: '10-9-b',
        type: 'quiz',
        title: 'Time Check',
        imageUrl: IMG_WUKONG_CLOUD,
        question: '"I will arrive tomorrow." -> He said he would arrive ____.',
        options: ['tomorrow', 'the next day'],
        correctAnswer: 1,
        explanation: 'We are reporting it later, so "tomorrow" might be in the past now.'
      },
      {
        id: '10-10',
        type: 'test',
        title: 'Test 1: Present to Past',
        imageUrl: IMG_WUKONG_SAGE,
        question: '"I live in the mountain." -> He said he ____ in the mountain.',
        options: ['lived', 'lives', 'had lived'],
        correctAnswer: 0,
        explanation: 'Present Simple backshifts to Past Simple.'
      },
      {
        id: '10-11',
        type: 'test',
        title: 'Test 2: Past to Perfect',
        imageUrl: IMG_WUKONG_SCROLL,
        question: '"I finished the training." -> He said he ____ the training.',
        options: ['finished', 'has finished', 'had finished'],
        correctAnswer: 2,
        explanation: 'Past Simple backshifts to Past Perfect.'
      },
      {
        id: '10-12',
        type: 'test',
        title: 'Test 3: Continuous',
        imageUrl: IMG_WUKONG_CLOUD,
        question: '"I am meditating." -> She said she ____ meditating.',
        options: ['is', 'was', 'been'],
        correctAnswer: 1,
        explanation: 'am (Present) -> was (Past).'
      },
      {
        id: '10-13',
        type: 'test',
        title: 'Test 4: Modals',
        imageUrl: IMG_WUKONG_SAGE,
        question: '"I can help you." -> He said he ____ help me.',
        options: ['can', 'could', 'should'],
        correctAnswer: 1,
        explanation: 'Can becomes Could.'
      },
      {
        id: '10-14',
        type: 'test',
        title: 'Test 5: Time Words',
        imageUrl: IMG_WUKONG_CLOUD,
        question: '"I will see you tomorrow." -> He said he would see me ____.',
        options: ['tomorrow', 'the next day', 'yesterday'],
        correctAnswer: 1,
        explanation: 'Tomorrow changes to "the next day" in reported speech.'
      },
      {
        id: '10-15',
        type: 'test',
        title: 'Test 6: Place Words',
        imageUrl: IMG_WUKONG_SCROLL,
        question: '"Put the staff here." -> He told me to put it ____.',
        options: ['here', 'there'],
        correctAnswer: 1,
        explanation: 'Here becomes There.'
      },
      {
        id: '10-16',
        type: 'test',
        title: 'Test 7: Must',
        imageUrl: IMG_WUKONG_SAGE,
        question: '"I must go." -> He said he ____ go.',
        options: ['must', 'had to', 'would'],
        correctAnswer: 1,
        explanation: 'Must typically changes to "Had to".'
      },
      {
        id: '10-17',
        type: 'test',
        title: 'Test 8: Reporting Verbs',
        imageUrl: IMG_WUKONG_SCROLL,
        question: 'He ____ me that he was hungry.',
        options: ['said', 'told', 'asked'],
        correctAnswer: 1,
        explanation: 'Object "me" requires "told".'
      },
      {
        id: '10-18',
        type: 'test',
        title: 'Test 9: Past Perfect',
        imageUrl: IMG_WUKONG_CLOUD,
        question: '"I had already eaten." -> He said he ____ already eaten.',
        options: ['had', 'has', 'have'],
        correctAnswer: 0,
        explanation: 'Past Perfect DOES NOT change.'
      },
      {
        id: '10-19',
        type: 'test',
        title: 'Test 10: Will',
        imageUrl: IMG_WUKONG_SAGE,
        question: '"It will rain fire." -> The forecast said it ____ rain fire.',
        options: ['will', 'would', 'is'],
        correctAnswer: 1,
        explanation: 'Will becomes Would.'
      },
      {
        id: '10-30',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: '"I am happy." -> He said he __________ (be) happy.',
        correctAnswer: 'was'
      },
      {
        id: '10-31',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_WUKONG_CLOUD,
        leadText: '"I have finished." -> She said she __________ (finish).',
        correctAnswer: 'had finished'
      },
      {
        id: '10-32',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: '"I will call." -> He said he __________ (call).',
        correctAnswer: 'would call'
      },
      {
        id: '10-33',
        type: 'gap-fill',
        title: 'Gap Fill 4',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: '"I can swim." -> She said she __________ (swim).',
        correctAnswer: 'could swim'
      },
      {
        id: '10-34',
        type: 'gap-fill',
        title: 'Gap Fill 5',
        imageUrl: IMG_WUKONG_CLOUD,
        leadText: '"I saw him yesterday." -> He said he had seen him the day __________.',
        correctAnswer: 'before'
      },
      {
        id: '10-35',
        type: 'gap-fill',
        title: 'Gap Fill 6',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: '"I must go." -> He said he __________ (have to) go.',
        correctAnswer: 'had to'
      },
      {
        id: '10-36',
        type: 'gap-fill',
        title: 'Gap Fill 7',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: '"We are playing." -> They said they __________ (play).',
        correctAnswer: 'were playing'
      },
      {
        id: '10-37',
        type: 'gap-fill',
        title: 'Gap Fill 8',
        imageUrl: IMG_WUKONG_CLOUD,
        leadText: '"I don\'t know." -> He said he __________ (not / know).',
        correctAnswer: 'didn\'t know'
      },
      {
        id: '10-38',
        type: 'gap-fill',
        title: 'Gap Fill 9',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: '"I am here." -> He said he was __________.',
        correctAnswer: 'there'
      },
      {
        id: '10-39',
        type: 'gap-fill',
        title: 'Gap Fill 10',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: '"I will do it tomorrow." -> He said he would do it the __________ day.',
        correctAnswer: 'next'
      },
      {
        id: '10-40',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_WUKONG_CLOUD,
        passage: 'He told me that he **loved** acting but he **hated** the paparazzi. He said that he **was working** on a new movie then. He mentioned that he **had seen** the script the week before. He promised that he **would give** me an exclusive interview.',
        question: 'What does "He loved acting" mean?',
        options: ['He used to love it.', 'He said, "I love acting."'],
        correctAnswer: 1
      },
      {
        id: '10-41',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: 'Report the gossip.',
        speakingPrompts: [
          'Ben said: "I am moving to a new school."',
          'Ms. Smith said: "The exam will be difficult."',
          'Rumor: "Sarah cheated on the test."'
        ]
      }
    ]
  },
  {
    id: 'topic-11',
    title: '12.2 Reported Questions',
    theme: 'wukong',
    slides: [
      {
        id: '11-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: 'Compare Word Orders.',
        bulletPoints: [
          { lang: 'en', label: 'Direct', text: '"Where DO you live?" (V before S)' },
          { lang: 'en', label: 'Reported', text: '"He asked where I LIVED." (S before V)' }
        ],
        question: 'Note: Auxiliary "do" disappears.'
      },
      {
        id: '11-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_WUKONG_SCROLL,
        bulletPoints: [
          { lang: 'en', label: 'Word Order', text: 'Change to Statement order (S-V). No do/does/did.' },
          { lang: 'en', label: 'Yes/No Questions', text: 'Use IF or WHETHER.' },
          { lang: 'en', label: 'Wh- Questions', text: 'Keep question word (Where, What).' },
          { lang: 'uz', label: 'So‘z tartibi', text: 'Darak gap tartibi. Do/did tushib qoladi.' },
          { lang: 'ru', label: 'Порядок слов', text: 'Прямой порядок. Do/did исчезают.' }
        ]
      },
      {
        id: '11-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_WUKONG_CLOUD,
        question: 'He asked me where ____.',
        options: ['was I', 'I was'],
        correctAnswer: 1,
        explanation: 'Statement order (Subject first).'
      },
      {
        id: '11-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_WUKONG_SAGE,
        question: '"Where DO you work?" -> He asked where I ____.',
        options: ['did work', 'worked'],
        correctAnswer: 1,
        explanation: 'Remove "do". Change main verb to past.'
      },
      {
        id: '11-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_WUKONG_SCROLL,
        question: '"Are you happy?" -> He asked ____ I was happy.',
        options: ['that', 'if'],
        correctAnswer: 1,
        explanation: 'Use "if" for Yes/No questions.'
      },
      {
        id: '11-6-a',
        type: 'timeline',
        title: 'Question Transformation Flow',
        leadText: 'From Direct to Reported Question',
        visualContext: 'The Logic Switch',
        visualData: [
            { label: 'Q-WORD / IF', subLabel: 'Connector', percentage: 20, type: 'start', color: 'blue' },
            { label: 'SUBJECT', subLabel: 'Swap Order', percentage: 50, type: 'point', color: 'purple' },
            { label: 'VERB (PAST)', subLabel: 'Shift Tense', percentage: 80, type: 'end', color: 'green' }
        ]
      },
      {
        id: '11-6-b',
        type: 'concept',
        title: 'Transformation Rules',
        imageUrl: IMG_WUKONG_CLOUD,
        bulletPoints: [
            { lang: 'en', label: 'Wh- Question?', text: 'YES -> Keep word. NO -> Add If/Whether.' },
            { lang: 'en', label: 'Action', text: 'Swap Subject/Verb. Backshift Tense. Remove do/did.' }
        ]
      },
      {
        id: '11-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_WUKONG_SAGE,
        bulletPoints: [
            { lang: 'en', label: 'Wh- Question', text: '"What IS your name?" -> "Asked what my name WAS."' },
            { lang: 'en', label: 'Yes/No Question', text: '"DO you like coffee?" -> "Asked IF I LIKED coffee."' },
            { lang: 'en', label: 'Modal', text: '"WILL you help?" -> "Asked IF I WOULD help."' }
        ]
      },
      {
        id: '11-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_WUKONG_SCROLL,
        question: '"Where are you going?" -> He asked where ____.',
        options: ['was I going', 'I was going', 'I am going'],
        correctAnswer: 1,
        explanation: 'Word order change + Tense change.'
      },
      {
        id: '11-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_WUKONG_CLOUD,
        question: '"Did you see Tom?" -> She asked if I ____ Tom.',
        options: ['saw', 'had seen', 'did see'],
        correctAnswer: 1,
        explanation: 'Past Simple "did see" -> Past Perfect "had seen".'
      },
      {
        id: '11-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_WUKONG_SAGE,
        question: '"Can you swim?" -> He asked ____ I could swim.',
        options: ['whether', 'what', 'that'],
        correctAnswer: 0,
        explanation: 'Yes/No question.'
      },
      {
        id: '11-11',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_WUKONG_SCROLL,
        question: 'We use a question mark (?) at the end of a reported question.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. It ends with a full stop.'
      },
      {
        id: '11-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_WUKONG_CLOUD,
        question: 'Is "She asked me where did I buy my bag" correct?',
        options: ['Yes', 'No, "where I bought"'],
        correctAnswer: 1,
        explanation: 'Delete "did".'
      },
      {
        id: '11-13',
        type: 'quiz',
        title: 'Odd One Out',
        imageUrl: IMG_WUKONG_SAGE,
        question: 'Select the odd one.',
        options: ['When', 'Why', 'If', 'Who'],
        correctAnswer: 2,
        explanation: 'If is for Yes/No questions, others are Wh- words.'
      },
      {
        id: '11-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_WUKONG_SCROLL,
        question: '"Have you finished?" -> He asked if I ____.',
        options: ['finished', 'had finished'],
        correctAnswer: 1
      },
      {
        id: '11-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_WUKONG_CLOUD,
        leadText: '"Where do you work?" -> "He asked where I __________ (work)."',
        correctAnswer: 'worked'
      },
      {
        id: '11-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: '"Is it raining?" -> "She asked __________ (if/what) it was raining."',
        correctAnswer: 'if'
      },
      {
        id: '11-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_WUKONG_SCROLL,
        leadText: '"When will you arrive?" -> "They asked when I __________ (arrive)."',
        correctAnswer: 'would arrive'
      },
      {
        id: '11-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_WUKONG_CLOUD,
        passage: 'I went for a job interview. First, **he asked me what my name was**. Then, **he asked if I had experience**. He wanted to know **why I had left my last job**. Finally, **he asked whether I could start on Monday**.',
        question: 'The direct question for "what my name was" is:',
        options: ['What was your name?', 'What is your name?'],
        correctAnswer: 1
      },
      {
        id: '11-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_WUKONG_SAGE,
        leadText: 'Report your parents\' questions.',
        speakingPrompts: [
          'Mom asked: "Where have you been?"',
          'Dad asked: "Are you okay?"',
          'They asked: "Who were you with?"'
        ]
      }
    ]
  }
];