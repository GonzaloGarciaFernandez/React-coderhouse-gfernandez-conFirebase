import React from 'react';
import './styles/styles.css';
import { AppRouter } from './routers/AppRouter';
import { CartProvider } from './providers/CartProvider';



export const App = () => {
  return (
    <div className="App principal">
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </div>
  );
}
