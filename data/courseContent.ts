import { Topic } from '../types';

export const TOPICS: Topic[] = [
  {
    id: 'topic-1',
    title: '6.2 Present Perfect Simple vs. Continuous',
    slides: [
      {
        id: '1-1',
        type: 'intro',
        title: 'Lead-in',
        imageUrl: 'https://picsum.photos/800/600?grayscale',
        leadText: 'Look at the scenarios below.',
        bulletPoints: [
          { lang: 'en', label: 'Scenario A', text: 'The boy has painted the wall. (Finished, he is clean.)' },
          { lang: 'en', label: 'Scenario B', text: 'The boy has been painting the wall. (Half done, paint on clothes.)' }
        ],
        question: 'Which sentence focuses on the result? Which one focuses on the activity?'
      },
      {
        id: '1-2',
        type: 'concept',
        title: 'Meaning & Definition',
        bulletPoints: [
          { lang: 'en', label: 'Present Perfect Continuous', text: 'Focuses on the ACTIVITY. Unfinished or recent. Physical side effects visible.' },
          { lang: 'en', label: 'Present Perfect Simple', text: 'Focuses on the RESULT. Finished action.' },
          { lang: 'uz', label: 'Continuous', text: 'Harakatning o‘ziga yoki uning davomiyligiga urg‘u beradi.' },
          { lang: 'uz', label: 'Simple', text: 'Harakatning natijasiga yoki tugallanganligiga urg‘u beradi.' },
          { lang: 'ru', label: 'Continuous', text: 'Акцент на процессе или длительности действия.' },
          { lang: 'ru', label: 'Simple', text: 'Акцент на результате. Действие завершено.' }
        ]
      },
      {
        id: '1-3',
        type: 'quiz',
        title: 'Concept Check 1',
        question: 'You see your friend. His face is red and he is breathing hard. What do you say?',
        options: ['You have run.', 'You have been running.'],
        correctAnswer: 1,
        explanation: 'Correct! We see evidence of the activity (red face), so we focus on the process.'
      },
      {
        id: '1-4',
        type: 'quiz',
        title: 'Concept Check 2',
        question: 'The plate is empty. The cookies are gone. What happened?',
        options: ['Someone has eaten the cookies.', 'Someone has been eating the cookies.'],
        correctAnswer: 0,
        explanation: 'Correct! The action is finished and the result is "empty plate".'
      },
      {
        id: '1-5',
        type: 'quiz',
        title: 'Concept Check 3',
        question: 'I started reading this book yesterday. I am on page 50 now.',
        options: ['I have read this book.', 'I have been reading this book.'],
        correctAnswer: 1,
        explanation: 'Correct! The action is unfinished.'
      },
      {
        id: '1-6',
        type: 'concept',
        title: 'Timelines and CLINE',
        bulletPoints: [
          { lang: 'en', label: 'Continuous', text: '"I\'ve been working." (Activity key. Duration mentioned.)' },
          { lang: 'en', label: 'Simple', text: '"I\'ve written the report." (Result key. Finished.)' },
          { lang: 'en', label: 'Note', text: 'State verbs (know, like, have) usually take the Simple form.' }
        ]
      },
      {
        id: '1-7',
        type: 'concept',
        title: '3 Examples',
        bulletPoints: [
          { lang: 'en', label: 'Activity vs Result', text: 'She’s been writing emails (Busy) vs She’s written 10 emails (Result).' },
          { lang: 'en', label: 'Evidence', text: 'It’s been raining (Wet ground) vs It has rained (Fact).' },
          { lang: 'en', label: 'Duration vs Completion', text: 'How long have you been learning? vs Have you learnt the list?' }
        ]
      },
      {
        id: '1-8',
        type: 'test',
        title: 'Test 1',
        question: 'Look! The ground is wet. It ______ all night.',
        options: ['has rained', 'has been raining', 'rained'],
        correctAnswer: 1,
        explanation: 'Evidence (wet ground) implies recent continuous activity.'
      },
      {
        id: '1-9',
        type: 'test',
        title: 'Test 2',
        question: 'I ______ three cups of coffee today.',
        options: ['have been drinking', 'have drunk', 'drink'],
        correctAnswer: 1,
        explanation: 'Quantity specified (3 cups) = Simple.'
      },
      {
        id: '1-10',
        type: 'test',
        title: 'Test 3',
        question: 'Sorry I’m late. ______ long?',
        options: ['Have you waited', 'Did you wait', 'Have you been waiting'],
        correctAnswer: 2,
        explanation: 'Focus on duration up to now.'
      },
      {
        id: '1-11',
        type: 'quiz',
        title: 'True/False Quiz',
        question: 'True or False: We use Present Perfect Continuous to talk about *how many* things we have finished.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. We use Simple for quantities.'
      },
      {
        id: '1-12',
        type: 'quiz',
        title: 'Spot the Mistake',
        question: 'Is this correct? "I have been knowing him for 10 years."',
        options: ['Yes', 'No, "know" is a state verb.'],
        correctAnswer: 1,
        explanation: 'Correct. "Know" is a state verb, so "I have known him" is correct.'
      },
      {
        id: '1-13',
        type: 'quiz',
        title: 'Context Match',
        question: 'Your hands are covered in flour.',
        options: ["I've made a cake.", "I've been making a cake."],
        correctAnswer: 1,
        explanation: 'Flour on hands is evidence of the activity.'
      },
      {
        id: '1-14',
        type: 'test',
        title: 'Rapid Fire',
        question: 'Select the one that implies UNFINISHED action.',
        options: ['He has gone to the gym.', 'She has painted the portrait.', 'I\'ve been reading a book.'],
        correctAnswer: 2
      },
      {
        id: '1-15',
        type: 'gap-fill',
        title: 'Gap Fill 1',
        leadText: '"You look tired, Sarah!" "Yes, I __________ (work) in the garden all day."',
        correctAnswer: 'have been working'
      },
      {
        id: '1-16',
        type: 'gap-fill',
        title: 'Gap Fill 2',
        leadText: '"Congratulations! You __________ (win) the competition!"',
        correctAnswer: 'have won'
      },
      {
        id: '1-17',
        type: 'gap-fill',
        title: 'Gap Fill 3',
        leadText: '"Hi Tom. I haven\'t seen you for ages. What __________ (you / do) recently?"',
        correctAnswer: 'have you been doing'
      },
      {
        id: '1-18',
        type: 'reading',
        title: 'Reading Comprehension',
        passage: 'Climate change is a serious issue. Scientists **have been investigating** the causes for decades. They **have found** that global temperatures are rising. The ice in the Arctic **has been melting** steadily. Recently, researchers **have published** a new report stating that we must act now. Many activists **have been protesting** in the streets to demand change.',
        question: 'Why do scientists use "have been investigating"?',
        options: ['Because they finished yesterday.', 'Because it is a long process continuing up to now.'],
        correctAnswer: 1
      },
      {
        id: '1-19',
        type: 'speaking',
        title: 'Speaking Task',
        leadText: 'Record your answer for feedback.',
        speakingPrompts: [
          'What is a hobby you have started recently? How long have you been doing it and how much progress have you made?',
          'Think of a popular TV series. How many episodes have you finished? Have you been binge-watching it?',
          'You look really tired today. What have you been doing recently that made you so exhausted?'
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
        id: '2-6',
        type: 'concept',
        title: 'Timelines (Certainty)',
        bulletPoints: [
          { lang: 'en', label: '0% (Impossible)', text: "CAN'T" },
          { lang: 'en', label: '50% (Possible)', text: 'MIGHT / COULD' },
          { lang: 'en', label: '100% (Certainty)', text: 'MUST' }
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
        id: '3-6',
        type: 'concept',
        title: 'Logic Flowchart',
        leadText: 'Follow the logic steps:',
        bulletPoints: [
            { lang: 'en', label: 'Step 1: Countable?', text: 'No -> Zero Article or The.' },
            { lang: 'en', label: 'Step 2: Singular?', text: 'No -> Zero (General) or The (Specific).' },
            { lang: 'en', label: 'Step 3: Specific?', text: 'Yes -> The. No -> A/An.' }
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
        id: '4-6',
        type: 'concept',
        title: 'Timeline & Rules',
        leadText: 'Action happened regularly in past, not now.',
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
  }
];