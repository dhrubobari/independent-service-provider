import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import accountant from '../../../images/accountant.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={accountant}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Hello! I am Adonis.</h2>
            <p>With over 5 years experience, I can help you with all your accounting needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;