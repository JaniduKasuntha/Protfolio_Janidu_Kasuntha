export const Button = ({
  children,
  size = "default",
  className = "",
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary/80 text-primary-foreground hover:bg-primary shadow-lg shadow-primary/25 active:scale-95 transition-transform duration-150 hover:scale-103";

  const sizeClasses = {
    sm: "px-5 py-3 text-medium",
    default: "px-6 py-4 text-medium",
    lg: "px-12 py-7 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
