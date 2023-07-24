import React from 'react';
import { CartCoffeesContext } from '../../context/CoofeesInCart';
import { useContext } from 'react';



const TotalCart = () => {
	const { ivaCalculate, totalSumCart, typeShipment, sumPriceCoffee } = useContext(CartCoffeesContext)


	return (
		<div className='totalCart pt-4 pl-2 m-7 ' >
		
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
			<div className='mb-5 text-sm pr-4 flex justify-end text-gray-500'>
				<p> Incluye  {ivaCalculate()} € de IVA</p>
			</div>



		</div>
	)
}


export default TotalCart;
