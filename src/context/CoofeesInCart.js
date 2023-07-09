
import { createContext, useState } from "react"

//~  lógica añadir un café más
//~  lógica quitar un café
//~ suma total de los cafés

export const CartCoffeesContext = createContext();

export default function CartCoffeesContextProvider({ children }) {
    const [cartCoffees, setCartCoffees] = useState([]);

    const totalCoffeesInCart = () => {
        return cartCoffees.length
    }
    //?________________AddCart____________________________________________

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
    //?________________________________________________________________

    const sumPriceCoffee = () => {
        let total = 0;
        cartCoffees.map((coffee) => total += coffee.price)
        return total

    }

    /* const restCoffee = (coffee) => {

    }
 */


    return (
        <CartCoffeesContext.Provider value={{sumPriceCoffee, cartCoffees, totalCoffeesInCart, setCartCoffees, addToCartNoRepeat }}>
            {children}
        </CartCoffeesContext.Provider>
    )

}