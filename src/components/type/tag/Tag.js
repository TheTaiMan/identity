import React from 'react';
import tagStyles from './Tag.module.css';

const data = {
  media: {
    text: 'Media',
    color: 'rgb(68, 42, 30)',
    background: 'rgb(238, 224, 218)',
  },
  personal: {
    text: 'Personal',
    color: 'rgb(76, 35, 55)',
    background: 'rgb(245, 224, 233)',
  },
  social: {
    text: 'Social',
    color: 'rgb(64, 44, 27)',
    background: 'rgb(253, 236, 200)',
  },
  tech: {
    text: 'Tech',
    color: 'rgb(93, 23, 21)',
    background: 'rgb(255, 226, 221)',
  },
};

export default function Tag({ type }) {
  const { text, color, background } = data[type];
  return (
    <div
      className={tagStyles.container}
      style={{
        color: color,
        background: background,
      }}
    >
      <div className={tagStyles['tag-wrapper']}>
        <div style={{ display: 'block' }}>{text}</div>
      </div>
    </div>
  );
}
