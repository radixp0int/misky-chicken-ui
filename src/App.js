import React from 'react';
import Navbar from './views/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import Menu from './views/Menu';
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
    <VideoIntro />
    <Contact />
    <Gallery />
    <Menu />
    <Catering />
    <Footer />
  </div>
);

export default App;