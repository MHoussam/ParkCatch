import React, { useEffect } from 'react'
import Button from '../../Components/base/button'
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import './styles.css'
import Header from '../../Components/ui/Header';
import SideBar from '../../Components/ui/SideBar';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className='homeContainer flex column'>
      <Header />
      <div className="homeContent flex">
        <SideBar />
      </div>
    </div>
  )
}

export default Home