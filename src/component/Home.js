import React from "react";
import Popup from "./Popup";
import { useState } from "react";
import "./style/Home.css";
import Mailer from "./Mailer";
import { ReactRecaptcha } from "react-recaptcha";

export default function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className="btn-popup-container">
        <button onClick={() => setButtonPopup(true)} className="contact-btn">
          Contact
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <Mailer />
        </Popup>
      </div>
    </>
  );
}
