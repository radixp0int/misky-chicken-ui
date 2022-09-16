import images from '../../constants/images';
import { SubHeading, Button } from '../../components';
import styles from './styles.module.scss';

const Home = () => {
  const title = 'Chase The New flavor!'
  const header = 'The Key To Fine Dining'
  const subHeader = 'The New Dining Amazing Just Try It!'

  return (
    <div className={`${styles.header} section_padding`} id='home'>
      <div className={`app_container app_wrapper ${styles.header_padding}`}>
        <div className={styles.wrapper_info}>
          <SubHeading title={title} />
          <h1 className={styles.header_h1}>{header}</h1>
          <p className={`${styles.header_p} opensans`}>{subHeader}</p>
          <Button name='Explore Menu' path='#menu' />
        </div>

        <div className='app_wrapper_img'>
          <div className={`${styles.wrapper_img} img_padding`} >
            <img
              // width={1000}
              // height={525}
              width={450}
              height={500}
              src={images.welcome}
              alt='Restaurant Food' />
          </div>
        </div>
        
      </div>
    </div>
  )
};

export default Home;