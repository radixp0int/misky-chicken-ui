import { images } from '../../constants';
import { SocialMedia } from '../../components';
import styles from './styles.module.scss';

const allRightsReserved = 'All Rights Reserved.';

const Footer = ({ restaurant, date }) => {

    return (
        <footer className={`${styles.footer} section_padding`}>

            <div className={styles.footer_links}>
                <div className={styles.footer_links_contact}>
                    <h1 className={styles.footer_headtext}>Contact Us</h1>
                    <p className='opensans white'>
                        {restaurant[0]?.addressLine1}
                        <br />
                        {restaurant[0]?.addressLine2}
                    </p>
                    <br />
                    <p className='opensans white'>{restaurant[0]?.telephone}</p>
                </div>
                <div className={styles.footer_links_logo}>
                    <h1 className={styles.footer_headtext}>Misky Chicken</h1>
                    <img
                        src={images.logo}
                        style={{
                            backgroundColor: 'white',
                            marginBottom: '16px',
                            borderRadius: '10%',
                            padding: '4px',
                        }}
                        height={60}
                        alt='footer logo'
                    />
                    <p className='opensans white'>{restaurant[0]?.phrase}</p>
                    <img
                        src={images.spoonGolden}
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
                    <p className='opensans white'>Monday - Friday: {restaurant[0]?.weekdayHours}</p>
                    <br />
                    <p className='opensans white'>Saturday - Sunday: {restaurant[0]?.weekendHours}</p>
                </div>
            </div>
            <div className={styles.footer_copyright}>
                <p className='opensans golden'>{`Misky Chicken ©${date.getFullYear()}. ${allRightsReserved}`}</p>
            </div>
        </footer>
    )
}

export default Footer;