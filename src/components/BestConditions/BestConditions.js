import React from 'react';


const BestConditions = () => {

	return (
		<section className="p-5 cardsBestConditions bg-center bg-cover bg-auto bg-[url('https://s3-alpha-sig.figma.com/img/03a7/c79a/086aa1e226e5adfe010fd0fb3ff3e2cb?Expires=1690156800&Signature=CIKUcpBbruPWP6FGc5B2Afnoksu0GAMQkcJuua5BT3AL4nglGZNmt90FF8vNT0jrccYWX~kr1DptkXK7LIBT0f0aNmunhIaFtKO28ExLwZYLFB036Pq~Ec0liAh013vVMA9LOil8fIs5zO3dCeDlriC7rUNGe~2FtS8k1xYFQmUGJWvMamTYQ4esJEteKtq9cUsQwZfk2AArLJpJFcv0qS485d0rqhDWuuZM5SGBZ8LP1FvSB-w~X-GHexdakTz7WWkINwtqqiTF56VuY58r8lcBGoPO0zeMHsNBepE7iZQtw~pISO~psalpCKoHsnmHFgH6THMHkQuq-JNfia-nsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">

			<div className="cardsBestConditionsTitle  ">
				<h3 className='text-white text-xl text-center font-bold  '> Café con las mejores condiciones </h3>
			</div>
			<div className="cardsBestConditionsCoffee grid grid-cols-3 place-content-center  ">

				<article className="cardsBestConditions bg-white text-center rounded w-3/4 m-5 p-5">
					<button className='bg-green-800 m-3 p-3 rounded' ><img src="./img/IconChecklist.png" /></button>
					<h3 className='font-bold'>Recibe tu pedido sin peocupate</h3>
					<p>Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de
						café,
						nunca te quedarás sin tu taza de la mañana. </p>
				</article>

				<article className="cardsBestConditions bg-white text-center flex flex-col items-center rounded w-3/4 p-5 m-5">
					<button className='bg-green-800 m-3 p-3 rounded'><img src="./img/Truck.png" /></button>
					<h3 className='font-bold'>Envío en 24/48h</h3>
					<p>Pide tu café antes de las 12h y lo recibirás al día siguiente.</p>
				</article>

				<article className="cardsBestConditions bg-white text-center rounded w-3/4 p-5 m-5">
					<button className='bg-green-800 m-3 p-3 rounded'><img src="./img/gift.png" /></button>
					<h3 className='font-bold'>Descuentos y beneficios</h3>
					<p>Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para
						que lo descubras junto a nosotros.</p>
				</article>
			</div>
		</section>
	)
}

export default BestConditions;
