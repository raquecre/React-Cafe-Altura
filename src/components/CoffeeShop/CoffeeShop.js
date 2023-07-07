import React from 'react';


const CoffeeShop = () => {

	return (
		<section id="cooffeeShopText" className='flex flex-row '>
			<article className="flex flex-col justify-center m-5">
				<h3 className='text-xl text-green-800'>Pruébalo en nuestro Coffee Shop</h3>

				<p className='m-5'>Visita nuestra cafetevate un dría en el centro de la ciudad para probar los granos de café antes de hacer
					tu pedido y llévate un descuento.
				</p>
				<div className='flex flex-row gap-3 ml-6'>
					<p className='font-bold underline' > Cómo llegar </p>
					<img src="./img/arrowRight.svg" />
				</div>
			</article>

			<article class="cooffeeShopText">
				<img src="./img/CoffeeBar.png" />
			</article>
		</section>
	)
}

export default CoffeeShop;
