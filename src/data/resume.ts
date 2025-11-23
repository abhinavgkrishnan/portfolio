export const resumeData = {
    personal: {
        name: "Abhinav G Krishnan",
        role: "AI Engineer / Full Stack Developer",
        location: "Bangalore, India",
        email: "abhinavgkrishnan@gmail.com",
        phone: "+91 9447715481",
        github: "https://github.com/abhinavgkrishnan",
        linkedin: "https://www.linkedin.com/in/abhinav-krishnan-9a85b81a3",
        summary: "Architecting AI agents and full-stack solutions. Passionate about automation, blockchain, and building tools that empower developers.",
    },
    experience: [
        {
            company: "Solidus AI Tech",
            role: "AI Engineer / Full Stack Developer",
            period: "Feb 2025 - PRESENT",
            location: "Remote",
            description: [
                "Architected a Python based AI agent orchestrator which can tap into an array of api tools and MCP servers simplifying automation.",
                "Developed 25+ Specialized AI agents for diverse use cases.",
                "Utilized DuckDB as an intermediate SQL layer for massive API responses allowing agents to query targeted data.",
                "Worked on developing 'gen6', a visual workflow automation platform primarily architecting the backend.",
                "Managed full-stack deployment pipelines with Docker, Railway, Supabase and Vercel services."
            ]
        },
        {
            company: "Deloitte USI",
            role: "Analyst",
            period: "Jan 2023 - Feb 2025",
            location: "Bangalore",
            description: [
                "Delivered end-to-end solutions for integration from Salesforce to Netsuite using Boomi.",
                "Collaborated with over 5 cross-functional teams to ensure accurate data transfer.",
                "Developed and optimized 20+ SuiteScripts (JavaScript) to automate processes.",
                "Created 100+ user stories and 30+ test scripts in Jira.",
                "Built a custom SuiteBilling solution to address a critical business need."
            ]
        }
    ],
    projects: [
        {
            name: "TouchBaseIndia",
            role: "Built at Based India 2024",
            link: "https://touch-base-india.vercel.app",
            description: "Platform that abstracts blockchain complexities enabling users to connect, chat and transfer funds using human readable farcaster or base identities.",
            image: "/touchbaseindia.png"
        },
        {
            name: "OhSnap!",
            role: "Farcaster Indexer",
            link: "http://ohsnap.it",
            description: "High throughput indexer connecting to a self hosted Farcaster hub using a sharded data pipeline pushing events to kafka. Built developer APIs and a Scanner visualization dashboard.",
            image: "/ohsnap.png"
        },
        {
            name: "ANT Protocol",
            role: "MUC based funding platform",
            link: "https://antprotocol.vercel.app/posts",
            description: "Project funding forum where users submit Marginal Utility Curves for per dollar impact on projects. Built a serverless backend using GitHub Gists linked via Farcaster Casts.",
            image: "/antprotocol.png"
        },
        {
            name: "Quizcaster",
            role: "PVP Quiz MiniApp on Farcaster",
            link: "https://quizcaster.ohsnap.it",
            description: "PVP Quiz with relatime matchmaking, async challenges and leaderboards.",
            image: "/quizcaster.png"
        }
    ],
    skills: {
        soft: ["Communication", "Problem-Solving", "Attention to Detail", "Adaptability", "Collaboration", "Critical Thinking"],
        technical: ["NextJs", "Kafka", "Python", "NodeJS", "SQL", "DuckDB", "React"]
    },
    education: [
        {
            institution: "Model Engineering College, Kochi",
            degree: "B.Tech in Electronics and Communication Engineering",
            period: "June 2018 - May 2022"
        },
        {
            institution: "Silver Hills HSS, Kozhikode",
            degree: "High School",
            period: "May 2018"
        }
    ]
};
