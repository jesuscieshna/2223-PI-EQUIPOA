import EstrellaRellena from "../assets/icons8-estrella-50rellena.png"
import EstrellaVacia from "../assets/icons8-estrella-50.png"
import { useEffect, useState } from "react";
export default function EstrellaFav(){
    const [fav,setFav] = useState(false);
    const [estrellaAc, setEstrella] = useState(0);
  
   
 
   

   
     
     

    useEffect(() => {

        if (fav){
            setEstrella(EstrellaRellena);
        }if (!fav){
            setEstrella(EstrellaVacia);
        }
    },[fav])

        return (
            <>
                <img onClick={() => {setFav(fav ? false  : true) }} src={estrellaAc}></img>
            </>
        )



}