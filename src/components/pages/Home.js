import React from "react";
import Hero from "../Hero";
import ArtistList from "../ArtistList";
import CollectionList from "../CollectionList";
import GalleryGrid from "../common/GalleryGrid6";
import userData from "../../data/userData";
import collectionData from "../../data/collectionData";
import useFetch from "../../hooks/useFetch";
import { CURATED_URL } from "../../config";

function Home() {
  const title = "You might like these";
  const [loading, hasError, data] = useFetch(CURATED_URL);

  return (
    <>
      <Hero />
      <section className="container">
        <GalleryGrid
          imageData={data ? data.photos : []}
          loading={loading}
          hasError={hasError}
          title={title}
        />
        <ArtistList userData={userData} />
        <CollectionList collectionData={collectionData} />{" "}
      </section>
    </>
  );
}

export default Home;
