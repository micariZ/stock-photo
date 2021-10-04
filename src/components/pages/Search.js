import React from "react";
import { useGlobalContext } from "../../globalContext";
import "../../style/search.css";
import Loading from "../common/Loading";
import { SEARCH_URL } from "../../config";
import useFetch from "../../hooks/useFetch";

function Search() {
  const { searchTerm } = useGlobalContext();
  const [loading, hasError, data] = useFetch(SEARCH_URL, searchTerm);

  if (loading) {
    return (
      <div className="search container">
        <Loading />
      </div>
    );
  }

  if (hasError) {
    return <div className="error"> An Error has occurred </div>;
  }

  const imgList = data ? data.photos : [];
  console.log("data", data);
  const size = Math.ceil(imgList.length / 3);

  return (
    <div className="search container">
      <h2>Search result for: {searchTerm.join(" ")}</h2>
      <div className="search-container">
        <div className="search-col">
          {imgList.slice(0, size).map((img) => {
            const { id, src, photographer } = img;
            return (
              <figure key={id}>
                <img
                  className="search-img"
                  src={src.large}
                  alt={photographer}
                />
              </figure>
            );
          })}
        </div>

        <div className="search-col">
          {imgList.slice(size, 2 * size).map((img) => {
            const { id, src, photographer } = img;
            return (
              <figure key={id}>
                <img
                  className="search-img"
                  src={src.large}
                  alt={photographer}
                />
              </figure>
            );
          })}
        </div>
        <div className="search-col">
          {imgList.slice(2 * size, 3 * size).map((img) => {
            const { id, src, photographer } = img;
            return (
              <figure key={id}>
                <img
                  className="search-img"
                  src={src.large}
                  alt={photographer}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
