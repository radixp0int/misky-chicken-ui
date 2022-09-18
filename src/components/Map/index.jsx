import React from 'react'

import styles from './styles.module.scss';

const Map = () => {
  return (
    <div className={styles.map_container}>
      <div className={styles.map_wrapper}>
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            title='restaurant-map'
            src="https://maps.google.com/maps?q=Misky%20Chiken&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Map