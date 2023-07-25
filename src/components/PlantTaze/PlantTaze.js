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
				<img className='rounded-lg' id="grainsOnTree" src="https://i.imgur.com/IUimeS0.jpg" alt="mano cogiendo fruto de un arbol" />
			</article>





		</section>
	)
}

export default PlantTaze;
