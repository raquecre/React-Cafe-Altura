import { Link } from "react-router-dom"
import BannerSuccess from "../../components/BannerSucces/BannerSucces"
import Navigation from "../../components/Navigation/Navigation"
import ProductsCart from "../../components/ProductsCart/ProductsCart"
import TotalCart from "../../components/TotalCart/TotalCart"
import { useContext } from "react"
import { CartCoffeesContext } from "../../context/CoofeesInCart"

const Success = () => {
    const { deleteAllCoffees } = useContext(CartCoffeesContext)

    return (
        <div className="Success">
            <Navigation />
            <div className="m-5 p-5"></div>
            <BannerSuccess />

            <div className="bg-gray-100 ml-4 mr-4 ">
                <h3 className="pb-5 font-bold">Tu pedido</h3>
                <ProductsCart />
                <TotalCart />
            </div>
            <div className=" flex justify-center">

                <Link to={'/Shop'} className="text-white bg-green-800 bg-opacity-50 hover:bg-opacity-100 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    <button onClick={() => deleteAllCoffees()}>Volver a la tienda</button></Link>
            </div>
        </div>
    )
}

export default Success