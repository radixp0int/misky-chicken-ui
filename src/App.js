import React, { useState, useEffect } from 'react';
import { client } from './sanity';

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
  const date = new Date();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    const query = '*[_type == "restaurant"]';

    client.fetch(query)
      .then((data) => { setRestaurant(data) })
      .catch(console.error);
  }, [setRestaurant]);

  return (
    <>
      <Navbar restaurant={restaurant} />
      <Home restaurant={restaurant} />
      <VideoIntro />
      <Restaurant restaurant={restaurant} />
      <Gallery />
      <Menu date={date} />
      <Catering />
      <Footer restaurant={restaurant} date={date} />
    </>
  )
}

export default App