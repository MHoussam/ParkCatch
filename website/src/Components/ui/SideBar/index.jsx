import React, { useState } from "react";
import "./styles.css";
import Section from "../../base/section";
import terminate from "../../../assets/images/terminate.png";
import add from "../../../assets/images/add.png";
import remove from "../../../assets/images/remove.png";
import logout from "../../../assets/images/logout.png";
import { setUserToken } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import Input from "../../base/input";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [inputValues, setInputValues] = useState({});

  const handleTermination = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Terminate a Reservation</h2>

        <Input
          type="text"
          placeholder=""
          value={inputValues["spotNumber"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("spotNumber", newValue)}
        />
        <Input
          type="text"
          placeholder=""
          value={inputValues["terminationReason"]}
          onChange={(newValue) =>
            handleInputChange("terminationReason", newValue)
          }
        />
      </div>
    );

    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleAdd = () => {
    const sectionContent = (
      <div className="flex justify-content">
        <h2>Add Availability</h2>

        <Input
          type="text"
          placeholder=""
          value={'spotNumber'}
          state={inputValues}
          onChange={(newValue) => handleInputChange("spotNumber", newValue)}
        />
      </div>
    );

    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleRemove = () => {
    const sectionContent = (
      <div className="flex justify-content">
        <h2>Remove Availability</h2>
        <Input
          type="text"
          placeholder=""
          value={inputValues["spotNumber"] || ""}
          onChange={(newValue) => handleInputChange("spotNumber", newValue)}
        />
        <Input
          type="text"
          placeholder=""
          value={inputValues["unavailabilityReason"] || ""}
          onChange={(newValue) =>
            handleInputChange("unavailabilityReason", newValue)
          }
        />
      </div>
    );

    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleInputChange = (label, value) => {
    setInputValues((prevInputValues) => {
      const updatedInputValues = { ...prevInputValues, [label]: value };
      console.log(updatedInputValues);
      return updatedInputValues;
    });
  };
  

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(setUserToken(null));
    navigate("../");
  };

  console.log(inputValues)

  return (
    <div className="sidebar flex column">
      <Section
        icon={terminate}
        text="Terminate a Reservation"
        path=""
        onClick={handleTermination}
      />
      <Section icon={add} text="Add Availability" path="" onClick={handleAdd} />
      <Section
        icon={remove}
        text="Remove Availability"
        path=""
        onClick={handleRemove}
      />
      <Section icon={logout} text="Logout" path="" onClick={handleLogout} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    </div>
  );
};

export default SideBar;
