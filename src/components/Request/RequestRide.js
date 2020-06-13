import React from 'react'
import Title from '../Globals/Title'
import FindUsCard from '../Globals/FindUsCard'
import PartnersCard from '../Globals/PartnersCard'

const RequestRide = () => {

 return (
   <section className="request py-5 text-white">
     <div className="container">
       <div className="row">
         <div
           className="col-12 col-sm-12 col-md-6 pt-5"
           style={{ background: "rgb(3, 112, 171)" }}
         >
           <Title title="request a ride" />
           <h2 className="display-5 text-capitalize font-weight-bold mb-4">
             <i>Client Information</i>
           </h2>
           <form
             action="https://formspree.io/tylersnyder619406@gmail.com"
             method="POST"
           >
             <div className="form-row">
               <div className="form-group col-md-6">
                 <label htmlFor="firstName">First Name</label>
                 <input
                   type="text"
                   className="form-control"
                   name="First Name"
                   id="firstName"
                   required
                 />
               </div>
               <div className="form-group col-md-6">
                 <label htmlFor="lastName">Last Name</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Last Name"
                   id="lastName"
                   required
                 />
               </div>
             </div>

             <div className="form-row">
               <div className="form-group col-md-6">
                 <label htmlFor="phone">Phone</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Phone"
                   id="phone"
                   required
                 />
               </div>
               <div className="form-group col-md-6">
                 <label htmlFor="email">Email</label>
                 <input
                   type="text"
                   className="form-control"
                   name="_replyto"
                   id="email"
                   required
                 />
               </div>
             </div>

             <div className="form-group">
               <label htmlFor="time" required>
                 Pickup Time
               </label>
               <input
                 type="text"
                 className="form-control"
                 name="Pickup Time"
                 id="time"
               />
             </div>
             <label htmlFor="amPm">AM/PM</label>
             <div className="form-check">
               <input
                 className="form-check-input"
                 type="radio"
                 name="AM/PM"
                 id="gridRadios1"
                 value="AM"
                 defaultChecked
               />
               <label className="form-check-label" htmlFor="gridRadios1">
                 AM
               </label>
             </div>
             <div className="form-check">
               <input
                 className="form-check-input"
                 type="radio"
                 name="AM/PM"
                 id="gridRadios2"
                 value="PM"
               />
               <label className="form-check-label" htmlFor="gridRadios2">
                 PM
               </label>
             </div>

             <div className="form-group mt-3">
               <label htmlFor="date">Pick-up Date</label>
               <input
                 type="text"
                 className="form-control"
                 name="Date"
                 id="date"
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="pickup">Pick-up Address</label>
               <input
                 type="text"
                 className="form-control"
                 name="Pickup Address"
                 id="pickup"
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="dropoff">Drop-off Address</label>
               <input
                 type="text"
                 className="form-control"
                 name="Dropoff Address"
                 id="dropoff"
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="needs">Special Needs</label>
               <br />
               <select
                 name="Needs"
                 id="needs"
                 required=""
                 className="form-control"
               >
                 <option value="Wheel-chair">Wheel-chair</option>
                 <option value="Ambulatory">Ambulatory</option>
                 <option value="Stretcher">Stretcher</option>
               </select>
             </div>
             <button
               type="submit"
               className="btn btn-block text-capitalize my-5 text-primary"
               style={{ background: "white" }}
             >
               Submit
             </button>
           </form>
         </div>
         <div className="col-12 col-sm-12 col-md-6 pt-5">
           <FindUsCard />
           <PartnersCard />
         </div>
       </div>
     </div>
   </section>
 );
   
}

export default RequestRide