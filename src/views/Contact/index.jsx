import { Button, SocialMedia, SubHeading } from '../../components';
import { images } from '../../constants';
import styles from './styles.module.scss';

const Contacts = () => (
  <div className='app_bg app_wrapper section_padding' id='contact'>
    <div className='app_container app_wrapper'>
      <div className={`${styles.contact_info} app_wrapper_info`}>
        <SubHeading title="Contact" />
        <h1 className='headtext_cormorant'>Find Us</h1>
        <div className={`${styles.contact_title} app_wrapper_content`}>
          <p className='opensans'>Location:</p>
          <div className='app_wrapper_content'>
            <p className='opensans'>24640 SOUTHPOINT DR. SUITE 115 CHANTILLY, VA 20152</p>
          </div>
          <p className={`${styles.contact_hours} cormorant`}>Mon - Fri: 10:00AM - 10:00PM</p>
          <p className={`${styles.contact_hours} cormorant`}>Sat - Sun: 11:00AM - 8:00PM</p>
          <button type='button' className='custom_button'>Call Us</button>
        </div>
        <h1 className={`${styles.follow_title} headtext_cormorant`}>Social Media</h1>
        <div className={styles.contact_social}>
          <SocialMedia />
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

export default Contacts;