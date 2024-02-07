import React from "react";
import "../styles/style.css";

function Input({ label, value, setValues, type, placeholder, tabIndex,field }) {
  console.log(value);
  return (
    
    <div className="card">
      <label >{label}</label>
      <br/>
      <input
      className="input"
        type={type}
        value={value?.field}
        onChange={(e) => setValues({ ...value, [field]: e.target.value })}        
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
    </div>
  );
}

export default Input;
