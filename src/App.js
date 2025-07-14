import './App.css';
import React from 'react';
import Hero from './components/hero';
import Navbar from './components/navbar';
import NavIcon from './components/navIcon';
import Login from './components/Login';
import Register from './components/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const App = () => {

const router = createBrowserRouter([
  { path: '/', element: <>   <Navbar />  <NavIcon/><Hero /> </>},
  {path: '/Login', element: <>  <Login /> </>},
  {path: '/Register', element:<>   <Register /> </>},
]);


  return (
    <div>
     
     <RouterProvider router={router}/>
    </div>
  )
}

export default App

