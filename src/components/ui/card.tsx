import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-[#252525] dark:text-white  rounded-lg shadow-md p-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
