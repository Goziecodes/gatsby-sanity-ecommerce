export default function calculateOrderTotal(order, shirts) {
  // wes bos implementation: he passed in entire shirts data and order list, finds one order and picks the price form shirt list then increase reducer accumulator

  return order.reduce((total, singleOrder) => {
    const shirt = shirts.find(
      (singleShirt) => singleShirt.id === singleOrder.id
    );
    return total + shirt.price;
  }, 0);

  //   my implementation, i pass in price when adding order to cart and use it in reduce
  /*   return order.reduce((total, singleOrder) => total + singleOrder.price, 0);
   */
}
