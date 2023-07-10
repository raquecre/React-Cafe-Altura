
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
        cartCoffees.map((coffee) => total += coffee.price)
        return total

    }

    //?-----------counter coffees---------------------


    /*   handleClick = (p) => {
          setTotal(prevState=>prevState+p.price);
          let product = products.find((pr) => pr.name === p.name);
          product.unit += 1;
          const updatedProducts = products.map(p => {
              if (product.name === p.name) return product;
      
              return p;
          });
      
          setProducts(updatedProducts);
      } */

//! ni suma ni resta
    const sumCoffeeBags = (selectCoffee) => {
        /*   setCartCoffees(prevState => prevState + selectCoffee.bags);
          let product = cartCoffees.find((coffee) => coffee.name === selectCoffee.name);
          product.bags += 1;
          const updatedCoffees = cartCoffees.map((pr) => {
              if (product.name === selectCoffee.name) return product
          })
          return selectCoffee */
        /* let itemCount = 1;
        for (const [key, value] of Object.entries(selectCoffee)) {
            itemCount += selectCoffee[value].bags
            console.log(itemCount);
        } */

/* //? este ejempo lo que hace es crea un nuevo estado con las caracteristicas de nombre, cantidad en el carro y si un booleano de si ha sido introducido en el carrito.
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems); */

    }








    



    return (
        <CartCoffeesContext.Provider value={{ totalBagsCoffees, setTotalBagsCoffees, totalBagsCoffees, sumCoffeeBags, sumPriceCoffee, cartCoffees, totalCoffeesInCart, setCartCoffees, addToCartNoRepeat }}>
            {children}
        </CartCoffeesContext.Provider>
    )

}