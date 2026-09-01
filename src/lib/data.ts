// TYPE DEFINITIONS
export type BrowserItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  model?: string; // Sketchfab 3D model
  links?: {
    github?: string;
    live?: string;
    vimeo?: string;
    artstation?: string;
    sketchfab?: string;
  };
  meta: { label: string; value: string }[];
};

export type BrowserCategory = {
  id: string;
  label: string;
  items: BrowserItem[];
};

// ACTUAL DATA
export const projects = [
  {
    imgSrc: "assets/img/portfolio/1_pelli-raw-with-icon.png",
    name: "Pelli",
    description:
      "The yelp-for-hairstylists full stack social app I developed as a solo developer. Uses supabase and MySQL database integration.",
    gitLink: "https://github.com/jjtroiano0272/Pelli",
    appStoreLink: "https://apps.apple.com/us/app/pelli/id6737356623", // optional
    category: "filter-mobile",
  },
  {
    imgSrc: "assets/img/portfolio/2_plusOnBlock.png",
    name: "Plus on Block",
    description:
      "A React native application built with RN Reanimated, Expo, Canvas Charts and Gesture Handling which leverages a fluid number picker for memory-training.",
    gitLink: "https://github.com/jjtroiano0272/Pelli",
    appStoreLink: "", // optional
    category: "filter-mobile",
  },
  {
    imgSrc: "assets/img/portfolio/3_threshold.MP4", // Possibly change this to a video preview or image fallback
    name: "Threshold",
    description: "Unity project developed as a demo.",
    gitLink: "https://github.com/jjtroiano0272/Threshold",
    appStoreLink: "",
    category: "filter-unity",
    isVideo: true,
    videoEmbed: `<iframe src="https://player.vimeo.com/video/1088781918?h=6bb099b046&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?autoplay=1&" width="320" height="180" frameborder="0" allow="autoplay=1; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="threshold clip"></iframe>`,
  },
  {
    imgSrc: "assets/img/previous coding projects images/1_gwordle-light.png",
    name: "Wordle Variant",
    description: "A variant on Wordle.",
    gitLink: "https://gwordle-jjt.netlify.app/",
    appStoreLink: "",
    category: "filter-web",
  },
  {
    imgSrc:
      "assets/img/previous coding projects images/3_studio-mockup-light.png",
    name: "Studio Mockup",
    description: "Site redesign mockup for a tattoo studio.",
    gitLink: "",
    demoLink: "https://studio-mockup.netlify.app/",
    appStoreLink: "",
    category: "filter-web",
  },
  {
    imgSrc: "assets/img/previous coding projects images/4_vidly-app-light.png",
    name: "SaaS - Video rental service",
    description: "Web app for a larger-scale style of business.",
    gitLink: "",
    demoLink: "https://vidly-app.pages.dev/",
    appStoreLink: "",
    category: "filter-web",
  },
  {
    category: "filter-web",
    imgSrc: "assets/img/previous coding projects images/5_quiz.png",
    name: "RESTful API Trivia",
    description:
      "Test your trivia knowledge by pulling random questions from the OpenTrivia API!",
    demoLink: "https://react-trivia-app-jjt.netlify.app/",
  },
  {
    category: "filter-web",
    imgSrc: "assets/img/previous coding projects images/6_tenzies.png",
    name: "Tenzies: The Dice Game",
    description:
      "If you've played Yahtzee, you're already familiar with how to play! Roll dice and choose which to hold on to until they all match.",
    demoLink: "https://react-tenzies-app.netlify.app/",
  },
  {
    category: "filter-web",
    imgSrc: "assets/img/previous coding projects images/7_notes-app.png",
    name: "Notes Markdown Editor",
    description:
      "An in-browser MDE that lets you write and preview text like you can in GitHub documentation.",
    demoLink: "https://react-notes-mde.netlify.app/",
  },
  {
    category: "filter-web",
    imgSrc: "assets/img/previous coding projects images/8_ml-meme-gen.png",
    name: "Machine Learning Meme Generator",
    description:
      "An app for creating your own memes. Bonus: It has a section for Machine-Learning-generated memes.",
    demoLink: "https://react-ml-meme-generator.netlify.app/",
  },
  {
    category: "filter-web",
    imgSrc: "assets/img/previous coding projects images/9_counter.png",
    name: "Simple Counter App",
    description: "The first simple React app I built.",
    demoLink: "https://counter-app.pages.dev/",
  },

  // const portfolioItems = [
  // 	{
  // 		title: "Pelli",
  // 		image: "assets/img/portfolio/1_pelli-raw-with-icon.png",
  // 		description:
  // 			"The yelp-for-hairstylists full stack social app I developed as a solo developer. Uses supabase and MySQL.",
  // 		github: "https://github.com/jjtroiano0272/Pelli",
  // 		storeLink: "https://apps.apple.com/us/app/pelli/id6737356623",
  // 		filter: "mobile",
  // 		appIcon: "fa-brands fa-app-store-ios fa-6x",
  // 	},
  // 	{
  // 		title: "Plus on Block",
  // 		image: "assets/img/portfolio/2_plusOnBlock.png",
  // 		description:
  // 			"An application built with X and Y and Z. Uses React Native Reanimated.",
  // 		github: "https://github.com/jjtroiano0272/Pelli",
  // 		detailsLink: "#",
  // 		filter: "mobile",
  // 	},
  // 	{
  // 		title: "Threshold",
  // 		image: "assets/img/portfolio/3_threshold.MP4",
  // 		description: "Unity project developed as a demo.",
  // 		github: "https://github.com/jjtroiano0272/Threshold",
  // 		filter: "unity",
  // 		video: `<iframe src="https://player.vimeo.com/video/1088781918?h=6bb099b046&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?autoplay=1&"
  //       width="320" height="180" frameborder="0" allow="autoplay=1; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
  //       title="threshold clip"></iframe>`,
  // 	},
  // ];
];

export const categories: BrowserCategory[] = [
  {
    id: "mobile",
    label: "Mobile",
    items: [
      {
        id: "pelli",
        title: "Pelli",
        description:
          "The yelp-for-hairstylists full stack social app I developed as a solo developer. Uses supabase and MySQL database integration.",
        image: "/images/pelli-raw-with-icon_828x1792.png",
        links: {
          github: "https://github.com/jjtroiano0272/pelli",
          // live: "https://pelli.app",
          vimeo: "https://vimeo.com/54321",
          artstation: "https://artstation.com/jjtroiano0272",
        },

        // TODO: Is this property used for function?
        meta: [
          { label: "Format", value: "RAW + JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "48.2 MB" },
        ],
      },
      {
        id: "plus-on-block",
        title: "Plus on Block",
        description:
          "A React native application built with RN Reanimated, Expo, Canvas Charts and Gesture Handling which leverages a fluid number picker for memory-training.",
        image: "/images/plusOnBlock_1283x1361.png",
        links: {
          github: "https://github.com/jjtroiano0272/PlusOnBlockThree",
        },
        meta: [
          { label: "Format", value: "RAW + JPEG" },
          { label: "Resolution", value: "5472 × 3648" },
          { label: "Size", value: "41.7 MB" },
        ],
      },
    ],
  },
  {
    id: "three-d",
    label: "3D",
    items: [
      {
        id: "threshold",
        title: "Threshold",
        description: "Unity project developed as a demo.",
        video:
          "https://player.vimeo.com/video/1088781918?h=6bb099b046&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        links: {
          github: "https://github.com/jjtroiano0272/Threshold",
          vimeo: "https://vimeo.com/1088781918",
        },
        meta: [
          { label: "Format", value: "TIFF" },
          { label: "Resolution", value: "7360 × 4912" },
          { label: "Size", value: "112 MB" },
        ],
      },
      {
        id: "cel-shaded-character",
        title: "Cel Character",
        description: "Created in Blender",
        video:
          "https://player.vimeo.com/video/1193356657?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        links: {
          vimeo: "https://vimeo.com/1193356657",
          // TODO: Add to AS and build that up
          artstation: "",
        },
        meta: [
          { label: "Format", value: "TIFF" },
          { label: "Resolution", value: "6720 × 4480" },
          { label: "Size", value: "98.4 MB" },
        ],
      },
      // NOTE: THIS IS JUST TO TEST FOR ADDING SKETCHFAB MODEL EMBED
      {
        id: "test-sketchfab-model",
        title: "Sketchfab Test",
        description: "Sketchfab",
        model:
          "https://sketchfab.com/models/14043b88e1584edbaec2361c11d8e10c/embed",

        links: {
          // vimeo: "https://vimeo.com/1193356657",
          // TODO: Add to AS and build that up
          artstation: "",
          sketchfab:
            "https://sketchfab.com/models/14043b88e1584edbaec2361c11d8e10c",
        },
        meta: [
          { label: "Format", value: "TIFF" },
          { label: "Resolution", value: "6720 × 4480" },
          { label: "Size", value: "98.4 MB" },
        ],
      },
      // Simple architecture
      // {
      //   id: "nurbli",
      //   title: "Nurbli",
      //   description: "Sketchfab",
      //   model:
      //     "https://sketchfab.com/models/8a6ed5faf9164503abfbab5ed354816a/embed",

      //   links: {
      //     // vimeo: "https://vimeo.com/1193356657",
      //     // TODO: Add to AS and build that up
      //     artstation: "",
      //     sketchfab:
      //       "https://sketchfab.com/models/8a6ed5faf9164503abfbab5ed354816a",
      //   },
      //   meta: [
      //     { label: "Format", value: "TIFF" },
      //     { label: "Resolution", value: "6720 × 4480" },
      //     { label: "Size", value: "98.4 MB" },
      //   ],
      // },
      {
        id: "nurbli",
        title: "Nurbli",
        description:
          "A practice in hard-surface modeling and texturing in Blender.",
        model:
          "https://sketchfab.com/models/9b800aa9e1694bf8a6b13d66a12c9c68/embed",

        links: {
          // vimeo: "https://vimeo.com/1193356657",
          // TODO: Add to AS and build that up
          artstation: "",
          sketchfab:
            "https://sketchfab.com/models/9b800aa9e1694bf8a6b13d66a12c9c68",
        },
        meta: [
          { label: "Format", value: "TIFF" },
          { label: "Resolution", value: "6720 × 4480" },
          { label: "Size", value: "98.4 MB" },
        ],
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    items: [
      {
        id: "gwordle",
        title: "Gwordle",
        description: "A variant on the classic Wordle game.",
        image: "/images/1_gwordle-light_640x640.png",
        links: {
          live: "https://gwordle-jjt.netlify.app/",
          github: "https://github.com/jjtroiano0272/react-wordle-clone",
        },
        meta: [
          { label: "Format", value: "RAW" },
          { label: "Resolution", value: "8256 × 5504" },
          { label: "Size", value: "62.9 MB" },
        ],
      },
      {
        id: "studio-mockup",
        title: "Studio Mockup",
        description: "Site redesign mockup for a tattoo studio.",
        image: "/images/3_studio-mockup-light_640x640.png",
        links: {
          live: "https://studio-mockup.netlify.app/",
          github: "https://github.com/jjtroiano0272/mockup_tattoo-studio",
        },
        meta: [
          { label: "Format", value: "JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "18.3 MB" },
        ],
      },
      {
        id: "vidly",
        title: "SaaS - Video rental service",
        description: "Web app for a larger-scale style of business.",
        image: "/images/4_vidly-app-light_640x640.png",
        links: {
          live: "https://vidly-app.pages.dev/",
          github: "https://github.com/jjtroiano0272/Vidly-http-app",
        },
        meta: [
          { label: "Format", value: "JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "18.3 MB" },
        ],
      },
      {
        id: "trivia",
        title: "RESTful API Trivia",
        description:
          "Test your trivia knowledge by pulling random questions from the OpenTrivia API!",
        image: "/images/5_quiz_640x640.png",
        links: {
          live: "https://react-trivia-app-jjt.netlify.app/",
          github: "https://github.com/jjtroiano0272/react-quiz-app",
        },
        meta: [
          { label: "Format", value: "JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "18.3 MB" },
        ],
      },
      {
        id: "tenzies",
        title: "Tenzies: The Dice Game",
        description:
          "If you've played Yahtzee, you're already familiar with how to play! Roll dice and choose which to hold on to until they all match.",
        image: "/images/6_tenzies_412x628.png",
        links: {
          live: "https://react-tenzies-app.netlify.app/",
          github: "https://github.com/jjtroiano0272/react-tenzies",
        },
        meta: [
          { label: "Format", value: "JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "18.3 MB" },
        ],
      },
      {
        id: "notes-app",
        title: "Notes Markdown Editor",
        description:
          "An in-browser MDE that lets you write and preview text like you can in GitHub documentation.",
        image: "/images/7_notes-app_640x640.png",
        links: {
          live: "https://react-notes-mde.netlify.app/",
          github: "https://github.com/jjtroiano0272/react-notes",
        },
        meta: [
          { label: "Format", value: "JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "18.3 MB" },
        ],
      },
      {
        id: "meme-gen",
        title: "Machine Learning Meme Generator",
        description:
          "An app for creating your own memes. Bonus: It has a section for Machine-Learning-generated memes.",
        image: "/images/8_ml-meme-gen_640x640.png",
        links: {
          live: "https://react-ml-meme-generator.netlify.app/",
          github: "https://github.com/jjtroiano0272/meme-generator",
        },
        meta: [
          { label: "Format", value: "JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "18.3 MB" },
        ],
      },
      {
        id: "counter-app",
        title: "Simple Counter App",
        description: "The first simple React app I built.",
        image: "/images/9_counter_640x640.png",
        links: {
          live: "https://counter-app.pages.dev/",
          github: "https://github.com/jjtroiano0272/Counter-app",
        },
        meta: [
          { label: "Format", value: "JPEG" },
          { label: "Resolution", value: "6000 × 4000" },
          { label: "Size", value: "18.3 MB" },
        ],
      },
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/jjtroiano0272",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jonathan-troiano/",
    icon: "FaLinkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jjtroiano0272",
    icon: "FaTwitter",
  },
  {
    name: "ArtStation",
    url: "https://www.artstation.com/jtroiano",
    icon: "FaArtstation",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - 2026",
    description: [
      "Delivered a production-ready iOS release “Pelli” using React Native, designed for hairstylists to share client treatment insights by working closely with a professional stylist to define features and UX priorities.",
      "Led full-stack development, rapidly prototyping with Expo and migrating from Firebase to Supabase to support structured data and use scalable backend architecture as the app evolved.",
    ],
    technologies: [
      "Expo",
      "TypeScript",
      "React Native",
      "PostgresSQL",
      "Supabase",
    ],
  },
  {
    role: "Software Enginner",
    company: "Aquatik",
    period: "2022",
    description: [
      "Spearheaded modernization efforts of legacy PHP/WordPress infrastructure, contributing to a reimagined, responsive website experience.",
      "Introduced and began implementing React.js components to transition the frontend toward a more dynamic, component-based architecture.",
      "Collaborated with internal teams to align UI/UX enhancements with business goals and modern design trends.",
      "Contributed to early-stage planning and prototyping for migration from on-premises servers to a more scalable and maintainable platform.",
    ],
    technologies: ["React", "Wordpress", "PHP"],
  },
  {
    role: "Software Engineer",
    company: "Inceptus Cybersecurity",
    period: "2022",
    description: [
      "Designed and developed a centralized vendor dashboard to unify data across multiple cybersecurity sub-vendors, enhancing internal visibility and partner integration.",
      "Operated in a fast-paced startup environment, rapidly learning and applying emerging technologies to meet evolving project needs.",
      "Acted as a key contributor to backend and frontend workflows, with a focus on data pipeline visualization and UX clarity.",
      "Maintained close collaboration with the founding team, offering technical insights on scalability and maintainability in early product development cycles.",
    ],
    technologies: ["React", "Internal Dashboards"],
  },
  /* 
    21st Century Technology
    IT Technician
    Estero, FL

    In this role I worked as one half of a two-man team in which I scheduled appointments with clients to troubleshoot computer issues, everything from help in using an unfamiliar program to Operating System installations, data recovery, use lessons, to installing a home doorbell & camera system. Appointments with clients were solo one-on-one jobs, interpreting a layperson's distress into actionable IT solutions. I was laid off from this position due to the start of the COVID-19 pandemic whhen work dried up.


    Gartner, Inc
    Master Data Management Intern
    Stamford, CT
    During the summer of 2019 (May to August) I worked at the Gartner Headquarters in Stamford, CT 30 minutes from New York City. Here I worked as part of a team where we managed database connections and curated the data that we would query from multiple sources, creating health checks on our data. Here I developed an automated process for querying databases and summarizing that data output as a mass email to the other members of our department providing them a snapshot of how the accounts we manage were performing and which accounts (out of more than 750,000 managed accounts) may have needed further attention (e.g. if account details were only partially filled in or had duplicate entries). We used this data as a basis for creating a browser-accessible report (dashboard) in Microsoft Power BI.


    Florida Gulf Coast University
    Camp Counselor
    Estero, FL
    I worked as both a tutor & Learning Assistant for other students during the semester and a camp counselor during the summer at FGCU. As an LA I assisted students with comprehending course material in real-time, grading assignments for classes with 30-50 students. Courses included: Introduction to Computer Science & Introduction to Programming. During the summer of 2017 I worked as a camp counselor for the Coding Academy, STEM Academy, and Mathletes camps.
  */
];

export const certifications = [
  {
    name: "Amazon Web Services Certified Cloud Practitioner",
    description:
      "This credential helps organizations identify and  develop talent with critical knowledge related to implementing cloud intiatives. Earning AWS Certified Cloud Practitioner validates cloud fluency and foundational AWS knowledge.",
    icon: "/images/aws-cert.png",
  },
  {
    name: "Oracle Java SE 8 Programmer I (1Z0-808)",
    description:
      "Demonstrates: Java basics, working with data types, using operators and decision constructs, creating and using arrays, using loop constructs, working with methods, encapsulation & inheritance, handling exceptions and working with the Java APl.",
    icon: "/images/oracle-cert.png",
  },
];

// const DEFAULT_ITEMS: CarouselItem[] = [
//   {
//     id: 1,
//     category: "3D",
//     icon: '<FiBox className="h-4 w-4 text-white" />',
//     subItems: [
//       {
//         label: "Blender",
//         icon: <SiBlender className="h-4 w-4 text-[#E87D0D]" />,
//       },
//       // No official Substance Painter mark in any checked icon set — generic stand-in.
//       {
//         label: "Substance Painter",
//         icon: <TbPaint className="h-4 w-4 text-[#71717A]" />,
//       },
//     ],
//   },
//   {
//     id: 2,
//     category: "Programming Languages",
//     icon: <FiCode className="h-4 w-4 text-white" />,
//     subItems: [
//       {
//         label: "C#",
//         icon: <TbBrandCSharp className="h-4 w-4 text-[#239120]" />,
//       },
//       {
//         label: "C++",
//         icon: <SiCplusplus className="h-4 w-4 text-[#00599C]" />,
//       },
//       { label: "PHP", icon: <SiPhp className="h-4 w-4 text-[#777BB4]" /> },
//       // Simple Icons has no separate "Java" mark — OpenJDK's is the closest fit,
//       // and its official color happens to be black.
//       { label: "Java", icon: <SiOpenjdk className="h-4 w-4 text-[#000000]" /> },
//       {
//         label: "Javascript",
//         icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />,
//       },
//       {
//         label: "Typescript",
//         icon: <SiTypescript className="h-4 w-4 text-[#3178C6]" />,
//       },
//       { label: "R", icon: <SiR className="h-4 w-4 text-[#276DC3]" /> },
//       {
//         label: "Python",
//         icon: <SiPython className="h-4 w-4 text-[#3776AB]" />,
//       },
//     ],
//   },
//   {
//     id: 3,
//     category: "Web Development",
//     icon: <FiGlobe className="h-4 w-4 text-white" />,
//     subItems: [
//       { label: "CSS", icon: <SiCss className="h-4 w-4 text-[#663399]" /> },
//       { label: "HTML", icon: <SiHtml5 className="h-4 w-4 text-[#E34F26]" /> },
//       // No dedicated "REST API" logo exists — generic stand-in.
//       {
//         label: "REST APIs",
//         icon: <TbApi className="h-4 w-4 text-[#71717A]" />,
//       },
//       {
//         label: "Bootstrap",
//         icon: <SiBootstrap className="h-4 w-4 text-[#7952B3]" />,
//       },
//       {
//         label: "Node.js",
//         icon: <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />,
//       },
//       // "Responsive WebDev" isn't a product/brand — generic stand-in.
//       {
//         label: "Responsive WebDev",
//         icon: <TbResize className="h-4 w-4 text-[#71717A]" />,
//       },
//       // Three.js's official mark is black.
//       {
//         label: "Three.js",
//         icon: <SiThreedotjs className="h-4 w-4 text-[#000000]" />,
//       },
//       { label: "React", icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
//       {
//         label: "Material UI Design",
//         icon: <SiMui className="h-4 w-4 text-[#007FFF]" />,
//       },
//     ],
//   },
//   {
//     id: 4,
//     category: "Mobile Development",
//     icon: <FiSmartphone className="h-4 w-4 text-white" />,
//     subItems: [
//       // Shares React's mark, same as your source data did.
//       {
//         label: "React Native",
//         icon: <SiReact className="h-4 w-4 text-[#61DAFB]" />,
//       },
//       // No dedicated Reanimated logo — generic stand-in.
//       {
//         label: "React Native Reanimated",
//         icon: <FiActivity className="h-4 w-4 text-[#71717A]" />,
//       },
//       { label: "Expo", icon: <SiExpo className="h-4 w-4 text-[#1C2024]" /> },
//       { label: "Xcode", icon: <SiXcode className="h-4 w-4 text-[#147EFB]" /> },
//     ],
//   },
//   {
//     id: 5,
//     category: "Databases",
//     icon: <FiDatabase className="h-4 w-4 text-white" />,
//     subItems: [
//       { label: "MySQL", icon: <SiMysql className="h-4 w-4 text-[#4479A1]" /> },
//       {
//         label: "Postgres",
//         icon: <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
//       },
//       {
//         label: "Firebase",
//         icon: <SiFirebase className="h-4 w-4 text-[#DD2C00]" />,
//       },
//       {
//         label: "Supabase",
//         icon: <SiSupabase className="h-4 w-4 text-[#3FCF8E]" />,
//       },
//       {
//         label: "MongoDB",
//         icon: <SiMongodb className="h-4 w-4 text-[#47A248]" />,
//       },
//       // Your source tagged this "dbms" even though it sat in the Programming
//       // section — kept it grouped by its actual category field. No dedicated
//       // Power Query logo — generic stand-in.
//       {
//         label: "M Power Query",
//         icon: <TbTable className="h-4 w-4 text-[#71717A]" />,
//       },
//     ],
//   },
//   {
//     id: 6,
//     category: "Business Analytics",
//     icon: <FiTrendingUp className="h-4 w-4 text-white" />,
//     subItems: [
//       // No Power BI logo in react-icons — using its well-known brand yellow
//       // on a generic chart icon instead.
//       {
//         label: "Microsoft Power BI",
//         icon: <FiPieChart className="h-4 w-4 text-[#F2C811]" />,
//       },
//       // No TOAD logo exists — generic stand-in.
//       {
//         label: "TOAD Data Point",
//         icon: <TbDatabaseSearch className="h-4 w-4 text-[#71717A]" />,
//       },
//     ],
//   },
//   {
//     id: 7,
//     category: "Game Development",
//     icon: <GiGamepad className="h-4 w-4 text-white" />,
//     subItems: [
//       // Unity's official mark is white — invisible on light backgrounds.
//       { label: "Unity", icon: <SiUnity className="h-4 w-4 text-[#FFFFFF]" /> },
//     ],
//   },
//   {
//     id: 8,
//     category: "OS & Shell",
//     icon: <FiTerminal className="h-4 w-4 text-white" />,
//     subItems: [
//       { label: "Bash", icon: <SiGnubash className="h-4 w-4 text-[#4EAA25]" /> },
//       { label: "Linux", icon: <SiLinux className="h-4 w-4 text-[#FCC624]" /> },
//       {
//         label: "Ubuntu",
//         icon: <SiUbuntu className="h-4 w-4 text-[#E95420]" />,
//       },
//       {
//         label: "Windows",
//         icon: <TbBrandWindows className="h-4 w-4 text-[#0078D4]" />,
//       },
//       // Apple's official mark is black too.
//       { label: "Mac", icon: <SiApple className="h-4 w-4 text-[#000000]" /> },
//     ],
//   },
// ];
