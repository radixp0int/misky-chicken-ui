import React from 'react';
import Navbar from './views/Navbar';
import Home from './views/Home';
// import AboutUs from './views/AboutUs';
import Gallery from './views/Gallery';
import VideoIntro from './views/VideoIntro';
import Footer from './views/Footer';

import './App.scss';
import './styles/globals.scss'

const App = () => (
  <div>
    <Navbar />
    <Home />
    <VideoIntro />
    {/* <AboutUs /> */}
    {/* <Menu /> */}
    <Gallery />
    <Footer />
  </div>
);

export default App;