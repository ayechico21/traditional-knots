import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <Button onClick={toggleDropdown}>☰</Button>
        <DropdownMenu open={isOpen} onClick={toggleDropdown}>
          <DropdownItem>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </DropdownItem>
          <DropdownItem>
            <StyledNavLink to="/about">About Us</StyledNavLink>
          </DropdownItem>
          <DropdownItem>
            <StyledNavLink to="/gallery">Gallery</StyledNavLink>
          </DropdownItem>
          <DropdownItem>
            <StyledNavLink to="/services">Services</StyledNavLink>
          </DropdownItem>
          <DropdownItem>
            <StyledNavLink to="/contact">Contact Us</StyledNavLink>
          </DropdownItem>
        </DropdownMenu>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
// Button component
const Button = styled.button`
  position: relative;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  padding: 4px 8px;
  background: #ed7981;
  border: 2px solid var(--primary-theme);
`;

// Dropdown component
const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  margin: 0;
  padding: 8px 32px;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 2;
  color: white;
  background-color: hsl(
    355.8857142857143,
    82.93838862559242%,
    41.37254901960784%,
    0.5
  );
  background: #ed7981;
`;

// Dropdown item
const DropdownItem = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  display: block;
  &:hover {
    color: var(--primary-theme);
    font-weight: 600;
  }
  &.active {
    color: var(--primary-theme);
    font-weight: bold;
  }
`;
export default DropdownButton;
