import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={require("./assets/vid1.mp4")}
            controls
            width="100%"
            height="100%"
          />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={require("./assets/vid2.mp4")}
            controls
            width="100%"
            height="100%"
          />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={require("./assets/vid3.mp4")}
            controls
            width="100%"
            height="100%"
          />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
