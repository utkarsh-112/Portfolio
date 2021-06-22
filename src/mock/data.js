import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Utkarsh | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Utkarsh',
  subtitle: 'I am the developer you need',
  cta: 'More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a student of AMITY UNIVERSITY GURUGRAM currently pursuing Btech CSE. ',
  paragraphTwo: 'I love programming and learning new programming language especially making interesting projects with them. ',
  paragraphThree: 'I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem.',
  resume: 'https://www.canva.com/design/DAEcx3NDJKw/KsOZQ7EVv2vUMNW2QrTDiA/view?utm_content=DAEcx3NDJKw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Background Generator',
    info: 'This is a website to create your desired gradients or color styles which you require to make your website more attractive. You can choose and copy the color codes in RGB if you like any of the combination.',
    info2: '',
    url: 'https://utkarsh-112.github.io/Background-generator.github.io/',
    repo: 'https://github.com/utkarsh-112/Background-generator.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Robofriends React App',
    info: 'This is a highly interative app that i developed using React which displays different robots with corresponding names and emails',
    info2: '',
    url: 'https://utkarsh-112.github.io/robofriends/',
    repo: 'https://github.com/utkarsh-112/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Smart-Brain-API (Full Stack Face Recognition App)',
    info: 'I made a Face recognition App with node.js, react, postgreSQL and javascript. It has a signin and register form in which you need to register only once and it will remember your credentials so that you can signin next time easily. You have to give an Image URL and it will detect the face automatically and update the times you detect faces in the app in the entry count.',
    info2: '',
    url: 'https://facerecognition-smart-brainapp.herokuapp.com/',
    repo: 'https://github.com/utkarsh-112/Smart-brain-front', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Guess My Number',
    info: 'This is a simple game purely based on HTML5, CSS3 and javascript. A random number is generated each time we play the game and we have to guess the number in the minimum guesses possible to win.',
    info2: '',
    url: 'https://utkarsh-112.github.io/Guess-number-game.github.io/',
    repo: 'https://github.com/utkarsh-112/Guess-number-game.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'Roll the Dice',
    info: 'This is a multiplayer game where two players can play at once. Player has to start the game by clicking on roll dice. First player to reach 100 score wins, but if player draws 1 score resets to zero.',
    info2: '',
    url: 'https://roll-the-dice-javascript-game.netlify.app/',
    repo: 'https://github.com/utkarsh-112/Roll-the-dice-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.jpg',
    title: 'Mapty | Map Your Workouts App',
    info: 'This is an app that uses geolocation API+ Leaflet API to map workouts and pin point them on the map.Just tap on the map where you want to map your workout and start adding workouts !!!! You can even tap on your workouts from the list, and the map will automatically take you exactly where the workout was done !!!!',
    info2: '',
    url: 'https://mapty-map-your-workouts.netlify.app/',
    repo: 'https://github.com/utkarsh-112/Mapty-Mapping_Workouts', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'utkarshkharkwal@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/utkarsh.ksk11/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/utkarsh-112',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
