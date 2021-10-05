import React from "react";
import { useGlobalContext } from "../../globalContext";
import "../../style/search.css";
import Loading from "../common/Loading";
import { SEARCH_URL, SEARCH_COL_NUM_WIDE, SEARCH_COL_NUM } from "../../config";
import useFetch from "../../hooks/useFetch";

function Search() {
  const { searchTerm, isWideScreen } = useGlobalContext();
  const [loading, hasError, data] = useFetch(SEARCH_URL, searchTerm);
  const colNum = isWideScreen ? SEARCH_COL_NUM_WIDE : SEARCH_COL_NUM;
  const imgList = data ? data.photos : [];
  const size = Math.ceil(imgList.length / colNum);

  if (loading) {
    return (
      <div className="search container">
        <Loading />
      </div>
    );
  }

  if (searchTerm.length === 0) {
    return <div className="error"> Please provide a term to search </div>;
  }

  if (hasError) {
    return <div className="error"> An Error has occurred </div>;
  }

  return (
    <div className="search-page container">
      <h2>Search result for: {searchTerm.join(" ")}</h2>
      <div className="search-results">
        {[...Array(colNum).keys()].map((num) => (
          <SearchCol
            key={num}
            lst={imgList.slice(num * size, (num + 1) * size)}
          />
        ))}
      </div>
    </div>
  );
}

const SearchCol = ({ lst }) => {
  return (
    <div className="search-col">
      {lst.map((img) => {
        const { id, src, photographer, url } = img;
        return (
          <a key={id} href={url} className="image-container">
            <img className="search-img" src={src.large} alt={photographer} />
          </a>
        );
      })}
    </div>
  );
};

export default Search;
