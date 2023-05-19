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

const createUserFun = function(e){
    e.preventDefault()
    var username= document.getElementById("username").value
    var email= document.getElementById("email").value
    var password= document.getElementById("password").value
    const user = async function (username,email,password) {
      return await sv.createUser(username,email,password).then(res => console.log(res))
    }
          if(  user(username,email,password) == true){
            console.log("Se ha creado")
            navegate("/")
        }else{
            document.getElementById("alertU").style.display="flex"
            console.log("No creado")
        }
        document.getElementById("username").value=null
        document.getElementById("email").value=null
        document.getElementById("password").value=null
    }


        return(
    
            <>
                <Menu ></Menu>
                <WindowAlertUserNotFound tipe="R" textB="Iniciar Sesion"  text1="No se pudo crear el usuaro, revise los datos."text2="Estructura del correo: xxx@gmail.com"   id="alertU"></WindowAlertUserNotFound>
                <div className="cuerpo-inicio">
                    <div className="subcaja-inicio">
                        <h1 className="Reg">Registrarse</h1>
                        <form id="form" onSubmit={createUserFun} className="formularioInicio">
                            <h3>Usuario</h3>
                            <input type="text"  className="username" id="username"placeholder="Nombre de usuario "></input>
                            <h3>Email</h3>
                            <input type="text"  id="email" className="email" placeholder="Introduce tu email"></input>
                            <h3>Contraseña</h3>
                            <input type="password"  className="password" id="password" placeholder="Introduce la contraseña"></input>
                            <div className="botonesDeRegistoroEInicioIni">
                                <button onClick={createUserFun}   className="botonIniciosesio">Registrarse</button>
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