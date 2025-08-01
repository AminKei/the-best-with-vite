import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DesktopNav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex items-center space-x-6 text-base lg:text-lg font-medium justify-center flex-1 font-vazirmatn">
      <Link
        to="/"
        className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
      >
        {t("home")}
      </Link>
      <Link
        to="/contact"
        className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
      >
        {t("contact")}
      </Link>
      <Link
        to="/about"
        className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
      >
        {t("about")}
      </Link>
      <Link
        to="/more"
        className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
      >
        {t("more")}
      </Link>
    </nav>
  );
};

export default DesktopNav;
