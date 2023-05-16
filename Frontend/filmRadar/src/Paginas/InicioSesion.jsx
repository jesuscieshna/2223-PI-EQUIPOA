import { NavLink, useNavigate } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"
import functions from "../funtions/functions"
import { useEffect } from "react"
import { useState } from "react"

export default function InicioSesion(){
    const navigate = useNavigate()
    const [datos, setDatos] = useState([])
    useEffect(() => {
      return () => { fetch("http://localhost:3004/api/users").then(respose => respose.json()).then(user => setDatos(user)).catch(error => console.log(error))}
    }, [])
    console.log(datos)
const ObtencionDatosFomr = function(){
        let contraseña = document.getElementById("contraseña").value
        let userOrEmail = document.getElementById("userOrEmail").value
        let log=[];
        const IsUserNull = userOrEmail==='' ? true : false;
        const IsContraseñaNUll = contraseña==='' ? true : false;
        console.log(IsContraseñaNUll , IsUserNull)
        const validateInicio =  function(){
         return  functions.IniciarSesion(contraseña,userOrEmail,datos)
           }      
           log=validateInicio()
           console.log(log)
           if(log.userNotFound){
            navigate("/")
           }else{
                window.alert("Usuario no enconstrado, asegurese de que has introducido los datos correctamente")
           }
           
            

  }
    return(

        <>
            <Menu></Menu>
            <div className="cuerpo-inicio">
                <div className="subcaja-inicio">
                    <h1>Inicio Sesion</h1>
                    <form  className="formularioInicio">
                        <h3>Usuario</h3>
                        <input className="usernameI" required={true} id="userOrEmail" type="text" placeholder="Nombre de usuario, telefono o email"></input>
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