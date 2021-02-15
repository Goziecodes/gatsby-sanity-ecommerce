import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';

const Logo = () => (
  <Image as={Link} to="/yes">
    {/* <img src={logo} alt="Company Logo" /> */}
  </Image>
);

export default Logo;

const Image = styled.div`
  // background: red;
  width: 40rem;
  height: 100%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  position: relative;
  right: 44px;
  top: 5px;

  // img {
  //   width: 100px;
  //   height: 100px;
  // }
`;

// const Image = styled.div`
//   // background: red;
//   width: 100px;
//   height: 90%;
//   // background-image: url(logo);
//   // border-radius: 50%;
//   // border: 2px solid red;
//   img {
//     width: 100%;
//     height: 100%;
//     margin: auto 0;
//     // flex: 0 1 36px;
//     @media (max-width: 768px) and (orientation: landscape) {
//       //   flex: 0 1 25px;
//     }
//   }
// `;
