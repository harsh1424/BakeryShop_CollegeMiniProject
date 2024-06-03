import React, { useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header';
import Home from "./home";
import CartProvider from "./store/CartProvider";
import Footer from "./components/footer";
import About from "./components/about";
import Testimonials from "./components/testimonial";
import Recipe from "./components/recipe";
// import Products from "./components/Products";
import ShopsPage from "./components/Shop";
import Products from "./components/Product2";


function App() {
  const[cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler=() => {
    setCartIsShown(true)
  }


  const hideCarthandler = () => {
    setCartIsShown(false)
  }
  return (
    <Router>
  <CartProvider>
    <Header onShowCart={showCarthandler} />
    {cartIsShown && <Cart onClose={hideCarthandler} />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonial" element={<Testimonials />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/shops" element={<ShopsPage/>} />
    </Routes>
     
    <Footer />
  </CartProvider>
</Router>

  );
}

export default App;
