import { NavLink, useNavigate } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"
import functions from "../funtions/functions"
import { useEffect } from "react"
import { useState } from "react"
import sv from "../services/users"
import WindowAlertUserNotFound from "../Componentes/WindowAlertUserNotFound"

export default function InicioSesion(){
    
    const [datos, setDatos] = useState([])
    useEffect(() => {

      return () => {
        sv.getUsers().then(res => setDatos(res))
      }
    }, [])
    const navegate = useNavigate()
function rederigirReg(){
    navegate("/Registro")
        
        
}
const ObtencionDatosFomr = function(event){
         event.preventDefault()
        let contraseña = document.getElementById("contraseña").value
        let userOrEmail = document.getElementById("userOrEmail").value
        let log=[];

        const validateInicio =  function(){
         return  functions.IniciarSesion(contraseña,userOrEmail,datos)
           }      
           log=validateInicio()
         
           if(log.userNotFound){
            navegate("/")
           }else{
              document.getElementById("alertU").style.display="flex"
           }
           
            

  }
    return(

        <>
            <Menu></Menu>
            <WindowAlertUserNotFound id="alertU"></WindowAlertUserNotFound>
            <div className="cuerpo-inicio">
                <div className="subcaja-inicio">
                    <h1>Inicio Sesion</h1>
                    <form  className="formularioInicio">
                        <h3>Usuario</h3>
                        <input className="usernameI"  id="userOrEmail" type="text" placeholder="Nombre de usuario o email"></input>
                        <h3>Contraseña</h3>
                        <input className="passwordI"  id="contraseña" type="password" placeholder="Introduce la contraseña"></input>
                        <div  className="botonesDeRegistoroEInicioIni">
                            <button  onClick={ObtencionDatosFomr} className="botonIniciosesio">Iniciar Sesion</button>
                            <button className={"enlaceRegistro"} onClick={rederigirReg}>Registrarse</button>
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