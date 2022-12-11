import React from 'react';
import styles from './Icon.module.css';

export default function Icon({ icon }) {
  return (
    <div className={styles.container}>
      <img style={{ width: '100%' }} src={icon} alt={icon} />
    </div>
  );
}
/* 




*/