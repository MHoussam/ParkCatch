import React from "react";
import "./styles.css";

const Input = ({ type, placeholder, value, state, onChange }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    console.log(newValue); 
  };

  console.log({state}[`${value}`])
  return (
    <div className="width-100 flex center">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="input width-60"
      />
    </div>
  );
};

export default Input;
