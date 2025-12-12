import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Array<{
    name: string;
    business: string;
    message: string;
    rating: number;
  }>;

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-boen-text mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("testimonials.subtitle")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.message}"
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="border-t border-gray-200 pt-4"
                >
                  <h4 className="font-bold text-boen-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.business}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
