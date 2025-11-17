import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const { t } = useTranslation();

  const navLinks = [
    { path: "/", key: "nav.home" },
    { path: "/tentang-kami", key: "nav.about" },
    { path: "/lini-bisnis", key: "nav.lini_bisnis" },
    { path: "/produk", key: "nav.products" },
    { path: "/galeri", key: "nav.gallery" },
    { path: "/kontak", key: "nav.contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="h-16 w-full bg-amber-800 backdrop-blur-md fixed z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-boen-secondary">
                Boenhaz
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-amber-300"
                      : "text-white hover:text-amber-200"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-boen-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-boen-accent text-neutral-500"
                      : "text-boen-text hover:bg-gray-100"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="px-4 pt-2 pb-4">
                <LanguageSwitcher />
              </div>
              <Link
                to="/kontak"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 mt-2 bg-boen-accent text-white rounded-lg text-sm font-medium text-center hover:bg-orange-600 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
