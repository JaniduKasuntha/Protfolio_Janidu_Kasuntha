/**
 * AnimatedBorderButton — Simplified secondary-style button
 *
 * Previously contained a crawling SVG dash-offset border animation.
 * Now renders as a clean secondary button with the same polymorphic API
 * (supports `as` prop for rendering as <a>, <button>, etc.).
 *
 * Will be fully retired when Hero section is redesigned.
 */
export const AnimatedBorderButton = ({
  children,
  as: Component = "button",
  className = "",
  ...props
}) => {
  return (
    <Component
      className={`relative inline-flex items-center justify-center bg-surface-1 border border-border
        text-foreground hover:border-border-muted hover:bg-surface-2 transition-all
        duration-150 ease-out active:scale-[0.98] focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
        disabled:opacity-50 disabled:cursor-not-allowed
        px-5 py-2.5 text-sm md:text-base font-medium rounded-lg
        cursor-pointer ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};
