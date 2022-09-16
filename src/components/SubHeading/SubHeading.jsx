import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title, color='' }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className={`cormorant ${color}`}>{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon_img" />
  </div>
);

export default SubHeading;
