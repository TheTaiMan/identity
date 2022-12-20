import React from 'react';
import Title from '../title/Title';
import Dots from './dots/Dots';
import Duplicate from './duplicate/Duplicate';
import Gap from './gap/Gap';
import Notion from './notion/Notion';
import Search from './search/Search';
import navStyles from './Nav.module.css';

export default function Nav() {
  return (
    <header className={navStyles.container}>
      <Title
        page={{ text: 'Who Am I', icon: '/icons/userIcon.png' }}
        element={'nav'}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflow: 'hidden',
          height: 45,
          paddingLeft: 12,
          paddingRight: 10,
        }}
      >
        <div style={{ flexGrow: 1, flexShrink: 1 }} />
        <Search />
        <Duplicate />
        <Dots />
        <Gap />
        <Notion />
      </div>
    </header>
  );
}
