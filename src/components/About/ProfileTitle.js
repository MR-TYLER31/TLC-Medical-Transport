import React from "react";

const ProfileTitle = ({ title }) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-6 text-left">
        <h4
          className="text-capitalizefont-weight-bold"
          style={{ color: "#007bff" }}
        >
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ProfileTitle;
