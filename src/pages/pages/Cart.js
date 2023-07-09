import React, { useContext } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BestConditions from '../../components/BestConditions/BestConditions';
import ProductsCart from '../../components/ProductsCart/ProductsCart';
import { CartCoffeesContext } from '../../context/CoofeesInCart';

const Cart = () =>{

	const { cartCoffees } = useContext(CartCoffeesContext)
	
	console.log(cartCoffees.length);
    return(
        <div className="Cart-body">
           <Navigation/>
            <p className='text-3xl text-green-700 text-center'>Cesta ({cartCoffees.length}) </p>
           <ProductsCart/>
           
        </div>
    )
}

export default Cart