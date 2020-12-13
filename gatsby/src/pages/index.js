import React from 'react';
import tw from 'twin.macro';

import { graphql } from 'gatsby';
import styled from 'styled-components';
import DesignsFilter from '../components/DesignsFilter/DesignsFilter';
import ShirtsList from '../components/Shirts';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid/LoadingGrid';
import ItemGrid from '../components/ItemGrid/ItemGrid';

// const Button = styled.button`
//   ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
// `;

/* function LatestClothes({ latest }) {
  // console.log(latest, 'im latest');
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Latest</span>
      </h2>
      <p>hhhhhhhhhhhhhhhhhhhhhhh</p>
      {!latest && <LoadingGrid count={4} />}
      {latest && !latest?.length && <p>No clothings to display 😢</p>}
      {latest?.length && <ItemGrid items={latest} />}
    </div>
  );
}
function KevClothingLine({ fashionLine }) {
  // console.log(fashionLine, 'im fashionline');
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">fashion line</span>
      </h2>
      <p>hhhhhhhhhhhhhhhhhhhhhhh</p>
      {!fashionLine && <LoadingGrid count={4} />}
      {fashionLine && !fashionLine?.length && <p>No clothings to display 😢</p>}
      {fashionLine?.length && <ItemGrid items={fashionLine} />}
    </div>
  );
}

const HomePage = () => {
  const { fashionLine, latest } = useLatestData();
  // console.log({ fashionLine, latest });
  // console.log(latest, 'im latest 1111');

  return (
    <div className="center">
      <h2>best shirt makers in town</h2>
      <p>open all day all week</p>

      <HomePageGrid>
        <LatestClothes latest={latest} />
        <KevClothingLine fashionLine={fashionLine} />
      </HomePageGrid>
    </div>
  );
}; */

const HomePage = ({ data }) => {
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
`;

export default HomePage;
