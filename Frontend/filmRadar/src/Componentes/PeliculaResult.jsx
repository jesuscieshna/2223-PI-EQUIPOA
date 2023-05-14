
import { NavLink, useParams } from "react-router-dom"
import imagen from "../assets/Avatar_El_sentido_del_agua-722646748-large.jpg"
import "./style/pelicularesult.css"
export default function PeliculaResult(props){
      
        let urlImage=`https://image.tmdb.org/t/p/w500${props.pathUrlImage}`

       

    return (
        <>
            <div  className="cajon-prinicipal-prs" >
                <div className="titulo-peli-rsh" > 
                    <h3>{props.titulo}</h3>
                </div>
                
                <div className="cajon-img-prs">
                    <img src={urlImage}></img>
                </div>
                <div className="cajon-verMas-prs">
                    <NavLink to="/PeliConcret">Ver más</NavLink>

                </div>


            </div>

        </>

    )


}