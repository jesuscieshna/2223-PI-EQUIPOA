import { useNavigate } from "react-router-dom"
import svck from "../services/CookiesServices"
import "./style/cajonCreateComent.css"
import svCom from "../services/comentarios"
export default function CajonCreateComent(props){
    
    
    const user=svck.getUserNameForCookies();
    const idPeli = props.idPeli;
   
    const cancelComent = function(){
        
        document.getElementById("cajon-createcomenet").style.display="none"
    }
  
    const createComent = function(){
       const textComent = document.getElementById("coment").value
       console.log(idPeli)
        console.log(user, textComent)
        const sendComent = async function(idPeli,user,textComent){
        console.log(  await  svCom.createComment(idPeli,user,textComent))
        document.getElementById("cajon-createcomenet").style.display="none"


        }   
        sendComent(idPeli,user,textComent)
    }
    return(

        <div id="cajon-createcomenet" className="cajon-createcomenet">
            <div  className="form-createComent"> 
            <div>
                 <h1>Tu Comentario</h1>
                <textarea type="text" className="textBox" id="coment"    minLength={10} placeholder="Escribe tu comentario aqui" maxLength={255}></textarea>
            
             
            </div>
            <div className="botonesCometn">
                <button className="cancelComent" onClick={cancelComent}>Cancelar</button> 
                <button className="btnEnviar" onClick={createComent}>Enviar</button>
            </div>
        
           
               
            </div>
        </div>

    )
}