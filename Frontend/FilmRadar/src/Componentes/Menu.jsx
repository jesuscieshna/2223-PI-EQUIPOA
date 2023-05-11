import {  NavLink} from "react-router-dom"
import "./style/Menu.css"

export default function Menu(){
    return (

        <nav className="Menu">
            <form >
                <input type="search" placeholder="Buscame" ></input>
            </form>
            <div className="Link-Menu">
            <NavLink  to="/">Inicio</NavLink>
            
            <NavLink to="/Favoritos">Favoritos</NavLink>
            <NavLink to="/TopPelis">TopPelis</NavLink>
            <NavLink to="/Perfil">Perfil</NavLink> 
        
            </div>
                
            
        </nav>

    )
}