import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Judul Halaman */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-boen-text mb-4">
          Tentang Kami
        </h1>
        <p className="text-base sm:text-xl text-gray-600 px-2">
          Mengenal CV. Boenhaz Makmur Utama Lebih Dekat
        </p>
      </motion.div>

      {/* Cerita Singkat */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-boen-text mb-6"
        >
          Cerita Singkat
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100"
        >
          <p className="text-gray-700 leading-relaxed mb-4 break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-gray-700 leading-relaxed break-words">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </motion.div>
      </motion.section>

      {/* Visi & Misi */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "Visi",
              gradient: "from-boen-primary/10 to-boen-primary/5",
              border: "border-boen-primary/20",
            },
            {
              title: "Misi",
              gradient: "from-boen-secondary/10 to-boen-secondary/5",
              border: "border-boen-secondary/20",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg p-6 sm:p-8 border ${item.border}`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-boen-text mb-6">
                {item.title}
              </h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded"
              >
                <p className="text-gray-600 italic break-words">
                  <strong>Menunggu terbit</strong> - {item.title} perusahaan
                  sedang dalam proses finalisasi.
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Legalitas */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-boen-text mb-6"
        >
          Legalitas
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100"
        >
          <div className="space-y-6">
            {[
              {
                title: "Nama CV",
                value: "CV. Boenhaz Makmur Utama",
                placeholder: null,
              },
              {
                title: "NIB (Nomor Induk Berusaha)",
                value: "1234567890123456",
                placeholder: "(Placeholder)",
              },
              {
                title: "NPWP (Nomor Pokok Wajib Pajak)",
                value: "12.345.678.9-012.345",
                placeholder: "(Placeholder)",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={index < 2 ? "border-b border-gray-200 pb-6" : ""}
              >
                <h3 className="text-lg font-semibold text-boen-text mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg break-words">
                  {item.value}{" "}
                  {item.placeholder && (
                    <span className="text-sm text-gray-500">
                      {item.placeholder}
                    </span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Nilai-Nilai Perusahaan */}
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
          className="text-2xl sm:text-3xl font-bold text-boen-text mb-6"
        >
          Nilai-Nilai Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Kualitas",
              desc: "Selalu mengutamakan kualitas produk dan layanan terbaik untuk pelanggan.",
            },
            {
              title: "Kepercayaan",
              desc: "Membangun kepercayaan melalui integritas dan komitmen dalam setiap transaksi.",
            },
            {
              title: "Inovasi",
              desc: "Terus berinovasi untuk memberikan solusi terbaik bagi kebutuhan bisnis Anda.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 text-center"
            >
              <h3 className="text-lg sm:text-xl font-bold text-boen-text mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base break-words">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
