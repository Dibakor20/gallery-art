import React from 'react'
import Contact from './component/Contact';
import Footer from './component/Footer';
import Gallery from './component/Gallery'
import Navbar from './component/Navbar';
import Pricing from './component/Pricing';

function App() {
  return (
    <>
    <Navbar/>
    <Gallery/>
    <Pricing/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
