import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../../assets/images/logo.jpg';

const Logo = () => (
  <Image as={Link} to="/yes">
    <img src={logo} alt="Company Logo" />
  </Image>
);

export default Logo;

const Image = styled.div`
  background: red;
  width: 6rem;
  height: 90%;
  // border-radius: 50%;
  // border: 2px solid red;
  img {
    width: 100%;
    height: 100%;
    margin: auto 0;
    // flex: 0 1 36px;
    @media (max-width: 768px) and (orientation: landscape) {
      //   flex: 0 1 25px;
    }
  }
`;
