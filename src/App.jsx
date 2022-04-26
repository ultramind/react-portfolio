import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Service from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonials/Testimonials'


function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Service/>
      <Portfolio/>
      <Service/>
      <Contact/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App