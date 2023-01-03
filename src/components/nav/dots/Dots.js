import React, { useState } from 'react';
import styles from '../../../styles/styles.module.css';
import Credits from './Credits';

export default function Dots() {
  const [click, clicked] = useState(false);
  const handleClick = (e) => {
    clicked(!click);
  };
  return (
    <>
      <div
        className={styles.hover}
        role="button"
        tabIndex={0}
        style={{
          userSelect: 'none',
          transition: 'background 20ms ease-in 0s',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 28,
          borderRadius: 3,
        }}
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 13 3"
          className="dots"
          style={{
            width: 18,
            height: 18,
            display: 'block',
            fill: 'inherit',
            flexShrink: 0,
            backfaceVisibility: 'hidden',
          }}
        >
          <g>
            <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z" />
            <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z" />
            <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z" />
          </g>
        </svg>
      </div>
      {click && <Credits />}
    </>
  );
}
