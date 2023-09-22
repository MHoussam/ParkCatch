import React from 'react'
import LoginForm from '../../Components/ui/LoginForm'
import lotPic from '../../assets/images/lot.png'

const Login = () => {
  return (
    <div>
      <div className="flex1">
            <img src={lotPic} alt="Parking Lot" className='parkingPic'/>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login