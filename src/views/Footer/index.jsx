import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import { images } from '../../constants';
import { SocialMedia } from '../../components';
import styles from './styles.module.scss';

const address = '24640 Southpoint Dr #115, Chantilly, VA 20152';
const telephone = '(703) 828-2300';
const quote = '"The best Peruvian Chicken is here"';
const allRightsReserved = 'All Rights Reserved.';
const year = new Date().getFullYear();

const Footer = () => (

    <footer className={`${styles.footer} section_padding`}>
        {/* <FooterOverlay /> */}

        <div className={styles.footer_links}>
            <div className={styles.footer_links_contact}>
                <h1 className={styles.footer_headtext}>Contact Us</h1>
                <p className='opensans white'>{address}</p>
                <br />
                <p className='opensans white'>{telephone}</p>
            </div>
            <div className={styles.footer_links_logo}>
                <h1 className={styles.footer_headtext}>Misky Chicken</h1>
                <img
                    src={images.logo}
                    style={{ backgroundColor: 'white', marginBottom: '10px' }}
                    height={60}
                    alt='footer logo'
                />
                <p className='opensans white'>{quote}</p>
                <img
                    src={images.spoon}
                    className='spoon_img'
                    alt='spoon'
                    style={{ marginTop: 15 }}
                />
                <div className={styles.footer_links_icons}>
                    <SocialMedia />
                </div>
            </div>
            <div className={styles.footer_links_work}>
                <h1 className={styles.footer_headtext}>Hours</h1>
                <p className='opensans white'>Monday - Friday: 10AM - 10PM</p>
                <br />
                <p className='opensans white'>Saturday - Sunday: 11AM - 8PM</p>
            </div>
        </div>
        <div className={styles.footer_copyright}>
            <p className='opensans golden'>{`Misky Chicken ©${year}. ${allRightsReserved}`}</p>
        </div>
    </footer>
);

export default Footer;