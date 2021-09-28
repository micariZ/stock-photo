import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  //TODO: add section for suggesting trending topic when clicked
  return (
    <div className="search-container">
      <input
        className="searchBar"
        type="text"
        placeholder="Search for free photos"
      />
      <button className="search-icon">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
