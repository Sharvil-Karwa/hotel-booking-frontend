import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageCarousel({ room }) {
  console.log(room.imageurls);
  return (
    <Carousel>
      <div>
        <img src={room.imageurls[0]} />
      </div>
      <div>
        <img src={room.imageurls[1]} />
      </div>
      <div>
        <img src={room.imageurls[2]} />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
