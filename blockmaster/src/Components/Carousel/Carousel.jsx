import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import FondoOne from '../../img/FondoOne.jpg'
import FondoTwo from '../../img/FondoTwo.jpg'
import FondoFour from '../../img/FondoFour.jpg'
import classes from './style.module.css'


const CarouselDark = () => {
  return (
    <div>
      <Carousel className={classes.carousel}>
        <Item>
          <img  src={FondoOne} />
        </Item>
        <Item>
          <img src={FondoTwo} />
        </Item>
        <Item>
          <img src={FondoFour} />
        </Item>
      </Carousel>
    </div>
  );
};

export default CarouselDark;
