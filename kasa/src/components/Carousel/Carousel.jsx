import { useState } from "react";
import arrowLeft from "../../assets/chevronLeft.png";
import arrowRight from "../../assets/chevronRight.png";

const Carousel = ({ imgCarousel }) => {
  const [index, setIndex] = useState(0);

  const previousImage = () => {
    const indexImg = index === 0 ? imgCarousel.length - 1 : index - 1;
    setIndex(indexImg);
  };

  const nextImage = () => {
    const indexImg = index === imgCarousel.length - 1 ? 0 : index + 1;
    setIndex(indexImg);
  };

  return (
    <div className="carousel">
      <img
        src={arrowLeft}
        alt="Previous"
        className="previous"
        onClick={previousImage}
      />
      <div className="carouselImage" key={index}>
        <img key={index} src={imgCarousel[index]} alt="Photos appartement" />
      </div>
      <img src={arrowRight} alt="Next" className="next" onClick={nextImage} />
    </div>
  );
};

export default Carousel;
