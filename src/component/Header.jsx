import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Wrapper>
      <BrandName>Traditional Knots</BrandName>
      <NavBar>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px dotted red;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const BrandName = styled.h1`
  border: 2px dotted green;
  font-size: 2rem;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 32px;
  padding: 8px 16px;
  font-size: 1.5rem;
  border: 2px dotted blue;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default Header;
