import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const DesignStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    padding: 3px;
    background: var(--grey);
    align-items: center;
    border-radius: 5px;
    .count {
      background: white;
      padding: 2px 4px;
      border-radius: 5px;
    }
    // i used the aria-current attribute gatsby sets to current links to style the b instead of the active prop i passed from shirts.js
    // &.active {
    //   background: var(--yellow);
    // }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;

const countShirtsInDesigns = (shirts) => {
  // return shirts with counts
  const counts = shirts
    .map((shirt) => shirt.design)
    .flat()
    .reduce((acc, design) => {
      // check if design exists
      const existingDesign = acc[design.id];
      console.log('existing design', existingDesign);
      console.log('design', design);
      console.log('accumultor', acc);
      if (existingDesign) {
        console.log('im here o', existingDesign.name);
        // increment by 1
        existingDesign.count += 1;
        // acc[design] += 1;
      } else {
        //   else create new entry in our accumulator and set count to 1
        acc[design.id] = {
          id: design.id,
          name: design.name,
          count: 1,
        };
      }

      return acc;
    }, {});
  // sort based on number of count
  const sortedDesigns = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedDesigns;
};

const DesignsFilter = ({ activeDesign }) => {
  // get list of all designs
  // get list of all pizzas and their designs

  const { /* designs, */ shirts } = useStaticQuery(graphql`
    query {
      # designs: allSanityDesign {
      #   nodes {
      #     name
      #     id
      #   }
      # }
      shirts: allSanityShirts {
        nodes {
          id
          name
          design {
            name
            id
          }
        }
      }
    }
  `);

  // count how many shirts in each design
  const designsWithCount = countShirtsInDesigns(shirts.nodes);
  // loop over the list of designs and display the design and count of shirt in that design
  // link it up
  //   console.clear();
  console.log({ shirts }, 'MD');
  console.log(designsWithCount, 'DC');
  return (
    <DesignStyles>
      <Link to="/">
        <span className="name">All</span>
        <span className="count"> {shirts.nodes.length}</span>
      </Link>

      {designsWithCount.map((design) => (
        <Link
          to={`/design/${design.name}`}
          key={design.id}
          className={design.name === activeDesign ? 'active' : ''}
        >
          <span className="name"> {design.name}</span>
          <span className="count"> {design.count}</span>
        </Link>
      ))}
    </DesignStyles>
  );
};

export default DesignsFilter;
