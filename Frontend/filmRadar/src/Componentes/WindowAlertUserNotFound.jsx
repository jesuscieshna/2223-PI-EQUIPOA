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
                <h2 className="TextAlert">{props.text1}</h2>
                <h2 className="TextAlert2">{props.text2}</h2>
                <span className="lineaCierreAlert">
                    <button onClick={desactive} className="continueOpeAlert">Continuar</button>
                </span>
            </div>

        </>

    )



}