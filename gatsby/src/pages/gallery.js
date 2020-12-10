import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination/Pagination';
import SEO from '../components/SEO';

const CustomersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const CustomerStyle = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 3rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 0.5rem;
    margin: 0.5rem;
    margin-top: -2.5rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;

// grid-auto-rows: auto auto 500px;
const Gallery = ({ data, pageContext }) => {
  const customers = data.clients.nodes;
  console.log(customers, 'hereee');
  return (
    <>
      <SEO title={`our Customers - page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={process.env.GATSBY_PAGE_SIZE}
        totalCount={data.clients.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/gallery"
      />
      <CustomersGrid>
        {customers.map((customer) => (
          <CustomerStyle>
            <Link to={`/customer/${customer.slug.current}`}>
              <h2>
                <span className="mark">{customer.name}</span>
              </h2>
              <Img fluid={customer.image.asset.fluid} />
              <p className="description">{customer.description}</p>
            </Link>
          </CustomerStyle>
        ))}
      </CustomersGrid>
    </>
  );
};

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 4) {
    clients: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default Gallery;
