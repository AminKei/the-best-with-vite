import React from "react";
import { useTheme } from "../../../contexts/themecontext";

const Loading: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center font-vazirmatn ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <span>در حال بارگذاری...</span>
      </div>
    </div>
  );
};

export default Loading;
