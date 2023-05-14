import { NavLink } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"
export default function InicioSesion(){

    return(

        <>
            <Menu ></Menu>
            <body className="cuerpo-inicio">
                <div className="subcaja-inicio">
                    <form className="formularioInicio">
                        <h3>Usuario</h3>
                        <input type="text" placeholder="Nombre de usuario, telefono o email"></input>
                        <h3>Contraseña</h3>
                        <input type="password" placeholder="Introduce la contraseña"></input>
                        <div className="botonesDeRegistoroEInicioIni">
                            <button className="botonIniciosesio">Iniciar Sesion</button>
                            <NavLink className={"enlaceRegistro"}s to="/Registro">Registrarse</NavLink>
                        </div>
                        
                    
                    </form>
                        <a className="enlaceRecuCon">¿Olvidaste la contraseña?</a>

                </div>

            </body>
            <MenuBot>

            </MenuBot>

        </>
    )
}