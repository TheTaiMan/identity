import React from 'react';
import styles from './Text.module.css';
import classNames from 'classnames';

export default function Text({ text, element }) {
  return (
    <span
      className={classNames(styles.text, {
        [styles.gallery]: element === 'gallery',
      })}
    >
      {element === 'main' ? <b>{text}</b> : text}
    </span>
  );
}
