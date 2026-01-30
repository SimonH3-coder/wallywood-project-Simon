import { type SetStateAction } from "react";
import { useFetch } from "../../hooks/useFetch";
import type { Genre } from "../../types/MovieType";
import style from "./Genreselect.module.scss";

interface GenreselectProps {
  setSelectedGenre: React.Dispatch<SetStateAction<string>>;
}

export function Genreselect({ setSelectedGenre }: GenreselectProps) {
  const { data, isLoading, error } = useFetch<Array<Genre>>("http://localhost:3000/genre");

  console.log(data);

  if (isLoading) {
    return <p>Loading genres...</p>;
  }

  if (error) {
    return <b>Error: {error}</b>;
  }

  return (
    <aside>
      <ul className={style.genreList}>
        {data?.map((item) => {
          return (
            <li key={item.id} onClick={() => setSelectedGenre(item.slug)}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
