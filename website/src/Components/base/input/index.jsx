import React from "react";
import "./styles.css";

const Input = ({ text, type, placeholder, value, state, onChange, classProp }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    console.log(newValue); 
  };

  console.log({state}[`${value}`])

  const className = `input width-60 ${classProp || ''}`;
  return (
    <div className="inputContainer width-100 flex column center">
      <h4>{text}</h4>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
};

export default Input;
