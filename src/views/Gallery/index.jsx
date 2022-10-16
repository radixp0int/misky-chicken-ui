import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';

import { SubHeading, Button } from '../../components';
import styles from './styles.module.scss';

const Gallery = ({ info }) => {
  const title = 'Photos by G. Valdez';
  const galleryContent1 = 'Misky Chicken opened to the public in 2017 with the help of three friends and their families. The word "Misky" means "tasty" in the ancestral Quechuan language, which dates to the time of the Incas that reigned over South America. The goal of The Misky Chicken is simple, to bring authentic Peruvian dishes, made the same way it would have been made in Peru.'
  const galleryContent2 = 'Our menu encompasses of Peruvian Style Chicken, other classic Peruvian dishes, and popular specials to fill the appetite of anyone who visit us. Hungry yet? Then make some time in your day, and visit us for a delicious meal. Stuck at work, or want to stay inside? Then let us bring The Misky Chicken your way! Ask us about deliveries and catering, as we offer both to the area.'
  const galleryImages = [
    {
      picture: images.menuItem18,
      title: 'Menu Item 1',
    },
    {
      picture: images.menuItem17,
      title: 'Menu Item 2',
    },
    {
      picture: images.menuItem4,
      title: 'Menu Item 3',
    },
    {
      picture: images.menuItem14,
      title: 'Menu Item 4',
    },
    {
      picture: images.menuItem6,
      title: 'Menu Item 5',
    },
    {
      picture: images.menuItem8,
      title: 'Menu Item 6',
    },
  ];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 360;
    } else {
      current.scrollLeft += 360;
    }
  };

  return (
    <div className={`${styles.gallery_container} flex_center`} id='gallery'>
      <div className={styles.gallery_content}>
        <SubHeading title={title} />
        <h1 className='headtext_cormorant'>Why Misky?</h1>
        <p className={`${styles.gallery_content_intro}`}>{galleryContent1}</p>
        <p className={`${styles.gallery_content_intro}`}>{galleryContent2}</p>
        <Button name='View Menu' path='#menu' />
      </div>

      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {galleryImages.map(({ picture, title }, index) => (
            // TODO: Fix the link for the menu discovery
            // <Link key={index} to={info ? `/menu/${slug}?#menu-intro` : '/#gallery'} >
              // <a>
                <div className={`${styles.gallery_images_card} flex_center`} key={index}>
                  <img src={picture} layout='fill' alt='gallery' />
                  <div className={styles.gallery_image_icon}>
                    <h3>{title}</h3>
                  </div>
                </div>
              // </a>
            // </Link>
          ))}
        </div>

        <div className={styles.gallery_images_arrows}>
          <BsArrowLeftShort className={styles.gallery_arrow_icon} onClick={() => scroll('left')} />
          <BsArrowRightShort className={styles.gallery_arrow_icon} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;