import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import appStyles from './App.module.css';
import View from '../view/View';
import GalleryContainer from '../galleryContainer/GalleryContainer';

function App() {
  return (
    <div className={appStyles.container}>
      <Nav />
      <Banner />
      <Header />
      <View />
      <GalleryContainer />
    </div>
  );
}

export default App;
