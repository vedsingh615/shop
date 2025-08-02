import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/HF/Layout';
import './App.css';

import Login from './components/form/Login';
import Register from './components/form/Register';
import Hero from './components/HF/hero';
import AllClothes from './components/pages/AllClothes';
import Cart from './components/pages/Cart';
import { CartProvider } from './components/pages/CartContext'; 
import SingleProduct from './components/pages/SingleProduct';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <><Hero/><AllClothes/></> },
        { path: '/Login', element: <Login /> },
        { path: '/Register', element: <Register /> },
        { path: '/cart', element: <Cart /> }, 
        { path: '/product/:id', element: <SingleProduct /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
