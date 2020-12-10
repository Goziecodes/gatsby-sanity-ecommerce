import React, { useState } from 'react';

// create a order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // create state at provider level
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
