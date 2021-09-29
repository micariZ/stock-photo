import React from "react";
import ArtistCard from "./common/ArtistCard";
import { useGlobalContext } from "../globalContext";
import { MAX_USER_WIDE, MAX_USER } from "../config";
import "../style/artistList.css";

function ArtistList({ userData }) {
  const { isWideScreen } = useGlobalContext();
  const maxUser = isWideScreen ? MAX_USER_WIDE : MAX_USER;
  return (
    <section>
      <h2>Featured artists</h2>
      <div className="artists-list">
        {userData.slice(0, maxUser).map((user) => (
          <ArtistCard {...user} />
        ))}
      </div>
    </section>
  );
}

export default ArtistList;
