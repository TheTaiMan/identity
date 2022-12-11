import React from 'react';
import styles from './Text.module.css';

export default function Text({ text, main }) {
  return <span className={styles.text}>{main ? <b>{text}</b> : text}</span>;
}
