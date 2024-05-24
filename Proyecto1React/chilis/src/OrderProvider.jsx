import React, { useState, useContext } from "react";

const orderContext = React.createContext();
const addOrderContext = React.createContext(); 

export function useOrderContext(){
    return useContext(orderContext);
}

export function useAddOrderContext(){
    return useContext(addOrderContext);
}

export function OrderProvider({ children }) { // Agregar children como parámetro
    const [order, setOrder] = useState([]);
    
    const addOrder = (foodItem) => {
        setOrder(order.push(foodItem));
    }

    return (
        <orderContext.Provider value={[order, setOrder]}>
            <addOrderContext.Provider value={addOrder}>
                {children}
            </addOrderContext.Provider>
        </orderContext.Provider>
    );
}
