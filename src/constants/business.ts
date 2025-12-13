import type { Slide } from "../types";
import ayam3 from "../assets/ayam/ayam3.jpg";
import ayam5 from "../assets/ayam/ayam5.jpeg";
import ayam6 from "../assets/ayam/ayam6.jpeg";
import ayam7 from "../assets/ayam/ayam7.jpeg";

export const businessLine: Slide[] = [
  {
    url: ayam5,
    alt: "ayam1",
  },
  {
    url: ayam6,
    alt: "ayam2",
  },
  {
    url: ayam7,
    alt: "ayam3",
  },
  {
    url: ayam3,
    alt: "ayam4",
  },
] as const;
