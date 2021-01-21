import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./MainFilm.css";

function MainFilm({film: {id, name, description, source}}) {
  return (
    <section className="main-film-section">
      <div className="main-film-section__video-info">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <Link to={`/view-mode/${id}`}><button>Watch</button></Link>
      </div>
      <div className="main-film-section__video">
        <VideoPlayer width={'500px'} height={'250px'} source={source} />
      </div>
    </section>
  );
}

export default MainFilm;
