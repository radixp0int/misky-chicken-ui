import { content, images } from '../../constants';
import { SubHeading, Button } from '../../components';
import styles from './styles.module.scss';

const Home = ({ restaurant }) => {

  return (
    <div className={`${styles.header} section_padding`} id='home'>
      <div className={`app_container app_wrapper ${styles.header_padding}`}>
        <div className={styles.wrapper_info}>
          <SubHeading title={content.title} />
          <h1 className={styles.header_h1}>{content.header}</h1>
          <p className={`${styles.header_p} opensans`}>{content.subHeader}</p>
          <Button name='Order Online' href={restaurant[0]?.orderOnlineUrl} />
        </div>

        <div className={`${styles.wrapper_img}`} >
          <img
            src={images.logo}
            alt='Restaurant Food' />
        </div>

      </div>
    </div>
  )
};

export default Home;