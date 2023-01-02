import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import animeStyles from './anime.module.css';

export default function Anime() {
  return (
    <Header>
      <h3 style={{ fontWeight: '500', lineHeight: '2px' }}>Top Anime</h3>
      <div className={animeStyles.parent}>
        <Toggle
          text={'Attack On Titan'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0f76d1f2-29be-46fa-8205-074942500518%2FUntitled.png?id=049ef782-fc59-4181-9ea3-30a467ea355e&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=580&userId=&cache=v2'
          }
          className={animeStyles.div1}
        />
        <Toggle
          text={'Naruto'}
          img={
            'https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-group-i129089.jpg'
          }
          className={animeStyles.div2}
        />
        <Toggle
          text={'Death Note'}
          img={
            'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'
          }
          className={animeStyles.div3}
        />
        <Toggle
          text={"Monthly Girls' Nozaki-kun"}
          img={
            'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3002/30020247_so.jpg'
          }
          className={animeStyles.div4}
        />
        <Toggle
          text={'Horimiya'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F02cb358d-0157-4365-bc31-c939b83a033b%2FUntitled.png?id=cb4d0e2a-d4d9-4303-91d2-d594db1e0aab&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1640&userId=&cache=v2'
          }
          className={animeStyles.div5}
        />
        <Toggle
          text={'Love is War'}
          img={
            'https://m.media-amazon.com/images/M/MV5BYjEwNjEwYzgtZGZkMy00MTBjLTg2MmYtNDk0MzY2NmU0MmNiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg'
          }
          className={animeStyles.div6}
        />
      </div>
    </Header>
  );
}

/* 

.parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
.div5 { grid-area: 3 / 1 / 4 / 2; }
.div6 { grid-area: 3 / 2 / 4 / 3; }

*/
