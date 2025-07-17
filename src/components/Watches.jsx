import React from 'react';
import ProductCard from './ProductCard';

const Watches = () => {

  const WatchesProducts = [
    {
      image:'https://m.media-amazon.com/images/I/41mhIJKHKXL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image:'https://m.media-amazon.com/images/I/51G68yViXHL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
      image:'https://m.media-amazon.com/images/I/61V9NlP5unL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/61xSTnSOkuL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/612XCKPG0TL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/71-yaJc6Z-L._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    
    {
      image:'https://m.media-amazon.com/images/I/71v6m3wsYRL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/61dywKQasaL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/711c+bKUNAL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/61uysU9crTL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
  ];

  return (
    <div className="products-grid">
      {WatchesProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Watches;
