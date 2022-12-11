import React from 'react';
import navStyles from '../Nav.module.css';

export default function Duplicate() {
  return (
    <div
      className={navStyles.hover}
      role="button"
      tabIndex={0}
      style={{
        userSelect: 'none',
        transition: 'background 20ms ease-in 0s',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        height: 28,
        borderRadius: 4,
        fontSize: 14,
        lineHeight: '1.2',
        minWidth: 0,
        paddingLeft: 8,
        paddingRight: 8,
        color: 'rgb(55, 53, 47)',
      }}
    >
      Duplicate
    </div>
  );
}
