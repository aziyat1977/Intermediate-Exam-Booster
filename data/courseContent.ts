import { Topic } from '../types';

// --- SVG ASSET GENERATOR ---
const svg = (content: string, bg: string) => 
  `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style="background:${bg};width:100%;height:100%;">${content}</svg>`)}`;

// 1. SURGICAL THEME (Base)
const SURGICAL_BG = '#f0f9ff';
const SURGICAL_DEFS = `<defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0f2fe" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" />`;

// 2. GTA THEME (Module 1)
const GTA_BG = '#020617';
const GTA_DEFS = `<defs><pattern id="gtaGrid" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="none" stroke="#22c55e" stroke-width="0.5" opacity="0.3"/></pattern><filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="100%" height="100%" fill="#0f172a" /><rect width="100%" height="100%" fill="url(#gtaGrid)" />`;
const IMG_GTA_HEIST = svg(`${GTA_DEFS}<rect x="100" y="100" width="600" height="400" fill="none" stroke="#22c55e" stroke-width="4" filter="url(#glow)"/><text x="400" y="300" font-family="monospace" font-weight="bold" font-size="60" fill="#22c55e" text-anchor="middle" filter="url(#glow)">MISSION: HEIST</text>`, GTA_BG);
const IMG_GTA_MONEY = svg(`${GTA_DEFS}<text x="400" y="300" font-family="monospace" font-weight="bold" font-size="120" fill="#22c55e" text-anchor="middle" opacity="0.2">$ $ $</text><path d="M200 300 L300 150 L400 300 L500 150 L600 300" fill="none" stroke="#4ade80" stroke-width="5" filter="url(#glow)"/>`, GTA_BG);
const IMG_GTA_ACTION = svg(`${GTA_DEFS}<circle cx="400" cy="300" r="150" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="20,10" filter="url(#glow)"/><text x="400" y="300" font-family="monospace" font-weight="bold" font-size="50" fill="#ef4444" text-anchor="middle">WANTED *****</text>`, GTA_BG);
const IMG_GTA_MAP = svg(`${GTA_DEFS}<rect x="150" y="100" width="500" height="400" rx="20" fill="#1e293b" stroke="#22c55e" stroke-width="2"/><text x="400" y="80" font-family="monospace" font-size="30" fill="#22c55e" text-anchor="middle">GPS TRACKING</text>`, GTA_BG);

// 3. WUKONG THEME (Modules 10-11)
const WUKONG_BG = '#450a0a';
const WUKONG_DEFS = `<defs><radialGradient id="goldGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:#fcd34d;stop-opacity:1" /><stop offset="100%" style="stop-color:#b45309;stop-opacity:0.2" /></radialGradient><pattern id="clouds" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M10 50 Q 30 20 50 50 T 90 50" fill="none" stroke="#d97706" stroke-width="2" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="#2a0a0a" /><rect width="100%" height="100%" fill="url(#clouds)" />`;
const IMG_WUKONG_SAGE = svg(`${WUKONG_DEFS}<circle cx="400" cy="300" r="120" fill="url(#goldGrad)" opacity="0.6"/><text x="400" y="300" font-family="serif" font-weight="bold" font-size="80" fill="#fef3c7" text-anchor="middle" dominant-baseline="middle">SAGE</text>`, WUKONG_BG);
const IMG_WUKONG_SCROLL = svg(`${WUKONG_DEFS}<rect x="200" y="100" width="400" height="400" fill="#fffbeb" rx="5"/><text x="400" y="300" font-family="serif" font-size="40" fill="#450a0a" text-anchor="middle" writing-mode="tb">ANCIENT WISDOM</text>`, WUKONG_BG);
const IMG_WUKONG_CLOUD = svg(`${WUKONG_DEFS}<path d="M200 300 Q 300 200 400 300 T 600 300" fill="none" stroke="#fcd34d" stroke-width="8"/><text x="400" y="450" font-family="serif" font-size="40" fill="#fcd34d" text-anchor="middle">NIMBUS</text>`, WUKONG_BG);

// --- NEW THEME ASSETS (Modules 2-9) ---

// Module 2: CYBER GAMING (PUBG/CS)
const CYBER_BG = '#000000';
const CYBER_DEFS = `<defs><pattern id="cyberGrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00f0ff" stroke-width="0.5" opacity="0.4"/></pattern></defs><rect width="100%" height="100%" fill="#050510"/><rect width="100%" height="100%" fill="url(#cyberGrid)"/>`;
const IMG_CYBER_SCOPE = svg(`${CYBER_DEFS}<circle cx="400" cy="300" r="150" fill="none" stroke="#00f0ff" stroke-width="2"/><line x1="400" y1="150" x2="400" y2="450" stroke="#00f0ff"/><line x1="250" y1="300" x2="550" y2="300" stroke="#00f0ff"/><text x="400" y="550" font-family="monospace" fill="#00f0ff" text-anchor="middle" font-size="30">TARGET ACQUIRED</text>`, CYBER_BG);
const IMG_CYBER_RANK = svg(`${CYBER_DEFS}<path d="M400 100 L550 200 L550 400 L400 500 L250 400 L250 200 Z" fill="none" stroke="#f0f" stroke-width="5"/><text x="400" y="320" font-family="sans-serif" font-weight="900" font-size="80" fill="#f0f" text-anchor="middle">ACE</text>`, CYBER_BG);
const IMG_CYBER_LOOT = svg(`${CYBER_DEFS}<rect x="300" y="200" width="200" height="200" fill="none" stroke="#0f0" stroke-width="4"/><text x="400" y="310" font-family="monospace" font-size="40" fill="#0f0" text-anchor="middle">AIR DROP</text>`, CYBER_BG);

// Module 3: K-POP FANDOM
const KPOP_BG = '#fff0f5';
const KPOP_DEFS = `<defs><pattern id="hearts" width="60" height="60" patternUnits="userSpaceOnUse"><text x="10" y="40" font-size="30" fill="#fbcfe8">♥</text></pattern></defs><rect width="100%" height="100%" fill="#fff0f5"/><rect width="100%" height="100%" fill="url(#hearts)"/>`;
const IMG_KPOP_LIGHT = svg(`${KPOP_DEFS}<circle cx="400" cy="250" r="100" fill="#ec4899" opacity="0.8"/><rect x="380" y="350" width="40" height="150" fill="#333"/><text x="400" y="260" font-family="sans-serif" font-weight="bold" font-size="40" fill="white" text-anchor="middle">ARMY</text>`, KPOP_BG);
const IMG_KPOP_STAGE = svg(`${KPOP_DEFS}<path d="M100 500 L200 200 L600 200 L700 500 Z" fill="#fce7f3" stroke="#db2777" stroke-width="3"/><circle cx="200" cy="100" r="10" fill="#db2777"/><circle cx="600" cy="100" r="10" fill="#db2777"/><text x="400" y="400" font-family="sans-serif" font-weight="900" font-size="60" fill="#db2777" text-anchor="middle">DEBUT</text>`, KPOP_BG);
const IMG_KPOP_PC = svg(`${KPOP_DEFS}<rect x="300" y="150" width="200" height="300" rx="10" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><text x="400" y="300" font-family="sans-serif" font-size="30" fill="#be185d" text-anchor="middle">BIAS CARD</text>`, KPOP_BG);
const IMG_KPOP_HEART = svg(`${KPOP_DEFS}<path d="M400 450 L250 300 Q200 200 300 200 Q400 200 400 300 Q400 200 500 200 Q600 200 550 300 Z" fill="#ec4899" stroke="#fff" stroke-width="4"/><text x="400" y="550" font-family="sans-serif" font-size="30" fill="#be185d" text-anchor="middle">FINGER HEART</text>`, KPOP_BG);

// Module 4: RETRO TASHKENT
const RETRO_BG = '#fef3c7';
const RETRO_DEFS = `<defs><pattern id="ikat" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M0 50 L50 0 L100 50 L50 100 Z" fill="#fcd34d" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="#fffbeb"/><rect width="100%" height="100%" fill="url(#ikat)"/>`;
const IMG_RETRO_TEA = svg(`${RETRO_DEFS}<circle cx="400" cy="300" r="120" fill="none" stroke="#b45309" stroke-width="4"/><path d="M400 300 Q450 350 500 300" fill="none" stroke="#b45309" stroke-width="4"/><text x="400" y="500" font-family="serif" font-size="40" fill="#92400e" text-anchor="middle">CHOYXONA</text>`, RETRO_BG);
const IMG_RETRO_MAHALLA = svg(`${RETRO_DEFS}<rect x="200" y="200" width="400" height="200" fill="#fde68a" stroke="#78350f" stroke-width="3"/><path d="M200 200 L400 100 L600 200" fill="#fcd34d" stroke="#78350f" stroke-width="3"/><text x="400" y="350" font-family="serif" font-weight="bold" font-size="50" fill="#78350f" text-anchor="middle">ESKI SHAHAR</text>`, RETRO_BG);
const IMG_RETRO_GAME = svg(`${RETRO_DEFS}<circle cx="300" cy="300" r="20" fill="#b45309"/><circle cx="500" cy="300" r="20" fill="#b45309"/><text x="400" y="450" font-family="serif" font-size="40" fill="#92400e" text-anchor="middle">OQ TERAK</text>`, RETRO_BG);

// Module 5: AUTO TUNING (Gentra/Chevrolet)
const AUTO_BG = '#171717';
const AUTO_DEFS = `<defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#444"/><stop offset="1" stop-color="#111"/></linearGradient></defs><rect width="100%" height="100%" fill="#171717"/><path d="M0 0 L800 600" stroke="#333" stroke-width="2"/>`;
const IMG_AUTO_SPEED = svg(`${AUTO_DEFS}<circle cx="400" cy="300" r="150" fill="none" stroke="#ef4444" stroke-width="5" stroke-dasharray="200"/><text x="400" y="300" font-family="sans-serif" font-weight="900" font-size="80" fill="#ef4444" text-anchor="middle">220</text>`, AUTO_BG);
const IMG_AUTO_RACE = svg(`${AUTO_DEFS}<path d="M100 400 L700 400" stroke="#fff" stroke-width="4" stroke-dasharray="50"/><rect x="200" y="300" width="150" height="80" fill="#ef4444"/><rect x="450" y="300" width="150" height="80" fill="#333" stroke="#fff"/><text x="400" y="200" font-family="sans-serif" font-weight="bold" font-size="40" fill="#fff" text-anchor="middle">DRAG RACE</text>`, AUTO_BG);
const IMG_AUTO_WHEEL = svg(`${AUTO_DEFS}<circle cx="400" cy="300" r="100" fill="none" stroke="#fff" stroke-width="10"/><circle cx="400" cy="300" r="30" fill="#ef4444"/><text x="400" y="500" font-family="sans-serif" font-size="40" fill="#fff" text-anchor="middle">MAGICAR</text>`, AUTO_BG);

// Module 6: STARTUP / IT PARK
const STARTUP_BG = '#eff6ff';
const STARTUP_DEFS = `<defs><pattern id="code" width="100" height="20" patternUnits="userSpaceOnUse"><text x="0" y="15" font-family="monospace" font-size="10" fill="#bfdbfe">const dream = true;</text></pattern></defs><rect width="100%" height="100%" fill="#eff6ff"/><rect width="100%" height="100%" fill="url(#code)"/>`;
const IMG_STARTUP_ROCKET = svg(`${STARTUP_DEFS}<path d="M400 100 Q300 300 350 400 L450 400 Q500 300 400 100" fill="#2563eb"/><circle cx="400" cy="250" r="30" fill="#fff"/><text x="400" y="500" font-family="sans-serif" font-weight="bold" font-size="40" fill="#1e40af" text-anchor="middle">LAUNCH</text>`, STARTUP_BG);
const IMG_STARTUP_UNICORN = svg(`${STARTUP_DEFS}<path d="M300 300 L400 100 L500 300 Z" fill="#f59e0b"/><text x="400" y="400" font-family="sans-serif" font-weight="900" font-size="60" fill="#2563eb" text-anchor="middle">UNICORN</text>`, STARTUP_BG);
const IMG_STARTUP_CODE = svg(`${STARTUP_DEFS}<rect x="200" y="150" width="400" height="300" rx="20" fill="#1e3a8a"/><text x="400" y="300" font-family="monospace" font-size="60" fill="#60a5fa" text-anchor="middle">{ }</text>`, STARTUP_BG);

// Module 7: INSTABLOGGERS
const SOCIAL_BG = '#fafafa';
const SOCIAL_DEFS = `<defs><linearGradient id="insta" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#f09433"/><stop offset="0.5" stop-color="#dc2743"/><stop offset="1" stop-color="#bc1888"/></linearGradient></defs><rect width="100%" height="100%" fill="#fafafa"/>`;
const IMG_SOCIAL_LIVE = svg(`${SOCIAL_DEFS}<rect x="250" y="100" width="300" height="400" rx="20" fill="none" stroke="url(#insta)" stroke-width="10"/><text x="400" y="300" font-family="sans-serif" font-weight="bold" font-size="50" fill="#dc2743" text-anchor="middle">LIVE</text>`, SOCIAL_BG);
const IMG_SOCIAL_LIKE = svg(`${SOCIAL_DEFS}<path d="M400 450 L250 300 Q200 200 300 200 Q400 200 400 300 Q400 200 500 200 Q600 200 550 300 Z" fill="#ec4899"/><text x="400" y="550" font-family="sans-serif" font-size="30" fill="#888" text-anchor="middle">1M LIKES</text>`, SOCIAL_BG);
const IMG_SOCIAL_CAM = svg(`${SOCIAL_DEFS}<circle cx="400" cy="300" r="100" fill="none" stroke="url(#insta)" stroke-width="15"/><circle cx="400" cy="300" r="40" fill="#333"/><text x="400" y="100" font-family="sans-serif" font-weight="bold" font-size="40" fill="#bc1888" text-anchor="middle">STORY</text>`, SOCIAL_BG);

// Module 8: IELTS/EXAM
const EXAM_BG = '#ecfdf5';
const EXAM_DEFS = `<defs><pattern id="leaves" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="5" fill="#10b981" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="#ecfdf5"/><rect width="100%" height="100%" fill="url(#leaves)"/>`;
const IMG_EXAM_CERT = svg(`${EXAM_DEFS}<rect x="200" y="150" width="400" height="300" fill="#fff" stroke="#059669" stroke-width="5"/><text x="400" y="250" font-family="serif" font-weight="bold" font-size="40" fill="#064e3b" text-anchor="middle">CERTIFICATE</text><text x="400" y="350" font-family="sans-serif" font-weight="900" font-size="80" fill="#059669" text-anchor="middle">8.5</text>`, EXAM_BG);
const IMG_EXAM_STUDY = svg(`${EXAM_DEFS}<rect x="300" y="300" width="200" height="200" fill="#34d399"/><path d="M300 300 L400 200 L500 300" fill="#fff"/><text x="400" y="550" font-family="sans-serif" font-size="30" fill="#064e3b" text-anchor="middle">WESTMINSTER</text>`, EXAM_BG);
const IMG_EXAM_GRAD = svg(`${EXAM_DEFS}<rect x="300" y="200" width="200" height="50" fill="#064e3b"/><rect x="380" y="200" width="10" height="200" fill="#f59e0b"/><text x="400" y="500" font-family="serif" font-weight="bold" font-size="50" fill="#064e3b" text-anchor="middle">CLASS OF 2025</text>`, EXAM_BG);

// Module 9: SPORT / FOOTBALL
const SPORT_BG = '#f0fdf4';
const SPORT_DEFS = `<defs><pattern id="grass" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10 20 L10 0" stroke="#4ade80" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="#15803d"/><rect width="100%" height="100%" fill="url(#grass)"/>`;
const IMG_SPORT_GOAL = svg(`${SPORT_DEFS}<rect x="200" y="200" width="400" height="200" fill="none" stroke="#fff" stroke-width="5"/><circle cx="400" cy="400" r="20" fill="#fff"/><text x="400" y="150" font-family="sans-serif" font-weight="900" font-size="60" fill="#fff" text-anchor="middle">GOAL!</text>`, SPORT_BG);
const IMG_SPORT_BALL = svg(`${SPORT_DEFS}<circle cx="400" cy="300" r="100" fill="#fff"/><path d="M400 300 L450 350 L350 350 Z" fill="#000"/><text x="400" y="500" font-family="sans-serif" font-size="40" fill="#fff" text-anchor="middle">PENALTY</text>`, SPORT_BG);
const IMG_SPORT_WHISTLE = svg(`${SPORT_DEFS}<path d="M300 300 L500 300 L500 400 L400 400 Z" fill="#fbbf24"/><circle cx="500" cy="350" r="30" fill="#d97706"/><text x="400" y="200" font-family="sans-serif" font-weight="bold" font-size="50" fill="#fff" text-anchor="middle">REFEREE</text>`, SPORT_BG);


export const TOPICS: Topic[] = [
  {
    id: 'topic-1',
    title: '6.2 Present Perfect: The Big Score',
    theme: 'gta',
    slides: [
      // ... Module 1 content kept exactly as is ...
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
    title: '9.2 Modals of Deduction: Cyber Arena',
    theme: 'cyber',
    slides: [
      {
        id: '2-1',
        type: 'intro',
        title: 'Lead-in: The Pro Gamer',
        imageUrl: IMG_CYBER_SCOPE,
        leadText: 'Analyze the enemy.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'He has the "Conqueror" frame and a Mythic skin.' },
          { lang: 'en', label: 'Deduction', text: 'He MUST be a pro player. He CAN\'T be a bot!' }
        ],
        question: 'How sure are we about his rank?'
      },
      {
        id: '2-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_CYBER_RANK,
        bulletPoints: [
          { lang: 'en', label: 'MUST', text: '100% Sure (Hacker/Pro).' },
          { lang: 'en', label: 'CAN\'T', text: '100% Impossible (Noob).' },
          { lang: 'en', label: 'MIGHT/COULD', text: '50% Possible (Camper?).' },
          { lang: 'uz', label: 'Must', text: 'Aniq pro o‘yinchi.' },
          { lang: 'uz', label: 'Can\'t', text: 'Bot bo‘lishi mumkin emas.' }
        ]
      },
      {
        id: '2-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_CYBER_LOOT,
        question: 'The loot box is empty. Someone _____ been here.',
        options: ['must have', "can't have"],
        correctAnswer: 0
      },
      {
        id: '2-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_CYBER_SCOPE,
        question: 'He shot me through the wall! He _____ be cheating.',
        options: ['must', "can't"],
        correctAnswer: 0
      },
      {
        id: '2-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_CYBER_RANK,
        question: 'His ping is 999ms. He _____ play well.',
        options: ["can't", 'might'],
        correctAnswer: 0
      },
      {
        id: '2-6-a',
        type: 'timeline',
        title: 'Certainty Scale',
        leadText: 'Probability of Victory',
        visualContext: 'Win Rate Analysis',
        visualData: [
            { label: "CAN'T", subLabel: 'Impossible (0%)', percentage: 10, type: 'point', color: 'red' },
            { label: "MIGHT / COULD", subLabel: 'Maybe (50%)', percentage: 50, type: 'point', color: 'purple' },
            { label: "MUST", subLabel: 'Ace (100%)', percentage: 90, type: 'point', color: 'green' }
        ]
      },
      {
        id: '2-6-b',
        type: 'concept',
        title: 'Scale Intel',
        imageUrl: IMG_CYBER_SCOPE,
        bulletPoints: [
          { lang: 'en', label: '0% (Impossible)', text: "CAN'T: 'He can't be online (Offline status).'" },
          { lang: 'en', label: '50% (Possible)', text: "MIGHT: 'There might be enemies in Pochinki.'" },
          { lang: 'en', label: '100% (Certainty)', text: "MUST: 'It must be a full squad.'" }
        ]
      },
      {
        id: '2-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_CYBER_LOOT,
        bulletPoints: [
          { lang: 'en', label: 'True Certainty', text: 'Look at his K/D ratio (10.0). He MUST be good.' },
          { lang: 'en', label: 'False Certainty', text: 'He is AFK. He CAN\'T shoot back.' },
          { lang: 'en', label: 'Possibility', text: 'The zone MIGHT shift to Military Base.' }
        ]
      },
      {
        id: '2-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_CYBER_RANK,
        question: 'That player has the default skin but plays perfectly.',
        options: ['He must be a smurf account.', "He can't be a smurf.", "He mustn't be playing."],
        correctAnswer: 0
      },
      {
        id: '2-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_CYBER_SCOPE,
        question: 'You hear footsteps. An enemy _____ be close.',
        options: ['might', 'must', "can't"],
        correctAnswer: 1
      },
      {
        id: '2-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_CYBER_LOOT,
        question: '"Where is the AWM?" "It _____ be in the drop."',
        options: ["can't", 'could', "won't"],
        correctAnswer: 1
      },
      {
        id: '2-11',
        type: 'quiz',
        title: 'Odd One Out',
        imageUrl: IMG_CYBER_RANK,
        question: 'Which word implies 50% chance of loot?',
        options: ['Must', 'Could', "Can't"],
        correctAnswer: 1
      },
      {
        id: '2-12',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_CYBER_SCOPE,
        question: 'Transform: "I\'m sure he is offline."',
        options: ['He might be offline.', 'He must be offline.'],
        correctAnswer: 1
      },
      {
        id: '2-13',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_CYBER_LOOT,
        question: 'Transform: "It is impossible that he saw me."',
        options: ["He can't have seen me.", "He mustn't see me."],
        correctAnswer: 0
      },
      {
        id: '2-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_CYBER_RANK,
        question: '"A bot ____ aim that well!"',
        options: ['must', "can't", 'might'],
        correctAnswer: 1
      },
      {
        id: '2-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_CYBER_SCOPE,
        leadText: '"You played for 10 hours straight. You __________ (be) tired."',
        correctAnswer: 'must be'
      },
      {
        id: '2-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_CYBER_LOOT,
        leadText: '"Where is the last enemy?" "He __________ (hide) in the grass."',
        correctAnswer: 'might be hiding'
      },
      {
        id: '2-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_CYBER_RANK,
        leadText: '"That score __________ (be) correct. It\'s too high!"',
        correctAnswer: "can't be"
      },
      {
        id: '2-18',
        type: 'reading',
        title: 'Game Chat Log',
        imageUrl: IMG_CYBER_SCOPE,
        passage: "Player1: 'How did he headshot me?' Player2: 'He **must be** using a hack.' Player1: 'No, he **can't be**. Anti-cheat is active.' Player2: 'Then he **must have** extreme luck.'",
        question: 'Why does Player2 think he is hacking?',
        options: ['He saw the code.', 'He deduced it from the headshot.'],
        correctAnswer: 1
      },
      {
        id: '2-19',
        type: 'speaking',
        title: 'Squad Comms',
        imageUrl: IMG_CYBER_RANK,
        leadText: 'Speculate on the situation.',
        speakingPrompts: [
          'The enemy team disappeared. Where are they?',
          'Your teammate has Level 3 gear but 0 kills. Why?',
          'A player is running into a wall. What is happening?'
        ]
      }
    ]
  },
  {
    id: 'topic-3',
    title: '10.2 Articles: The K-Pop Fandom',
    theme: 'kpop',
    slides: [
      {
        id: '3-1',
        type: 'intro',
        title: 'Lead-in: The Bias',
        imageUrl: IMG_KPOP_LIGHT,
        leadText: 'Compare the merch.',
        bulletPoints: [
          { lang: 'en', label: 'Scenario A', text: '"I want AN album." (Any version is fine.)' },
          { lang: 'en', label: 'Scenario B', text: '"I want THE signed album." (The specific one by Jimin.)' }
        ],
        question: 'Why does one sentence use "an" and the other use "the"?'
      },
      {
        id: '3-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_KPOP_HEART,
        bulletPoints: [
          { lang: 'en', label: 'a/an (Indefinite)', text: 'One of many photocards. First mention.' },
          { lang: 'en', label: 'the (Definite)', text: 'The Ultimate Bias. Specific, unique concert.' },
          { lang: 'en', label: 'No article (Zero)', text: 'General fans (ARMY), abstract love, locations like Seoul.' },
          { lang: 'uz', label: 'a/an', text: 'Bitta albom (farqi yo‘q).' },
          { lang: 'uz', label: 'the', text: 'O‘sha mashhur albom.' }
        ]
      },
      {
        id: '3-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_KPOP_STAGE,
        question: '"I love ____ K-pop idols." (Speaking generally).',
        options: ['the', '(-) no article'],
        correctAnswer: 1,
        explanation: 'Correct! When talking about idols in general, we use no article.'
      },
      {
        id: '3-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_KPOP_LIGHT,
        question: '"Look at ____ stage!"',
        options: ['a', 'the'],
        correctAnswer: 1,
        explanation: 'Correct! There is only one stage at the concert.'
      },
      {
        id: '3-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_KPOP_PC,
        question: '"My sister is at ____ concert (she is attending)."',
        options: ['the', '(-) no article'],
        correctAnswer: 0,
        explanation: 'We usually say "at the concert".'
    },
    {
        id: '3-6-a',
        type: 'timeline',
        title: 'Fandom Logic Flow',
        leadText: 'Which article to use?',
        visualContext: 'Stan Logic',
        visualData: [
            { label: 'Countable?', subLabel: 'Photocard?', percentage: 20, type: 'start', color: 'blue' },
            { label: 'Singular?', subLabel: 'Just one?', percentage: 50, type: 'point', color: 'purple' },
            { label: 'Specific?', subLabel: 'Your Bias?', percentage: 80, type: 'end', color: 'green' }
        ]
    },
    {
        id: '3-6-b',
        type: 'concept',
        title: 'Flowchart Rules',
        imageUrl: IMG_KPOP_HEART,
        bulletPoints: [
            { lang: 'en', label: 'Step 1: Countable?', text: 'No -> Zero Article (music) or The.' },
            { lang: 'en', label: 'Step 2: Singular?', text: 'No (Groups) -> Zero (General) or The (Specific).' },
            { lang: 'en', label: 'Step 3: Specific?', text: 'Yes -> THE. No -> A/AN.' }
        ]
    },
    {
        id: '3-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_KPOP_STAGE,
        bulletPoints: [
            { lang: 'en', label: 'First Mention', text: 'I saw A video. THE video was viral.' },
            { lang: 'en', label: 'General vs Specific', text: '(-) Idols work hard. vs THE idols in BTS work hard.' },
            { lang: 'en', label: 'Places', text: 'She went to (-) Korea. vs She went to THE fan meeting.' }
        ]
    },
    {
        id: '3-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_KPOP_PC,
        question: 'Can you pass me ____ lightstick?',
        options: ['a', 'the', '(-)'],
        correctAnswer: 1,
        explanation: 'Specific object we both see.'
      },
      {
        id: '3-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_KPOP_HEART,
        question: 'He is ____ dancer.',
        options: ['a', 'an', 'the'],
        correctAnswer: 0,
        explanation: 'Professions/Roles take a/an.'
      },
      {
        id: '3-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_KPOP_STAGE,
        question: 'I usually listen to ____ music at night.',
        options: ['the', 'a', '(-)'],
        correctAnswer: 2,
        explanation: 'Music is uncountable/general.'
      },
      {
        id: '3-11',
        type: 'quiz',
        title: 'True/False Quiz',
        imageUrl: IMG_KPOP_LIGHT,
        question: 'True or False: We always use "the" with names of groups (e.g., The BLACKPINK).',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Just "BLACKPINK" or "BTS". But "The Rose" (if part of name).'
      },
      {
        id: '3-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_KPOP_PC,
        question: 'Is "I want to learn the piano" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 0,
        explanation: 'Yes. Instruments use "the".'
      },
      {
        id: '3-13',
        type: 'quiz',
        title: 'Context Match',
        imageUrl: IMG_KPOP_HEART,
        question: 'Standing outside the stadium: "I am looking at _____ stadium."',
        options: ['(-)', 'the'],
        correctAnswer: 1,
        explanation: 'Specific building.'
      },
      {
        id: '3-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_KPOP_STAGE,
        question: '"I want to be ____ trainee."',
        options: ['a', 'an', 'the'],
        correctAnswer: 0
      },
      {
        id: '3-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_KPOP_LIGHT,
        leadText: '"I bought __________ (a/an/the) new poster yesterday."',
        correctAnswer: 'a'
      },
      {
        id: '3-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_KPOP_PC,
        leadText: '"Where is __________ (a/an/the) poster? I lost it." (The specific one).',
        correctAnswer: 'the'
      },
      {
        id: '3-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_KPOP_HEART,
        leadText: '"My dream is to visit __________ Seoul." (Type - for no article)',
        correctAnswer: '-'
      },
      {
        id: '3-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_KPOP_STAGE,
        passage: "**The** MAMA Awards originated in **(-)** South Korea. One story about **the** origin concerns **the** industry growth. Today, **(-)** fans from all over the world travel to **the** show to see **(-)** performances.",
        question: 'Why "The MAMA Awards"?',
        options: ['It is a specific, unique event.', 'It is a general show.'],
        correctAnswer: 0
      },
      {
        id: '3-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_KPOP_LIGHT,
        leadText: 'Record your answer.',
        speakingPrompts: [
          'Who is your favorite idol? (Use "the" for group name if needed)',
          'Describe a concert you want to go to.',
          'What merch do you have?'
        ]
      }
    ]
  },
  {
    id: 'topic-4',
    title: '7.1 Used to/Would: Retro Tashkent',
    theme: 'retro',
    slides: [
      {
        id: '4-1',
        type: 'intro',
        title: 'Lead-in: The Mahalla',
        imageUrl: IMG_RETRO_MAHALLA,
        leadText: 'Past vs Present.',
        bulletPoints: [
            { lang: 'en', label: 'Past', text: '"We used to play \'Oq terak, ko\'k terak\' in the street."' },
            { lang: 'en', label: 'Present', text: '"Now we play PUBG on phones."' }
        ],
        question: 'Do kids still play outside like that? No.'
      },
      {
        id: '4-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_RETRO_TEA,
        bulletPoints: [
          { lang: 'en', label: 'Used to', text: 'Past habits AND states (Living in Eski Shahar).' },
          { lang: 'en', label: 'Would', text: 'ONLY for repeated actions (Drinking tea). NOT for states.' },
          { lang: 'uz', label: 'Used to', text: 'Avvalgi odatlar (endi yo‘q).' },
          { lang: 'uz', label: 'Would', text: 'Takrorlanuvchi harakatlar (choyxona).' }
        ]
      },
      {
        id: '4-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_RETRO_MAHALLA,
        question: '"I _____ live in Chilanzar, but now I live in Sergeli."',
        options: ['used to', 'would'],
        correctAnswer: 0,
        explanation: 'Correct! "Live" is a state, so we cannot use "would".'
      },
      {
        id: '4-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_RETRO_TEA,
        question: '"Every Navruz, we _____ cook Sumalak."',
        options: ['used to', 'would', 'Both are correct'],
        correctAnswer: 2,
        explanation: 'Correct! "Cook" is an action, so both are fine.'
      },
      {
        id: '4-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_RETRO_GAME,
        question: '"I used to have a Nokia." Do I have it now?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: '"Used to" implies the phone is gone.'
      },
      {
        id: '4-6-a',
        type: 'timeline',
        title: 'Nostalgia Timeline',
        leadText: 'Habits of the Past',
        visualContext: 'Memory Lane',
        visualData: [
            { label: 'Childhood', subLabel: 'Repeated', percentage: 20, type: 'range', color: 'orange' },
            { label: 'CHANGE', subLabel: 'Growth', percentage: 60, type: 'point', color: 'red' },
            { label: 'NOW', subLabel: 'Modern', percentage: 90, type: 'end', color: 'blue' }
        ]
      },
      {
        id: '4-6-b',
        type: 'concept',
        title: 'Timeline Rules',
        imageUrl: IMG_RETRO_TEA,
        bulletPoints: [
            { lang: 'en', label: 'Rule', text: 'STATE VERBS (Be, Have, Live) -> Only Used To.' },
            { lang: 'en', label: 'Action Verbs', text: 'Can use both Used To and Would.' }
        ]
      },
      {
        id: '4-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_RETRO_MAHALLA,
        bulletPoints: [
            { lang: 'en', label: 'Action (Both OK)', text: 'We used to visit the bazaar. / We would visit the bazaar.' },
            { lang: 'en', label: 'State (Only Used To)', text: 'I used to believe in Alpamysh. (NOT would believe)' },
            { lang: 'en', label: 'Negative', text: 'I didn\'t use to like Plov (Impossible!).' }
        ]
      },
      {
        id: '4-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_RETRO_GAME,
        question: 'My grandfather ____ tell us stories about Amir Temur.',
        options: ['used to', 'would', 'Both A and B'],
        correctAnswer: 2,
        explanation: '"Tell" is an action.'
      },
      {
        id: '4-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_RETRO_TEA,
        question: 'I ____ be afraid of the dark streets.',
        options: ['used to', 'would'],
        correctAnswer: 0,
        explanation: '"Be" is a state verb.'
      },
      {
        id: '4-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_RETRO_MAHALLA,
        question: 'Did you _____ ride the old tram?',
        options: ['use to', 'used to'],
        correctAnswer: 0,
        explanation: 'In questions with "Did", we drop the "d".'
      },
      {
        id: '4-11',
        type: 'quiz',
        title: 'Categorization',
        imageUrl: IMG_RETRO_TEA,
        question: 'Is "Understand Russian" a State or Action?',
        options: ['State', 'Action'],
        correctAnswer: 0,
        explanation: 'State. So use "used to".'
      },
      {
        id: '4-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_RETRO_MAHALLA,
        question: 'Is "I would have long hair" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'No. Possession is a state. "I used to have long hair."'
      },
      {
        id: '4-13',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_RETRO_GAME,
        question: '"Would" adds a sense of storytelling/nostalgia.',
        options: ['True', 'False'],
        correctAnswer: 0
      },
      {
        id: '4-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_RETRO_TEA,
        question: '"He ____ be a teacher."',
        options: ['used to', 'would'],
        correctAnswer: 0
      },
      {
        id: '4-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_RETRO_MAHALLA,
        leadText: '"Before Telegram, people __________ (send) SMS."',
        correctAnswer: 'used to send'
      },
      {
        id: '4-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_RETRO_TEA,
        leadText: '"This cafe __________ (be) a Choyxona."',
        correctAnswer: 'used to be'
      },
      {
        id: '4-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_RETRO_GAME,
        leadText: '"I __________ (not / use to) like Somsa, but now I do."',
        correctAnswer: 'didn\'t use to'
      },
      {
        id: '4-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_RETRO_MAHALLA,
        passage: 'Life has changed in Tashkent. In the past, people **would spend** evenings in the courtyard. There **used to be** fewer cars. Neighbors **would share** food. It **used to be** very quiet. People **didn\'t use to** have internet.',
        question: '"Would spend" refers to:',
        options: ['A single event.', 'A repeated habit in the past.'],
        correctAnswer: 1
      },
      {
        id: '4-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_RETRO_TEA,
        leadText: 'Record your answer about childhood.',
        speakingPrompts: [
          'What cartoons did you use to watch on TV?',
          'What games did you play in the street?',
          'How has your neighborhood changed?'
        ]
      }
    ]
  },
  {
    id: 'topic-5',
    title: '9.1 Comparatives: Auto Tuning',
    theme: 'auto',
    slides: [
      {
        id: '5-1',
        type: 'intro',
        title: 'Lead-in: The Drag Race',
        imageUrl: IMG_AUTO_RACE,
        leadText: 'Compare the cars.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'Stock Gentra: Fast. Tuned Gentra (Stage 2): Faster. Malibu 2 Turbo: The Fastest.' },
        ],
        question: 'How do we compare the speed?'
      },
      {
        id: '5-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_AUTO_SPEED,
        bulletPoints: [
          { lang: 'en', label: 'Comparatives', text: 'Compare two cars. Keyword: THAN. (e.g., faster, more expensive)' },
          { lang: 'en', label: 'Superlatives', text: 'Compare one vs the street. Keyword: THE. (e.g., the fastest)' },
          { lang: 'en', label: 'Modifiers', text: 'Small diff: slightly faster. Big diff: way faster, much faster.' },
          { lang: 'uz', label: 'Comparatives', text: 'Ikki mashinani solishtirish.' },
          { lang: 'uz', label: 'Superlatives', text: 'Eng zo‘ri.' }
        ]
      },
      {
        id: '5-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_AUTO_WHEEL,
        question: '"Monza is more modern than Cobalt." How many cars?',
        options: ['Two', 'All cars'],
        correctAnswer: 0,
        explanation: 'Correct! Comparatives compare two specific things.'
      },
      {
        id: '5-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_AUTO_RACE,
        question: '"Bugatti is the fastest car."',
        options: ['Comparing it to one car.', 'Comparing it to all cars.'],
        correctAnswer: 1,
        explanation: 'Correct! Superlatives pick one out of a group.'
      },
      {
        id: '5-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_AUTO_SPEED,
        question: '"Turbo is MUCH faster than stock." Is the difference small or big?',
        options: ['Small', 'Big'],
        correctAnswer: 1,
        explanation: '"Much" indicates a large difference.'
      },
      {
        id: '5-6-a',
        type: 'timeline',
        title: 'Speed Scale',
        leadText: 'Degrees of Horsepower',
        visualContext: 'The Speedometer',
        visualData: [
            { label: 'FAST', subLabel: 'Base', percentage: 20, type: 'start', color: 'blue' },
            { label: 'FASTER', subLabel: 'Comparative', percentage: 50, type: 'point', color: 'orange' },
            { label: 'FASTEST', subLabel: 'Superlative', percentage: 80, type: 'end', color: 'red' }
        ]
      },
      {
        id: '5-6-b',
        type: 'concept',
        title: 'Formation Rules',
        imageUrl: IMG_AUTO_WHEEL,
        bulletPoints: [
            { lang: 'en', label: '1 Syllable', text: 'add -er / -est (Fast -> Faster -> The Fastest)' },
            { lang: 'en', label: 'Ending in -y', text: 'remove -y, add -ier / -iest (Heavy -> Heavier)' },
            { lang: 'en', label: '2+ Syllables', text: 'add more / the most (Modern -> More modern)' }
        ]
      },
      {
        id: '5-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_AUTO_RACE,
        bulletPoints: [
            { lang: 'en', label: 'Equality', text: 'Spark is AS FAST AS Matiz. (Same speed)' },
            { lang: 'en', label: 'Comparative', text: 'Tahoe is FAR BIGGER THAN Tracker.' },
            { lang: 'en', label: 'Superlative', text: 'It was THE MOST EXPENSIVE repair.' }
        ]
      },
      {
        id: '5-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_AUTO_SPEED,
        question: 'This engine is ____ than the last one.',
        options: ['powerful', 'more powerful', 'most powerful'],
        correctAnswer: 1,
        explanation: 'Comparison + "than" requires comparative form.'
      },
      {
        id: '5-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_AUTO_WHEEL,
        question: 'Who is the ____ drifter in the city?',
        options: ['better', 'best', 'most good'],
        correctAnswer: 1,
        explanation: 'Superlative requires "est" or irregular form.'
      },
      {
        id: '5-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_AUTO_RACE,
        question: 'The handling is ____ better with these tires.',
        options: ['a lot', 'more', 'very'],
        correctAnswer: 0,
        explanation: 'Modifier for comparative: "a lot better".'
      },
      {
        id: '5-11',
        type: 'quiz',
        title: 'Spelling Bee',
        imageUrl: IMG_AUTO_SPEED,
        question: 'Make "Big" comparative.',
        options: ['Biger', 'Bigger'],
        correctAnswer: 1,
        explanation: 'Double the "g": Bigger.'
      },
      {
        id: '5-12',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_AUTO_WHEEL,
        question: 'True or False: We can say "more faster".',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Double comparative is wrong.'
      },
      {
        id: '5-13',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_AUTO_RACE,
        question: 'Rewrite: "BMW is faster than Mercedes." -> "Mercedes is not..."',
        options: ['...as slow as BMW.', '...as fast as BMW.'],
        correctAnswer: 1,
        explanation: 'Mercedes is not as fast as BMW.'
      },
      {
        id: '5-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_AUTO_SPEED,
        question: '"This is the ____ car I\'ve ever driven."',
        options: ['best', 'better'],
        correctAnswer: 0
      },
      {
        id: '5-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_AUTO_WHEEL,
        leadText: '"Drifting is __________ (dangerous) than parking."',
        correctAnswer: 'more dangerous'
      },
      {
        id: '5-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_AUTO_RACE,
        leadText: '"That is the __________ (bad) crash I have ever seen."',
        correctAnswer: 'worst'
      },
      {
        id: '5-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_AUTO_SPEED,
        leadText: '"My car is a bit __________ (loud) than yours."',
        correctAnswer: 'louder'
      },
      {
        id: '5-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_AUTO_RACE,
        passage: 'Electric cars are **quieter** than gas cars. Acceleration is **much faster**. However, the range is **slightly shorter** than a full tank of gas. Maintenance is **easier** and **less expensive** than a traditional engine.',
        question: 'Are electric cars louder?',
        options: ['Yes.', 'No, they are quieter.'],
        correctAnswer: 1
      },
      {
        id: '5-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_AUTO_WHEEL,
        leadText: 'Record your answer.',
        speakingPrompts: [
            'Compare Gentra and Malibu. Which is better value?',
            'Is it harder to drive manual or automatic? Why?',
            'What is the most beautiful car in the world?'
        ]
      }
    ]
  },
  {
    id: 'topic-6',
    title: '8.2 Unreal Conditionals: Startup Dream',
    theme: 'startup',
    slides: [
      {
        id: '6-1',
        type: 'intro',
        title: 'Lead-in: The Pitch',
        imageUrl: IMG_STARTUP_ROCKET,
        leadText: 'Reality vs Dream',
        bulletPoints: [
            { lang: 'en', label: 'Reality', text: 'I am a student. I have no budget.' },
            { lang: 'en', label: 'Dream', text: '"If I HAD a million dollars, I WOULD LAUNCH my app."' }
        ],
        question: 'Is this real or imaginary?'
      },
      {
        id: '6-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_STARTUP_CODE,
        bulletPoints: [
            { lang: 'en', label: 'Use', text: 'Imaginary startup ideas. "If I were the CEO..."' },
            { lang: 'en', label: 'Formula', text: 'If + Past Simple, ... would + Verb.' },
            { lang: 'en', label: 'Advice', text: 'Use "If I WERE you" (not was).' }
        ]
      },
      {
        id: '6-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_STARTUP_UNICORN,
        question: '"If I founded Facebook, I would be rich." Did I found Facebook?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Correct! This is imaginary.'
      },
      {
        id: '6-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_STARTUP_ROCKET,
        question: '"If I became a Unicron, I would change the world." Is this likely tomorrow?',
        options: ['Yes', 'No, unlikely.'],
        correctAnswer: 1,
        explanation: 'Correct! 2nd conditional for big dreams.'
      },
      {
        id: '6-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_STARTUP_CODE,
        question: 'Which sentence is about the PRESENT/FUTURE?',
        options: ['If I had code, I would deploy.', 'If I had had code, I would have deployed.'],
        correctAnswer: 0,
        explanation: 'Past tense "had" refers to NOW in unreal conditionals.'
      },
      {
        id: '6-6-a',
        type: 'timeline',
        title: 'Structure Visualization',
        leadText: 'Hypothetical Situation Structure',
        visualContext: 'The Code Logic',
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
        imageUrl: IMG_STARTUP_UNICORN,
        bulletPoints: [
            { lang: 'en', label: 'Condition', text: 'IF + Past Simple ("If I CODED better")' },
            { lang: 'en', label: 'Result', text: 'WOULD + Infinitive ("I WOULD BUILD AI")' },
            { lang: 'en', label: 'Inversion', text: 'No comma if "If" is in the middle.' }
        ]
      },
      {
        id: '6-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_STARTUP_ROCKET,
        bulletPoints: [
            { lang: 'en', label: 'Imaginary', text: 'If I MET Elon Musk, I WOULD ASK for a job.' },
            { lang: 'en', label: 'Advice', text: 'If I WERE you, I WOULDN\'T SELL the shares.' },
            { lang: 'en', label: 'Question', text: 'What WOULD you DO if you LOST your data?' }
        ]
      },
      {
        id: '6-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_STARTUP_CODE,
        question: 'If I ____ his email, I would pitch him.',
        options: ['know', 'knew', 'would know'],
        correctAnswer: 1,
        explanation: 'If + Past Simple.'
      },
      {
        id: '6-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_STARTUP_UNICORN,
        question: 'If she ____ the CEO, she wouldn\'t work weekends.',
        options: ['is', 'were', 'would be'],
        correctAnswer: 1,
        explanation: 'Subjunctive "were" is preferred.'
      },
      {
        id: '6-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_STARTUP_ROCKET,
        question: 'We ____ hire more devs if we had funding.',
        options: ['will', 'can', 'could'],
        correctAnswer: 2,
        explanation: '"Could" means "would be able to".'
      },
      {
        id: '6-11',
        type: 'quiz',
        title: 'Matching',
        imageUrl: IMG_STARTUP_CODE,
        question: 'Complete: "If I hacked the bank..."',
        options: ['...I would go to jail.', '...I will go to jail.'],
        correctAnswer: 0
      },
      {
        id: '6-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_STARTUP_UNICORN,
        question: 'Is "If I would have Bitcoin, I would buy a Tesla" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Never put "would" in the If-clause.'
      },
      {
        id: '6-13',
        type: 'quiz',
        title: 'Translation Check',
        imageUrl: IMG_STARTUP_ROCKET,
        question: 'Translate: "Agar vaqtim bo‘lsa (hozir), startap qilardim."',
        options: ['If I had time, I would do a startup.', 'If I have time, I will do a startup.'],
        correctAnswer: 0
      },
      {
        id: '6-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_STARTUP_CODE,
        question: '"If I ____ a genius, I would invent time travel."',
        options: ['were', 'am'],
        correctAnswer: 0
      },
      {
        id: '6-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_STARTUP_UNICORN,
        leadText: '"If I __________ (be) you, I would learn Python."',
        correctAnswer: 'were'
      },
      {
        id: '6-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_STARTUP_ROCKET,
        leadText: '"He __________ (not / be) so stressed if he automated the task."',
        correctAnswer: 'wouldn\'t be'
      },
      {
        id: '6-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_STARTUP_CODE,
        leadText: '"If we __________ (live) in Silicon Valley, we would meet investors."',
        correctAnswer: 'lived'
      },
      {
        id: '6-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_STARTUP_ROCKET,
        passage: 'Life would be different if we **didn\'t have** the internet. If Wi-Fi **disappeared** tomorrow, most startups **would stop** working. We **would have** to use fax machines! If I **had** to code on paper, I **would go** crazy.',
        question: 'Do we have the internet now?',
        options: ['Yes.', 'No.'],
        correctAnswer: 0
      },
      {
        id: '6-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_STARTUP_UNICORN,
        leadText: 'Record your answer.',
        speakingPrompts: [
          'If you could invent any app, what would it do?',
          'If you met Pavel Durov, what would you say?',
          'If you had $10 million investment, what business would you start?'
        ]
      }
    ]
  },
  {
    id: 'topic-7',
    title: '7.2 Questions: Social Media Star',
    theme: 'social',
    slides: [
      {
        id: '7-1',
        type: 'intro',
        title: 'Lead-in: The DM',
        imageUrl: IMG_SOCIAL_LIVE,
        leadText: 'Look at the scenarios.',
        bulletPoints: [
          { lang: 'en', label: 'Scene A (Subject)', text: '"Who LIKED the post?" (Asking about the follower).' },
          { lang: 'en', label: 'Scene B (Object)', text: '"Who DID you BLOCK?" (Asking about the hater).' }
        ],
        question: 'Note the word order differences.'
      },
      {
        id: '7-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SOCIAL_LIKE,
        bulletPoints: [
          { lang: 'en', label: 'Object Questions', text: 'Ask about object. Use do/does/did. "What DID you post?"' },
          { lang: 'en', label: 'Subject Questions', text: 'Ask about subject. NO auxiliary. "Who FOLLOWED you?"' },
          { lang: 'en', label: 'Indirect Questions', text: 'Polite. "Could you tell me why you UNFOLLOWED?"' }
        ]
      },
      {
        id: '7-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SOCIAL_CAM,
        question: '"Who messaged you?"',
        options: ['Asking about the receiver.', 'Asking about the sender (Subject).'],
        correctAnswer: 1
      },
      {
        id: '7-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SOCIAL_LIVE,
        question: '"Who did you message?"',
        options: ['Asking about the receiver (Object).', 'Asking about the sender.'],
        correctAnswer: 0
      },
      {
        id: '7-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SOCIAL_LIKE,
        question: '"Can you tell me where ____?"',
        options: ['is the party', 'the party is'],
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
        imageUrl: IMG_SOCIAL_CAM,
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
        imageUrl: IMG_SOCIAL_LIVE,
        bulletPoints: [
            { lang: 'en', label: 'Subject', text: '"Who broke the camera?" (John broke it).' },
            { lang: 'en', label: 'Object', text: '"What did John break?" (The camera).' },
            { lang: 'en', label: 'Indirect', text: '"I wonder why she LEFT the live stream."' }
        ]
      },
      {
        id: '7-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SOCIAL_LIKE,
        question: 'Who ____ that comment?',
        options: ['did write', 'wrote', 'did wrote'],
        correctAnswer: 1,
        explanation: 'Subject question.'
      },
      {
        id: '7-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SOCIAL_CAM,
        question: 'Where ____ live?',
        options: ['do you', 'you', 'you do'],
        correctAnswer: 0,
        explanation: 'Object question needs auxiliary.'
      },
      {
        id: '7-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SOCIAL_LIVE,
        question: 'Do you know what time ____?',
        options: ['does the stream start', 'the stream starts'],
        correctAnswer: 1,
        explanation: 'Indirect question = statement order.'
      },
      {
        id: '7-11',
        type: 'quiz',
        title: 'Matching',
        imageUrl: IMG_SOCIAL_LIKE,
        question: 'Match meaning: "Who loves Jane?"',
        options: ['Jane loves Tom.', 'Tom loves Jane.'],
        correctAnswer: 1,
        explanation: 'Subject question: Who is the lover?'
      },
      {
        id: '7-12',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_SOCIAL_CAM,
        question: 'Indirect form of "Is he famous?"',
        options: ['Can you tell me if he is famous?', 'Can you tell me if is he famous?'],
        correctAnswer: 0
      },
      {
        id: '7-13',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_SOCIAL_LIVE,
        question: 'Is "Do you know where does he work?" correct?',
        options: ['Yes', 'No, "where he works"'],
        correctAnswer: 1
      },
      {
        id: '7-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SOCIAL_LIKE,
        question: '"Who ____ the giveaway?"',
        options: ['won', 'did win'],
        correctAnswer: 0
      },
      {
        id: '7-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SOCIAL_CAM,
        leadText: '"What __________ (happen) on the stream yesterday?"',
        correctAnswer: 'happened'
      },
      {
        id: '7-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SOCIAL_LIVE,
        leadText: '"Could you tell me how much __________ (cost / this ads)?"',
        correctAnswer: 'this ads costs'
      },
      {
        id: '7-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SOCIAL_LIKE,
        leadText: '"Who __________ (you / invite) to the collab?"',
        correctAnswer: 'did you invite'
      },
      {
        id: '7-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_SOCIAL_CAM,
        passage: 'The blogger was confused. **Who reported him?** His rivals. **What did he post?** A controversial opinion. Later, journalists asked, "**Could you tell us why you deleted the video?**" He wondered **why people were so angry**.',
        question: '"Could you tell us why you deleted..." is:',
        options: ['Direct question.', 'Indirect question.'],
        correctAnswer: 1
      },
      {
        id: '7-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SOCIAL_LIVE,
        leadText: 'Record polite questions for a stranger.',
        speakingPrompts: [
          'Ask them what their Instagram is, politely.',
          'Ask them who their favorite TikToker is directly.',
          'Ask them where they took that photo, politely.'
        ]
      }
    ]
  },
  {
    id: 'topic-8',
    title: '8.1 Real Conditionals: The Abituriyent',
    theme: 'exam',
    slides: [
      {
        id: '8-1',
        type: 'intro',
        title: 'Lead-in: The Exam',
        imageUrl: IMG_EXAM_CERT,
        leadText: 'Fact vs Prediction',
        bulletPoints: [
            { lang: 'en', label: 'Fact (Zero)', text: '"If you study, you learn." (Always true).' },
            { lang: 'en', label: 'Prediction (First)', text: '"If I get 7.0 IELTS, I will apply to Westminster."' }
        ]
      },
      {
        id: '8-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_EXAM_STUDY,
        bulletPoints: [
            { lang: 'en', label: 'Zero Conditional', text: 'General truths. (If + Present, ... Present).' },
            { lang: 'en', label: 'First Conditional', text: 'Possible future. (If + Present, ... Will).' },
            { lang: 'en', label: 'Unless', text: 'Means "If not".' }
        ]
      },
      {
        id: '8-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_EXAM_GRAD,
        question: '"If I skip class, the teacher marks me absent." (Routine)',
        options: ['Zero Conditional', 'First Conditional'],
        correctAnswer: 0
      },
      {
        id: '8-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_EXAM_CERT,
        question: '"If I pass the exam tomorrow, I will celebrate."',
        options: ['Zero Conditional', 'First Conditional'],
        correctAnswer: 1
      },
      {
        id: '8-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_EXAM_STUDY,
        question: '"I won\'t get the grant unless I study."',
        options: ['I will get it if I study.', 'I will get it if I don\'t study.'],
        correctAnswer: 0
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
        imageUrl: IMG_EXAM_GRAD,
        bulletPoints: [
            { lang: 'en', label: 'General Fact?', text: 'YES -> Present + Present (Zero)' },
            { lang: 'en', label: 'Future Possibility?', text: 'YES -> Present + Will (First)' }
        ]
      },
      {
        id: '8-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_EXAM_CERT,
        bulletPoints: [
            { lang: 'en', label: 'Zero', text: '"If you fail, you retake."' },
            { lang: 'en', label: 'First', text: '"If the test is hard, I will panic."' },
            { lang: 'en', label: 'Unless', text: '"You can\'t graduate unless you pass Math."' }
        ]
      },
      {
        id: '8-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_EXAM_STUDY,
        question: 'If students cheat, they ____ disqualified.',
        options: ['get', 'will get', 'got'],
        correctAnswer: 0,
        explanation: 'General rule -> Zero conditional.'
      },
      {
        id: '8-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_EXAM_GRAD,
        question: 'If I ____ the certificate, I\'ll show you.',
        options: ['receive', 'will receive'],
        correctAnswer: 0,
        explanation: 'Never use "will" in the If-clause.'
      },
      {
        id: '8-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_EXAM_CERT,
        question: 'We won\'t enter ____ we have ID.',
        options: ['if', 'unless'],
        correctAnswer: 1
      },
      {
        id: '8-11',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_EXAM_STUDY,
        question: 'In First Conditional, we use Future Tense in both parts?',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. If + Present, ... Will.'
      },
      {
        id: '8-12',
        type: 'quiz',
        title: 'Transformation',
        imageUrl: IMG_EXAM_GRAD,
        question: '"If you don\'t pay, you won\'t study." -> Unless...',
        options: ['Unless you pay, you won\'t study.', 'Unless you don\'t pay...'],
        correctAnswer: 0
      },
      {
        id: '8-13',
        type: 'quiz',
        title: 'Matching',
        imageUrl: IMG_EXAM_CERT,
        question: 'Match: "If you mix blue and yellow..."',
        options: ['...you get green.', '...you will get green.'],
        correctAnswer: 0
      },
      {
        id: '8-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_EXAM_STUDY,
        question: '"If the bell ____ (ring), the lesson ends."',
        options: ['rings', 'will ring'],
        correctAnswer: 0
      },
      {
        id: '8-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_EXAM_GRAD,
        leadText: '"If you __________ (need) help, ask the tutor."',
        correctAnswer: 'need'
      },
      {
        id: '8-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_EXAM_CERT,
        leadText: '"Unless we study now, we __________ (fail)."',
        correctAnswer: 'will fail'
      },
      {
        id: '8-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_EXAM_STUDY,
        leadText: '"If he __________ (not / come) to the exam, he gets 0."',
        correctAnswer: 'doesn\'t come'
      },
      {
        id: '8-18',
        type: 'reading',
        title: 'Reading Comprehension',
        imageUrl: IMG_EXAM_CERT,
        passage: 'Entrance exams are stressful. **If students prepare well, they feel confident** (Zero). However, **if the questions are unexpected, they will be nervous** (First). Experts say that **unless you sleep enough, you won\'t remember** anything.',
        question: '"If the questions are unexpected, they will be nervous." This is:',
        options: ['A likely result in the future.', 'A fact that always happens instantly.'],
        correctAnswer: 0
      },
      {
        id: '8-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_EXAM_GRAD,
        leadText: 'Record your answer.',
        speakingPrompts: [
          'What will you do if you get a low score?',
          'What happens if you are late to the exam?',
          'Complete: "If I finish university, I will..."'
        ]
      }
    ]
  },
  {
    id: 'topic-9',
    title: '11.2 Should/Shouldn\'t have: Football Regrets',
    theme: 'sport',
    slides: [
      {
        id: '9-1',
        type: 'intro',
        title: 'Lead-in: The Penalty',
        imageUrl: IMG_SPORT_BALL,
        leadText: 'Look at the scenario.',
        bulletPoints: [
          { lang: 'en', label: 'Fact', text: 'He MISSED the penalty. We LOST the game.' },
          { lang: 'en', label: 'Regret', text: '"I SHOULD HAVE SCORED. I SHOULDN\'T HAVE MISSED."' }
        ],
        question: 'Can he change the score now? No.'
      },
      {
        id: '9-2',
        type: 'concept',
        title: 'Meaning & Definition',
        imageUrl: IMG_SPORT_GOAL,
        bulletPoints: [
          { lang: 'en', label: 'Use', text: 'Criticize past actions or express regret.' },
          { lang: 'en', label: 'Formula', text: 'Should have + Past Participle (V3).' },
          { lang: 'uz', label: 'Ma’nosi', text: 'Afsuslanish.' }
        ]
      },
      {
        id: '9-3',
        type: 'quiz',
        title: 'Concept Check 1',
        imageUrl: IMG_SPORT_WHISTLE,
        question: '"You should have passed the ball." Did you pass it?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Correct! I am criticizing you because you didn\'t pass.'
      },
      {
        id: '9-4',
        type: 'quiz',
        title: 'Concept Check 2',
        imageUrl: IMG_SPORT_BALL,
        question: '"I shouldn\'t have fouled him." How do I feel?',
        options: ['Happy.', 'Regretful.'],
        correctAnswer: 1
      },
      {
        id: '9-5',
        type: 'quiz',
        title: 'Concept Check 3',
        imageUrl: IMG_SPORT_GOAL,
        question: 'Is "He should have been faster" about Future or Past?',
        options: ['Future', 'Past'],
        correctAnswer: 1
      },
      {
        id: '9-6-a',
        type: 'timeline',
        title: 'Timeline of Regret',
        leadText: 'Looking back at a past mistake',
        visualContext: 'The Final Whistle',
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
        imageUrl: IMG_SPORT_WHISTLE,
        bulletPoints: [
            { lang: 'en', label: 'Past Point', text: 'The foul happened here.' },
            { lang: 'en', label: 'Present Point', text: 'Looking back at the red card.' }
        ]
      },
      {
        id: '9-7',
        type: 'concept',
        title: '3 Examples',
        imageUrl: IMG_SPORT_GOAL,
        bulletPoints: [
            { lang: 'en', label: 'Self-Regret', text: '"I SHOULD HAVE TRAINED harder."' },
            { lang: 'en', label: 'Criticism', text: '"The ref SHOULDN\'T HAVE GIVEN a red card."' },
            { lang: 'en', label: 'Advice (Too late)', text: '"You SHOULD HAVE WORN boots!"' }
        ]
      },
      {
        id: '9-8',
        type: 'test',
        title: 'Test 1',
        imageUrl: IMG_SPORT_BALL,
        question: 'The game was terrible. We ____ played better.',
        options: ['should have', 'shouldn\'t have'],
        correctAnswer: 0
      },
      {
        id: '9-9',
        type: 'test',
        title: 'Test 2',
        imageUrl: IMG_SPORT_WHISTLE,
        question: 'You ____ argued with the referee. He kicked you out!',
        options: ['should have', 'shouldn\'t have'],
        correctAnswer: 1
      },
      {
        id: '9-10',
        type: 'test',
        title: 'Test 3',
        imageUrl: IMG_SPORT_GOAL,
        question: 'I ____ brought my jersey. I forgot it.',
        options: ['shouldn\'t have', 'should have'],
        correctAnswer: 1
      },
      {
        id: '9-11',
        type: 'quiz',
        title: 'True/False',
        imageUrl: IMG_SPORT_BALL,
        question: '"Should have" is used to give advice for the next game.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. It is for the past.'
      },
      {
        id: '9-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        imageUrl: IMG_SPORT_WHISTLE,
        question: 'Is "You should have catch the ball" correct?',
        options: ['Yes', 'No, "caught"'],
        correctAnswer: 1,
        explanation: 'V3 required.'
      },
      {
        id: '9-13',
        type: 'quiz',
        title: 'Context Match',
        imageUrl: IMG_SPORT_GOAL,
        question: 'You are injured because you didn\'t stretch.',
        options: ['I should have stretched.', 'I shouldn\'t have stretched.'],
        correctAnswer: 0
      },
      {
        id: '9-14',
        type: 'test',
        title: 'Rapid Fire',
        imageUrl: IMG_SPORT_BALL,
        question: '"He ____ drunk water."',
        options: ['should have', 'shouldn\'t have'],
        correctAnswer: 0
      },
      {
        id: '9-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        imageUrl: IMG_SPORT_WHISTLE,
        leadText: '"I didn\'t defend well. I __________ (defend) better."',
        correctAnswer: 'should have defended'
      },
      {
        id: '9-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        imageUrl: IMG_SPORT_GOAL,
        leadText: '"We lost. We __________ (score) more goals."',
        correctAnswer: 'should have scored'
      },
      {
        id: '9-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        imageUrl: IMG_SPORT_BALL,
        leadText: '"My leg hurts. I __________ (kick) so hard."',
        correctAnswer: 'shouldn\'t have kicked'
      },
      {
        id: '9-18',
        type: 'reading',
        title: 'Match Report',
        imageUrl: IMG_SPORT_GOAL,
        passage: 'Real Madrid lost the classic. The manager said they **should have been** more aggressive. The defenders **shouldn\'t have left** Messi open. The goalkeeper **should have saved** the last shot.',
        question: 'Did the goalkeeper save the shot?',
        options: ['Yes.', 'No.'],
        correctAnswer: 1
      },
      {
        id: '9-19',
        type: 'speaking',
        title: 'Speaking Task',
        imageUrl: IMG_SPORT_WHISTLE,
        leadText: 'Record your opinion.',
        speakingPrompts: [
          'Uzbekistan lost the match. Criticize the coach using "should have".',
          'You bought expensive boots but they hurt. Regret it.',
          'Your friend stopped playing football. Tell him it was a mistake.'
        ]
      }
    ]
  },
  // ... Modules 10 and 11 kept exactly as is ...
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
          { lang: 'en', label: 'Word Order', text: 'Change to Statement order (S-V). No do/does/did. "What DID you post?"' },
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