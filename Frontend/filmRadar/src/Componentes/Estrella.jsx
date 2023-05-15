import EstrellaRellena from "../assets/icons8-estrella-50rellena.png"
import EstrellaVacia from "../assets/icons8-estrella-50.png"
import { useEffect, useState } from "react";
import { Suspense } from "react";
import Loader from "./loader";
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
            <Suspense fallback={null}>
                 <img onClick={() => {setFav(fav ? false  : true) }} src={estrellaAc}></img>

            </Suspense>
               
            </>
        )



}