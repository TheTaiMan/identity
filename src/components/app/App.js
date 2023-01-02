import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import appStyles from './App.module.css';
import View from '../view/View';
import GalleryContainer from '../galleryContainer/GalleryContainer';
import { Route, Routes } from 'react-router-dom';
import Overlay from '../overlay/Overlay';
import Anime from '../../pages/anime/Anime';
import { useLocation } from 'react-router-dom';
import Friends from '../../pages/friends/Friends';
import { useEffect } from 'react';
import Music from '../../pages/music/Music';
import School from '../../pages/school/School';
import Family from '../../pages/family/Family';
import Youtube from '../../pages/youtube/Youtube';
import Notion from '../../pages/notion/Notion';
import Astrophysics from '../../pages/astrophysics/Astrophysics';
import Programing from '../../pages/programing/Programing';
import Debating from '../../pages/debating/Debating';

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log('Location: ' + location.pathname.slice(1));
  }, [location.pathname]);
  return (
    <>
      <div
        className={appStyles.container}
        style={{ overflowY: location.pathname === '/' ? 'scroll' : 'overlay' }}
      >
        <Nav />
        <Banner main={true} banner={'/banners/lofi.png'} />
        <Header />
        <View />
        <GalleryContainer />
      </div>
      <Routes>
        <Route path="/" element={<Overlay active={false} />} />
        <Route
          path="/anime"
          element={
            <Overlay>
              <Anime />
            </Overlay>
          }
        />
        <Route
          path="/friends"
          element={
            <Overlay>
              <Friends />
            </Overlay>
          }
        />
        <Route
          path="/music"
          element={
            <Overlay>
              <Music />
            </Overlay>
          }
        />
        <Route
          path="/school"
          element={
            <Overlay>
              <School />
            </Overlay>
          }
        />
        <Route
          path="/family"
          element={
            <Overlay>
              <Family />
            </Overlay>
          }
        />
        <Route
          path="/youtube"
          element={
            <Overlay>
              <Youtube />
            </Overlay>
          }
        />
        <Route
          path="/notion"
          element={
            <Overlay>
              <Notion />
            </Overlay>
          }
        />
        <Route
          path="/astrophysics"
          element={
            <Overlay>
              <Astrophysics />
            </Overlay>
          }
        />
        <Route
          path="/programing"
          element={
            <Overlay>
              <Programing />
            </Overlay>
          }
        />
        <Route
          path="/debating"
          element={
            <Overlay>
              <Debating />
            </Overlay>
          }
        />
      </Routes>
    </>
  );
}

export default App;
