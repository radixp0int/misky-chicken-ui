import React, { useState, useEffect } from 'react';
import { urlFor, client } from './sanity';

import {
  Navbar,
  Home,
  Restaurant,
  Menu,
  Gallery,
  VideoIntro,
  Catering,
  Footer
} from './views/index';

import './styles/globals.scss'

const App = () => {

  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    const query = '*[_type == "restaurant"]';
    client.fetch(query)
      .then((data) => { setRestaurant(data) })
  }, [setRestaurant]);

  return (
    <>
      <Navbar restaurant={restaurant} />
      <Home restaurant={restaurant} />
      <VideoIntro />
      <Restaurant />
      <Gallery />
      <Menu />
      <Catering />
      <Footer restaurant={restaurant} />
    </>
  )
}

export default App