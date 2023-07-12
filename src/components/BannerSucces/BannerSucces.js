import React from 'react';


const BannerSuccess = () => {

	return (
		<div className='BannerSuccess'>
			<article className="cardsBestConditions bg-white text-center rounded flex flex-col items-center mb-5">
				<button className='bg-green-800  p-2 rounded' ><img src="./img/IconChecklist.png" /></button>
				<h3 className='text-xl text-green-800 mt-4'>El pedido ha sido realizado con éxito</h3>
				<p className='w-80 text-center m-3'>El pedido #12387 se encuentra en preparación.
					Lo recibirás dentro de las fechas acordadas en tu envío.
					Hemos enviado un ticket a tu correo electrónico. </p>
			</article>
		</div>

	)
}



export default BannerSuccess;
