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
        id: '5-6',
        type: 'concept',
        title: 'Visual Rules',
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
        id: '6-6',
        type: 'concept',
        title: 'Visual Structure',
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
        id: '7-6',
        type: 'concept',
        title: 'Visual Structure',
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
        id: '8-6',
        type: 'concept',
        title: 'Flowchart',
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
  }
];