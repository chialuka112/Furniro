import React, { useState } from "react";
import './Navbar.css';
import cartIcon from "../../assets/shopping-cart.svg";
import userIcon from "../../assets/user.svg";
import searchIcon from "../../assets/search.svg";
import logo from "../../assets/modern-futuristic-chair-interior-icon-logo-design-line-vector.jpg"
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Furniro Logo" />
        <span>Furniro</span>
      </div>
      <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8" y1="8" x2="24" y2="24" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" />
            <line x1="24" y1="8" x2="8" y2="24" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="32" height="3" rx="1.5" fill="#B88E2F"/>
            <rect y="14" width="32" height="3" rx="1.5" fill="#B88E2F"/>
            <rect y="21" width="32" height="3" rx="1.5" fill="#B88E2F"/>
          </svg>
        )}
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li className="navbar-link">Home</li>
        <Link to="/Products">
        <li className="navbar-link">Products</li>
        </Link>
        <li className="navbar-link">About</li>
        <li className="navbar-link">Contact</li>
      </ul>
      <div className="navbar-actions">
        <img src={userIcon} alt="User" />
        <img src={searchIcon} alt="Search" />
        <img src={cartIcon} alt="Cart" />
      </div>
    </nav>
  );
};

export default Navbar;