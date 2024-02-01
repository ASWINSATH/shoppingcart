import React from "react";
import "../styles/style.css";

function Input({ label, value, setValue, type, placeholder, tabIndex }) {
  return (
    <div className="card">
      <label >{label}</label>
      <br/>
      <input
      className="input"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
    </div>
  );
}

export default Input;
