export const resumeData = {
  personal: {
    name: "Abhinav G Krishnan",
    role: "AI Engineer",
    location: "Bangalore, India",
    email: "abhinavgkrishnan@gmail.com",
    phone: "+91 9447715481",
    github: "https://github.com/abhinavgkrishnan",
    linkedin: "https://www.linkedin.com/in/abhinav-krishnan-9a85b81a3",
    farcaster: "https://farcaster.xyz/gkoding",
    x: "https://x.com/_gkoding",
    telegram: "https://t.me/gkoding",
    // Hero
    // Building AI agents, developer tools, and occasionally overengineered side projects.
    headlineLead: "Making",
    headlineHighlight: "AI useful",
    headlineTrail: "with agents, tools and infrastructure.",
    lead: "AI Engineer at AI Tech Cloud Network (formerly Solidus AI Tech). I work across agent orchestration, developer tools, and data infrastructure, usually end to end, from backend services and APIs to the interfaces people actually use.",
    sub: "// automation · blockchain · developer tools",
    // About
    aboutBig:
      "I like building the less glamorous parts of AI: the orchestration layers, tool connections, data pipelines, and interfaces that turn impressive demos into products people can actually use.",
    aboutSmall:
      "Before AI, I spent two years solving integration and automation problems at Deloitte. That experience shaped how I approach engineering today: start with the workflow, build reliable systems underneath, and make the complexity disappear for the user.",
    focus: [
      "AI agents & orchestration",
      "Data systems & infrastructure",
      "Developer tools & APIs",
    ],
    focusNote: "// off the clock: gaming, marathons, and a lot of reading",
  },
  experience: [
    {
      company: "AI Tech Cloud Network",
      role: "AI Engineer",
      period: "Feb 2025 — Present",
      location: "Remote",
      description: [
        "Architected the backend of Forge, a visual AI workflow platform — a composable engine of 18+ block types (agents, tools, conditionals, loops, human-in-the-loop) spanning 90+ tool integrations, MCP servers, and 6+ model providers, deployable as chat, REST API, webhook, or scheduled job.",
        "Built a RAG based meta-agent within Forge that compiles plain-language instructions into deployable multi-step workflows — using live block metadata and a schema-validation retry loop so the generated workflows are runnable, not just plausible.",
        "Built a sports-betting agent that answers natural-language odds questions — cut token cost and eliminated context-overflow by loading oversized API responses into a DuckDB SQL layer and querying only the rows needed, instead of stuffing full responses into the prompt.",
        "Owned end-to-end delivery of backend architecture through deployment, with production monitoring/logging and real-time multi-user collaboration.",
        "Integrated Web3 wallet-connect authentication, extending Forge to wallet-gated workflows.",
      ],
    },
    {
      company: "Deloitte USI",
      role: "Analyst",
      period: "Jan 2023 — Feb 2025",
      location: "Bangalore",
      description: [
        "Validated data integrity across a Salesforce–Boomi–NetSuite integration — reconciled field mappings, proration, and numeric accuracy between systems, and diagnosed whether fixes belonged in the Salesforce, Boomi, or NetSuite layer.",
        "Developed and optimized 20+ SuiteScripts (JavaScript) to automate processes and handle integration edge cases.",
        "Built a custom SuiteBilling solution to address a critical business need not available natively in NetSuite.",
      ],
    },
  ],
  projects: [
    {
      name: "Forge",
      role: "Visual AI Workflow Editor",
      featured: true,
      link: "https://forge.aitech.io/",
      image: "/agentforge.png",
      description:
        "A visual workflow builder for AI automation. Drag blocks onto a canvas, connect models, tools and Human-in-the-loop Blocks and deploy the result as an API, webhook, or scheduled job. I architected the backend and built the meta-agent that converts plain-language instructions into fully functioning workflows.",
      chips: ["Meta-Agent", "Multi-Model", "90+ Tools", "Python", "Backend"],
    },
    {
      name: "CompanionCube",
      role: "Spoiler-Aware Game Guide · RAG",
      link: "https://cube.ohsnap.it",
      image: "/companioncube.png",
      description:
        "A guide for Hollow Knight and Silksong that knows where you are in the game and refuses to spoil what's ahead. Mark your progress and ask anything — spoiler control is enforced as vector-store payload filters, not prompts, over 5,000+ wiki chunks with hybrid retrieval (dense + BM25, RRF-fused) and cross-encoder reranking. Evaluated at 100% recall@6 and 0% spoiler-leak, with an in-character guide, two guidance modes, and bring-your-own-key model support.",
      chips: ["RAG", "Hybrid Retrieval", "Qdrant", "FastAPI", "Gemini"],
    },
    {
      name: "OhSnap!",
      role: "Farcaster Indexer",
      link: "http://ohsnap.it",
      image: "/ohsnap.png",
      description:
        "A high-throughput Farcaster indexer built on a sharded event pipeline and Kafka. I developed the developer APIs and a live Scanner dashboard that streams network activity in real time.",
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
    technical: [
      "RAG",
      "Vector Search",
      "Agent Orchestration",
      "Tool Calling / MCP",
      "Prompt Engineering",
      "LLM Integration",
      "Evals",
      "Python",
      "TypeScript",
      "FastAPI",
      "Kafka",
      "DuckDB",
      "Qdrant",
      "SQL",
      "Next.js",
      "React",
      "Docker",
    ],
  },
  education: [
    {
      institution: "Model Engineering College, Kochi",
      degree: "B.Tech in Electronics and Communication Engineering",
      period: "June 2018 - May 2022",
    },
  ],
};
