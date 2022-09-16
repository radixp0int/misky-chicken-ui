import { Button, SocialMedia, SubHeading } from '../../components';
import { images } from '../../constants';
import styles from './styles.module.scss';

const About = () => (
  <div className='app_bg app_wrapper section_padding' id='contact'>
    <div className='app_container app_wrapper'>
      <div className={`${styles.contact_info} app_wrapper_info`}>
        <SubHeading title="Contact" color="white" />
        <h1 className='headtext_cormorant golden'>Find Us</h1>
        <div className={`${styles.contact_title} app_wrapper_content`}>
          <p className='opensans white'>Location:</p>
          <br />
          <div className='app_wrapper_content'>
            <p className={`${styles.contact_location} cormorant white`}>24640 Southpoint Dr. Suite 115 Chantilly, VA 20152</p>
          </div>
          <p className='opensans white'>Hours:</p>
          <div className='app_wrapper_content'>
          <p className={`${styles.contact_hours} cormorant white`}>Mon - Fri: 10:00AM - 10:00PM</p>
          <p className={`${styles.contact_hours} cormorant white`}>Sat - Sun: 11:00AM - 8:00PM</p>
          </div>
          <button type='button' className='custom_button white'>Call Us</button>
        </div>
        <h1 className={`${styles.follow_title} headtext_cormorant golden`}>Social Media
        </h1>
        <div className={styles.contact_social}>
          <SocialMedia Color='white' />
        </div>
      </div>
      <div className='app_wrapper_img'>
        <div className={`${styles.wrapper_img} img_padding`} >
          <img
            src={images.findus2}
            alt='find us'
            width={500}
            height={550}
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;