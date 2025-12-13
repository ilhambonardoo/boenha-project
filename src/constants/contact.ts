import type { CompanyInfo, SocialLinks, OperatingHours } from "../types";

export const COMPANY_INFO: CompanyInfo = {
  name: "CV. Boenhaz Makmur Utama",
  tagline: "Kualitas dan Kepercayaan di Setiap Lini Usaha",
  address: "Jl. Raya Contoh No. 123",
  phone: "+6282315403127",
  email: "boenhamakmurutama@gmail.com",
  whatsapp: "+6282315403127",
} as const;

export const SOCIAL_LINKS: SocialLinks = {
  whatsapp: `https://wa.me/${COMPANY_INFO.whatsapp.replace(
    /\D/g,
    ""
  )}?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20ayam%20kampung%20Anda.`,
  email: `mailto:${COMPANY_INFO.email}`,
  phone: `tel:${COMPANY_INFO.phone}`,
  facebook: "https://www.facebook.com/profile.php?id=61584727112231",
  instagram:
    "https://www.instagram.com/boenhamakmurutama?igsh=Nmc5MTYycTM3am5u&utm_source=qr",
  tiktok: "https://www.tiktok.com/@boenha?_r=1&_t=ZS-922peobfYcEShoope",
  shopee: "https://shopee.co.id/user/account/profile",
} as const;

export const OPERATING_HOURS: OperatingHours[] = [
  { day: "Senin - Jumat", time: "08:00 - 17:00 WIB" },
  { day: "Sabtu", time: "08:00 - 12:00 WIB" },
  { day: "Minggu & Libur", time: "Tutup" },
] as const;
