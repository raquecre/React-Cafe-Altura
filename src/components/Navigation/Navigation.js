import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartCoffeesContext } from '../../context/CoofeesInCart';


const Navigation = () => {
	const { totalCoffeesInCart } = useContext(CartCoffeesContext)
	
	return (
		<div className='Navigation d-flex bg-gray-950 text-white gap-10 p-3 flex items-center'>

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

			<section className="navContactPhone flex items-center gap-10">
				<p><img src='' />+34 919 49 05 18</p>
				<button type='btn' className='bg-gray-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2'> Iniciar Sesión</button>
			</section>

			<section className="navCart inline-flex text-center ">
				<Link to={'/Cart'} className='inline-flex text-center'>
					<img src="./img/shop.svg" className='m-1'/>
					<p className='bg-gray-800  w-8 h-8 rounded-full'> {totalCoffeesInCart()} </p>
				</Link>
			</section>

		</div >
	)
}



export default Navigation;
