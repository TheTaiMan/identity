import React from 'react';
import galleryStyles from './Gallery.module.css';
import styles from '../../../styles/styles.module.css';
import classNames from 'classnames';

export default function Gallery() {
  return (
    <div className={galleryStyles.container}>
      <div className={galleryStyles.box}>
        <div className={classNames(galleryStyles.gallery, styles.hover)}>
          <div />
          <img
            style={{
              width: '17px',
            }}
            src={'/icons/imageIcon.png'}
            alt="yeah"
          />
          <span
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginTop: 1,
            }}
          >
            Gallery
          </span>
        </div>
      </div>
    </div>
  );
}
