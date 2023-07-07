import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/pages/Home';
import Cart from './pages/pages/Cart';
import ErrorPage from './pages/pages/ErrorPage';
import Shop from './pages/pages/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
 
        <Route path='/Cart' element={<Cart/>} /> 
        <Route path='/Shop' element={<Shop/>} /> 

        
         <Route path='*' element={<ErrorPage/>} /> 
      </Routes>
      
     
    </div>
  );
}

export default App;
