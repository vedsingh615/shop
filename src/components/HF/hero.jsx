import React from 'react';
import b1 from '../../assets/banner1.jpg';
import b2 from '../../assets/banner2.jpeg';
import b3 from '../../assets/banner3.jpg';

function Hero() {
  return (
    <div className="App">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={b1}
              className="d-block w-100"
              alt="Banner 3"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={b2}
              className="d-block w-100"
              alt="Banner 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={b3}
              className="d-block w-100"
              alt="Banner 1"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
