import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import schoolStyle from '../school/school.module.css';

export default function Debating() {
  return (
    <Header>
      <h3 style={{ fontWeight: '500' }}>Favorite Topics</h3>
      <div className={schoolStyle.parent}>
        <Toggle
          text={'Science'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F13fcdc22-af40-46d1-8288-bd223b2f22a2%2Fgalaxy.jpg?id=11c1eaae-09e3-455d-b3df-f24079237eae&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1980&userId=&cache=v2'
          }
          className={schoolStyle.div1}
        />
        <Toggle
          text={'Definitions'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4508bd6a-be29-4f60-8415-b6ff9a3c502f%2Fdefine.png?id=af377f07-7f25-4266-b729-0d340ec02d19&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=770&userId=&cache=v2'
          }
          className={schoolStyle.div2}
        />
        <Toggle
          text={'Social Injustice'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1adbf0e-b005-428d-8226-f45457a0a2e6%2Fsocial.png?id=6e952325-e409-4b2f-986d-4f1a7435eef0&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1200&userId=&cache=v2'
          }
          className={schoolStyle.div3}
        />
        <Toggle
          text={'Anime'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1fa8e455-ab83-437c-b91f-d47c8a4eed87%2Fmaxresdefault.jpg?id=703d4ce1-7272-4d59-a5bd-d77c1cd358be&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1440&userId=&cache=v2'
          }
          className={schoolStyle.div4}
        />
      </div>
    </Header>
  );
}
