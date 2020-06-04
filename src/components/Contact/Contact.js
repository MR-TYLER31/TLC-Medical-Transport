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
              <h4 className="font-weight-bold text-uppercase mt-3">Address</h4>
              <p>TLC Medical Transport</p>
              <p>6312 Riverdale Street,</p>
              <p>San Diego, CA, 92120</p>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <FaPhone className="contact-icon" />
              <h4 className="font-weight-bold text-uppercase mt-3">Phone</h4>
              <p>Phone: 619-284-RIDE (7433)</p>
              <p>Fax: 619-284-7437</p>
              <p>
                <b>Now Serving Orange County</b>
                <br />
                Phone: 949-830-7433
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <MdEmail className="contact-icon" />
              <h4 className="font-weight-bold text-uppercase mt-3">Email</h4>
              <p>Email: tlcride@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    );
}


export default Contact