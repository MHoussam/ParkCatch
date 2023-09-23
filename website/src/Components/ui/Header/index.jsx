import React from 'react'
import './styles.css'
import Image from '../../base/image'
import headerLogo from '../../../assets/images/header-logo.png'

const Header = () => {
  return (
    <div className='header flex align-items'>
        <Image src={headerLogo} alt='Header Logo ParkCatch' className='header-logo'/>
    </div>
  )
}

export default Header