

import './App.css'
import Menu from './Componentes/Menu'
import MenuBot from './Componentes/MenuBot'
import Video from './assets/videos/FIMRadarVideo.mp4'



function App() {


  return (
    <>
      <header>
        <Menu></Menu>
      </header>



      <div className='cuerpo-principal'>
        <div className='caja-video'>
          <video controls="true" autoPlay="true" src={Video}></video>
        </div>
        
        <h1>Bienvenidos a FilmRadar</h1>
        <h2>asdasd</h2>
        <div ></div>
        <MenuBot></MenuBot>                                                       
      </div>




    </>                                         
  )
}

export default App
