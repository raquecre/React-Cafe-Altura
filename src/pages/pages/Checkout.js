import Navigation from "../../components/Navigation/Navigation"
import TotalCart from "../../components/TotalCart/TotalCart"

const Checkout = () => {

    return (
        <div className="checkOut ">
            <Navigation />
            <p className='text-3xl text-green-800 text-center'>Chechout </p>
            <div className="column1Checkout">

            </div>
            <div className="Column2Checkout">
                <TotalCart />
            </div>



        </div>
    )
}


export default Checkout