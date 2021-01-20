import React from "react";
import PictureCard from "../PictureCard/PictureCard";
import "./Categories.css";

export default function Categories({ categories }) {
  return (
    <section className="categories-section">
      {categories.map((category) => (
        <div key={category.name} className="categories-section_section">
          <h3>{category.name}</h3>
          <div className="categories-section__cards">
            {category.items.map((item) => (
              <PictureCard key={item.name} picture={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
