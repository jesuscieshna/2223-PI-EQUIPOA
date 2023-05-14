import { useEffect, useState } from "react";
import EstrellaRellena from "../assets/icons8-estrella-50rellena.png"
import EstrellaVacia from "../assets/icons8-estrella-50.png"
import { NavLink } from "react-router-dom";
import "./style/verMasBoton.css"
export default function ButonVermas(){
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
        <div className="ver-mas-fav">
            <img onClick={() => {setFav(fav ? false  : true) }   } src={estrellaAc}></img>
            <NavLink to="/PagPelis "className={"ver-mas-top"}>Ver más </NavLink>
        </div>
       
        </>

    )



}