import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer greeting='Bienvenidos'></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
