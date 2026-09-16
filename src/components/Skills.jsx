import { useState } from "react";
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
  FaWindows,
  FaMicrosoft,
  FaHtml5,
  FaJs,
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
  SiNetlify,
  SiPostman,
  SiIntellijidea,
  SiUbuntu,
  SiArduino,
  SiRstudioide,
  SiFigma,
  SiPhp,
  SiRailway,
  SiTailwindcss,
} from "react-icons/si";

import {
  TbBrandReactNative,
  TbCpu,
  TbBroadcast,
  TbBinaryTree,
  TbBrandVscode,
} from "react-icons/tb";

export const skillIcons = {
  // Languages
  Python: <FaPython className="w-5 h-5 text-yellow-400" />,
  Java: <FaJava className="w-5 h-5 text-red-400" />,
  JavaScript: <FaJs className="w-5 h-5 text-yellow-300" />,
  PHP: <SiPhp className="w-5 h-5 text-indigo-400" />,
  HTML5: <FaHtml5 className="w-5 h-5 text-orange-500" />,
  CSS: <FaCss3Alt className="w-5 h-5 text-blue-400" />,

  // Frontend
  React: <FaReact className="w-5 h-5 text-cyan-400" />,
  "React Native": <TbBrandReactNative className="w-5 h-5 text-sky-400" />,
  Vite: <SiVite className="w-5 h-5 text-purple-400" />,
  Expo: <SiExpo className="w-5 h-5 text-white" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-teal-400" />,

  // Backend
  "Node.js": <FaNodeJs className="w-5 h-5 text-green-500" />,
  Express: <SiExpress className="w-5 h-5 text-gray-300" />,
  FastAPI: <SiFastapi className="w-5 h-5 text-teal-400" />,
  "Spring Boot": <SiSpringboot className="w-5 h-5 text-green-500" />,
  "Spring Security": <SiSpringsecurity className="w-5 h-5 text-emerald-400" />,
  Thymeleaf: <SiThymeleaf className="w-5 h-5 text-emerald-500" />,
  JWT: <SiJsonwebtokens className="w-5 h-5 text-pink-400" />,
  SSE: <TbBroadcast className="w-5 h-5 text-cyan-300" />,

  // AI & ML
  TensorFlow: <SiTensorflow className="w-5 h-5 text-orange-500" />,
  "scikit-learn": <SiScikitlearn className="w-5 h-5 text-amber-500" />,
  Pandas: <SiPandas className="w-5 h-5 text-blue-400" />,
  NumPy: <SiNumpy className="w-5 h-5 text-sky-500" />,
  XGBoost: <TbBinaryTree className="w-5 h-5 text-yellow-500" />,
  CatBoost: <TbBinaryTree className="w-5 h-5 text-amber-400" />,
  Matplotlib: <FaChartLine className="w-5 h-5 text-blue-300" />,
  Seaborn: <FaChartBar className="w-5 h-5 text-teal-300" />,
  Streamlit: <SiStreamlit className="w-5 h-5 text-red-500" />,
  "Gemini API": <SiGooglegemini className="w-5 h-5 text-indigo-400" />,
  "Groq SDK": <TbCpu className="w-5 h-5 text-orange-400" />,

  // Databases
  MySQL: <SiMysql className="w-5 h-5 text-sky-400" />,
  MongoDB: <SiMongodb className="w-5 h-5 text-green-500" />,

  // Tools & Cloud
  Git: <FaGithub className="w-5 h-5 text-slate-200" />,
  "Google Maps API": <SiGooglemaps className="w-5 h-5 text-red-400" />,
  PayHere: <FaCreditCard className="w-5 h-5 text-amber-500" />,
  Vercel: <SiVercel className="w-5 h-5 text-white" />,
  Railway: <SiRailway className="w-5 h-5 text-purple-400" />,
  Netlify: <SiNetlify className="w-5 h-5 text-teal-400" />,
  Postman: <SiPostman className="w-5 h-5 text-orange-400" />,
  "VS Code": <TbBrandVscode className="w-5 h-5 text-blue-400" />,
  "IntelliJ IDEA": <SiIntellijidea className="w-5 h-5 text-pink-500" />,
  Ubuntu: <SiUbuntu className="w-5 h-5 text-orange-500" />,
  Windows: <FaWindows className="w-5 h-5 text-blue-400" />,
  Arduino: <SiArduino className="w-5 h-5 text-teal-400" />,
  RStudio: <SiRstudioide className="w-5 h-5 text-blue-400" />,
  "Microsoft 365": <FaMicrosoft className="w-5 h-5 text-amber-400" />,
  Figma: <SiFigma className="w-5 h-5 text-purple-400" />,
};

// Backward-compatibility export for any existing imports
export const skill = skillIcons;

export const skillCategories = [
  {
    id: "ai-ml",
    name: "AI / Machine Learning",
    skills: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "CatBoost",
      "Matplotlib",
      "Seaborn",
      "Gemini API",
      "Groq SDK",
      "Streamlit",
    ],
  },
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "PHP", "HTML5", "CSS"],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "React Native", "Vite", "Expo", "Tailwind CSS", "CSS"],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "JWT",
      "SSE",
    ],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    id: "tools",
    name: "Tools & Cloud",
    skills: [
      "Git",
      "Vercel",
      "Railway",
      "Netlify",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Ubuntu",
      "Figma",
      "PayHere",
      "Google Maps API",
    ],
  },
];

import { Reveal } from "@/components/Reveal";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const displayedCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <Reveal delay={100}>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "all"
                ? "bg-primary text-white shadow-md shadow-primary/25"
                : "bg-surface/80 text-muted-foreground hover:text-foreground hover:bg-muted border border-white/5"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface/80 text-muted-foreground hover:text-foreground hover:bg-muted border border-white/5"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Categorized Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category, idx) => (
          <Reveal key={category.id} delay={120 + idx * 80}>
            <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-primary/30 transition-all duration-300 h-full">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                <h4 className="text-sm font-semibold text-foreground tracking-wide">
                  {category.name}
                </h4>
                <span className="text-xs text-muted-foreground bg-surface px-2.5 py-0.5 rounded-full border border-white/5 font-mono">
                  {category.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skillName) => (
                  <div
                    key={skillName}
                    className="tech-pill flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
                  >
                    <span className="shrink-0">{skillIcons[skillName] || null}</span>
                    <span>{skillName}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
