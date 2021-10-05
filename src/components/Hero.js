import React from "react";
import "../style/hero.css";
import SearchBar from "./common/SearchBar";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-header">
          Just a demo project created by Micari Zhou :)
        </h1>
        <SearchBar></SearchBar>
      </div>
    </section>
  );
}

export default Hero;
