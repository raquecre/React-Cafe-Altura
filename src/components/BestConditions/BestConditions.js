import React from 'react';


const BestConditions = () => {

	return (
		<section className="p-5  cardsBestConditions bg-center bg-cover bg-auto bg-[url('https://i.imgur.com/K1K7nMs.jpg')]">

			<div className="cardsBestConditionsTitle mt-5  ">
				<h3 className='text-white text-2xl text-center font-bold  '> Café con las mejores condiciones </h3>
			</div>
			<div className="cardsBestConditionsCoffee grid grid-cols-3 place-content-center justify-items-center ">

				<article className="cardsBestConditions bg-white text-center rounded w-3/4 m-5 p-5">
					<button className='bg-green-800 m-3 p-3 rounded-2xl' ><img alt='' src="./img/IconChecklist.png" /></button>
					<h3 className='font-bold'>Recibe tu pedido sin peocupate</h3>
					<p>Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de
						café,
						nunca te quedarás sin tu taza de la mañana. </p>
				</article>

				<article className="cardsBestConditions bg-white text-center flex flex-col items-center rounded w-3/4 p-5 m-5">
					<button className='bg-green-800 m-3 p-3 rounded-2xl'><img alt='' src="./img/Truck.png" /></button>
					<h3 className='font-bold'>Envío en 24/48h</h3>
					<p>Pide tu café antes de las 12h y lo recibirás al día siguiente.</p>
				</article>

				<article className="cardsBestConditions bg-white text-center rounded w-3/4 p-5 m-5">
					<button className='bg-green-800 m-3 p-3 rounded-2xl'><img alt='' src="./img/gift.png" /></button>
					<h3 className='font-bold'>Descuentos y beneficios</h3>
					<p>Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para
						que lo descubras junto a nosotros.</p>
				</article>
			</div>
		</section>
	)
}

export default BestConditions;
