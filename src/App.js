import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Galerie1 from './components/Galerie1/Galerie1';
import Galerie2 from './components/Galerie2/Galerie2';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galerie-1' element={<Galerie1 />} />
        <Route path='/galerie-2' element={<Galerie2 />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
