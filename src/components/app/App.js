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
      </Routes>
    </>
  );
}

export default App;
