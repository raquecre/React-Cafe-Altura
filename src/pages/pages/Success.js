import { Link } from "react-router-dom"
import BannerSuccess from "../../components/BannerSucces/BannerSucces"
import Navigation from "../../components/Navigation/Navigation"
import ProductsCart from "../../components/ProductsCart/ProductsCart"
import TotalCart from "../../components/TotalCart/TotalCart"

const Success = () => {

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

                <Link to={'/'} className="text-white bg-green-800 hover:bg-green-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Volver a la tienda</Link>
            </div>
        </div>
    )
}

export default Success