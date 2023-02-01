import Banner from "../../components/Banner/Banner";
import Data from "../../data/apartments.json";
import Cards from "../../components/Cards/Cards";

const TitleBanner = () => {
  return (
    <>
      Chez vous, <br />
      partout et ailleurs
    </>
  );
};

const Home = () => {
  return (
    <main className="main">
      <div className="banner home">
        <Banner title={<TitleBanner />} imgBg="imgHome" />
      </div>
      <div className="gallery">
        {Data.map(({ id, title, cover }) => (
          <Cards key={id} id={id} title={title} img={cover} />
        ))}
      </div>
    </main>
  );
};

export default Home;
