import React, { useEffect } from 'react'
import Button from '../../Components/base/button'
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import '../../styles/utilities.css'
import './styles.css'
import Header from '../../Components/ui/Header';
import SideBar from '../../Components/ui/SideBar';

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
    <div className='homeContainer flex column'>
      <Header />
      <div className="flex" style={{border: '1px solid', flexGrow: 1}}>
        <SideBar />
        <div >
          Home
        </div>
        <Button text="Logout" onClick={Logout} />
      </div>
    </div>
  )
}

export default Home