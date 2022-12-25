import React from 'react';
import Banner from '../../components/banner/Banner';
import Nav from '../nav/Nav';
import Title from '../title/Title';

export default function Anime() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginLeft: 'auto',
        maxWidth: 970,
        borderRadius: 3,
        background: 'white',
        boxShadow:
          'rgba(15, 15, 15, 0.016) 0px 0px 0px 1px, rgba(15, 15, 15, 0.03) 0px 3px 6px, rgba(15, 15, 15, 0.06) 0px 9px 24px',
        top: 72,
        left: 72,
        right: 72,
        marginRight: 'auto',
        height: 'calc(100% - 144px)',
      }}
    >
      <Nav />
      <Banner banner="/banners/lofi.png" main={null} />
      <Title text={'Anime'} size={80} icon={'/icons/space.png'} />
    </div>
  );
}
