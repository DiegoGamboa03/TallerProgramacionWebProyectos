import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear los contextos
export const ApiContext = createContext();
export const UpdateApiContext = createContext();

// Crear hooks para acceder a los contextos
export function useApiContext() {
    return useContext(ApiContext);
}

export function useUpdateApiContext() {
    return useContext(UpdateApiContext);
}

// Proveedor del contexto
export function ApiProvider({ children }) {
    const [data, setData] = useState({
        productos: [],
        locales: [],
        loading: true,
        error: null
    });

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/productos');
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const result = await response.json();
            console.log(result);
            setData({
                chiliar: result.chiliar || [],
                favoritos: result.favoritos || [],
                promociones: result.promociones || [],
                tacosFajitas: result.tacosFajitas || [],
                locales: result.locales || [],
                loading: false,
                error: null
            });
        } catch (error) {
            setData({
                productos: [],
                locales: [],
                loading: false,
                error: error.message
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={data}>
            <UpdateApiContext.Provider value={fetchData}>
                {children}
            </UpdateApiContext.Provider>
        </ApiContext.Provider>
    );
}
