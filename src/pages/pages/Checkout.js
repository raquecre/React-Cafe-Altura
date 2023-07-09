import Navigation from "../../components/Navigation/Navigation"
import TotalCart from "../../components/TotalCart/TotalCart"

const Checkout = () =>{

return(
    <div className="checkOut ">
        <Navigation/>
        <p className='text-3xl text-green-800 text-center'>Chechout </p>
        <TotalCart/>



    </div>
)
}


export default Checkout