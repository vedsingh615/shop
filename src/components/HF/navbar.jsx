import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearchTerm }) => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [showmenu, setshowMenu] = React.useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const buttomenu = () => {
    setshowMenu(!showmenu);
  };

  // 💡 This function sends the search input to AllClothes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // setSearchTerm comes from Layout
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      {/* Always visible Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here..."
          onChange={handleSearchChange} // 📤 send input to parent
        />
        <button type="submit">Search</button>
      </div>

      {/* Icons */}
      <div className="nav-icons">
        {/* Search Icon toggle (shows input on click) */}
        <div className="sb">
          <div onClick={toggleSearch} style={{ cursor: 'pointer' }}>
            🔍
          </div>
          {showSearch && (
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search here..."
              className="search-input"
            />
          )}
        </div>

        {/* Login */}
        <Link to="/login" className="login">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "black" }} width="27" height="27" fill="currentColor" className="person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
          <span>Login</span>
        </Link>

        {/* Cart */}
        <Link to="/cart" className="cart">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "black" }} width="27" height="27" fill="currentColor" className="cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5" />
          </svg>
          <span>Cart</span>
        </Link>

        {/* Hamburger Menu */}
        <div className="humbur">
          <button className="btn" onClick={buttomenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className={showmenu ? 'menu-mobile' : 'menu-web'}>
          <ul>
            <li>
              <details>
                <summary>All Accessories</summary>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">Example</Link></li>
                  <li><Link to="/">Example</Link></li>
                  <li><Link to="/">Example</Link></li>
                  <li><Link to="/">Example</Link></li>
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
