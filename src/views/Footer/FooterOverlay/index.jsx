import React from 'react';

import styles from './styles.module.scss';

const FooterOverlay = () => (
  <div className={styles.overlay}>
    <div className={styles.overlay_black} />
    <div className={`${styles.overlay_img} app_bg`} />
  </div>
);

export default FooterOverlay;
