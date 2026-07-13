export type Project = {
  name: string;
  category: "AI Projects" | "Web Solutions" | "Mobile Apps";
  description: string;
  image: string;
  url: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  { name: "Strategic Divorce Directory", category: "Web Solutions", description: "One place to find the experts and resources that support people in taking control of today and building their tomorrow.", image: "/projects/strategic-divorce-directory.png", url: "https://stage.strategicdivorcedirectory.com/", tags: ["React", "Node.js", "PostgreSQL"], featured: true },
  { name: "JV Directory", category: "Web Solutions", description: "A platform connecting joint venture partners, affiliates, and influencers in the self-improvement industry.", image: "/projects/jv-directory.png", url: "https://jvdirectory.com/", tags: ["React", "Express", "MongoDB"], featured: true },
  { name: "CastlR", category: "Web Solutions", description: "Community safety software with instant incident reporting, real-time alerts, and comprehensive documentation.", image: "/projects/castlr-web.png", url: "https://castlr.com/", tags: ["React Native", "Firebase", "Maps API"] },
  { name: "Praxis Media", category: "AI Projects", description: "An interactive reading experience with instant answers, deeper insights, and personalised AI guidance.", image: "/projects/praxis-media.jpg", url: "https://praxisaimedia.com/", tags: ["React", "AI", "NLP"], featured: true },
  { name: "CuerPOWER", category: "AI Projects", description: "A fitness, nutrition, supplementation, and accountability experience with a 24/7 AI coach for ambitious women.", image: "/projects/cuerpower.png", url: "https://cuerpower.app/", tags: ["AI coach", "Fitness", "Nutrition"], featured: true },
  { name: "SecurRoom AI", category: "AI Projects", description: "AI-powered due diligence, document analysis, and automated redaction for streamlined M&A workflows.", image: "/projects/securroom-ai.png", url: "https://nexplutus.com/", tags: ["Python", "NLP", "React"] },
  { name: "PrimeAgeFit", category: "AI Projects", description: "Hyper-personalised fitness and wellness plans that adapt to each member's progress.", image: "/projects/primeagefit.jpg", url: "https://primeagefit.com/", tags: ["React", "Node.js", "AI"], featured: true },
  { name: "PrepForIndependence AI", category: "AI Projects", description: "AI-powered financial literacy, responsibility, and life-skills programmes designed for real-life success.", image: "/projects/prep-for-independence.png", url: "https://www.prepforindependence.ai/", tags: ["React", "Python", "AWS"] },
  { name: "Scale8UP AI", category: "AI Projects", description: "AI that diagnoses business bottlenecks and builds focused, data-driven action plans for growth.", image: "/projects/scale8up-ai.png", url: "https://www.scale8upmethod.com/", tags: ["Next.js", "AI", "Vercel"] },
  { name: "CORY AI Premium Intelligence", category: "AI Projects", description: "An operating environment that turns methodology, decisions, and action into a guided execution system.", image: "/projects/cory-ai.png", url: "https://coryai.io/", tags: ["React", "AI", "Automation"], featured: true },
  { name: "ScalingCoach.ai", category: "AI Projects", description: "A growth OS for coaches to define offers, generate conversion assets, and execute a focused 90-day plan.", image: "/projects/scaling-coach.png", url: "https://scalingcoach.ai/", tags: ["React", "AI", "Growth OS"] },
  { name: "Astrology AI", category: "AI Projects", description: "A personalised astrology experience delivered through an elegant, guided AI interface.", image: "/projects/astrology-ai.jpg", url: "https://astrology-ai.businessevolutionai.com/", tags: ["React", "AI", "Personalisation"] },
  { name: "ClickAI", category: "AI Projects", description: "An AI-powered marketing workspace built to sharpen execution and accelerate campaign decisions.", image: "/projects/clickai.jpg", url: "https://click-ai.businessevolutionai.com/", tags: ["React", "AI", "Marketing"] },
  { name: "Foreclosurebid AI", category: "AI Projects", description: "AI-driven property rankings, risk analysis, and market insights for foreclosure opportunities nationwide.", image: "/projects/foreclosurebid-ai.png", url: "https://foreclosurebidai.com/", tags: ["Python", "AI", "Real estate"], featured: true },
  { name: "Life App", category: "AI Projects", description: "Personalised guidance, progress tracking, and education for joint and skin health journeys.", image: "/projects/life-app.png", url: "https://app.beautyandhealthfromwithin.com/", tags: ["React", "AI", "Health"] },
  { name: "Do The Thing", category: "AI Projects", description: "Automated daily challenges that keep communities active, motivated, and connected.", image: "/projects/do-the-thing.png", url: "https://stage.challengeapp.businessevolutionai.com/", tags: ["React", "AI", "Community"] },
  { name: "Face Analyzer", category: "AI Projects", description: "AI-driven Western Physiognomy insights for personality, decision-making styles, and rapport building.", image: "/projects/face-analyzer.png", url: "https://face-analyzer.businessevolutionai.com/", tags: ["Python", "AI", "Computer vision"] },
  { name: "OnyxFlow", category: "Mobile Apps", description: "Enterprise workflow software for repetitive tasks, fragmented systems, and manual approvals.", image: "/projects/onyxflow.jpg", url: "https://onyxflowai.com/", tags: ["React Native", "Firebase", "Redux"] },
  { name: "CastlR Mobile", category: "Mobile Apps", description: "A mobile community safety experience with incident reporting, alerts, and professional security support.", image: "/projects/castlr-mobile.png", url: "https://apps.apple.com/us/app/castlr-community-management/id6757694056", tags: ["React Native", "Firebase", "Maps API"] },
];

export const featuredProjects = projects.filter((project) => project.featured);
