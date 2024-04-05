import { Github, Linkedin, CodeIcon } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoTaperk from '/public/images/logos/logo-taperk.png';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectEmnet from '/public/images/project-emnet.png';
import ProjectGOGO from '/public/images/project-gogo.png';
import ProjectRebye from '/public/images/project-rebye.png';
import ProjectRemindMe from '/public/images/project-remindme.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GATECH: 'https://omscs.gatech.edu/',
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ctrbl/',
  },
  {
    icon: Github,
    url: 'https://github.com/ctrbl',
  },
  {
    icon: CodeIcon,
    url: 'https://devpost.com/minhchau-ng1028?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoTaperk,
    logoAlt: 'Taperk Logo',
    position: 'Mobile Developer Intern',
    startDate: new Date(2023, 8),
    endDate: new Date(2023, 11),
    // currentlyWorkHere: true,
    summary: [
      'Developed the front end for an iOS and instant app using Swift that redeems store points and rewards for customers via NFC tags and utilized back-end APIs to fetch and process JSON data.',
      'Reduced the instant app size by 35% by refactoring the codebase and optimizing external libraries and media assets.',
      'Conducted critical bug analysis by implementing manual testing, resulting in a 20% increase in overall performance.',
      'Managed the deployment of the app on TestFlight for organization-wide distribution and comprehensive testing.'
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'USF Logo',
    position: 'Undergraduate Research Assistant',
    startDate: new Date(2022, 12),
    endDate: new Date(2023, 4),
    summary: [
      'Collaborated with a team of 3 to fine-tune GPT-3.5 models using OpenAI API to generate questions about the user’s dietary intake, extract keywords from the dietary conversation, and generate a visualized nutrient intake dashboard.',
      'Developed a cross-platform mobile app using Flutter with a conversational UI and a RESTful server-side API.',
    ],
  }
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'em-net',
    description:
      'An iOS mobile app leveraging Solana blockchain technology to incentivize student engagement at USF campus events, fostering community connections and offering real-world rewards.',
    url: 'https://devpost.com/software/em-sbkiw5',
    previewImage: ProjectEmnet,
    technologies: [
      'Swift',
      'Objective-C',
      'Back-End Development',
      'NLP',
      'DiltilRoberta',
      'Emotion Recognition',
      'Solana',
      'Blockchain',
      'Python',
      'REST API',
      'Flask',
      'SQLAlchemy',
      'CockroachDB',
      'Selenium',
    ],
  },
  {
    name: 'GOGO - Your AI Travel Planner',
    description:
      'A cross-platform mobile app that generates personalized travel itineraries based on user\'s budget and preferences.',
    url: 'https://devpost.com/software/gogo-your-ai-travel-planner',
    previewImage: ProjectGOGO,
    technologies: [
      'OpenAI',
      'Flutter',
      'Dart',
      'Figma',
      'Front-End Development',
      'AWS',
      'Google Cloud Platform',
      'Google Maps API',
      'Postman',
    ],
  },
  {
    name: 'Rebye',
    description:
      'An iOS consumer-to-consumer e-commerce mobile app that allows users to sell and buy items seamlessly.',
    url: 'https://github.com/ctrbl/Rebye-App',
    previewImage: ProjectRebye,
    technologies: [
      'Swift',
      'Objective-C',
      'Full-Stack Development',
      'SQLite',
      'Firebase',
      'Stripe API',
      'Figma',
    ],
  },
  {
    name: 'Remind Me',
    description:
      'A Chrome extension that reminds and notifies users to complete tasks on time.',
    url: 'https://devpost.com/software/rem-nd-me',
    previewImage: ProjectRemindMe,
    technologies: [
      'React.js',
      'TypeScript',
      'Bootstrap',
      'Material UI',
      'Local Storage',
      'Web Development',
      'Figma',
    ],
  },
];
