import { NavLink } from "react-router-dom"
import "./style/windowAlertUserNotFound.css"
import "react-router-dom"
export default function WindowAlertUserNotFound(){

    function desactive(){
        document.getElementById("alertU").style.display="none"
    }

    return (

        <>
            <div id="alertU" className="caja-windowAlert">
                <h1 className="TextAlert">Datos Introducidos erroneamente</h1>
                <span className="lineaCierreAlert">
                    <NavLink id="linkRegAlert" to="/Registro">Registrarse</NavLink>
                    <button onClick={desactive} className="continueOpeAlert">Continuar</button>
                </span>
            </div>

        </>

    )



}