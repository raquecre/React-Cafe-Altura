import { Link, NavLink } from "react-router-dom"
import Navigation from "../../components/Navigation/Navigation"

const ErrorPage = () => {
    return (
        <body className="ErrorPage-body  flex flex-col items-center">
            <Navigation />
            <Link to={'/'} >
                <button className="border p-3 text-center rounded mt-8 mr-5 w-fit bg-green-800 bg-opacity-50 text-white hover:bg-opacity-100">Vuelve a Home</button>
            </Link>

            <img className="z-10 cover w-2/4" src="https://static.vecteezy.com/system/resources/previews/003/454/900/large_2x/error-404-with-the-cute-coffee-cup-mascot-free-vector.jpg" />



        </body>
    )
}

export default ErrorPage