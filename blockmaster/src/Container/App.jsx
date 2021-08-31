import React from "react";
import ListMovies from "../Components/ListMovies/ListMovies";

const App = ({movieTerm}) => {
  return (
      <ListMovies
      movieTerm={movieTerm}
      />
    
  );
};

export default App;
