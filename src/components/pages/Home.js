import React from "react";
import Hero from "../Hero";
import ArtistList from "../ArtistList";
import CollectionList from "../CollectionList";
import GalleryGrid from "../common/GalleryGrid6";
import imageData from "../../data/imageData";
import userData from "../../data/userData";
import collectionData from "../../data/collectionData";

function Home() {
  const title = "You might like these";
  const info = "based on images you recently viewed";
  return (
    <>
      <Hero></Hero>
      <section className="container">
        <GalleryGrid imageData={imageData} title={title} info={info} />
        <ArtistList userData={userData} />
        <CollectionList collectionData={collectionData}></CollectionList>
      </section>
    </>
  );
}

export default Home;
