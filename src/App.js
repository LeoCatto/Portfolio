import React, { useState, useEffect } from 'react';
import Cover from './Components/Cover/Cover.js'
import './App.css'
import NavBar from './Components/NavBar/NavBar.js';
import About from './Components/About/About.js';
import Slider from './Components/Slider/Slider.js';
import Info from './Components/Info/Info.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);


  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
