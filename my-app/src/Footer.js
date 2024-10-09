import React from "react";

const Footer = ({ currentLanguage, setLanguage }) => {
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        {currentLanguage === "en" ? "Made by MindX 🔥" : "Làm bởi MindX 🔥"}
      </h3>
      <div>
        <span>
          {currentLanguage === "en" ? "Available on:" : "Có mặt trên:"}
        </span>
        <span
          className={`languague-picker ${
            currentLanguage === "vi" ? "selected" : ""
          }`}
          onClick={() => handleLanguageChange("vi")}
          style={{
            cursor: "pointer",
            opacity: currentLanguage === "vi" ? 1 : 0.2,
          }}
        >
          🇻🇳
        </span>
        <span
          className={`languague-picker ${
            currentLanguage === "en" ? "selected" : ""
          }`}
          onClick={() => handleLanguageChange("en")}
          style={{
            cursor: "pointer",
            opacity: currentLanguage === "en" ? 1 : 0.2,
          }}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
