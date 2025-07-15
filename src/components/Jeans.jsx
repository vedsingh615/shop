import React from 'react';
import ProductCard from './ProductCard';

const Jeans = () => {
  const JeansImage = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTTZ1bQuubs2e6N4Z5MODoSlLN-SSInpGJ3Ro1-ndQFNlLhXFKVfwOclGPznzjJtXpz0FhPRtM7SUKsk9abfTMXYy8_yD53oaWhmaIVtv79UKHIvM1BLhnSSw";

  const tshirtProducts = [
    {
      image: JeansImage,
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image: JeansImage,
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
      image: JeansImage,
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image: JeansImage,
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image: JeansImage,
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image: JeansImage,
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
