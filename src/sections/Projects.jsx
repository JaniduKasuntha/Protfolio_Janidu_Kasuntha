import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  FolderGit2,
  Sparkles,
  Layers,
} from "lucide-react";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaCss3Alt,
  FaCreditCard,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa6";
import {
  SiVite,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiSpringboot,
  SiSpringsecurity,
  SiThymeleaf,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiMysql,
  SiMongodb,
  SiJsonwebtokens,
  SiGooglegemini,
  SiVercel,
  SiGooglemaps,
} from "react-icons/si";
import {
  TbBrandReactNative,
  TbCpu,
  TbBroadcast,
  TbBinaryTree,
} from "react-icons/tb";

const tagIcons = {
  React: <FaReact className="text-cyan-400 w-3.5 h-3.5" />,
  "React Native": <TbBrandReactNative className="text-sky-400 w-3.5 h-3.5" />,
  Vite: <SiVite className="text-purple-400 w-3.5 h-3.5" />,
  Expo: <SiExpo className="text-white w-3.5 h-3.5" />,
  Express: <SiExpress className="text-gray-300 w-3.5 h-3.5" />,
  FastAPI: <SiFastapi className="text-teal-400 w-3.5 h-3.5" />,
  "Node.js": <FaNodeJs className="text-green-500 w-3.5 h-3.5" />,
  Java: <FaJava className="text-red-400 w-3.5 h-3.5" />,
  "Spring Boot": <SiSpringboot className="text-green-500 w-3.5 h-3.5" />,
  "Spring Security": <SiSpringsecurity className="text-emerald-400 w-3.5 h-3.5" />,
  Thymeleaf: <SiThymeleaf className="text-emerald-500 w-3.5 h-3.5" />,
  Python: <FaPython className="text-yellow-400 w-3.5 h-3.5" />,
  TensorFlow: <SiTensorflow className="text-orange-500 w-3.5 h-3.5" />,
  "scikit-learn": <SiScikitlearn className="text-amber-500 w-3.5 h-3.5" />,
  Pandas: <SiPandas className="text-blue-400 w-3.5 h-3.5" />,
  NumPy: <SiNumpy className="text-sky-400 w-3.5 h-3.5" />,
  XGBoost: <TbBinaryTree className="text-yellow-400 w-3.5 h-3.5" />,
  CatBoost: <TbBinaryTree className="text-amber-400 w-3.5 h-3.5" />,
  Matplotlib: <FaChartLine className="text-blue-300 w-3.5 h-3.5" />,
  Seaborn: <FaChartBar className="text-teal-300 w-3.5 h-3.5" />,
  Streamlit: <SiStreamlit className="text-red-400 w-3.5 h-3.5" />,
  MySQL: <SiMysql className="text-sky-400 w-3.5 h-3.5" />,
  MongoDB: <SiMongodb className="text-green-500 w-3.5 h-3.5" />,
  JWT: <SiJsonwebtokens className="text-pink-400 w-3.5 h-3.5" />,
  CSS: <FaCss3Alt className="text-blue-400 w-3.5 h-3.5" />,
  "Gemini API": <SiGooglegemini className="text-indigo-400 w-3.5 h-3.5" />,
  PayHere: <FaCreditCard className="text-amber-400 w-3.5 h-3.5" />,
  "Groq SDK": <TbCpu className="text-orange-400 w-3.5 h-3.5" />,
  SSE: <TbBroadcast className="text-cyan-300 w-3.5 h-3.5" />,
  "Google Maps API": <SiGooglemaps className="text-red-400 w-3.5 h-3.5" />,
  Vercel: <SiVercel className="text-slate-200 w-3.5 h-3.5" />,
};

const allProjects = [
  {
    id: 1,
    title: "NCC eCare Platform",
    category: "AI & Full-Stack",
    badge: "Client Project",
    featured: true,
    description:
      "A client-based smart e-channeling and healthcare literacy platform for Narammala Channeling Center. Features symptom-based medical specialist recommendations and an AI-powered medical report explainer using OCR and Gemini LLM.",
    image: "/c.png",
    tags: [
      "React",
      "FastAPI",
      "Express",
      "Node.js",
      "MySQL",
      "Gemini API",
      "PayHere",
      "Vercel",
    ],
    liveUrl: "https://nccecare.vercel.app",
    githubUrl: "https://github.com/JaniduKasuntha/NCC-eCare-Platform",
  },
  {
    id: 2,
    title: "Genie ChatBot AI",
    category: "AI / LLM",
    badge: "AI Assistant",
    featured: true,
    description:
      "A low-latency AI conversational assistant delivering real-time streaming completions via Server-Sent Events (SSE), built with token optimization, client-disconnect handling, and Groq SDK LLM integration.",
    image: "/g.png",
    tags: ["React", "Vite", "Node.js", "Groq SDK", "SSE", "Vercel"],
    liveUrl: "https://groq-gini-chat-bot.vercel.app",
    githubUrl: "https://github.com/JaniduKasuntha/Groq_Gini_ChatBot",
  },
  {
    id: 3,
    title: "CampusBites Mobile App",
    category: "Mobile & Full-Stack",
    badge: "Mobile App",
    featured: true,
    description:
      "A multi-role mobile application streamlining campus meal pre-orders and vendor operations for university students, featuring digital food menus, real-time status tracking, support tickets, and vendor reviews.",
    image: "/a.png",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "JWT",
      "Google Maps API",
      "Vercel",
    ],
    liveUrl: "https://campus-bites-mobile-app.vercel.app",
    githubUrl: "https://github.com/JaniduKasuntha/CampusBites-Mobile-App",
  },
  {
    id: 4,
    title: "University Bill & Event Reminder System",
    category: "Backend & Systems",
    badge: "Enterprise Web",
    featured: true,
    description:
      "A secure full-stack dashboard featuring role-based access control (RBAC), automated scheduled email reminders for academic billing cycles, and campus event notifications built with Spring Security and MySQL.",
    image: "/f.png",
    tags: ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "MySQL"],
    liveUrl: null,
    githubUrl:
      "https://github.com/JaniduKasuntha/Web-based-Bill-and-Event-Reminder-System",
  },
  {
    id: 5,
    title: "Heart Disease Risk Prediction ML",
    category: "AI / ML",
    badge: "Machine Learning",
    featured: false,
    description:
      "Machine learning diagnostic pipeline predicting heart disease risk based on a balanced clinical dataset of 75,000+ patient records. Evaluated multiple architectures and deployed CatBoost with 98% prediction accuracy.",
    image: "/t.png",
    tags: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "CatBoost",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/JaniduKasuntha/Heart-Disease-AI",
  },
  {
    id: 6,
    title: "Disease Prediction System ML",
    category: "AI / ML",
    badge: "Machine Learning",
    featured: false,
    description:
      "Multi-disease classification model taking patient symptoms as input. Evaluated over 400,000+ records across preprocessing and class-balancing pipelines; achieved 92% accuracy/F1 score with an optimized XGBoost model.",
    image: "/p.png",
    tags: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "React",
    ],
    liveUrl: "https://nccecare.vercel.app/ecare/smart-doc-suggestion",
    githubUrl: "https://github.com/JaniduKasuntha/NCC-eCare-Platform",
  },
];

import { Reveal } from "@/components/Reveal";

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "web", label: "Full-Stack Web" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const filteredProjects = allProjects.filter((p) => {
    if (filter === "ai") return p.category.includes("AI") || p.category.includes("ML");
    if (filter === "web") return p.category.includes("Full-Stack") || p.category.includes("Backend") || p.category.includes("Web");
    if (filter === "mobile") return p.category.includes("Mobile");
    return true;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-background/50">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Engineered with <span className="text-primary glow-text">Precision & Impact</span>
          </h2>
          <p className="text-base text-muted-foreground">
            A curated collection of intelligent machine learning pipelines, production full-stack systems, and cross-platform applications.
          </p>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setFilter(cat.id);
                  setShowAll(true);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === cat.id
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-surface/80 text-muted-foreground hover:text-foreground hover:bg-muted border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 120}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col group shadow-xl shadow-black/20"
            >
              {/* Project Screenshot Container with Zoom on Hover */}
              <div className="relative overflow-hidden aspect-video bg-surface/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-strong text-[11px] font-mono text-primary border border-primary/30 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 glass-strong px-2.5 py-1 rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-surface/90 text-slate-300 border border-white/5 hover:border-primary/30 transition-colors"
                      >
                        {tagIcons[tag] || null}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (GitHub + Live Demo) */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-md shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-muted text-slate-200 border border-white/10 hover:border-primary/40 text-xs sm:text-sm font-medium transition-all hover:scale-[1.02] active:scale-95"
                      >
                        <FaGithub className="w-4 h-4 text-slate-200" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Expand / Collapse Projects Toggle */}
        {filteredProjects.length > 4 && (
          <Reveal delay={150} className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 hover:border-primary text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-primary" />
              <span>{showAll ? "Show Featured Projects" : `View All Projects (${filteredProjects.length})`}</span>
              <ChevronDown
                className={`w-4 h-4 text-primary transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
};
