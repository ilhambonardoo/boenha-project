import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="pt-6"
    >
      <h3 className="font-semibold text-boen-text mb-4">
        {t("contact.locationMap")}
      </h3>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7506717146557!2d106.8944849!3d-6.9564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6844d3c3c3c3c3%3A0x1!2sCV%20Boenha%20Makmur%20Utama!5e0!3m2!1sid!2sid!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi CV. Boenha Makmur Utama"
        ></iframe>
      </motion.div>
      <p className="text-xs text-gray-500 mt-2 text-center italic">
        {t("contact.mapPlaceholder")}
      </p>
    </motion.div>
  );
};

export default Location;
