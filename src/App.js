import React from 'react';
import Navbar from './views/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
// import AboutUs from './views/AboutUs';
import Gallery from './views/Gallery';
import VideoIntro from './views/VideoIntro';
import Catering from './views/Catering';
import Footer from './views/Footer';

import './App.scss';
import './styles/globals.scss'

const App = () => (
  <div>
    <Navbar />
    <Home />
    <Contact />
    {/* <AboutUs /> */}
    {/* <Menu /> */}
    <Gallery />
    <VideoIntro />
    <Catering />
    <Footer />
  </div>
);

export default App;