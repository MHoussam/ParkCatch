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
import { setUser, setUserToken } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputValues, setInputValues] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [eye, setEye] = useState(visible);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          email: inputValues['Email'],
          password: inputValues['Password'],
        }
        const response = await axios.post("http://localhost:8000/api/login", dataForm);
    
        const userData = response.data.data;
        const userToken = response.data.data.token;
    if(response.data.data.role != 3){
      const userDataJSON = JSON.stringify(userData);
      const userTokenJSON = JSON.stringify(userToken);
      
      localStorage.setItem("userData", userDataJSON);
      localStorage.setItem("userToken", userTokenJSON); 
          dispatch(setUser(userData));
          dispatch(setUserToken(userToken));

          navigate("/Home");
    }
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

    const handleInputChange = (label, value) => {
      setInputValues((prevInputValues) => {
        const updatedInputValues = { ...prevInputValues, [label]: value };
        return updatedInputValues;
      });
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
            value={inputValues["Email"]}
            state={inputValues}
            classProp='loginInput'
            onChange={(newValue) => handleInputChange("Email", newValue)}
        />
          <div className="password-input width-100 flex">
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={inputValues["Password"]}
            state={inputValues}
            classProp='loginInput'
            onChange={(newValue) => handleInputChange("Password", newValue)}
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
