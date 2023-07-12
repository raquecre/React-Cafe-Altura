import React from 'react';


const BestConditions = () => {

	return (
		<section className="cardsBestConditions bg-no-repeat bg-center bg-[url('https://storage.googleapis.com/fir-api-3b1b0.appspot.com/backCooffee.jpeg?GoogleAccessId=service-696062924376@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1689170923&Signature=OZVANJB/9hLS7n4bj7tobitAvJbQEQrAMBxpkYB70kRfTF/6gLET3Fph7LmmNExibRhFIwY2YHEdQFZUPTpg35NYT8zonO6Qit2e38G46SaW%2BilkvLyV6Zi3nczw9yM2uku06QGSmEEU2SWFPx/eqRVWCKCzgYcevahg%2BBiPIQRKjiTi5sgm35TvNLWyw2HQw6y26MBoVxWkGADswA9LKgzw8GiHseYnzRdi8B0HmNdq08lyMQIV2agdgmqIp/zR8k4reTGWOO%2BZYo2FtfiMbJ/aJ%2Bi9Y6M7ZzXrcY3wXq0wsuEbivH9EaHB7BGnBNquI9QIk1lNRIHYEh5sVhfgjQ%3D%3D')]">

			<div className="cardsBestConditionsTitle  ">
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
