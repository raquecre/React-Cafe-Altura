
import { createContext, useState } from "react"

//~  lógica añadir un café más
//~  lógica quitar un café
//~ suma total de los cafés

export const CartCoffeesContext = createContext();

export default function CartCoffeesContextProvider({ children }) {
    const [cartCoffees, setCartCoffees] = useState([]);
    const [totalBagsCoffees, setTotalBagsCoffees] = useState();
    const [showDelete, setShowDelete] = useState(true);

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


    //?-------------  TOTAL     CART  -------------------
    const totalSumCart = () => {
        let total = 0;
        total = +sumPriceCoffee() + +typeShipment
        return total
    }

    //?-------------Sum price coffee-------------------

    const sumPriceCoffee = () => {
        let total = 0;
        cartCoffees.map((coffee) => total += coffee.price * coffee.bags)
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
            if (cartItem.name === coffeSelect.name) {
                if (cartItem.bags > 1) {
                    cartItem.bags -= 1
                setCartCoffees([...cartCoffees]);
                   
                } else {
                   
                    deleteCoffee(cartItem);
                }

            }
        }
        )
    }
    //?----------delete coffee  ---------------------

    const deleteCoffee = (coffeinfo) => {
        const newCart = cartCoffees.filter(coffeeDelete => coffeeDelete !== coffeinfo)                    
        setCartCoffees(newCart)
      
    }
    //?----------delete all coffees  ---------------------

    const deleteAllCoffees = () => {
        setCartCoffees([])
    }


    //?---------------ctypeShipment--------------------------

    const [typeShipment, setTypeShipment] = useState("0")

    const onChangeValue = e => {
        setTypeShipment(e.target.value)
    }
    
      //?---------------IVA--------------------------
    const ivaCalculate = () => (totalSumCart()*0.21).toFixed(2)


    return (
        <CartCoffeesContext.Provider value={{showDelete,deleteAllCoffees, setShowDelete, ivaCalculate, deleteCoffee, totalSumCart, typeShipment, setTypeShipment, onChangeValue, restCoffeeBags, sumCoffeeBags, setTotalBagsCoffees, totalBagsCoffees, sumCoffeeBags, sumPriceCoffee, cartCoffees, totalCoffeesInCart, setCartCoffees, addToCartNoRepeat }}>
            {children}
        </CartCoffeesContext.Provider>
    )

}