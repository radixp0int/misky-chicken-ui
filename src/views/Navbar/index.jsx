import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { images } from '../../constants';
import styles from './styles.module.scss';

const Navbar = ({ restaurant }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navbarItems = ['Restaurant', 'Gallery', 'Menu', 'Catering'];

  const handleToggle = () => {
    setToggleMenu(prev => !prev);
  };

  return (
    <nav className={styles.navbar_container} id='navigation'>
      <a href='#home'>
        <div className={styles.navbar_logo}>
          <img
            src={images.logoSlanted}
            style={{
              backgroundColor: 'white',
              borderRadius: '10%',
              padding: '2px 6px',
              marginRight: '8px',
            }}
            alt='footer logo'
          />
          <p>Misky Chicken</p>
        </div>
      </a>

      <ul className={styles.navbar_links}>
        {navbarItems?.map((item, index) => (
          <li className={`${styles.menu_item} opensans white`} key={index}>
            <a href={navbarItems ? `#${item?.toLowerCase()}` : '#menu'}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.navbar_login}>
        <p className={`${styles.menu_item} opensans white`}>
          <a className='cormorant white' href={`tel:${restaurant[0]?.telephone}`}>Call</a>
          <a className='cormorant white' href={restaurant[0]?.orderOnlineUrl}>Order</a>
        </p>
      </div>

      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu className={styles.navbar_hamburger} onClick={handleToggle} />
        {toggleMenu && (
          <div className={`${styles.navbar_smallscreen_overlay} slide_bottom flex_center`}>
            <MdOutlineRestaurantMenu className={styles.overlay_close} onClick={handleToggle} />
            <ul className={styles.navbar_smallscreen_links}>
              {navbarItems?.map((item, index) => (
                <li onClick={handleToggle} key={index}>
                  <a href={navbarItems ? `#${item.toLowerCase()}` : '#restaurant'}>
                    {item}
                  </a>
                </li>
              ))}
              <li onClick={handleToggle}>
                <a href={restaurant[0]?.orderOnlineUrl}>Order Now</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
