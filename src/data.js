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
            companyName: "Facebook",
            yearRange: "2020-present",
            title: "Enterprise Software Engineer",
            tech: "Hack, React, Python, SQL, GraphQL, Relay",
            desc: "Working on building robust full stack enterprise solutions focussing on the Accounting space."
        },
        {
            companyName: "Cisco",
            yearRange: "2018-2020",
            title: "Full Stack Engineer",
            tech: "FastAPI, Python, React, Redux, Saga, Kafka, Celery, Redis, Elasticsearch",
            desc: "Built a data aggregation platform that connects multiple internal data sources to help expedite the development process. The project centralizes and simplifies data streams to create an enjoyable user experience. One popular feature of the project that I helped take lead in was gamifying component health by taking into account bugs over time, line coverage, code coverage, and sanity pass rates and associating a health score for each component. This specific portion of the project averaged 100 DAU’s that consisted of managers, PM’s and tech leads in my BU."
        },
    ],
    projects: [
        {
            projectName: "Nova",
            demo: "https://media.giphy.com/media/19QQAMMUZRc8yarfE7/giphy.gif",
            projectLink: "https://github.com/paulnovacovici/Nova",
            tech: "Swift 5, Firebase",
            desc: "Worked on a native iOS project written entirely in Swift 5. This was a personal start up company where I worked with a client that was looking to undercut a merchandising competitor. The key features that were requested was the ability to track employees on their routes, allow employees to upload pictures of merchandise, feature for employees to clock in for the work day, and a form to keep track of sales."
        },
        {
            projectName: "The Lyricist",
            demo: "https://media.giphy.com/media/eNghivSOshuJswfjiB/giphy.gif",
            projectLink: "https://thelyricist.novacovici.dev",
            tech: "React",
            desc: "Inspired by a simlar project to practice typing while reading books I decided to try to replciate the logic with music lyrics. Project was built using React Hooks with focus on React fundamentals and UX/UI."
        },
        {
            projectName: "Genetic Algorithm Impossible Game",
            projectLink: "https://github.com/paulnovacovici/Impossible-Game",
            tech: "Unity, C#",
            desc: "Driven by interest in machine learning, self-taught game development using machine learning concepts. Recreated the popular game the Impossible Game using Unity and C#. Used 15 input nodes to identify obstacles and one output node that decided if the AI should jump or not. Every generation the top 10% of performers would generate an offspring for the next iteration until completion"
        },
    ]
}

export default data;