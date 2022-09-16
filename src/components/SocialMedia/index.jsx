import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import styles from './styles.module.scss';

const SocialMedia = ({ Color = '' }) => {
  return (
    <div className={styles.social_links_icons}>
      <FiFacebook size={30} style={{ color: `${Color}` }} className={styles.social_icon} />
      <FiTwitter size={30} style={{ color: `${Color}` }} className={styles.social_icon} />
      <FiInstagram size={30} className={`${styles.social_icon} ${Color}`} />
    </div>
  )
}

export default SocialMedia;