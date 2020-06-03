import React from 'react'
import Title from '../Globals/Title'

const RequestRide = () => {
    return (
      <section className="request py-5">
        <Title title="request a ride" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/tylersnyder619406@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="First Name">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Pickup Time" required>
                  Pickup Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="time"
                  id="time"
                />
              </div>
              <label htmlFor="am/pm">AM/PM</label>
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="am"
                  id="am"
                  value="AM"
                />
                <label className="form-check-label" htmlFor="AM">
                  AM
                </label>
              </div>
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="pm"
                  id="pm"
                  value="PM"
                />
                <label className="form-check-label" htmlFor="PM">
                  PM
                </label>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="date">Pick-up Date</label>
                <input
                  type="text"
                  className="form-control"
                  name="date"
                  id="date"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pickup">Pick-up Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="pickup"
                  id="pickup"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dropoff">Drop-off Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="dropoff"
                  id="dropoff"
                  required
                />
              </div>
              <div className="form-group">
                <label for="inputNeeds">Special Needs</label>
                <select id="inputNeeds" class="form-control">
                  <option selected>Stretcher</option>
                  <option selected>Ambulatory</option>
                  <option selected>Wheel-chair</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block text-capitalize mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default RequestRide