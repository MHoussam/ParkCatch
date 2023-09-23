import React from "react";
import "./styles.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="width-100 flex center">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input width-60"
      />
    </div>
  );
};

export default Input;
