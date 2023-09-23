import React from "react";
import './styles.css'

const SearchBar = () => {
  return (
    <div className="width-30">
      <input
        type="text"
        placeholder="Search for a Customer"
        className="search-bar-input width-95"
      />
    </div>
  );
};

export default SearchBar;
