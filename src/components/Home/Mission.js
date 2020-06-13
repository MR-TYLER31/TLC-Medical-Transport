import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'
const Mission = () => {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="our mission" />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb">
                Our mission is to provide safe, timely, courteous and
                personalized transportation services that get you comfortably to
                and from your destination. TLC MEDICAL TRANSPORT works closely
                with hospitals, insurance providers, long-term care facilities,
                healthcare networks and managed care organizations to determine
                how to best serve our clients in need of non-emergency medical
                transportation. TLC focuses on ensuring that the patient
                receives high-quality service at the most efficient cost.
              </p>
              <Link to="/about/">
                <button className="btn btn-blue text-uppercase">
                  about page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Mission