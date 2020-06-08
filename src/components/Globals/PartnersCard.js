import React from "react";
// import { Link } from "gatsby";

const PartnerCard = () => {
  return (
    <div className="card my-4">
      <h5
        className="card-header text-white"
        style={{ background: "rgb(3, 112, 171)" }}
      >
        Business Partners
      </h5>
      <div className="card-body" style={{ background: "#ece8dc" }}>
        <a href="https://www.amr.net/" target="_blank" rel="noreferrer">
          <p className="card-text">Rural Metro / Pacific Ambulance</p>
        </a>
        <p className="card-text text-dark">
          The largest 911 paramedic and non-emergency ambulance provider in San
          Diego County.
        </p>
        <p className="card-text text-dark">
          TLC is in compliance with the requirements of The Metropolitan Transit
          System and the San Diego Sheriff’s Department with regard to
          non-emergency transportation services.
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
