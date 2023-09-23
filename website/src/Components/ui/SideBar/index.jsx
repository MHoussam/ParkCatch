import React from 'react'
import './styles.css'
import Section from '../../base/section'
import terminate from '../../../assets/images/terminate.png'
import add from '../../../assets/images/add.png'
import remove from '../../../assets/images/remove.png'
import logout from '../../../assets/images/logout.png'
import { setUserToken } from '../../../redux/user/userSlice'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('hereeeee')
    localStorage.removeItem('userToken')
    dispatch(setUserToken(null));
    navigate('../');
  }

  return (
    <div className='sidebar flex column' >
        <Section icon={terminate} text='Terminate a Reservation' path='' />
        <Section icon={add} text='Add Availability' path='' />
        <Section icon={remove} text='Remove Availability' path='' />
        <Section icon={logout} text='Logout' path='' onClick={handleLogout} />
    </div>
  )
}

export default SideBar