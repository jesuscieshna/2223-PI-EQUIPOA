
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Paginas/Inicio"
import TopPelis from "./Paginas/TopPelis"
function App() {


  return (
      <BrowserRouter>
        <Routes >
          <Route path='/' Component={Inicio}></Route>
          <Route path='/TopPelis' Component={TopPelis}></Route>
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
