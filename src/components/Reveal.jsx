import { useEffect, useRef, useState } from "react";

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up", // 'up' | 'none'
  threshold = 0.08,
  as: Component = "div",
  ...props
}) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Respect accessibility prefers-reduced-motion
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        setIsRevealed(true);
        return;
      }
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(node); // Animate only once per page load
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = () => {
    if (isRevealed) return "translate3d(0, 0, 0)";
    if (direction === "up") return "translate3d(0, 24px, 0)";
    return "none";
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isRevealed ? "auto" : "opacity, transform",
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
