const resumeLink =
  "https://drive.google.com/open?id=1V4JzX-GK8upqpSdcKO8DLT38PV5Yt6Q0";

export default {
  main: {
    name: "Alex Montague",
    occupation: "Software Engineering Student ",
    description: "I am always looking for ",
    description2:
      ", whether that be open source projects, internships, or new technologies, ",
    image: "profilepic.jpg",
    bio:
      "I am a software engineer. Not only do I like to program, but I am passionate about writing clean, smart, and efficient code! Over my schooling and work terms I have been exposed to many languages and frameworks, but some of my favourites are Javascript, C Go, and Python. I recently started my dive into web development, more specifically using the ReactJS/NodeJS libraries. I hope to explore more full stack opportunities in the future!",
    contactmessage: "Drop me a line:",
    email: "me@alexmontague.ca",
    phone: "",
    address: {
      street: "",
      city: "Toronto",
      state: "Ontario",
      zip: ""
    },
    website: "https://www.alexmontague.ca",
    resumedownload: resumeLink,
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/alex-montague/",
        className: "fab fa-linkedin"
      },
      {
        name: "github",
        url: "https://github.com/alexanderMontague",
        className: "fab fa-github"
      },
      {
        name: "stack overflow",
        url: "https://stackoverflow.com/users/4372747/alex-montague",
        className: "fab fa-stack-overflow"
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCHhHNZJcWDu5kH3FIPWwHEA",
        className: "fab fa-youtube"
      },
      {
        name: "resume",
        url: resumeLink,
        className: "fas fa-scroll"
      }
    ]
  },
  resume: {
    skillmessage:
      "Some technology I am passionate about, and an overview of my skills",
    education: [
      {
        school: "The University of Guelph",
        degree: "Software Engineering",
        graduated: "Exp. April 2021",
        description:
          "Currently in my fourth year studying Software Engineering. Some interesting and favourite courses I have taken so far have been Software Design I - IV, Data Structures, Algorithms, Operating Systems and the infamous 'Angel of Death' (Software Systems and Integrations). Currently on the Dean's List for maintaining an overall average of 80%. I am looking forward to my databases and quantum computing classes.",
        icon: "guelph"
      },
      {
        school: "Holy Trinity C.S.S",
        degree: "O.S.S.D - Ontario Scholar",
        graduated: "June 2016",
        description:
          "Highschool is where I was first introduced to programming and computer science. I started learning the fundamentals using the Turing and Java programming languages. I graduated as an Ontario Scholar and maintained an overall average of 95% in all CIS courses.",
        icon: "ht"
      }
    ],
    work: [
      {
        company: "League",
        title: "Full Stack Developer",
        years: "May 2019 - May 2019",
        description:
          "League is an all digital health and wellness platform specializing in employer benefits. The app gives employees the ability to customize and tailor their benefits exactly how they want to, while letting employers easily manage and track their employees benefits, spending, and accounts. League was rated LinkedIn's 4th top startup in Canada, and I can really see why! I am currently working as a Full Stack developer writing ReactJS and Redux on the frontend, and Go on the backend which is new to me, but I am enjoying. I look forward to what comes in the coming months of this placement!",
        icon: "league"
      },
      {
        company: "Coinsquare",
        title: "Student Web Developer ",
        years: "May 2018 - December 2019",
        description:
          "Coinsquare is a 21st century financial institution specializing in trading and managing cryptocurrencies. Coinsquare was rated the 2nd most sought after startup in Canada by LinkedIn! I joined the team as a student web developer and have been working on our web application for both the front end and backend teams. As one of Coinsquare's first interns, I had the pleasure of participating and presenting in the first ever Coinsquare hackathon, as well as being able to be a fully functioning and independent developer! This was an absolutely amazing placement and I have learned so much not just about web development, but also about blockchain technology, project management, leadership and communication in an agile team! Check out an article I wrote about my experiences ",
        icon: "coinsquare"
      }
    ],
    techSkills: [
      {
        imageSrc: "images/react.png",
        header: "ReactJS",
        text:
          "I have been doing a lot of frontend work with the react library, and I absolutely love it! It is so versatile and is my go to for frontend web development. Pairing React with some other very powerful libraries and frameworks that I like (redux, redux sagas, axios, styled components) makes for a super strong frontend stack!"
      },
      {
        imageSrc: "images/node.png",
        header: "NodeJS",
        text:
          "After recently branching out into backend web development, node, express and knex are some of the tools I am using to build my backend architecture. I enjoy writing Javascript, and this pairs well with a frontend Javascript framework."
      },
      {
        imageSrc: "images/c.png",
        header: "C",
        text:
          "The C Programming language is the main language taught at UofG, and probably my strongest language. I liked the low-levelness of this language, and my algorithms and data structures classes all utilized C. Learning this language made me appreciate dynamic languages, but also allowed me to understand how they work behind the scenes."
      },
      {
        imageSrc: "images/golang.png",
        header: "Golang",
        text:
          "I am currently also exploring Go development for fast backend services, as well as networking. I like the C feel the language gives, but with modern features and strict typing."
      },
      {
        imageSrc: "images/mongo.png",
        header: "MongoDB",
        text:
          "Document based or non-relational databases are my go to for a quick and easy DB. I love the flexibility they provide and how easy they scale horizontally. I use Mongo for most of my personal projects."
      },
      {
        imageSrc: "images/mysql.png",
        header: "SQL",
        text:
          "After learning SQL at school through projects, I was able use these skills at previous co-ops where we utilized MySQL and PostgreSQL. I still have much to learn (and my upcoming database course will help) in terms of relational databases, but I am also exploring the use of heavy queries for data science and data analysis."
      },
      {
        imageSrc: "images/firebase.png",
        header: "Firebase",
        text:
          "After exploring the whole firebase ecosystem for a side project, I can say that I really enjoy using it. I utilized almost everything firebase had to offer including its firestore, cloud functions, storage buckets, authentication and hosting. I use firebase to quickly spin up a test DB, or for less extensive native or web apps."
      },
      {
        imageSrc: "images/java.png",
        header: "Java",
        text:
          "Java is my favourite OO language and I have been programming with Java since highschool. I made my first graphical application with Java while working at my fist job, check it out below!"
      },
      {
        imageSrc: "images/python.png",
        header: "Python",
        text:
          "Python is something I am still exploring/learning, but I am very interested in it as I would like to explore AI/Machine learning in the future. Not to mention no more curly braces and semicolons :)"
      }
    ],
    barSkills: [
      {
        name: "ReactJS/Redux",
        level: "90%"
      },
      {
        name: "Git",
        level: "80%"
      },
      {
        name: "NodeJS/Express",
        level: "85%"
      },
      {
        name: "Databases/SQL",
        level: "75%"
      },
      {
        name: "HTML5/CSS3",
        level: "95%"
      },
      {
        name: "Data Structures / Algorithms",
        level: "70%"
      },
      {
        name: "Agile Methodologies",
        level: "85%"
      }
    ]
  },
  portfolio: {
    projects: [
      {
        title: "Cryptowatch",
        description:
          "An all in one web application to track and manage your crypto assets. No real money needed, just select the coin, the amount, and date bought and it will do the rest for you. This has been my first real web app that is constantly being developed.",
        image: "cryptoWatch.png",
        links: {
          github: "https://github.com/alexanderMontague/CryptoWatch",
          hosted: "https://cryptowatch.web.app/"
        },
        tech: ["react", "node", "mongo"]
      },
      {
        title: "Book Buy",
        description:
          "Book Buy offers students a simple way of finding, buying and selling their textbooks. Book Buy instantly connects buyers and sellers for used textbooks that help students save money, time and effort. Created with a partner at The University of Guelph.",
        image: "BookBuyLanding.png",
        links: {
          github: "https://github.com/alexanderMontague/BookBuy",
          hosted: "https://www.bookbuy.ca/"
        },
        tech: ["react", "firebase"]
      },
      {
        title: "am.ca Server",
        description:
          "My personal server hosted on a raspberry pi that I use for alexmontague.ca. Try pinging <code><a href='http://api.alexmontague.ca/resume' target='_blank'>api.alexmontague.ca/resume</a></code> for a JSON representation of my resume! Written using Golang and configured using nginx. I used this as an opportunity to learn more about Go and Networking!",
        image: "pi_server.png",
        links: {
          github: "https://github.com/alexanderMontague/am.ca-server",
          hosted: "https://api.alexmontague.ca"
        },
        tech: ["golang", "nginx", "pi"]
      },
      {
        title: "BubbleT",
        description:
          "BubbleT is an app that collects and displays salary records from Canada's public sector high earners. BubbleT was a team project for System Analysis and Design in Applications (CIS*3750, Winter 2019).",
        image: "bubbleT.png",
        links: {
          github: "https://github.com/alexanderMontague/bubbleT"
        },
        tech: ["javascript", "node"]
      },
      {
        title: "Coinsquare Dashboard",
        description:
          "Dashboard application that was built in 4 hours for Coinsquare's first ever internal Hackathon. This dashboard allowed for constant monitoring of coinsquare's status, jira board, and Github PR data in a visualized way.",
        image: "CSDashboard.png",
        links: {
          github: "https://github.com/alexanderMontague/coinsquare-dashboard",
          hosted: "https://alexandermontague.github.io/coinsquare-dashboard/"
        },
        tech: ["react"]
      },
      {
        title: "Awesome Ancestors",
        description:
          "This program utilizes the GEDCOM file format (file format that reflects and displays ancestral data in a specific way. Used in sites like Ancestory.com), and was created for my 'Angel of Death' course. The program's main purpose is to read in a GEDCOM file, parse all information from the file, and manipulate the data to your liking. The program can create and edit new GEDCOM files, or modify existing files. The web client gives the user an interface to interact with and view the GEDCOM files.",
        image: "awesomeAncestors.gif",
        links: {
          github: "https://github.com/alexanderMontague/Awesome-Ancestors"
        },
        tech: ["c", "javascript", "mysql"]
      },
      {
        title: "Greens Tracker",
        description:
          "This Java application was created to record and display data recorded during a hand watering shift at my previous Golf Course. This information was usually kept on paper and was an overall inefficient process I wanted to make better.",
        image: "greensTracker.gif",
        links: {
          github: "https://github.com/alexanderMontague/GreensTracker"
        },
        tech: ["java"]
      }
    ]
  },
  testimonials: {
    testimonials: [
      {
        text:
          "'One of the best programming skills you can have is knowing when to walk away for awhile.' - Oscar Godson.",
        user:
          "I love to program, but love interacting even more. I am ready to work on new and exciting things, with new and exciting people!"
      }
    ]
  }
};
