import React from 'react';
import ProductCard from './ProductCard';

const Jeans = () => {
 
  const tshirtProducts = [
    {
    image:'https://m.media-amazon.com/images/I/61kAmfsmliL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
    image:'https://m.media-amazon.com/images/I/61SOJ5hoduL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    
    {
    image:'https://m.media-amazon.com/images/I/51-RX2zyQDL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
    image:'https://m.media-amazon.com/images/I/61+uoXBMn6L._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
    image:'https://m.media-amazon.com/images/I/61EITRMkVTL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
    image:'https://m.media-amazon.com/images/I/61xf9zQ9IZL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
    image:'https://m.media-amazon.com/images/I/61PIAyOPNaL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
    image:'https://m.media-amazon.com/images/I/61Ne8s64-VL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
    image:'https://m.media-amazon.com/images/I/612M5IVuRsL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
    image:'https://m.media-amazon.com/images/I/61TkgKTD61L._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
  ];

  return (
    <div className="products-grid">
      {tshirtProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Jeans;
