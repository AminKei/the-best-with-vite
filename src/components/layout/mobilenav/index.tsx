import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Input from "../../ui/input";
import LanguageSwitcher from "../../base_components/language_switcher";
import ThemeSwitcher from "../../base_components/theme_switcher";
import Button from "../../ui/button";
import { useTheme } from "../../../contexts/themecontext";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  setIsOpen,
  searchTerm,
  onSearchChange,
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out  ${
        theme === "dark"
          ? "bg-gray-800 text-gray-100"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="px-4 pt-4 pb-6 space-y-3">
        <Input
          type="search"
          placeholder={t("search")}
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link
          to="/"
          className="block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {t("home")}
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {t("contact")}
        </Link>
        <Link
          to="/about"
          className="block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {t("about")}
        </Link>
        <Link
          to="/more"
          className="block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {t("more")}
        </Link>
        <div className="flex items-center space-x-3 pt-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <Button
          size="sm"
          className="w-full mt-2 py-2 text-sm"
          onClick={() => setIsOpen(false)}
        >
          {t("login_signup")}
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
