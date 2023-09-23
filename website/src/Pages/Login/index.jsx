import React from 'react'
// import LoginForm from '../../Components/ui/LoginForm'
// import lotPic from '../../assets/images/lot.png'
import './styles.css'
import "../../styles/utilities.css"
// import { useDispatch, useSelector } from 'react-redux'
// import Image from '../../Components/base/image'
// import { setUserToken } from '../../redux/user/userSlice'; 
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const userToken = useSelector((state) => state.user.token);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const checkToken = async () => {
  //     const token = await localStorage.getItem('userToken');
  //     console.log('hereeeee: ' + token)
  //     if(token !== null){
  //       dispatch(setUserToken(token));
  //       navigate('Login');
  //     }
  //   }

  //   checkToken();
  // }, [userToken])

  return (
    <div>
      <h3>Hello</h3>
    </div>
  )
}

export default Login