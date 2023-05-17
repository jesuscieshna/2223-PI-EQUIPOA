
import { NavLink, useNavigate } from "react-router-dom"
import sinImage from "../assets/icons8-foto.svg"



const HaveImage = function(urlImage){
    if(urlImage=="https://image.tmdb.org/t/p/w500null"){
        return <img src={sinImage}></img>
    }else{
        return <img src={urlImage}></img>
    }


   }

const IniciarSesion = function(Constraseña, User, datos) {
    let  userName;
    let userNotFound = false;
    datos.forEach(userAc => {
            if(Constraseña == userAc.password && (User == userAc.username || User == userAc.email) ) {
                console.log("encontrado")
                userNotFound=true
                userName=userAc.username
            }
    });
    let log={
        userName,
        userNotFound
       }        
    return log;
}


const HaveATrailer = function(urlTrailerYoutube,linkTrailerOficial){
    console.log(urlTrailerYoutube, linkTrailerOficial)
      if (urlTrailerYoutube==undefined || urlTrailerYoutube==null){
          return   <NavLink className={"trailer-pc"}>No hay Trailer</NavLink>            
      }else{
          if(urlTrailerYoutube==undefined){
              return <NavLink className={"trailer-pc"} to={linkTrailerOficial}>Trailer</NavLink>
          }
          else{
              return <NavLink className={"trailer-pc"} to={urlTrailerYoutube}>Trailer</NavLink>
          }
          
      }
    }
export default{
    HaveImage,
    IniciarSesion,
    HaveATrailer,

} 