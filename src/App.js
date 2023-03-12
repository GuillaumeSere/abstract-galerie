import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Galerie1 from './components/Galerie1/Galerie1';
import Galerie2 from './components/Galerie2/Galerie2';
import Galerie3 from './components/Galerie3/Galerie3';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='https://guillaumesere.github.io/abstract-galerie' element={<Home />} />
        <Route exact path='/abstract-galerie/galerie-1' element={<Galerie1 />} />
        <Route exact path='/abstract-galerie/galerie-2' element={<Galerie2 />} />
        <Route exact path='/abstract-galerie/galerie-3' element={<Galerie3 />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
