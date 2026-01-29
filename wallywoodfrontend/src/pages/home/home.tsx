import { useState, useEffect } from "react";
import curtainImage from "../../assets/images/curtain.jpg";
import { Title } from "../../components/Title/Title";
import { Poster } from "../../components/Poster/Poster";
import style from "./home.module.scss";
import type { MovieData } from "../../types/MovieType";
import { Grid } from "../../components/Grid/Grid";

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
      <Grid gtc={2} gap={32}>
        {movieData &&
          movieData.map((item) => {
            return <Poster genres={item.genres} title={item.name} imageUrl={item.image} description={item.description} id={item.id} />;
          })}
      </Grid>
    </>
  );
}
