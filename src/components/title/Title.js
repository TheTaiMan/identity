import React from 'react';
import Icon from './icon/Icon';
import classNames from 'classnames/bind';
import Text from './text/Text';
import titleStyles from './Title.module.css';
import styles from '../../styles/styles.module.css';

const data = {
  whoAmI: ['/icons/userIcon.png', 'Who Am I?'],
};

export default function Title({ type, element }) {
  return (
    <div
      style={{ fontSize: element === 'main' ? 32 : 14 }}
      className={classNames(
        titleStyles.container,
        element === 'nav' && styles.hover
      )}
    >
      <Icon icon={data[type][0]} element={element} />
      <Text text={data[type][1]} element={element} />
    </div>
  );
}
