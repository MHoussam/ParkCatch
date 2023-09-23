import React from "react";
import Image from "../image";
import styles from "./styles.css";

const Section = ({ text, icon, path }) => {
  return (
    <div className="content flex align-items pointer">
      <Image src={icon} alt="" className="secIcon" />
      <h3>{text}</h3>
    </div>
  );
};

export default Section;
