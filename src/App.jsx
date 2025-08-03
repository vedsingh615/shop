import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/HF/Layout';
import './App.css';

import Login from './components/form/Login';
import Register from './components/form/Register';
import Hero from './components/HF/hero';
import AllClothes from './components/pages/AllClothes';
import Cart from './components/pages/Cart';
import { CartProvider } from './components/pages/CartContext'; 
import SingleProduct from './components/pages/SingleProduct';
import Notfound from './components/pages/Notfound';

const App = () => {
  const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>,
    children: [
      { path: '/', element: <><Hero /><AllClothes /></> },
      { path: '/Login', element: <Login /> },
      { path: '/Register', element: <Register /> },
      { path: '/cart', element: <Cart /> },
      { path: '/product/:id', element: <SingleProduct /> },
      {
        path: '*',
        element: <Notfound/>
      }
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
