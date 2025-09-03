import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/button";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: "en" | "es" | "fa") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.setAttribute(
      "data-dir",
      lang === "fa" ? "rtl" : "ltr"
    );
    setIsOpen(false);
  };

  const languages = [
    { code: "en", label: t("english"), flag: "🇺🇸" },
    { code: "es", label: t("spanish"), flag: "🇪🇸" },
    { code: "fa", label: t("persian"), flag: "🇮🇷" },
  ];

  return (
    <div className="relative inline-block text-left">
      <Button
        variant="primary"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-36 px-4 gap-3 py-2.5 h-[43px] rounded-lg shadow-md focus:outline-none"
      >
        <span className="flex items-center ">
          {languages.find((lang) => lang.code === i18n.language)?.flag}{" "}
          {t(
            languages.find((lang) => lang.code === i18n.language)?.label ||
              "english"
          )}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-white text-blue-600 rounded-lg shadow-lg ring-opacity-5 z-50 ">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code as any)}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors rounded-lg ${
                i18n.language === lang.code
                  ? "bg-blue-100 "
                  : "hover:bg-gray-100 "
              }`}
            >
              <span className="flex items-center">
                <span className="mr-2">{lang.flag}</span> {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
