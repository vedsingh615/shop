import React from 'react';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => {

   const [showSearch, setShowSearch] = React.useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };


  const [showmenu, setshowMenu] = React.useState(false);

  const buttomenu = () => {
    setshowMenu(!showmenu);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
        <button type="submit">Search</button>
      </div>

      <div className="nav-icons">
   
<div className="sb">
 
      <div onClick={toggleSearch} style={{ cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
      {showSearch && (
        <input type="text" placeholder="Search here..."  className="search-input"/>
      )}



        </div>
        
  






        <Link to="/login" className="login">
        <Link to="/login" >
          <svg xmlns="http://www.w3.org/2000/svg"  style={{color:"black"}} width="27" height="27" fill="currentColor" className="person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg></Link>
          <span>Login</span>
        </Link>

        <Link to="/cart" className="cart">
        <Link to="/cart"  >
          <svg xmlns="http://www.w3.org/2000/svg" style={{color:"black"}} width="27" height="27" fill="currentColor" className="cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg></Link>
          <span>Cart</span>
        </Link>

        <div className="humbur">
          <button className="btn" onClick={buttomenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
        </div>

        <nav className={showmenu ? 'menu-mobile' : 'menu-web'}>
          <ul>
            <li>
              <details>
                <summary>All Accessories</summary>
                <ul>
                    <li><Link to="/shoes">Shoes</Link></li>
                  <li><Link to="/bagpacks">Bagpacks</Link></li>
                  <li><Link to="/perfumes">Perfumes</Link></li>
                  <li><Link to="/caps">Caps</Link></li>
                  <li><Link to="/watches">Watches</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Top Wear</summary>
                <ul>
                  <li><Link to="/tshirts">T-Shirts</Link></li>
                  <li><Link to="/shirts">Shirts</Link></li>
                  <li><Link to="/jackets">Hoodies & Jackets</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Bottom Wear</summary>
                <ul>
                  <li><Link to="/cargos">Cargos</Link></li>
                  <li><Link to="/jeans">Jeans</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
