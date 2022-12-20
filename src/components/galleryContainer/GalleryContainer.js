import React from 'react';
import Gallery from '../gallery/Gallery';
import galleryStyles from './GalleryContainer.module.css';

const data = [
  {
    banner: '',
    page: {
      text: 'Who Am I',
      icon: '/icons/userIcon.png',
    },
    tag: 'personal',
  },
];

export default function GalleryContainer() {
  return (
    <div className={galleryStyles.container}>
      <div className={galleryStyles['container-second']}>
        <div className={galleryStyles['container-third']}>
          <div className={galleryStyles['container-forth']}>
            <div>
              <div className={galleryStyles['container-fifth']}>
                {data.map((item) => (
                  <Gallery
                    banner={item.banner}
                    page={item.page}
                    tag={item.tag}
                    key={item.page.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
