import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
    <div className="footer-container">
      <div className="footer-content">
        
        {/* Main footer sections */}
        <div className="footer-grid">
          
          {/* Company info section */}
          <div className="footer-section">
            <h2 className="footer-brand">Funiro.</h2>
            <p className="footer-address">
              400 University Drive Suite 200 Coral<br />
              Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Navigation links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Links</h3>
            <ul className="footer-list">
              <li><a href="/" className="footer-link">Home</a></li>
              <Link to="/Products">
              <li className="footer-link">Shop</li></Link>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Help links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Help</h3>
            <ul className="footer-list">
              <li><a href="/payment-options" className="footer-link">Payment Options</a></li>
              <li><a href="/returns" className="footer-link">Returns</a></li>
              <li><a href="/privacy-policies" className="footer-link">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="footer-section">
            <h3 className="footer-section-title">Newsletter</h3>
            <div className="footer-newsletter-container">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="footer-newsletter-input"
              />
              <button className="footer-subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
          
        </div>

        {/* Copyright text */}
        <div className="footer-copyright">
          <p>2023 furino. All rights reserved</p>
        </div>
        
      </div>
      </div>
    )
}

export default Footer