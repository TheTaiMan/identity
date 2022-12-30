import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../nav/Nav';
import Title from '../title/Title';
import Banner from '../../../components/banner/Banner';
import Category from '../category/Category';
import data from '../../../data/data';
import headerStyles from './header.module.css';
import Gap from '../gap/Gap';

export default function Header({ children }) {
  const location = useLocation();
  const item = data[location.pathname.slice(1)];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginLeft: 'auto',
        maxWidth: 970,
        borderRadius: 3,
        background: 'white',
        boxShadow:
          'rgba(15, 15, 15, 0.016) 0px 0px 0px 1px, rgba(15, 15, 15, 0.03) 0px 3px 6px, rgba(15, 15, 15, 0.06) 0px 9px 24px',
        top: 72,
        left: 72,
        right: 72,
        marginRight: 'auto',
        height: 'calc(100% - 144px)',
      }}
    >
      <Nav />
      <div
        style={{
          overflowY: 'auto',
          height: '100vh',
        }}
      >
        <Banner banner={item.banner} main={null} />
        <div className={headerStyles.container}>
          <Title text={item.page.text} size={80} icon={item.page.icon} />
          <Category type={item.tag} />
        </div>
        <div className={headerStyles.content}>{children}</div>
        <Gap />
      </div>
    </div>
  );
}
