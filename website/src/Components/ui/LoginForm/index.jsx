import React, { useState } from "react";
import Input from "../../base/input";
import "./styles.css";
import Image from "../../base/image";
import logoPic from "../../../assets/images/logo.png";
import Button from "../../base/button";
import visible from "../../../assets/images/visible.png";
import notvisible from "../../../assets/images/notvisible.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [eye, setEye] = useState(visible);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    console.log(email);
    console.log(password);

    const togglePasswordVisibility = () => {
        if(!passwordVisible){
            setEye(notvisible)
        } else {
            setEye(visible)
        }

        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
      try {
        const dataForm = {
          email: email,
          password: password,
        }
        const response = await axios.post("http://127.0.0.1:8000/api/login", dataForm);
    
        const userToken = response.data.data.token;
    
        localStorage.setItem("userToken", userToken);    
        dispatch(setUserToken(userToken));

        navigate("/Home");
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
    

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
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(email) => setEmail(email.target.value)}
          />
          <div className="password-input flex">
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="passwordToggle pointer"
              onClick={togglePasswordVisibility}
            >
              <Image src={eye} alt="Toggle password visibility" className='eyeToggle'/>
            </button>
          </div>
        </div>
        <div className="loginButton width-100 flex center">
          <Button text="Login" onClick={handleLogin}/>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
