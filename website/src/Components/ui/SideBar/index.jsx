import React, { useState } from 'react';
import './styles.css';
import Section from '../../base/section';
import terminate from '../../../assets/images/terminate.png';
import add from '../../../assets/images/add.png';
import remove from '../../../assets/images/remove.png';
import logout from '../../../assets/images/logout.png';
import { setUserToken } from '../../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from '../Modal';

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleSectionClick = (icon, text) => {
    const sectionContent = (
      <div>
        <h2>{text}</h2>
        {/* Add your specific content for the section here */}
      </div>
    );

    setModalContent(sectionContent);
    setModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    dispatch(setUserToken(null));
    navigate('../');
  };

  return (
    <div className="sidebar flex column">
      <Section
        icon={terminate}
        text='Terminate a Reservation'
        path=''
        onClick={() => handleSectionClick(terminate, 'Terminate a Reservation')}
      />
      <Section
        icon={add}
        text='Add Availability'
        path=''
        onClick={() => handleSectionClick(add, 'Add Availability')}
      />
      <Section
        icon={remove}
        text='Remove Availability'
        path=''
        onClick={() => handleSectionClick(remove, 'Remove Availability')}
      />
      <Section
        icon={logout}
        text='Logout'
        path=''
        onClick={handleLogout}
      />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} content={modalContent} />
    </div>
  );
};

export default SideBar;
