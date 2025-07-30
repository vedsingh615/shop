import React from 'react';
import ProductCard from '../ProductCard';

const Bagpacks = () => {


  const bagpacksProducts = [
    {
     image:'https://m.media-amazon.com/images/I/61Iu0swgdiL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
     image:'https://m.media-amazon.com/images/I/51c-wGBm0EL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
     image:'https://m.media-amazon.com/images/I/71O5b30Jv8L._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
     image:'https://m.media-amazon.com/images/I/71ySo8RgpBL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
     image:'https://m.media-amazon.com/images/I/51wMbBSssQL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
     image:'https://m.media-amazon.com/images/I/61g5Rjt5xiL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
     image:'https://m.media-amazon.com/images/I/31ZTdKVVPuL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
     image:'https://m.media-amazon.com/images/I/519Mdt-b2fL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
     image:'https://m.media-amazon.com/images/I/71lyd38-0RL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
     image:'https://m.media-amazon.com/images/I/81BAj+1lrcL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
  ];

  return (
    <div className="products-grid">
      {bagpacksProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Bagpacks;
