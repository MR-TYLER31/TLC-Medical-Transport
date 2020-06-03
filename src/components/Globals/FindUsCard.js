import React from "react";

const FindUsCard = () => {
  return (
    <div className="card">
      <h5
        className="card-header text-white"
        style={{ background: "rgb(3, 112, 171)" }}
      >
        Find Us on ECIN
      </h5>
      <div className="card-body">
        <p className="card-text text-dark">
          We are now listed and can be easily found on the{" "}
          <a href="https://www.extendedcare.com/" target="_blank">
            Extended Care Information Network
          </a>
          (ECIN) web site!
        </p>
      </div>
    </div>
  );
};

export default FindUsCard;
