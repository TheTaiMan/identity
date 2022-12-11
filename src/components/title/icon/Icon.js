import React from 'react';
import classNames from 'classnames/bind';
import iconStyle from './Icon.module.css';
import styles from '../../../styles/center.module.css';

export default function Icon({ icon }) {
  return (
    <div className={classNames(iconStyle.container, styles.center)}>
      <img
        style={{
          width: 'inherit',
          filter:
            'invert(62%) sepia(68%) saturate(6877%) hue-rotate(337deg) brightness(87%) contrast(83%)',
        }}
        src={icon}
        alt={icon}
      />
    </div>
  );
}
/* 




*/
