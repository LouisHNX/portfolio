import type { Localized } from '../lib/i18n.ts'

/**
 * All site content lives in this file.
 * Every piece of text has an `en` and a `fr` value; edit both when you change something.
 * Interface labels (menu, buttons, section titles) are in `dictionaries/en.json` and `fr.json`.
 */

export type Experience = {
  role: Localized
  company: string
  /** Location and contract type, shown after the company name. */
  meta: Localized
  period: Localized
  highlights: Localized<string[]>
  stack: string[]
}

export type Project = {
  name: string
  /** Short label above the title, e.g. "Side project". Optional. */
  kind?: Localized
  description: Localized
  stack: string[]
  /** Public link. Leave out when there is none. */
  link?: { url: string; label: Localized }
}

export type Education = {
  degree: Localized
  school: Localized
  period: string
}

export type SkillGroup = {
  label: Localized
  items: string[]
}

export const site = {
  url: 'https://louisgarrido-xyz-v2.vercel.app',
  name: 'Louis Garrido',
  title: { en: 'Full-Stack Developer', fr: 'Développeur full-stack' } as Localized,
  location: { en: 'Montpellier / Lyon, France', fr: 'Montpellier / Lyon' } as Localized,
  pitch: {
    en: 'I build production web applications in TypeScript, from React front ends to Node.js APIs.',
    fr: 'Je développe des applications web en production avec TypeScript, du front React aux API Node.js.',
  } as Localized,

  contact: {
    email: 'louis.garrido@protonmail.com',
    linkedin: 'https://www.linkedin.com/in/louis-garrido-a514b4183/',
  },

  /** Files in `public/cv/`. Keep the file names when you replace the PDFs. */
  cv: {
    en: '/cv/louis-garrido-cv-en.pdf',
    fr: '/cv/louis-garrido-cv-fr.pdf',
  } as Localized,

  about: {
    en: [
      "I'm a full-stack TypeScript developer with four years of experience on production web applications, from React front ends to Node.js APIs. I'm most at home in small teams, working closely with product.",
      'I also build my own apps, from the first idea to deployment. Away from the keyboard, I run trails and ultra-trails, train in Brazilian jiu-jitsu, and spend time in the mountains.',
    ],
    fr: [
      "Développeur full-stack TypeScript, je travaille depuis quatre ans sur des applications web en production, du front React aux API Node.js. J'aime les petites équipes, où l'on avance au plus près du produit.",
      "Je développe aussi mes propres applications, de l'idée au déploiement. En dehors du code : trail et ultra-trail, jiu-jitsu brésilien et montagne.",
    ],
  } as Localized<string[]>,

  experience: [
    {
      role: { en: 'Full-Stack Developer', fr: 'Développeur full-stack' },
      company: 'DreamOn Technologie',
      meta: { en: 'Full-time', fr: 'CDI' },
      period: { en: 'Apr 2025 – Present', fr: "Avr. 2025 – aujourd'hui" },
      highlights: {
        en: [
          'Built and tested features in TypeScript and React for PanicSafe, a SaaS platform for cyber crisis management.',
          'Reviewed features with the product team.',
        ],
        fr: [
          'Développement et tests de fonctionnalités en TypeScript et React pour PanicSafe, une plateforme SaaS de gestion de crise cyber.',
          "Revue des fonctionnalités avec l'équipe produit.",
        ],
      },
      stack: ['TypeScript', 'React'],
    },
    {
      role: { en: 'Full-Stack Developer', fr: 'Développeur full-stack' },
      company: 'Paladin Protocol',
      meta: { en: 'Paris', fr: 'Paris' },
      period: { en: 'Feb 2024 – Dec 2024', fr: 'Févr. 2024 – déc. 2024' },
      highlights: {
        en: [
          'Designed new modules for applications in production.',
          'Built React interfaces and data management tools (SQL, GraphQL).',
          'Diagnosed and fixed production bugs.',
        ],
        fr: [
          'Conception de nouveaux modules pour des applications en production.',
          'Interfaces React et outils de gestion de données (SQL, GraphQL).',
          'Diagnostic et correction de bugs en production.',
        ],
      },
      stack: ['React', 'SQL', 'GraphQL'],
    },
    {
      role: { en: 'Full-Stack Developer', fr: 'Développeur full-stack' },
      company: 'SolidNFT',
      meta: { en: 'Paris', fr: 'Paris' },
      period: { en: 'Sep 2022 – Nov 2023', fr: 'Sept. 2022 – nov. 2023' },
      highlights: {
        en: [
          'Built REST APIs in Node.js/Express and their React interfaces.',
          'Wrote automation scripts in TypeScript and Python.',
          'Deployed and ran applications on Google Cloud.',
        ],
        fr: [
          'API REST en Node.js/Express et interfaces React associées.',
          "Scripts d'automatisation en TypeScript et Python.",
          'Déploiement et exploitation des applications sur Google Cloud.',
        ],
      },
      stack: ['Node.js', 'Express', 'React', 'TypeScript', 'Python', 'Google Cloud'],
    },
    {
      role: { en: 'Web Developer', fr: 'Développeur web' },
      company: 'WebmediaRM',
      meta: {
        en: 'Saint-Chamond · internship, then work-study',
        fr: 'Saint-Chamond · stage puis alternance',
      },
      period: { en: 'Apr 2021 – Sep 2022', fr: 'Avr. 2021 – sept. 2022' },
      highlights: {
        en: ['Client websites on WordPress and PrestaShop, SEO optimization.'],
        fr: ['Sites clients sous WordPress et PrestaShop, optimisation SEO.'],
      },
      stack: ['WordPress', 'PrestaShop', 'SEO'],
    },
  ] satisfies Experience[],

  projects: {
    featured: [
      {
        name: 'Finy',
        kind: { en: 'Side project · in progress', fr: 'Projet personnel · en cours' },
        description: {
          en: "A personal finance app I'm building as a side project, to track spending and transactions, with light and dark mode.",
          fr: 'Une application de finances personnelles que je développe sur mon temps libre, pour suivre ses dépenses et ses transactions, avec mode clair et mode sombre.',
        },
        stack: ['TypeScript', 'React', 'Express', 'Prisma'],
        link: {
          url: 'https://finy-production.up.railway.app/',
          label: { en: 'Live app', fr: "Voir l'application" },
        },
      },
      {
        name: 'Trouve ton pinard',
        kind: { en: "Master's prototype", fr: 'Prototype de master' },
        description: {
          en: "A mobile app that pairs food with local wines. A prototype built during my master's.",
          fr: 'Une application mobile qui accorde les plats avec des vins locaux. Un prototype réalisé pendant mon master.',
        },
        stack: ['React Native'],
      },
      {
        name: 'Daymark',
        kind: { en: 'Formerly DeraOne', fr: 'Anciennement DeraOne' },
        description: {
          en: 'A field-service SaaS to schedule interventions across customer sites, with reports, photos and on-screen signatures. I led its rebrand from DeraOne.',
          fr: "Un SaaS de gestion d'interventions sur sites clients, avec rapports, photos et signature sur écran. J'ai mené son rebranding depuis DeraOne.",
        },
        stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'shadcn/ui', 'Node.js', 'SQL'],
        link: {
          url: 'https://daymark-prod.up.railway.app/',
          label: { en: 'Live app', fr: "Voir l'application" },
        },
      },
    ] satisfies Project[],
    other: [
      {
        name: 'HowFair',
        description: {
          en: "A mobile application to scan products and get an ecological score based on their origin and the customer's location.",
          fr: 'Une application mobile pour scanner des produits et obtenir un score écologique selon leur origine et la localisation du client.',
        },
        stack: ['React Native', 'Expo', 'Symfony'],
        link: { url: 'https://gitlab.com/howfair-project/app', label: { en: 'GitLab', fr: 'GitLab' } },
      },
      {
        name: 'Solid NFT Plugin',
        description: {
          en: 'A React component library made to be installed on partner websites, so their customers can print their NFTs.',
          fr: 'Une bibliothèque de composants React à installer sur les sites partenaires, pour que leurs clients puissent imprimer leurs NFT.',
        },
        stack: ['React', 'Chakra UI', 'Vercel', 'Google Cloud Functions', 'Stripe API'],
      },
    ] satisfies Project[],
  },

  teaching: {
    intro: {
      en: "Alongside my job, I'm interested in teaching web development as an outside instructor. The topics below all come from my experience on production applications.",
      fr: "En parallèle de mon poste, je souhaite intervenir en école ou en organisme de formation pour enseigner le développement web. Les sujets ci-dessous sont tirés de mon expérience sur des applications en production.",
    } as Localized,
    topics: {
      en: [
        'Front-end with React and TypeScript',
        'REST APIs with Node.js and Express',
        'Databases: SQL, Prisma, PostgreSQL',
        'GraphQL',
        'Deployment: Google Cloud, Railway',
        'Git',
        'AI-assisted development: Claude Code, Cursor',
      ],
      fr: [
        'Front-end avec React et TypeScript',
        'API REST avec Node.js et Express',
        'Bases de données : SQL, Prisma, PostgreSQL',
        'GraphQL',
        'Déploiement : Google Cloud, Railway',
        'Git',
        'Développement assisté par IA : Claude Code, Cursor',
      ],
    } as Localized<string[]>,
    cta: {
      en: "Do you run a school or a training program? Let's talk.",
      fr: 'Vous êtes responsable pédagogique ? Écrivez-moi.',
    } as Localized,
  },

  education: [
    {
      degree: {
        en: "Master's in Computer Science & Web Development",
        fr: 'Master Informatique et Développement Web',
      },
      school: {
        en: 'Ynov Campus Montpellier · work-study',
        fr: 'Ynov Campus Montpellier · alternance',
      },
      period: '2022 – 2024',
    },
    {
      degree: {
        en: "Professional Bachelor's in Web Design & Development",
        fr: 'Licence pro Conception et réalisation web',
      },
      school: { en: 'Le Puy-en-Velay · work-study', fr: 'Le Puy-en-Velay · alternance' },
      period: '2021 – 2022',
    },
    {
      degree: { en: 'DUT in Computer Science (2-year degree)', fr: 'DUT Informatique' },
      school: {
        en: 'Université Lyon 1 · Bourg-en-Bresse',
        fr: 'Université Lyon 1 · Bourg-en-Bresse',
      },
      period: '2019 – 2021',
    },
  ] satisfies Education[],

  skills: [
    {
      label: { en: 'Programming', fr: 'Langages' },
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      label: { en: 'Front-end', fr: 'Front-end' },
      items: ['React', 'React Native', 'Vue', 'Tailwind CSS'],
    },
    {
      label: { en: 'Back-end and data', fr: 'Back-end et données' },
      items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Prisma', 'PostgreSQL'],
    },
    {
      label: { en: 'Cloud and tools', fr: 'Cloud et outils' },
      items: ['Google Cloud', 'Railway', 'Git'],
    },
    {
      label: { en: 'AI tools', fr: 'Outils IA' },
      items: ['Claude Code', 'Cursor'],
    },
  ] satisfies SkillGroup[],

  languages: {
    en: ['French (native)', 'English (B2, TOEIC 865/990)', 'Spanish (B1)'],
    fr: ['Français (langue maternelle)', 'Anglais (B2, TOEIC 865/990)', 'Espagnol (B1)'],
  } as Localized<string[]>,
}
