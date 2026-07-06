import {
  Quote,
  SquareArrowOutUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const review = [
  {
    no: 1,
    img: "/nad.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_we-are-proud-to-announce-the-successful-completion-activity-7457426036067053568-3YD6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGSFW1YBmsNyBlDfEw8Pm6LN8w1rdHPgqdI",
  },
  {
    no: 2,
    img: "/sud.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_fullstackdevelopment-reactnative-nodejs-activity-7457414708610879488-DiHB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGSFW1YBmsNyBlDfEw8Pm6LN8w1rdHPgqdI",
  },
  {
    no: 3,
    img: "/p.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_we-are-proud-to-announce-the-successful-completion-activity-7457426036067053568-3YD6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGSFW1YBmsNyBlDfEw8Pm6LN8w1rdHPgqdI",
  },
  {
    no: 4,
    img: "/nad.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_we-are-proud-to-announce-the-successful-completion-activity-7457426036067053568-3YD6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGSFW1YBmsNyBlDfEw8Pm6LN8w1rdHPgqdI",
  },
];

export const Testimonials = () => {
  const [currentReview, setcurrentReview] = useState(0);

  const handlePrev = () => {
    if (currentReview === 0) {
      setcurrentReview(review.length - 1);
    } else {
      setcurrentReview(currentReview - 1);
    }
  };
  const handleNext = () => {
    if (currentReview === review.length - 1) {
      setcurrentReview(0);
    } else {
      setcurrentReview(currentReview + 1);
    }
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-170 h-150 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>
        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto">
          <div className=" relative ">
            {/* Main */}
            <div className="p-6 md:p-10 glass w-full max-w-lg mx-auto rounded-3xl border border-white/10 glow-border animate-fade-in animation-delay-200 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group">
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-110">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="relative max-w-md h-64 sm:h-80 md:h-125 mx-auto overflow-hidden rounded-lg">
                <img
                  src={review[currentReview].img}
                  alt="Testimonial"
                  className="relative w-full h-full object-contain "
                />
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href={review[currentReview].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-white/5 hover:bg-primary/10 hover:border-primary/50 hover:text-primary text-sm font-medium text-muted-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <span>View Post</span>
                  <SquareArrowOutUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
            {/* Testimonials navigation */}
            <div className="flex items-center justify-center gap-4 mt-6 animate-fade-in animation-delay-100">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full glass border border-white/5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-md hover:shadow-primary/5 active:scale-95 hover:scale-105 cursor-pointer"
              >
                <ChevronLeft />
              </button>

              <div className="flex items-center gap-2">
                {review.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentReview
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full glass border border-white/5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 shadow-md hover:shadow-primary/5 active:scale-95 hover:scale-105 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
