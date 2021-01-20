import React from "react";
import "./MainFilm.css";

function MainFilm(props) {
  return (
    <section className="main-film-section">
      <div className="main-film-section__video-info">
        <h3>{props.film.name}</h3>
        <h5>{props.film.description}</h5>
        <button>Watch</button>
      </div>
      <div className="main-film-section__video">
        <iframe
          title="top-film-title"
          width="500px"
          height="250px"
          src={`https://www.youtube.com/embed/${props.film.source}?autoplay=1&mute=1`}
        ></iframe>
      </div>
    </section>
  );
}

export default MainFilm;
