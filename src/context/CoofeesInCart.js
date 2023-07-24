
import { createContext, useState } from "react"


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
            return  setCartCoffees([...cartCoffees, coffeeInfo]);
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
               return setCartCoffees([...cartCoffees]);
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
               return setCartCoffees([...cartCoffees]);
                   
                } else {
                   
                   return deleteCoffee(cartItem);
                }

            }
        }
        )
    }
    //?----------delete coffee  ---------------------

    const deleteCoffee = (coffeinfo) => {
        const newCart = cartCoffees.filter(coffeeDelete => coffeeDelete !== coffeinfo);                   
        return setCartCoffees(newCart)
      
    }
    //?----------delete all coffees  ---------------------

    const deleteAllCoffees = () => {
       return setCartCoffees([])
    }


    //?---------------ctypeShipment--------------------------

    const [typeShipment, setTypeShipment] = useState("0")

    const onChangeValue = e => {
       return setTypeShipment(e.target.value)
    }
    
      //?---------------IVA--------------------------
    const ivaCalculate = () => (totalSumCart()*0.21).toFixed(2)


    return (
        <CartCoffeesContext.Provider value={{showDelete,deleteAllCoffees, setShowDelete, ivaCalculate, deleteCoffee, totalSumCart, typeShipment, setTypeShipment, onChangeValue, restCoffeeBags, setTotalBagsCoffees, totalBagsCoffees, sumCoffeeBags, sumPriceCoffee, cartCoffees, totalCoffeesInCart, setCartCoffees, addToCartNoRepeat }}>
            {children}
        </CartCoffeesContext.Provider>
    )

}