import React from 'react';
import Filter from './filter/Filter';
import Gallery from './gallery/Gallery';
import Search from './search/Search';
import Sort from './sort/Sort';
import viewStyles from './View.module.css';

export default function View() {
  return (
    <div className={viewStyles.container}>
      <div className={viewStyles['container-second']}>
        <div className={viewStyles['container-third']}>
          <Gallery />
          <div className={viewStyles['right-end']}>
            <Filter />
            <Sort />
            <Search />
          </div>
        </div>
      </div>
      <div style={{ position: 'sticky', left: 96, width: '100%' }} />
    </div>
  );
}
