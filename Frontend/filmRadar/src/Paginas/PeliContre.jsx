import { NavLink, useNavigate, useParams } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import React, { Suspense, useEffect, useState } from "react"
import "./style/paginaConcret.css"
import Ft from "../funtions/functions"
import EstrellaFav from "../Componentes/Estrella"
import Loader from "../Componentes/loader"
import svCom from "../services/comentarios"
import CajonCreateComent from "../Componentes/CajonCreateComent"
import svCk from "../services/CookiesServices"
import HoverPunt from "../Componentes/HoverPunt"
const Comentario = React.lazy(() =>import("../Componentes/Comentario"))

export default function PagPelisConcret() {
    svCk.verifiCookiesUnserName()
    const datosPeli = useParams()
    console.log(datosPeli)
    const [re, setRe] = useState([]);
    const [dataComent,setComent] = useState([])
    const [ dysplayComent, setDysplayComent ] = useState(false);
    let urlTrailerYoutube ;
    let urlDataTrailer = `https://api.themoviedb.org/3/movie/${datosPeli.idPeli}/videos?api_key=bfb974e89e4e9ffecd6c9f124bd05ec0&language=es`
    const [dataTrailer, setDataTrailer] = useState([])
    const [ResultSearhc, setRS] = useState(false);
    const datos = re[0]
    let urlImage, titulo,fechaEstreno, puntuacion,sinopsis,estado,lenguajeOriginal,linkTrailerOficial;
    let urlDatoId = `http://api.themoviedb.org/3/movie/${datosPeli.idPeli}?api_key=bfb974e89e4e9ffecd6c9f124bd05ec0&language=es`
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
    const getComents = function(){
        useEffect(() => {
 
        
          return () => {
            svCom.getFilmComments(datosPeli.idPeli).then(res => {
                console.log("COMENTARIOS ", res["0"])
                setComent(res["0"].comments)
            }
            )}
        }, [])
    
      
    }
   getComents()
   console.log(dataComent)
    const obtenerDatosVideosTrailer=  useEffect(() => {
        return () => {
            fetch(urlDataTrailer).then(response => response.json()).then(data => {setDataTrailer(data["results"])
                console.log(data)}).
                catch(error => console.log(error))
        }
    }, [])
 
    try{
        obtenerDatosVideosTrailer
        console.log(dataTrailer)
        let KeyTrailer = dataTrailer[dataTrailer.length-1]["key"]
        console.log(KeyTrailer)
        urlTrailerYoutube=(`https://www.youtube.com/watch?v=${KeyTrailer}`)
    }catch{
        console.log("error al leer la key")
    }
   
    try {
        urlImage = `https://image.tmdb.org/t/p/w500${datos.poster_path}`
        titulo = datos.title
        fechaEstreno = datos.release_date
        puntuacion =datos.vote_average
        sinopsis = datos.overview
        estado = datos.status
        lenguajeOriginal = datos.original_language
        linkTrailerOficial=datos.homepage;
            if(urlTrailerYoutube == undefined){
                console.log("No hay trailer")
            }
    } catch {
            console.log("error al cargar los datos")
    }
    

    const dysplayComentSent = function(){
         document.getElementById("cajon-createcomenet").style.display = "flex";
        
    } 
    console.log(datosPeli.idPeli + "IdPEliCOn")
    return (
        <>
        <CajonCreateComent idPeli={`${datosPeli.idPeli}`}></CajonCreateComent>
        
            <Menu></Menu>
            
            <Suspense fallback={null}> 
            <div className="caja-peli-pc">
                <div className="caja-principal-pc">
                    <div className="caja-imagen-pc">
                    <Suspense fallback={<Loader></Loader>}>
                        {         
                            Ft.HaveImage(urlImage)
                        }
                         </Suspense>
                         <div className="lineaPuntucaion">
                         <HoverPunt idFilm={datosPeli.idPeli}></HoverPunt>
                         </div>
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
                                    <h4>D.original: {lenguajeOriginal}</h4>
                                </div>
                                <div >
                                    <h5 className="cajon-puntuacion">IMB<h5>{puntuacion}/10</h5></h5>
                                </div>
                            </div>
                            <p className="sinopsis-pc">{sinopsis} </p>
                        </div>
                        {
                           Ft.HaveATrailer(urlTrailerYoutube,linkTrailerOficial)   
                        }  
                    </div>
                </div>
                
            </div>
          
            <div className="tituloComent">
                <h1>Comentarios</h1>
                <button onClick={dysplayComentSent} id="btnUpComent">+</button>
            </div>
           
            <div className="Caja-comentario">
               {
                dataComent.map((comments) => {

                    return <Comentario key={coment._id} user={comments.username} comment={comments.comment}></Comentario>

                })
               }
            </div>
            </Suspense>
            <MenuBot></MenuBot>
        </>
    )
}