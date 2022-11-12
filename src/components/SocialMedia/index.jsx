import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import styles from './styles.module.scss';

const SocialMedia = () => {

  return (
    <div className={styles.social_links_icons}>
      <FiFacebook size={30} className={styles.social_icon} />
      <FiTwitter size={30} className={styles.social_icon} />
      <FiInstagram size={30} className={styles.social_icon} />
    </div>
  )
}

export default SocialMedia;