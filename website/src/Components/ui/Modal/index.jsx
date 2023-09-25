import React from "react";
import "./styles.css";
import Button from "../../base/button";

const Modal = ({
  text,
  action,
  isOpen,
  onClose,
  content,
  inputValues,
  setInputValues,
}) => {
  if (!isOpen) return null;

  const close = () => {
    console.log(inputValues);
    setInputValues([]);
    onClose();
  };

  const actions = {
    terminate: async () => {
      console.log("Termination logic here");
      const token = await localStorage.getItem("userToken");
      const user = localStorage.getItem("userData");
      const userToken = JSON.parse(token);
      const userData = JSON.parse(user);
      console.log(userData.parking_id);
      const data = {
        staff_id: userData.id,
        parking_id: userData.parking_id,
        spot_id: inputValues['spotNumber'],
        reason: inputValues['reason'],
        token: userToken,
      };
      console.log(data);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/terminate",
        data
      );
      console.log(response.data);
      setInputValues([]);
      onClose();
    },
    add: () => {
      console.log("Add logic here");
      setInputValues([]);
      onClose();
    },
    remove: () => {
      console.log("Remove logic here");
      setInputValues([]);
      onClose();
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
