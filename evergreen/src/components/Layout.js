import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Nav2 from './Nav2';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import message from '../assets/images/message-circle.svg';

const ContentStyles = styled.div`
  // background-color: red;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: fixed;
  left: 82%;
  top: 85%;
  background-color: #1da9f2;
  background-image: url(${message});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 100;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    <ContentStyles className="" />
    {children}
    <Footer />
  </>
);

export default Layout;
