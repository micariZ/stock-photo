import React, { useState } from "react";

function ArtistCard({ name, thumbnail, workPreview }) {
  const backgroundStyle = {
    backgroundImage: `url(${workPreview}) `,
  };
  return (
    <div className="user-card-container" style={backgroundStyle}>
      <div className="user-card">
        <div className="user-card-content">
          <img src={thumbnail} alt="" className="user-thumb" />
          <h3>{`${name.first} ${name.last}`}</h3>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
