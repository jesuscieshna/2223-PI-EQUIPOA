import { useEffect, useState } from "react";

import { NavLink, useNavigate, useParams, useLocation} from "react-router-dom";
import "./style/verMasBoton.css"
import EstrellaFav from "./Estrella";
export default function ButonVermas(props){
    
    
 
    return (


        <>
        <div className="ver-mas-fav">
           
            <NavLink  to={`/PeliConcret/${props.id}`} className={"ver-mas-top"}>Ver más </NavLink>
        </div>
       
        </>

    )



}