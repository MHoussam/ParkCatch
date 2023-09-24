import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchFilter, setSearchFilter } from "../../../redux/searchFilter/searchFilterSlice";
import './styles.css'
import Image from "../image";
import search from '../../../assets/images/search.png'
import { clearSearchbar, setSearchbar } from "../../../redux/searchbar/searchbarSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState([]);
  const slots = useSelector((state) => state.slots)
  const reservation = useSelector((state) => state.reservation)
  const searchFilter = useSelector((state) => state.searchFilter)

  const handleSearch = (query) => {
    console.log(query)

    console.log(typeof query)

    console.log('nooo')
    console.log(query)
    console.log(reservation.reservation)
    console.log('Type of slots:', typeof reservation.reservation);

    if (Array.isArray(reservation.reservation)) {
      console.log('yessss')
    const filtered = reservation.reservation.filter(
      (reservation) =>
        reservation.plate_number.toLowerCase().startsWith(query.toLowerCase()) ||
        reservation.phone_number.toString().startsWith(query.toLowerCase())
    );
        // console.log(reservation.reservation['plateNumber'])

    dispatch(setSearchFilter(filtered));
    console.log('filtered')
    console.log(filtered)
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    console.log(typeof newQuery)
    dispatch(setSearchbar(newQuery));
    handleSearch(newQuery);
    // console.log(newQuery)
    if (newQuery === "") {
      dispatch(clearSearchFilter());
      dispatch(clearSearchbar());
      // dispatch(setSearchFilter(slots.slots));
    }
  };

  console.log('now hear ')
  console.log(slots.slots)
  console.log(searchFilter)
  return (
    <div className="searchBar width-25">
      <Image src={search} alt='' className='searchIcon' />
      <input
        type="text"
        placeholder="Search for a Customer"
        className="search-bar-input width-95"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;