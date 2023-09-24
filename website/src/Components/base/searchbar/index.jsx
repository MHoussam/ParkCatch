import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchFilter, setSearchFilter } from "../../../redux/searchFilter/searchFilterSlice";
import Image from "../image";
import search from '../../../assets/images/search.png'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState([]);
  const slots = useSelector((state) => state.slots)
  const reservation = useSelector((state) => state.reservation)

  const handleSearch = (query) => {
    console.log('nooo')
    console.log(query)
    console.log(reservation.reservation)
    console.log('Type of slots:', typeof reservation.reservation);

    if (Array.isArray(reservation.reservation)) {
      console.log('yessss')
    const filtered = reservation.reservation.filter(
      (reservation) =>
        reservation.plate_number.toLowerCase().includes(query.toLowerCase()) ||
        reservation.phone_number.toString().includes(query.toLowerCase())
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
    handleSearch(newQuery);
    // console.log(newQuery)
    if (newQuery === "") {
      dispatch(clearSearchFilter());
    }
  };

  console.log('now hear ')
  console.log(slots)
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