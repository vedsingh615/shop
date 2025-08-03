import React, { useState, useEffect } from 'react';
import b1 from '../../assets/banner1.jpg';
import b2 from '../../assets/banner2.jpeg';
import b3 from '../../assets/banner3.jpg';
const banners = [b1, b2, b3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000); // slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-slide-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((img, index) => (
          <img key={index} src={img} alt={`Banner ${index + 1}`} className="hero-image" />
        ))}
      </div>
    </div>
  );
};

export default Hero;
