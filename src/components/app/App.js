import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import appStyles from './App.module.css';
import View from '../view/View';
import GalleryContainer from '../galleryContainer/GalleryContainer';
import { Route, Routes } from 'react-router-dom';
import Overlay from '../overlay/Overlay';

function App() {
  return (
    <>
      <div className={appStyles.container}>
        <Nav />
        <Banner main={true} banner={'/banners/lofi.png'} />
        <Header />
        <View />
        <GalleryContainer />
      </div>
      <Routes>
        <Route path="/" element={<Overlay active={false} />} />
        <Route path="/overlay" element={<Overlay active={true} />} />
      </Routes>
    </>
  );
}

export default App;
