import React from 'react'
import './styles.css'
import Section from '../../base/section'
import terminate from '../../../assets/images/terminate.png'
import add from '../../../assets/images/add.png'
import remove from '../../../assets/images/remove.png'
import logout from '../../../assets/images/logout.png'

const SideBar = () => {
  return (
    <div className='sidebar flex column' >
        <Section icon={terminate} text='Terminate a Reservation' path='' />
        <Section icon={add} text='Add Availability' path='' />
        <Section icon={remove} text='Remove Availability' path='' />
        <Section icon={logout} text='Logout' path='' />
    </div>
  )
}

export default SideBar