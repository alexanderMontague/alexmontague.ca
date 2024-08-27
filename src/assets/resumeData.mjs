const resumeLink =
  "https://drive.google.com/open?id=1V4JzX-GK8upqpSdcKO8DLT38PV5Yt6Q0";
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3010"
    : "https://www.alexmontague.ca";
const publicAssetPath = "public/images/portfolio";

export default {
  main: {
    name: "Alex Montague",
    occupation: "Senior Software Engineer",
    description: "I am always looking for ",
    description2: ". If you'd like to chat, drop me a line!",
    image: "profilepic.jpg",
    bio: "I'm currently based in the West End of beautiful Toronto, Ontario, Canada. At Shopify, I'm working on creating wonderful and elegant developer experiences for third party Shopify App Devs. When I'm not programming, I enjoy hiking, portaging, snowboarding, playing hockey, and traveling. I'm most interested in building full stack applications (Remix + TS/Ruby is my goto right now), and enjoy building well crafted experiences that captivate a user.",
    contactmessage: "Drop me a line:",
    email: "me@alexmontague.ca",
    phone: "",
    address: {
      street: "",
      city: "Toronto",
      state: "Ontario",
      zip: "",
    },
    website: "https://www.alexmontague.ca",
    resumedownload: resumeLink,
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/alex-montague/",
        className: "fab fa-linkedin",
      },
      {
        name: "github",
        url: "https://github.com/alexanderMontague",
        className: "fab fa-github",
      },
      {
        name: "stack overflow",
        url: "https://stackoverflow.com/users/4372747/alex-montague",
        className: "fab fa-stack-overflow",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCHhHNZJcWDu5kH3FIPWwHEA",
        className: "fab fa-youtube",
      },
      {
        name: "resume",
        url: resumeLink,
        className: "fas fa-scroll",
      },
    ],
  },
  resume: {
    skillmessage:
      "Some technology I am passionate about, and an overview of my skills",
    education: [
      {
        school: "University of Guelph",
        degree: "Software Engineering",
        graduated: "April 2021",
        description:
          "Graduated with a Bachelor of Computing Degree with Distinction, Majoring in Software Engineering. Maintained a 4.0 GPA in my last 4 years. Participated and led multiple hack-a-thons, Teaching Assistant for CIS*1200, and founded a startup called BookBuy.ca during my tenure at UofG.",
        icon: "guelph",
      },
      // {
      //   school: "Holy Trinity C.S.S",
      //   degree: "O.S.S.D - Ontario Scholar",
      //   graduated: "June 2016",
      //   description:
      //     "Highschool is where I was first introduced to programming and computer science. I started learning the fundamentals using the Turing and Java programming languages. I graduated as an Ontario Scholar and maintained an overall average of 95% in all CIS courses.",
      //   icon: "ht",
      // },
    ],
    work: [
      {
        company: "Shopify",
        title: "Senior Software Engineer",
        years: "May 2021 - Present",
        description:
          "Currently a Senior Software Engineer (L6) at Shopify on the App Inner Loop team. We are building products to enable the next generation of app developers on Shopify. This includes all of the tools, APIs and Web Interfaces a third party developer would need to build a kick-ass app on Shopify. Currently Leading multiple projects inside of our team, including overhauling the ERB Apps Navigation on the Partners Platform, Reactification and extensibility of components on the Partners Platform, enabling Declarative Webhooks via an App's configuration file and many more day to day tasks.",
        icon: "shopify",
      },
      {
        company: "Keys Token",
        title: "Lead Engineer",
        years: "Nov 2021 - Oct. 2022",
        description:
          "Was the first primary Engineer on the Keys Token Engineering team. Helped build out the infrastructure for one of the most disruptive Web3 Luxury and Virtual Real-estate companies in the space today. Built multiple Dapps, Landing Pages, and APIs for Keys Token. Generated $10 Million+ USD from MetaMansions NFT mint event. Keys Token, Meta Mansions, and Project Mercury are all Keys Token products that I have systematically helped engineer and build from the ground up with proprietary Smart Contracts, Authentication systems, and Web2 --> Web3 solutions.",
        icon: "keys",
      },
      {
        company: "Shopify",
        title: "Web Developer (Internship)",
        years: "May 2020 - August 2020",
        description:
          "Shopify lets entrepreneurs create an ecommerce website that helps find customers, drive sales, and manage your day-to-day. I joined the App Management team where I was working as a Web Developer, working with React & Typescript, as well as Ruby + Rails. We were responsible for making sure Partners (app developers or creators) had the smoothest experience possible with Shopify and our App Ecosystem.",
        icon: "shopify",
      },
      {
        company: "Taplytics",
        title: "Full Stack Developer (Internship)",
        years: "January 2020 - April 2020",
        description:
          "Taplytics provides companies a unique way to improve their marketing techniques. Utilizing A/B testing, Launch Control, and Push Notifications, clients can easily customize and create specific marketing journeys for different types of clients to experience. I am currently working with React/Redux for our web apps, Node/Express for our services, and Mongo, PSQL, Kafka and Redis for our data storage/transportation. Was a part of the delivery team, where I was able to uniquely impact our clients with journey features, end to end testing and new library implementation.",
        icon: "taplytics",
      },
      {
        company: "University of Guelph",
        title: "Teaching Assistant",
        years: "September 2019 - December 2019",
        description:
          "Helped facilitate CIS*1200 under Guelph’s School of Computer Science. Introductory course to computer hardware and software, data organization, problem-solving and programming. Responsibilities included marking of student’s online submissions (written and code assignments), as well as providing extra support during office hours.",
        icon: "guelph",
      },
      {
        company: "League Inc",
        title: "Full Stack Developer (Internship)",
        years: "May 2019 - August 2019",
        description:
          "League is an all digital health and wellness platform specializing in employer benefits. The app gives employees the ability to customize and choose their benefits to their needs, while letting employers easily manage and track their employees benefits, spending, and accounts. League was rated LinkedIn's 4th top startup in Canada, and it was a fantastic experience! I was working as a Full Stack developer writing ReactJS and Redux on the frontend, and Golang on the backend. My cohort of interns wrote a cool article about our time at League, check it out",
        icon: "league",
      },
      {
        company: "Coinsquare",
        title: "Student Web Developer (Internship)",
        years: "May 2018 - December 2019",
        description:
          "Coinsquare is a 21st century financial institution specializing in trading and managing cryptocurrencies. Coinsquare was rated the 2nd most sought after startup in Canada by LinkedIn! I joined the team as a student web developer and have been working on our web application for both the front end and backend teams. As one of Coinsquare's first interns, I had the pleasure of participating and presenting in the first ever Coinsquare hackathon, as well as being able to be a fully functioning and independent developer! This was an absolutely amazing placement and I have learned so much not just about web development, but also about blockchain technology, project management, leadership and communication in an agile team! Check out an article I wrote about my experiences ",
        icon: "coinsquare",
      },
    ],
    techSkills: [
      {
        imageSrc: `public/images/tech/react.png`,
        header: "ReactJS",
        text: "I have been doing a lot of frontend work with the react library, and I absolutely love it! It is so versatile and is my go to for frontend web development. Pairing React with some other very powerful libraries and frameworks that I like (redux, redux sagas, axios, styled components) makes for a super strong frontend stack!",
      },
      {
        imageSrc: `public/images/tech/typescript.png`,
        header: "Typescript",
        text: "I have become very fond of using Typescript in web development, and I love strong typing. I don't think I will be using regular JS anytime soon anymore!",
      },

      {
        imageSrc: `public/images/tech/node.png`,
        header: "NodeJS",
        text: "After recently branching out into backend web development, node, express and knex are some of the tools I am using to build my backend architecture. I enjoy writing Javascript, and this pairs well with a frontend Javascript framework.",
      },
      {
        imageSrc: `public/images/tech/c.png`,
        header: "C",
        text: "The C Programming language is the main language taught at UofG, and probably my strongest language. I liked the low-levelness of this language, and my algorithms and data structures classes all utilized C. Learning this language made me appreciate dynamic languages, but also allowed me to understand how they work behind the scenes.",
      },
      {
        imageSrc: `public/images/tech/golang.png`,
        header: "Golang",
        text: "I am currently also exploring Go development for fast backend services, as well as networking. I like the C feel the language gives, but with modern features and strict typing.",
      },
      {
        imageSrc: `public/images/tech/ruby.png`,
        header: "Ruby",
        text: "I have recently started working in Ruby/Rails, and I am enjoying the scriptyness of it so far!",
      },
      {
        imageSrc: `public/images/tech/mongo.png`,
        header: "MongoDB",
        text: "Document based or non-relational databases are my go to for a quick and easy DB. I love the flexibility they provide and how easy they scale horizontally. I use Mongo for most of my personal projects.",
      },
      {
        imageSrc: `public/images/tech/mysql.png`,
        header: "SQL",
        text: "After learning SQL at school through projects, I was able use these skills at previous co-ops where we utilized MySQL and PostgreSQL. I still have much to learn (and my upcoming database course will help) in terms of relational databases, but I am also exploring the use of heavy queries for data science and data analysis.",
      },
      {
        imageSrc: `public/images/tech/firebase.png`,
        header: "Firebase",
        text: "After exploring the whole firebase ecosystem for a side project, I can say that I really enjoy using it. I utilized almost everything firebase had to offer including its firestore, cloud functions, storage buckets, authentication and hosting. I use firebase to quickly spin up a test DB, or for less extensive native or web apps.",
      },
      {
        imageSrc: `public/images/tech/java.png`,
        header: "Java",
        text: "Java is my favourite OO language and I have been programming with Java since highschool. I made my first graphical application with Java while working at my fist job, check it out below!",
      },
      {
        imageSrc: `public/images/tech/python.png`,
        header: "Python",
        text: "Python is something I am still exploring/learning, but I am very interested in it as I would like to explore AI/Machine learning in the future. Not to mention no more curly braces and semicolons :)",
      },
    ],
    barSkills: [
      {
        name: "ReactJS/Typescript/Redux",
        level: "95%",
      },
      {
        name: "Git",
        level: "80%",
      },
      {
        name: "NodeJS/Koa/Express",
        level: "85%",
      },
      {
        name: "Databases/SQL",
        level: "75%",
      },
      {
        name: "HTML5/CSS3",
        level: "95%",
      },
      {
        name: "Data Structures / Algorithms",
        level: "70%",
      },
      {
        name: "Agile Methodologies",
        level: "85%",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: "Meta Mansions",
        description:
          "Luxury NFT collection of 8,888 unique digital mansions built on Ethereum. Marketing landing page and Web3 Mint Page supporting over 10k concurrent requests. Raised $10.8 Million USD on Mint. Built with vanilla HTML, SCSS, and TS to keep things lightweight. Check out the <a href='https://opensea.io/collection/metamansionsbykeys' target='_blank'>Opensea page</a> for more info! ",
        asset: `${baseURL}/${publicAssetPath}/metamansions.mov`,
        links: {
          github: "https://github.com/Keys-Token",
          hosted: "https://www.metamansionsbykeys.com",
        },
        tech: ["typescript", "scss", "node", "psql"],
      },
      {
        title: "Keys Token",
        description:
          "The hub for Keys Token. Includes marketing landing pages, active analytics and email captures, client to server encryption for public routes, and a Web3 Keys Dashboard that a user authenticates with their wallet to see statistics and metrics based on their personal holdings.",
        asset: `${baseURL}/${publicAssetPath}/keystoken.io.mov`,
        links: {
          github: "https://github.com/Keys-Token",
          hosted: "https://www.keystoken.io",
        },
        tech: ["typescript", "react", "redux", "node", "psql", "nginx"],
      },
      {
        title: "Cryptowatch",
        description:
          "An all in one web application to track and manage your crypto assets. No real money needed, just select the coin, the amount, and date bought and it will do the rest for you. This has been my first real web app that is constantly being developed.",
        asset: `${baseURL}/${publicAssetPath}/cryptoWatch.png`,
        links: {
          github: "https://github.com/alexanderMontague/CryptoWatch",
          hosted: "https://cryptowatch.web.app/",
        },
        tech: ["react", "redux", "node", "mongo"],
      },
      {
        title: "Book Buy",
        description:
          "Book Buy offers students a simple way of finding, buying and selling their textbooks. Book Buy instantly connects buyers and sellers for used textbooks that help students save money, time and effort. Created with a partner at The University of Guelph.",
        asset: `${baseURL}/${publicAssetPath}/BookBuyLanding.png`,
        links: {
          github: "https://github.com/alexanderMontague/BookBuy",
          hosted: "https://www.bookbuy.ca/",
        },
        tech: ["react", "javascript", "firebase"],
      },
      {
        title: "api.alexmontague.ca",
        description:
          "My personal server hosted on a raspberry pi that I use for alexmontague.ca. Try pinging <code><a href='https://api.alexmontague.ca/resume' target='_blank'>api.alexmontague.ca/resume</a></code> for a JSON representation of my resume! Written using Golang and configured using nginx. I used this as an opportunity to learn more about Go and Networking!",
        asset: `${baseURL}/${publicAssetPath}/pi_server.png`,
        links: {
          github: "https://github.com/alexanderMontague/am.ca-server",
          hosted: "https://api.alexmontague.ca",
        },
        tech: ["golang", "nginx", "pi"],
      },
      // {
      //   title: "BubbleT",
      //   description:
      //     "BubbleT is an app that collects and displays salary records from Canada's public sector high earners. BubbleT was a team project for System Analysis and Design in Applications (CIS*3750, Winter 2019).",
      //   asset: `${baseURL}/${publicAssetPath}/bubbleT.png`,
      //   links: {
      //     github: "https://github.com/alexanderMontague/bubbleT",
      //   },
      //   tech: ["javascript", "node"],
      // },
      // {
      //   title: "Coinsquare Dashboard",
      //   description:
      //     "Dashboard application that was built in 4 hours for Coinsquare's first ever internal Hackathon. This dashboard allowed for constant monitoring of coinsquare's status, jira board, and Github PR data in a visualized way.",
      //   asset: `${baseURL}/${publicAssetPath}/CSDashboard.png`,
      //   links: {
      //     github: "https://github.com/alexanderMontague/coinsquare-dashboard",
      //     hosted: "https://alexandermontague.github.io/coinsquare-dashboard/",
      //   },
      //   tech: ["react"],
      // },
      // {
      //   title: "Awesome Ancestors",
      //   description:
      //     "This program utilizes the GEDCOM file format (file format that reflects and displays ancestral data in a specific way. Used in sites like Ancestory.com), and was created for my 'Angel of Death' course. The program's main purpose is to read in a GEDCOM file, parse all information from the file, and manipulate the data to your liking. The program can create and edit new GEDCOM files, or modify existing files. The web client gives the user an interface to interact with and view the GEDCOM files.",
      //   asset: `${baseURL}/${publicAssetPath}/awesomeAncestors.gif`,
      //   links: {
      //     github: "https://github.com/alexanderMontague/Awesome-Ancestors",
      //   },
      //   tech: ["c", "javascript", "mysql"],
      // },
      {
        title: "Greens Tracker",
        description:
          "This Java application was created to record and display data recorded during a hand watering shift at my previous Golf Course. This information was usually kept on paper and was an overall inefficient process I wanted to make better.",
        asset: `${baseURL}/${publicAssetPath}/greensTracker.gif`,
        links: {
          github: "https://github.com/alexanderMontague/GreensTracker",
        },
        tech: ["java"],
      },
    ],
  },
  testimonials: {
    testimonials: [
      {
        text: "'One of the best programming skills you can have is knowing when to walk away for awhile.' - Oscar Godson.",
        user: "I love to program, but love interacting even more. I am ready to work on new and exciting things, with new and exciting people!",
      },
    ],
  },
};
