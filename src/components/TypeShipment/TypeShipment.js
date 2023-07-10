import React, { useState } from 'react';


const TypeShipment = () => {
	const [typeShipmentSelected, setTypeShipmentSelected] = useState();
	let typeSelected = 0;
	console.log(typeSelected);

	const upload = event => setTypeShipmentSelected(event.value)



	return (

		<div className='TypeShipment w-fit mt-5'  >
			<h1 className='text-lg font-bold m-2'>Seleccionar envío</h1>

			<div className='form-check flex justify-stretch gap-5 m-5'>

				<input id="freeSend" type="radio" name="typeOfSend" value="0" checked={true} />

				<div className='flex flex-col '>
					<p className='font-bold'> Envío 5-7días</p>
					<p>Opción estándar sin seguimiento</p>
				</div>

				<h3 className='font-bold'>GRATIS</h3>
			</div>

			<div className='form-check flex justify-stretch  gap-5 m-5'>
				<input className='' id="cost9" type="radio" name="typeOfSend" value="9"   />

				<div className='flex flex-col align-center'  >
					<p className='font-bold' >Envío urgente 24h</p>
					<p >Recibe tu pedido en las siguientes 24h (Para pedidos realizados
						antes de las 13:00).</p>
				</div>

				<h3 className='font-bold ' > 9,00€</h3>
			</div>

		</div>
	)
}


export default TypeShipment;
