import React from 'react'
import LoginForm from '../../Components/ui/LoginForm'
import lotPic from '../../assets/images/lot.png'
import './styles.css'
import "../../styles/utilities.css"


const Login = () => {
  return (
    <div className='loginContainer flex'>
      <img src={lotPic} alt="Parking Lot" className='parkingPic'/>
      <LoginForm />
    </div>
  )
}

export default Login