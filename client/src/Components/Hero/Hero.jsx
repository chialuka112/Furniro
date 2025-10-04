import React from "react";
import './Hero.css';
import heroImage from "../../assets/scandinavian-interior-mockup-wall-decal-background 1.png"


const Hero = () => {
  return (
    <div className="hero">
        <img src= {heroImage} alt="futuristic"/>
        <div className="spacer">
        <div className="hero-text">
            <p className="ptx">New Arrival</p>
            <h1>Discover Our <br /> New Collection</h1>
            <p className="ptp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/>elit tellus, luctus nec ullamcorper mattis.</p>
            <div className="button">
                <h3>BUY NOW</h3> </div>
        </div>
        </div>
    </div>
  )
};

export default Hero;