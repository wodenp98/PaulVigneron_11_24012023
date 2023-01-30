import Banner from "../../components/Banner/Banner";

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
      <div className="banner">
        <Banner text={<TitleBanner />} />
      </div>
      <div className="gallery"></div>
    </main>
  );
};

export default Home;
