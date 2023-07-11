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
					<>
						<div className='flex items-center pl-5 justify-between mb-4' key={coffee.id} >

							<div className='flex items-center  justify-start'>
								<button onClick={() => { restCoffeeBags(coffee) }} className=' text-2xl  m-2'>-</button>
								<p className='bg-gray-200 p-1 rounded-full'>{coffee.bags}</p>
								<button onClick={() => { sumCoffeeBags(coffee) }} className='text-2xl  m-2'> + </button>
								<img className='h-20' src={coffee.image} />
								<div className='flex-col pl-5'>
									<p className='font-bold' >{coffee.name}</p>
									<p >Paquete de café, 250gr</p>
								</div>
							</div>
							<div>
								<p className='text-lg font-bold pr-5' >{coffee.price * coffee.bags},00€</p>
							</div>

						</div>
						<hr className='m-4'></hr>
					</>

				)
			})}
		</div>
	)
}


export default ProductsCart;
