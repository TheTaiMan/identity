import React from 'react';
import Icon from './icon/Icon';
import Text from './text/Text';
import styles from './Title.module.css';

const data = {
  whoAmI: ['/icons/userIcon.png', 'Who Am I?'],
};

export default function Title({ type, size }) {
  return (
    <div style={{ fontSize: `${size}px` }} className={styles.container}>
      <Icon icon={data[type][0]} />
      <Text text={data[type][1]} />
    </div>
  );
}
