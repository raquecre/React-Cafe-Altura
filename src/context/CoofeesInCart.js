
import { createContext, useState } from "react"

//~  lógica añadir un café más
//~  lógica quitar un café
//~ suma total de los cafés

export const CartCoffeesContext = createContext();

export default function CartCoffeesContextProvider({ children }) {
    const [cartCoffees, setCartCoffees] = useState([]);
    const [totalBagsCoffees, setTotalBagsCoffees] = useState();

    //?----------TotalCart ---------------------

    const totalCoffeesInCart = () => {
        return cartCoffees.length
    }
    //?-----------AddCart coffees no repeat---------------------

    const isCoffeRepeated = (coffeeInfo) => {
        for (const coffee of cartCoffees) {
            if (coffee.name === coffeeInfo.name) {
                return true;
            }
        }
        return false;
    }

    const addToCartNoRepeat = (coffeeInfo) => {
        if (cartCoffees == null || !isCoffeRepeated(coffeeInfo)) {
            setCartCoffees([...cartCoffees, coffeeInfo]);
        }
    }

    //?-------------Sum price coffee-------------------

    const sumPriceCoffee = () => {
        let total = 0;
        cartCoffees.map((coffee) => total += coffee.price *coffee.bags )
        return total

    }

    //?-----------counter coffees---------------------

    //?---SUM---------------------
    const sumCoffeeBags = (coffeSelect) => {
        cartCoffees.map((cartItem) => {
            if (cartItem.name === coffeSelect.name) {
                cartItem.bags += 1;
                setCartCoffees([...cartCoffees]);
            }
        }
        )
    }


    //?---Rest---------------------
    const restCoffeeBags = (coffeSelect) => {
        cartCoffees.map((cartItem) => {
            if (cartItem.name === coffeSelect.name ) {
                cartItem.bags -= 1;
                setCartCoffees([...cartCoffees]);
            }
        }
        )
    }


    //?----------typeShipment ---------------------
    const [typeShipment, setTypeShipment] = useState('')

    function onChangeValue(event) {
        setTypeShipment(event.target.value)
        console.log(typeShipment);
    }


    return (
        <CartCoffeesContext.Provider value={{ onChangeValue,restCoffeeBags, sumCoffeeBags, setTotalBagsCoffees, totalBagsCoffees, sumCoffeeBags, sumPriceCoffee, cartCoffees, totalCoffeesInCart, setCartCoffees, addToCartNoRepeat }}>
            {children}
        </CartCoffeesContext.Provider>
    )

}