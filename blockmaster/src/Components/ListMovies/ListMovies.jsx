import React from "react";
import { useEffect, useState } from "react";
import CardMovies from "../CardMovies";
import DivMovies from "./stylesListMovie";

const ListMovies = ({ movieTerm }) => {
  const appId = "2ddacdd3af3e725f84f6c5bd3cc0f746";
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${appId}&language=en-US&page=1`;

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setList(data.results);
      });
  }, []);

  return (
    <>
      {movieTerm.length ? (
        <DivMovies>
          {movieTerm.map((movie) => (
            <CardMovies key={movie.id} movie={movie} />
          ))}
        </DivMovies>
      ) : (
        <DivMovies>
          {list.map((movie) => (
            <CardMovies key={movie.id} movie={movie} />
          ))}
        </DivMovies>
      )}
    </>
  );
};

export default ListMovies;
