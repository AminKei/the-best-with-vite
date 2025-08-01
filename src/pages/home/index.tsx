import { useTranslation } from "react-i18next";
import Typography from "../../components/ui/typography";
import Card from "../../components/ui/card";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex  items-center justify-center px-4 gap-10">
      <Card className="bg-white text-black w-2xl h-1/3">
        <Typography>{t("description")}</Typography>
      </Card>
    </div>
  );
};

export default Home;
