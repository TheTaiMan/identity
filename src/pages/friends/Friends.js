import Header from '../components/header/Header';
import Toggle from '../components/toggle/Toggle';
import animeStyles from '../anime/anime.module.css';
import Topic from '../components/topic/Topic';

export default function Friends() {
  return (
    <Header>
      <Topic text={'Top Values'} />
      <div className={animeStyles.parent}>
        <Toggle
          text={'Caring'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F51624da0-05a3-451e-aa08-f4b34f1a6240%2FToru_Ishikawa.jpg?id=d13e650d-332e-42f5-8617-d5fea4840640&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1260&userId=&cache=v2'
          }
          className={animeStyles.div1}
        />
        <Toggle
          text={'Honesty'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc911bf22-bead-4611-81c2-8a3ff46e09f5%2FUntitled.png?id=267ea620-2bd3-49cc-ba76-176cb8eafe84&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=800&userId=&cache=v2'
          }
          className={animeStyles.div2}
        />
        <Toggle
          text={'Listening'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F946686f2-3691-4d86-8818-5d0411abe434%2FUntitled.png?id=0a78fae6-5275-4cce-8c6e-f04b02e2ecb8&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1080&userId=&cache=v2'
          }
          className={animeStyles.div3}
        />
        <Toggle
          text={'Feedback'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9bcb8535-b58f-454c-ad44-6b68672cbe1b%2FUntitled.png?id=208a29d1-6254-48d7-acf4-10727c656cca&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=2000&userId=&cache=v2'
          }
          className={animeStyles.div4}
        />
        <Toggle
          text={'Trust'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fce81a137-f3dc-4322-8280-12381c8368cf%2Fsakura.png?id=9a6e5d75-94ef-4acc-bf31-b78682d84ff8&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1280&userId=&cache=v2'
          }
          className={animeStyles.div5}
        />
        <Toggle
          text={'Low Maintenance'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5d467d82-981b-473b-970b-313ee2c26fe4%2FUntitled.png?id=e227e627-6466-436a-8425-f95571fae0b2&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=2000&userId=&cache=v2'
          }
          className={animeStyles.div6}
        />
      </div>
    </Header>
  );
}
