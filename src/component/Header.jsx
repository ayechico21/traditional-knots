import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg
          src={new URL("/images/logo1.png", import.meta.url).href}
        ></LogoImg>
      </LogoWrapper>
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
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid var(--primary-theme);
  margin-bottom: var(--spacing);
  position: relative;
`;

const LogoWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  position: absolute;
  left: 0;
  @media screen and (max-width: 768px) {
    height: 64px;
  }
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  display: block;
`;

const BrandName = styled.h1`
  font-family: var(--cursive-font);
  font-weight: 600;
  font-size: 3rem;
  color: var(--primary-theme);
  line-height: 1;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 20%;
    bottom: 16px;
    width: 220px;
    height: 14px;
    transform: skew(-12deg) translateX(-50%);
    background: rgba(238, 111, 87, 0.5);
    z-index: -1;
  }
  @supports (font-family: var(--cursive-font)) {
    font-size: 5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 8px;
      width: 150px;
      height: 8px;
      transform: skew(-12deg) translateX(-50%);
      background: rgba(238, 111, 87, 0.5);
      z-index: -1;
    }
  }
`;

const NavBar = styled.nav`
  display: flex;
  gap: 32px;
  padding: 8px 16px;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--primary-theme);
  }
`;

export default Header;
