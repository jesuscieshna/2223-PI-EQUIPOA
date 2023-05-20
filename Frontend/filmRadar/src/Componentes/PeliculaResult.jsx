
import { NavLink, useParams } from "react-router-dom"

import "./style/pelicularesult.css"
import ButonVermas from "./vermasBoton"
import sinImage from "../assets/icons8-foto.svg"
import Ft from "../funtions/functions"
import { Suspense } from "react"
import Loader from "./loader"

export default function PeliculaResult(props){
      
        let urlImage=`https://image.tmdb.org/t/p/w500${props.pathUrlImage}`
    
    return (
        
    <>
    

        <Suspense fallback={<Loader></Loader>}>

       
            <div  className="cajon-prinicipal-prs" >
                <div className="titulo-peli-rsh" > 
                    <h3>{props.titulo}</h3>
                </div>
                
                <div className="cajon-img-prs">
                    {
                        Ft.HaveImage(urlImage)

                    }
                </div>
                <div className="cajon-verMas-prs">
                    <ButonVermas id={props.id} urlImage={urlImage}></ButonVermas>
                </div>
            </div>
        </Suspense>
    </>

    )


}
