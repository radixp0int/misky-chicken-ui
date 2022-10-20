import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { content } from '../../constants';

import { SubHeading, Button } from '../../components';
import styles from './styles.module.scss';

const Gallery = () => {
  const title = 'Photos by G. Valdez';

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
        <p className={`${styles.gallery_content_intro}`}>{content.galleryContent1}</p>
        <p className={`${styles.gallery_content_intro}`}>{content.galleryContent2}</p>
        <Button name='View Menu' href='#menu' />
      </div>

      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {content.galleryImages.map(({ picture, title }, index) => (
            <div className={`${styles.gallery_images_card} flex_center`} key={index}>
              <img src={picture} layout='fill' alt='gallery' />
              <div className={styles.gallery_image_icon}>
                <p className='opensans white' Style="font-size: 1.5rem; font-weight: bold">{title}</p>
              </div>
            </div>
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