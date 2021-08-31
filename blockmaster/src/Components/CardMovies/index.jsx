import React from "react";
import classes from './styledCard.module.css';
import {
  DivMov,
  AverageVote,
  MovieImg,
  TitleMovie,
} from "./styleCard";


const CardMovies = (props) => {
  const { movie } = props;
  const { title, poster_path, vote_average, overview } = movie;
  return (
    <div className={classes.MovieCards}>
      <MovieImg
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt={title}
      />
      <DivMov>
        <TitleMovie>{title}</TitleMovie>
        <AverageVote>{vote_average}</AverageVote>
      </DivMov>
     <div className={classes.DivOverview}>
      <h2>Overview:</h2>
       <p>{overview}</ p>
     </div>
    </div>
  );
};

export default CardMovies;
