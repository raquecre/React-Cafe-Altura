import React from 'react';
import { CartCoffeesContext } from '../../context/CoofeesInCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const TotalCart = () => {
	const { ivaCalculate, totalSumCart, typeShipment, sumPriceCoffee } = useContext(CartCoffeesContext)


	return (
		<div className='totalCart bg-gray-100 pt-4 pl-2 ' >
			{/* <h1 className='font-bold text-lg'>Total del carrito</h1> 
			<hr className='m-4'></hr>*/}

			<div className="flex p-2 justify-between pr-4">
				<p className=' mr-5'>SUBTOTAL</p>
				<p className='font-bold ml-5'> {sumPriceCoffee()},00 €</p>


			</div>

			<div className="flex p-2 justify-between pr-4">
				<p className=' mr-5'>ENVÍO</p>
				<p className='font-bold ml-5'>{typeShipment},00€</p>
			</div>

			<hr className='m-4'></hr>

			<div className="flex p-2 justify-between pr-4">
				<p className=' mr-5'>TOTAL</p>
				<p className='font-bold ml-5'>{totalSumCart()},00€</p>
			</div>
			<div className='mb-5 text-sm flex justify-end text-gray-500'>
				<p> Incluye  {ivaCalculate()} € de IVA</p>
			</div>



			{/* <div className='mt-5 pl-2'>
				 <Link to={'/CheckOut'} className="text-white bg-green-900 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> Ir al checkout</Link> 
				<Link to={'/Shop'} className="text-green-900 font-bold bg-white-800 hover:bg-white-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Seguir Comprando</Link>
			</div> */}
			{/* //TODO tiene que ser dinámico, y que aparezca según en la página que se encuentre  */}

			{ }
			{/* <div>
				<Link to={'/'} className="text-white bg-green-900 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> Pagar y realizar pedido</Link>
			</div> */}
		</div>
	)
}


export default TotalCart;
