import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import appStyles from './App.module.css';
import View from '../view/View';

function App() {
  return (
    <div className={appStyles.container}>
      <Nav />
      <>
        <Banner />
        <Header />
        <View />
      </>
    </div>
  );
}

export default App;
