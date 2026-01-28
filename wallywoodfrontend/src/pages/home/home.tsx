import { useState, useEffect } from "react";
import curtainImage from "../../assets/images/curtain.jpg";
import { Title } from "../../components/Title/Title";
import style from "./home.module.scss";
import type { MovieData } from "../../types/MovieType";
import parse from "html-react-parser";

export function Home() {
  const [movieData, setMovieData] = useState<Array<MovieData>>();

  useEffect(() => {
    const url = "http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);
  return (
    <>
      <img className={style.homePageImage} src={curtainImage} alt="curtain_image"></img>
      <Title text={"Sidste nyt..."} />

      {movieData &&
        movieData.map((item) => {
          return (
            <div key={item.id} className={style.movieCard}>
              <img width="200" src={item.image} className={style.movieImage}></img>
              <h4 className={style.movieTitle}>{item.name}</h4>
              <div className={style.movieDescription}>{parse(item.description)}</div>
              <button className={style.readMoreButton}>Læs mere</button>
            </div>
          );
        })}
    </>
  );
}
