import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";

const Contact = () =>{
    return (
      <section className="py-5">
        <div className="container">
          <div className="row mx-auto text-center ">
            <div className="col-12 col-sm-6 col-md-4">
              <MdLocationOn className="contact-icon" />
              <h4 className="font-weight-bold text-uppercase">Address</h4>
              <p>TLC Medical Transport</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <FaPhone className="contact-icon" />
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <MdEmail className="contact-icon" />
            </div>
          </div>
        </div>
      </section>
    );
}


export default Contact