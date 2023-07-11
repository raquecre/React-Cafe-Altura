//~ Llamada a la api OK
//~ useContext almacena todos los cafés que existen
import { createContext, useState } from "react"
import axios from 'axios';
import React from "react";

export const AllCoffeesContext = createContext();

export default function AllCoffeesContextProvider({ children }) {
    const coffeeApi = 'http://localhost:5050/books';
    const [totalCoffees, setTotalCoffees] = useState([]);

    React.useEffect(() => {
        axios({
            url: coffeeApi,
            method: 'get'
         })
        .then((response) => {
            setTotalCoffees(response.data);
        })

    }, [])

   


    return (
        <AllCoffeesContext.Provider value={{totalCoffees}}>
            {children}
        </AllCoffeesContext.Provider>
    )

}



