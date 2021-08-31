import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../Container/App";
import NavbarDark from "../Components/Navbar";
import CarouselDark from "../Components/Carousel/Carousel.jsx";

const Routes = () => {
  const [movieTerm, setMovieTerm] = useState([]);
  return (
    <BrowserRouter>
      <NavbarDark movieTerm={movieTerm} setMovieTerm={setMovieTerm} />
      <CarouselDark />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <App movieTerm={movieTerm} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
