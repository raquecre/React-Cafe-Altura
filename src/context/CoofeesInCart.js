
import { createContext, useState } from "react"

//~  lógica añadir un café más
//~  lógica quitar un café
export const CartCoffeesContext = createContext();

export default function CartCoffeesContextProvider({ children }) {
    const [cartCoffees, setCartCoffees] = useState([]);

    const addCart = (coffee) => {
        setCartCoffees([...cartCoffees, coffee])
    }

    const deleteCart = (coffee) =>{
        const newCart = cartCoffees.filter(coffeeSelected => coffeeSelected !== coffee)
    }

    return (
        <CartCoffeesContext.Provider value={{ cartCoffees, setCartCoffees, addCart, deleteCart }}>
            {children}
        </CartCoffeesContext.Provider>
    )

}