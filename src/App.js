import React from 'react';
import './styles/styles.css';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
  return (
    <div className="App principal">
      <AppRouter/>
    </div>
  );
}
