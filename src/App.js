import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Contacto } from './components/Contacto/Contacto';
import { PaginaError } from './components/PaginaError/PaginaError';
import { Promociones } from './components/Promociones/Promociones';
import { MiCuenta } from './components/MiCuenta/MiCuenta';




function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>} />
            <Route path='/:tipoProducto' element={<ItemListContainer />} />
            <Route path='/item/:ProductoId' element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/promociones' element={<Promociones />} />
            <Route path='/micuenta' element={<MiCuenta />} />
            <Route path='*' element={<PaginaError></PaginaError>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
