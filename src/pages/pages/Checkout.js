import Navigation from "../../components/Navigation/Navigation"
import SelectPaymentMethod from "../../components/SelectPaymentMethod/SelectPaymentMethod"
import SelectShippingMethod from "../../components/SelectShippingMethod/SelectShippingMethod"
import TotalCart from "../../components/TotalCart/TotalCart"

const Checkout = () => {

    return (
        <div className="checkOut ">
            <Navigation />
            <p className='text-3xl text-green-800 text-center'>Chechout </p>

            <div className="componentsSelectMethod flex justify-around">

                <div className="column1Checkout">
                    <SelectPaymentMethod />
                    <SelectShippingMethod />
                </div>

                <div className="Column2Checkout">
                    <TotalCart />
                </div>

            </div>



        </div>
    )
}


export default Checkout