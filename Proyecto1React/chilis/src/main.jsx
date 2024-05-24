import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import FoodMenu from './pages/menu/FoodMenu.jsx';
import Location from './pages/localizacion/Location.jsx';
import Promotions from './pages/promociones/Promotions.jsx';
import Orders from './pages/pedidos/Orders.jsx';
import { OrderProvider } from './OrderProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Menu",
    element:<FoodMenu/> ,
  },
  {
    path: "/Localizacion",
    element: <Location/>,
  },
  {
    path: "/Promociones",
    element: <Promotions/>,
  },
  {
    path: "/Pedidos",
    element:<Orders/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <OrderProvider>
        <RouterProvider router={router} />
      </OrderProvider>
  </React.StrictMode>,
)
