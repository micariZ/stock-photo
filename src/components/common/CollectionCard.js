import React from "react";
import { FaImage } from "react-icons/fa";

function CollectionCard({ name, image_num, thumbnail, imageList }) {
  return (
    <div className="collection-card round-border">
      <figure className="collection-thumb">
        <img className="round-border" src={thumbnail} alt={name} />
      </figure>

      <div className="collection-preview round-border">
        {imageList.slice(0, 10).map((img, idx) => {
          return (
            <figure key={idx}>
              <img className="collection-preview-img" src={img} alt="" />
            </figure>
          );
        })}
      </div>

      <footer className="collection-footer">
        <h3>{name}</h3>
        <div className="collection-footer-info">
          <FaImage />
          <p>{image_num}</p>
        </div>
      </footer>
    </div>
  );
}

export default CollectionCard;
