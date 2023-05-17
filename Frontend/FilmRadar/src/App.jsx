
import './App.css'
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Inicio from "./Paginas/Inicio"
import TopPelis from "./Paginas/TopPelis"
import Favoritos from "../../filmRadar/src/Paginas/Favoritos"
import Perfil from '../../filmRadar/src/Paginas/Perfil'
import InicioSesion from "../../filmRadar/src/Paginas/InicioSesion"
import  Registro  from '../../filmRadar/src/Paginas/Registro'
import PagPelis from "../../filmRadar/src/Paginas/PagPelicula"
import PagNotFound from "../../filmRadar/src/Paginas/PagNOTfound"
import PagePelisConcret from "../../filmRadar/src/Paginas/PeliContre"
import ResultSearchNot from './Paginas/ResultSearchNOt'
function App() {
  

  return (
      <BrowserRouter>
        <Routes >
          <Route path='/' Component={Inicio}></Route>
          <Route path='/TopPelis' Component={TopPelis}></Route>
          <Route path='/Favoritos' Component={Favoritos}></Route> 
          <Route path="/Perfil" Component={Perfil}></Route>
          <Route path='/InicioSesion' Component={InicioSesion}></Route>
          <Route path='/Registro' Component={Registro}></Route>
          <Route path='/PagPelis/:searh' Component={PagPelis}></Route>
          <Route path='/PeliConcret/:idPeli' Component={PagePelisConcret}></Route>
          <Route path="/ResultSearchNot" Component={ResultSearchNot}></Route>
          <Route path="*" Component={PagNotFound} ></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
