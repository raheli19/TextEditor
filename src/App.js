import React, { useState,useEffect } from "react";
import "./App.css";
import TextDisplay from "./components/TextDisplay";
import Keypad from "./components/Keypad";
import Editor from "./components/Editor";

function App() {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");
  const [fontColor, setFontColor] = useState("#FFFFFF");
   const [fontFamilyAll, setFontFamilyAll] = useState("Arial");
   const [fontSizeAll, setFontSizeAll] = useState("16px");
   const [fontColorAll, setFontColorAll] = useState("#FFFFFF");
  const [applyStylesToAll, setApplyStylesToAll] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [uppercaseAll, setUppercaseAll] = useState(false);
  const [delet,setDelet]=useState(false);
  const [clearAll, setClearAll] = useState(false);
   const [undo, setUndo] = useState(false);
   const [save, setSave] = useState(false);


   const applyStylesToAllContent = (styles) => {
     setApplyStylesToAll(true);
     setFontFamilyAll(styles.fontFamily || fontFamilyAll);
     setFontSizeAll(styles.fontSize || fontSizeAll);
     setFontColorAll(styles.fontColor || fontColorAll);
   };

   useEffect(() => {
     setApplyStylesToAll(false);
   }, [fontFamilyAll, fontSizeAll, fontColorAll]);


  return (
    <div className="App">
      <div className="container">
        <Editor
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontColor={fontColor}
          setFontColor={setFontColor}
          fontFamilyAll={fontFamilyAll}
          setFontFamilyAll={setFontFamilyAll}
          fontSizeAll={fontSizeAll}
          setFontSizeAll={setFontSizeAll}
          fontColorAll={fontColorAll}
          setFontColorAll={setFontColorAll}
          applyStylesToAll={applyStylesToAllContent}
          uppercase={uppercase}
          setUppercase={setUppercase}
          uppercaseAll={uppercaseAll}
          setUppercaseAll={setUppercaseAll}
          delet={delet}
          setDelet={setDelet}
          clearAll={clearAll}
          setClearAll={setClearAll}
          undo={undo}
          setUndo={setUndo}
        />
        <TextDisplay
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontColor={fontColor}
          uppercase={uppercase}
          fontSizeAll={fontSizeAll}
          fontColorAll={fontColorAll}
          fontFamilyAll={fontFamilyAll}
          uppercaseAll={uppercaseAll}
          applyStylesToAll={applyStylesToAll}
          delet={delet}
          clearAll={clearAll}
          undo={undo}
          save={save}
        />
        <Keypad
          uppercase={uppercase}
          fontFamily={fontFamily}
          fontColor={fontColor}
          fontSize={fontSize}
          setSave={setSave}
          save={save}
        />
      </div>
    </div>
  );
}

export default App;
