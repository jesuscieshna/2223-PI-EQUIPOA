import "./style/cuadroPeliParaVer.css"
import ImageParaVer from "../assets/Avatar_El_sentido_del_agua-722646748-large.jpg"
import EstrellaRellena from "../assets/icons8-estrella-rellena.png"
import EstrellaVacia from "../assets/estrella.svg"
import { NavLink } from "react-router-dom"
import {  useEffect, useState } from "react"
import ft from "../funtions/functions"
import ButonVermas from "./vermasBoton"
export default function CuadroPeliRanking(prop){
    const IdPeli= prop.film
    let urlImage
    const [dataMovies, setRe] = useState([])
    if(IdPeli !=  undefined){
        console.log(IdPeli)
        let urlDatoId = `http://api.themoviedb.org/3/movie/${IdPeli}?api_key=bfb974e89e4e9ffecd6c9f124bd05ec0&language=es`
        useEffect(() => {
            return () => {
                fetch(urlDatoId).
                    then(response => response.json()).then(data => {
                        setRe([data])
                        
                    
                    })
                    .catch(error => console.log(error))
            }
        }, [])
        try{
            console.log(dataMovies)
            urlImage = `https://image.tmdb.org/t/p/w500${dataMovies[0]["poster_path"]}`
        }catch(error){
            console.log("Error al obtener los datos")
        }
       
    }
   
   

    return (
        <li className="caja-superior-cuadro-para-ver">

                <div className="principal-pv">
                    <h6>{prop.puntuacion}</h6>
                    <div className="cjpv-image">
                      {
                        ft.HaveImage(urlImage)
                      }
                    </div>
                    <div className="cjpv-ver">
                      <ButonVermas id={IdPeli} ></ButonVermas>
                    </div>
                </div>
            </li>
    )
    }
