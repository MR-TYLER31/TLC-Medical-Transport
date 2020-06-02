import React from 'react'
import Title from '../Globals/Title'

const RequestRide = () => {
    return (
      <section className="request py-5">
        <Title title="request a ride" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="John Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="johnsmith@email.com"
                />
              </div>
              <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description" className="form-control" rows="5" placeholder="your description here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block text-capitalize mt-5">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default RequestRide