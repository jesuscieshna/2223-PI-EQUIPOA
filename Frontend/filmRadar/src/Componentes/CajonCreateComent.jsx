import { useNavigate } from "react-router-dom"
import svck from "../services/CookiesServices"
import "./style/cajonCreateComent.css"

export default function CajonCreateComent(props){
    console.log(props)
    
    const user=svck.getUserNameForCookies;
    

    const cancelComent = function(){
       
        document.getElementById("cajon-createcomenet").style.display="none"
    }


    return(

        <div id="cajon-createcomenet" className="cajon-createcomenet">
            <div  className="form-createComent"> 
            <div>
                 <h1>Tu Comentario</h1>
                <textarea type="text" className="textBox"     minLength={10} placeholder="Escribe tu comentario aqui" maxLength={255}></textarea>
            
             
            </div>
            <div className="botonesCometn">
                <button className="cancelComent" onClick={cancelComent}>Cancelar</button> 
                <button className="btnEnviar" onClick={null}>Enviar</button>
            </div>
        
           
               
            </div>
        </div>

    )
}