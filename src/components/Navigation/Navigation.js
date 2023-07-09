import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {

	return (
		<div className='Navigation d-flex bg-gray-950 text-white gap-10 p-3 items-center'>

			<section className=" inline-flex gap-2 items-center ">
				<Link to={'/'} className="text-2xl" >cafedealtura.com</Link>
				<img src="./img/CoffeG.svg" />
			</section>

			<section className='inline-flex gap-9 ' id="navUl">
				<Link to={'/Shop'}>Tienda </Link>
				<p> Suscripción </p>
				<p> Para Empresas</p>
				<p> Sobre Nosotros</p>
				<p> Contacto</p>
			</section>

			<section className="navContactPhone inline-flex  gap-10">
				<p><img src='' />+34 919 49 05 18</p>
				<button type='btn' className='bg-gray-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '> Iniciar Sesión</button>
			</section>

			<section className="navCart inline-flex">
				<Link to={'/Cart'}>
					<img src="./img/shop.svg" />
				</Link>
			</section>

		</div >
	)
}



export default Navigation;
