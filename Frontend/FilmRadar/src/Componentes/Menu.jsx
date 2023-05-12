import {  NavLink} from "react-router-dom"
import "./style/Menu.css"

export default function Menu({titulo}){
    return (

        <nav className="Menu">
            <div className="cajon-imagen">
             <img className="logo" width={"20px"} height={"20px"}></img>
            </div>
            <div className="cajon-titulo">
                <h1 className="tituloPagina"> {titulo}</h1>
            </div>
                
          
            
            <div className="cajon-buscador">
                <input type="search" placeholder="Buscame" ></input>
            </div>
            <div className="Link-Menu">
                <NavLink  to="/">Inicio</NavLink>
                <NavLink to="/Favoritos">Favoritos</NavLink>
                <NavLink to="/TopPelis">TopPelis</NavLink>
                <NavLink to="/Perfil">Perfil</NavLink> 
        
            </div>
                
            
        </nav>

    )
}