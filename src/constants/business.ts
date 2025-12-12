import type { BusinessLine, TargetMarket } from "../types";
import type { Slide } from "../types";

export const BUSINESS_LINES: BusinessLine[] = [
  {
    title: "Peternakan Ayam Kampung",
    description:
      "Spesialis budidaya dan suplai ayam kampung berkualitas tinggi dengan sistem peternakan modern dan higienis.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600&auto=format&fit=crop",
    link: "/lini-bisnis",
  },
] as const;

export const TARGET_MARKETS: TargetMarket[] = [
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
  {
    emoji: "🌍",
    title: "Ekspor",
    desc: "Target pasar premium dan health-conscious di tingkat global dengan kualitas super.",
  },
] as const;

export const businessLine: Slide[] = [
  {
    url: "/src/assets/ayam/ayam5.jpeg",
    alt: "ayam1",
  },
  {
    url: "/src/assets/ayam/ayam6.jpeg",
    alt: "ayam1",
  },
  {
    url: "/src/assets/ayam/ayam7.jpeg",
    alt: "ayam1",
  },
  {
    url: "/src/assets/ayam/ayam3.jpg",
    alt: "ayam1",
  },
] as const;
