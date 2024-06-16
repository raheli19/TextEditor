import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackspace,
  faGlobe,
  faLock,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const Keypad = ({ uppercase, fontFamily, fontColor, fontSize, save, setSave }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isCapsLock, setIsCapsLock] = useState(false);
  const [isEmojiKeyboardOpen, setIsEmojiKeyboardOpen] = useState(false);

  const handleKeyClick = (key) => {
      setSave(!save);
    const textArea = document.querySelector(".text-display");
    const currentContent = textArea.textContent;
    let updatedContent = currentContent;

    if (key === "Delete") {
      updatedContent = currentContent.slice(0, -1);
    } else {
      updatedContent += key;
    }

    const span = document.createElement("span");
     span.textContent = key;
     span.style.fontFamily = fontFamily;
     span.style.fontSize = fontSize;
     span.style.color = fontColor;
     span.style.textTransform = uppercase ? "uppercase" : "none";
    textArea.appendChild(span); 
  };

  const toggleLanguage = () => {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  };

  const toggleCapsLock = () => {
    setIsCapsLock((prevIsCapsLock) => !prevIsCapsLock);
  };
  const toggleEmojiKeyboard = () => {
    setIsEmojiKeyboardOpen(
      (prevIsEmojiKeyboardOpen) => !prevIsEmojiKeyboardOpen
    );
  };

  const englishRows = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "+"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", '"'],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "/"],
  ];

  const englishRowsCapital = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "+"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", '"'],
    ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "?", "/"],
  ];

  const hebrewRows = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"],
    ["/", "'", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "+"],
    ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", ",", '"'],
    ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ", ".", ";"],
  ];

  const languageRows = !isCapsLock
    ? isEnglish
      ? englishRows
      : hebrewRows
    : englishRowsCapital;
const [hover, setHover] = React.useState(false);
  return (
    <div className="virtual-keyboard" id="virtual-keyboard">
      {languageRows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <div
              key={key}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "50px",
                margin: "5px",
                border: "2px solid #FFDEAD",
                borderRadius: "10px",
                backgroundColor: hover ? "#CD853F" : "#240505", // Modern color scheme
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // More pronounced shadow for depth
                transition: "background-color 0.3s, transform 0.3s", // Smooth transition
                transform: hover ? "scale(1.1)" : "scale(1)", // Slightly increase size on hover
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </div>
          ))}
        </div>
      ))}

      <div className="keyboard-row">
        <div className="keyboard-key capslock-button" onClick={toggleCapsLock}>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <button
          className="keyboard-key language-toggle-button"
          onClick={toggleLanguage}
        >
          <FontAwesomeIcon icon={faGlobe} />
          {isEnglish ? "HE" : "EN"}
        </button>
        <div
          className="keyboard-key large-space"
          onClick={() => handleKeyClick(" ")}
        ></div>
        <div
          className="keyboard-key delete-button"
          onClick={() => handleKeyClick("Delete")}
        >
          <FontAwesomeIcon icon={faBackspace} />
        </div>
        <div
          className="keyboard-key emoji-keyboard-button"
          onClick={toggleEmojiKeyboard}
        >
          <FontAwesomeIcon icon={faSmile} />
        </div>
      </div>
      {isEmojiKeyboardOpen && (
        <div className="emoji-keyboard">
          {[
            ["😊", "😂", "😍", "😎", "😜", "😇", "😉", "😋", "😃", "😄", "😁"],
            ["😐", "😳", "😠", "😢", "😭", "😱", "😵", "😤", "😷", "😇", "😈"],
            ["😎", "😴", "😋", "😔", "😲", "🤢", "😵", "😷", "🤡", "🤠", "🤤"],
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="keyboard-row">
              {row.map((emoji, index) => (
                <span
                  key={index}
                  className="keyboard-key"
                  onClick={() => handleKeyClick(emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Keypad;
