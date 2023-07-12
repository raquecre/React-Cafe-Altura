import React from 'react';


const BestConditions = () => {

	return (
		<section className="cardsBestConditions bg-blue-200">

			<div className="cardsBestConditionsTitle ">
				<h3 className='text-white text-xl text-center font-bold  '> Café con las mejores condiciones </h3>
			</div>
			<div className="cardsBestConditionsCoffee grid grid-cols-3 gap-4 place-content-center  ">

				<article className="cardsBestConditions bg-white text-center rounded  m-5">
					<button className='bg-green-800 m-3 p-2 rounded' ><img src="./img/IconChecklist.png" /></button>
					<h3 className='font-bold'>Recibe tu pedido sin peocupate</h3>
					<p>Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de
						café,
						nunca te quedarás sin tu taza de la mañana. </p>
				</article>

				<article className="cardsBestConditions bg-white text-center rounded  m-5">
					<button className='bg-green-800 m-3 p-2 rounded'><img src="./img/Truck.png" /></button>
					<h3 className='font-bold'>Envío en 24/48h</h3>
					<p>Pide tu café antes de las 12h y lo recibirás al día siguiente.</p>
				</article>

				<article className="cardsBestConditions bg-white text-center rounded  m-5">
					<button className='bg-green-800 m-3 p-2 rounded'><img src="./img/gift.png" /></button>
					<h3 className='font-bold'>Descuentos y beneficios</h3>
					<p>Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para
						que lo descubras junto a nosotros.</p>
				</article>
			</div>
		</section>
	)
}

export default BestConditions;
