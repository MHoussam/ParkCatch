import React from 'react'
import Input from '../../base/input'
import './styles.css'

const LoginForm = () => {
  return (
    <div className="width-50 flex center">
        <div className="loginCard">
            <Input type="text" placeholder="Email"/>
        </div>
    </div>
  )
}

export default LoginForm