import React from 'react'
import Header from '../Header';
import Hero from '../Hero';
import About from '../About';
import Features from '../Features';
import Services from '../Services';
import CTA from '../CTA';
import Gallery from '../Gallery';
import Contact  from '../Contact';
import Footer from '../Footer';
import MachineryListings from '../MachineryListings';
import Project from '../Project';


function Landingpage() {
  return (
 <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Services />
      <MachineryListings />
      <Project/>
      <CTA />
      <Gallery />
      <Contact />
      <Footer />   
    </div>
  );  
}

export default Landingpage