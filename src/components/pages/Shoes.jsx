import React from 'react';
import ProductCard from '../ProductCard';

const Shoes = () => {


  const shoesProducts = [
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0-woY-VnUVNXdXmcgaB12m_0i-ew-T2J-Q&s',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image:'https://m.media-amazon.com/images/I/61pzvCOBFQL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR2Q53RFM9TD1E6DOjw-NYOSbmTKoHb5uTw&s',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/61wYbVMG+-L._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/71GqjRjvRoL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/51zJY0bS3-L._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    
    {
      image:'https://m.media-amazon.com/images/I/71lPjDHvjtL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/713C4wFx0jL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/61PZyk7PN-L._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/51vQbuuO2eL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
  ];

  return (
    <div className="products-grid">
      {shoesProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Shoes;
