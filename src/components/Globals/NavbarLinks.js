// NavbarLinks.js

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";


const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #940002;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #940002;
    ::after {
      width: 100%;
    }
  }

  :active {
    color: #333333;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;


// .active-nav-item {
//     color: #333333;
// }
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/request">Request a Ride</NavItem>
      <NavItem to="/products">Products</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/careers">Careers</NavItem>
      <NavItem>
        <FaShoppingCart className="cart-icon snipcart-checkout" />
      </NavItem>
    </>
  );
};

export default NavbarLinks;
