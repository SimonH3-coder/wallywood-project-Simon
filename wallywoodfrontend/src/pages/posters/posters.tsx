import { Poster } from '../../components/Poster/Poster';
import { Grid } from "../../components/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import type { MovieData } from "../../types/MovieType";
import { Genreselect } from "../../components/Genreselect/Genreselect";
import { Title } from '../../components/Title/Title';
import { Dropdown} from '../../components/Dropdown/Dropdown';

export function Posters() {
  const [selectedGenre, setSelectedGenre] = useState<string>("komedie");
  const [selectedSort, setSelectedSort] = useState<string>("arc");

  // Initialiser variabler til sortering
  let sort_Key = "random";
  let sort_Direction = "asc";

  // Hvis selectedSort er "name", så sæt sort_key til "name" og ellers sæt den til 'random'
  if (selectedSort === "name") {
    sort_Key = "name";
  } else {
    sort_Key = "random";
  }

  // Hvis selectedSort er 'arc'eller 'desc' så sæt sort_direction til at være selectedSort (arc/desc)
  // Og sæt sort_Key til 'price'
  if ( selectedSort === 'asc' || selectedSort === 'desc') {
    sort_Direction = selectedSort;
  } else {
    sort_Key = 'price';
  }
  }
  const { data, isLoading, error } = useFetch<Array<MovieData>>(
    `http://localhost:3000/posters/list_by_genre/${selectedGenre}?sort_key=${sort_Key}&sort_direction=${sort_Direction}`,);

  if (isLoading) {
    return <h1>Loading data......</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <Title text="Posters"></Title>
      <Dropdown setSelectedSort={setSelectedSort} />

      <Grid gap={32} gtc={"1fr 4fr"}>
        <Genreselect setSelectedGenre={setSelectedGenre} />

        <Grid gtc={"1fr 1fr 1fr"} gap={32}>
          {data?.map((item, index) => {
            return <Poster key={index} imageUrl={item.image} id={item.id} genres={item.genres} title={item.name} />
          )
          })}
        </Grid>
      </Grid>
    </>
  );
}
