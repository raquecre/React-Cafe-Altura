import React from 'react';
import { CartCoffeesContext } from '../../context/CoofeesInCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const TotalCart = () => {
    const { sumPriceCoffee } = useContext(CartCoffeesContext)
	

	return (
		<div className='totalCart bg-gray-100 w-fit' >
			<h1 className='font-bold text-lg'>Total del carrito</h1>
			<hr className='m-4'></hr>

			<div className="flex p-2 ">
				<p className=' mr-5'>SUBTOTAL</p>
				<p className='font-bold ml-5'> {sumPriceCoffee()},00 €</p>


			</div>

			<div className="flex p-2">
				<p className=' mr-5'>ENVÍO</p>
				<p className='font-bold ml-5'></p>
			</div>

			<hr className='m-4'></hr>

			<div className="flex p-2">
				<p className=' mr-5'>TOTAL</p>
				<p className='font-bold ml-5'>€</p>
			</div>
			<div>
				<Link to={'/CheckOut'} className="text-white bg-green-900 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> Ir al checkout</Link>
				<Link to={'/Shop'} className="text-green-900 font-bold bg-white-800 hover:bg-white-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Seguir Comprando</Link>

			</div>
		</div>
	)
}


export default TotalCart;
