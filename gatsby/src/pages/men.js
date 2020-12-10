import React from 'react';
import { graphql } from 'gatsby';
import ShirtsList from '../components/Shirts';
import DesignsFilter from '../components/DesignsFilter/DesignsFilter';

const Men = ({ data }) => {
  const shirtList = data.shirts.nodes;
  return (
    <>
      <DesignsFilter />
      <h1>Hey! there are {data.shirts.totalCount} shirts Available!</h1>
      <ShirtsList shirtList={shirtList} />
    </>
  );
};
// const Men = (props) => (
//   console.log(props,'mpa benji')
//   <>
//     <h1>Men</h1>
//   </>
// );

export const query = graphql`
  query MensQuery {
    shirts: allSanityShirts {
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
export default Men;
