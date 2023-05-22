import {  NavLink, useNavigate, useParams  } from "react-router-dom"
import "./style/Menu.css"
import filmRadar from "../assets/FilmRadar-removebg-preview.png"

export default function Menu({titulo}){
   
    const navigate = useNavigate();
    
    function rederigirAresultados (){

            navigate(`/PagPelis/${document.getElementById('buscador').value}`); 

    }
    

    return (

        <nav className="Menu">
            <div className="cajon-imagen">
             <h1 className="logo" >FilmRadar</h1>
             <h1 className="logo2" >FR</h1>
            </div>
            <form className="cajon-buscador" onSubmit={rederigirAresultados}>
                <input id="buscador"  autoComplete="off" type="search" placeholder="Buscame" ></input>
            </form>
            <div className="cajon-titulo">
                <h1 className="tituloPagina"> {titulo}</h1>
            </div>
            <div className="Link-Menu">
                <NavLink to="/">Inicio</NavLink>
               
                <NavLink to="/TopPelis">TopPelis</NavLink>
                <NavLink to="/Perfil">Perfil</NavLink> 
            
            </div>
                
            
        </nav>

    )
}
