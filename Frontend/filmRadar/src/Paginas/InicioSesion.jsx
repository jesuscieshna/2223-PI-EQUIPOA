import { NavLink } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"

import { useEffect } from "react"
import { useState } from "react"


export default function InicioSesion(){

    const [datos, setDatos] = useState([])
   
     useEffect(() => {
      
    
      return () => { fetch("http://localhost:3004/api/users").then(respose => respose.json()).then(user => setDatos(user)).catch(error => console.log(error))

      }
    }, [])
    
    console.log(datos)


    return(

        <>
            <Menu ></Menu>
            <div className="cuerpo-inicio">
                <div className="subcaja-inicio">
                    <form className="formularioInicio">
                        <h3>Usuario</h3>
                        <input  type="text" placeholder="Nombre de usuario, telefono o email"></input>
                        <h3>Contraseña</h3>
                        <input  type="password" placeholder="Introduce la contraseña"></input>
                        <div className="botonesDeRegistoroEInicioIni">
                            <button className="botonIniciosesio">Iniciar Sesion</button>
                            <NavLink className={"enlaceRegistro"} to="/Registro">Registrarse</NavLink>
                        </div>
                        
                    
                    </form>
                        <a className="enlaceRecuCon">¿Olvidaste la contraseña?</a>

                </div>

            </div>
            <MenuBot>

            </MenuBot>

        </>
    )
}