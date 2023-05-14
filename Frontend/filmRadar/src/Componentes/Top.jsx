import "./style/Top.css"
import Cartelera from "../assets/Avatar_El_sentido_del_agua-722646748-large.jpg"
import { NavLink } from "react-router-dom"
import ButonVermas from "./vermasBoton"
import { useState,useEffect } from "react"
export default function Top(){
   
 
    return (

        <>
            <div className="cajon-top">
                
                <div className="cajon-imagen-top">
                    <img className="cartelera-top" src={Cartelera}></img>
                    <ButonVermas></ButonVermas>
                </div>
                <div className="datos-top">
                    <div className=" tituloPeli-top">
                     <h3 >Avatar el sentido del agua</h3>
                    </div>
                    
                    <div className="fecha-top">
                        <h3 >Fecha estreno:</h3>
                        <h3 className="fecha-h3">20/12/2012</h3>
                    </div>
                    <div className="cajon-puntuacion-top">
                        <h3 className="IMB">IMB</h3>
                        <h3 className="puntuacion-top">9.7/10</h3>
                        
                    </div>
                    <div className="cajon-boton-trailer">
                    <button className="boton-trailer-top" href="">Trailer</button>    
                    </div>
                    
                </div>
                

            </div>
        
        
        </>

    )



}