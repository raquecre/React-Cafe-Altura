import React, { useContext } from 'react';
import Navigation from '../../components/Navigation/Navigation';

import ProductsCart from '../../components/ProductsCart/ProductsCart';
import { CartCoffeesContext } from '../../context/CoofeesInCart';
import TypeShipment from '../../components/TypeShipment/TypeShipment';
import TotalCart from '../../components/TotalCart/TotalCart';

const Cart = () => {

    const { totalCoffeesInCart } = useContext(CartCoffeesContext)

    return (
        <div className="Cart-body">
            <Navigation />
            <p className='text-3xl text-green-800 text-center'>Cesta ({totalCoffeesInCart()}) </p>
            <div className='flex justify-around'>
                <div className='flex flex-col '>
                    <ProductsCart />
                    <TypeShipment />
                </div>
                <TotalCart />

            </div>

        </div>
    )
}

export default Cart