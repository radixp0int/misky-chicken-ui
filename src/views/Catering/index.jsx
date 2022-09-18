import React from 'react';

import { SubHeading } from '../../components';
import styles from './styles.module.scss';

const caterMessage = ''
const Catering = () => (
  <div className='app_bg white app_wrapper section_padding' id='catering'>
    <div className={styles.catering}>
      <div className={styles.catering_heading}>
        <SubHeading title='Catering' />
        <h1 className='headtext_cormorant'>Planning a large gathering and need help?</h1>
        <br/>
        <p className={`${styles.catering_text} opensans`}>The Misky Chicken can help! Have us cater your next event, whether large or small, we’ll customize a menu to fit your budget. Be sure to fill us in with all of the details of your event! We believe on making each event special,</p>
      </div>
      <div className={`${styles.catering_input} flex_center`}>
        <input
          type='text'
          placeholder='Enter your Name.'
          name=""
        />
        <input
          // className='app__contact-email-input'
          type="text"
          placeholder='Enter Phone Number'
          name=""
        />
        <textarea
          className={`${styles.catering_textarea} flex_center`}
          name="message"
          rows="10"
          placeholder='Enter Catering Needs'>
        </textarea>
        <br />
        <button
          type="submit"
          value="Send"
          className='custom_button'>
          Send Email
        </button>
      </div>
    </div>
  </div>
);

export default Catering;
