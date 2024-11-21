import "./ToggleLanguage.css";
import { useState } from "react";
import swedishFlagIcon from "../../assets/Sweden-flag.png";
import englishFlagIcon from "../../assets/England-flag.png";
export default function ToggleLanguage() {
  const [language, setLanguage] = useState("SE");
  const [isOpen, setIsOpen] = useState(false);

  const languageSwicher = () => {
    setLanguage((prevLang) => (prevLang === "SE" ? "EN" : "SE"));
    setIsOpen(false);
  };
  const toggleDropDown = () => {
    setIsOpen(true);
  };
  return (
    <section className="language_swicher">
      <div className="selected_language" onClick={toggleDropDown}>
        <img
          className="flag_icon"
          src={language === "SE" ? swedishFlagIcon : englishFlagIcon}
          alt={language === "SE" ? "Swedish Flag" : "English Flag"}
        />
        <span className="currency">SEK</span>
        <span className="separator">|</span>
        <span className="language">{language}</span>
        <span className="arrow_language">&#9662;</span>
      </div>

      {isOpen && (
        <div className="dropDown_menu">
          {language === "SE" ? (
            <div
              className="dropDown_item"
              onClick={() => languageSwicher("EN")}
            >
              <img
                src={englishFlagIcon}
                alt="Swedish Flag"
                className="flag_icon"
              />
              <span>EN</span>
            </div>
          ) : (
            <div
              className="dropDown_item"
              onClick={() => languageSwicher("SV")}
            >
              <img
                src={swedishFlagIcon}
                alt="England Flag"
                className="flag_icon"
              />
              <span>SV</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
