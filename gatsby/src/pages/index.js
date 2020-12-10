import React from 'react';
import { graphql } from 'gatsby';
import DesignsFilter from '../components/DesignsFilter/DesignsFilter';
import ShirtsList from '../components/Shirts';

function LatestClothes() {
  return (
    <div>
      <p>latestClothes </p>
    </div>
  );
}
function KevClothingLine() {
  return (
    <div>
      <p>kevClothingLine </p>
    </div>
  );
}

const HomePage = () => {
  console.log('yes');
  return (
    <div className="center">
      <h2>best shirt makers in town</h2>
      <p>open all day all week</p>

      <div>
        <LatestClothes />
        <KevClothingLine />
      </div>
    </div>
  );
};

/* const HomePage = ({ data }) => {
  const shirtList = data.shirts.nodes;
  return (
    <>
      <DesignsFilter />
      <h1>Hey! there are {data.shirts.totalCount} shirts Available!</h1>
      <ShirtsList shirtList={shirtList} />
    </>
  );
}; 

export const query = graphql`
  query AllShirtsQuery {
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
`; */

export default HomePage;
