// gitprofile.config.js

const config = {
  github: {
    username: 'PhilomathMac', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://philomathmac.github.io',
    phone: '',
    email: '',
  },
  skills: [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Java',
    'Python',
    'XCode',
    'Interface Builder',
    'Version Control',
    'Git',
    'GitHub',
    'App Design'
  ],
  education: [
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
      institution: 'Udemy',
      degree: 'The Git & GitHub Bootcamp',
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
      institution: 'Apple',
      degree: 'App Development with Swift Certified User Certificate',
      from: 'June 2022',
      to: 'Aug 2022',
    },
    {
      institution: 'Brigham Young University',
      degree: 'Bachelor of Science in Biological Science Education - Magna Cum Laude',
      from: 'Aug 2010',
      to: 'Apr 2014',
    }
  ],
  experiences: [
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
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
