import Menu from "../Componentes/Menu"
import "./style/inicio.css"
import Video from "../assets/FIMRadarVideo.mp4"
import MenuBot from "../Componentes/MenuBot"
import { NavLink } from "react-router-dom"


export default function Inicio(){

    return (
        <>
        <Menu titulo="Inicio"></Menu>
        <div className="cuerpo-principal">
            <div className="cajon-texto"> 
                <div>
                <h1 className="textoINI">
                    FilmRadar
                </h1>
                 <div className="linksinicio">
                    <NavLink to="/InicioSesion">Iniciar Sesion</NavLink>
                    <NavLink to="/Registro" >Registrarse</NavLink> 
                </div>
                </div>             
                    <div className=" cajon-parrafo">
                        <p className="parrafo">Bienvenidos a FILMRadar, aquí podrás encontrar todas las películas que puedas imaginar, desde las que marcaron tu infancia hasta las que acaban de ser estrenadas.</p>           
                    </div>
            </div>
        </div>
           <MenuBot></MenuBot>
        </>
    )
}