import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEraser, faUndo } from "@fortawesome/free-solid-svg-icons";

const Editor_Part3 = ({delet,setDelet,clearAll,setClearAll,undo,setUndo}) => {
  
  return (
    <div className="special_actions">
      <button
        className="delLast"
        onClick={(e) => setDelet(!delet)}
        title="Delete Last"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button
        className="clearAll"
        onClick={(e) => setClearAll(!clearAll)}
        title="Clear All"
      >
        <FontAwesomeIcon icon={faEraser} />
      </button>
      <button className="undo" onClick={(e) => setUndo(!undo)} title="Undo">
        <FontAwesomeIcon icon={faUndo} />
      </button>
    </div>
  );
};

export default Editor_Part3;
