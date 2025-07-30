import React from 'react';
import ProductCard from '../ProductCard';

const Perfumes = () => {
  const perfumeProducts = [
    {
      image: 'https://m.media-amazon.com/images/I/61I7wRX3rFL._AC_UL320_.jpg',
      title: 'Versace Bright Crystal',
      category: 'Perfume',
      price: 4999,
      href: '/product/versace-bright-crystal',
    },
    {
      image: 'https://m.media-amazon.com/images/I/71lLdu3wkPL._AC_UL320_.jpg',
      title: 'Bleu De Chanel',
      category: 'Perfume',
      price: 5999,
      href: '/product/bleu-de-chanel',
    },
    {
      image: 'https://m.media-amazon.com/images/I/711eP6dPXeL._AC_UL320_.jpg',
      title: 'Dior Sauvage',
      category: 'Perfume',
      price: 6299,
      href: '/product/dior-sauvage',
    },
    {
      image: 'https://m.media-amazon.com/images/I/511CYaqTA4L._AC_UL320_.jpg',
      title: 'Gucci Bloom',
      category: 'Perfume',
      price: 4899,
      href: '/product/gucci-bloom',
    },
    {
      image: 'https://m.media-amazon.com/images/I/61nkCltKCaL._AC_UL320_.jpg',
      title: 'Armani Code',
      category: 'Perfume',
      price: 5499,
      href: '/product/armani-code',
    },
    {
      image: 'https://m.media-amazon.com/images/I/61fLAHtUMrL._AC_UL320_.jpg',
      title: 'Tom Ford Noir',
      category: 'Perfume',
      price: 6999,
      href: '/product/tom-ford-noir',
    },
    {
      image: 'https://m.media-amazon.com/images/I/61Ny3IO763L._AC_UL320_.jpg',
      title: 'Carolina Herrera 212',
      category: 'Perfume',
      price: 4799,
      href: '/product/carolina-212',
    },
    {
      image: 'https://m.media-amazon.com/images/I/51soMCNMKIL._AC_UL320_.jpg',
      title: 'Victoria Secret Bombshell',
      category: 'Perfume',
      price: 4499,
      href: '/product/victoria-bombshell',
    },
    {
      image: 'https://m.media-amazon.com/images/I/51iomPcaZ9L._AC_UL320_.jpg',
      title: 'Calvin Klein One',
      category: 'Perfume',
      price: 2899,
      href: '/product/ck-one',
    },
    {
      image: 'https://m.media-amazon.com/images/I/41-TSee7UJL._AC_UL320_.jpg',
      title: 'Fogg Xtremo',
      category: 'Perfume',
      price: 399,
      href: '/product/fogg-xtremo',
    },
  ];

  return (
    <div className="products-grid">
      {perfumeProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Perfumes;
