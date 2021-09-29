import React from "react";
import { MAX_GALLERY_IMAGE_WIDE, MAX_GALLERY_IMAGE } from "../../config";
import { useGlobalContext } from "../../globalContext";

function GalleryGrid6({ imageData, title, info }) {
  const { isWideScreen } = useGlobalContext();
  const maxImg = isWideScreen ? MAX_GALLERY_IMAGE_WIDE : MAX_GALLERY_IMAGE;
  return (
    <section>
      <header className="gallery-header">
        <h2>{title}</h2>
        <p className="gallery-info">{info}</p>
      </header>
      <div className="grid-6">
        {imageData.slice(0, maxImg).map((img) => {
          const { id, download_url, author } = img;
          return (
            <figure key={id} className="gallery-image-container">
              <img className="gallery-image" src={download_url} alt={author} />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default GalleryGrid6;
