import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../contexts/themecontext";
import Typography from "../../ui/typography";
import Button from "../../ui/button";
import DesktopNav from "../desktopnav";
import HeaderTools from "../headertools";
import MobileNav from "../mobilenav";
import IconsNav from "../iconsnav";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 shadow-lg font-vazirmatn ${
        theme === "dark"
          ? "bg-gray-950 border-b border-gray-800"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 h-[70px] sm:h-[80px] flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer">
          <Typography
            variant="h3"
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm sm:text-xl lg:text-xl"
          >
            {t("company_name")}
          </Typography>
        </div>

        <DesktopNav />

        <div className="flex items-center space-x-3 lg:space-x-4 b">
          <IconsNav />
          <HeaderTools
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />

          <div className="sm:hidden">
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t("close_menu") : t("open_menu")}
            >
              <svg
                className="h-6 w-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
    </header>
  );
};

export default Header;
