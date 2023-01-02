import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import musicStyles from './music.module.css';

export default function Music() {
  return (
    <Header>
      <h3 style={{ fontWeight: '500', lineHeight: '2px' }}>Top Songs</h3>
      <div className={musicStyles.parent}>
        <Toggle
          text={'Way Less Sad by AJR'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F42c8af9b-cddc-4013-a06c-052d184b3fb0%2FUntitled.png?id=2952893c-2a12-4fb8-bb17-e5c0adfa780a&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=770&userId=&cache=v2'
          }
          className={musicStyles.div1}
        />
        <Toggle
          text={'Drunk by keshi'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6c8a41ee-5f76-4169-aa72-9c428266e98e%2FUntitled.png?id=506a7ee3-0d60-46b1-a940-d15bcdcf764e&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=580&userId=&cache=v2'
          }
          className={musicStyles.div2}
        />
        <Toggle
          text={'YEAH RIGHT by Joji'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F778e5e64-5998-4a50-8e07-4e28a4318451%2FUntitled.png?id=5b2b35a6-d4a2-45b0-b07b-ca49cd6d5f28&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1280&userId=&cache=v2'
          }
          className={musicStyles.div3}
        />
        <Toggle
          text={"Mr. Morale by Kendrick Lamar"}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa3668c09-5315-41e8-9da6-cb93ae347a9c%2FUntitled.png?id=7597586f-5371-4e1d-920b-24a29b6898f7&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1200&userId=&cache=v2'
          }
          className={musicStyles.div4}
        />
        <Toggle
          text={'Ocean Planet by SCayos and Barnes Blvd'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F799d569d-9bc6-43e8-9c5e-a150d12955c4%2FUntitled.png?id=c079ca8a-3ded-470b-9a03-179f08a59d6c&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1390&userId=&cache=v2'
          }
          className={musicStyles.div5}
        />
        <Toggle
          text={'Blue Bird by Ikimonogakari'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fea01225f-a5a3-4390-b0a8-a7010459fd1c%2FUntitled.png?id=27dcdd21-cbc8-4f6b-bec5-9c2abb24a617&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1390&userId=&cache=v2'
          }
          className={musicStyles.div6}
        />
      </div>
    </Header>
  );
}
