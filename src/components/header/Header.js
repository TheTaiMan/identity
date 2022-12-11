import React from 'react';
import Title from '../title/Title';
import headerStyles from './Header.module.css';

export default function Header() {
  return (
    <div className={headerStyles.container}>
      <Title type={'whoAmI'} main={true} />
    </div>
  );
}
