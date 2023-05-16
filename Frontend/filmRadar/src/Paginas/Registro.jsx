import { NavLink } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"

export default function Registro(){
    

        return(
    
            <>
                <Menu ></Menu>
                <body className="cuerpo-inicio">
                    <div className="subcaja-inicio">
                        <h1>Registrarse</h1>
                        <form className="formularioInicio">
                            <h3>Usuario</h3>
                            <input type="text" placeholder="Nombre de usuario, telefono o email"></input>
                            <h3>Contraseña</h3>
                            <input type="password" placeholder="Introduce la contraseña"></input>
                            <div className="botonesDeRegistoroEInicioIni">
                                <button className="botonIniciosesio">Registrarse</button>
                                <NavLink className={"enlaceRegistro"} to="/InicioSesion">Iniciar Sesion </NavLink>
                            </div>
                            
                        
                        </form>
                            
    
                    </div>
    
                </body>
                <MenuBot>
    
                </MenuBot>
    
            </>
        )
}