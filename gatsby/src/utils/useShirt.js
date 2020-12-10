import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
import calculateOrderTotal from './calculateOrderTotal';

export default function useShirt({ shirts, values }) {
  // 1. creaete state to hold our order
  // we moved the state up to provider
  // const [order, setOrder] = useState([]);
  // now we acees order and setOrder state via context

  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 2. function to add things to our order
  function addToOrder(orderToAdd) {
    setOrder([...order, orderToAdd]);
  }

  // 3. function to remove things to our order
  function removeFromOrder(index) {
    setOrder([
      /*  // everything b4 index of item we want to remove
      ...order.slice(0, index),
      // everything after index of item we want to remove
      ...order.slice(index + 1), */

      // my implementation uses filter. filter returns a new array that passes the condition i.e true, so i compare the prop index with ...order index and negate it
      ...order.filter((myOrder, i) => i !== index),
    ]);
  }

  // 4. move the data to a serverless function
  // function to submit order
  async function submitOrder(e) {
    e.preventDefault();
    // console.log(e);
    setLoading(true);
    setError(null);
    // setMessage(null);

    // gather all data needed for order
    const body = {
      order: attachNamesAndPrices(order, shirts),
      total: calculateOrderTotal(order, shirts),
      name: values.name,
      email: values.email,
      mapleSyrup: values.mapleSyrup,
    };
    console.log(body);

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const text = JSON.parse(await res.text());

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      // it worked
      setLoading(false);
      setMessage(`Success! come and take your shirt`);
    }
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
}
