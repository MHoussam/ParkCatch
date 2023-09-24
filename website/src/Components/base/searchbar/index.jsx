import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter } from "../actions/searchActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState([]);
  const reservation = useSelector((state) => state.reservation)

  const handleSearch = (query) => {
    const filtered = recipes.filter(
      (reservation) =>
        reservation.plateNumber.toLowerCase().includes(query.toLowerCase()) ||
        reservation.realPlateNumber.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setSearchFilter(filtered));
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(newQuery);

    if (newQuery === "") {
      dispatch(clearSearchFilter());
    }
  };

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