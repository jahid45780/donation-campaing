import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import DonationDetails from './Components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/donation',
      element:<Donation></Donation>,
      loader:() => fetch('/carts.json')
    },
    {
      path:'/statistics',
      element: <Statistics></Statistics>
    },
    {
      path:'/donation1/:id',
      element: <DonationDetails></DonationDetails>,
      loader: ()=> fetch('/carts.json')
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
