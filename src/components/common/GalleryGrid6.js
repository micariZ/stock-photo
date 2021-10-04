import React from "react";
import { MAX_GALLERY_IMAGE_WIDE, MAX_GALLERY_IMAGE } from "../../config";
import { useGlobalContext } from "../../globalContext";
import Loading from "./Loading";

function GalleryGrid6({ imageData, title, info, loading }) {
  const { isWideScreen } = useGlobalContext();
  const maxImg = isWideScreen ? MAX_GALLERY_IMAGE_WIDE : MAX_GALLERY_IMAGE;

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <header className="gallery-header">
        <h2 className="section-title">{title}</h2>
        <p className="gallery-info">{info}</p>
      </header>
      <div className="grid-6">
        {imageData.slice(0, maxImg).map((img) => {
          const { id, src, photographer } = img;
          return (
            <figure key={id} className="gallery-image-container">
              <img
                className="gallery-image"
                src={src.large}
                alt={photographer}
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default GalleryGrid6;
