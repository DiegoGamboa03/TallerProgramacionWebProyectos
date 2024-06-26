import React, { useState, useContext } from "react";

const orderContext = React.createContext();
const addOrderContext = React.createContext();
const removeOrderContext = React.createContext();
const updateOrderContext = React.createContext(); // Contexto para actualizar
const clearOrderContext = React.createContext(); // Contexto para limpiar el carrito

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
  return useContext(updateOrderContext);
}

export function useClearOrderContext() {
  return useContext(clearOrderContext); // Hook para limpiar el carrito
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

  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <orderContext.Provider value={[order, setOrder]}>
      <addOrderContext.Provider value={addOrder}>
        <removeOrderContext.Provider value={removeItem}>
          <updateOrderContext.Provider value={updateItem}>
            <clearOrderContext.Provider value={clearOrder}> {/* Proporciona la función de limpieza */}
              {children}
            </clearOrderContext.Provider>
          </updateOrderContext.Provider>
        </removeOrderContext.Provider>
      </addOrderContext.Provider>
    </orderContext.Provider>
  );
}
