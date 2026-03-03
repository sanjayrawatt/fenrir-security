import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-dark focus:ring-primary dark:focus:ring-offset-dark-bg",
      secondary:
        "bg-light-surface text-gray-900 border border-light-border hover:bg-light-hover dark:bg-dark-surface dark:text-gray-100 dark:border-dark-border dark:hover:bg-dark-hover focus:ring-gray-400 dark:focus:ring-offset-dark-bg",
      ghost:
        "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-dark-surface focus:ring-gray-400",
      danger:
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-dark-bg",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
      icon: "p-2",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
