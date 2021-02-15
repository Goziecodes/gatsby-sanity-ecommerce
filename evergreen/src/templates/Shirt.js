import React from 'react';
import { graphql } from 'gatsby';
// import GatsbyImage from 'gatsby-image';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ShirtGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

const SingleShirtPage = ({ data: { shirt } }) => (
  // console.log(shirt, 'no compte');
  <>
    <SEO title={shirt.name} image={shirt?.image?.asset?.fluid?.src} />
    <ShirtGrid>
      <Img fluid={shirt.image.asset.fluid} />
      {/* <GatsbyImage fluid={shirt.image.asset.fluid} /> */}
      <div>
        <h2 className="mark">{shirt.name}</h2>
        <ul>
          {shirt.design.map((design) => (
            <li key={design.id}>{design.name}</li>
          ))}
        </ul>
      </div>
    </ShirtGrid>
  </>
);

// this needs to be be dynamic based on shirt slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    shirt: sanityShirts(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      design {
        name
        id
      }
    }
  }
`;

export default SingleShirtPage;
