import './App.css';
import React from 'react';
import Hero from './components/hero';
import Navbar from './components/layout/navbar';
import NavIcon from './components/navIcon';
import Login from './components/form/Login';
import Register from './components/form/Register';
import Productlist from './components/Productlist';
import Tshirt from './components/pages/Tshirt';
import Caps from './components/pages/Caps';
import Jackets from './components/pages/Jackets';
import Cargos from './components/pages/Cargos';
import Shoes from './components/pages/Shoes';
import Shirts from './components/pages/Shirts';
import Bagpacks from './components/pages/Bagpacks';
import Jeans from './components/pages/Jeans'; 
import Perfumes from './components/pages/Perfumes';
import Watches from './components/pages/Watches';
import Footer from './components/layout/Footer';

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

