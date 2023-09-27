import React, { useEffect } from "react";
import Button from "../../Components/base/button";
import { useNavigate } from "react-router-dom";
import { setUser, setUserToken } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
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
  let userToken;

  const checkToken = async () => {
    const token = await localStorage.getItem("userToken");
    // console.log('hereeeee: ' + token)
    if (token === null) {
      dispatch(setUserToken(token));
      navigate("../");
    }
  };

  const fetchReservations = async () => {
    const token = await localStorage.getItem("userToken");
    const user = localStorage.getItem("userData");
    userToken = JSON.parse(token);
    const userData = JSON.parse(user);
    // console.log(userData.parking_id);
    // console.log(userData);
    const data = {
      user_id: userData.id,
      parking_id: userData.parking_id,
      token: userToken,
    };
    console.log("oooooooooooooooo");
    // console.log(data);

    let response;
    if(user.role == 2){
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
    // console.log(response.data.data);
    if (Array.isArray(response.data.data) && response.data.data.length > 0) {
      response.data.data.forEach((item) => {
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
        // console.log('1')
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
    dispatch(setUser(userData));
  };

  useEffect(() => {
    checkToken();
    console.log('what: ' + userToken)
    if (userToken !== null) {
      fetchReservations();
    }
  }, []);

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
