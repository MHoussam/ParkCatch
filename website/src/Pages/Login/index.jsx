import React, { useEffect } from 'react'
import LoginForm from '../../Components/ui/LoginForm'
import lotPic from '../../assets/images/lot.png'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import Image from '../../Components/base/image'
import { setUserToken } from '../../redux/user/userSlice'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const userToken = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token;

  useEffect(() => {
    const checkToken = async () => {
      token = await localStorage.getItem('userToken');
    const userToken = JSON.parse(token)
      const user = await localStorage.getItem('userData');
      if(token !== null){
        if(user.role != 3){
          dispatch(setUserToken(userToken));
          navigate('./Home');
        }
      }
    }

    checkToken();
  }, [token])

  return (
    <div className='loginContainer flex'>
      <Image src={lotPic} alt="Parking Lot" className='parkingPic'/>
      <LoginForm />
    </div>
  )
}

export default Login