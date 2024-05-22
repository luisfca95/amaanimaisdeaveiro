import './App.css';

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
    <div className="App">
      <Header/>
      <NavBar/>
      <SobreNos/>
      <Adotar/>
      <Voluntariado/>
      <Doar/>
      <Contactos/>
      <Footer/>
    </div>
  );
}

export default App;
