import React from 'react';
import { useCart } from './CartContext'; // ✅ correct import

const Cart = () => {
  const { cart, setCart } = useCart(); // ✅ must match what the context provides

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart); // ✅ this will update the context state
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='cartsection'>Your Cart</h1>

      {cart.length === 0 ? (
        <p  className='cartsection'>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '100px' }} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description.slice(0, 60)}...</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
