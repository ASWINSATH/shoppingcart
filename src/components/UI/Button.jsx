import React from "react";
import "../styles/style.css";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button className="btn" onClick={onClick}>{name}</button>
    </div>
  )

};

export default Button;
