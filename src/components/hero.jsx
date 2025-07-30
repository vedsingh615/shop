import React from 'react'

function hero() {
  return (
    <div className='App '>
<div id="carouselExampleInterval" className="carousel slide slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/images/banner3.jpg" className="d-block w-100" alt="..." style={{width:'90%',height:'50vh'}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/images/banner2.jpeg" className="d-block w-100" alt="..." style={{width:'90%',height:'50vh'}}/>
    </div>
    <div className="carousel-item">
      <img src="/images/banner1.jpg" className="d-block w-100" alt="..." style={{width:'90%',height:'50vh'}}/>
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
  )
}

export default hero


