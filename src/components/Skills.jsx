import { Reveal } from "@/components/Reveal";
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

const ICON_CLASS = "w-[18px] h-[18px] text-muted-foreground group-hover:text-foreground transition-colors";

export const skillIcons = {
  // Languages
  Python: <FaPython className={ICON_CLASS} />,
  Java: <FaJava className={ICON_CLASS} />,
  JavaScript: <FaJs className={ICON_CLASS} />,
  PHP: <SiPhp className={ICON_CLASS} />,
  HTML5: <FaHtml5 className={ICON_CLASS} />,
  CSS: <FaCss3Alt className={ICON_CLASS} />,

  // Frontend
  React: <FaReact className={ICON_CLASS} />,
  "React Native": <TbBrandReactNative className={ICON_CLASS} />,
  Vite: <SiVite className={ICON_CLASS} />,
  Expo: <SiExpo className={ICON_CLASS} />,
  "Tailwind CSS": <SiTailwindcss className={ICON_CLASS} />,

  // Backend
  "Node.js": <FaNodeJs className={ICON_CLASS} />,
  Express: <SiExpress className={ICON_CLASS} />,
  FastAPI: <SiFastapi className={ICON_CLASS} />,
  "Spring Boot": <SiSpringboot className={ICON_CLASS} />,
  "Spring Security": <SiSpringsecurity className={ICON_CLASS} />,
  Thymeleaf: <SiThymeleaf className={ICON_CLASS} />,
  JWT: <SiJsonwebtokens className={ICON_CLASS} />,
  SSE: <TbBroadcast className={ICON_CLASS} />,

  // AI & ML
  TensorFlow: <SiTensorflow className={ICON_CLASS} />,
  "scikit-learn": <SiScikitlearn className={ICON_CLASS} />,
  Pandas: <SiPandas className={ICON_CLASS} />,
  NumPy: <SiNumpy className={ICON_CLASS} />,
  XGBoost: <TbBinaryTree className={ICON_CLASS} />,
  CatBoost: <TbBinaryTree className={ICON_CLASS} />,
  Matplotlib: <FaChartLine className={ICON_CLASS} />,
  Seaborn: <FaChartBar className={ICON_CLASS} />,
  Streamlit: <SiStreamlit className={ICON_CLASS} />,
  "Gemini API": <SiGooglegemini className={ICON_CLASS} />,
  "Groq SDK": <TbCpu className={ICON_CLASS} />,

  // Databases
  MySQL: <SiMysql className={ICON_CLASS} />,
  MongoDB: <SiMongodb className={ICON_CLASS} />,

  // Tools & Cloud
  Git: <FaGithub className={ICON_CLASS} />,
  "Google Maps API": <SiGooglemaps className={ICON_CLASS} />,
  PayHere: <FaCreditCard className={ICON_CLASS} />,
  Vercel: <SiVercel className={ICON_CLASS} />,
  Railway: <SiRailway className={ICON_CLASS} />,
  Netlify: <SiNetlify className={ICON_CLASS} />,
  Postman: <SiPostman className={ICON_CLASS} />,
  "VS Code": <TbBrandVscode className={ICON_CLASS} />,
  "IntelliJ IDEA": <SiIntellijidea className={ICON_CLASS} />,
  Ubuntu: <SiUbuntu className={ICON_CLASS} />,
  Windows: <FaWindows className={ICON_CLASS} />,
  Arduino: <SiArduino className={ICON_CLASS} />,
  RStudio: <SiRstudioide className={ICON_CLASS} />,
  "Microsoft 365": <FaMicrosoft className={ICON_CLASS} />,
  Figma: <SiFigma className={ICON_CLASS} />,
};

// Maintained for backward compatibility if imported elsewhere
export const skill = skillIcons;

const technicalMatrix = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "PHP", "HTML5", "CSS"],
  },
  {
    id: "ai-ml",
    name: "AI / Machine Learning",
    skills: [
      "TensorFlow",
      "scikit-learn",
      "CatBoost",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Gemini API",
      "Groq SDK",
      "Streamlit",
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "React Native", "Tailwind CSS", "Vite", "Expo"],
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
      "Ubuntu",
      "Vercel",
      "Railway",
      "Netlify",
      "Postman",
      "Figma",
      "Google Maps API",
      "PayHere",
    ],
  },
];

export const Skills = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
      {technicalMatrix.map((category, idx) => (
        <Reveal key={category.id} delay={100 + idx * 50}>
          <div className="flex flex-col">
            {/* Category Header */}
            <div className="border-b border-border pb-3 mb-4">
              <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground">
                {category.name}
              </h3>
            </div>
            
            {/* Skills List */}
            <div className={`gap-x-6 gap-y-2.5 ${category.skills.length > 6 ? "grid grid-cols-1 sm:grid-cols-2" : "flex flex-col"}`}>
              {category.skills.map((skillName) => (
                <div
                  key={skillName}
                  className="group flex items-center gap-3 py-1 cursor-default"
                >
                  <span className="shrink-0">{skillIcons[skillName]}</span>
                  <span className="text-[14px] text-foreground font-medium group-hover:text-primary transition-colors">
                    {skillName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
