import Gallery from '../gallery/Gallery';
import galleryStyles from './GalleryContainer.module.css';
import data from '../../data/data';

export default function GalleryContainer() {
  return (
    <div className={galleryStyles.container}>
      <div className={galleryStyles['container-second']}>
        <div className={galleryStyles['container-third']}>
          <div className={galleryStyles['container-forth']}>
            <div>
              <div className={galleryStyles['container-fifth']}>
                {Object.keys(data).map((item) => (
                  <Gallery
                    banner={data[item].banner}
                    page={data[item].page}
                    tag={data[item].tag}
                    key={data[item].page.text}
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
