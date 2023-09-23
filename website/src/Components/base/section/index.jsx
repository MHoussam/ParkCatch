import React from 'react'
import Image from '../image'
import styles from './styles.css'

const Section = ({ text, icon, path }) => {
  return (
    <div className='section'>
        <div className="content">
            <Image src={icon} alt='' className='secIcon' />
            <h3>{text}</h3>
        </div>
    </div>
  )
}

export default Section