

import './App.css'
import Menu from './Componentes/Menu'
import MenuBot from './Componentes/MenuBot'
import Video from './assets/videos/FIMRadarVideo.mp4'



function App() {
  console.log("asdas")

  return (
    <>
      <header>
        <Menu></Menu>
      </header>



      <div className='cuerpo-principal'>
        <div className='caja-video'>
          <video controls="true" autoPlay="true" src={Video}></video>
        </div>

        <h1 className='Bienvenido'>Bienvenidos a FilmRadar</h1>
        <div className='caja-rollo'>
          <p className='PrimerParrafo'>Bienvenidos a FILMRadar, aquí podrás encontrar todas las películas que puedas imaginar, desde las que marcaron tu infancia hasta las que acaban de ser estrenadas.</p>
        </div>
        <div className='botonesDeInicioSesion'>
        <button>INICIAR SESION</button>
        <button>REGISTRARSE</button>
        </div>
        
      
      </div>

      <div>
        <MenuBot></MenuBot>
      </div>




    </>
  )
}

export default App
