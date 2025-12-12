import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ALBUMS, GALLERY_TABS } from "../../constants";
import type { AlbumType } from "../../constants";
import { useTranslation } from "react-i18next";

const GalleryGrid = () => {
  const { t } = useTranslation();
  const [activeAlbum, setActiveAlbum] = useState<AlbumType>("peternakan");
  const activeAlbumData = GALLERY_ALBUMS[activeAlbum];
  const galleryData = t("gallery.tabs", { returnObjects: true }) as Record<
    string,
    string
  >;
  const albumsData = t("gallery.albums", { returnObjects: true }) as Record<
    string,
    { title: string; description: string }
  >;

  return (
    <>
      {/* Filter/Tab Album */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {GALLERY_TABS.map((tab, index) => (
          <motion.button
            key={tab.key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveAlbum(tab.key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer ${
              activeAlbum === tab.key
                ? "bg-neutral-700 text-white shadow-lg"
                : "bg-gray-100 text-boen-text hover:bg-gray-200"
            }`}
          >
            {galleryData[tab.key]}
          </motion.button>
        ))}
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
            {albumsData[activeAlbum as string]?.title}
          </h2>
          <p className="text-gray-600">
            {albumsData[activeAlbum as string]?.description}
          </p>
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
    </>
  );
};

export default GalleryGrid;
