
import sinImage from "../assets/icons8-foto.svg"



const HaveImage = function(urlImage){
    if(urlImage=="https://image.tmdb.org/t/p/w500null"){
        return <img src={sinImage}></img>
    }else{
        return <img src={urlImage}></img>
    }


   }





export default{
    HaveImage,

} 