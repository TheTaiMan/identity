import React from 'react';
import Gallery from '../gallery/Gallery';
import galleryStyles from './GalleryContainer.module.css';

const data = [
  {
    banner: '/banners/anime.jpg',
    page: {
      text: 'Anime',
      icon: '/icons/sowrd.png',
      size: 17,
    },
    tag: 'media',
  },
  {
    banner: '/banners/friends.jpg',
    page: {
      text: 'Friends',
      icon: '/icons/friends.png',
      size: 17,
    },
    tag: 'social',
  },
  {
    banner: '/banners/ajr.jpg',
    page: {
      text: 'Music',
      icon: '/icons/music.png',
      size: 17,
    },
    tag: 'media',
  },
  {
    banner: '/banners/school.jpg',
    page: {
      text: 'School',
      icon: '/icons/school.png',
      size: 17,
    },
    tag: 'social',
  },
  {
    banner: '/banners/canada.png',
    page: {
      text: 'Canada',
      icon: '/icons/canada.png',
      size: 17,
    },
    tag: 'personal',
  },
  {
    banner: '/banners/youtube.jpg',
    page: {
      text: 'YouTube',
      icon: '/icons/youtube.png',
      size: 17,
    },
    tag: 'media',
  },
  {
    banner: '/banners/notion.png',
    page: {
      text: 'Notion',
      icon: '/icons/notion.png',
      size: 17,
    },
    tag: 'media',
  },
  {
    banner: '/banners/space.png',
    page: {
      text: 'Astrophysics',
      icon: '/icons/space.png',
      size: 17,
    },
    tag: 'personal',
  },
  {
    banner: '/banners/coding.png',
    page: {
      text: 'Programing',
      icon: '/icons/coding.png',
      size: 17,
    },
    tag: 'personal',
  },
  {
    banner: '/banners/debating.png',
    page: {
      text: 'Debating',
      icon: '/icons/debating.png',
      size: 17,
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
