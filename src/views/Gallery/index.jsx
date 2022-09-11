import { useRef } from 'react';
import { Link } from 'react-scroll'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';

import { SubHeading, Button } from '../../components';
import styles from './styles.module.scss';

const Gallery = ({ info }) => {
  const galleryImages = [
    {
      picture: images.gallery01,
      title: 'Menu Item 1',
    },
    {
      picture: images.gallery02,
      title: 'Menu Item 2',
    },
    {
      picture: images.gallery03,
      title: 'Menu Item 3',
    },
    {
      picture: images.gallery04,
      title: 'Menu Item 4',
    },
  ];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={`${styles.gallery_container} flex_center`} id='gallery'>
      <div className={styles.gallery_content}>
        <SubHeading title={info?.[0]?.metadata?.section} />
        <h1 className='headtext_cormorant'>Photo Gallery</h1>
        <p className={`${styles.gallery_content_intro} opensans`}>Lorem</p>
        <Button name='View More' path='#menu' />
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
                    <BsInstagram />
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