import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import animeStyles from '../anime/anime.module.css';

export default function Astrophysics() {
  return (
    <Header>
      <h2 style={{ fontWeight: '500', lineHeight: '2px' }}>Top Anime</h2>
      <div className={animeStyles.parent}>
        <Toggle
          text={'Black Holes'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2681e034-6ac7-446a-9c04-df1e09e47c31%2FUntitled.png?id=7fdb2a99-88c1-4f22-8f41-195e6900f6c8&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1600&userId=&cache=v2'
          }
          className={animeStyles.div1}
        />
        <Toggle
          text={'Stars'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F96e55c80-9ee0-4fad-b976-ca785d01dba0%2FUntitled.png?id=73891172-e9dc-4d05-be41-ce26f1291ca4&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1280&userId=&cache=v2'
          }
          className={animeStyles.div2}
        />
        <Toggle
          text={'Cosmic Microwave Background'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F959ac27d-d71f-4c21-92c6-4ee1ce60cfb3%2FUntitled.png?id=878c1650-28d9-4e88-acf9-acf4cebdfa37&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1600&userId=&cache=v2'
          }
          className={animeStyles.div3}
        />
        <Toggle
          text={'James Webb Space Telescope'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F167eb9fc-5700-4891-a44f-106d58c39350%2FUntitled.png?id=d4da9425-e0fb-40ee-90af-e1de6de058e1&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=580&userId=&cache=v2'
          }
          className={animeStyles.div4}
        />
        <Toggle
          text={'Gravitational Waves'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F323e10ac-1f09-4d4c-a41e-aeee997a22ea%2Fwaves.jpg?id=ec88dc20-7e7e-497e-a4ad-120e066d4262&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1800&userId=&cache=v2'
          }
          className={animeStyles.div5}
        />
        <Toggle
          text={'Exoplanets'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0ff27d8b-7307-49d0-b90f-265809395ce0%2Fexo.jpg?id=9c1ebe3f-619d-4cc9-9d18-16178485601d&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1600&userId=&cache=v2'
          }
          className={animeStyles.div6}
        />
      </div>
    </Header>
  );
}
