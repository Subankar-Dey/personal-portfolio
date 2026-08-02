export const Button = ({
  className = "",
  size = "default",
  href,
  children,
  ...props
}) => {
  const baseClasses =
    "inline-block relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary glass border border-primary/30 text-white hover:border-primary hover:bg-primary/10 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <span className="relative flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
