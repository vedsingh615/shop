import React from 'react';
import ProductCard from './ProductCard';

const Shirts = () => {


  const shirtProducts = [
    {
     image:'https://m.media-amazon.com/images/I/71E7wj1H2FL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
     image:'https://m.media-amazon.com/images/I/71Q9pXhdh2L._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    
    {
     image:'https://m.media-amazon.com/images/I/61IRAuE66QL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
     image:'https://m.media-amazon.com/images/I/71NRp2oIQML._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
     image:'https://m.media-amazon.com/images/I/61lbADTufPL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
     image:'https://m.media-amazon.com/images/I/71XYhBCOqvL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
     image:'https://m.media-amazon.com/images/I/81thHw9c7qL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
     image:'https://m.media-amazon.com/images/I/71Jli-Yjv2L._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
     image:'https://m.media-amazon.com/images/I/71LnycrT7qL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
     image:'https://m.media-amazon.com/images/I/51-pLhPHoBL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
  ];

  return (
    <div className="products-grid">
      {shirtProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Shirts;
