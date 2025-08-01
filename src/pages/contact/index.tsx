import { useTranslation } from "react-i18next";
import Card from "../../components/ui/card";
import Typography from "../../components/ui/typography";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex  items-center justify-center px-4 gap-10">
      <Card className="bg-white text-black w-2xl h-1/3">
        <Typography variant="h2" className="text-3xl">
          {t("contact")}
        </Typography>
        <Typography variant="p">{t("contact_description")}</Typography>
      </Card>
    </div>
  );
};

export default Contact;
