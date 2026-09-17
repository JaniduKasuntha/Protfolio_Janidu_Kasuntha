/**
 * Button — Unified 3-tier button system
 *
 * Variants:
 *   primary   → Solid teal accent, dark text, high emphasis
 *   secondary → Solid dark surface, subtle border, medium emphasis
 *   ghost     → Transparent, muted text, low emphasis
 *
 * Sizes:
 *   sm        → Compact (nav CTAs, inline actions)
 *   default   → Standard
 *   lg        → Large (hero-level CTAs)
 */
export const Button = ({
  children,
  size = "default",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs md:text-sm",
    default: "px-5 py-2.5 text-sm md:text-base",
    lg: "px-7 py-3.5 text-base md:text-lg",
  };

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary-hover text-primary-foreground font-semibold",
    secondary:
      "bg-surface-1 hover:bg-surface-2 text-foreground border border-border hover:border-border-muted",
    ghost:
      "bg-transparent hover:bg-surface-1 text-muted-foreground hover:text-foreground",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
