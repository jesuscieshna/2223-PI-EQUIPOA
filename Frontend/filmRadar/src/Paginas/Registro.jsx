import { NavLink, useNavigate } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"
import sv from "../services/users"
import WindowAlertUserNotFound from "../Componentes/WindowAlertUserNotFound"
export default function Registro(){

    const navegate = useNavigate()
function rederigirReg(){
    navegate("/InicioSesion")

}

const createUserFun = function(event){
    event.preventDefault()
  
    var username= document.getElementById("username").value
    var email= document.getElementById("email").value
    var password= document.getElementById("password").value
    const user = async function (username,email,password) {

      return await sv.createUser(username,email,password)
      
    }
    
       if( user(username,email,password) == true){
        console.log("Se ha creado")
        navegate("/")

       }else{
        console.log("")
       }
       

    }


        return(
    
            <>
                <Menu ></Menu>
                <WindowAlertUserNotFound id="alertU"></WindowAlertUserNotFound>
                <div className="cuerpo-inicio">
                    <div className="subcaja-inicio">
                        <h1 className="Reg">Registrarse</h1>
                        <form onSubmit={createUserFun} className="formularioInicio">
                            <h3>Usuario</h3>
                            <input type="text"  className="username" id="username"placeholder="Nombre de usuario "></input>
                            <h3>Email</h3>
                            <input type="text"  id="email" className="email" placeholder="Introduce tu email"></input>
                            <h3>Contraseña</h3>
                            <input type="password"  className="password" id="password" placeholder="Introduce la contraseña"></input>
                            
                            <div className="botonesDeRegistoroEInicioIni">
                                <button onClick={createUserFun}  className="botonIniciosesio">Registrarse</button>
                                <button className="enlaceRegistro" onClick={rederigirReg}>Iniciar Sesion </button>
                            </div>
                            
                        
                        </form>
                            
    
                    </div>
    
                </div>
                <MenuBot>
    
                </MenuBot>
    
            </>
        )
}