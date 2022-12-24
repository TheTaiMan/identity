import React from 'react';
import overlayStyles from './overlay.module.css';

export default function Overlay({ active, children }) {
  return !active ? (
    <></>
  ) : (
    <div className={overlayStyles.container}>{children}</div>
  );
}
