import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const ProductPage = () => {
  const whatsappNumber = "6281234567890";
  const whatsappMessage = "Halo, saya tertarik dengan produk ayam kampung Anda.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const products = [
    {
      id: 1,
      name: "Ayam Kampung Hidup",
      description: "Siap suplai untuk pedagang pasar, restoran, katering, dan berbagai kebutuhan bisnis Anda.",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
      specifications: [
        "Tersedia bobot 0,8 kg - 1,5 kg",
        "Ayam sehat dan aktif",
        "Pakan alami berkualitas tinggi",
        "Sertifikasi halal",
      ],
      ctaText: "Hubungi untuk Stok & Harga",
      ctaLink: whatsappUrl,
    },
    {
      id: 2,
      name: "Ayam Kampung Potong (Karkas)",
      description: "Dipotong segar, dijamin Halal dan Higienis. Siap untuk berbagai kebutuhan kuliner Anda.",
      image: "https://images.unsplash.com/photo-1606926634666-8b3bb3b2bd2f?q=80&w=800&auto=format&fit=crop",
      specifications: [
        "Karkas Utuh",
        "Potong 4/8/10",
        "Segar (Fresh)",
        "Beku (Frozen)",
      ],
      ctaText: "Pesan via WhatsApp",
      ctaLink: whatsappUrl,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Judul Halaman */}
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

      {/* Grid Produk */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            {/* Foto Produk */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-video overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Konten Produk */}
            <div className="p-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                className="text-2xl md:text-3xl font-bold text-boen-text mb-4"
              >
                {product.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="text-gray-600 leading-relaxed mb-6"
              >
                {product.description}
              </motion.p>

              {/* Spesifikasi */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-boen-text mb-3">
                  Spesifikasi:
                </h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, specIndex) => (
                    <motion.li
                      key={specIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + 0.4 + specIndex * 0.05,
                      }}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-boen-primary mt-1">✓</span>
                      <span>{spec}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.a
                href={product.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
              >
                <FaWhatsapp size={20} />
                {product.ctaText}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Informasi Tambahan */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-boen-primary/10 to-boen-secondary/10 rounded-2xl p-8 md:p-12 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-boen-text mb-6 text-center">
          Mengapa Memilih Produk Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              emoji: "🐔",
              title: "Kualitas Premium",
              desc: "Ayam kampung sehat dengan standar kualitas terbaik",
            },
            {
              emoji: "✓",
              title: "Halal & Higienis",
              desc: "Proses pemotongan terstandar dan dijamin halal",
            },
            {
              emoji: "🚚",
              title: "Pengiriman Cepat",
              desc: "Layanan pengiriman yang cepat dan terpercaya",
            },
          ].map((item, index) => (
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
              <p className="text-gray-600 text-sm">{item.desc}</p>
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
        className="mt-20 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-green-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Tertarik dengan Produk Kami?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl mb-6 opacity-90"
          >
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik
          </motion.p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            <FaWhatsapp size={24} />
            WhatsApp Sekarang
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ProductPage;

