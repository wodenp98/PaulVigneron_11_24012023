import StarRed from "../../assets/starsRed.png";
import StarGrey from "../../assets/starsGrey.png";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img src={StarRed} alt="full star" key={i} />);
    } else {
      stars.push(<img src={StarGrey} alt="empty star" key={i} />);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
