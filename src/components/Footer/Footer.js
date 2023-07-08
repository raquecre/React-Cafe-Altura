import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {

	return (
		<footer className=" bg-gray-950 text-white pt-3 flex items-center  justify-stretch">

			<article className=" inline-flex gap-2 items-center flex flex-col m-8 ">
				<section className='inline-flex gap-1'>
					<Link to={'/'} className="text-2xl" >cafedealtura.com</Link>
					<img src="./img/CoffeG.svg" />
				</section>


				<section className='flex flex-col items-start mr-8 ' >
					<p> Te ayudamos en </p>
					<button className='mt-1 gap-1 bg-gray-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 inline-flex'><img src="/img/Phone.png" />+34 919 49 05
						18</button>
					<button className=' gap-1 bg-gray-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 inline-flex'><img src="/img/email.png" />hola@cafedealtura.com</button>
				</section>

			</article>

			<article className='flex flex-row items-center gap-8 ml-20 p-10'>
				<ul >
					<li>Tienda</li>
					<li>Suscripción</li>
					<li>Para empresas</li>
					<li>Sobre Nosotros</li>
					<li>Contacto</li>
				</ul>

				<ul>
					<li>Política de privacidad</li>
					<li>Política de cookies</li>
					<li>Términos y condiciones</li>
					<li></li>
				</ul>
			</article>

		</footer>
	)
}


export default Footer;
