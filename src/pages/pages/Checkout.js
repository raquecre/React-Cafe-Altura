import { useContext } from "react"
import Navigation from "../../components/Navigation/Navigation"
import SelectPaymentMethod from "../../components/SelectPaymentMethod/SelectPaymentMethod"
import SelectShippingMethod from "../../components/SelectShippingMethod/SelectShippingMethod"
import TotalCart from "../../components/TotalCart/TotalCart"
import { Link } from "react-router-dom"
import { CartCoffeesContext } from "../../context/CoofeesInCart"


const Checkout = () => {
    const { setShowDelete } = useContext(CartCoffeesContext)
    setShowDelete(false)

    return (
        <div className="checkOut ">
            <Navigation />
            <p className='text-3xl text-green-800 text-center font-semi-bold mt-8'>Checkout </p>

            <div className="componentsSelectMethod flex justify-around p-8">

                <div className="column1Checkout bg-grey-800">
                    <SelectPaymentMethod />
                    <SelectShippingMethod />
                </div>

                <div className="Column2Checkout bg-gray-100 h-fit p-5">
                    <h1 className='font-bold text-lg'>Total del carrito</h1>
                    <hr className='m-4'></hr>
                    <TotalCart />


                    <Link to={'/Success'} className="text-white bg-green-900 bg-opacity-50 hover:bg-opacity-100 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> Pagar y realizar pedido</Link>

                </div>

            </div>



        </div>
    )
}


export default Checkout