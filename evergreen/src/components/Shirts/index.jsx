import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ShirtGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const SingleShirtStyle = styled.div`
  display: grid;
  /* subgrid makes SingleShirtStyle take/inherit grid sizing from ShirtGridStyles */
  /* as of the time imwriting this its not widely supported so we use @supports not to give it a fallback if the browser does not support it */
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto auto 1fr;
  }
  grid-row: span 3;
  grid-gap: 1rem;
`;

const SingleShirt = ({ shirt }) => (
  <SingleShirtStyle>
    <Link to={`/shirt/${shirt.slug.current}`}>
      <h2>
        <span className="mark">{shirt.name}</span>
      </h2>
    </Link>
    <p>{shirt.design.map((design) => design.name).join(', ')}</p>
    <Img fluid={shirt.image.asset.fluid} alt={shirt.name} />
  </SingleShirtStyle>
);

const ShirtsList = ({ shirtList }) => (
  <ShirtGridStyles>
    {shirtList.map((shirt) => (
      <SingleShirt key={shirt.id} shirt={shirt} />
    ))}
  </ShirtGridStyles>
);

export default ShirtsList;
