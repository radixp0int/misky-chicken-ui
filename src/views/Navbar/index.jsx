import { useState } from 'react';
import { Link } from "react-scroll";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import styles from './styles.module.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navbarItems = ['Location', 'Gallery', 'Menu', 'Catering'];

  const handleToggle = () => {
    setToggleMenu(prev => !prev);
  };

  return (
    <nav className={styles.navbar_container} id='navigation'>
      <Link to='#home' smooth={true} duration={500}>
        <div className={styles.navbar_logo}>
          {/* <img style={{ backgroundColor: 'white', marginRight: '10px' }} src={images.logo} alt='Restaurant Logo' /> */}
          <p>Misky Chicken</p>
        </div>
      </Link>

      <ul className={styles.navbar_links}>
        {navbarItems?.map((item, index) => (
          <li className={`${styles.menu_item} opensans white`} key={index}>
            <Link to={navbarItems ? `#${item?.toLowerCase()}` : '#contact'}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.navbar_login}>
        <p className={`${styles.menu_item} opensans white`}>
          <a className='cormorant white' href='tel:123-456-7890'>Call</a>
          <a className='cormorant white' href='https://orders.menuocity.com/a1b4017d-25be-4912-a0e0-b196122c2bc6'>Order </a>
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
                  <Link to={navbarItems ? `#${item.toLowerCase()}` : '#contact'}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
