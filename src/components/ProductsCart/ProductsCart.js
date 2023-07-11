import React, { useContext } from 'react';
import { CartCoffeesContext } from '../../context/CoofeesInCart';


const ProductsCart = () => {
	const { totalBagsCoffees, cartCoffees, restCoffeeBags, sumCoffeeBags } = useContext(CartCoffeesContext)

	return (

		<div className='ProductsCart'>
			<p className='font-bold'>Productos</p>
			{cartCoffees.map((coffee) => {
				console.log(coffee.bags);
				return (
					<div className='flex items-center  border w-fit pl-5' key={coffee.id} >
						<button onClick={() => { sumCoffeeBags(coffee) }} className='text-xl font-bold m-2'> + </button>
						<p className='bg-gray-200 p-1 rounded-full'>{coffee.bags}</p>
						<button onClick={() => { restCoffeeBags(coffee) }} className=' text-xl font-bold m-2'>-</button>

						<img className='h-20' src={coffee.image} />
						<div className='flex-col pl-5'>
							<p className='font-bold' >{coffee.name}</p>
							<p >Paquete de café, 250gr</p>
						</div>
						<p className='text-lg font-bold pl-5' >{coffee.price * coffee.bags},00€</p>
					</div>
				)
			})}
		</div>
	)
}


export default ProductsCart;
