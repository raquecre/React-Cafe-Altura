import React from 'react';


const Questions = () => {
	//TODO Desplegable

	return (
		<article id='faqsarticle' className='bg-green-800'>
			<h2 className='text-white text-center text-bold text-3xl'>Preguntas Frecuentes</h2>

			<div className="cardFaqs bg-white rounded  m-5 p-5">
				<h3 className="cardFaqstittle text-xl flex flex-row justify-between" id="whoToOrderH3"> ¿Cómo hago el pedido? <img id="whoToOrderImg"
					src="./img/arrowTop.svg" /> </h3>
				<p  id="whoToOrderP"> Viajamos constantemente para encontrar los mejores granos y a los
					agricultores
					más exigentes. Si
					podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
					intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de
					café recibe el mayor beneficio posible. </p>
			</div>

			<div className="cardFaqs bg-white rounded  m-5 p-5">
				<h3  className="cardFaqstittle text-xl flex flex-row justify-between" id="whyLowPricesH3">¿Por qué los precios son tan bajos? <img id="whyLowPricesImg"
					src="./img/arrowTop.svg" /></h3>
				<p  id="whyLowPricesP">Viajamos constantemente para encontrar los mejores granos y a
					los agricultores
					más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los
					productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está
					detrás de los granos de café recibe el mayor beneficio posible. </p>
			</div>

			<div className="cardFaqs bg-white rounded  m-5 p-5">
				<h3  className="cardFaqstittle text-xl flex flex-row justify-between" id="coffeeInOfficeH3">¿Es posible enviar café a mi oficina? <img
					id="coffeeInOfficeImg" src="./img/arrowTop.svg" /></h3>
				<p id="coffeeInOfficeP">Puede ser</p>
			</div>
			<div className=' flex flex-row justify-center m-3 ' id="questions">
				<p className='text-white'>Resolvemos tus dudas </p>
				<img  src="./img/arrowRightWhite.svg" />
			</div>

		</article>

	)

}
export default Questions;
