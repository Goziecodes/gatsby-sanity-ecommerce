import formatMoney from './formatMoney';

export default function attachNamesAndPrices(order, shirts) {
  return order.map((item) => {
    const shirt = shirts.find((singleShirt) => singleShirt.id === item.id);
    return {
      ...item,
      name: shirt.name,
      thumbnail: shirt.image.asset.fluid.src,
      price: formatMoney(shirt.price),
    };
  });
}
