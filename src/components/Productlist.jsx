import React from 'react';
import ProductCard from './ProductCard';


 const tshirtProducts = [
    {
      image:'https://m.media-amazon.com/images/I/61CGqRScDaL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image:'https://m.media-amazon.com/images/I/61Oqvx88hhL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
      image:'https://m.media-amazon.com/images/I/714xYHmO5dL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/61sFLnpPerL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/61Iq5e-dSRL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/61vvYXrifiL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    
    {
      image:'https://m.media-amazon.com/images/I/619oydTctPL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
   
    
  ];
 const jeansProducts = [
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
  
  ];
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
   
  ];
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
    
  ];
  const cargoProducts = [
    {
image:'https://m.media-amazon.com/images/I/61hcFJJ6sQL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
image:'https://m.media-amazon.com/images/I/71hJjgEsJHL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
image:'https://m.media-amazon.com/images/I/815gdBdQIOL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
image:'https://m.media-amazon.com/images/I/61u5oAftaeL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
image:'https://m.media-amazon.com/images/I/51ZWEnfVgwL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
image:'https://m.media-amazon.com/images/I/51yPnppwqSL._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
image:'https://m.media-amazon.com/images/I/51Gjmk4c-nL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
  
  ];
  
  const jacketsProducts = [
    {
      image:'https://m.media-amazon.com/images/I/61IpkN7zvBL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image:'https://m.media-amazon.com/images/I/617f1AwgZjL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
     {
      image:'https://m.media-amazon.com/images/I/61pCn6DowvS._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/51ZAfqxSRcL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/61t8K6aYiFL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/51UWK5x3j6L._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    {
      image:'https://m.media-amazon.com/images/I/51qD6dgUpFL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
   
  ];
   const watchesProducts = [
    {
      image:'https://m.media-amazon.com/images/I/41mhIJKHKXL._AC_UL320_.jpg',
      title: 'Black Graphic Tee',
      category: 'T-Shirts',
      price: 799,
      href: '/product/tshirt-black',
    },
    {
      image:'https://m.media-amazon.com/images/I/51G68yViXHL._AC_UL320_.jpg',
      title: 'Marvel Logo Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-marvel',
    },
    {
      image:'https://m.media-amazon.com/images/I/61V9NlP5unL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
    {
      image:'https://m.media-amazon.com/images/I/61xSTnSOkuL._AC_UL320_.jpg',
      title: 'Anime Print Oversized Tee',
      category: 'T-Shirts',
      price: 999,
      href: '/product/tshirt-anime',
    },
    {
      image:'https://m.media-amazon.com/images/I/612XCKPG0TL._AC_UL320_.jpg',
      title: 'Classic Navy T-Shirt',
      category: 'T-Shirts',
      price: 749,
      href: '/product/tshirt-navy',
    },
    {
      image:'https://m.media-amazon.com/images/I/71-yaJc6Z-L._AC_UL320_.jpg',
      title: 'Slogan Printed Tee',
      category: 'T-Shirts',
      price: 899,
      href: '/product/tshirt-slogan',
    },
    
    {
      image:'https://m.media-amazon.com/images/I/71v6m3wsYRL._AC_UL320_.jpg',
      title: 'Minimal White Tee',
      category: 'T-Shirts',
      price: 699,
      href: '/product/tshirt-white',
    },
   
  ];
   const bagProducts = [
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
 
  ];
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
  
  ];
const Productlist = () => {
  return (
   <div className='App' style={{margin:'20px 40px'}}>
    <h1>T-Shirts</h1>
     <div className="products-grid">
      
      {tshirtProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
   <h1>Jeans</h1>
    <div className="products-grid">
      
      {jeansProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Shoes</h1>
    <div className="products-grid">
      
      {shoesProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Shirts</h1>
    <div className="products-grid">
      
      {shirtProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Cargos</h1>
    <div className="products-grid">
      
      {cargoProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Jackets</h1>
    <div className="products-grid">
      
      {jacketsProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>
      Watches
    </h1>
    <div className="products-grid">
      
      {watchesProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>Bagpacks</h1>
    <div className="products-grid">
      
      {bagProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <h1>
      Perfumes
    </h1>
    <div className="products-grid">
      
      {perfumeProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
   </div>
  );
};

export default Productlist;
