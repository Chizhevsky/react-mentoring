import React from "react";
import { Link } from "react-router-dom";
import './PictureCard.css'

export default function PictureCard({ picture }) {
  return (
    <Link to={`/view-mode/${picture.id}`} className="picture-card" style={{backgroundImage: `url("${picture.photoSource}")`}}>
      <h3 className="picture-card__name">{picture.name}</h3>
      <h6 className="picture-card__description">{picture.description}</h6>
    </Link>
  );
}
