import React, { useEffect } from 'react'
import Button from '../../Components/base/button'
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import './styles.css'
import Header from '../../Components/ui/Header';
import SideBar from '../../Components/ui/SideBar';
import SearchBar from '../../Components/base/searchbar';
import Slots from '../../Components/ui/Slots';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkToken = async () => {
    const token = await localStorage.getItem('userToken');
    // console.log('hereeeee: ' + token)
    if(token === null){
      dispatch(setUserToken(token));
      navigate('../');
    }
  }

  const fetchReservations = async () => {
        const token = await localStorage.getItem('userToken');
        const user = await localStorage.getItem('userData');
        // const userData = JSON.parse(user);
        // console.log(user)
        const data = {
            user_id: user.id,
            token: token,
        }
        console.log('oooooooooooooooo')

        const response = await axios.post('http://127.0.0.1:8000/api/reservations', data);
        console.log('mmmmmmmmmmmmmmmm')
        console.log(response.data.data)
        dispatch(setReservations(response.data.data))
    }


  useEffect(() => {
    checkToken();
    fetchReservations();
  }, [])

  return (
    <div className='homeContainer flex column'>
      <Header />
      <div className="homeContent flex">
        <SideBar />
        <div className="parkingInfo flex column">
          <div className="title flex align-items space-between">
            <h2 className="parkingTitle">
              Parking Lot's Spots
            </h2>
            <SearchBar />
          </div>
          <Slots />          
        </div>
      </div>
    </div>
  )
}

export default Home