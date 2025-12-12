import { motion } from "framer-motion";

const ProductPageTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-boen-text mb-4">
        Produk Unggulan Ayam Kampung
      </h1>
      <p className="text-xl text-gray-600">
        Kualitas Premium untuk Kebutuhan Bisnis Anda
      </p>
    </motion.div>
  );
};

export default ProductPageTitle;
