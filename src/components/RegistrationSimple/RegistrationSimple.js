import React from 'react';


const RegistrationSimple = () => {

	return (
		<section className='m-5 p-3 text-gray-700 flex flex-col m-5 '>
			<article className=' flex flex-col'>
				<label id="QuestionName">Nombre completo</label>
				<input className="border m-2" type="text" />
			</article>

			<article className=' flex flex-col'>
				<label id="QuestionEmail">Email</label>
				<input className="border" type="email" />
			</article>

			<article className=' flex flex-col'>
				<label id="QuestionPhone">Teléfono</label>
				<input className="border" type="tel" />
			</article>

			<article className=' flex flex-col mt-5'>
				<textarea className="border" defaultValue="¿En qué podemos ayudarte?"/>
			</article>

			<label className=' m-5 text-s'> <input type="checkbox" /> Acepto la <a href='https://politicadeprivacidadplantilla.com/' className=' font-bold underline ' > Política de Privacidad</a> y los <a href='https://politicadeprivacidadplantilla.com/' className='font-bold underline'>Términos
				y
				condiciones.</a>
			</label>

			<button className="text-white w-fit bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Enviar</button>
		</section>
	)
}


export default RegistrationSimple;
