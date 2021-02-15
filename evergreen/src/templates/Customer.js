import React from 'react';
import { graphql } from 'gatsby';
// import GatsbyImage from 'gatsby-image';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
// import styled from 'styled-components';

const Customer = ({ data: { customer } }) => (
  <>
    <SEO title={customer.name} image={customer.image.asset.fluid} />
    <div className="center">
      <Img fluid={customer.image.asset.fluid} />
      <h2>
        <span className="mark">{customer.name}</span>
      </h2>
      <p>{customer.description}</p>
    </div>
  </>
);

export const query = graphql`
  query($slug: String!) {
    customer: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default Customer;
