import React from "react";
import "./Services.css";

const Services = () => {
  const ser = [
    {
      heading: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage.",
      logo : <i className="fa-brands fa-adversal"></i>
    },
    {
      heading: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      logo : <i className="fa-solid fa-bars-staggered"></i>
    },
    {
      heading: "Content writing",
      description: "We help you create amazing strategies and drives results.",
      logo : <i className="fa-solid fa-mobile"></i>
    },
    {
      heading: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
        logo : <i className="fa-brands fa-twitter"></i>
    },
  ];
  return (
    <div id="services" className="services-main">
      <div className="services-components">
        <div className="service-heading">
          <h1>How can we help?</h1>
          <p>
            From strategy to execution, we craft digital solutions that move
            your business forward
          </p>
        </div>
        <div className="service-elements">
          {ser.map((e, i) => {
            return (
              <div key={i} className="service-card">
                <div className="service-card-logo">
                  <h4>{e.logo}</h4>
                </div>
                <div className="service-card-elements">
                  <h5>{e.heading}</h5>
                  <p> 
                    {e.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
