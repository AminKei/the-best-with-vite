import React from "react";
import { useTranslation } from "react-i18next";
import Input from "../../ui/input";
import LanguageSwitcher from "../../base_components/language_switcher";
import ThemeSwitcher from "../../base_components/theme_switcher";
import Button from "../../ui/button";

interface HeaderToolsProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeaderTools: React.FC<HeaderToolsProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="hidden xl:flex items-center space-x-3 font-vazirmatn">
      <Input
        type="search"
        placeholder={t("search")}
        value={searchTerm}
        onChange={onSearchChange}
      />
      <LanguageSwitcher />
      <ThemeSwitcher />
      <Button className="px-4 py-2.5 text-sm sm:text-base">
        {t("login_signup")}
      </Button>
    </div>
  );
};

export default HeaderTools;
