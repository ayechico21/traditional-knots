import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import HamburgurMenu from "./HamburgerMenu";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg
          src={new URL("/images/logo.jpg", import.meta.url).href}
        ></LogoImg>
      </LogoWrapper>
      <BrandName>Traditional Knots</BrandName>
      <NavBar>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/about">About Us</StyledNavLink>
        <StyledNavLink to="/gallery">Gallery</StyledNavLink>
        <StyledNavLink to="/services">Services</StyledNavLink>
        <StyledNavLink to="/contact">Contact Us</StyledNavLink>
      </NavBar>
      <HamburgurMenu />
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
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoWrapper = styled.div`
  height: 150px;
  overflow: hidden;
  position: absolute;
  left: 8px;
  top: 8px;
  border-radius: 16px;
  aspect-ratio: 1;
  @media screen and (max-width: 768px) {
    height: 64px;
    position: initial;
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
  text-align: center;
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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--primary-theme);
  }
  &.active {
    color: var(--primary-theme);
    font-weight: bold;
  }
`;

export default Header;
