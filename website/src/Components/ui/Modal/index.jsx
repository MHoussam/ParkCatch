import React from "react";
import "./styles.css";
import Button from "../../base/button";
import { clearSlots } from "../../../redux/slots/slotSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Modal = ({
  text,
  action,
  isOpen,
  onClose,
  content,
  inputValues,
  setInputValues,
}) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const close = () => {
    setInputValues([]);
    onClose();
  };

  const actions = {
    terminate: async () => {
      try {
        const token = await localStorage.getItem("userToken");
        const user = localStorage.getItem("userData");
        const userToken = JSON.parse(token);
        const userData = JSON.parse(user);
        const data = {
          staff_id: userData.id,
          parking_id: userData.parking_id,
          spot_id: parseInt(inputValues["spotNumber"], 10),
          reason: inputValues["terminationReason"],
          token: userToken,
        };

        const response = await axios.post(
          "http://127.0.0.1:8000/api/terminate",
          data
        );
        dispatch(clearSlots());
        setInputValues([]);
        onClose();
      } catch (error) {
        console.error("Error:", error);
      }
    },
    add: async () => {
      try {
        const token = await localStorage.getItem("userToken");
        const user = localStorage.getItem("userData");
        const userToken = JSON.parse(token);
        const userData = JSON.parse(user);
        const data = {
          staff_id: userData.id,
          parking_id: userData.parking_id,
          spot_id: parseInt(inputValues["spotNumber"]),
          token: userToken,
        };

        const response = await axios.post(
          "http://127.0.0.1:8000/api/addAvail",
          data
        );
        dispatch(clearSlots());
        setInputValues([]);
        onClose();
      } catch (error) {
      }
    },
    remove: async () => {
      try {
        const token = await localStorage.getItem("userToken");
        const user = localStorage.getItem("userData");
        const userToken = JSON.parse(token);
        const userData = JSON.parse(user);
        const data = {
          staff_id: userData.id,
          parking_id: userData.parking_id,
          spot_id: parseInt(inputValues["spotNumber"], 10),
          reason: inputValues["unavailabilityReason"],
          token: userToken,
        };

        const response = await axios.post(
          "http://127.0.0.1:8000/api/removeAvail",
          data
        );
        dispatch(clearSlots());
        setInputValues([]);
        onClose();
      } catch (error) {
      }
    },
    edit: async () => {
      try {
        const token = await localStorage.getItem("userToken");
        const user = localStorage.getItem("userData");
        const userToken = JSON.parse(token);
        const userData = JSON.parse(user);
        const data = {
          parking_id: userData.parking_id,
          price: inputValues["reservationPrice"],
          open_hour: inputValues["openingHour"],
          close_hour: inputValues["closingHour"],
          token: userToken,
        };

        const response = await axios.post(
          "http://127.0.0.1:8000/api/parkingDetails",
          data
        );
        setInputValues([]);
        onClose();
      } catch (error) {
        console.error("Error:", error);
      }
    },
    addSupervisor: async () => {
      try {
        const token = await localStorage.getItem("userToken");
        const user = localStorage.getItem("userData");
        const userToken = JSON.parse(token);
        const userData = JSON.parse(user);
        const data = {
          parking_id: userData.parking_id,
          first_name: inputValues["firstName"],
          last_name: inputValues["lastName"],
          email: inputValues["email"],
          password: inputValues["password"],
          token: userToken,
        };

        const response = await axios.post(
          "http://127.0.0.1:8000/api/addSupervisor",
          data
        );
        setInputValues([]);
        onClose();
      } catch (error) {
        console.error("Error:", error);
      }
    },
    removeSupervisor: async () => {
      try {
        const token = await localStorage.getItem("userToken");
        const user = localStorage.getItem("userData");
        const userToken = JSON.parse(token);
        const userData = JSON.parse(user);
        const data = {
          email: inputValues["email"],
          token: userToken,
        };

        const response = await axios.post(
          "http://127.0.0.1:8000/api/removeSupervisor",
          data
        );
        setInputValues([]);
        onClose();
      } catch (error) {
        console.error("Error:", error);
      }
    },
    ban: async () => {
      try {
        const token = await localStorage.getItem("userToken");
        const user = localStorage.getItem("userData");
        const userToken = JSON.parse(token);
        const userData = JSON.parse(user);
        const data = {
          email: inputValues["email"],
          reason: inputValues["banningReason"],
          token: userToken,
        };

        const response = await axios.post(
          "http://127.0.0.1:8000/api/ban",
          data
        );
        setInputValues([]);
        onClose();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  };

  const performAction = actions[action];

  return (
    <div className="modal flex center">
      <div className="modalContainer flex center">
        <div className="modalContent flex column center">
          {content}
          <div className="btn flex column center">
            <Button text={text} onClick={performAction} />
            <Button text="Close" onClick={close} classProp="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
