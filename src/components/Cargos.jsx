import React from 'react';
import ProductCard from './ProductCard';

const Cargos = () => {
  const CargosImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlF-jGp3vAZGpvNq8RC_dEA_jj7ccSei5Daw&s";

  const tshirtProducts = [
    {
      image: CargosImage,
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image: CargosImage,
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
      image: CargosImage,
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image: CargosImage,
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image: CargosImage,
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image: CargosImage,
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
      image: CargosImage,
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image: CargosImage,
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image: CargosImage,
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image: CargosImage,
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

export default Cargos;
