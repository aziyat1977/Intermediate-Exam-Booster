
import { Topic } from '../types';

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
        imageUrl: 'https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&w=1000&auto=format&fit=crop', // Luxury pool
        leadText: 'Look at the crew.',
        bulletPoints: [
           { lang: 'en', label: 'Observe', text: 'Michael is drinking by the pool. Trevor is covered in mud.' }
        ]
      },
      {
        id: '1-1-b',
        type: 'concept',
        title: 'Scenario A: Michael',
        imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop', // Money stacks
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
        imageUrl: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=1000&auto=format&fit=crop', // Dirty hands / Mud
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
        imageUrl: 'https://images.unsplash.com/photo-1531297461136-82lw8z9a?q=80&w=1000&auto=format&fit=crop', // Strategy/Heist planning
        leadText: 'Analyze the Heist.',
        question: 'Which sentence focuses on the PAYOUT (Result)? Which one focuses on the GRIND (Activity)?'
      },
      {
        id: '1-2-a',
        type: 'concept',
        title: 'Continuous: The Grind',
        imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1000&auto=format&fit=crop', // Sports car action
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
        imageUrl: 'https://images.unsplash.com/photo-1518183214770-9cffbec72538?q=80&w=1000&auto=format&fit=crop', // Success / Money
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
        imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop', // Book / Translate
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
        imageUrl: 'https://images.unsplash.com/photo-1552674605-5d226a58b357?q=80&w=1000&auto=format&fit=crop', // Runner sweating
        leadText: 'Franklin is out of breath.',
        bulletPoints: [
            { lang: 'en', label: 'Situation', text: 'Franklin is sweating and panting behind a wall.' }
        ]
      },
      {
        id: '1-3-b',
        type: 'quiz',
        title: 'Concept Check 1: Question',
        imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop', // Police lights abstract
        question: 'What do you say?',
        options: ['You have escaped.', 'You have been running from the cops.'],
        correctAnswer: 1,
        explanation: 'Correct! We see the physical evidence of the activity (sweat/breath).'
      },
      {
        id: '1-4-a',
        type: 'intro',
        title: 'Concept Check 2',
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop', // Bank Vault
        leadText: 'The Union Depository Vault.',
        bulletPoints: [
            { lang: 'en', label: 'Situation', text: 'The vault door is open. The gold bars are GONE.' }
        ]
      },
      {
        id: '1-4-b',
        type: 'quiz',
        title: 'Concept Check 2: Question',
        imageUrl: 'https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=1000&auto=format&fit=crop', // Empty warehouse
        question: 'What happened?',
        options: ['Someone has stolen the gold.', 'Someone has been stealing the gold.'],
        correctAnswer: 0,
        explanation: 'Correct! The gold is gone. Result achieved.'
      },
      {
        id: '1-5-a',
        type: 'intro',
        title: 'Concept Check 3',
        imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1000&auto=format&fit=crop', // Hacker setup
        leadText: 'Lester Crest at his computer.',
        bulletPoints: [
            { lang: 'en', label: 'Situation', text: 'Lester started hacking the FIB server an hour ago. He is still typing.' }
        ]
      },
      {
        id: '1-5-b',
        type: 'quiz',
        title: 'Concept Check 3: Question',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop', // Matrix code / Hacking
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
        imageUrl: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=1000&auto=format&fit=crop', // Strategy Map
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
        imageUrl: 'https://images.unsplash.com/photo-1584742680602-536735a28169?q=80&w=1000&auto=format&fit=crop', // Heist planning
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: 'Lester has **been planning** the heist all week. (He is busy.)' },
          { lang: 'en', label: 'Simple', text: 'Lester has **planned** the heist. (We are ready to go.)' }
        ]
      },
      {
        id: '1-7-b',
        type: 'concept',
        title: 'Example 2: Damage',
        imageUrl: 'https://images.unsplash.com/photo-1599933339840-b397b966b9a9?q=80&w=1000&auto=format&fit=crop', // Car crash/Smoke
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: 'Why is the car smoking? I\'ve **been drifting**. (Explanation of state).' },
          { lang: 'en', label: 'Simple', text: 'I have **crashed** the car. (It is destroyed).' }
        ]
      },
      {
        id: '1-7-c',
        type: 'concept',
        title: 'Example 3: Duration vs Count',
        imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop', // Car mod shop
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: 'How long **have you been modding** this car?' },
          { lang: 'en', label: 'Simple', text: 'How many cars **have you stolen** today?' }
        ]
      },
      {
        id: '1-8',
        type: 'test',
        title: 'Job Test 1',
        imageUrl: 'https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?q=80&w=1000&auto=format&fit=crop', // Muddy tires
        question: 'Look at Trevor\'s truck! It\'s covered in mud. He ______ off-road.',
        options: ['has driven', 'has been driving', 'drove'],
        correctAnswer: 1,
        explanation: 'Evidence (mud) implies recent continuous activity.'
      },
      {
        id: '1-9',
        type: 'test',
        title: 'Job Test 2',
        imageUrl: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1000&auto=format&fit=crop', // Bank exterior
        question: 'I ______ three banks this month.',
        options: ['have been robbing', 'have robbed', 'rob'],
        correctAnswer: 1,
        explanation: 'Quantity specified (3 banks) = Simple.'
      },
      {
        id: '1-10',
        type: 'test',
        title: 'Job Test 3',
        imageUrl: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=1000&auto=format&fit=crop', // Watch / Time
        question: 'Lester is angry. "Where are you? I ______ for 20 minutes!"',
        options: ['have waited', 'did wait', 'have been waiting'],
        correctAnswer: 2,
        explanation: 'Focus on duration up to now.'
      },
      {
        id: '1-11',
        type: 'quiz',
        title: 'True/False Quiz',
        imageUrl: 'https://images.unsplash.com/photo-1555445054-d83391295325?q=80&w=1000&auto=format&fit=crop', // Security Guard
        question: 'True or False: We use Continuous to say how many guards we have knocked out.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Quantities use Simple.'
      },
      {
        id: '1-12',
        type: 'quiz',
        title: 'Spot the Snitch',
        imageUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop', // Handshake / Knowing
        question: 'Is this correct? "I have been knowing Michael for 10 years."',
        options: ['Yes', 'No, "know" is a state verb.'],
        correctAnswer: 1,
        explanation: 'Correct. "Know" is a state verb. Use "have known".'
      },
      {
        id: '1-13',
        type: 'quiz',
        title: 'Context Match',
        imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=1000&auto=format&fit=crop', // Dirty mechanic hands
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
        imageUrl: 'https://images.unsplash.com/photo-1557002665-c552e1832483?q=80&w=1000&auto=format&fit=crop', // Action in progress
        options: ['He has escaped prison.', 'She has bought a weapon.', 'I\'ve been scoping out the bank.'],
        correctAnswer: 2
      },
      {
        id: '1-15',
        type: 'gap-fill',
        title: 'Heist Prep 1',
        imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop', // Garage work
        leadText: '"You look exhausted, Franklin!" "Yes, I __________ (work) on the car all night."',
        correctAnswer: 'have been working'
      },
      {
        id: '1-16',
        type: 'gap-fill',
        title: 'Heist Prep 2',
        imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop', // Winning / Checkered Flag
        leadText: '"Mission Passed! You __________ (win) the race!"',
        correctAnswer: 'have won'
      },
      {
        id: '1-17',
        type: 'gap-fill',
        title: 'Heist Prep 3',
        imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000&auto=format&fit=crop', // Phone call
        leadText: '"Lester, pick up! What __________ (you / do) all morning?"',
        correctAnswer: 'have you been doing'
      },
      {
        id: '1-18-a',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop', // Skyscraper / Bank
        passage: '"The crew **has been planning** the Union Depository job for months. They **have found** a weakness in the security. The guards **have been patrolling** the same route every day. Recently, Trevor **has stolen** a helicopter for the getaway. The FIB **has been watching** them closely."',
        question: 'Q1: Why "have been planning"?',
        options: ['Because the plan is finished.', 'Because it is a long process continuing up to now.'],
        correctAnswer: 1
      },
      {
        id: '1-18-b',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop', // Security System
        passage: '"...They **have found** a weakness in the security..."',
        question: 'Q2: "They have found..." implies:',
        options: ['A completed result / discovery.', 'An ongoing search.'],
        correctAnswer: 0
      },
      {
        id: '1-18-c',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000&auto=format&fit=crop', // Patrol / Guard
        passage: '"...The guards **have been patrolling** the same route every day..."',
        question: 'Q3: "Have been patrolling" focuses on:',
        options: ['The total number of patrols.', 'The repeated continuous activity.'],
        correctAnswer: 1
      },
      {
        id: '1-18-d',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop', // Helicopter
        passage: '"...Recently, Trevor **has stolen** a helicopter for the getaway..."',
        question: 'Q4: Why "has stolen"?',
        options: ['The helicopter is now in his possession (Result).', 'He is still stealing it.'],
        correctAnswer: 0
      },
      {
        id: '1-18-e',
        type: 'reading',
        title: 'Intel: The Union Depository',
        imageUrl: 'https://images.unsplash.com/photo-1535378437321-29e64d30630d?q=80&w=1000&auto=format&fit=crop', // Surveillance
        passage: '"...The FIB **has been watching** them closely."',
        question: 'Q5: "Has been watching" means:',
        options: ['They watched once.', 'They have done this repeatedly recently and might continue.'],
        correctAnswer: 1
      },
      {
        id: '1-19-a',
        type: 'speaking',
        title: 'Interrogation 1',
        imageUrl: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1000&auto=format&fit=crop', // Interrogation room
        leadText: 'Record your answer for the FIB.',
        speakingPrompts: [
          'Why are your clothes dirty? What have you been doing in the desert?'
        ]
      },
      {
        id: '1-19-b',
        type: 'speaking',
        title: 'Interrogation 2',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop', // Money Bag
        leadText: 'Record your answer for the FIB.',
        speakingPrompts: [
          'How much money have you stolen from the bank? (Use Simple)'
        ]
      },
      {
        id: '1-19-c',
        type: 'speaking',
        title: 'Interrogation 3',
        imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1000&auto=format&fit=crop', // Police lights
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
        leadText: 'Look at the scenario.',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'A Ferrari parked outside a ruined house.' },
          { lang: 'en', label: 'Deduction', text: 'He MUST be rich to buy the car. He CAN\'T live in that house!' }
        ]
      },
      {
        id: '2-2',
        type: 'concept',
        title: 'Meaning & Definition',
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
        question: 'The lights are off. The car is gone. They _____ be home.',
        options: ['must', "can't"],
        correctAnswer: 1
      },
      {
        id: '2-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: 'She is speaking fluent Japanese. She _____ be from Japan or studied there.',
        options: ['must', "can't"],
        correctAnswer: 0
      },
      {
        id: '2-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        question: 'That woman looks exactly like Beyonce.',
        options: ['She must be her sister.', "She can't be her sister.", "She mustn't be her sister."],
        correctAnswer: 0
      },
      {
        id: '2-9',
        type: 'test',
        title: 'Test 2',
        question: 'You just ate a whole pizza! You _____ be hungry already.',
        options: ['might', 'must', "can't"],
        correctAnswer: 2
      },
      {
        id: '2-10',
        type: 'test',
        title: 'Test 3',
        question: '"Someone is knocking." "It _____ be the postman. He usually comes at this time."',
        options: ["can't", 'could', "won't"],
        correctAnswer: 1
      },
      {
        id: '2-11',
        type: 'quiz',
        title: 'Odd One Out',
        question: 'Which word implies 50% possibility?',
        options: ['Must', 'Could', "Can't"],
        correctAnswer: 1
      },
      {
        id: '2-12',
        type: 'quiz',
        title: 'Transformation',
        question: 'Transform: "I\'m sure he is French."',
        options: ['He might be French.', 'He must be French.'],
        correctAnswer: 1
      },
      {
        id: '2-13',
        type: 'quiz',
        title: 'Transformation',
        question: 'Transform: "It is impossible that that is my phone."',
        options: ["That can't be my phone.", "That mustn't be my phone."],
        correctAnswer: 0
      },
      {
        id: '2-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"A human ____ walk there!"',
        options: ['must', "can't", 'might'],
        correctAnswer: 1
      },
      {
        id: '2-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"You\'ve been travelling for 24 hours. You __________ (be) exhausted."',
        correctAnswer: 'must be'
      },
      {
        id: '2-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"Whose bag is this?" "I\'m not sure. It __________ (belong) to the new student."',
        correctAnswer: 'might belong'
      },
      {
        id: '2-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"That answer __________ (be) right. Paris is in France, not Italy!"',
        correctAnswer: "can't be"
      },
      {
        id: '2-18',
        type: 'reading',
        title: 'Detective Reading',
        passage: "The window was broken from the inside. 'The thief **must be** someone who works here,' said Detective Miller. 'They **can't be** a stranger, because the alarm didn't ring.'",
        question: 'Why does Miller think the thief works there?',
        options: ['He saw them.', 'He deduced it from the window.'],
        correctAnswer: 1
      },
      {
        id: '2-19',
        type: 'speaking',
        title: 'Speaking Task',
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
        question: '"I love ____ dogs." (Speaking generally about all dogs).',
        options: ['the', '(-) no article'],
        correctAnswer: 1,
        explanation: 'Correct! When talking about plural nouns in general, we use no article.'
      },
      {
        id: '3-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"Look at ____ moon!"',
        options: ['a', 'the'],
        correctAnswer: 1,
        explanation: 'Correct! There is only one moon implies uniqueness.'
      },
      {
        id: '3-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        question: 'Can you shut ____ door, please?',
        options: ['a', 'the', '(-)'],
        correctAnswer: 1,
        explanation: 'Both speakers know which door.'
    },
    {
        id: '3-9',
        type: 'test',
        title: 'Test 2',
        question: 'He is ____ engineer.',
        options: ['a', 'an', 'the'],
        correctAnswer: 1,
        explanation: 'Professions take a/an; starts with vowel sound.'
    },
    {
        id: '3-10',
        type: 'test',
        title: 'Test 3',
        question: 'I usually have ____ lunch at 1 PM.',
        options: ['the', 'a', '(-)'],
        correctAnswer: 2,
        explanation: 'Meals usually take no article.'
    },
    {
        id: '3-11',
        type: 'quiz',
        title: 'True/False Quiz',
        question: 'True or False: We always use "the" with names of countries (e.g., The France).',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Only plural names or "Kingdom/Republic" (The USA, The UK).'
    },
    {
        id: '3-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is "I want to learn the guitar" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 0,
        explanation: 'Yes. With musical instruments, we often use "the".'
    },
    {
        id: '3-13',
        type: 'quiz',
        title: 'Context Match',
        question: 'Standing outside a hospital looking at the building: "I am looking at _____ hospital."',
        options: ['(-)', 'the'],
        correctAnswer: 1,
        explanation: 'You are referring to the specific building, not the medical service.'
    },
    {
        id: '3-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"I want to be ____ artist."',
        options: ['a', 'an', 'the'],
        correctAnswer: 1
    },
    {
        id: '3-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"I bought __________ (a/an/the) new phone yesterday."',
        correctAnswer: 'a'
    },
    {
        id: '3-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"Where is __________ (a/an/the) phone? I can\'t find it." (Referring to the one I bought).',
        correctAnswer: 'the'
    },
    {
        id: '3-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"My sister goes to __________ university in London." (Type - for no article)',
        correctAnswer: '-'
    },
    {
        id: '3-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: "**The** Olympic Games originated long ago in **(-)** ancient Greece. One story about **the** origin concerns **the** god Zeus. It is said that he fought his father for **(-)** control of **the** world. The games were held in **a** valley called Olympia. Today, **(-)** athletes from all over the world travel to **the** games to compete for **(-)** gold medals.",
        question: 'Why "The Olympic Games"?',
        options: ['It is a specific, unique event.', 'It is a general game.'],
        correctAnswer: 0
    },
    {
        id: '3-19',
        type: 'speaking',
        title: 'Speaking Task',
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
        question: '"I _____ have a small car, but now I have a big one."',
        options: ['used to', 'would'],
        correctAnswer: 0,
        explanation: 'Correct! "Have" here is a state (possession), so we cannot use "would".'
      },
      {
        id: '4-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"Every summer, we _____ go to the beach."',
        options: ['used to', 'would', 'Both are correct'],
        correctAnswer: 2,
        explanation: 'Correct! "Go" is an action verb, so both are fine.'
      },
      {
        id: '4-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        bulletPoints: [
            { lang: 'en', label: 'Rule', text: 'STATE VERBS (Love, Be, Have, Know) -> Only Used To.' },
            { lang: 'en', label: 'Action Verbs', text: 'Can use both Used To and Would.' }
        ]
      },
      {
        id: '4-7',
        type: 'concept',
        title: '3 Examples',
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
        question: 'My grandfather ____ tell us amazing stories.',
        options: ['used to', 'would', 'Both A and B'],
        correctAnswer: 2,
        explanation: '"Tell" is an action.'
      },
      {
        id: '4-9',
        type: 'test',
        title: 'Test 2',
        question: 'I ____ be afraid of the dark.',
        options: ['used to', 'would'],
        correctAnswer: 0,
        explanation: '"Be" is a state verb.'
      },
      {
        id: '4-10',
        type: 'test',
        title: 'Test 3',
        question: 'Did you _____ play football?',
        options: ['use to', 'used to'],
        correctAnswer: 0,
        explanation: 'In questions with "Did", we drop the "d".'
      },
      {
        id: '4-11',
        type: 'quiz',
        title: 'Categorization',
        question: 'Is "Understand" a State or Action verb?',
        options: ['State', 'Action'],
        correctAnswer: 0,
        explanation: 'State. So use "used to", not "would".'
      },
      {
        id: '4-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is "I would have long hair" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'No. Possession is a state. "I used to have long hair."'
      },
      {
        id: '4-13',
        type: 'quiz',
        title: 'True/False',
        question: '"Would" adds a sense of nostalgia or storytelling.',
        options: ['True', 'False'],
        correctAnswer: 0
      },
      {
        id: '4-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"He ____ be a teacher."',
        options: ['used to', 'would'],
        correctAnswer: 0
      },
      {
        id: '4-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"Before the internet, people __________ (send) letters."',
        correctAnswer: 'used to send'
      },
      {
        id: '4-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"This building __________ (be) a cinema."',
        correctAnswer: 'used to be'
      },
      {
        id: '4-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"I __________ (not / use to) enjoy reading, but now I do."',
        correctAnswer: 'didn\'t use to'
      },
      {
        id: '4-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'Office life has changed. In the past, people **would spend** ages typing documents on typewriters. There **used to be** a lot more paper everywhere. Managers **would smoke** inside the office! It **used to be** very noisy. People **didn\'t use to** have emails.',
        question: '"Would spend" refers to:',
        options: ['A single event.', 'A repeated habit in the past.'],
        correctAnswer: 1
      },
      {
        id: '4-19',
        type: 'speaking',
        title: 'Speaking Task',
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
        question: '"Ferrari is faster than Ford." How many cars are we talking about?',
        options: ['Two', 'All cars in the world'],
        correctAnswer: 0,
        explanation: 'Correct! Comparatives compare two specific things.'
      },
      {
        id: '5-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"Mount Everest is the highest mountain."',
        options: ['Comparing it to one other mountain.', 'Comparing it to all mountains.'],
        correctAnswer: 1,
        explanation: 'Correct! Superlatives pick one out of a group.'
      },
      {
        id: '5-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        question: 'This exam was ____ than the last one.',
        options: ['difficult', 'more difficult', 'most difficult'],
        correctAnswer: 1,
        explanation: 'Comparison + "than" requires comparative form.'
      },
      {
        id: '5-9',
        type: 'test',
        title: 'Test 2',
        question: 'Who is the ____ person in your family?',
        options: ['younger', 'youngest', 'most young'],
        correctAnswer: 1,
        explanation: 'Superlative requires "est".'
      },
      {
        id: '5-10',
        type: 'test',
        title: 'Test 3',
        question: 'The weather is ____ better today.',
        options: ['a lot', 'more', 'very'],
        correctAnswer: 0,
        explanation: 'Modifier for comparative: "a lot better".'
      },
      {
        id: '5-11',
        type: 'quiz',
        title: 'Spelling Bee',
        question: 'Make "Big" comparative.',
        options: ['Biger', 'Bigger'],
        correctAnswer: 1,
        explanation: 'Double the "g": Bigger.'
      },
      {
        id: '5-12',
        type: 'quiz',
        title: 'True/False',
        question: 'True or False: We can say "more gooder".',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. Irregular: Better.'
      },
      {
        id: '5-13',
        type: 'quiz',
        title: 'Transformation',
        question: 'Rewrite: "Tom is taller than Jerry." -> "Jerry is not..."',
        options: ['...as short as Tom.', '...as tall as Tom.'],
        correctAnswer: 1,
        explanation: 'Jerry is not as tall as Tom.'
      },
      {
        id: '5-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"This is the ____ pizza I\'ve ever eaten."',
        options: ['best', 'better'],
        correctAnswer: 0
      },
      {
        id: '5-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"Calculus is __________ (complicated) than arithmetic."',
        correctAnswer: 'more complicated'
      },
      {
        id: '5-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"That is the __________ (bad) movie I have ever seen."',
        correctAnswer: 'worst'
      },
      {
        id: '5-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"She is a bit __________ (rich) than her sister."',
        correctAnswer: 'richer'
      },
      {
        id: '5-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'Humans are **taller** now than in the past. Nutrition is **much better**. However, our brains are actually **slightly smaller** than they were 20,000 years ago. Life today is **easier** and **less dangerous** than it was for cavemen, so we don\'t need to be **as aggressive as** our ancestors.',
        question: 'Are humans the same height as in the past?',
        options: ['Yes.', 'No, they are taller.'],
        correctAnswer: 1
      },
      {
        id: '5-19',
        type: 'speaking',
        title: 'Speaking Task',
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
        question: '"If I had wings, I would fly." Do I have wings?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Correct! This is imaginary.'
      },
      {
        id: '6-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"If I became President, I would change the law." Is this likely to happen tomorrow?',
        options: ['Yes', 'No, unlikely.'],
        correctAnswer: 1,
        explanation: 'Correct! We use 2nd conditional for unlikely dreams.'
      },
      {
        id: '6-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        question: 'If I ____ his number, I would call him.',
        options: ['know', 'knew', 'would know'],
        correctAnswer: 1,
        explanation: 'If + Past Simple.'
      },
      {
        id: '6-9',
        type: 'test',
        title: 'Test 2',
        question: 'If she ____ rich, she wouldn\'t work.',
        options: ['is', 'were', 'would be'],
        correctAnswer: 1,
        explanation: 'Subjunctive "were" is preferred.'
      },
      {
        id: '6-10',
        type: 'test',
        title: 'Test 3',
        question: 'We ____ go to the beach if it wasn\'t raining.',
        options: ['will', 'can', 'could'],
        correctAnswer: 2,
        explanation: '"Could" means "would be able to".'
      },
      {
        id: '6-11',
        type: 'quiz',
        title: 'Matching',
        question: 'Complete: "If I were invisible..."',
        options: ['...I would rob a bank.', '...I would help you.'],
        correctAnswer: 0
      },
      {
        id: '6-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is "If I would have money, I would buy a car" correct?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Never put "would" in the If-clause.'
      },
      {
        id: '6-13',
        type: 'quiz',
        title: 'Translation Check',
        question: 'Translate: "Agar mening vaqtim bo‘lsa (hozir), yordam berardim."',
        options: ['If I had time, I would help.', 'If I have time, I will help.'],
        correctAnswer: 0,
        explanation: 'Real conditional uses "will", Unreal (hypothetical) uses "would".'
      },
      {
        id: '6-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"If I ____ a superhero, I would fly."',
        options: ['were', 'am'],
        correctAnswer: 0
      },
      {
        id: '6-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"If I __________ (be) you, I would study harder."',
        correctAnswer: 'were'
      },
      {
        id: '6-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"He __________ (not / be) so tired if he went to bed earlier."',
        correctAnswer: 'wouldn\'t be'
      },
      {
        id: '6-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"If we __________ (live) in London, we would speak better English."',
        correctAnswer: 'lived'
      },
      {
        id: '6-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'Life would be very different if we **didn\'t have** electricity. If the internet **disappeared** tomorrow, most businesses **would stop** working. We **would have** to write letters! If I **had** to live without a phone, I **would feel** lonely. Maybe people **would talk** more if they **weren\'t** looking at screens.',
        question: 'Do we have electricity now?',
        options: ['Yes.', 'No.'],
        correctAnswer: 0
      },
      {
        id: '6-19',
        type: 'speaking',
        title: 'Speaking Task',
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
        question: '"Who called you?"',
        options: ['Asking about the receiver.', 'Asking about the caller.'],
        correctAnswer: 1,
        explanation: 'Correct! "Who" is the subject (the caller).'
      },
      {
        id: '7-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"Who did you call?"',
        options: ['Asking about the receiver.', 'Asking about the caller.'],
        correctAnswer: 0,
        explanation: 'Correct! "You" made the call. We want to know the receiver.'
      },
      {
        id: '7-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        question: 'Who ____ that book?',
        options: ['did write', 'wrote', 'did wrote'],
        correctAnswer: 1,
        explanation: 'Subject question.'
      },
      {
        id: '7-9',
        type: 'test',
        title: 'Test 2',
        question: 'Where ____ live?',
        options: ['do you', 'you', 'you do'],
        correctAnswer: 0,
        explanation: 'Object question needs auxiliary.'
      },
      {
        id: '7-10',
        type: 'test',
        title: 'Test 3',
        question: 'Do you know what time ____?',
        options: ['does the film start', 'the film starts', 'starts the film'],
        correctAnswer: 1,
        explanation: 'Indirect question = statement order.'
      },
      {
        id: '7-11',
        type: 'quiz',
        title: 'Matching',
        question: 'Match meaning: "Who loves Jane?"',
        options: ['Jane loves Tom.', 'Tom loves Jane.'],
        correctAnswer: 1,
        explanation: 'Subject question: Who is the lover?'
      },
      {
        id: '7-12',
        type: 'quiz',
        title: 'Transformation',
        question: 'Indirect form of "Is he married?"',
        options: ['Can you tell me if he is married?', 'Can you tell me if is he married?'],
        correctAnswer: 0
      },
      {
        id: '7-13',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is "Do you know where does he work?" correct?',
        options: ['Yes', 'No, "where he works"'],
        correctAnswer: 1,
        explanation: 'Indirect questions do not use "does".'
      },
      {
        id: '7-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"Who ____ the race?"',
        options: ['won', 'did win'],
        correctAnswer: 0
      },
      {
        id: '7-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"What __________ (happen) yesterday?"',
        correctAnswer: 'happened'
      },
      {
        id: '7-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"Could you tell me how much __________ (cost / this ticket)?"',
        correctAnswer: 'this ticket costs'
      },
      {
        id: '7-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"Who __________ (you / invite) to the party?"',
        correctAnswer: 'did you invite'
      },
      {
        id: '7-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'William James Sidis was a genius. **Who inspired him?** His parents. **What did he study?** Math at Harvard. Later, journalists asked, "**Could you tell us why you left academic life?**" Sidis wanted privacy. He wondered **why people were so interested** in him.',
        question: '"Could you tell us why you left..." is:',
        options: ['Direct question.', 'Indirect question.'],
        correctAnswer: 1
      },
      {
        id: '7-19',
        type: 'speaking',
        title: 'Speaking Task',
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
        question: '"If I miss the bus, I am late for work." (Every day)',
        options: ['Zero Conditional', 'First Conditional'],
        correctAnswer: 0,
        explanation: 'Correct! Routine/Fact = Zero.'
      },
      {
        id: '8-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"If it rains tomorrow, we will stay home."',
        options: ['Zero Conditional', 'First Conditional'],
        correctAnswer: 1,
        explanation: 'Correct! Specific future event = First.'
      },
      {
        id: '8-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        bulletPoints: [
            { lang: 'en', label: 'General Fact?', text: 'YES -> Present + Present (Zero)' },
            { lang: 'en', label: 'Future Possibility?', text: 'YES -> Present + Will (First)' }
        ]
      },
      {
        id: '8-7',
        type: 'concept',
        title: '3 Examples',
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
        question: 'If people eat too much, they ____ fat.',
        options: ['get', 'will get', 'got'],
        correctAnswer: 0,
        explanation: 'General fact -> Zero conditional.'
      },
      {
        id: '8-9',
        type: 'test',
        title: 'Test 2',
        question: 'If I ____ her, I\'ll tell her.',
        options: ['see', 'will see', 'saw'],
        correctAnswer: 0,
        explanation: 'Never use "will" in the If-clause.'
      },
      {
        id: '8-10',
        type: 'test',
        title: 'Test 3',
        question: 'We won\'t win ____ we practice.',
        options: ['if', 'unless', 'when'],
        correctAnswer: 1,
        explanation: '"We won\'t win if we don\'t practice".'
      },
      {
        id: '8-11',
        type: 'quiz',
        title: 'True/False',
        question: 'In First Conditional, we use Future Tense in both parts?',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. If + Present, ... Will.'
      },
      {
        id: '8-12',
        type: 'quiz',
        title: 'Transformation',
        question: '"If you don\'t run, you won\'t catch it." -> Unless...',
        options: ['Unless you run, you won\'t catch it.', 'Unless you don\'t run...'],
        correctAnswer: 0
      },
      {
        id: '8-13',
        type: 'quiz',
        title: 'Matching',
        question: 'Match: "If water reaches 100°C..."',
        options: ['...it boils.', '...it will boil.'],
        correctAnswer: 0,
        explanation: 'Scientific fact = Zero conditional.'
      },
      {
        id: '8-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"If you ____ (drop) glass, it breaks."',
        options: ['drop', 'will drop'],
        correctAnswer: 0
      },
      {
        id: '8-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"If you __________ (need) help, call me."',
        correctAnswer: 'need'
      },
      {
        id: '8-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"Unless we leave now, we __________ (be) late."',
        correctAnswer: 'will be'
      },
      {
        id: '8-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"If he __________ (not / come) soon, we will leave without him."',
        correctAnswer: 'doesn\'t come'
      },
      {
        id: '8-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'Happiness is simple. **If people enjoy their job, they are happier** (Zero). However, **if you change your routine, you will feel** strange (First). Experts say that **unless you sleep enough, you won\'t focus** well.',
        question: '"If you change your routine, you will feel strange." This is:',
        options: ['A likely result in the future.', 'A fact that always happens instantly.'],
        correctAnswer: 0
      },
      {
        id: '8-19',
        type: 'speaking',
        title: 'Speaking Task',
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
        question: '"You should have called me." Did you call me?',
        options: ['Yes', 'No'],
        correctAnswer: 1,
        explanation: 'Correct! I am criticizing you because you didn\'t call.'
      },
      {
        id: '9-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"I shouldn\'t have eaten that cake." How do I feel now?',
        options: ['Happy and full.', 'Sick or guilty.'],
        correctAnswer: 1,
        explanation: 'Correct! I regret eating it.'
      },
      {
        id: '9-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        question: 'The movie was terrible. We ____ gone to see it.',
        options: ['should have', 'shouldn\'t have', 'must have'],
        correctAnswer: 1,
        explanation: 'Regret: It was a mistake to go.'
      },
      {
        id: '9-9',
        type: 'test',
        title: 'Test 2',
        question: 'You ____ invited Tom. He is really fun!',
        options: ['should have', 'shouldn\'t have', 'would have'],
        correctAnswer: 0,
        explanation: 'Criticism: You didn\'t invite him, but it was a good idea.'
      },
      {
        id: '9-10',
        type: 'test',
        title: 'Test 3',
        question: 'I ____ left my phone in the car. It got stolen.',
        options: ['shouldn\'t have', 'should have', 'didn\'t have'],
        correctAnswer: 0,
        explanation: 'Regret about a bad action.'
      },
      {
        id: '9-11',
        type: 'quiz',
        title: 'True/False',
        question: '"Should have" is used to give advice for the future.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. It is for the past.'
      },
      {
        id: '9-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is "You should have go to the doctor" correct?',
        options: ['Yes', 'No, "gone"'],
        correctAnswer: 1,
        explanation: 'V3 required.'
      },
      {
        id: '9-13',
        type: 'quiz',
        title: 'Context Match',
        question: 'You are wet because you forgot your umbrella.',
        options: ['I should have brought my umbrella.', 'I shouldn\'t have brought my umbrella.'],
        correctAnswer: 0
      },
      {
        id: '9-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"He ____ worn sunscreen."',
        options: ['should have', 'shouldn\'t have'],
        correctAnswer: 0
      },
      {
        id: '9-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"I didn\'t study for the test. I __________ (study) more."',
        correctAnswer: 'should have studied'
      },
      {
        id: '9-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"We got lost. We __________ (take) a map."',
        correctAnswer: 'should have taken'
      },
      {
        id: '9-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"My stomach hurts. I __________ (eat) so much chocolate."',
        correctAnswer: 'shouldn\'t have eaten'
      },
      {
        id: '9-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'The \'Love Bug\' virus was a disaster. Millions of people received an email with the subject \'I Love You\'. They opened it, and it destroyed their files. Security experts said people **should have been** more suspicious. They **shouldn\'t have opened** emails from strangers. Companies **should have warned** their employees sooner.',
        question: 'Did people open the email?',
        options: ['Yes.', 'No.'],
        correctAnswer: 0
      },
      {
        id: '9-19',
        type: 'speaking',
        title: 'Speaking Task',
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
    title: '12.1 Reported Speech',
    slides: [
      {
        id: '10-1',
        type: 'intro',
        title: 'Lead-in',
        leadText: 'Tom says "I like pizza." -> Sarah says "Tom said he LIKED pizza."',
        bulletPoints: [
          { lang: 'en', label: 'Context', text: 'Direct: Present tense. Reported: Past tense (Backshift).' }
        ],
        question: 'Why does "like" become "liked"?'
      },
      {
        id: '10-2',
        type: 'concept',
        title: 'Meaning & Definition',
        bulletPoints: [
          { lang: 'en', label: 'Use', text: 'To tell someone what another person said.' },
          { lang: 'en', label: 'Backshift', text: 'Present -> Past. Past -> Past Perfect. Will -> Would.' },
          { lang: 'en', label: 'Say vs Tell', text: '"He SAID..." vs "He TOLD ME..."' },
          { lang: 'uz', label: 'Ma’nosi', text: 'Ko‘chirma gap. Zamon bir qadam ortga suriladi.' },
          { lang: 'ru', label: 'Значение', text: 'Косвенная речь. Сдвиг времен назад.' }
        ]
      },
      {
        id: '10-3',
        type: 'quiz',
        title: 'Concept Check 1',
        question: 'Direct: "I am happy." -> Reported: He said he ____ happy.',
        options: ['is', 'was'],
        correctAnswer: 1,
        explanation: 'Present (am) becomes Past (was).'
      },
      {
        id: '10-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: 'Direct: "I will call you." -> Reported: She said she ____ call me.',
        options: ['will', 'would'],
        correctAnswer: 1,
        explanation: 'Will changes to Would.'
      },
      {
        id: '10-5',
        type: 'quiz',
        title: 'Concept Check 3',
        question: 'He ____ US the news.',
        options: ['said', 'told'],
        correctAnswer: 1,
        explanation: 'We have an object "us", so we must use "told".'
      },
      {
        id: '10-6-a',
        type: 'timeline',
        title: 'The Tense Backshift',
        leadText: 'Shifting one step back in time',
        visualContext: 'Time Shift Mechanism',
        visualData: [
            { label: 'DIRECT', subLabel: 'Present', percentage: 20, type: 'start', color: 'blue' },
            { label: 'BACKSHIFT', subLabel: 'Shift', percentage: 50, type: 'range', color: 'purple' },
            { label: 'REPORTED', subLabel: 'Past', percentage: 80, type: 'end', color: 'green' }
        ]
      },
      {
        id: '10-6-b',
        type: 'concept',
        title: 'Shift Rules',
        bulletPoints: [
            { lang: 'en', label: 'Present Simple', text: '-> Past Simple ("I play" -> "He played")' },
            { lang: 'en', label: 'Past Simple', text: '-> Past Perfect ("I arrived" -> "He had arrived")' },
            { lang: 'en', label: 'Will', text: '-> Would ("I will go" -> "He would go")' }
        ]
      },
      {
        id: '10-7',
        type: 'concept',
        title: '3 Examples',
        bulletPoints: [
            { lang: 'en', label: 'Present to Past', text: '"I WORK here." -> "He said he WORKED there."' },
            { lang: 'en', label: 'Past to Past Perfect', text: '"I ARRIVED." -> "He said he HAD ARRIVED."' },
            { lang: 'en', label: 'Modal Change', text: '"I CAN help." -> "He said he COULD help."' }
        ]
      },
      {
        id: '10-8',
        type: 'test',
        title: 'Test 1',
        question: '"I am leaving." -> She said she ____.',
        options: ['is leaving', 'was leaving', 'had left'],
        correctAnswer: 1,
        explanation: 'Present Cont. -> Past Cont.'
      },
      {
        id: '10-9',
        type: 'test',
        title: 'Test 2',
        question: '"We have finished." -> They told me they ____.',
        options: ['have finished', 'had finished', 'finished'],
        correctAnswer: 1,
        explanation: 'Present Perfect -> Past Perfect.'
      },
      {
        id: '10-10',
        type: 'test',
        title: 'Test 3',
        question: 'He ____ that he was tired.',
        options: ['said', 'told', 'told to'],
        correctAnswer: 0,
        explanation: 'No person object -> Said.'
      },
      {
        id: '10-11',
        type: 'quiz',
        title: 'Word Transformation',
        question: 'Reported form of "here":',
        options: ['here', 'there'],
        correctAnswer: 1
      },
      {
        id: '10-12',
        type: 'quiz',
        title: 'Word Transformation',
        question: 'Reported form of "tomorrow":',
        options: ['yesterday', 'the next day'],
        correctAnswer: 1
      },
      {
        id: '10-13',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is "She said me that she was hungry" correct?',
        options: ['Yes', 'No, "She told me..."'],
        correctAnswer: 1
      },
      {
        id: '10-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"I must go." -> He said he ____ go.',
        options: ['must', 'had to'],
        correctAnswer: 1
      },
      {
        id: '10-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"I like ice cream." -> "Tom said he __________ (like) ice cream."',
        correctAnswer: 'liked'
      },
      {
        id: '10-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"I\'ll help you." -> "She told me she __________ (help) me."',
        correctAnswer: 'would help'
      },
      {
        id: '10-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"I\'ve never been to Paris." -> "He said he __________ (never / be) to Paris."',
        correctAnswer: 'had never been'
      },
      {
        id: '10-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'He told me that he **loved** acting but he **hated** the paparazzi. He said that he **was working** on a new movie then. He mentioned that he **had seen** the script the week before. He promised that he **would give** me an exclusive interview.',
        question: 'What does "He loved acting" mean?',
        options: ['He used to love it.', 'He said, "I love acting."'],
        correctAnswer: 1
      },
      {
        id: '10-19',
        type: 'speaking',
        title: 'Speaking Task',
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
    slides: [
      {
        id: '11-1',
        type: 'intro',
        title: 'Lead-in',
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
        question: 'He asked me where ____.',
        options: ['was I', 'I was'],
        correctAnswer: 1,
        explanation: 'Statement order (Subject first).'
      },
      {
        id: '11-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: '"Where DO you work?" -> He asked where I ____.',
        options: ['did work', 'worked'],
        correctAnswer: 1,
        explanation: 'Remove "do". Change main verb to past.'
      },
      {
        id: '11-5',
        type: 'quiz',
        title: 'Concept Check 3',
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
        bulletPoints: [
            { lang: 'en', label: 'Wh- Question?', text: 'YES -> Keep word. NO -> Add If/Whether.' },
            { lang: 'en', label: 'Action', text: 'Swap Subject/Verb. Backshift Tense. Remove do/did.' }
        ]
      },
      {
        id: '11-7',
        type: 'concept',
        title: '3 Examples',
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
        question: '"Where are you going?" -> He asked where ____.',
        options: ['was I going', 'I was going', 'I am going'],
        correctAnswer: 1,
        explanation: 'Word order change + Tense change.'
      },
      {
        id: '11-9',
        type: 'test',
        title: 'Test 2',
        question: '"Did you see Tom?" -> She asked if I ____ Tom.',
        options: ['saw', 'had seen', 'did see'],
        correctAnswer: 1,
        explanation: 'Past Simple "did see" -> Past Perfect "had seen".'
      },
      {
        id: '11-10',
        type: 'test',
        title: 'Test 3',
        question: '"Can you swim?" -> He asked ____ I could swim.',
        options: ['whether', 'what', 'that'],
        correctAnswer: 0,
        explanation: 'Yes/No question.'
      },
      {
        id: '11-11',
        type: 'quiz',
        title: 'True/False',
        question: 'We use a question mark (?) at the end of a reported question.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. It ends with a full stop.'
      },
      {
        id: '11-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is "She asked me where did I buy my bag" correct?',
        options: ['Yes', 'No, "where I bought"'],
        correctAnswer: 1,
        explanation: 'Delete "did".'
      },
      {
        id: '11-13',
        type: 'quiz',
        title: 'Odd One Out',
        question: 'Select the odd one.',
        options: ['When', 'Why', 'If', 'Who'],
        correctAnswer: 2,
        explanation: 'If is for Yes/No questions, others are Wh- words.'
      },
      {
        id: '11-14',
        type: 'test',
        title: 'Rapid Fire',
        question: '"Have you finished?" -> He asked if I ____.',
        options: ['finished', 'had finished'],
        correctAnswer: 1
      },
      {
        id: '11-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"Where do you work?" -> "He asked where I __________ (work)."',
        correctAnswer: 'worked'
      },
      {
        id: '11-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"Is it raining?" -> "She asked __________ (if/what) it was raining."',
        correctAnswer: 'if'
      },
      {
        id: '11-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"When will you arrive?" -> "They asked when I __________ (arrive)."',
        correctAnswer: 'would arrive'
      },
      {
        id: '11-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'I went for a job interview. First, **he asked me what my name was**. Then, **he asked if I had experience**. He wanted to know **why I had left my last job**. Finally, **he asked whether I could start on Monday**.',
        question: 'The direct question for "what my name was" is:',
        options: ['What was your name?', 'What is your name?'],
        correctAnswer: 1
      },
      {
        id: '11-19',
        type: 'speaking',
        title: 'Speaking Task',
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
    