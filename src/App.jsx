
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/HF/Layout';
import './App.css';

import Login from './components/form/Login';
import Register from './components/form/Register';
import Hero from './components/HF/hero';
import AllClothes from './components/pages/AllClothes';



const App = () => {

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
      path: '/',
      element: <><Hero/><AllClothes/></>
  },   
  {path: '/Login', element:    <Login /> },
  {path: '/Register', element: <Register /> },
  
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

