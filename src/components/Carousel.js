import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageCarousel({ room }) {
  console.log(room.imageurls);
  return (
    <Carousel>
      <div>
        <img src={room.imageurls[0]} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={room.imageurls[1]} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={room.imageurls[2]} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
