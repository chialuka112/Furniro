
import React, { useState } from 'react';
import Index from './pages/index';
import Products from "./Components/Products/Product";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import SellProduct from './pages/Sellproduct/Sellproduct';


const App = () => {
   
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Index />}></Route>
         <Route path="/products" element={<Products />} />
         <Route path='/Sellproduct' element={<SellProduct />} />
        


       </Routes>
       </BrowserRouter> 

     {/** <Navbar  cartCount={cartCount}/>
      <Hero />
      <Sections />
      <Products onAddToCart={addToCart}/>
      <Services />
      <Footer /> **/}
    </div>
  )
};

export default App;