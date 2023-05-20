import "./style/Top.css"

import { NavLink , Link} from "react-router-dom"
import ButonVermas from "./vermasBoton"
import { useState, useEffect, Suspense } from "react"
import Loader from "./loader"

export default function Top(props) {
    const api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"
    let urlImage = `https://image.tmdb.org/t/p/w500${props.pathUrlImage}`
    console.log(props.id)
    let urlDataTrailer = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=bfb974e89e4e9ffecd6c9f124bd05ec0&language=es`
    const [dataTrailer, setDataTrailer] = useState([])
    const obtenerDatosVideosTrailer=  useEffect(() => {


        return () => {
            fetch(urlDataTrailer).then(response => response.json()).then(data => setDataTrailer(data["results"])).
                catch(error => console.log(error))
        }
    }, [urlDataTrailer])
    let urlTrailerYoutube;
    try{
        obtenerDatosVideosTrailer
        let KeyTrailer = dataTrailer[dataTrailer.length-1]["key"]
   
     urlTrailerYoutube= `https://www.youtube.com/watch?v=${KeyTrailer}&language=es`
    }catch{
        console.log("error al leer la key")
    }
    
    
  
  
    
    

    return (

        <>
        <Suspense fallback={<Loader></Loader>}>
            <div className="cajon-top">

                <div className="cajon-imagen-top">
                    <img className="cartelera-top" src={urlImage}></img>
                    <ButonVermas titulo={props.titulo} id={props.id} puntuacion={props.puntuacion} fechaEstreno={props.fechaEstreno}
                     trailer={urlTrailerYoutube} urlImagen={urlImage}></ButonVermas>
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
                        <h3 className="puntuacion-top">{props.puntuacion}/10</h3>

                    </div>
                    <div className="cajon-boton-trailer">
                        <Link className={"boton-trailer-top"} to={urlTrailerYoutube}  >Trailer</Link>
                    </div>

                </div>


            </div>
            </Suspense>

        </>

    )



}

