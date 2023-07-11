import React, { useContext, useState } from 'react';
import { Form } from 'react-router-dom';
import { CartCoffeesContext } from '../../context/CoofeesInCart';


const TypeShipment = () => {
	const { typeShipment, setTypeShipment, onChangeValue } = useContext(CartCoffeesContext);

	
	return (
		<div className='TypeShipment w-fit mt-5'>
			
			<h1 className='text-lg font-bold m-2'>Seleccionar envío</h1>

			<div className='form-check flex justify-stretch gap-5 m-5'>

				{/* //& */}
				<input id="freeSend" type="radio" name="typeOfSend" value="0" onChange={onChangeValue} checked={typeShipment === "0"}/>
		
				<label className='flex flex-col '>
					<p className='font-bold'> Envío 5-7días</p>
					<p>Opción estándar sin seguimiento</p>
				</label>

				<h3 className='font-bold'>GRATIS</h3>
			</div>

			<div className='form-check flex justify-stretch  gap-5 m-5'>

				{/* //& */}
				<input id="cost9" type="radio" name="typeOfSend" value="9" onChange={onChangeValue} checked={typeShipment === "9"} />

				<label className='flex flex-col align-center'  >
					<p className='font-bold' >Envío urgente 24h</p>
					<p >Recibe tu pedido en las siguientes 24h (Para pedidos realizados
						antes de las 13:00).</p>
				</label>

				<h3 className='font-bold ' > 9,00€</h3>
			</div>

			
		</div>
		
	)
}


export default TypeShipment;
