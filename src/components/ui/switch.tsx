import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  id?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, id }) => {
  return (
    <label
      htmlFor={id}
      className={`relative inline-flex items-center w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors duration-200 ${
        checked ? "bg-blue-500" : ""
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 w-0 h-0"
      />
      <span
        className={`absolute left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
          checked ? "translate-x-6" : ""
        }`}
      />
    </label>
  );
};

export default Switch;
