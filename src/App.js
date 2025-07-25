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
import Shirts from './components/Shirts';
import Bagpacks from './components/Bagpacks';
import Jeans from './components/Jeans'; 
import Perfumes from './components/Perfumes';
import Watches from './components/Watches';
import Footer from './components/Footer';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const App = () => {

const router = createBrowserRouter([
  { path: '/', element: <>   <Navbar />  <NavIcon/><Hero /> <Productlist/> <Footer /></>},
  {path: '/Login', element: <>  <Navbar /> <Login /> <Footer /></>},
  {path: '/Register', element:<>  <Navbar />  <Register /> <Footer /></>},
  {path: '/tshirts', element: <> <Navbar /> <NavIcon/> <Tshirt /><Footer /> </>},
  {path: '/caps', element: <> <Navbar /> <NavIcon/> < Caps/> <Footer /></>},
  {path: '/jackets', element: <> <Navbar /> <NavIcon/> <Jackets /> <Footer /></>},
  {path: '/cargos', element: <> <Navbar /> <NavIcon/> <Cargos /> <Footer /></>},
  {path: '/shirts', element: <> <Navbar /> <NavIcon/> <Shirts /> <Footer /> </>},
  {path: '/shoes', element: <> <Navbar /> <NavIcon/> <Shoes /> <Footer /> </>},
  {path: '/bagpacks', element: <> <Navbar /> <NavIcon/> <Bagpacks /> <Footer /> </>},
  {path: '/jeans', element: <> <Navbar /> <NavIcon/> <Jeans /> <Footer /> </>},
  {path: '/perfumes', element: <> <Navbar /> <NavIcon/> <Perfumes /> <Footer /></>},
  {path: '/watches', element: <> <Navbar /> <NavIcon/> <Watches /> <Footer /></>},
]);


  return (
    <div>
  
     <RouterProvider router={router}/>
     
    </div>
  )
}

export default App

