import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Searchbar.css";
import { applyFilter } from "../store/realEstateSlice";

const Searchbar = () => {
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const [propertype, setPropertype] = useState();
  const dispatch = useDispatch();
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  console.log(location, price, propertype);

  const handleSearch = () => {
    dispatch(applyFilter({ location, price, propertype }));
  };
  return (
    <div className="Search">
      <div className="Search-bar">
        <div className="Location">
          <select onChange={handleLocation}>
            <option>Select Location</option>
            <option value="New York">New York</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div className="Price">
          <select onChange={(e) => setPrice(e.target.value)}>
            <option>Select Price</option>
            <option value="0-3000">$0-$3000</option>
            <option value="3000-6000">$3000-$6000</option>
            <option value="6000-10000"> $6000-$10000</option>
          </select>
        </div>
        <div className="Propertype">
          <select onChange={(e) => setPropertype(e.target.value)}>
            <option>Select Property type</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>
        <div className="btn1">
          <button onClick={handleSearch}>
            <span>Search</span>
            <i></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
