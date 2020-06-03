import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

const BackgroundSection = ({img, styleClass, title, children}) => {

    return (
      <BackgroundImage className={styleClass} fluid={img}>
        <div className="row">
          <div className="col-10 col-md-12">
            <h1 className="title text-center text-uppercase text-white dispaly-4 font-weight-bold">
              {title}
            </h1>
            <h3 className="text-white">
              Safe, Timely, and Courteous Transportation
            </h3>
            <h1 className="text-white font-weight-bold">Rest Easy.</h1>
              <Link to="/request"><button className="btn" style={{ background: "rgb(3, 112, 171)", border: "1px solid white" }}>
                <span style={{ color: "white" }}>
                  Available 24/7
                </span>
                <br />
                <i style={{ color: "white" }}>Request A Ride</i>
              </button>
              </Link>
          </div>
        </div>
        {children}
      </BackgroundImage>
    );
}

BackgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}

export default BackgroundSection