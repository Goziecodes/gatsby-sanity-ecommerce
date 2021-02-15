import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
    content: '.';
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const MenuText = styled.div`
  // position: relative;
  @media (max-width: 768px) {
    // padding: 20px 0;
    // font-size: 1.5rem;
    // z-index: 6;
    // color: red;
    width: 20px;
    height: 20px;
    position: relative;
    margin-bottom: 17px;
    top: 13px;
    right: 17px;
    color: #1da9f2;
  }
`;

const NavLinks = ({ navbarOpen }) => (
  <>
    {navbarOpen ? <MenuText>Menu</MenuText> : ''}
    <NavItem to="/">Home</NavItem>
    <NavItem to="#services">Services</NavItem>
    <NavItem to="/projects">Gallery</NavItem>
    <NavItem to="/products">Products</NavItem>
    <NavItem to="/404">Contact</NavItem>
  </>
);

export default NavLinks;
