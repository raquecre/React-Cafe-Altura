import React, { useContext } from 'react';
import { CartCoffeesContext } from '../../context/CoofeesInCart';


const ButtonsAddDelete = (props) => {
	const {coffee} = props
	const { cartCoffees, restCoffeeBags, sumCoffeeBags } = useContext(CartCoffeesContext)


	return (

		<div key={coffee.id} className='mb-4 flex flex-row'>
			<button onClick={() => { restCoffeeBags(coffee) }} className=' text-2xl  m-2'>-</button>
			<p className='bg-gray-200 p-1 rounded-full'>{coffee.bags}</p>
			<button onClick={() => { sumCoffeeBags(coffee) }} className='text-2xl  m-2'> + </button>



		</div>

	)
}


export default ButtonsAddDelete;
