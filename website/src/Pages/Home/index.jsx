import React, { useEffect } from "react";
import Button from "../../Components/base/button";
import { useNavigate } from "react-router-dom";
import { setUser, setUserToken } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import Header from "../../Components/ui/Header";
import SideBar from "../../Components/ui/SideBar";
import SearchBar from "../../Components/base/searchbar";
import Slots from "../../Components/ui/Slots";
import axios from "axios";
import { setReservation } from "../../redux/reservations/reservationSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const userToken = useSelector((state) => state.user.token)
  const reservations = useSelector((state) => state.reservation)

  const checkToken = async () => {
    const token = await localStorage.getItem("userToken");
    const userToken = JSON.parse(token);
    console.log('hereeeee: ' + userToken)
    if (userToken === null) {
      dispatch(setUserToken(token));
      navigate("../");
    }
    // const userToken = JSON.parse(token);
    const userr = localStorage.getItem("userData");
    const userData = JSON.parse(userr);
    console.log(userToken)
    console.log(userData)
    dispatch(setUser(userData));
    dispatch(setUserToken(userToken));
  };

  const fetchReservations = async () => {
    // const token = await localStorage.getItem("userToken");
    // userToken = JSON.parse(token);
    // console.log(userData.parking_id);

    const userr = localStorage.getItem("userData");
    const userData = JSON.parse(userr);
    console.log(userData);
    console.log(userData.token);
    // console.log(userData);
    const data = {
      user_id: userData.id,
      parking_id: userData.parking_id,
      token: userData.token,
    };
    console.log("oooooooooooooooo");

    let response;
    if(userData.role == 2){
    console.log(data);

      response = await axios.post(
        "http://127.0.0.1:8000/api/allReservations",
        data
      );
    } else {
      response = await axios.post(
        "http://127.0.0.1:8000/api/adminAllReservations",
        data
      );
    }
    console.log("mmmmmmmmmmmmmmmm");
    console.log(response.data);
    if (Array.isArray(response.data.data) && response.data.data.length > 0) {
      response.data.data.forEach((item) => {
        console.log(item)
        const {
          id,
          user_id,
          parking_id,
          spot_id,
          duration,
          total,
          valid,
          plate_number,
          real_plate_number,
          correct,
          phone_number,
          parking,
        } = item;
        console.log('1')
        dispatch(
          setReservation({
            id,
            user_id,
            parking_id,
            spot_id,
            duration,
            total,
            valid,
            plate_number,
            real_plate_number,
            correct,
            phone_number,
            parking,
          })
        );
      });
    }
    // dispatch(setReservation(response.data.data))
  };

  // useEffect(() => {
  //   checkToken();
  //   console.log('what: ' + userToken)
  //   console.log(localUserData===null);
  //   // console.log(user===undefined);
  //   console.log(localUserData);
  //   // console.log(userData.length>0);
  //   if (localUserData.id !== null) {
  //     fetchReservations();
  //   }
  // }, []);
  
  useEffect(() => {
    checkToken();
    const userr = localStorage.getItem("userData");
    const userData = JSON.parse(userr);
    console.log(userData);
    if (userData !== null) {
      fetchReservations();
    }
  }, []);

  console.log(reservations)

  return (
    <div className="homeContainer flex column">
      <Header />
      <div className="homeContent flex">
        <SideBar />
        <div className="parkingInfo flex column">
          <div className="title flex align-items space-between">
            <h2 className="parkingTitle">Parking Lot's Spots</h2>
            <SearchBar />
          </div>
          <Slots />
        </div>
      </div>
    </div>
  );
};

export default Home;
