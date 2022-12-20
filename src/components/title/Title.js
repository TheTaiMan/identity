import React from 'react';
import Icon from './icon/Icon';
import classNames from 'classnames/bind';
import Text from './text/Text';
import titleStyles from './Title.module.css';
import styles from '../../styles/styles.module.css';

export default function Title({ page, element }) {
  return (
    <div
      style={{ fontSize: element === 'main' ? 32 : 14 }}
      className={classNames(
        titleStyles.container,
        element === 'nav' && styles.hover
      )}
    >
      <Icon icon={page.icon} size={page.size} element={element} />
      <Text text={page.text} element={element} />
    </div>
  );
}
