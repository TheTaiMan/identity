import React from 'react';
import titleStyles from './title.module.css';

export default function Title({ text, size, icon }) {
  return (
    <div className={titleStyles.container}>
      <div className={titleStyles.icon}>
        <img
          style={{
            width: size,
            filter:
              'invert(62%) sepia(68%) saturate(6877%) hue-rotate(337deg) brightness(87%) contrast(83%)',
          }}
          src={icon}
          alt="banner"
        />
      </div>
      <span className={titleStyles.text}>
        <b>{text}</b>
      </span>
    </div>
  );
}
