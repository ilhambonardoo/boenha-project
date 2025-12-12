import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LiniBisnisCTA = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#f97316] rounded-2xl p-8 md:p-12 text-center text-white"
    >
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          {t("cta.interestedProduct")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl mb-6 opacity-90"
        >
          {t("cta.contactNow")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/kontak"
            className="inline-block  bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors"
          >
            {t("cta.contactUs")}
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LiniBisnisCTA;
