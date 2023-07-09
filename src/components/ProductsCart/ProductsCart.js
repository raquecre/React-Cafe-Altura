import React, { useContext } from 'react';
import { CartCoffeesContext } from '../../context/CoofeesInCart';


const ProductsCart = () => {
	const { cartCoffees } = useContext(CartCoffeesContext)
	return (

		<div className='ProductsCart'>
			<p className='font-bold'>Productos</p>
			{cartCoffees.map((coffee) => {
				return (
					<div className='flex items-center  border w-fit pl-5' >
						<button className='text-xl font-bold m-2'> + </button>
						<p className='bg-gray-200 '>nºcafés</p>
						<button className=' text-xl font-bold m-2'>-</button>

						<img className='h-20' src={coffee.image} />
						<div className='flex-col pl-5'>
							<p className='font-bold' >{coffee.name}</p>
							<p >Paquete de café, 250gr</p>
						</div>
						<p className='text-lg font-bold pl-5' >{coffee.price},00€</p>
					</div>
				)
			})}
		</div>
	)
}


export default ProductsCart;
