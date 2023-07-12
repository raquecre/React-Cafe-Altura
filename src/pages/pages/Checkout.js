import Navigation from "../../components/Navigation/Navigation"
import SelectPaymentMethod from "../../components/SelectPaymentMethod/SelectPaymentMethod"
import SelectShippingMethod from "../../components/SelectShippingMethod/SelectShippingMethod"
import TotalCart from "../../components/TotalCart/TotalCart"
import { Link } from "react-router-dom"
const Checkout = () => {

    return (
        <div className="checkOut ">
            <Navigation />
            <p className='text-3xl text-green-800 text-center'>Checkhout </p>

            <div className="componentsSelectMethod flex justify-around">

                <div className="column1Checkout">
                    <SelectPaymentMethod />
                    <SelectShippingMethod />
                </div>

                <div className="Column2Checkout">
                    <TotalCart />
                    <div>
                        <Link to={'/'} className="text-white bg-green-900 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"> Pagar y realizar pedido</Link>
                    </div>
                </div>

            </div>



        </div>
    )
}


export default Checkout