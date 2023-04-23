import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Main from './Components/Main/Main';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import loaderData from './Loader/Loader';
import Checkout from './Components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: loaderData
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
