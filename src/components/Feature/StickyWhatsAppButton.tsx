import { FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../constants";

const StickyWhatsAppButton = () => {
  const whatsappUrl = SOCIAL_LINKS.whatsapp;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center w-16 h-16"
      aria-label="Hubungi via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default StickyWhatsAppButton;
