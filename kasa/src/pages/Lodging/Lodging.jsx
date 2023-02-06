import { useParams } from "react-router-dom";
import Datas from "../../data/apartments.json";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";
import Error from "../Error/Error";

const Lodging = () => {
  const { id } = useParams();

  const dataLodging = Datas.find((data) => data.id === id);

  if (!dataLodging) {
    return <Error />;
  } else {
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

    let fullName = host.name.split(" ");
    let firstName = fullName[0];
    let lastName = fullName[1];
    return (
      <main className="lodgingPage">
        <Carousel imgCarousel={pictures} />

        <div className="presentation">
          <h2>{title}</h2>
          <p>{location}</p>
          <Tags tags={tags} />

          <div className="landlord">
            <div className="landlordInformation">
              <div className="landlordName">
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <div className="landlordImage">
                <img src={host.picture} alt={`propriétaire: ${host.name}`} />
              </div>
            </div>
            <div className="rating">
              <Rating rating={rating} />
            </div>
          </div>
        </div>

        <div className="description">
          <Dropdown title={"Description"} text={description} />
          <Dropdown title={"Équipements"} text={equipments} />
        </div>
      </main>
    );
  }
};

export default Lodging;
