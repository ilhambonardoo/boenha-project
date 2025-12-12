import type { Testimonial } from "../types";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Bapak Ahmad",
    role: "Pedagang Pasar",
    text: "Sudah bertahun-tahun bekerja sama dengan Boenhaz. Kualitas ayam kampungnya selalu konsisten dan segar.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Ibu Sari",
    role: "Pemilik Restoran",
    text: "Pelayanan cepat dan responsif. Ayam kampung dari Boenhaz selalu menjadi pilihan utama untuk menu restoran kami.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Bapak Rudi",
    role: "Pemilik Katering",
    text: "Kualitas produk dan pelayanan sangat memuaskan. Recommended untuk yang mencari supplier ayam kampung terpercaya.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
] as const;
