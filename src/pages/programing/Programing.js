import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import schoolStyle from '../school/school.module.css';

export default function Programing() {
  return (
    <Header>
      <h3 style={{ fontWeight: '500' }}>Languages/Frameworks Learned</h3>
      <div className={schoolStyle.parent}>
        <Toggle
          text={'JavaScript'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbef323b4-1442-408a-9a9a-c0ec7e28849a%2FUntitled.png?id=7acbf34b-5bba-4e72-b534-570282f181f9&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=960&userId=&cache=v2'
          }
          className={schoolStyle.div1}
        />
        <Toggle
          text={'Java'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F728f1e0a-cd6e-4453-b37a-ff010e0dcdf4%2FUntitled.png?id=a1be260d-d436-4cf4-8179-bf9b64cf95a2&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1020&userId=&cache=v2'
          }
          className={schoolStyle.div2}
        />
        <Toggle
          text={'React'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc81ac9c9-d0a7-45fd-b90f-a92a106de78f%2FUntitled.png?id=bcdb46e1-5d9c-43cb-ba6f-f0131636559c&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=2000&userId=&cache=v2'
          }
          className={schoolStyle.div3}
        />
        <Toggle
          text={'HTML & CSS'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e431cee-0044-493d-8402-c9635efffe8d%2FUntitled.png?id=8a50abfe-9d25-457b-88f3-adecf78763e1&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1580&userId=&cache=v2'
          }
          className={schoolStyle.div4}
        />
      </div>
    </Header>
  );
}
