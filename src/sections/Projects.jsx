import { useState } from "react";
import {
  BrainCircuit,
  ExternalLink,
  LayoutGrid,
  Layers3,
  Smartphone,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Reveal } from "@/components/Reveal";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "ncc-ecare",
    number: "01",
    title: "NCC eCare Platform",
    category: "Full-Stack AI Integration",
    areas: ["fullstack"],
    description:
      "A client-based smart e-channeling and healthcare literacy platform for Narammala Channeling Center. Features symptom-based medical specialist recommendations and an AI-powered medical report explainer using Gemini LLM.",
    engineering:
      "Decoupled frontend/backend architecture handling external LLM calls and secure local payment processing via PayHere.",
    integration: "Includes the Disease Prediction ML system →",
    metric: null,
    image: "/c.png",
    tags: [
      "React",
      "FastAPI",
      "Node.js",
      "MySQL",
      "Gemini API",
      "PayHere",
    ],
    liveUrl: "https://nccecare.vercel.app",
    githubUrl:
      "https://github.com/JaniduKasuntha/NCC-eCare-Platform",
    featured: true,
  },

  {
    id: "genie",
    number: "02",
    title: "Genie ChatBot AI",
    category: "Real-time Streaming LLM",
    areas: ["ai-ml"],
    description:
      "A low-latency conversational AI assistant focusing on rapid response delivery and token optimization.",
    engineering:
      "Streams LLM completions to the React client using Server-Sent Events (SSE). Built with custom disconnect handling to prevent hanging network requests.",
    integration: null,
    metric: null,
    image: "/g.png",
    tags: [
      "React",
      "Node.js",
      "Groq SDK",
      "SSE",
      "Vite",
      "Vercel",
    ],
    liveUrl: "https://groq-gini-chat-bot.vercel.app",
    githubUrl:
      "https://github.com/JaniduKasuntha/Groq_Gini_ChatBot",
    featured: true,
  },

  {
    id: "disease-prediction",
    number: "03",
    title: "Disease Prediction System ML",
    category: "Machine Learning",
    areas: ["ai-ml"],
    description:
      "Multi-disease classification model taking patient symptoms as input and processing the data through class-balancing pipelines.",
    engineering:
      "Built and evaluated an XGBoost-based classification pipeline using large-scale clinical records and preprocessing workflows.",
    integration: null,
    metric: "400,000+ records evaluated · 92% F1 score",
    image: "/p.png",
    tags: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
    liveUrl:
      "https://nccecare.vercel.app/ecare/smart-doc-suggestion",
    githubUrl:
      "https://github.com/JaniduKasuntha/NCC-eCare-Platform",
    featured: false,
  },

  {
    id: "heart-disease",
    number: "04",
    title: "Heart Disease Risk Prediction ML",
    category: "Machine Learning",
    areas: ["ai-ml"],
    description:
      "Diagnostic pipeline predicting heart disease risk based on a balanced clinical dataset. Multiple machine learning architectures were evaluated before model selection.",
    engineering:
      "Developed a preprocessing, feature engineering, model evaluation, and prediction pipeline with CatBoost used for the final model.",
    integration: null,
    metric: "75,000+ patient records · 98% prediction accuracy",
    image: "/t.png",
    tags: [
      "Python",
      "CatBoost",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
    ],
    liveUrl: null,
    githubUrl:
      "https://github.com/JaniduKasuntha/Heart-Disease-AI",
    featured: false,
  },

  {
    id: "campus-bites",
    number: "05",
    title: "CampusBites Mobile App",
    category: "Mobile & Full-Stack",
    areas: ["mobile", "fullstack"],
    description:
      "A multi-role mobile application streamlining campus meal pre-orders and vendor operations, featuring digital food menus and real-time status tracking.",
    engineering:
      "Built a React Native and Expo mobile frontend connected to a Node.js and MongoDB backend with authentication and multi-role application flows.",
    integration: null,
    metric: null,
    image: "/a.png",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://campus-bites-mobile-app.vercel.app",
    githubUrl:
      "https://github.com/JaniduKasuntha/CampusBites-Mobile-App",
    featured: false,
  },

  {
    id: "bill-reminder",
    number: "06",
    title: "University Bill & Event Reminder System",
    category: "Full-Stack + Backend",
    areas: ["fullstack"],
    description:
      "A secure full-stack dashboard featuring role-based access control, automated scheduled email reminders for academic billing cycles, and campus event notifications.",
    engineering:
      "Implemented backend business logic with Spring Boot and Spring Security, including role-based authorization, scheduled notifications, and MySQL persistence.",
    integration: null,
    metric: null,
    image: "/f.png",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "Thymeleaf",
    ],
    liveUrl: null,
    githubUrl:
      "https://github.com/JaniduKasuntha/Web-based-Bill-and-Event-Reminder-System",
    featured: false,
  },
];

/* =========================================================
   FILTERS
========================================================= */

const projectFilters = [
  {
    id: "all",
    label: "All Projects",
    icon: LayoutGrid,
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    icon: BrainCircuit,
  },
  {
    id: "fullstack",
    label: "Full Stack",
    icon: Layers3,
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
  },
];

/* =========================================================
   PROJECT LINKS
========================================================= */

const ActionLinks = ({ githubUrl, liveUrl }) => {
  return (
    <div className="flex flex-wrap items-center gap-5 pt-1">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex items-center gap-1.5
            text-[13px] font-medium text-muted-foreground
            transition-colors hover:text-foreground
          "
        >
          <FaGithub className="h-4 w-4" />
          <span>GitHub ↗</span>
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex items-center gap-1.5
            text-[13px] font-medium text-primary
            transition-colors hover:text-primary-hover
          "
        >
          <ExternalLink className="h-4 w-4" />
          <span>Live Demo ↗</span>
        </a>
      )}
    </div>
  );
};

/* =========================================================
   PROJECTS SECTION
========================================================= */

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "all" ||
      project.areas.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      className="border-b border-border py-20 lg:py-24"
    >
      <div className="container mx-auto max-w-7xl px-6">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <Reveal>
          <div className="mb-16 lg:mb-20">
            <span
              className="
                font-mono text-[18px] font-semibold
                uppercase tracking-widest text-primary/80
                md:text-[20px]
              "
            >
              05 / Projects
            </span>
          </div>
        </Reveal>

        {/* =====================================================
            PROJECT FILTERS
        ===================================================== */}

        <Reveal delay={60}>
          <div className="mb-12 border-b border-border">
            <div
              className="
                flex flex-wrap items-center
                gap-x-7 sm:gap-x-9
              "
            >
              {projectFilters.map((filter) => {
                const Icon = filter.icon;
                const isActive =
                  activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter.id)
                    }
                    aria-pressed={isActive}
                    className={`
                      group relative
                      flex items-center gap-2
                      pb-4
                      text-[12px] font-medium
                      transition-colors duration-200

                      focus-visible:outline-none
                      focus-visible:text-primary

                      ${
                        isActive
                          ? "text-primary"
                          : `
                            text-muted-foreground
                            hover:text-foreground
                          `
                      }
                    `}
                  >
                    <Icon
                      className={`
                        h-4 w-4
                        transition-colors duration-200
                        ${
                          isActive
                            ? "text-primary"
                            : `
                              text-muted-foreground
                              group-hover:text-primary
                            `
                        }
                      `}
                    />

                    <span>{filter.label}</span>

                    {/* Active underline */}
                    <span
                      className={`
                        absolute
                        -bottom-px left-0
                        h-[2px]
                        rounded-full
                        bg-primary
                        transition-all duration-300

                        ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            PROJECT LIST
        ===================================================== */}

        <div className="divide-y divide-border">
          {visibleProjects.map((project, index) => {
            const imageOnRight = index % 2 !== 0;

            return (
              <Reveal
                key={project.id}
                delay={100}
              >
                <article
                  className={`
                    grid items-center
                    gap-8
                    lg:grid-cols-12
                    lg:gap-12
                    xl:gap-16

                    ${
                      project.featured
                        ? "py-16 lg:py-24"
                        : "py-14 lg:py-20"
                    }
                  `}
                >

                  {/* =================================================
                      PROJECT IMAGE
                  ================================================= */}

                  <div
                    className={`
                      lg:col-span-7

                      ${
                        imageOnRight
                          ? "lg:order-2"
                          : "lg:order-1"
                      }
                    `}
                  >
                    <div
                      className="
                        group relative overflow-hidden
                        rounded-xl border border-border
                        bg-surface-1
                      "
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} project interface`}
                        loading={
                          index > 1 ? "lazy" : "eager"
                        }
                        className="
                          block h-auto w-full
                          transition-transform
                          duration-500
                          group-hover:scale-[1.01]
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      PROJECT CONTENT
                  ================================================= */}

                  <div
                    className={`
                      flex flex-col justify-center
                      lg:col-span-5

                      ${
                        imageOnRight
                          ? "lg:order-1"
                          : "lg:order-2"
                      }
                    `}
                  >

                    {/* Metadata */}

                    <div
                      className="
                        mb-4 flex items-center gap-2
                        font-mono text-[11px]
                        uppercase tracking-wider
                        text-muted-foreground
                      "
                    >
                      <span>{project.number}</span>

                      <span className="h-px w-4 bg-border" />

                      <span>{project.category}</span>

                      {project.featured && (
                        <>
                          <span
                            className="
                              mx-1 h-1 w-1
                              rounded-full
                              bg-primary/60
                            "
                          />

                          <span className="text-primary/80">
                            Featured
                          </span>
                        </>
                      )}
                    </div>

                    {/* Project Title */}

                    <h3
                      className={`
                        font-semibold
                        tracking-tight
                        text-foreground

                        ${
                          project.featured
                            ? "text-2xl sm:text-3xl"
                            : "text-xl sm:text-2xl"
                        }
                      `}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-4
                        text-[14px]
                        leading-relaxed
                        text-muted-foreground
                        sm:text-[15px]
                      "
                    >
                      {project.description}
                    </p>

                    {/* Integration */}

                    {project.integration && (
                      <p
                        className="
                          mt-3
                          text-[13px]
                          font-medium
                          text-primary
                        "
                      >
                        {project.integration}
                      </p>
                    )}

                    {/* Metric */}

                    {project.metric && (
                      <div className="mt-5">
                        <span
                          className="
                            inline-block
                            rounded-md
                            border border-border
                            bg-surface-1
                            px-2.5 py-1.5
                            font-mono
                            text-[11px]
                            text-foreground/80
                            sm:text-[12px]
                          "
                        >
                          {project.metric}
                        </span>
                      </div>
                    )}

                    {/* Engineering Implementation */}

                    <div className="mt-6 border-t border-border pt-5">
                      <span
                        className="
                          mb-2 block
                          font-mono
                          text-[11px]
                          uppercase
                          tracking-widest
                          text-muted-foreground
                        "
                      >
                        Engineering Implementation
                      </span>

                      <p
                        className="
                          text-[13px]
                          leading-relaxed
                          text-foreground/85
                          sm:text-[14px]
                        "
                      >
                        {project.engineering}
                      </p>
                    </div>

                    {/* Technology Stack */}

                    <div className="mt-5 border-t border-border pt-5">
                      <span
                        className="
                          mb-2 block
                          font-mono
                          text-[11px]
                          uppercase
                          tracking-widest
                          text-muted-foreground
                        "
                      >
                        Stack
                      </span>

                      <p
                        className="
                          font-mono
                          text-[11px]
                          leading-relaxed
                          text-muted-foreground
                          sm:text-[12px]
                        "
                      >
                        {project.tags.join(" · ")}
                      </p>
                    </div>

                    {/* GitHub / Live Demo */}

                    <div className="mt-5">
                      <ActionLinks
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};