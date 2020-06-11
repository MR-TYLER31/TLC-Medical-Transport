import React from 'react'
import { Link } from 'gatsby'

 const Footer = () => {
    return (
      <footer className="footer py-3">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="text-white pr-3 navbar-brand">
              TLC Ride &copy; {new Date().getFullYear().toString()}
            </a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/request">
                  Request a Ride
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/careers">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
}
//  <p className="text-white pr-3">
//    TLC Ride &copy; {new Date().getFullYear().toString()}
//  </p>;

export default Footer