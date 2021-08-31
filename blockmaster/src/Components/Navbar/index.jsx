import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=2ddacdd3af3e725f84f6c5bd3cc0f746&query=''`;
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=2ddacdd3af3e725f84f6c5bd3cc0f746&language=en-US&page=1`;
const POPULAR_API= `https://api.themoviedb.org/3/movie/top_rated?api_key=2ddacdd3af3e725f84f6c5bd3cc0f746`;

export default function SearchAppBar({ movieTerm, setMovieTerm }) {
  const classes = useStyles();
  const [searchMovie, setSearchMovie] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchMovie) {
      fetch(SEARCH_API + searchMovie)
        .then((response) => response.json())
        .then((data) => {
          setMovieTerm(data.results);
        });

      setSearchMovie("");
    }
  };

  const handleOnchange = (e) => {
    setSearchMovie(e.target.value);
  };

  const handlermoreValorat = () => {
    fetch(POPULAR_API)
      .then((response) => response.json())
      .then((data) => {
        setMovieTerm(data.results);
      });
  };

  const handlerAlltheMovies = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setMovieTerm(data.results);
      });
  };

  return (
    <AppBar>
      <Toolbar className={classes.navbarColor}>
        <Typography className={classes.title} variant="h5">
          BlockMaster
        </Typography>
        <Link to="/" onClick={handlerAlltheMovies} className={classes.secondTitle}>
          Todas
        </Link>
        <Link
          to="/"
          onClick={handlermoreValorat}
          className={classes.secondTitle}
        >
          Mas Valoradas
        </Link>
        <Link to="/" className={classes.secondTitle}>
          Menos Valoradas
        </Link>
        <form onSubmit={handleOnSubmit}>
          <div className={classes.search}>
            <InputBase
              placeholder="Buscar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "Buscar" }}
              value={searchMovie}
              onChange={handleOnchange}
            />
          </div>
        </form>
      </Toolbar>
    </AppBar>
  );
}
