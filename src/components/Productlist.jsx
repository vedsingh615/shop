import React from 'react';


const products = [
  {
    image: 'https://m.media-amazon.com/images/I/61CGqRScDaL._AC_UL320_.jpg',
    caption: 'Black Shirt',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61Oqvx88hhL._AC_UL320_.jpg',
    caption: 'Marvel Tee',
  },
  {
    image: 'https://m.media-amazon.com/images/I/714xYHmO5dL._AC_UL320_.jpg',
    caption: 'Minimal White',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61sFLnpPerL._AC_UL320_.jpg',
    caption: 'Anime Oversize',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61Iq5e-dSRL._AC_UL320_.jpg',
    caption: 'Navy Fit',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61vvYXrifiL._AC_UL320_.jpg',
    caption: 'Slogan Shirt',
  },
  {
    image: 'https://m.media-amazon.com/images/I/619oydTctPL._AC_UL320_.jpg',
    caption: 'Casual Tee',
  },
  {
    image: 'https://m.media-amazon.com/images/I/619oydTctPL._AC_UL320_.jpg',
    caption: 'Repeat Casual',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61Iq5e-dSRL._AC_UL320_.jpg',
    caption: 'Navy Fit 2',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61vvYXrifiL._AC_UL320_.jpg',
    caption: 'Slogan 2',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61Iq5e-dSRL._AC_UL320_.jpg',
    caption: 'Navy Fit 3',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61vvYXrifiL._AC_UL320_.jpg',
    caption: 'Slogan 3',
  },
];

const Productlist = () => {
  return (
    <div className="App" style={{ margin: '20px 40px' }}>
      <h1 style={{ textAlign: 'center' }}>Categories</h1>
      <div className="uniform-grid">
        {products.map((product, index) => (
          <div className="grid-items" key={index}>
            <img
              src={product.image}
              alt={`product-${index + 1}`}
              className="grid-image"
            />
            <h2 className="grid-caption">{product.caption}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productlist;


