import React from 'react';


const SelectPaymentMethod = () => {

	return (

		<div >
			<h1 className='font-bold text-xl '>Seleccionar método de pago</h1>

			<div className='inputDebito mt-2'>
				<div className='Header flex '>
					<input type="radio" className='accent-green-700 w-' name="typeOfSend" value="debito" />

					<div className='infoInput ml-2'>
						<p className='font-bold'> Tarjeta de débito</p>
						<p>Opción estándar sin seguimiento</p>
					</div>
				</div>

				<div className='mt-4 '>
					<div className=' flex flex-col'>
						<label id="QuestionName">Titular</label>
						<input className="border m-2 rounded w-fit" type="text" placeholder='Nombre del titular' />
					</div>
					<div className=' flex flex-col'>
						<label id="QuestionName">Número de la tarjeta</label>
						<input className="border m-2 rounded w-fit" type="number" placeholder='1234 1234 1234 1234' />
					</div>

					<div className=' flex justify-start '>
						<div className='flex flex-col w-auto w-40'>
							<label id="QuestionName">Fecha de caducidad</label>
							<input className="border mt-2 w-30" type="numbar" placeholder='MM/YY' />
						</div>
						<div className='flex flex-col w-fit'>
							<label id="QuestionName">CVC</label>
							<input className="border m-2  w-1/2 rounded" type="number" placeholder='123' />
						</div>
					</div>
				</div>

			</div>
			<hr className='m-4'></hr>
			
			<div className='inputTransfer '>
				<div className='Header flex '>
					<input type="radio" className='accent-green-700' name="typeOfSend" value="transfer" />

					<div className='infoInput ml-2'>
						<p className='font-bold'> Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
						<p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
					</div>

				</div>

			</div>
			<hr className='m-4'></hr>
			
			<div className='inputBizum  '>
				<div className='Header flex'>
					<input type="radio" className='accent-green-700' name="typeOfSend" value="Bizum" />

					<div className='infoInput flex gap-4 ml-2'>
						<p className='font-bold flex items-center'>Bizum</p>
						<img alt='' className='w-20' src='https://s3-alpha-sig.figma.com/img/ac24/1476/8585bb1a45512ace6bc15136b9de741c?Expires=1690156800&Signature=PSTU8oxhzuEwHcCz0klzUE3qY1Z2-IsJfcIItC6~6mBGjqQBQDu7jTm8Kfk~gFufx-c3syc8REauticu7C8iwpUM2RuiA~HQTeGhLbeHYqk2RX0a3GI0WYNCBY551IHdzfy1OYXbOPHGAKUlNeRXBuQA3waQnd200GlyYgc0WKH~f67wXcr4evJC0Z-gKtrN8dIdGjMJT61I3VnlbJwrox-6e6iQSzMxBhJ~FG8FuEKooA3kG6hfgjPjFUt0pe-FElFXwNzJHe8HfzhHSmREapeSTjMi481RYe9uTz0lO9SE9oys36D1k~wdkVjWIpEh24X38jx2OScu~VzWDOE7cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
					</div>

				</div>

			</div>
		</div>
	)
}


export default SelectPaymentMethod;
