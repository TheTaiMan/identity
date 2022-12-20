import React from 'react';
import Title from '../title/Title';
import headerStyles from './Header.module.css';

export default function Header() {
  return (
    <div className={headerStyles.container}>
      <Title
        page={{ text: 'Who Am I', icon: '/icons/userIcon.png' }}
        element={'main'}
      />
    </div>
  );
}
