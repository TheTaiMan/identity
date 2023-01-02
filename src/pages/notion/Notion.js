import React from 'react';
import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import schoolStyle from '../school/school.module.css';

export default function Notion() {
  return (
    <Header>
      <h3 style={{ fontWeight: '500' }}>Top Use Cases</h3>
      <div className={schoolStyle.parent}>
        <Toggle
          text={'School'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F936c1021-0eee-4406-8c05-f975b49af79d%2Fschool.jpg?id=ca4e2c5d-1054-4049-add2-937621cfbe59&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1600&userId=&cache=v2'
          }
          className={schoolStyle.div1}
        />
        <Toggle
          text={'Research'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F10e7bf6a-0cd2-4046-8afb-b15ab03c2488%2Flab.jpg?id=c45a8640-4572-46bc-b23c-bc25bb1b8957&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1560&userId=&cache=v2'
          }
          className={schoolStyle.div2}
        />
        <Toggle
          text={'Bookmarks/Saves'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31ea21a5-d74c-4a40-88d7-8095ae71d956%2Fsave.jpg?id=4d479873-9346-4895-bad8-eafab841694c&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1880&userId=&cache=v2'
          }
          className={schoolStyle.div3}
        />
        <Toggle
          text={'Fashion'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7ca627aa-beb8-4932-9bae-b1764dcc7f8f%2Ffashion.jpg?id=8d7a2eef-2eb6-4346-8bd3-64f838f5650e&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1830&userId=&cache=v2'
          }
          className={schoolStyle.div4}
        />
      </div>
    </Header>
  );
}
