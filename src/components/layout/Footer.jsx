import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal
} from 'react-icons/fa';
import { SiPhonepe, SiGooglepay } from 'react-icons/si';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>YoungFashionWear</h3>
        <p>Trendy styles. Premium quality. Designed for youth, delivered with passion.</p>
      </div>

      <div className="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tshirts">T-Shirts</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h4>Contact</h4>
        <p>Email: support@youngfashionwear.in</p>
        <p>Phone: +91 9876543210</p>
        <div className="footer-socials">
          <Link to="#"><FaFacebook /></Link>
          <Link to="#"><FaInstagram /></Link>
          <Link to="#"><FaTwitter /></Link>
          <Link to="#"><FaLinkedin /></Link>
        </div>
      </div>

      <div className="footer-section payments">
        <h4>We Accept</h4>
        <div className="payment-icons">
          <FaCcVisa style={{ color: '#1A1F71' }} />
          <FaCcMastercard style={{ color: '#EB001B' }} />
          <FaCcPaypal style={{ color: '#003087' }} />
          <SiPhonepe style={{ color: '#5F259F' }} />
          <SiGooglepay style={{ color: '#34A853' }} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YoungFashionWear. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>
          <IoIosArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
