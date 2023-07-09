import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BestConditions from '../../components/BestConditions/BestConditions';
import ProductsCart from '../../components/ProductsCart/ProductsCart';
const Cart = () =>{
    return(
        <div className="Cart-body">
           <Navigation/>
           <ProductsCart/>
           
        </div>
    )
}

export default Cart