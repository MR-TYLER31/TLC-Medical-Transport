import React from "react";
import { Link } from "gatsby";
import ProfileTitle from "./ProfileTitle";
import RequestCard from '../Globals/RequestCard'
import FindUsCard from "../Globals/FindUsCard";


const Profile = () => {
  return (
    <section className="py-5">
      <div className="container">
        <ProfileTitle
          title="TLC Medical Transport Is A
Non-Emergency Medical
Transportation Provider"
        />
        <div className="row">
          <div
            className="col-10 col-sm-6 mx-auto text-left"
            style={{ fontSize: "15px" }}
          >
            <p>
              We are committed to serving our clients throughout the Southern
              California area by providing the highest quality and most
              efficient door-to-door local and long distance non emergency
              medical transportation.
            </p>
            <p>
              Our mission is to provide safe, timely, courteous and personalized
              transportation services that get you comfortably to and from your
              destination. TLC works closely with hospitals, insurance
              providers, long-term care facilities, healthcare networks and
              managed care organizations to determine how to best serve our
              clients in need of non-emergency medical transportation. TLC
              focuses on ensuring that the patient receives high-quality service
              at the most efficient cost.
            </p>
            <p>
              Family members nolonger need to struggle loading a heavy
              wheelchair and the patient into a private car. You can depend on
              TLC’s cautious and professional drivers to make sure that you
              arrive safely inside your home or doctor’s office. Our staff is
              fully trained in First Aid and CPR and our vehicles are equipped
              with fully automated wheelchair lifts for easy accessibility. TLC
              is in compliance with the requirements of The Metropolitan Transit
              System and San Diego County Sheriff’s Department with regard to
              non-emergency transportation services. Our specialized
              transportation is available to all, including senior citizens,
              people with limited mobility, people using wheelchairs, and
              parents with children with special needs. Our services are also
              requested by hospitals, doctors, insurance companies, nursing or
              group homes, and assisted living facilities.
            </p>
            <p>
              We accept cash, check, major credit cards, and or private
              insurance with pre-authorization. Payment is accepted at time of
              service.
            </p>
            <Link to="/about/">
              <button className="btn btn-yellow text-uppercase">
                about page
              </button>
            </Link>
          </div>
          <div className="col-10 col-sm-6 mx-auto text-left">
            <RequestCard/>
            <FindUsCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
