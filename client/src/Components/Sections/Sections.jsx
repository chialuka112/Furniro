import React from "react";
import './Sections.css';
import box1 from "../../assets/Mask Group.png"
import box2 from "../../assets/image 100.png"
import box3 from "../../assets/Mask Group (1).png"
const Sections = () => {
    return (
        <div className="container">
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="boxes">
                <div className="box1">
                    <img src= {box1} alt="box1"/>
                    <h3>Dining</h3>
                </div>
                <div className="box2"> 
                    <img src= {box2} alt="box2"/>
                    <h3>Living Room</h3>
                     </div>
                <div className="box3"> 
                    <img src= {box3} alt="box3"/>
                    <h3>Bedroom</h3>
                     </div>
            </div>
            </div>
    )
};

export default Sections;