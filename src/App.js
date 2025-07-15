import './App.css';
import React from 'react';
import Hero from './components/hero';
import Navbar from './components/navbar';
import NavIcon from './components/navIcon';
import Login from './components/Login';
import Register from './components/Register';
import Productlist from './components/Productlist';
import Tshirt from './components/Tshirt';
import Caps from './components/Caps';
import Jackets from './components/Jackets';
import Cargos from './components/Cargos';
import Shoes from './components/Shoes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const App = () => {

const router = createBrowserRouter([
  { path: '/', element: <>   <Navbar />  <NavIcon/><Hero /> <Productlist/></>},
  {path: '/Login', element: <>  <Login /> </>},
  {path: '/Register', element:<>   <Register /> </>},
  {path: '/tshirts', element: <> <Navbar /> <NavIcon/> <Tshirt /> </>},
  {path: '/caps', element: <> <Navbar /> <NavIcon/> < Caps/> </>},
  {path: '/jackets', element: <> <Navbar /> <NavIcon/> <Jackets /> </>},
  {path: '/cargos', element: <> <Navbar /> <NavIcon/> <Cargos /> </>},
  {path: '/shoes', element: <> <Navbar /> <NavIcon/> <Shoes /> </>},
]);


  return (
    <div>
     
     <RouterProvider router={router}/>
    </div>
  )
}

export default App

