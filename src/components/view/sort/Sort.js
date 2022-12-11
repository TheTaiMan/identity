import React from 'react';
import styles from '../../nav/Nav.module.css';

export default function Sort() {
  return (
    <div
      className="notion-focusable"
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
        height: 28,
        borderRadius: 3,
        fontSize: 14,
        lineHeight: 1,
        minWidth: 0,
        padding: 6,
        color: 'rgba(55, 53, 47, 0.65)',
        fontWeight: 400,
      }}
    >
      Sort
    </div>
  );
}
