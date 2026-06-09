export const resumeData = {
    personal: {
        name: "Abhinav G Krishnan",
        role: "AI Engineer / Full Stack Developer",
        location: "Bangalore, India",
        email: "abhinavgkrishnan@gmail.com",
        phone: "+91 9447715481",
        github: "https://github.com/abhinavgkrishnan",
        linkedin: "https://www.linkedin.com/in/abhinav-krishnan-9a85b81a3",
        farcaster: "https://farcaster.xyz/gkoding",
        x: "https://x.com/_gkoding",
        telegram: "https://t.me/gkoding",
        // Hero
        headlineLead: "I build",
        headlineHighlight: "AI agents",
        headlineTrail: "— and the tools to run them.",
        lead: "AI Engineer at Solidus AI Tech. I work on agent orchestration, high-throughput data pipelines, and the developer tools that sit on top — usually end to end, backend through UI.",
        sub: "// automation · blockchain · developer tools",
        // About
        aboutBig: "Most of what I do is making AI agents actually useful — connecting them to real APIs and MCP servers, and keeping huge responses from blowing past the model's context window.",
        aboutSmall: "At Solidus AI Tech I built a Python agent orchestrator, shipped 25+ specialized agents, and built Agent Forge — a visual workflow platform with a meta-agent that turns plain language into working workflows. Before that, two years at Deloitte on Salesforce → NetSuite integrations and automation.",
        focus: [
            "AI agents & orchestration",
            "High-throughput data pipelines",
            "Developer tools & APIs",
        ],
        focusNote: "// off the clock: gaming, marathons, and a lot of reading",
    },
    experience: [
        {
            company: "Solidus AI Tech",
            role: "AI Engineer / Full-Stack Developer",
            period: "Feb 2025 — Present",
            location: "Remote",
            description: [
                "Architected a Python AI agent orchestrator that taps into an array of API tools and MCP servers, simplifying automation.",
                "Developed 25+ specialized AI agents for diverse use cases.",
                "Used DuckDB as an intermediate SQL layer for massive API responses, letting agents query targeted data instead of hitting context limits.",
                "Built Agent Forge, a visual workflow platform — architecting the backend and a meta-agent for natural-language workflow generation.",
                "Managed full-stack deployment pipelines across Docker, Railway, Supabase, and Vercel.",
            ],
        },
        {
            company: "Deloitte USI",
            role: "Analyst",
            period: "Jan 2023 — Feb 2025",
            location: "Bangalore",
            description: [
                "Delivered end-to-end Salesforce → NetSuite integrations using Boomi.",
                "Collaborated with 5+ cross-functional teams to ensure accurate data transfer.",
                "Developed and optimized 20+ SuiteScripts to automate processes.",
                "Authored 100+ user stories and 30+ test scripts in Jira; built a custom SuiteBilling solution for a critical business need.",
            ],
        },
    ],
    projects: [
        {
            name: "Agent Forge",
            role: "Visual AI Workflow Editor",
            featured: true,
            link: "https://forge.aitech.io/",
            image: "/agentforge.png",
            description:
                "A visual editor for building AI workflows by dragging blocks onto a canvas — no code. Connect any model (OpenAI, Anthropic, Google, Groq, or local through Ollama), wire in 60+ tools like Gmail, Notion and Supabase, and ship the result as an API, webhook or scheduled job. I architected the backend and built the meta-agent that turns a plain-language prompt into a working workflow.",
            chips: ["Meta-Agent", "Multi-Model", "60+ Tools", "Python", "Backend"],
        },
        {
            name: "OhSnap!",
            role: "Farcaster Indexer",
            link: "http://ohsnap.it",
            image: "/ohsnap.png",
            description:
                "A high-throughput indexer wired to a self-hosted Farcaster hub through a sharded pipeline, pushing events to Kafka. I built the developer APIs and a Scanner dashboard that streams live network activity.",
            chips: ["Kafka", "Self-hosted Hub", "Developer APIs"],
        },
        {
            name: "Quatro",
            role: "iOS Game · Swift",
            link: "https://testflight.apple.com/join/689WeaeT",
            image: "/quatro.png",
            description:
                "A fast PvP trivia game for iOS, built in Swift — real-time duels, daily topics, ranks and leaderboards. It started as a Farcaster mini-app; it's now a fully standalone native app with a brand-new design.",
            chips: ["Swift", "iOS", "Realtime"],
        },
        {
            name: "TouchBaseIndia",
            role: "Based India 2024",
            link: "https://touch-base-india.vercel.app",
            image: "/touchbaseindia.png",
            description:
                "Hides the blockchain so people can connect, chat and send funds using readable Farcaster or Base names instead of wallet addresses.",
            chips: ["Base", "Farcaster", "Next.js"],
        },
        {
            name: "ANT Protocol",
            role: "Funding Platform",
            link: "https://antprotocol.vercel.app/posts",
            image: "/antprotocol.png",
            description:
                "A project-funding forum where people submit Marginal Utility Curves for per-dollar impact. The backend is serverless — GitHub Gists linked through Farcaster casts, no database.",
            chips: ["Serverless", "GitHub Gists", "Farcaster"],
        },
    ],
    skills: {
        soft: ["Communication", "Problem-Solving", "Attention to Detail", "Adaptability", "Collaboration", "Critical Thinking"],
        technical: ["Next.js", "React", "Python", "Node.js", "Kafka", "DuckDB", "SQL"],
    },
    education: [
        {
            institution: "Model Engineering College, Kochi",
            degree: "B.Tech in Electronics and Communication Engineering",
            period: "June 2018 - May 2022",
        },
        {
            institution: "Silver Hills HSS, Kozhikode",
            degree: "High School",
            period: "May 2018",
        },
    ],
};
