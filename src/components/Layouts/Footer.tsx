import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import {
  COMPANY_INFO,
  SOCIAL_LINKS,
  FOOTER_QUICK_LINKS,
  BUSINESS_LINES_FOOTER,
  STYLES,
} from "../../constants";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-neutral-200 text-black mt-20 border-t-stone-900">
      <div className={`${STYLES.container} ${STYLES.sectionPadding}`}>
        <div className={STYLES.gridFourCols}>
          <div>
            <h3 className="text-2xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-black text-sm leading-relaxed">
              {t("footer.subtitle")}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 ">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={STYLES.linkDefault}>
                    {link.labelI18n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.businessLines")}
            </h4>
            <ul className="space-y-2">
              {BUSINESS_LINES_FOOTER.map((link) => (
                <li key={link.path || link.labelI18n}>
                  {link.path ? (
                    <Link to={link.path} className={STYLES.linkDefault}>
                      {link.labelI18n}
                    </Link>
                  ) : (
                    <span className="text-black text-sm">{link.labelI18n}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <span className="text-black text-sm">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0" />
                <a href={SOCIAL_LINKS.email} className={STYLES.linkDefault}>
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="shrink-0" />
                <a href={SOCIAL_LINKS.phone} className={STYLES.linkDefault}>
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300">
        <div className={`${STYLES.container} py-4`}>
          <p className="text-center text-gray-700 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
