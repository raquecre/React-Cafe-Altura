import React from 'react';




const SelectShippingMethod = () => {

	return (

		<div className='mt-5'>
			<h1 className='font-bold text-xl '>Dirección de envío</h1>

			<div className=' flex flex-col'>
				<label id="QuestionName">Nombre</label>
				<input className="border m-2 rounded" type="text" />
			</div>

			<div className=' flex flex-col'>
				<label id="QuestionName">Apellidos</label>
				<input className="border m-2 rounded" type="text" />
			</div>

			<div className=' flex flex-col'>
				<label id="QuestionName">Email</label>
				<input className="border m-2 rounded" type="text" />
			</div>
			<div className=' flex flex-col'>
				<label id="QuestionName">País</label>
				{/* //! aquí va un desplegable de países */}
				<input className="border m-2 rounded" type="text" />
			</div>
			<div className='direction flex-row'>
				<>
					<div className=' flex flex-col'>
						<label id="QuestionName">Población</label>
						<input className="border m-2 rounded" type="text" />
					</div>

					<div className=' flex flex-col'>
						<label id="QuestionName">CP</label>
						<input className="border m-2 rounded" type="number" />
					</div>
				</>
				<>
					<div className=' flex flex-col'>
						<label id="QuestionName">Calle</label>
						<input className="border m-2 w-fit rounded" type="text" />
					</div>
					<div className=' flex flex-col'>
						<label id="QuestionName">piso</label>
						<input className="border m-2 w-fit rounded" type="number" />
					</div>
					<div className=' flex flex-col'>
						<label id="QuestionName">Número</label>
						<input className="border m-2 w-fit rounded" type="number" />
					</div>
					<div className=' flex flex-col'>
						<label id="QuestionName">Puerta</label>
						<input className="border m-2 w-fit rounded" type="text" />
					</div>
				</>

			</div>


		</div>
	)
}


export default SelectShippingMethod;