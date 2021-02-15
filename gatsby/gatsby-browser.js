import React from 'react';
import './src/assets/tailwind.css';

// import 'tailwindcss/dist/base.min.css';
// import 'tailwindcss/base.css';
// import 'tailwindcss/components.css';
// import 'tailwindcss/utilities.css';

import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <OrderProvider>{element}</OrderProvider>
);
