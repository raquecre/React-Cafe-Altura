import React, { useState } from 'react';


const Questions = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)
	const [isOpen3, setIsOpen3] = useState(false)

	function showP() {
		if (isOpen === false) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}

	}
	function showP2() {
		if (isOpen2 === false) {
			setIsOpen2(true)
		} else {
			setIsOpen2(false)
		}

	}
	function showP3() {
		if (isOpen3 === false) {
			setIsOpen3(true)
		} else {
			setIsOpen3(false)
		}

	}
	


	return (
		<article id='faqsarticle' className='bg-green-900 flex flex-col  items-center p-10   '>
			<h2 className='text-white text-center text-bold text-3xl '>Preguntas Frecuentes</h2>

			<div className="cardFaqs bg-white flex flex-col justify-between rounded w-3/4 mb-3 mt-8 p-5">

				<button className="cardFaqstittle text-xl flex flex-row justify-between " onClick={() => showP()} > ¿Cómo hago el pedido? <img alt='' id="whoToOrderImg"
					src="./img/arrowTop.svg" />
				</button>

				{isOpen &&
					<>
						<hr className='m-4'></hr>
						<p id="whoToOrderP"> Viajamos constantemente para encontrar los mejores granos y a los
							agricultores
							más exigentes. Si
							podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
							intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de
							café recibe el mayor beneficio posible. </p>
					</>}


			</div>

			<div className="cardFaqs bg-white flex flex-col justify-between rounded w-3/4 m-3 p-5">
				<button className="cardFaqstittle text-xl flex flex-row justify-between" onClick={() => showP2()} id="whyLowPricesH3">¿Por qué los precios son tan bajos? <img alt='' id="whyLowPricesImg"
					src="./img/arrowTop.svg" />
				</button>

				{isOpen2 &&
					<>
						<hr className='m-4'></hr>
						<p id="whyLowPricesP">Viajamos constantemente para encontrar los mejores granos y a
							los agricultores
							más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los
							productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está
							detrás de los granos de café recibe el mayor beneficio posible. </p>
					</>}
			</div>

			<div className="cardFaqs bg-white flex flex-col justify-between rounded w-3/4  m-2 p-5">
				<button className="cardFaqstittle text-xl flex flex-row justify-between" onClick={() => showP3()} id="coffeeInOfficeH3">¿Es posible enviar café a mi oficina? <img alt=''
					id="coffeeInOfficeImg" src="./img/arrowTop.svg" />
				</button>


				{isOpen3 &&
					<>
						<hr className='m-4'></hr>
						<p id="coffeeInOfficeP">Puede ser</p>
					</>}
			</div>
			<div className=' flex flex-row justify-center m-3 ' id="questions">

				<p className='text-white underline p-2'>Resolvemos tus dudas </p>
				<img alt='' src="./img/arrowRightWhite.svg" />
			</div>

		</article>

	)

}
export default Questions
