import React from "react";
import "./Home.css";
 
const Home = () => {
  const companies = [
    {
      name: "microsoft",
      logo: "/images/microsoft-logo.png",
    },
    {
      name: "zoom",
      logo: "/images/zoom-logo-xbg.png",
    },
    {
      name: "rakuten",
      logo: "/images/rakuten-logo.svg",
    },
    {
      name: "coinbase",
      logo: "/images/coinbase-logo-xbg.png",
    },
    {
      name: "airbnb",
      logo: "/images/airbnb-logo-xbg.png",
    },
    {
      name: "google",
      logo: "/images/google-logo-xbg.png",
    },
  ];
  return (
    <div id="home" className="home-main">
      <div className="home-components">
        <div className="home-top">
          <h5>Trusted by 10k+ people</h5>
          <h1>
            Turning imagination into <span id="home-span">digital</span> impact.
          </h1>
          <p>
            Creating meaningful connections and turning big ideas into
            interactive digital experiences.
          </p>
        </div>
        <div className="home-image">
          <img src="/images/home-img.jpg" alt="home-img-loading" />
        </div>
        <div className="home-footer">
          <h4>Trusted by Leading Companies</h4>
          <div className="home-footer-logos">
            {companies.map((e, i) => {
              return <img key={i} src={e.logo} alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
