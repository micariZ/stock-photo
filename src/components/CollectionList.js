import React, { useState, useRef, useEffect } from "react";
import CollectionCard from "./common/CollectionCard";
import "../style/collectionList.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CollectionList({ collectionData }) {
  const [onHover, setonHover] = useState(false);
  const listRef = useRef(null);
  const [numTranslate, setNumTranslate] = useState(0);
  const [hasRemain, setHasRemain] = useState(false);

  useEffect(() => {
    const cardWidth = listRef.current.firstChild.offsetWidth;
    const listWidth = listRef.current.offsetWidth;
    const offset = Math.floor(listWidth / cardWidth);
    setHasRemain(collectionData.length > offset);
  }, [collectionData.length]);

  const movePage = (action) => {
    const cardWidth = listRef.current.firstChild.offsetWidth;
    const listWidth = listRef.current.offsetWidth;
    const offset = Math.floor(listWidth / cardWidth);

    if (action === "next") {
      setNumTranslate(numTranslate + offset);
      setHasRemain(collectionData.length > numTranslate + 2 * offset);
    } else if (action === "prev") {
      setNumTranslate(Math.max(0, numTranslate - offset));
      setHasRemain(true);
    }
  };

  useEffect(() => {
    const cardWidth = listRef.current.firstChild.offsetWidth;
    listRef.current.style.transform = `translateX(${
      numTranslate * -1 * cardWidth
    }px)`;
  }, [numTranslate]);

  return (
    <section>
      <h2 className="section-title">Popular Collections</h2>
      <div
        className="collection-container"
        onMouseEnter={() => {
          setonHover(true);
        }}
        onMouseLeave={() => {
          setonHover(false);
        }}
      >
        <div ref={listRef} className="collection-list">
          {collectionData.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>

        {hasRemain && (
          <div
            onClick={() => movePage("next")}
            className={onHover ? "nxt-arrow show" : "nxt-arrow"}
          >
            <div className="center">
              <FaArrowRight />
            </div>
          </div>
        )}

        {numTranslate !== 0 && (
          <div
            onClick={() => movePage("prev")}
            className={onHover ? "back-arrow show" : "back-arrow"}
          >
            <div className="center">
              <FaArrowLeft />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CollectionList;
