import './App.css';

import Navbar from './components/Toolbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import MainBody from './components/Layout/Body/MainBody';
import Header from './components/Layout/Header/Header';


function App() {
  return (
    <div>
      <Navbar />

      <Header />

      <MainBody />

      <Footer />

    </div>

  );
}

export default App;
