const Card = ({ children, className = "", padding = "md", shadow = "md" }) => {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <div
      className={`
      bg-white dark:bg-dark-surface 
      border border-light-border dark:border-dark-border 
      rounded-xl 
      ${paddings[padding]} 
      ${shadows[shadow]}
      transition-colors duration-200
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Card;
