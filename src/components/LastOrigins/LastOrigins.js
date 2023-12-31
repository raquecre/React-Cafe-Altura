import React, { useContext } from 'react';
import { AllCoffeesContext } from '../../context/AllCoffees';
import { CartCoffeesContext } from '../../context/CoofeesInCart';


const LastOrigins = () => {
	const { totalCoffees } = useContext(AllCoffeesContext)
	const { addToCartNoRepeat } = useContext(CartCoffeesContext)

	return (
		<div className='lastOriginsAllCoffees'>
			<>
				<p className='text-3xl text-green-800 text-center'>Últimos orígenes</p>
			</>
			<div className='allcoffees grid grid-cols-4'>
				{totalCoffees.map((coffee) => {
					return (
						<div className='IndvCoffee border p-3 text-center rounded m-5 w-fit hover:bg-gray-100' key={coffee.id}>

							<img  src={coffee.image} alt='coffee-bag' />
							<p className=' m-1 font-bold'>{coffee.name}</p>
							<p  >{coffee.price},00€</p>
							<button onClick={()=> addToCartNoRepeat({name:coffee.name, image: coffee.image, price:coffee.price, bags:1}) } className="text-white bg-green-900 bg-opacity-50 hover:bg-opacity-100 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5">Añadir</button>

						</div>
					)
				})}
			</div>
		</div>
	)
}


export default LastOrigins;
