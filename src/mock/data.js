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
  paragraphOne: 'I am a self-starter with strong interpersonal skills. ',
  paragraphTwo: 'I work efficiently both as an individual contributor as well as along with a team. ',
  paragraphThree: 'I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
    title: 'Simple responsive website design',
    info: 'I am a big MARVEL fan so i built a MARVEL fan page for everyone where one can register himself/herself and he/she will get updates on the upcoming marvel movies and series',
    info2: '',
    url: 'https://utkarsh-112.github.io/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://github.com/utkarsh-112',
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
