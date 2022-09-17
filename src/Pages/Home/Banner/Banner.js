
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import card1 from '../../../images/bg1.png';
import card2 from '../../../images/bg2.png';
import card3 from '../../../images/bg3.png';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={card1}
            alt="First slide"
          />
          <Carousel.Caption>
        
            <h1>Explore, collect, and sell NFTs</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={card2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
          <h1>Explore, collect, and sell NFTs</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100 "
            src={card3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h1>Explore, collect, and sell NFTs</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Banner;
