import React from 'react';
import Nav from '../nav/Nav';

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
    </div>
  );
}
