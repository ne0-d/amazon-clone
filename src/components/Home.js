import "./Home.css";
import AdOne from "./AdOne";
import AdFour from "./AdFour";
export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home-row">
          <AdFour />
          <AdOne />
          <AdFour />
        </div>
        <div className="home-row">
          <AdFour />
          <AdOne />
          <AdFour />
        </div>
      </div>
    </div>
  );
}
