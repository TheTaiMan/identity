import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import schoolStyle from './school.module.css';
import Topic from '../components/topic/Topic';

export default function School() {
  return (
    <Header>
      <Topic text={'Top Subjects'} />

      <div className={schoolStyle.parent}>
        <Toggle
          text={'Math'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2f59958a-2313-4be3-ad81-2250dfe57947%2Fmath.png?id=d420a3d1-f73e-4773-adfc-d9670b809fe4&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=720&userId=&cache=v2'
          }
          className={schoolStyle.div1}
        />
        <Toggle
          text={'Physics'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb9d6086f-8a2d-49e3-8a10-24d2b43d4500%2FUntitled.png?id=22740eef-bc2e-49f8-8a4d-c560af89652a&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1400&userId=&cache=v2'
          }
          className={schoolStyle.div2}
        />
        <Toggle
          text={'Computer Science'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbb0d389c-c81c-4bd0-b898-8769c0bebac2%2Fcode.jpg?id=1224b616-bf0e-45e4-aa1f-0161ca2b83c4&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=920&userId=&cache=v2'
          }
          className={schoolStyle.div3}
        />
        <Toggle
          text={'History'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F73919f84-badc-430e-a889-93dae4878cb1%2FUntitled.png?id=99794502-d0f3-463b-95c3-f350ecb612fc&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=2000&userId=&cache=v2'
          }
          className={schoolStyle.div4}
        />
      </div>
    </Header>
  );
}
