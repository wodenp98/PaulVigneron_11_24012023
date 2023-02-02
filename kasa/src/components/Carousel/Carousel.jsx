import { useState } from "react";
import arrowLeft from "../../assets/chevronLeft.png";
import arrowRight from "../../assets/chevronRight.png";

const Carousel = ({ imgCarousel }) => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    const newIndex = index === 0 ? imgCarousel.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = index === imgCarousel.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img
        src={arrowLeft}
        alt="Previous"
        className="previous"
        onClick={prevImage}
      />
      <div className="carouselImage" key={index}>
        <img key={index} src={imgCarousel[index]} alt="Photos appartement" />
      </div>
      <img src={arrowRight} alt="Next" className="next" onClick={nextImage} />
    </div>
  );
};

export default Carousel;
