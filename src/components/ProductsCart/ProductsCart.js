import React, { useContext, useState } from 'react';
import { CartCoffeesContext } from '../../context/CoofeesInCart';
import ButtonsAddDelete from '../buttons/buttonsAddDelete';


const ProductsCart = () => {
	const { showDelete, deleteCoffee, totalBagsCoffees, cartCoffees, restCoffeeBags, sumCoffeeBags } = useContext(CartCoffeesContext)

	return (

		<div className='ProductsCart w-full'>

			{cartCoffees.map((coffee) => {
				return (
					<>
						<div className='  w-full flex items-center justify-between pl-5 mb-4' key={coffee.name} >

							<div className='flex items-center '>
								{showDelete ? <ButtonsAddDelete coffee={coffee} /> : null}
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
						<hr className='p-4'></hr>
					</>

				)
			})}
		</div>
	)
}


export default ProductsCart;
