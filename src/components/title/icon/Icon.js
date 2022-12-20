import React from 'react';
import classNames from 'classnames/bind';
import iconStyle from './Icon.module.css';
import styles from '../../../styles/styles.module.css';

export default function Icon({ icon, size = false, element }) {
  return (
    <div
      className={classNames(
        {
          [iconStyle.container]: element !== 'gallery',
          [iconStyle.gallery]: element === 'gallery',
        },
        styles.center
      )}
    >
      <img
        style={{
          width: size !== false ? size : 'inherit',
          filter:
            'invert(62%) sepia(68%) saturate(6877%) hue-rotate(337deg) brightness(87%) contrast(83%)',
        }}
        src={icon}
        alt={icon}
      />
    </div>
  );
}
