
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/HF/Layout';

import './App.css';

import Login from './components/form/Login';
import Register from './components/form/Register';
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
import Navicon from './components/navIcon';
import Hero from './components/hero';



const App = () => {

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
      path: '/',
      element: <><Navicon /><Hero/></>
  },   
  {path: '/Login', element:    <Login /> },
  {path: '/Register', element: <Register /> },
  {path: '/tshirts', element:   <Tshirt />},
  {path: '/caps', element:  < Caps/> },
  {path: '/jackets', element:  <Jackets /> },
  {path: '/cargos', element:  <Cargos />},
  {path: '/shirts', element: <Shirts /> },
  {path: '/shoes', element: <Shoes /> },
  {path: '/bagpacks', element:  <Bagpacks /> },
  {path: '/jeans', element:  <Jeans /> },
  {path: '/perfumes', element: <Perfumes /> },
  {path: '/watches', element:  <Watches /> },
],
},
]);


  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App

