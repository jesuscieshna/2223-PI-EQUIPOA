import "./style/cuadroPeliParaVer.css"
import ImageParaVer from "../assets/Avatar_El_sentido_del_agua-722646748-large.jpg"
import EstrellaRellena from "../assets/icons8-estrella-rellena.png"
import EstrellaVacia from "../assets/estrella.svg"
import { NavLink } from "react-router-dom"
import VermasBoton from "./VermasBoton"
import {  useEffect, useState } from "react"
function CuadroPeliParaVer(){
    const [fav,setFav] = useState(false);
    const [estrellaAc, setEstrella] = useState(0);
    
 
    
 
    
    

    

    return (
        <li className="caja-superior-cuadro-para-ver">
                <div className="principal-pv">
                    <div className="cjpv-image">
                        <img src={ImageParaVer}></img>
                    </div>
                    <div className="cjpv-ver">
                        <VermasBoton></VermasBoton>
                    </div>
                </div>
            </li>
    )
    }
    export default CuadroPeliParaVer