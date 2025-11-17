import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const change = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  const baseClass = "text-sm px-2 py-1 rounded hover:bg-white/10";
  const activeClass = "bg-amber-300 font-bold";
  const inactiveClass = "bg-white/20";

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => change("id")}
        className={`${baseClass} ${
          i18n.language === "id" ? activeClass : inactiveClass
        }`}
        aria-label="Pilih Bahasa Indonesia"
      >
        ID
      </button>
      <button
        onClick={() => change("en")}
        className={`${baseClass} ${
          i18n.language === "en" ? activeClass : inactiveClass
        }`}
        aria-label="Choose English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
