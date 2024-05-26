import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './Layout/MainLayout.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import Reset from './Components/Reset/Reset.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Error from './Components/Error.jsx';
import Cart from './Components/Cart/Cart.jsx';
import DashboardLayout from './Components/Dashboard/DashboardLayout.jsx';
import AllProducts from './Components/Dashboard/AllProducts.jsx';
import Details from './Components/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      
      {
        path:'/',
        element:<Shop></Shop>,
        loader: () => fetch('http://localhost:3000/tShirts/')
        
      },
      
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/reset',
        element:<Reset></Reset>
      },
      
      {
        path:'/cart',
        element:<Cart></Cart>,
        loader: () => fetch('http://localhost:3000/tShirts/')
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: ({params})=>fetch(`http://localhost:3000/tShirts/${params.id}`)
      }
    ] 
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'allProducts',
        element:<AllProducts></AllProducts>,
        loader: () => fetch('http://localhost:3000/tShirts/')
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
