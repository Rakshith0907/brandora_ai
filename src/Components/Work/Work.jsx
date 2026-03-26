import React from "react";
import "./Work.css";
 
const Work = () => {
  const works = [
    {
      heading: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage.",
      image: "/images/work1.jpg",
    },
    {
      heading: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: "/images/work2.jpg",
    },
    {
      heading: "Fitness app promotion",
      description: "We help you create amazing strategies and drives results.",
      image: "/images/work3.jpg",
    },
  ];
  return (
    <div id="work" className="work-main">
      <div className="work-components">
        <div className="work-heading">
          <h1>Our latest work</h1>
          <p>
            From strategy to execution, we craft digital solutions that move
            your business forward
          </p>
        </div>
        <div className="work-elements">
          {works.map((e, i) => {
            return (
              <div key={i} className="work-card">
                <img src={e.image} alt="imgloading" />
                <h5>{e.heading}</h5>
                <p>{e.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
