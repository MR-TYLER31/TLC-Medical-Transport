import React from "react";

const ProfileTitle = ({ title }) => {
  return (
    <div className="row">
      <div className="col-10 col-sm-6 text-left mb-3">
        <h4 className="text-capitalize font-weight-bold" style={{color: "#007bff" }}>{title}</h4>
      </div>
    </div>
  );
};

export default ProfileTitle;
