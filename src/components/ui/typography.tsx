import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "p",
  className = "",
}) => {
  const variantStyles = {
    h1: "text-4xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-medium",
    p: "text-base",
    span: "text-sm",
  };

  const Component = variant;

  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
