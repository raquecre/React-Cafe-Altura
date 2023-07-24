import React from 'react';
import { AllCoffeesContext } from '../../context/AllCoffees';
import { useContext } from 'react';

import { CartCoffeesContext } from '../../context/CoofeesInCart';
import { Link } from 'react-router-dom';

const NewsCoffees = () => {
	const { totalCoffees } = useContext(AllCoffeesContext)
	const { addToCartNoRepeat } = useContext(CartCoffeesContext)

	const first4Coffees = totalCoffees.slice(0, 4)
	console.log(first4Coffees);

	return (
		<div className=' flex items-center flex-col'>
			<div>
				<p className='text-3xl p-6 text-green-800 text-center'>Novedades</p>
			</div>
			<div className=' flex'>
				{first4Coffees.map((coffee) => {
					return (
						<div className=' IndvCoffee border p-3 text-center rounded mt-8 mr-5 w-fit hover:bg-gray-100' key={coffee.id}>
							<img src={coffee.image} alt='coffee-bag' />
							<p className=' font-bold'>{coffee.name}</p>
							<p  >{coffee.price},00€</p>
							<button  onClick={() => addToCartNoRepeat({name:coffee.name, image: coffee.image, price:coffee.price, bags:1})}  className="text-white bg-green-900 bg-opacity-50 hover:bg-opacity-100 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 p-1 m-3 mt-5">Añadir</button>
						</div>
					)
				})}
			</div>
			<div>
				<Link  className=' flex flex-row justify-center m-5 gap-5 underline font-semibold' to={'/Shop'}>Ver todos <img alt='' src="./img/arrowRight.svg" /></Link>
			</div>

		</div>
	)
}




export default NewsCoffees;
