import React, { useState, useContext } from "react";

const orderContext = React.createContext();
const addOrderContext = React.createContext();
const removeOrderContext = React.createContext();
const updateOrderContext = React.createContext(); // Nuevo contexto para actualizar

export function useOrderContext() {
  return useContext(orderContext);
}

export function useAddOrderContext() {
  return useContext(addOrderContext);
}

export function useRemoveOrderContext() {
  return useContext(removeOrderContext);
}

export function useUpdateOrderContext() {
  return useContext(updateOrderContext); // Hook para actualizar pedido
}

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);

  const addOrder = (foodItem) => {
    setOrder([...order, foodItem]);
  };

  const removeItem = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  const updateItem = (updatedOrder) => {
    setOrder(updatedOrder);
  };

  return (
    <orderContext.Provider value={[order, setOrder]}>
      <addOrderContext.Provider value={addOrder}>
        <removeOrderContext.Provider value={removeItem}>
          <updateOrderContext.Provider value={updateItem}> {/* Proporciona la función de actualización */}
            {children}
          </updateOrderContext.Provider>
        </removeOrderContext.Provider>
      </addOrderContext.Provider>
    </orderContext.Provider>
  );
}
