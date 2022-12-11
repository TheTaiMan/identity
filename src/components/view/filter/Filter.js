import React from 'react';
import styles from '../../../styles/styles.module.css';

export default function Filter() {
  return (
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
        flexShrink: 0,
        whiteSpace: 'nowrap',
        height: 14,
        borderRadius: 3,
        fontSize: 14,
        lineHeight: 1,
        minWidth: 0,
        padding: 6,
        color: 'rgba(55, 53, 47, 0.65)',
        fontWeight: 400,
      }}
    >
      Filter
    </div>
  );
}
