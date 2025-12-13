import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { NAV_LINKS, ROUTES } from "../../constants";
import LanguageSwitcher from "../../utils/Feature/LanguageSwitcher";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="h-16 w-full bg-white backdrop-blur-md fixed z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={ROUTES.HOME} className="shrink-0">
              <div className="text-2xl font-bold text-boen-secondary">
                <img src={logo} alt=" logo boenhaz" height={100} width={150} />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? "text-[#fc812b] font-bold"
                      : "text-black font-medium"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            <button
              className="md:hidden p-2 text-boen-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? " text-[#fc812b] font-bold"
                      : "text-black"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="px-4 pt-2 pb-4">
                <LanguageSwitcher />
              </div>
              <Link
                to={ROUTES.CONTACT}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 mt-2 bg-boen-accent text-white rounded-lg text-sm font-medium text-center hover:bg-orange-600 transition-colors"
              >
                {t("nav.contact")}
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
