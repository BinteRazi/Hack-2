import React from 'react';
import Header from './components/header';
import Hero from './components/herosection';
import Navbar from './components/navbar';
import FeaturedProducts from './components/featuresproducts';
import Categories from './components/categories';
import Products from './components/products';
import Footer from './components/footer';





const Homepage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <Categories/>
      <Products/>
      <Footer/>
      
    </div>
  )
}

export default Homepage;
