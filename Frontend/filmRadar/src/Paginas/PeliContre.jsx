import { NavLink, useNavigate, useParams } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import { useEffect, useState } from "react"
import "./style/paginaConcret.css"
import EstrellaFav from "../Componentes/Estrella"

export default function PagPelisConcret() {

    const datosPeli = useParams()


    const navigate = useNavigate();



    const api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"

    const [re, setRe] = useState([]);
    const [ResultSearhc, setRS] = useState(false);

    let urlImagen = ``;
    let urlDatoId = ` http://api.themoviedb.org/3/movie/${datosPeli.id}?api_key=bfb974e89e4e9ffecd6c9f124bd05ec0 `

    useEffect(() => {


        return () => {
            fetch(urlDatoId).
                then(response => response.json()).then(data => {
                    setRe([data])
                    var total_results;



                    total_results = data["total_results"] ? true : false;

                    setRS(total_results)
                })
                .catch(error => console.log(error))

        }
    }, [])
    let urlDataTrailer = `https://api.themoviedb.org/3/movie/${datosPeli.id}/videos?api_key=bfb974e89e4e9ffecd6c9f124bd05ec0&language=en-US`
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
   
     urlTrailerYoutube= `https://www.youtube.com/watch?v=${KeyTrailer}`
    }catch{
        console.log("error al leer la key")
    }
    


    const datos = re[0]
 
    let urlImage;
    let titulo;
    let fechaEstreno;
    let puntuacion;
    let sinopsis;
    let estado;
    let lenguajeOriginal;
    let linkTrailerOficial;
    try {
        urlImage = `https://image.tmdb.org/t/p/w500${datos.poster_path}`
        titulo = datos.title
        fechaEstreno = datos.release_date
        puntuacion = datos.vote_average
        sinopsis = datos.overview
        estado = datos.status
        lenguajeOriginal = datos.original_language
        linkTrailerOficial = urlTrailerYoutube
    } catch {
        console.log("error al cargar los datos")
    }


    return (
        <>
            <Menu></Menu>
            <div className="caja-peli-pc">

                <div className="caja-principal-pc">
                    <div className="caja-imagen-pc">
                        <img className="imagen-pc-peli" src={urlImage}></img>
                    </div>
                    <div className="caja-datos-pc">

                        <div className="estrellita-pc">
                            <EstrellaFav ></EstrellaFav>
                        </div>
                        <div className="datos">
                            <h1 className="titulo-pc">{titulo}</h1>
                            <div className="fecha-puntuacion">
                                <div className="datos-apate-fecha-etc">
                                    
                                    <h4>{fechaEstreno}</h4>
                                    <h4>{estado}</h4>
                                    <h4>Doblaje {lenguajeOriginal}</h4>
                                </div>
                               
                                <div >
                                    <h5 className="cajon-puntuacion">IMB<h5>{puntuacion}/10</h5></h5>
                                    
                                </div>
                            </div>
                            <p className="sinopsis-pc">{sinopsis} </p>
                        </div>
                        <NavLink className={"trailer-pc"} to={linkTrailerOficial}>Trailer</NavLink>
                    </div>
                </div>
            </div>
            <MenuBot></MenuBot>
        </>

    )

}