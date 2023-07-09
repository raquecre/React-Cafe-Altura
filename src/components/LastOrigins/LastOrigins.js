import React, { useContext } from 'react';
import { AllCoffeesContext } from '../../context/AllCoffees';
import { CartCoffeesContext } from '../../context/CoofeesInCart';


const LastOrigins = () => {
	const { totalCoffees } = useContext(AllCoffeesContext)
	const { cartCoffees, addCart, setCartCoffees } = useContext(CartCoffeesContext)

	return (
		<div className='lastOriginsAllCoffees'>
			<>
				<p className='text-3xl text-green-800 text-center'>Últimos orígenes</p>
			</>
			<div className='allcoffees flex'>
				{totalCoffees.map((coffee) => {
					return (
						<div className='IndvCoffee border p-3 text-center rounded m-5 w-fit hover:bg-gray-100' key={coffee.id}>

							<img src={coffee.image} alt='image-coffee-bag' />
							<p className=' font-bold'>{coffee.name}</p>
							<p  >{coffee.price},00€</p>
							<button onClick={()=> addCart(coffee) } className="text-white bg-green-800 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Añadir</button>

						</div>
					)
				})}
			</div>
		</div>
	)
}


export default LastOrigins;
