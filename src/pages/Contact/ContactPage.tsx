import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "6285884153418";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name} (${formData.phone}). ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          Hubungi Kami
        </h1>
        <p className="text-xl text-gray-600">
          Kami siap membantu memenuhi kebutuhan bisnis Anda
        </p>
      </motion.div>

      {/* Layout 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Kolom Kiri: Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-boen-text mb-6">
              Informasi Kontak
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan hubungi kami melalui berbagai channel komunikasi di bawah
              ini. Tim kami siap melayani Anda dengan cepat dan responsif.
            </p>
          </motion.div>

          {/* Detail Kontak */}
          <div className="space-y-6">
            {[
              {
                icon: FaMapMarkerAlt,
                bgClass: "bg-boen-primary/10",
                textClass: "text-boen-primary",
                title: "Alamat",
                content: (
                  <>
                    Jl. Raya Contoh No. 123<br />
                    Kec. Contoh, Kota Contoh<br />
                    Provinsi 12345
                  </>
                ),
              },
              {
                icon: FaEnvelope,
                bgClass: "bg-boen-secondary/10",
                textClass: "text-boen-secondary",
                title: "Email",
                content: (
                  <a
                    href="mailto:info@boenhazmakmur.com"
                    className="text-gray-600 text-sm hover:text-boen-accent transition-colors"
                  >
                    info@boenhazmakmur.com
                  </a>
                ),
              },
              {
                icon: FaPhone,
                bgClass: "bg-boen-accent/10",
                textClass: "text-boen-accent",
                title: "Telepon",
                content: (
                  <a
                    href="tel:+6281234567890"
                    className="text-gray-600 text-sm hover:text-boen-accent transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                ),
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${contact.bgClass} p-3 rounded-lg`}
                >
                  <contact.icon className={contact.textClass} size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-boen-text mb-1">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {contact.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tombol WhatsApp Besar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-6"
          >
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl w-full justify-center"
            >
              <FaWhatsapp size={24} />
              WhatsApp Kami
            </motion.a>
          </motion.div>

          {/* Google Maps Embed (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-6"
          >
            <h3 className="font-semibold text-boen-text mb-4">Lokasi Kami</h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6391103452944!2d-122.41941548468892!3d37.77492927975899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CV. Boenhaz Makmur Utama"
              ></iframe>
            </motion.div>
            <p className="text-xs text-gray-500 mt-2 text-center italic">
              *Ganti dengan embed Google Maps lokasi sebenarnya
            </p>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Formulir Kontak */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-boen-text mb-6"
          >
            Kirim Pesan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 mb-8"
          >
            Isi formulir di bawah ini dan kami akan menghubungi Anda melalui
            WhatsApp.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-boen-text mb-2"
              >
                Nama *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-boen-accent focus:ring-2 focus:ring-boen-accent/20 outline-none transition-colors"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-boen-text mb-2"
              >
                No. HP *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-boen-accent focus:ring-2 focus:ring-boen-accent/20 outline-none transition-colors"
                placeholder="Contoh: 081234567890"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-boen-text mb-2"
              >
                Kebutuhan / Pesan *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-boen-accent focus:ring-2 focus:ring-boen-accent/20 outline-none transition-colors resize-none"
                placeholder="Ceritakan kebutuhan Anda..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-600 cursor-pointer text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Kirim via WhatsApp
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xs text-gray-500 mt-4 text-center"
          >
            Dengan mengisi formulir ini, Anda akan diarahkan ke WhatsApp untuk
            melanjutkan percakapan dengan tim kami.
          </motion.p>
        </motion.div>
      </div>

      {/* Jam Operasional */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-boen-primary/10 to-boen-secondary/10 rounded-2xl p-8 md:p-12 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-boen-text mb-6 text-center">
          Jam Operasional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { day: "Senin - Jumat", time: "08:00 - 17:00 WIB" },
            { day: "Sabtu", time: "08:00 - 12:00 WIB" },
          ].map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg p-6 text-center shadow-md"
            >
              <h3 className="font-semibold text-boen-text mb-2">
                {schedule.day}
              </h3>
              <p className="text-gray-600">{schedule.time}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;

