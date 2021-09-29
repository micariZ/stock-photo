import React from "react";
import CollectionCard from "./common/CollectionCard";
import "../style/collectionList.css";

function CollectionList({ collectionData }) {
  return (
    <section>
      <h2>Popular Collections</h2>
      <div className="collection-list">
        {collectionData.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>
    </section>
  );
}

export default CollectionList;
