import React from 'react'
import './styles.css'
import Image from '../../base/image'
import headerLogo from '../../../assets/images/header-logo.png'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((state) => state.user)

  return (
    <div className='header flex align-items'>
      <div className="width-100 flex space-between">
        <Image src={headerLogo} alt='Header Logo ParkCatch' className='header-logo'/>
        <div className="name flex center">
          <h3>Welcome {user.first_name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Header