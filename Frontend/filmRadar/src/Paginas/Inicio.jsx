import Menu from "../Componentes/Menu"
import "./style/inicio.css"
import Video from "../assets/FIMRadarVideo.mp4"
export default function Inicio(){

    return (
        <>
        
        <Menu></Menu>
            
        
        <body className="cuerpo-principal">
            <video  src={Video} width={"95%"} autoPlay loop height={"25%"}></video>
            <div>
                <h1>
                    Bienvenidos a FilmRadar

                </h1>


            </div>

        </body>
           
        </>
    )
}