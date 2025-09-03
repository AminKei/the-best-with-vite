import React from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  PencilIcon,
  NumberedListIcon,
} from "@heroicons/react/24/outline";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
  disabled = false,
}) => {
  const getIcon = () => {
    switch (type) {
      case "search":
        return <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />;
      case "account":
        return <UserIcon className="w-5 h-5 text-gray-400" />;
      case "password":
        return <NumberedListIcon className="w-5 h-5 text-gray-400"/>
      default:
        return <PencilIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-[250px] pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200 ${className}`}
        disabled={disabled}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {getIcon()}
      </div>
    </div>
  );
};

export default Input;
