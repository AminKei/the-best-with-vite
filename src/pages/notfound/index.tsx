import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/themecontext";
import Typography from "../../components/ui/typography";
import { RoutePath } from "../../constants/routes.path";

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center font-vazirmatn px-4 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-800"
      }`}
    >
      <Typography variant="h1" className="text-5xl sm:text-6xl font-bold mb-4">
        404 - {t("not_found")}
      </Typography>
      <Typography variant="p" className="mb-6 text-lg sm:text-xl text-center">
        {t("page_not_found")}
      </Typography>
      <Link
        to={RoutePath.basePath}
        className="px-6 py-3  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {t("back_to_home")}
      </Link>
    </div>
  );
};

export default NotFound;
