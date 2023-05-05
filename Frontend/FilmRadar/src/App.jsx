

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
        <video width={"100px"} src={Video}></video>
        <h1>asdasd</h1>
        <h2>asdasdasdqasdasd</h2>
        <div width={"20%"} ></div>
        <MenuBot></MenuBot>
        </div>
       
     
        
        
    </>
  )
}

export default App
