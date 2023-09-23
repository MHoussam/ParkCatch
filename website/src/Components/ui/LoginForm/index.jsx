import React from "react";
import Input from "../../base/input";
import "./styles.css";
import Image from "../../base/image";
import logoPic from "../../../assets/images/logo.png";

const LoginForm = () => {
  return (
    <div className="width-50 flex center">
      <div className="loginCard border flex column align-items">
        <div className="logo flex center">
            <Image src={logoPic} alt="ParkCatch Logo" className="logoPic" />
        </div>
        <div className="welcome">
            <h3>Welcome Back</h3>
        </div>
        <div className="Inputs flex column">
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
