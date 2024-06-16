import React, { useRef, useEffect,useState } from "react";
import "./Style.css";

function TextDisplay({
  fontFamily,
  fontSize,
  fontColor,
  fontSizeAll,
  fontColorAll,
  fontFamilyAll,
  uppercaseAll,
  uppercase,
  delet,
  clearAll,
  undo,
  save,
}) {
  const editorRef = useRef(null);
  const [history, setHistory] = useState([]);

   const saveHistory = () => {
     const newContent = editorRef.current.innerHTML;
     setHistory((prevHistory) => {
       if (prevHistory[prevHistory.length - 1] !== newContent) {
         return [...prevHistory, newContent];
       }
       return prevHistory;
     });
   };

   const handleKeyPress = (e) => {
     saveHistory();
     const selection = window.getSelection();
     if (!selection.rangeCount) return;
     const range = selection.getRangeAt(0);
     const span = document.createElement("span");
     span.style.fontFamily = fontFamily;
     span.style.fontSize = fontSize;
     span.style.color = fontColor;
     span.style.textTransform = uppercase ? "uppercase" : "none";
     if (e.key === " ") {
       span.innerHTML = "&nbsp;";
     } else if (e.key === "Enter") {
       const br = document.createElement("br");
       range.deleteContents();
       range.insertNode(br);
       range.setStartAfter(br);
       range.collapse(true);
       selection.removeAllRanges();
       selection.addRange(range);
       e.preventDefault();
       return; // Early return to skip the rest of the span insertion for Enter
     } else {
       span.textContent = e.key;
     }

     range.deleteContents();
     range.insertNode(span);
     range.setStartAfter(span);
     range.collapse(true);
     selection.removeAllRanges();
     selection.addRange(range);
     e.preventDefault();
   };

  useEffect(() => {
   saveHistory();
  }, [fontSizeAll, fontColorAll, fontFamilyAll, uppercaseAll, delet, clearAll, save]);
  

  useEffect(() => {
    editorRef.current.addEventListener("keypress", handleKeyPress);
    return () => {
      editorRef.current.removeEventListener("keypress", handleKeyPress);
    };
  }, [fontFamily, fontSize, fontColor, uppercase]);

  useEffect(() => {
    const editor = editorRef.current;
    const spans = editor.querySelectorAll("span");

    spans.forEach((span) => {
      if (fontSizeAll) span.style.fontSize = fontSizeAll;
    });
  }, [fontSizeAll]);

  useEffect(() => {
    const editor = editorRef.current;
    const spans = editor.querySelectorAll("span");

    spans.forEach((span) => {
      if (fontColorAll) span.style.color = fontColorAll;
    });
  }, [fontColorAll]);

  useEffect(() => {
    const editor = editorRef.current;
    const spans = editor.querySelectorAll("span");

    spans.forEach((span) => {
      if (fontFamilyAll) span.style.fontFamily = fontFamilyAll;
    });
  }, [fontFamilyAll]);

  useEffect(() => {
    const editor = editorRef.current;
    const spans = editor.querySelectorAll("span");

    spans.forEach((span) => {
       if (uppercaseAll !== undefined)
         span.style.textTransform = uppercaseAll ? "uppercase" : "none";
    });
  }, [uppercaseAll]);

    useEffect(() => {
    const content = editorRef.current.innerHTML;
    const lastTagIndex = content.lastIndexOf("<span");

    if (lastTagIndex !== -1) {
      editorRef.current.innerHTML = content.slice(0, lastTagIndex);
    } else {
      editorRef.current.innerHTML = "";
    }
    }, [delet]);

    useEffect(() => {
       editorRef.current.innerHTML = "";
    }, [clearAll]);
    
     useEffect(() => {
         editorRef.current.innerHTML = history[history.length - 1] ?? "";
         const newHistory = history;
         newHistory.pop();
         setHistory(newHistory);
     }, [undo]);

  return (
    <div
      id="editor"
      ref={editorRef}
      className="text-display"
      contentEditable="true"
    >
    </div>
  );
}

export default TextDisplay;
