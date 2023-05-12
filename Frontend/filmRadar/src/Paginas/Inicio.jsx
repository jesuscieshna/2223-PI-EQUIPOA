import Menu from "../Componentes/Menu"
import "./style/inicio.css"
import Video from "../assets/FIMRadarVideo.mp4"
import MenuBot from "../Componentes/MenuBot"
export default function Inicio(){

    return (
        <>
        
        <Menu titulo="Inicio"></Menu>
            
        
        <body className="cuerpo-principal">
            <video  src={Video}  controls autoPlay loop ></video>
            <div className="cajon-texto"> 
                <h1>
                    Bienvenidos a FilmRadar
                    <div className=" cajon-parrafo">
                         <p className="parrafo">Bienvenidos a FILMRadar, aquí podrás encontrar todas las películas que puedas imaginar, desde las que marcaron tu infancia hasta las que acaban de ser estrenadas.</p>

                    </div>
                </h1>


            </div>

        </body>
           <MenuBot></MenuBot>
        </>
    )
}