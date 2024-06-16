import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";

const Editor_Part2 = ({
    fontFamilyAll,
          setFontFamilyAll,
          fontSizeAll,
          setFontSizeAll,
          fontColorAll,
          setFontColorAll,
          setUppercaseAll,
uppercaseAll,
  applyStylesToAll,
}) => {

     const handleChangeFontFamily = (e) => {
       setFontFamilyAll(e.target.value);
       applyStylesToAll({ fontFamily: e.target.value });
     };

     const handleChangeFontSize = (e) => {
       setFontSizeAll(e.target.value);
       applyStylesToAll({ fontSize: e.target.value });
     };

     const handleChangeFontColor = (e) => {
       setFontColorAll(e.target.value);
       applyStylesToAll({ fontColor: e.target.value });
     };

  return (
    <div className="global_changes">
      <select
        className="font_all"
        value={fontFamilyAll}
        onChange={handleChangeFontFamily}
        title="Change font to all "
      >
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
        <option value="Impact">Impact</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
        <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
      </select>

      <select
        className="size_all"
        value={fontSizeAll}
        onChange={handleChangeFontSize}
        title="Change size to all "
      >
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="24px">24</option>
      </select>

      <button
        className={`up_low_all ${uppercaseAll ? "active" : ""}`}
        onClick={(e) => setUppercaseAll(!uppercaseAll)}
        title="Change up/low to all "
      >
        Aa
      </button>

      <input
        type="color"
        className="color_all"
        value={fontColorAll}
        onChange={handleChangeFontColor}
        title="Change color to all "
      />
    </div>
  );
};

export default Editor_Part2;
