import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import formatMoney from '../utils/formatMoney';
import OrderFormstyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useShirt from '../utils/useShirt';
import ShirtOrder from '../components/ShirtOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

const Order = ({ data }) => {
  const shirts = data.shirts.nodes;

  const { values, updateValue } = useForm({
    name: '',
    email: '',
    mapleSyrup: '',
  });

  const {
    addToOrder,
    order,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  } = useShirt({
    shirts,
    values,
  });

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <>
      <SEO title="place your orders" />
      <OrderFormstyles onSubmit={submitOrder}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={values.name}
            onChange={updateValue}
            name="name"
            id=""
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={values.email}
            onChange={updateValue}
            name="email"
            id=""
          />
          <input
            className="mapleSyrup"
            type="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValue}
            name="mapleSyrup"
            id=""
          />
        </fieldset>

        <fieldset disabled={loading} className="menu">
          <legend>Menus</legend>
          {shirts.map((shirt, index) => (
            <MenuItemStyles key={`${shirt.id}-${index}`}>
              <Img
                width="50"
                height="50"
                fluid={shirt.image.asset.fluid}
                alt={shirt.name}
              />
              <div>
                <h2>{shirt.name}</h2>
              </div>
              <div>
                <p>{formatMoney(shirt.price)}</p>
                <button
                  onClick={() =>
                    addToOrder({ id: shirt.id, price: shirt.price })
                  }
                  type="button"
                  key={Math.random()}
                >
                  Add to cart
                </button>
              </div>
              {/*   <div>
                {['S', 'M', 'L'].map((size) => (
                  <button type="button">
                    {size} {formatMoney(calculateShirtPrice(shirt.price, size))}
                  </button>
                ))}
              </div> */}
            </MenuItemStyles>
          ))}
        </fieldset>

        <fieldset disabled={loading} className="order">
          <legend>Order</legend>
          <ShirtOrder
            order={order}
            removeFromOrder={removeFromOrder}
            shirts={shirts}
          />
        </fieldset>

        <fieldset disabled={loading} className="">
          <h3>
            Your Total is {formatMoney(calculateOrderTotal(order, shirts))}
          </h3>
          <div>{error ? <p>Error: {error}</p> : <p>{message}</p>}</div>
          <button disabled={loading} type="submit">
            {loading ? 'loading...' : 'order now'}
          </button>
        </fieldset>
      </OrderFormstyles>
    </>
  );
};

export const query = graphql`
  query {
    shirts: allSanityShirts {
      totalCount
      nodes {
        id
        name
        price
        image {
          asset {
            fluid(maxWidth: 100) {
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

export default Order;
