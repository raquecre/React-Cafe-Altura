import React from 'react';


const CoffeeShop = () => {

	return (
		<section id="cooffeeShopText" className='flex flex-row '>
			<article className="flex flex-col justify-center m-5 ">
				<h3 className='text-xl text-green-800 ml-5'>Pruébalo en nuestro Coffee Shop</h3>

				<p className='m-5'>Visita nuestra cafetevate un dría en el centro de la ciudad para probar los granos de café antes de hacer
					tu pedido y llévate un descuento.
				</p>
				<div className='flex flex-row gap-3 ml-5'>
					<p className='font-bold underline' > Cómo llegar </p>
					<img alt='' className='m-3' src="./img/arrowRight.svg" />
				</div>
			</article>

			<article className="cooffeeShopText m-4 ">
				<img alt='' className='w-auto rounded p-5' src="https://s3-alpha-sig.figma.com/img/4570/2d93/af83409b898246e822c86278c804fd4c?Expires=1690156800&Signature=R-z5K17PGdmLqSpzfSS54L9cNTncvN78sM1EMwegKBfCu95Hiu4Lck87KuFFAnjS6UMH7pqRqv14y~Dfr20-cSsibetuLxrmzK7yqNv9TXzY4p-QrmoKJCm3GNC4vJuqo~voyLTWRrZPlTFlqyRDH4GgHR68Bvv1~HJtbMEOBLntkxPk~5czMNdVoZxA4L0flm1fhU5d1WFVPVs6fYGInpUjRaiSnwu4Jo2Tsw23bOZOT7mMKCzjkJMfxHKiH6ztD3hZtZp5WvGtXaCsmhHfKNfoy02iSn4PyKMxjQHuKkuSAaG7fmeyLyc8zVxA3g4g0IRiRuuqJovFNBTs37TCLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
			</article>
		</section>
	)
}

export default CoffeeShop;
