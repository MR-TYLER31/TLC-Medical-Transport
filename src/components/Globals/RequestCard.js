import React from 'react'
import { Link } from 'gatsby'

const RequestCard = () => {
    return (
      <div className="card mb-4">
        <h5 className="card-header">Request a Ride Today</h5>
        <div className="card-body">
          <p className="card-text">
            To request a ride, click on the Request a Ride button below. Fill
            out our form and one of our coordinators will get back to you
            shortly.
          </p>
          <Link to=""><button className="btn btn-primary">Request a Ride</button></Link>
        </div>
      </div>
    );
}

export default RequestCard