import { NavLink, useNavigate } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"
import sv from "../services/users"
import WindowAlertUserNotFound from "../Componentes/WindowAlertUserNotFound"
import { useState } from "react"
import Cookie from "universal-cookie"
export default function Registro(){

    const navegate = useNavigate()
function rederigirReg(){
    navegate("/InicioSesion")

}
const [respuestaReg, setResReg] = useState(false)
const createUserFun = function(e){
    e.preventDefault()
    var username= document.getElementById("username").value
    var email= document.getElementById("email").value
    var password= document.getElementById("password").value
    
    const user =  function (username,email,password) {
        
         sv.createUser(username,email,password).then(res => {
            console.log(res)
            if(res==true) {
                console.log(respuestaReg)
                console.log("Se ha creado")
                const cookies = new Cookie();
                cookies.set("username",username, {path: "/"} )
                navegate("/")
            }else{
                document.getElementById("username").value=null
                document.getElementById("email").value=null
                document.getElementById("password").value=null
                console.log(respuestaReg)
                document.getElementById("alertU").style.display="flex"
                document.getElementById("alertU").style.animation="aparecer 0.5s ease-in-out forwards"
                
                console.log("No creado")
            }
         })
    }
    user(username,email,password)
    }


        return(
    
            <>
                <Menu ></Menu>
                <WindowAlertUserNotFound tipe="R" textB="Iniciar Sesion"  text1="No se pudo crear el usuaro, revise los datos."text2="Estructura del correo: xxx@gmail.com"   id="alertU"></WindowAlertUserNotFound>
              
                    <div className="subcaja-inicio">
                       
                        <form id="form"  className="formularioInicio">
                            <h1>Registrarse</h1>
                            <h3>Usuario</h3>
                            <input type="text" minLength={2} autoComplete="off" className="username" id="username"placeholder="Nombre de usuario "></input>
                            <h3>Email</h3>
                            <input type="text" minLength={2} autoComplete="off" id="email" className="email" placeholder="Introduce tu email"></input>
                            <h3>Contraseña</h3>
                            <input type="password" minLength={2} className="password" id="password" placeholder="Introduce la contraseña"></input>
                            <div className="botonesDeRegistoroEInicioIni">
                                <button onClick={createUserFun}   className="botonIniciosesio">Registrarse</button>
                                <button className="enlaceRegistro" onClick={rederigirReg}>Iniciar Sesion </button>
                            </div>
                        </form>
                    </div>
            
                <MenuBot>
    
                </MenuBot>
    
            </>
        )
}