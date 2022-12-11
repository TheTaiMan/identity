import React from 'react';
import styles from './Text.module.css';

export default function Text({ text }) {
  return <span className={styles.text}>{text}</span>;
}
