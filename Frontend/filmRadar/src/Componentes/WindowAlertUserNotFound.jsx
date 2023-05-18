import { NavLink, useNavigate } from "react-router-dom"
import "./style/windowAlertUserNotFound.css"
import "react-router-dom"
export default function WindowAlertUserNotFound(props){

   
    function desactive(){
        document.getElementById("alertU").style.display="none"
    }
  

    
    
    return (

        <>
            <div id="alertU" className="caja-windowAlert">
                <h1 className="TextAlert">{props.text}</h1>
                <span className="lineaCierreAlert">
                    <button onClick={desactive} className="continueOpeAlert">Continuar</button>
                </span>
            </div>

        </>

    )



}