// Logo.js
import React from "react";
import styled from "styled-components";
import LogoImg from '../../images/logo.jpeg'
import { Link } from "gatsby";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;
const Logo = () => {

  return (
    <LogoWrap as={Link} to="/">
      <img src={LogoImg} alt="Logo" style={{ width: "50px" }} />
      {/* <span style={{ color: "red" }}>Medical</span>
      <span style={{ color: "#0370ab" }}> Transport</span> */}
    </LogoWrap>
  );
};

export default Logo;
