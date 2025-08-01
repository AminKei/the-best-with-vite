import React from "react";
import { useTheme } from "../../../contexts/themecontext";
import Switch from "../../ui/switch";
import Button from "../../ui/button";
import Typography from "../../ui/typography";
import { t } from "i18next";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center p-4 gap-3">
      <Button variant="outline" className="flex gap-5 h-[43px] ">
        <Typography className="inline-block" variant="p">
          {" "}
          {theme === "dark" ? `${t("dark")}` : `${t("light")}`}
        </Typography>
        <Switch
          id="theme-toggle"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
