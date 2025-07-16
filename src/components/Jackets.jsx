import React from 'react';
import ProductCard from './ProductCard';

const Jackets = () => {
  const JacketImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgupZrmPLHgzyzUFJF6__fqHepV_TX-_1NxEQ7s3h-Ys2KHn9uMpM8IPJf7o98ZEIXUw&usqp=CAU";

  const tshirtProducts = [
    {
      image: JacketImage,
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image: JacketImage,
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
     {
      image: JacketImage,
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image: JacketImage,
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image: JacketImage,
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image: JacketImage,
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
      image: JacketImage,
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image: JacketImage,
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image: JacketImage,
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image: JacketImage,
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

export default Jackets;
