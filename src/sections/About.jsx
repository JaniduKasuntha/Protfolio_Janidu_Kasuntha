import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-35 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - my details */}
          <div>
            <div className="space-y-8">
              <span className="text-secondary-foreground text-lg font-medium traking-wider uppercase">
                About Me
              </span>
            </div>
            <div className="py-5" />
            <h2 className="text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the Future,
              <span className="font-serif font-normal text-white italic">
                {" "}
                One Component at a time
              </span>
            </h2>
            <div className="space-y-4 p-1 text-muted-foreground animate-fade-in animation-delay-200 ">
              <p>
                I'm an undergraduate specializing in Artificial Intelligence
                with a strong interest in machine learning, software
                engineering, and data-driven solutions. I enjoy transforming
                ideas into practical applications by combining AI with modern
                web and mobile technologies.
              </p>
              <p>
                My experience includes developing predictive machine learning
                models, RESTful APIs, full-stack web applications, and
                cross-platform mobile apps using React, React Native, Node.js,
                Express.js, MongoDB, MySQL, and Python.
              </p>
              <p>
                I believe the best way to learn is by building. Every project I
                create helps me strengthen my problem-solving skills while
                exploring new technologies and software engineering practices.
              </p>
            </div>
            <div className="p-2" />

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-bold italic shine-text">
                "Always learning, always building. I enjoy exploring emerging
                technologies and applying them through hands-on projects,
                continuously improving my skills as an AI and Software
                Engineering student."
              </p>
            </div>
          </div>
          {/* Right column - cards  */}
          <div className=" grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in transition-transform duration-200 ease-in-out hover:scale-104 "
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
