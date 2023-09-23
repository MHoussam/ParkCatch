import React, { useEffect } from 'react'
import Button from '../../Components/base/button'
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = () => {
   localStorage.removeItem('userToken')
   dispatch(setUserToken(null));
   navigate('../');
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = await localStorage.getItem('userToken');
      // console.log('hereeeee: ' + token)
      if(token === null){
        dispatch(setUserToken(token));
        navigate('../');
      }
    }

    checkToken();
  }, [])

  return (
    <div className='flex center' style={{ height: '100vh', width: '100%' }}>
      <div >
        Home
      </div>
      <Button text="Logout" onClick={Logout} />
    </div>
  )
}

export default Home