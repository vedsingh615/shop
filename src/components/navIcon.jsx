import React from 'react'
import { Link } from 'react-router-dom';

function NavIcon() {
  return (
    <div className='App'>
      <div className="grid-container" style={{ width: '90%', left: '80px' }}>

        <Link to="/tshirts" className="grid-item">
          <img src='https://img.tatacliq.com/images/i18//437Wx649H/MP000000022475794_437Wx649H_202406031854361.jpeg' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>T-Shirts</p>
        </Link>

        <Link to="/caps" className="grid-item">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfIYT8J0oM--7sUlUNim-6WatpOheF8ShYl9Kpw2-VvKh_aVAtV3I8ydAprIRzPXnAb4&usqp=CAU' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Caps</p>
        </Link>

        <Link to="/shirts" className="grid-item">
          <img src='https://m.media-amazon.com/images/I/61hv49VjMuL._AC_UL320_.jpg' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Shirts</p>
        </Link>

        <Link to="/shoes" className="grid-item">
          <img src='https://m.media-amazon.com/images/I/51Z7bpvdeAL._AC_UL640_QL65_.jpg' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Shoes</p>
        </Link>

        <Link to="/cargos" className="grid-item">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlF-jGp3vAZGpvNq8RC_dEA_jj7ccSei5Daw&s' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Cargos</p>
        </Link>

        <Link to="/jackets" className="grid-item">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgupZrmPLHgzyzUFJF6__fqHepV_TX-_1NxEQ7s3h-Ys2KHn9uMpM8IPJf7o98ZEIXUw&usqp=CAU' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Jackets</p>
        </Link>

        <Link to="/jeans" className="grid-item">
          <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTTZ1bQuubs2e6N4Z5MODoSlLN-SSInpGJ3Ro1-ndQFNlLhXFKVfwOclGPznzjJtXpz0FhPRtM7SUKsk9abfTMXYy8_yD53oaWhmaIVtv79UKHIvM1BLhnSSw' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Jeans</p>
        </Link>

        <Link to="/watches" className="grid-item">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TbYx7SsnOvRIOMGuSXVvWCb2yghUwFc6tNWvjdTKrsGzg2Kkl3KZPTvbDq4B8iEvAcc&usqp=CAU' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Watches</p>
        </Link>

        <Link to="/bagpacks" className="grid-item">
          <img src='https://m.media-amazon.com/images/I/31NRzJMhp9L._UY1100_.jpg' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Bagpacks</p>
        </Link>

        <Link to="/perfumes" className="grid-item">
          <img src='https://img.freepik.com/premium-psd/perfume-bottle-sand_23-2148961294.jpg?w=740' style={{ height: "80px", width: "70px", mixBlendMode: "multiply" }} alt='cam' />
          <p>Perfumes</p>
        </Link>

      </div>
    </div>
  )
}

export default NavIcon;
