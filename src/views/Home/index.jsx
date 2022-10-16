import images from '../../constants/images';
import { SubHeading, Button } from '../../components';
import styles from './styles.module.scss';

const Home = ({ restaurant }) => {
  const title = 'Locally Sourced × Family Crafted'
  const header = 'PERUVIAN STYLE ROTISSERIE'
  const subHeader = '"The Misky Chicken brings authentic Peruvian food and popular specials to the Chantilly area."'

  return (
    <div className={`${styles.header} section_padding`} id='home'>
      <div className={`app_container app_wrapper ${styles.header_padding}`}>
        <div className={styles.wrapper_info}>
          <SubHeading title={title} />
          <h1 className={styles.header_h1}>{header}</h1>
          <p className={`${styles.header_p} opensans`}>{subHeader}</p>
          <Button name='Order Online' path={restaurant[0]?.orderOnlineUrl} />
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