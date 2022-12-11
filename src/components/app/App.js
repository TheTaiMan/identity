import Banner from '../banner/Banner';
import Nav from '../nav/Nav';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.container}>
      <Nav />
      <Banner />
    </div>
  );
}

export default App;
