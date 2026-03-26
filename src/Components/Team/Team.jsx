import React from "react";
import "./Team.css";
 
const Team = () => {
  const teamMembers = [
    {
      image: "/images/emp1.jpg",
      name: "Haley Carter",
      role: "CEO & founder",
    },
    {
      image: "/images/emp2.jpg",
      name: "James Walker",
      role: "Ads manager",
    },
    {
      image: "/images/emp3_1.jpg",
      name: "Jessica Morgan",
      role: "Vice president",
    },
    {
      image: "/images/emp4.jpg",
      name: "Ashley Bennett",
      role: "Marketing & sales",
    },
    {
      image: "/images/emp5_1.jpeg",
      name: "Emily Parker",
      role: "Content marketer",
    },
    {
      image: "/images/emp6_1.jpg",
      name: "Ryan Mitchell",
      role: "Content writer",
    },
    {
      image: "/images/emp7.jpg",
      name: "Megan Brooks",
      role: "Performance manager",
    },
    {
      image: "/images/emp8.jpg",
      name: "Amber Foster",
      role: "Senior writer",
    },
  ];
  return (
    <div className="team-main">
      <div className="team-components">
        <div className="team-heading">
          <h1>Meet the team</h1>
          <p>
            A passionate team of digital experts dedicated to your brands
            success.
          </p>
        </div>
        <div className="team-elements">
          {teamMembers.map((e, i) => {
            return (
              <div key={i} className="team-card">
                <div className="team-card-img">
                  <img src={e.image} alt="" />
                </div>
                <div className="team-details">
                  <h5>{e.name}</h5>
                  <p>{e.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
