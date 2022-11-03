import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import UserProvider from './contexts/UserProvider';
import { ProductsProvider } from './contexts/shop-data';
import { CartProvider } from './contexts/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
  </React.StrictMode>
);

