import { Link } from "react-router-dom";
import SwiperSlider from "../../components/SwiperSlider";
import { HiBriefcase, HiShieldCheck } from "react-icons/hi";
import { HiBanknotes, HiTrophy } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: "Kualitas Premium",
    description: "Ayam sehat dan pakan alami berkualitas tinggi",
    icon: HiTrophy,
  },
  {
    name: "Higienis & Halal",
    description: "Proses pemotongan terstandar dan terjamin halal",
    icon: HiShieldCheck,
  },
  {
    name: "Harga Kompetitif",
    description: "Harga terbaik langsung dari peternak",
    icon: HiBanknotes,
  },
  {
    name: "Layanan Terpadu",
    description: "Melayani berbagai kebutuhan dengan solusi lengkap",
    icon: HiBriefcase,
  },
];

const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1000&auto=format&fit=crop",
    alt: "Peternakan Ayam Kampung",
  },
  {
    url: "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=1000&auto=format&fit=crop",
    alt: "Ayam Kampung Sehat",
  },
];

const businessLines = [
  {
    title: "Peternakan Ayam Kampung",
    description:
      "Spesialis budidaya dan suplai ayam kampung berkualitas tinggi dengan sistem peternakan modern dan higienis.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600&auto=format&fit=crop",
    link: "/lini-bisnis",
  },
  {
    title: "[Bisnis Lain 1]",
    description: "Deskripsi bisnis lain yang sedang dikembangkan.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop",
    link: "/lini-bisnis",
  },
  {
    title: "[Bisnis Lain 2]",
    description: "Deskripsi bisnis lain yang sedang dikembangkan.",
    image:
      "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=600&auto=format&fit=crop",
    link: "/lini-bisnis",
  },
];

const testimonials = [
  {
    name: "Bapak Ahmad",
    role: "Pedagang Pasar",
    text: "Sudah bertahun-tahun bekerja sama dengan Boenhaz. Kualitas ayam kampungnya selalu konsisten dan segar.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Ibu Sari",
    role: "Pemilik Restoran",
    text: "Pelayanan cepat dan responsif. Ayam kampung dari Boenhaz selalu menjadi pilihan utama untuk menu restoran kami.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Bapak Rudi",
    role: "Pemilik Katering",
    text: "Kualitas produk dan pelayanan sangat memuaskan. Recommended untuk yang mencari supplier ayam kampung terpercaya.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const HomePage: React.FC = () => {
  const whatsappNumber = "6281234567890";
  const whatsappMessage =
    "Halo, saya tertarik dengan produk ayam kampung Anda.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-boen-primary/10 to-boen-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-boen-text leading-tight"
              >
                Selamat Datang di Boenhaz Makmur Utama
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
              >
                Supplier Ayam Kampung Segar & Berkualitas
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-lg"
              >
                Menyediakan ayam kampung berkualitas tinggi dengan standar
                higienis dan halal untuk memenuhi kebutuhan bisnis Anda.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                  to="/produk"
                  className="bg-boen-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
                >
                  Lihat Produk Kami
                </Link>
                <Link
                  to="/kontak"
                  className="bg-boen-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
                >
                  Hubungi Kami
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full"
            >
              <SwiperSlider slides={heroSlides} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
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
              Keunggulan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kenapa memilih kami?
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-boen-primary/10 p-4 rounded-full">
                    <feature.icon className="text-boen-primary" size={48} />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-boen-text mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perkenalan Lini Bisnis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-boen-text mb-4">
              Lini Bisnis Kami
            </h2>
            <p className="text-xl text-gray-600">
              Solusi lengkap untuk berbagai kebutuhan bisnis Anda
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessLines.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Link
                  to={business.link}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all block"
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
                    <h3 className="text-xl font-bold text-boen-text mb-2">
                      {business.title}
                    </h3>
                    <p className="text-gray-600">{business.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Pelanggan */}
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
              Testimoni Pelanggan
            </h2>
            <p className="text-xl text-gray-600">
              Apa kata pelanggan tentang kami
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
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-boen-text">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Penutup */}
      <section className="py-20 bg-gradient-to-r from-boen-primary to-boen-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-12 text-center shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-boen-text mb-4"
            >
              Siap Memenuhi Kebutuhan Ayam Kampung Anda?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 mb-8"
            >
              Diskusikan kebutuhan Anda dengan tim kami sekarang
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
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp size={24} />
              WhatsApp Sekarang
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
