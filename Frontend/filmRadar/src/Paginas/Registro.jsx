import { NavLink } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"
import sv from "../services/users"
export default function Registro(){
    
const createUserFun = function(){
    var username= document.getElementById("username").value
    var email= document.getElementById("email").value
    var password= document.getElementById("password").value
    const user = async function (username,email,password) {

        sv.createUser(username,email,password)
    }
        user(username,email,password)
}


        return(
    
            <>
                <Menu ></Menu>
                <body className="cuerpo-inicio">
                    <div className="subcaja-inicio">
                        <h1>Registrarse</h1>
                        <form onSubmit={createUserFun} className="formularioInicio">
                            <h3>Usuario</h3>
                            <input type="text" id="username"placeholder="Nombre de usuario "></input>
                            <h3>Email</h3>
                            <input type="text" id="email" placeholder="Introduce tu email"></input>
                            <h3>Contraseña</h3>
                            <input type="password" id="password" placeholder="Introduce la contraseña"></input>
                            
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