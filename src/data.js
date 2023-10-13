const data = {
  name: "Paul Novacovici",
  jobTitle: "Software Engineer",
  websiteName: "novacovici.dev",
  phoneNumber: "847-361-7570",
  email: "paulnovacovici@gmail.com",
  school: "University of Illinois Urbana-Champaign",
  avatarImg: `${process.env.PUBLIC_URL}/03-pnovacov-mauricio-palomar.jpg`,
  jobExperience: [
    {
      companyName: "Meta",
      icon: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
      yearRange: "2023-present",
      title: "Senior Enterprise Software Engineer",
      tech: "Hack, React, Python, SQL, GraphQL, Relay, Flux, Ent Framework, C++, Presto",
      desc: `Owner of a Transactional Accounting system that creates ~300M accounting lines monthly across 100 DB shards. I've also built a rules
      engine that allows business users to own their own bespoke accounting rules dynamically. Was a lead developer in creating
      a contract management system that automated amortization schedules for ~$1B in contracts, and directly integrated with invoicing,
      and our general ledger to automate the entire prepaid and accrual process.`,
    },
    {
      companyName: "Meta",
      icon: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
      yearRange: "2020-2022",
      title: "Enterprise Software Engineer",
      tech: "Hack, React, Python, SQL, GraphQL, Relay, Flux, Ent Framework",
      desc: "Working on building full stack applications in the finance space. Some key projects I've worked on was building a scalable expense payment system for employees. From the time of writing this we've processed 100,000 payments, which amount to $67M. This project had a large impact at Meta due to the amount of savings we had for canceling our contract with Concur Pay. Another project I've worked on was creating a Travel Hub for employees. The project consisted of communicating with our travel service provider CWT, and creating a hook for them to push employee booking data to us. With that data available we were able to run data analytics on high variance trips by employees, and implemented a beautiful email user experience for users that booked flights.",
    },
    {
      companyName: "Cisco",
      yearRange: "2018-2020",
      title: "Full Stack Engineer",
      tech: "FastAPI, Python, React, Redux, Saga, Kafka, Celery, Redis, Elasticsearch",
      desc: "Built a data aggregation platform that connects multiple internal data sources to help expedite the development process. The project centralizes and simplifies data streams to create an enjoyable user experience. One popular feature of the project that I helped take lead in was gamifying component health by taking into account bugs over time, line coverage, code coverage, and sanity pass rates and associating a health score for each component. This specific portion of the project averaged 100 DAU’s that consisted of managers, PM’s and tech leads in my BU.",
    },
  ],
  projects: [
    {
      projectName: "Piano Vision",
      demo: "https://media.giphy.com/media/VD5Ed2pEZ9dVWzdc8q/giphy.gif",
      projectLink: "https://piano-vision-fingering.web.app/",
      tech: "Firebase, React, Tailwinds",
      desc: "Worked on a contract for PianoVision LLC. Created an interface for teachers to label music notes fingerings, create sections, and simplify music so users can learn Piano easier in VR. I deserialized a midi adjacent data format and dynamically created a music sheet that the teacher can interact with.",
    },
    {
      projectName: "Global Entry Notif",
      demo: "https://globalentrynotif.com/iphone.png",
      projectLink: "https://globalentrynotif.com/",
      tech: "Firebase, React, Tailwinds, Heroku, Flask, Stripe, Headless UI",
      desc: "Founded my own company, a private notification service integrated with Discord. Many people struggle with getting interviews to complete their Global Entry application often times waiting almost a year. Paid users of this service will receive notifications whenever a new appointmnet slot in their region opens up.",
    },
    {
      projectName: "Nova",
      demo: "https://media.giphy.com/media/19QQAMMUZRc8yarfE7/giphy.gif",
      projectLink: "https://github.com/paulnovacovici/Nova",
      tech: "Swift 5, Firebase",
      desc: "Worked on a native iOS project written entirely in Swift 5. This was a personal start up company where I worked with a client that was looking to undercut a merchandising competitor. The key features that were requested was the ability to track employees on their routes, allow employees to upload pictures of merchandise, feature for employees to clock in for the work day, and a form to keep track of sales.",
    },
    {
      projectName: "The Lyricist",
      demo: "https://media.giphy.com/media/eNghivSOshuJswfjiB/giphy.gif",
      projectLink: "https://thelyricist.novacovici.dev",
      tech: "React",
      desc: "Inspired by a simlar project to practice typing while reading books I decided to try to replciate the logic with music lyrics. Project was built using React Hooks with focus on React fundamentals and UX/UI.",
    },
    {
      projectName: "Genetic Algorithm Impossible Game",
      projectLink: "https://github.com/paulnovacovici/Impossible-Game",
      tech: "Unity, C#",
      desc: "Driven by interest in machine learning, self-taught game development using machine learning concepts. Recreated the popular game the Impossible Game using Unity and C#. Used 15 input nodes to identify obstacles and one output node that decided if the AI should jump or not. Every generation the top 10% of performers would generate an offspring for the next iteration until completion",
    },
  ],
};

export default data;
