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
    const navigate = useNavigate()
    const [datos, setDatos] = useState([])
    useEffect(() => {

      return () => {
        sv.getUsers().then(res => setDatos(res))
      }
    }, [])
const ObtencionDatosFomr = function(){
        let contraseña = document.getElementById("contraseña").value
        let userOrEmail = document.getElementById("userOrEmail").value
        let log=[];

        const validateInicio =  function(){
         return  functions.IniciarSesion(contraseña,userOrEmail,datos)
           }      
           log=validateInicio()
         
           if(log.userNotFound){
            navigate("/")
           }else{
                window.alert("Usuario no enconstrado, asegurese de que has introducido los datos correctamente")
           }
           
            

  }
    return(

        <>
            <Menu></Menu>
            <WindowAlertUserNotFound></WindowAlertUserNotFound>
            <div className="cuerpo-inicio">
                <div className="subcaja-inicio">
                    <h1>Inicio Sesion</h1>
                    <form  className="formularioInicio">
                        <h3>Usuario</h3>
                        <input className="usernameI" required={true} id="userOrEmail" type="text" placeholder="Nombre de usuario o email"></input>
                        <h3>Contraseña</h3>
                        <input className="passwordI" required={true} id="contraseña" type="password" placeholder="Introduce la contraseña"></input>
                        <div  className="botonesDeRegistoroEInicioIni">
                            <input type="submit" onClick={ObtencionDatosFomr} className="botonIniciosesio" value={"Iniciar Sesion"}></input>
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