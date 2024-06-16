import React from "react";
import Editor_Part1 from "./Editor_Part1";
import Editor_Part2 from "./Editor_Part2";
import Editor_Part3 from "./Editor_Part3";

function Editor({
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  uppercase,
  setUppercase,
  applyStylesToAll,
  fontFamilyAll,
  setFontFamilyAll,
  fontSizeAll,
  setFontSizeAll,
  fontColorAll,
  setFontColorAll,
  uppercaseAll,
  setUppercaseAll,
  delet,
  setDelet,
  clearAll,
  setClearAll,
  undo,
  setUndo,
}) {
  return (
    <div className="editor">
      <Editor_Part1
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        uppercase={uppercase}
        setUppercase={setUppercase}
      />
      <Editor_Part2
        fontFamilyAll={fontFamilyAll}
        setFontFamilyAll={setFontFamilyAll}
        fontSizeAll={fontSizeAll}
        setFontSizeAll={setFontSizeAll}
        fontColorAll={fontColorAll}
        setFontColorAll={setFontColorAll}
        applyStylesToAll={applyStylesToAll}
        uppercaseAll={uppercaseAll}
        setUppercaseAll={setUppercaseAll}
      />
      <Editor_Part3
        delet={delet}
        setDelet={setDelet}
        clearAll={clearAll}
        setClearAll={setClearAll}
        undo={undo}
        setUndo={setUndo}
      />
    </div>
  );
}

export default Editor;
