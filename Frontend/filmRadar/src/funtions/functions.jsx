
import { NavLink, useNavigate } from "react-router-dom"
import sinImage from "../assets/icons8-foto.svg"
import svPunt from "../services/puntuaciones"


const HaveImage = function(urlImage){
    if(urlImage=="https://image.tmdb.org/t/p/w500null"  || urlImage=="https://image.tmdb.org/t/p/w500undefined"){
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
      if (urlTrailerYoutube==undefined || linkTrailerOficial==undefined) {
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

    const visuliceSlider = () => {
        document.getElementById("PuntSlider").style.animation="puntViev 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
        document.getElementById("PuntSlider").style.display="flex"
        document.getElementById("slider").style.animation="sliderView 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
        document.getElementById("pushPunt").style.animation="sliderView 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
        document.getElementById("ButV").style.display="none"
        document.getElementById("pushPunt").style.animation="sliderView 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
        document.getElementById("pushPunt").style.animation="sliderView 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
        document.getElementById("pushPunt").style.display="block"
        document.getElementById("slider").style.display="flex"
        document.getElementById("punt").style.display="block"
        
    }
    const desView = function(puntuacion,idPeli,user)  {

        const enviarNota = async function(puntuacion,idPeli,user){
          await  svPunt.putNota(user,idPeli,puntuacion);
          
          document.getElementById("PuntSlider").style.animation="desView 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
        
          document.getElementById("slider").style.animation="desView 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
      
          document.getElementById("pushPunt").style.animation="desView 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
          document.getElementById("PuntSlider").style.display="none"
          document.getElementById("pushPunt").style.display="none"
          document.getElementById("slider").style.display="none"
          
          document.getElementById("ButV").style.animation="sliderView 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards"
          document.getElementById("ButV").style.display="block"

        }
     enviarNota(puntuacion,idPeli,user);
       

    }
export default{
    HaveImage,
    IniciarSesion,
    HaveATrailer,
    desView,
    visuliceSlider,

} 