// gitprofile.config.js

const config = {
  github: {
    username: 'PhilomathMac', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['learningapp-data', 'philomathmac', 'flutter-login-screen'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mckenzie-macdonald-2b5843236',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: '',
    phone: '',
    email: '',
  },
  skills: [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Dart',
    'Flutter',
    'Typescript',
    'Xcode',
    'Interface Builder',
    'Version Control',
    'Source Control',
    'Git',
    'GitHub',
    'TDD',
    'Debugging',
    'Unit Testing',
    'CI/CD',
    'NoSQL',
    'SQL',
    'Web Application Development',
    'Mobile Application Development',
    'Concurrent Programming',
    'Trunk-Based Development',
    'Agile Software Development',
  ],
  soft_skills: [
    'Collaboration',
    'Verbal Communication',
    'Written Communication',
    'Organization',
    'Detail oriented',
    'Self-Motivation',
    'Mentoring',
    'Constant improvement',
    'UI & UX Passion',
    'Time management'
  ],
  education: [
    {
      institution: 'Apple',
      degree: 'App Development with Swift Certified User Certificate',
      from: 'June 2022',
      to: 'Aug 2022',
    },
    {
      institution: 'Apple',
      degree: 'App Development with Swift Associate Certificate',
      from: 'Apr 2022',
      to: 'Jul 2022',
    },
    {
      institution: 'University of Phoenix',
      degree: 'Bachelor of Science in Information Technology - Summa Cum Laude',
      from: 'Jul 2020',
      to: 'Apr 2022',
    },
    {
      institution: 'University of Phoenix',
      degree: 'Advanced Software Developer Certificate - Summa Cum Laude',
      from: 'Jul 2020',
      to: 'Apr 2022',
    },
    {
      institution: 'Brigham Young University',
      degree: 'Bachelor of Science in Biological Science Education - Magna Cum Laude',
      from: 'Aug 2010',
      to: 'Apr 2014',
    }
  ],
  work_projects: [
    {
      html_url: 'https://www.approachablegeek.com/work/mapi-fi',
      name: 'Mapi-fi',
      image_url: 'https://approachablegeek.work/mapifi_on_display_a0c37caa3d.png',
      description: 'PDF markup used for wireless network design. Placing objects on document creates a heat map of network quality and allows user to generate a comprehensive report of materials.',
    },
    {
      html_url: 'https://www.approachablegeek.com/work/ezilpro',
      name: 'Ezilpro',
      image_url: 'https://approachablegeek.work/PROJECT_IMAGE_EZILPRO_6e33f4be0d.png',
      description: 'Custom customer relationship management platform with aggregation graphs, calendar, database management, version history, and chat.',
    },
    {
      html_url: 'https://www.approachablegeek.com/work/rids-brother',
      name: 'Rids Brother',
      image_url: 'https://approachablegeek.work/rids_brother_preview3_0be7e2c098.png',
      description: 'Customer relationship management platform and iPhone app to help provide students with disabilities transportation to school. Includes secure real-time tracking of drivers, notifications, and database management.',
    },
    {
      html_url: 'https://www.approachablegeek.com/work/idafan',
      name: 'Idafan',
      image_url: 'https://approachablegeek.work/Idafan_ticket_38bdfe1930.webp',
      description: 'Ticketing platform to help schools create and manage events. Also includes a purchasing system that adds tickets and passes to Apple Wallet.',
    },
    {
      html_url: 'https://www.approachablegeek.com/work/my-book',
      name: 'MyBook',
      image_url: 'https://approachablegeek.work/Project_Thumb_cb2d971b45.png',
      description: 'Mobile application for storing, viewing, and editing sheet music. Includes offline support, Apple Pencil markup, and distraction-free performance mode.',
    },
    {
      html_url: 'https://www.approachablegeek.com/work/penlitics',
      name: 'Penlitics',
      image_url: 'https://approachablegeek.work/penlitics_app_preview_dd911e47ad.png',
      description: 'News app designed to educate users about politics and political bias. Includes polls, quizzes, and bias sorting of news articles.',
    },
    {
      html_url: 'https://www.approachablegeek.com/work/core-anesthesia',
      name: 'Core Anesthesia',
      image_url: 'https://approachablegeek.work/PROJECT_IMAGE_CORE_1207a2fb56.png',
      description: 'Educational platform that offers a curriculum for CRNA\'s and med students. Includes media player, randomized quizzes, tests, and reports of user activity.',
    },
    {
      html_url: 'https://www.approachablegeek.com/work/scout-traks',
      name: 'ScoutTraks',
      image_url: 'https://approachablegeek.work/PROJECT_IMAGE_8a120346e7_5e4b372847.png',
      description: 'Project management software with iPad app to allow foremen to mark-up blueprints as they navigate construction sites without internet.',
    },
  ],
  experiences: [
    {
      company: 'Approachable Geek',
      position: 'Software Engineer II',
      from: 'Jan 2024',
      to: 'Present',
    },
    {
      company: 'Approachable Geek',
      position: 'Software Engineer I',
      from: 'May 2023',
      to: 'Jan 2024',
    },
    {
      company: 'Approachable Geek',
      position: 'Junior Software Developer',
      from: 'Jan 2023',
      to: 'May 2023',
    },
    {
      company: 'Pearl Zanker Elementary',
      position: 'Science Specialist',
      from: 'Aug 2018',
      to: 'Jun 2021',
    },
    {
      company: 'Tyfoom',
      position: 'Content Specialist',
      from: 'Sep 2017',
      to: 'Aug 2018',
    },
    {
      company: 'Canyon View Junior High',
      position: 'Science Teacher',
      from: 'Aug 2014',
      to: 'Sep 2017',
    }
  ],
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
//       'light',
//       'dark',
//       'cupcake',
//       'bumblebee',
//       'emerald',
//       'corporate',
//       'synthwave',
//       'retro',
//       'cyberpunk',
//       'valentine',
//       'halloween',
      'garden',
      'forest',
//       'aqua',
//       'lofi',
//       'pastel',
//       'fantasy',
//       'wireframe',
//       'black',
//       'luxury',
//       'dracula',
//       'cmyk',
//       'autumn',
//       'business',
//       'acid',
//       'lemonade',
//       'night',
//       'coffee',
//       'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#826aed',
      accent: '#c879ff',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem',
    },
  },
};

export default config;
