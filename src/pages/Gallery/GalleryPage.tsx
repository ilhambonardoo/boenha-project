import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ayam1 from "../../assets/ayam/ayam1.jpg";
import ayam2 from "../../assets/ayam/ayam2.jpg";
import ayam3 from "../../assets/ayam/ayam3.jpg";

type AlbumType = "peternakan" | "proses" | "distribusi";

const GalleryPage = () => {
  const [activeAlbum, setActiveAlbum] = useState<AlbumType>("peternakan");

  const albums = {
    peternakan: {
      title: "Peternakan Kami",
      description: "Foto kandang dan ayam kampung sehat di peternakan kami",
      images: [
        {
          url: ayam1,
          alt: "Kandang Ayam Kampung",
        },
        {
          url: ayam2,
          alt: "Ayam Kampung Sehat",
        },
        {
          url: ayam3,
          alt: "Peternakan Modern",
        },
        {
          url: "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=800&auto=format&fit=crop",
          alt: "Ayam Kampung Sehat",
        },
        {
          url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
          alt: "Peternakan Modern",
        },
        {
          url: "https://images.unsplash.com/photo-1606926634666-8b3bb3b2bd2f?q=80&w=800&auto=format&fit=crop",
          alt: "Ayam Kampung Berkualitas",
        },
        {
          url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
          alt: "Kandang Higienis",
        },
        {
          url: "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=800&auto=format&fit=crop",
          alt: "Ayam Kampung Sehat",
        },
      ],
    },
    proses: {
      title: "Proses & Produk",
      description: "Foto proses pemotongan dan packaging produk",
      images: [
        {
          url: "https://images.unsplash.com/photo-1606926634666-8b3bb3b2bd2f?q=80&w=800&auto=format&fit=crop",
          alt: "Proses Pemotongan",
        },
        {
          url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
          alt: "Produk Siap Kirim",
        },
        {
          url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
          alt: "Packaging Produk",
        },
        {
          url: "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=800&auto=format&fit=crop",
          alt: "Kontrol Kualitas",
        },
        {
          url: "https://images.unsplash.com/photo-1606926634666-8b3bb3b2bd2f?q=80&w=800&auto=format&fit=crop",
          alt: "Produk Higienis",
        },
        {
          url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
          alt: "Proses Produksi",
        },
      ],
    },
    distribusi: {
      title: "Distribusi",
      description: "Foto proses pengiriman dan distribusi produk",
      images: [
        {
          url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
          alt: "Pengiriman Produk",
        },
        {
          url: "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=800&auto=format&fit=crop",
          alt: "Kendaraan Distribusi",
        },
        {
          url: "https://images.unsplash.com/photo-1606926634666-8b3bb3b2bd2f?q=80&w=800&auto=format&fit=crop",
          alt: "Tim Distribusi",
        },
        {
          url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
          alt: "Proses Pengiriman",
        },
        {
          url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
          alt: "Distribusi Terpercaya",
        },
        {
          url: "https://images.unsplash.com/photo-1593111774240-d529f12cf8f8?q=80&w=800&auto=format&fit=crop",
          alt: "Layanan Cepat",
        },
      ],
    },
  };

  const activeAlbumData = albums[activeAlbum];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Judul Halaman */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-boen-text mb-4">
          Galeri
        </h1>
        <p className="text-xl text-gray-600">
          Dokumentasi Kegiatan & Produk Kami
        </p>
      </motion.div>

      {/* Filter/Tab Album */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {(["peternakan", "proses", "distribusi"] as AlbumType[]).map(
          (album, index) => (
            <motion.button
              key={album}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveAlbum(album)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                activeAlbum === album
                  ? "bg-neutral-700 text-white shadow-lg"
                  : "bg-gray-100 text-boen-text hover:bg-gray-200"
              }`}
            >
              {album === "peternakan"
                ? "Peternakan Kami"
                : album === "proses"
                ? "Proses & Produk"
                : "Distribusi"}
            </motion.button>
          )
        )}
      </motion.div>

      {/* Deskripsi Album Aktif */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAlbum}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-boen-text mb-2">
            {activeAlbumData.title}
          </h2>
          <p className="text-gray-600">{activeAlbumData.description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Grid Foto Masonry */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAlbum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {activeAlbumData.images.map((image, index) => (
            <motion.div
              key={`${activeAlbum}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid mb-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-auto">
                <motion.img
                  src={image.url}
                  alt={image.alt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Lihat lebih lanjut atau hubungi kami untuk informasi lebih detail
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/produk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-green-500 text-boen-accent px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Lihat Produk
            </motion.a>
            <motion.a
              href="/kontak"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Hubungi Kami
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default GalleryPage;

