import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/themecontext";
import Typography from "../../components/ui/typography";
import { RoutePath } from "../../constants/routes.path";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Button from "../../components/ui/button";

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
        {t("not_found")}
      </Typography>
      <Typography variant="p" className="mb-6 text-lg sm:text-xl text-center">
        {t("page_not_found")}
      </Typography>
      <Button className="flex gap-3">
        <Link to={RoutePath.basePath}>{t("back_to_home")}</Link>
        <ArrowLeftIcon width={20} />
      </Button>
    </div>
  );
};

export default NotFound;
