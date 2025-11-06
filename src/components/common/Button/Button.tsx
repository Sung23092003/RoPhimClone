import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  shape?: "rounded" | "square" | "pill" | "circle"; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className = "",
  disabled = false,
  shape = "rounded", 
}) => {
  // Base style
  const baseStyle =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  // Variants
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-yellow-400 text-black hover:bg-yellow-300",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  // Shapes
  const shapes = {
    rounded: "rounded-lg",   // Bo góc nhẹ
    square: "rounded-none",  // Vuông hẳn
    pill: "rounded-full",    // Bo Dạng Viên thuốc 
    circle: "rounded-full",  // Dành cho icon button
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${className}`}
    >
      {/* Icon trái */}
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {/* Text */}
      {children && <span>{children}</span>}
      {/* Icon phải */}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
