import React from 'react';
import Gallery from '../gallery/Gallery';
import galleryStyles from './GalleryContainer.module.css';

export default function GalleryContainer() {
  return (
    <div className={galleryStyles.container}>
      <div className={galleryStyles['container-second']}>
        <div className={galleryStyles['container-third']}>
          <div className={galleryStyles['container-forth']}>
            <div>
              <div className={galleryStyles['container-fifth']}>
                {/* Gallery STuff here */}
                <Gallery />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
