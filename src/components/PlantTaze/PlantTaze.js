import React from 'react';
//import mano from '../../../public/img/mano.png'



const PlantTaze = () => {

	return (
		<section className="plantTaze flex flex-row h-auto">

			<article className="plantTaze flex-row p-4">
				<h3 className='text-green-800'> De la planta a tu taza</h3>
				<h1 className='text-5xl'>El mejor café del mundo, ahora en tu casa.</h1>
				<p>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que
					puedas viajar desde la comodidad de tu hogar.</p>
				<div >
					<button className="text-white bg-gray-950 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" id="plantTazeBlack">Descubrir orígenes</button>
					<button className="text-white bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" id="plantTazeGreen">Comprar café</button>
				</div>
			</article>
			<article className='p-4'>
				<img id="grainsOnTree" src="./img/mano.png" alt="mano cogiendo fruto de un arbol" />
			</article>





		</section>
	)
}

export default PlantTaze;
