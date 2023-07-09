import React from 'react';


const ContactUsForm = () => {

	return (
		<section className='bg-gray-200 p-5' id="contactUsInfo">

			<h3 className='font-bold text-lg' >Entra en contacto con nosotros</h3>

			<p className='text-gray-600 m-5 p-3'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te
				responderemos lo antes posible.</p>
			<p className='text-gray-600 m-5 p-3'>TAmbién puedes ponerte en contacto con nostros en nuestra dirección o a
				través del teléfono de la tienda.</p>
			<div className='text-gray-600 m-5'>
				<p >742 Evergreen Terrace</p>
				<p >Springfield, OR 12345</p>
			</div>

			<div className='text-gray-600 m-5 flex flex-inline gap-3'>
				<img  src="./img/Phone.png" />
				<p  id="contactPhone"> +1 (555) 123-4567</p>
			</div>

			<div className='text-gray-600 m-5 flex flex-inline gap-3'>
				<img  src="./img/MailGrey.svg" />
				<p >support@example.com</p>
			</div>
			<div className='text-gray-600 m-5 flex flex-inline '>
				<p className='text-gray-600 m-5 flex flex-inline '> ¿Buscas un trabajo? </p>
				<p className='text-gray-950 text-bold underline m-5 flex flex-inline ' >Ver nuestras ofertas</p>
			</div>
		</section>
	)
}


export default ContactUsForm;
