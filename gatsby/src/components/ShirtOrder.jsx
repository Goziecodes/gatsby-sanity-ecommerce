import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import formatMoney from '../utils/formatMoney';

const ShirtOrder = ({ order, shirts, removeFromOrder }) => (
  <>
    {order.map((singleOrder, index) => {
      const foundShirt = shirts.find((shirt) => shirt.id === singleOrder.id);
      return (
        <MenuItemStyles key={`${singleOrder.id}-${index}`}>
          <Img fluid={foundShirt.image.asset.fluid} />
          <h2>{foundShirt.name}</h2>
          <p>{formatMoney(foundShirt.price)}</p>
          <button
            type="button"
            className="remove"
            title={`remove ${foundShirt.name} from order`}
            onClick={() => removeFromOrder(index)}
          >
            &times;
          </button>
        </MenuItemStyles>
      );
    })}
  </>
);

export default ShirtOrder;
