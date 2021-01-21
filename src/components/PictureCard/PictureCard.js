import React from "react";
import './PictureCard.css'

export default function PictureCard({ picture }) {
  return (
    <div className="picture-card" style={{backgroundImage: `url("${picture.photoSource}")`}}>
      <h3 className="picture-card__name">{picture.name}</h3>
      <h6 className="picture-card__description">{picture.description}</h6>
    </div>
  );
}
