import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../../globalContext";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = useRef(null);
  const history = useHistory();

  const handleClick = () => {
    if (inputRef.current.value.trim()) {
      setSearchTerm(inputRef.current.value.trim().split(/\s+/));
      history.push(`/search`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        className="searchBar"
        type="text"
        placeholder="Search for free photos"
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick} className="search-icon">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
