import React from 'react';
import Banner from '../banner/Banner';
import galleryStyles from './Gallery.module.css';
import Title from '../title/Title';
import Type from '../type/Type';

export default function Gallery({ type }) {
  return (
    <div>
      <a href="/" className={galleryStyles.body}>
        <div className={galleryStyles.container}>
          <Banner main={false} />
          <div className={galleryStyles.title}>
            <Title type={type} element={'gallery'} />
          </div>
          <Type />
        </div>
      </a>
    </div>
  );
}
