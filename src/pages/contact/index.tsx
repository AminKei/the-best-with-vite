import Card from "../../components/ui/card";
import Typography from "../../components/ui/typography";
import Modal from "../../components/layout/modal";
import { useState } from "react";
import Button from "../../components/ui/button";
import { t } from "i18next";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen flex  items-center justify-center px-4 gap-10">
      <Card className="bg-white text-black w-2xl h-1/3">
        <Typography variant="h2" className="text-3xl">
          {t("contact")}
        </Typography>
        <Typography variant="p">{t("contact_description")}</Typography>
      </Card>
      <hr />
      <Button onClick={openModal}>
        this is a modal
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title=""
        footer={
          <>
            <Button
              onClick={() => {
                alert("Confirmed!");
                closeModal();
              }}
            >
              {t("confirm")}
            </Button>
            <Button variant="outline" onClick={closeModal}>
              {t("cancel")}
            </Button>
          </>
        }
        size="lg"
      >
        <video></video>
      </Modal>
    </div>
  );
};

export default Contact;
