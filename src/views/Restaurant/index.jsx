import { Button, Map, SocialMedia, SubHeading } from '../../components';
import styles from './styles.module.scss';

const About = ({ restaurant }) => (
  <div className='app_bg app_wrapper section_padding map' id='restaurant'>
    <div className='app_container app_wrapper'>

      <div className={`${styles.contact_info} app_wrapper_info`}>
        <SubHeading title="Restaurant" color="white" />
        <h1 className='headtext_cormorant golden'>Find Us</h1>
        <div className={`${styles.contact_title} app_wrapper_content`}>
          <p className='opensans white'>Location:</p>
          <br />
          <div className='app_wrapper_content'>
            <p className={`${styles.contact_location} cormorant white`}>
              {restaurant[0]?.addressLine1} <br /> {restaurant[0]?.addressLine2}
            </p>
          </div>
          <p className='opensans white'>Hours:</p>
          <div className='app_wrapper_content'>
            <p className={`${styles.contact_hours} cormorant white`}>Mon - Fri: {restaurant[0]?.weekdayHours}</p>
            <p className={`${styles.contact_hours} cormorant white`}>Sat - Sun: {restaurant[0]?.weekendHours}</p>
          </div>
          <br />
          <Button name='Call Us' href={`tel:${restaurant[0]?.telephone}`} color='white' />
        </div>
        <h1 className={`${styles.follow_title} headtext_cormorant golden`}>Social Media
        </h1>
        <div className={styles.contact_social}>
          <SocialMedia Color='white' />
        </div>
      </div>

      <div>
        <Map />
      </div>

    </div>
  </div>
);

export default About;