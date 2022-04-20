import React from "react";
import "./style/Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <h1>Header</h1>
      <div className="rightSideContainer">
        <div>contact</div>
        <div>signup</div>
      </div>
    </div>
  );
}
