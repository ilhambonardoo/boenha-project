import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "6281234567890"; // Placeholder
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-amber-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kolom 1: Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CV. Boenhaz Makmur Utama</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kualitas dan Kepercayaan di Setiap Lini Usaha
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang-kami"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/produk"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  to="/galeri"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Lini Bisnis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Lini Bisnis</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/lini-bisnis"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Peternakan Ayam Kampung
                </Link>
              </li>
              <li>
                <span className="text-gray-300 text-sm">[Bisnis Lain 1]</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">[Bisnis Lain 2]</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Info Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Jl. Raya Contoh No. 123<br />
                  Kota, Provinsi 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0" />
                <a
                  href="mailto:info@boenhazmakmur.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@boenhazmakmur.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-white text-sm">
            © {new Date().getFullYear()} CV. Boenhaz Makmur Utama. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
