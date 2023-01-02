import React from 'react';
import Header from '../components/header/Header';
import animeStyles from '../anime/anime.module.css';
import Toggle from '../components/toggle/Toggle';
import Topic from '../components/topic/Topic';

export default function Youtube() {
  return (
    <Header>
      <Topic text={'Top YouTubers'} />

      <div className={animeStyles.parent}>
        <Toggle
          text={'Star Talk'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F058b7877-3d18-48c2-92dc-6b8dfaf94b6e%2FUntitled.png?id=e5ac31a9-d2ac-431a-ab2a-b07cc803650d&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1280&userId=&cache=v2'
          }
          className={animeStyles.div1}
        />
        <Toggle
          text={'Trash Taste'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F795c1362-6650-4f40-81c5-0b4e58caa715%2FUntitled.png?id=4a5c970f-53c3-4eba-a484-4b182f811e80&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=630&userId=&cache=v2'
          }
          className={animeStyles.div2}
        />
        <Toggle
          text={'Johnny Harris'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa9952a21-5a1b-483f-9bd8-9098548a3b2b%2FUntitled.png?id=ded7a89e-c589-4837-a91f-edf55d36759e&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1800&userId=&cache=v2'
          }
          className={animeStyles.div3}
        />
        <Toggle
          text={'Vsauce'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba14e310-5836-423c-a8af-a526b918c159%2FUntitled.png?id=4db3bba5-2b9d-40c8-aa87-40068f7e7229&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1800&userId=&cache=v2'
          }
          className={animeStyles.div4}
        />
        <Toggle
          text={'videogamedunkey'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F820a74ef-436e-4b4a-a9fb-90852c967f34%2FUntitled.png?id=6388cef8-ae87-4282-8512-86f64d964373&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=630&userId=&cache=v2'
          }
          className={animeStyles.div5}
        />
        <Toggle
          text={'Gigguk'}
          img={
            'https://detailed-scarer-fbc.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8987f340-56bc-4745-8bee-17e980f0af7d%2FUntitled.png?id=3c5fbf39-cdca-41fa-b0be-6fd407a974ce&table=block&spaceId=09324e47-8345-4b77-94c7-ec0c3e23ddf2&width=1800&userId=&cache=v2'
          }
          className={animeStyles.div6}
        />
      </div>
    </Header>
  );
}
