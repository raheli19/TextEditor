import React, { useState } from "react";

const Editor_Part1 = ({
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  uppercase,
  setUppercase,
}) => {
    
  return (
    <div className="choosing">
      <select
        value={fontFamily}
        className="choose_font"
        onChange={(e) => setFontFamily(e.target.value)}
        title="Choose font"
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
        className="choose_size"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        title="Choose size"
      >
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="24px">24</option>
      </select>

      <button
        className={`choose_upLow ${uppercase ? "active" : ""}`}
        onClick={(e) => setUppercase(!uppercase)}
        title="Choose Up or Low"
      >
        Aa
      </button>

      <input
        type="color"
        className="choose_color"
        value={fontColor}
        onChange={(e) => setFontColor(e.target.value)}
        title="Choose color"
      />
    </div>
  );
};

export default Editor_Part1;
