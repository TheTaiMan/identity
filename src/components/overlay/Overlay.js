import React from 'react';
import overlayStyles from './overlay.module.css';

export default function Overlay({ active = true, children }) {
  // Create a click event where if it clicks the overlay it will navigate back to /
  return !active ? (
    <></>
  ) : (
    <div className={overlayStyles.container}>{children}</div>
  );
}
