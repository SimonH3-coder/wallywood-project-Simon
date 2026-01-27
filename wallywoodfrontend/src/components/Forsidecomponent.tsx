import { useState } from "react";
import styles from "./Forsidecomponent.module.css";

export const Forsidecomponent = () => {
  const categories = [
    { name: "Action", icon: "🎬" },
    { name: "Comedy", icon: "😂" },
    { name: "Drama", icon: "🎭" },
    { name: "Horror", icon: "👻" },
    { name: "Sci-Fi", icon: "🚀" },
  ];

  return (
    <div className="forside-wrapper">
      <section className="forside-helt">
        <h1>Wallywood Filmplakater</h1>
        <p>Find din næste filmplakat blandt vores store udvalg af klassikere, nye film og kultfavoritter.</p>
        <button>Se alle plakater</button>
      </section>

      <section className="forside-kategorier">
        <h2>Kategorier</h2>
        <div className="kategorier-list">
          {categories.map((category) => (
            <div className="kategori-kort" key={category.name}>
              <div className="kategori-icon">{category.icon}</div>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
