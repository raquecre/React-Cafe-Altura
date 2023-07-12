import React, { useContext } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Link } from 'react-router-dom';
import ProductsCart from '../../components/ProductsCart/ProductsCart';
import { CartCoffeesContext } from '../../context/CoofeesInCart';
import TypeShipment from '../../components/TypeShipment/TypeShipment';
import TotalCart from '../../components/TotalCart/TotalCart';

const Cart = () => {

    const { totalCoffeesInCart } = useContext(CartCoffeesContext)
    
    return (
        <div className="Cart-body mb-10 ">
            <Navigation />
            <p className='text-3xl text-green-800 text-center mt-5'>Cesta ({totalCoffeesInCart()}) </p>
            <div className='flex justify-around'>
                <div className='flex flex-col '>
                    <ProductsCart />
                    <TypeShipment />
                </div>
                <div>
                    <TotalCart className='w-fit' />
                    <div className='mt-5 pl-2'>
                        <Link to={'/CheckOut'} className="text-white bg-green-900 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> Ir al checkout</Link>
                        <Link to={'/Shop'} className="text-green-900 font-bold bg-white-800 hover:bg-white-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Seguir Comprando</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart