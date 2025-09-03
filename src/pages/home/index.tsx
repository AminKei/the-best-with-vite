import { useTranslation } from "react-i18next";
import Typography from "../../components/ui/typography";
import Card from "../../components/ui/card";
import Button from "../../components/ui/button";
import React from "react";

const Home = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 gap-10">
      <Card className="bg-white text-black w-2xl h-1/3">
        <Typography>{t("description")}</Typography>
      </Card>
      <Button
        onClick={handleClick}
        variant="primary"
        size="lg"
        loading={isLoading}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Home;
