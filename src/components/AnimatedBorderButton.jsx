export const AnimatedBorderButton = ({
  children,
  as: Component = "button",
  className = "",
  ...props
}) => {
  return (
    <Component
      className={`relative inline-flex items-center justify-center bg-surface/50 border border-white/10
        text-foreground hover:border-primary/50 hover:text-white transition-all 
        duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-6 py-3 text-sm md:text-base font-medium rounded-full overflow-hidden 
        animated-border cursor-pointer shadow-sm hover:shadow-primary/10 ${className}`}
      {...props}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border opacity-70 group-hover:opacity-100 transition-opacity"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};
