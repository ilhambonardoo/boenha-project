import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LiniBisnisPage = () => {
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
          Lini Bisnis Kami
        </h1>
        <p className="text-xl text-gray-600">
          Solusi Lengkap untuk Berbagai Kebutuhan Bisnis Anda
        </p>
      </motion.div>

      {/* Bagian Utama: Peternakan Ayam Kampung */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-boen-primary/10 to-boen-secondary/10 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-boen-text mb-6"
              >
                Spesialis Budidaya & Suplai Ayam Kampung
              </motion.h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {[
                  "CV. Boenhaz Makmur Utama merupakan spesialis dalam budidaya dan suplai ayam kampung berkualitas tinggi. Kami memiliki sistem peternakan yang modern dengan standar higienis yang ketat untuk memastikan kualitas produk terbaik.",
                  "Tentang Pakan: Kami menggunakan pakan alami berkualitas tinggi yang dijamin aman dan sehat untuk pertumbuhan ayam kampung. Pakan yang digunakan diolah khusus untuk memastikan nutrisi optimal.",
                  "Tentang Kandang: Sistem kandang kami dirancang dengan baik, mengutamakan sirkulasi udara, kebersihan, dan kenyamanan ayam. Kandang dibersihkan secara rutin untuk menjaga higienisitas.",
                  "Tentang Manajemen: Manajemen peternakan kami dilakukan oleh tim yang berpengalaman dengan pemantauan berkala terhadap kesehatan dan pertumbuhan ayam.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {text.includes("Tentang") ? (
                      <>
                        <strong className="text-boen-text">
                          {text.split(":")[0]}:
                        </strong>{" "}
                        {text.split(":")[1]}
                      </>
                    ) : (
                      text
                    )}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop"
                alt="Peternakan Ayam Kampung"
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          </div>

          {/* Target Pasar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <h3 className="text-2xl font-bold text-boen-text mb-4">
              Target Pasar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🍽️",
                  title: "Restoran",
                  desc: "Menyediakan ayam kampung segar untuk kebutuhan menu restoran dan rumah makan.",
                },
                {
                  emoji: "🍱",
                  title: "Katering",
                  desc: "Suplai terpercaya untuk bisnis katering dan event organizer.",
                },
                {
                  emoji: "🏪",
                  title: "Pedagang Pasar",
                  desc: "Partner terpercaya untuk pedagang pasar tradisional dan modern.",
                },
              ].map((target, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                >
                  <h4 className="text-lg font-semibold text-boen-text mb-2">
                    {target.emoji} {target.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{target.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Bagian Lain */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-boen-text mb-8 text-center"
        >
          Lini Bisnis Lainnya
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
              title: "[Bisnis Lain 1]",
            },
            {
              image:
                "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=800&auto=format&fit=crop",
              title: "[Bisnis Lain 2]",
            },
          ].map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="aspect-video overflow-hidden"
              >
                <img
                  src={business.image}
                  alt={business.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-boen-text mb-3">
                  {business.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deskripsi singkat tentang bisnis lain yang sedang dikembangkan.
                  Informasi lebih lanjut akan segera tersedia.
                </p>
                <div className="mt-4">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                    className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    Coming Soon
                  </motion.span>
                </div>
              </div>
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
        className="mt-20 bg-amber-800 rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-4"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/kontak"
              className="inline-block bg-green-700 text-boen-accent px-8 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default LiniBisnisPage;

