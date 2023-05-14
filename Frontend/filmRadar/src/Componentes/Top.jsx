import "./style/Top.css"

import { NavLink , Link} from "react-router-dom"
import ButonVermas from "./vermasBoton"
import { useState, useEffect } from "react"

export default function Top(props) {
    const api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"
    let urlImage = `https://image.tmdb.org/t/p/w500${props.pathUrlImage}`
    
    let urlDataTrailer = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=bfb974e89e4e9ffecd6c9f124bd05ec0&language=en-US`
    const [dataTrailer, setDataTrailer] = useState([])
    useEffect(() => {


        return () => {
            fetch(urlDataTrailer).then(response => response.json()).then(data => setDataTrailer(data["results"])).
                catch(error => console.log(error))
        }
    }, [urlDataTrailer])
    let urlTrailerYoutube;
    try{
        let KeyTrailer = dataTrailer[dataTrailer.length-1]["key"]
   
     urlTrailerYoutube= `https://www.youtube.com/watch?v=${KeyTrailer}`
    }catch{
        console.log("error al leer la key")
    }
    
    
  
  
    
    


    return (

        <>
            <div className="cajon-top">

                <div className="cajon-imagen-top">
                    <img className="cartelera-top" src={urlImage}></img>
                    <ButonVermas props={props} trailer={urlTrailerYoutube}></ButonVermas>
                </div>
                <div className="datos-top">
                    <div className=" tituloPeli-top">
                        <h4 className="numeroPos">{(props.numeroPos + 1)}</h4>
                        <h3>{props.titulo}</h3>
                    </div>

                    <div className="fecha-top">
                        <h3 >Fecha estreno:</h3>
                        <h3 className="fecha-h3">{props.fechaEstreno}</h3>
                    </div>
                    <div className="cajon-puntuacion-top">
                        <h3 className="IMB">IMB</h3>
                        <h3 className="puntuacion-top">{props.puntuacion}</h3>

                    </div>
                    <div className="cajon-boton-trailer">
                        <Link className={"boton-trailer-top"} to={urlTrailerYoutube} >Trailer</Link>
                    </div>

                </div>


            </div>


        </>

    )



}