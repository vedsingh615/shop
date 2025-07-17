import React from 'react';
import ProductCard from './ProductCard';

const dummyImage = "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1751994388_9774808.jpg?v=2"; // Use your actual image

const products = [

  {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
      href: '/product/superman',
  }, 
  {
    image: dummyImage,
    title: 'Superman: Krypton Origin',
    category: 'Backpacks',
    price: 3999,
  },
  {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
  },
  {
    image: dummyImage,
    title: 'Flash: Speed Force',
    category: 'Backpacks',
    price: 2899,
  },
  {
    image: dummyImage,
    title: 'Wonder Woman Power',
    category: 'Backpacks',
    price: 3699,
  },
  {
    image: dummyImage,
    title: 'Aquaman: Ocean Fury',
    category: 'Backpacks',
    price: 3199,
  },
  {
    image: dummyImage,
    title: 'Green Lantern Energy',
    category: 'Backpacks',
    price: 3399,
  },
  {
    image: dummyImage,
    title: 'Iron Man Tech Pack',
    category: 'Backpacks',
    price: 4099,
  },
  {
    image: dummyImage,
    title: 'Captain America Shield Gear',
    category: 'Backpacks',
    price: 3799,
  },
  {
    image: dummyImage,
    title: 'Black Panther Legacy',
    category: 'Backpacks',
    price: 3999,
  },
  {
    image: dummyImage,
    title: 'Doctor Strange Portal Bag',
    category: 'Backpacks',
    price: 3699,
  },
  {
    image: dummyImage,
    title: 'Hulk Smash Duffel',
    category: 'Backpacks',
    price: 2899,
  },
  {
    image: dummyImage,
    title: 'Thor: Asgardian Armor',
    category: 'Backpacks',
    price: 4199,
  },

  {
    image: dummyImage,
    title: 'Superman: Krypton Origin',
    category: 'Backpacks',
    price: 3999,
  },
  {
    image: dummyImage,
    title: 'Batman: Dark Knight Edition',
    category: 'Backpacks',
    price: 3499,
  },
  {
    image: dummyImage,
    title: 'Flash: Speed Force',
    category: 'Backpacks',
    price: 2899,
  },
  {
    image: dummyImage,
    title: 'Wonder Woman Power',
    category: 'Backpacks',
    price: 3699,
  },
  {
    image: dummyImage,
    title: 'Aquaman: Ocean Fury',
    category: 'Backpacks',
    price: 3199,
  },
  {
    image: dummyImage,
    title: 'Green Lantern Energy',
    category: 'Backpacks',
    price: 3399,
  },
  {
    image: dummyImage,
    title: 'Iron Man Tech Pack',
    category: 'Backpacks',
    price: 4099,
  },
  {
    image: dummyImage,
    title: 'Captain America Shield Gear',
    category: 'Backpacks',
    price: 3799,
  },
  {
    image: dummyImage,
    title: 'Black Panther Legacy',
    category: 'Backpacks',
    price: 3999,
  },
  {
    image: dummyImage,
    title: 'Doctor Strange Portal Bag',
    category: 'Backpacks',
    price: 3699,
  },
  {
    image: dummyImage,
    title: 'Hulk Smash Duffel',
    category: 'Backpacks',
    price: 2899,
  },
  {
    image: dummyImage,
    title: 'Thor: Asgardian Armor',
    category: 'Backpacks',
    price: 4199,
  },
];

const Productlist = () => {
  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Productlist;
