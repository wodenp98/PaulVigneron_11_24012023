import { useParams } from "react-router-dom";
import Datas from "../../data/apartments.json";
import Carousel from "../../components/Carousel/Carousel";

const Lodging = () => {
  const { id } = useParams();

  const dataLodging = Datas.find((data) => data.id === id);

  const {
    description,
    equipments,
    host,
    location,
    pictures,
    rating,
    tags,
    title,
  } = dataLodging;

  return (
    <main className="lodgingPage">
      <Carousel imgCarousel={pictures} />
    </main>
  );
};

export default Lodging;
