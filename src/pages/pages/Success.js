import BannerSuccess from "../../components/BannerSucces/BannerSucces"
import Navigation from "../../components/Navigation/Navigation"
import ProductsCart from "../../components/ProductsCart/ProductsCart"
import TotalCart from "../../components/TotalCart/TotalCart"

 const Success = () => {

    return(
        <div className="Success ">
            <Navigation/>
            <div className="m-5 p-5"></div>
            <BannerSuccess/>
            <ProductsCart/>

            <TotalCart className="m-5"/>
        </div>
    )
 }

 export default Success