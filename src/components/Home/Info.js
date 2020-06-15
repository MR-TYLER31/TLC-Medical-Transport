import React from "react";
// import infoImage from '../../images/info-background.jpeg'

// const infoBackground = {
//   backgroundImage: `url(${infoImage})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   opacity: "1 !important"
// };
const Info = () => {
  return (
    <section
      id="info-section"
      className="pt-5"
    >
      <div className="container">
        <h2 style={{ fontWeight: "bold" }} className="text-white mb-5">
          Providing Door-To-Door Non Emergency Medical Transportation
        </h2>
        <div className="row">
          <div className="col-12 col-sm-10 col-md-6 mx-auto text-center">
            <p className="lead text-white mb">
              TLC Medical Transport is a non-emergency medical transportation
              provider. We are committed to providing the highest quality and
              most efficient service to our clients throughout the Southern
              California area. We provide professional door-to-door local and
              long distance non emergency medical transportation.
            </p>
          </div>
          <div className="col-10 col-sm-10 col-md-6 mx-auto iframe-container">
            <iframe
              title="TLC Video"
              className="responsive-iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kIR7sV9MGOY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
