import './styles/scss/app.scss'
import Title from './components/title.js';
import Header from './components/header.js';
import Busqueda from './components/busqueda.js';
import Producto from './components/producto.js';
import {Routes, Route} from 'react-router-dom';

function App() {


  
  return (
    <div className="App">
      <Title/>
      <Header/>
      <Routes>
        <Route exact path="/" />
        <Route path='items' element={ <Busqueda/> } />
        <Route path='items/:id' element={ <Producto/> } />
      </Routes>     
    </div>
  )
}

export default App;
