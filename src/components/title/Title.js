import React from 'react';
import Icon from './icon/Icon';
import classNames from 'classnames/bind';
import Text from './text/Text';
import titleStyles from './Title.module.css';
import navStyles from '../nav/Nav.module.css';

const data = {
  whoAmI: ['/icons/userIcon.png', 'Who Am I?'],
};

export default function Title({ type, size }) {
  return (
    <div
      style={{ fontSize: `${size}px` }}
      className={classNames(titleStyles.container, navStyles.hover)}
    >
      <Icon icon={data[type][0]} />
      <Text text={data[type][1]} />
    </div>
  );
}
