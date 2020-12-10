import React from 'react';
import { graphql } from 'gatsby';
import DesignsFilter from '../components/DesignsFilter/DesignsFilter';
import ShirtsList from '../components/Shirts';
import SEO from '../components/SEO';

const Shirts = ({ data, pageContext }) => {
  const shirtList = data.shirts.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.designToFilterBy
            ? `Shirts with ${pageContext.designToFilterBy}`
            : `All Shirts`
        }
      />
      <DesignsFilter activeDesign={pageContext.designToFilterBy} />
      <ShirtsList shirtList={shirtList} />
    </>
  );
};

export const query = graphql`
  # designToFilterBy value comes directly from the context set in gatsby-node, so the variable  names must match

  #   using regex
  query ShirtsQuery($designToFilterByRegex: String) {
    #   using equals
    #   query ShirtsQuery($designToFilterBy: [String]) {
    shirts: allSanityShirts(
      filter: {
        design: { elemMatch: { name: { regex: $designToFilterByRegex } } }
      } #   filter: { design: { elemMatch: { name: { in: $designToFilterBy } } } }
    ) {
      totalCount
      nodes {
        id
        name
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        design {
          name
        }
      }
    }
  }
`;

export default Shirts;
