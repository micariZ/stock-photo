import React from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import ArtistList from "../ArtistList";
import CollectionList from "../CollectionList";
import GalleryGrid from "../common/GalleryGrid6";

function Home() {
  return (
    <>
      <Hero></Hero>
      <section>
        <h2>You might like these</h2>
        <p>based on images you recently viewed</p>
        <GalleryGrid></GalleryGrid>
      </section>
      <ArtistList></ArtistList>
      <CollectionList></CollectionList>
    </>
  );
}

export default Home;
