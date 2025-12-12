import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../constants";
import { useTranslation } from "react-i18next";

const ProductBenefits = () => {
  const { t } = useTranslation();
  const benefits = t("productBenefits", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    quality: { emoji: string; title: string; description: string };
    halal: { emoji: string; title: string; description: string };
    delivery: { emoji: string; title: string; description: string };
    organic: { emoji: string; title: string; description: string };
    nutritious: { emoji: string; title: string; description: string };
    fresh: { emoji: string; title: string; description: string };
  };

  const benefitsList = [
    benefits.quality,
    benefits.halal,
    benefits.delivery,
    benefits.organic,
    benefits.nutritious,
    benefits.fresh,
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-linear-to-br from-boen-primary/10 to-boen-secondary/10 rounded-2xl p-8 md:p-12 border border-gray-100 mb-20"
      >
        <h2 className="text-3xl font-bold text-boen-text mb-2 text-center">
          {benefits.title}
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg font-semibold">
          {benefits.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg p-6 text-center shadow-md"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="text-4xl mb-3"
              >
                {item.emoji}
              </motion.div>
              <h3 className="text-lg font-semibold text-boen-text mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-[#f97316] rounded-2xl p-8 md:p-12 text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
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
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            <FaWhatsapp size={24} />
            {t("cta.whatsAppNow")}
          </motion.a>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ProductBenefits;
