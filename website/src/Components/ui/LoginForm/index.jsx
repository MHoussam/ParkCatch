import React, { useState } from "react";
import Input from "../../base/input";
import "./styles.css";
import Image from "../../base/image";
import logoPic from "../../../assets/images/logo.png";
import Button from "../../base/button";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            <Input type="text" placeholder="Email" onChange={(email) => setEmail(email.target.value)}/>
            <Input type="password" placeholder="Password" />
        </div>
        <div className="loginButton width-100 flex center">
            <Button text='Login' />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
