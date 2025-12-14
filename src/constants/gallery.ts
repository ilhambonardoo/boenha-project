import type { GalleryAlbum, GalleryTab } from "../types";

import ayam3 from "../assets/ayam/ayam3.jpg";
import ayam4 from "../assets/ayam/ayam4.jpeg";
import ayam5 from "../assets/ayam/ayam5.jpeg";
import ayam6 from "../assets/ayam/ayam6.jpeg";
import ayam7 from "../assets/ayam/ayam7.jpeg";

export type AlbumType = "peternakan" | "proses" | "distribusi";

export const GALLERY_ALBUMS: Record<AlbumType, GalleryAlbum> = {
  peternakan: {
    images: [
      { url: ayam3, alt: "Peternakan Modern" },
      { url: ayam4, alt: "Ayam Kampung Sehat" },
      { url: ayam5, alt: "Peternakan Modern" },
      { url: ayam6, alt: "Ayam Kampung Berkualitas" },
      { url: ayam7, alt: "Kandang Higienis" },
    ],
  },
  proses: {
    images: [
      { url: ayam3, alt: "Packaging Produk" },
      { url: ayam4, alt: "Kontrol Kualitas" },
      { url: ayam5, alt: "Produk Higienis" },
      { url: ayam6, alt: "Proses Produksi" },
    ],
  },
  distribusi: {
    images: [
      { url: ayam3, alt: "Kendaraan Distribusi" },
      { url: ayam4, alt: "Tim Distribusi" },
      { url: ayam5, alt: "Proses Pengiriman" },
      { url: ayam6, alt: "Distribusi Terpercaya" },
      { url: ayam7, alt: "Layanan Cepat" },
    ],
  },
} as const;

export const GALLERY_TABS: GalleryTab[] = [
  { key: "peternakan" as AlbumType, label: "peternakan" },
  { key: "proses" as AlbumType, label: "proses" },
  { key: "distribusi" as AlbumType, label: "distribusi" },
] as const;
