import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
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
  React: <FaReact className="text-sky-400 w-6 h-6" />,
  "React Native": <TbBrandReactNative className="text-sky-500 w-6 h-6" />,
  Vite: <SiVite className="text-purple-400 w-6 h-6" />,
  Expo: <SiExpo className="text-white w-6 h-6" />,
  Express: <SiExpress className="text-gray-400 w-6 h-6" />,
  FastAPI: <SiFastapi className="text-teal-400 w-6 h-6" />,
  "Node.js": <FaNodeJs className="text-green-500 w-6 h-6" />,
  Java: <FaJava className="text-red-400 w-6 h-6" />,
  "Spring Boot": <SiSpringboot className="text-green-600 w-6 h-6" />,
  "Spring Security": <SiSpringsecurity className="text-green-500 w-6 h-6" />,
  Thymeleaf: <SiThymeleaf className="text-emerald-600 w-6 h-6" />,
  Python: <FaPython className="text-yellow-400 w-6 h-6" />,
  TensorFlow: <SiTensorflow className="text-orange-500 w-6 h-6" />,
  "scikit-learn": <SiScikitlearn className="text-orange-400 w-6 h-6" />,
  Pandas: <SiPandas className="text-indigo-400 w-6 h-6" />,
  NumPy: <SiNumpy className="text-blue-500 w-6 h-6" />,
  XGBoost: <TbBinaryTree className="text-yellow-500 w-6 h-6" />,
  Matplotlib: <FaChartLine className="text-blue-300 w-6 h-6" />,
  Seaborn: <FaChartBar className="text-teal-300 w-6 h-6" />,
  Streamlit: <SiStreamlit className="text-red-500 w-6 h-6" />,
  MySQL: <SiMysql className="text-blue-400 w-6 h-6" />,
  MongoDB: <SiMongodb className="text-green-500 w-6 h-6" />,
  JWT: <SiJsonwebtokens className="text-pink-500 w-6 h-6" />,
  CSS: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
  "Gemini API": <SiGooglegemini className="text-indigo-400 w-6 h-6" />,
  PayHere: <FaCreditCard className="text-amber-500 w-6 h-6" />,
  "Groq SDK": <TbCpu className="text-orange-400 w-6 h-6" />,
  SSE: <TbBroadcast className="text-cyan-400 w-6 h-6" />,
  CatBoost: <TbBinaryTree className="text-yellow-500 w-6 h-6" />,
  CAtBoost: <TbBinaryTree className="text-yellow-500 w-6 h-6" />,
  "GoogleMaps API": <SiGooglemaps className="text-blue-500 w-6 h-6" />,
  Vercel: <SiVercel className="text-silver w-6 h-6" />,
};

const mainProjects = [
  {
    title: "NCC eCare Platform",
    description:
      "A client based smart e-channeling and health literacy platform for 'Narammala Channeling Center' with symptom-based specialist suggestions and an AI-powered medical report explainer using OCR and Gemini LLM. Used PayHere API for payment processing and integrated with MySQL database for secure data management.",
    image: "/c.png", // Replace with your actual image path
    tags: [
      "React",
      "Express",
      "FastAPI",
      "Node.js",
      "MySQL",
      "Gemini API",
      "PayHere",
      "Vercel",
    ],
    link: "https://nccecare.vercel.app",
    github: "https://github.com/JaniduKasuntha/NCC-eCare-Platform",
  },
  {
    title: "Genie ChatBot AI",
    description:
      "An prototype AI assistant delivering low-latency streaming completions via Server-Sent Events, complete with token management and client-disconnect handling. Build to use minimumtokens usage on inout and output with an groq API key to access the Groq LLM API.",
    image: "/g.png", // Replace with your actual image path
    tags: ["React", "Vite", "Node.js", "Groq SDK", "SSE", "Vercel"],
    link: " https://groq-gini-chat-bot.vercel.app", // Live link if available
    github: "https://github.com/JaniduKasuntha/Groq_Gini_ChatBot",
  },
  {
    title: "University Bill & Event Reminder System",
    description:
      "A secure full-stack dashboard featuring role-based access control and automated email reminders for academic billing cycles and campus event updates.",
    image: "/f.png", // Replace with your actual image path
    tags: ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "MySQL"],
    link: "#projects", // Live link if available
    github:
      "https://github.com/JaniduKasuntha/Web-based-Bill-and-Event-Reminder-System",
  },
  {
    title: "CampusBites Mobile App",
    description:
      "A multi-role mobile application streamlining campus meal pre-orders and vendor operations for Camps-Students, featuring digital menus, support tickets, and Food Reviewing . Build using Mern stack for cross-platform compatibility.",
    image: "/a.png", // Replace with your actual image path
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "JWT",
      "CSS",
      "GoogleMaps API",
      "Vercel",
    ],
    link: "https://campus-bites-mobile-app.vercel.app", // Live link if available
    github: "https://github.com/JaniduKasuntha/CampusBites-Mobile-App",
  },
];

const otherProjects = [
  {
    title: "Heart Disease Risk Prediction ML",
    description:
      "ML model for predicting heart disease risk based on balanced patient dataset of 75000+ records. Trained on CatBoost algorithm with the accuracy of 98%",
    image: "/t.png", // Replace with your actual image path
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
    link: " #projects", // Live link if available
    github: "#https://github.com/JaniduKasuntha/Heart-Disease-AI.git",
  },
  {
    title: "Disease Prediction System ML",
    description:
      "ML model for predicting disease of the patient by taking patient symptoms as input. A Dataset of 400000+ records was used and ran through several preprocessing piplines to make the dataset balanced and algorithms to gain the highest accuracy/F1/Recal. selceted XGBoost algorithm with the accuracy of 92%",
    image: "/p.png", // Replace with your actual image path
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
    link: " https://nccecare.vercel.app/ecare/smart-doc-suggestion", // Live link if available
    github: "#projects",
  },
];

export const Projects = () => {
  const [moreProjects, setMoreProjects] = useState(false);
  return (
    <section id="projects" className="py-6 relative overflow-hidden">
      {/*Background glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/*Section header*/}
        <div className="text-center mb-16 mx-auto max-w-3xl animate-fade-in animation-delay-100">
          <span className="text-sm text-secondary-foreground font-medium tracking-wider uppercase animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl font-bold leading-tight mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">
            Projects that
            <span className="font-serif font-normal text-white italic">
              {" "}
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of full-stack systems and machine learning pipelines
            built with precise engineering, high performance, and real-world
            utility in mind
          </p>
        </div>

        {/* Projects grids*/}
        <div className="grid md:grid-cols-2 gap-8">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl shadow-lg overflow-hidden animate-fade-in animation-delay-200 md:row-span-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image containers */}
              <div className="relative overflow-hidden aspect-video">
                <div className="group-hover:opacity-65 tansition-opacity duration-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-70 " />
                </div>
                {/* Overlay links*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-8 h-8" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                </div>
              </div>

              {/* Details/content containers */}
              <div className="p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary-foreground">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tagIcons[tag] || null}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OtherProjects grids*/}
        {moreProjects && (
          <div className="grid py-8 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl shadow-lg overflow-hidden animate-fade-in animation-delay-200 md:row-span-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image containers */}
                <div className="relative overflow-hidden aspect-video">
                  <div className="group-hover:opacity-70 tansition-opacity duration-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-70 " />
                  </div>
                  {/* Overlay links*/}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-8 h-8" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub className="w-8 h-8" />
                    </a>
                  </div>
                </div>

                {/* Details/content containers */}
                <div className="p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 ">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tagIcons[tag] || null}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-center py-10">
          <button
            onClick={() => setMoreProjects(!moreProjects)}
            className="group relative flex items-center gap-2 px-6 py-4 rounded-full border border-primary/20 bg-card/30 hover:bg-primary/10 hover:border-primary/50  hover:text-primary shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 active:scale-95 animate-fade-in animation-delay-200 cursor-pointer"
          >
            <span className="font-semibold text-base tracking-wide">
              {moreProjects ? "Show Less Projects" : "More Projects"}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${moreProjects ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
