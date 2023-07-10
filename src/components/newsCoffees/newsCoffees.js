import React from 'react';
import { AllCoffeesContext } from '../../context/AllCoffees';
import { useContext } from 'react';

import { CartCoffeesContext } from '../../context/CoofeesInCart';

const NewsCoffees = () => {
	const { totalCoffees } = useContext(AllCoffeesContext)
	const { addToCartNoRepeat } = useContext(CartCoffeesContext)

	const first4Coffees = totalCoffees.slice(0, 4)
	console.log(first4Coffees);

	return (
		<div className=' flex items-center flex-col'>
			<div>
				<p className='text-3xl text-green-800 text-center'>Novedades</p>
			</div>
			<div className=' flex'>
				{first4Coffees.map((coffee) => {
					return (
						<div className=' IndvCoffee border p-3 text-center rounded m-5 w-fit hover:bg-gray-100' key={coffee.id}>
							<img src={coffee.image} alt='image-coffee-bag' />
							<p className=' font-bold'>{coffee.name}</p>
							<p  >{coffee.price},00€</p>
							<button  onClick={() => addToCartNoRepeat({name:coffee.name, image: coffee.image, price:coffee.price, bags:1})}  className="text-white bg-green-800 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Añadir</button>
						</div>
					)
				})}
			</div>

		</div>
	)
}




export default NewsCoffees;
