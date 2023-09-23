import React from "react";
import './styles.css'
import Image from "../image";
import search from '../../../assets/images/search.png'

const SearchBar = () => {
  return (
    <div className="searchBar width-25">
        <Image src={search} alt='' className='searchIcon' />
        <input
        type="text"
        placeholder="Search for a Customer"
        className="search-bar-input width-95"
        />
    </div>
  );
};

export default SearchBar;
