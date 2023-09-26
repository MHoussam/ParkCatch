import React from "react";
import Image from "../image";
import "./styles.css";

const Section = ({ text, icon, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="content flex align-items pointer" onClick={handleClick}>
      <Image src={icon} alt="" className="secIcon" />
      <h4>{text}</h4>
    </div>
  );
};

export default Section;
