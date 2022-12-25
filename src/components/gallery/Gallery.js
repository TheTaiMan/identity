import React from 'react';
import Banner from '../banner/Banner';
import galleryStyles from './Gallery.module.css';
import Title from '../title/Title';
import Type from '../type/Type';
import { Link } from 'react-router-dom';

export default function Gallery({ banner, page, tag }) {
  return (
    <div>
      <Link to={`/${page.text.toLowerCase()}`} className={galleryStyles.body}>
        <div className={galleryStyles.container}>
          <Banner main={false} banner={banner} />
          <div className={galleryStyles.title}>
            <Title page={page} element={'gallery'} />
          </div>
          <Type tag={tag} />
        </div>
      </Link>
    </div>
  );
}
