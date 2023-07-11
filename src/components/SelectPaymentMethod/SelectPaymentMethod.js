import React from 'react';


const SelectPaymentMethod = () => {

	return (

		<div >
			<h1 className='font-bold text-xl '>Seleccionar método de pago</h1>

			<div className='inputDebito'>
				<div className='Header flex '>
					<input type="radio" name="typeOfSend" value="debito" />

					<div className='infoInput'>
						<p className='font-bold'> Tarjeta de débito</p>
						<p>Opción estándar sin seguimiento</p>
					</div>
				</div>

				<div>
					<div className=' flex flex-col'>
						<label id="QuestionName">Titular</label>
						<input className="border m-2 rounded" type="text" />
					</div>
					<div className=' flex flex-col'>
						<label id="QuestionName">Número de la tarjeta</label>
						<input className="border m-2 rounded" type="number" />
					</div>

					<div className=' flex flex-col flex'>
						<>
							<label id="QuestionName">fecha de caducidad</label>
							<input className="border m-2 w-fit" type="numbar" />
						</>
						<>
							<label id="QuestionName">CVC</label>
							<input className="border m-2 w-fit rounded" type="number" />
						</>
					</div>
				</div>

			</div>
			{/* //TODO falta línea */}
			<div className='inputTransfer m-3 '>
				<div className='Header flex'>
					<input type="radio" name="typeOfSend" value="transfer" />

					<div className='infoInput'>
						<p className='font-bold'> Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
						<p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
					</div>

				</div>

			</div>
			{/* //TODO falta línea */}
			<div className='inputBizum m-3 '>
				<div className='Header flex'>
					<input type="radio" name="typeOfSend" value="Bizum" />

					<div className='infoInput flex gap-4'>
						<p>Bizum</p>
						<p>poner imagen logo bizum</p>
					</div>

				</div>

			</div>
		</div>
	)
}


export default SelectPaymentMethod;
