import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter as Router } from 'react-router-dom'; // <== IMPORT
import AllCoffeesContextProvider from './context/AllCoffees';
import CartCoffeesContextProvider from './context/CoofeesInCart';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <AllCoffeesContextProvider>
      <CartCoffeesContextProvider>
        <App />
      </CartCoffeesContextProvider>
    </AllCoffeesContextProvider>

  </Router>

);

reportWebVitals();
