import React, {useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import Sections from "../Components/Sections/Sections";
import Services from "../Components/Services/Services";

const Index = () => {

    const [cartCount, setCartCount] = useState(0); 
     const addToCart = () => {
    setCartCount(cartCount + 1);
  };
    return (
    <div className="min-h-screen flex flex-col">
      <Navbar  cartCount={cartCount}/>
      <main className="flex-1">
        <Hero />
      </main>
        <Sections />
        <Services />
      <Footer />
    </div>
    )
}
export default Index