import { NavLink, useNavigate } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import "./style/inicioSesion.css"
import functions from "../funtions/functions"
import { useEffect } from "react"
import { useState } from "react"
import sv from "../services/users"
import WindowAlertUserNotFound from "../Componentes/WindowAlertUserNotFound"
import Cookies from "universal-cookie"
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
        if(contraseña!=null && userOrEmail!=null ){
            const validateInicio =  function(){
                return  functions.IniciarSesion(contraseña,userOrEmail,datos)
                  }      
                  log=validateInicio()
                  if(log.userNotFound==true && log.userName!=''){
                  
                   console.log(log)
                   const cookies = new Cookies();
                   cookies.set("username",userOrEmail, {path: "/"} )
                   navegate("/")
                }else{
                    document.getElementById("alertU").style.display="flex"
                    document.getElementById("alertU").style.animation="aparecer 0.5s ease-in-out forwards"
                   }
        }

    }
           
           
            

  
    return(

        <>
            <Menu></Menu>
            <WindowAlertUserNotFound textB="Registrarse" text1="No se pudo iniciar sesion, revise los datos" id="alertU"></WindowAlertUserNotFound>
                <div className="subcaja-inicio">
                    <form onSubmit={ObtencionDatosFomr} className="formularioInicio">
                        <h1>Inicio Sesion</h1>
                        <h3>Usuario</h3>
                        <input className="usernameI" autoComplete="off"  id="userOrEmail" type="text" placeholder="Nombre de usuario o email"></input>
                        <h3>Contraseña</h3>
                        <input className="passwordI" autoComplete="off"  id="contraseña" type="password" placeholder="Introduce la contraseña"></input>
                        <div  className="botonesDeRegistoroEInicioIni">
                            <button  onClick={ObtencionDatosFomr}  className="botonIniciosesio">Iniciar Sesion</button>
                            <button className={"enlaceRegistro"} onClick={rederigirReg}>Registrarse</button>
                        </div>
                          <a className="enlaceRecuCon">¿Olvidaste la contraseña?</a>
                    </form>
                      
                </div>
            <MenuBot>
            </MenuBot>

        </>
    )
}