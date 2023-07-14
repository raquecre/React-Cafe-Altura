import React from 'react';
import { Link } from 'react-router-dom';
//import mano from '../../../public/img/mano.png'



const PlantTaze = () => {

	return (
		<section className="plantTaze flex flex-row h-auto">

			<article className="plantTaze flex flex-col p-4 justify-center m-3">
				<h3 className='text-green-800 font-semibold'> De la planta a tu taza</h3>
				<h1 className='text-4xl font-semibold'>El mejor café del mundo, ahora en tu casa.</h1>
				<p>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que
					puedas viajar desde la comodidad de tu hogar.</p>
				<div className='mt-3'>
					<button className="text-white bg-gray-950 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" id="plantTazeBlack">Descubrir orígenes</button>
					<Link to={'/Shop'} className="text-white bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" id="plantTazeGreen">Comprar café</Link>
				</div>
			</article>
			<article className='p-5 w-3/4 mt-3 mb-3 '>
				<img className='rounded-lg' id="grainsOnTree" src="https://s3-alpha-sig.figma.com/img/a303/6137/8668558bbdbaf8f6c6c4062d03e662e5?Expires=1690156800&Signature=gUYLLx5Ke29hsgiRhXHJp1ZL7BTkfSpPcR6MZU7x9sEgNiebrPDBNy0uWaGS1FV1V2yc3GD-o8WoKhVnEPysrwtwvLRf7LCv6B-dVgjAgiN4lD1IPgWGBQt7c09cv0zvMRhKF9V9pUoa3yDmULK7eeCQLymMND-GXwgzFw5L0UjKPsp8SOViQFoV6mdlLkN4tzpKRElDePl1i-4DfUo5JmmMgn52kLpDDGy~k3zK5TERqy-iIppGh5FVTRPVWe4dWXv~aJGATlUurz~JRmJl9gR2JNTk5g8aN9v20Vs4z98eNiTICna97dqTPg4-N7qYYIWOfu72iM8A911vcYz1OQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="mano cogiendo fruto de un arbol" />
			</article>





		</section>
	)
}

export default PlantTaze;
