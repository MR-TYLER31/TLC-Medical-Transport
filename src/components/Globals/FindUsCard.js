import React from "react";
import allScripts from '../../images/allscripts.png'

const FindUsCard = () => {
  return (
    <div className="card">
      <h5
        className="card-header text-white"
        style={{ background: "rgb(3, 112, 171)" }}
      >
        Find Us on ECIN
      </h5>
      <div className="card-body" style={{ background: "#ece8dc" }}>
        <img src={allScripts} alt="ECIN" style={{ width: "200px" }} />
        <p className="card-text text-dark">
          We are now listed and can be easily found on the{" "}
          <a
            href="https://www.extendedcare.com/"
            target="_blank"
            rel="noreferrer"
          >
            Extended Care Information Network
          </a>
          (ECIN) website!
        </p>
      </div>
    </div>
  );
};

export default FindUsCard;
