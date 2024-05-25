import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Adotar from './components/Adotar';
import Contactos from './components/Contactos';
import Doar from './components/Doar';
import SobreNos from './components/SobreNos';
import Voluntariado from './components/Voluntariado';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <NavBar/>

        <Routes>
          <Route path="/" element={<SobreNos/>} />
          <Route path="/SobreNos" element={<SobreNos/>} />
          <Route path="/Adotar" element={<Adotar/>} />
          <Route path="/Voluntariado" element={<Voluntariado/>} />
          <Route path="/Doar" element={<Doar/>} />    
          <Route path="/Contactos" element={<Contactos/>} />     
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
