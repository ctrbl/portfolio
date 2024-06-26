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
import LogoUSF from '/public/images/logos/logo-usf.png';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectEmnet from '/public/images/project-emnet.png';
import ProjectGOGO from '/public/images/project-gogo.png';
import ProjectRebye from '/public/images/project-rebye.png';
import ProjectRemindMe from '/public/images/project-remindme.png';
import ProjectCapitalQuest from 'public/images/capitalquest.gif';

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
    position: 'Software Developer Intern',
    startDate: new Date(2023, 8),
    endDate: new Date(2023, 11),
    // currentlyWorkHere: true,
    summary: [
      'Developed the front end for iOS full and instant apps using <m>SwiftUI</m> and <m>Figma</m> for users to accumulate points and redeem rewards at stores via <m>NFC</m> tags. Utilized <m>HTTP</m>-based backend APIs to fetch and process <m>JSON</m> data.',
      'Improved app response times by <m>40%</m> by incorporating persistent data storage for unique identifiers with <m>Core Data</m>.',
      'Reduced the app size by <m>52%</m> by using design patterns to optimize UI components, assets, and external libraries.',
      'Conducted critical bug analysis by implementing unit testing, resulting in a <m>70%</m> increase in app performance.',
      'Utilized <m>Git</m> for effective version control and coordinated <m>TestFlight</m> deployment for cross-functional collaboration.'
    ],
  },
  {
    logo: LogoUSF,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'USF Logo',
    position: 'Undergraduate Research Assistant',
    startDate: new Date(2022, 12),
    endDate: new Date(2023, 4),
    summary: [
      'Collaborated with a team of 3 to fine-tune <m>GPT-3.5</m> models using <m>OpenAI</m> to generate questions about user dietary intake and create nutrition data visualization dashboards by extracting <m>170,000+</m> entries from the USDA database.',
      'Built a cross-platform application (iOS, Android, web) using <m>Flutter</m> with chatbox and voice-assistant interfaces.',
      'Configured <m>MySQL</m> database server and performed query optimization, enhancing data retrieval efficiency by <m>65%</m>.'
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
      'Stripe',
      'Figma',
    ],
  },
  {
    name: 'GOGO - Your AI Travel Planner',
    description:
      'A cross-platform application that generates personalized travel itineraries based on user\'s budget and preferences.',
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
    name: 'Remind Me',
    description:
      'A Chrome extension that reminds and notifies users to complete tasks on time.',
    url: 'https://devpost.com/software/rem-nd-me',
    previewImage: ProjectRemindMe,
    technologies: [
      'React.js',
      'TypeScript',
      'Material UI',
      'Local Storage',
      'Web Development',
      'Figma',
    ],
  },
  {
    name: 'Capital Quest',
    description:
    "A quiz game web application designed to educate users on finance and credit scores.\nAchieved the 'Prettiest Hack' award at the 2022 TechTogether Hackathon. 🏅",
    url: "https://devpost.com/software/capital-quest",
    previewImage: ProjectCapitalQuest,
    technologies: [
      "Front End Development", "UI/UX",
      "React.js", 
      "JavaScript", 
      "Figma", 
      "Bootstrap", 
      "Material UI"
    ],
  },
];
