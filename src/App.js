
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/pages/Home';
import Cart from './pages/pages/Cart';
import ErrorPage from './pages/pages/ErrorPage';
import Shop from './pages/pages/Shop';
import Checkout from './pages/pages/Checkout';
import Success from './pages/pages/Success';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>} />
 
        <Route path='/Cart' element={<Cart/>} /> 
        <Route path='/Shop' element={<Shop/>} /> 
        <Route path='/CheckOut' element={<Checkout/>} /> 
        <Route path='/Success' element={<Success/>} /> 

        


        
         <Route path='*' element={<ErrorPage/>} /> 
      </Routes>
      
     
    </div>
  );
}

export default App;
