
import { createContext, useState } from "react"

//~  lógica añadir un café más
//~  lógica quitar un café
//~ suma total de los cafés

export const CartCoffeesContext = createContext();

export default function CartCoffeesContextProvider({ children }) {
    const [cartCoffees, setCartCoffees] = useState([]);

    const addCart = (coffee) => {
        setCartCoffees([...cartCoffees, coffee])
    }

    const sumCoffee = (coffee) => {
        
    }

    const sumCartPrice = (coffee) => {
        let totalSum = 0;
        totalSum += coffee.price

    }

    return (
        <CartCoffeesContext.Provider value={{ cartCoffees, setCartCoffees, addCart, sumCartPrice }}>
            {children}
        </CartCoffeesContext.Provider>
    )

}