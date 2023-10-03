import React, { useState } from "react";
import "./styles.css";
import Section from "../../base/section";
import terminate from "../../../assets/images/terminate.png";
import add from "../../../assets/images/add.png";
import remove from "../../../assets/images/remove.png";
import edit from "../../../assets/images/edit.png";
import ban from "../../../assets/images/ban.png";
import logout from "../../../assets/images/logout.png";
import { setUser, setUserToken } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import Input from "../../base/input";
import TextArea from "../../base/textArea";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [text, setText] = useState('');
  const [action, setAction] = useState('');
  const user = useSelector((state) => state.user);

  const handleTermination = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Terminate a Reservation</h2>

        <Input
        text='Spot Number'
        type="text"
          placeholder=""
          value={inputValues["spotNumber"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("spotNumber", newValue)}
        />
        <TextArea
        text='Termination Reason'
        type="text"
          placeholder=""
          value={inputValues["terminationReason"]}
          state={inputValues}
          onChange={(newValue) =>
            handleInputChange("terminationReason", newValue)
          }
        />
      </div>
    );

    setText('Terminate');
    setAction('terminate')
    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleEdit = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Edit Spot's Details</h2>

        <Input
        text='Reservation Price'
        type="text"
          placeholder=""
          value={inputValues["reservationPrice"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("reservationPrice", newValue)}
        />
        <Input
        text='Opening Hour'
        type="time"
          placeholder=""
          value={inputValues["openingHour"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("openingHour", newValue)}
        />
        <Input
        text='Closing Hour'
        type="time"
          placeholder=""
          value={inputValues["closingHour"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("closingHour", newValue)}
        />
      </div>
    );

    setText('Change');
    setAction('edit')
    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleAdd = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Add Availability</h2>

        <Input
        text='Spot Number'
        type="text"
          placeholder=""
          value={inputValues["spotNumber"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("spotNumber", newValue)}
        />
      </div>
    );

    setText('Add');
    setAction('add')
    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleRemove = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Remove Availability</h2>
        <Input
        text='Spot Number'
        type="text"
          placeholder=""
          value={inputValues["spotNumber"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("spotNumber", newValue)}
        />
        <TextArea
        text='Unavailability Reason'
          type="text"
          placeholder=""
          value={inputValues["unavailabilityReason"]}
          state={inputValues}
          onChange={(newValue) =>
            handleInputChange("unavailabilityReason", newValue)
          }
        />
      </div>
    );

    setText('Remove');
    setAction('remove')
    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleAddSupervisor = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Add a New Supervisor</h2>

        <Input
        text='First Name'
        type="text"
          placeholder=""
          value={inputValues["firstName"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("firstName", newValue)}
        />
        <Input
        text='Last Name'
        type="text"
          placeholder=""
          value={inputValues["lastName"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("lastName", newValue)}
        />
        <Input
        text='Email'
        type="text"
          placeholder=""
          value={inputValues["email"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("email", newValue)}
        />
        <Input
        text='Password'
        type="password"
          placeholder=""
          value={inputValues["password"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("password", newValue)}
        />
      </div>
    );

    setText('Add');
    setAction('addSupervisor')
    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleRemoveSupervisor = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Remove a Supervisor</h2>
        <Input
        text='Email'
        type="text"
          placeholder=""
          value={inputValues["email"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("email", newValue)}
        />
      </div>
    );

    setText('Remove');
    setAction('removeSupervisor')
    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleBan = () => {
    const sectionContent = (
      <div className="flex column justify-content">
        <h2>Ban a Customer</h2>
        <Input
        text="Customer's Email"
        type="text"
          placeholder=""
          value={inputValues["email"]}
          state={inputValues}
          onChange={(newValue) => handleInputChange("email", newValue)}
        />
        <TextArea
        text='Banning Reason'
          type="text"
          placeholder=""
          value={inputValues["banningReason"]}
          state={inputValues}
          onChange={(newValue) =>
            handleInputChange("banningReason", newValue)
          }
        />
      </div>
    );

    setText('Ban');
    setAction('ban')
    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleInputChange = (label, value) => {
    setInputValues((prevInputValues) => {
      const updatedInputValues = { ...prevInputValues, [label]: value };
      return updatedInputValues;
    });
  };  

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    navigate("../Login");
  };


  return (
    <div className="sidebar flex column">
      {user.role == 2 ? (
        <>
          <Section
            icon={terminate}
            text="Terminate a Reservation"
            onClick={handleTermination}
          />
          <Section 
            icon={add} 
            text="Add Availability" 
            onClick={handleAdd} 
          />
          <Section
            icon={remove}
            text="Remove Availability"
            onClick={handleRemove}
          />
          <Section 
            icon={logout} 
            text="Logout" 
            onClick={handleLogout} 
          />
        </>
      ) : user.role == 1 ? (
        <>
          <Section
            icon={edit}
            text="Edit Parking Lot's Details"
            onClick={handleEdit}
          />
          <Section 
            icon={add} 
            text="Add Spot Availability" 
            onClick={handleAdd} 
          />
          <Section
            icon={remove}
            text="Remove Spot Availability"
            onClick={handleRemove}
          />
          <Section 
            icon={add} 
            text="Add a Supervisor" 
            onClick={handleAddSupervisor} 
          />
          <Section
            icon={remove}
            text="Remove a Supervisor"
            onClick={handleRemoveSupervisor}
          />
          <Section
            icon={ban}
            text="Ban a Client"
            onClick={handleBan}
          />
          <Section 
            icon={logout} 
            text="Logout"            
            onClick={handleLogout} 
          />
        </>
      ) : (<></>)}
      <Modal
        text={text}
        action={action}
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
