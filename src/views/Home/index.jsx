import images from '../../constants/images';
import { SubHeading, Button } from '../../components';
import { data } from '../../constants';
import styles from './styles.module.scss';

const Home = () => {
  const title = 'Locally Sourced × Family Crafted'
  const header = 'PERUVIAN STYLE ROTISSERIE'
  const subHeader2 = 'The New Dining Amazing Just Try It!'
  const subHeader = '"The Misky Chicken brings authentic Peruvian food and popular specials to the Chantilly area."'

  return (
    <div className={`${styles.header} section_padding`} id='home'>
      <div className={`app_container app_wrapper ${styles.header_padding}`}>
        <div className={styles.wrapper_info}>
          <SubHeading title={title} />
          <h1 className={styles.header_h1}>{header}</h1>
          <p className={`${styles.header_p} opensans`}>{subHeader}</p>
          <Button name='Order Online' path={data.orderOnline} />
        </div>

        {/* {/* <div className='app_wrapper_img'> */}
          <div className={`${styles.wrapper_img}`} >
            <img       
              src={images.logo}
              alt='Restaurant Food' />
          {/* </div> */}
        </div>
        
      </div>
    </div>
  )
};

export default Home;