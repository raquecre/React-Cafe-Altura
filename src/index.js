import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom'; // <== IMPORT
import { AllCoffeesContext } from './context/AllCoffees';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <AllCoffeesContext>
      <App />
    </AllCoffeesContext>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
