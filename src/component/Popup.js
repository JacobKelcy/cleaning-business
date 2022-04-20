import React from "react";
import "./style/Popup.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={() => props.setTrigger(false)} className="close-btn">
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
