export const Button = ({
  children,
  size = "default",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs md:text-sm",
    default: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]",
    secondary:
      "bg-surface hover:bg-muted text-foreground border border-border/80 hover:border-primary/40",
    outline:
      "bg-transparent hover:bg-primary/10 text-foreground border border-border hover:border-primary/50 hover:text-primary",
    ghost:
      "bg-transparent hover:bg-surface text-muted-foreground hover:text-foreground",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
