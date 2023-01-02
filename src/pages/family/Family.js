import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import schoolStyle from '../school/school.module.css';
import Topic from '../components/topic/Topic';

export default function Family() {
  return (
    <Header>
      <Topic text={'Top Values'} />
      <div className={schoolStyle.parent}>
        <Toggle
          text={'Home'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F087626b9-d6e2-4a15-81f3-b016549f55b1%2Fhome.jpg?id=55df9c67-87ae-4bb7-bcb4-2585c5ff40ff&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1320&userId=&cache=v2'
          }
          className={schoolStyle.div1}
        />
        <Toggle
          text={'Support'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa7bafa36-b42c-4e84-844d-def912adc8ff%2Ffamily.jpg?id=5ca7d213-f486-4b80-8bcc-5a314703bf27&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=900&userId=&cache=v2'
          }
          className={schoolStyle.div2}
        />
        <Toggle
          text={'Safe'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F44c8e404-52a8-4fbf-b4f9-517ba7a920c3%2Fsafe.png?id=80684362-168d-444a-b617-f846d06c43fa&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=2000&userId=&cache=v2'
          }
          className={schoolStyle.div3}
        />
        <Toggle
          text={'Love'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F44773943-4c3e-45cd-903a-56540a96e8e5%2FKakushigoto.jpg?id=2cb172e8-0c9e-437e-a391-ca22ee1c7e38&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=2000&userId=&cache=v2'
          }
          className={schoolStyle.div4}
        />
      </div>
    </Header>
  );
}
