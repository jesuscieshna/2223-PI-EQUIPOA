import MenuBot from "../Componentes/MenuBot"
import Menu from "../Componentes/Menu"
import "./style/TopPelis.css"

import React, { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Componentes/loader";
import svCk from "../services/CookiesServices"
const Top = React.lazy(() =>import("../Componentes/Top.jsx"))

export default function TopPelis() {
    const navigate = useNavigate();

    svCk.verifiCookiesUnserName();

    const api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"

    const [re, setRe] = useState([]);
    const [ResultSearhc, setRS] = useState(false);
    const [page, setPage] = useState(0);
    const [total_results, setTotalResults] = useState(0);
    const [isloading, setIsLoading] = useState(true);
    function followPage(){
        if(page<total_results){
            document.getElementById("botonMostrarMas").style.display="none";
            document.getElementById("Cargador").style.display="block";
            setTimeout(() => {
              if(isloading==true){
                document.getElementById("Cargador").style.display="none";
                document.getElementById("botonMostrarMas").style.display="block";
              }
              if(page==total_results-1){
                document.getElementById("botonMostrarMas").style.display="none";
                document.getElementById("Cargador").style.display="none";
              }
              setPage((page) => page+1)
             }, 1000 );
        }  
        }
    useEffect(() => {


        return () => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${page+1}&language=es`).
                then(response => response.json()).then(data => {
                    if(page==0){

                        setRe(data["results"])
                    }else{
                        setRe((previeMovis) => previeMovis.concat(data["results"]))

                    }
                    console.log(page)
                    console.log(re)
                    var total_results;
                    var total_page;
                    
                   
                    total_results = data["total_results"] ? true : false;
                    total_page = data["total_pages"];
                    setTotalResults(data["total_results"])
                    setRS(total_results)
                })
                .catch(error => console.log(error))

        }
    }, [page])
    
 
    let data = [];
    if (ResultSearhc == false) {

   
        navigate("/ResultSearchNot")
    }


    return (
        <>
            <Menu titulo="TopPelis"></Menu>

            <div className="cuerpo-principal-top">
                <ol className="listTop">
                   
                    {
                        
                            re.map((peli, i) => {
                               
                             
                                    return <Top fechaEstreno={peli["release_date"]} puntuacion={peli["vote_average"]} titulo={peli["title"]}
                                    key={i} pathUrlImage={peli["poster_path"]}  numeroPos={i} haveTrailer={peli[""]}
                                  id={peli["id"]}></Top>
                          

                             
                            })
                          
                    }
                 
                </ol>
                <Suspense fallback={<Loader></Loader>}>
                <div id="botonMostrarMas">
                  <button className="botonMostrarMas" onClick={followPage}>Mostrar más</button>
                </div> 
                </Suspense>
                   
            </div>
                <div id="Cargador"className="anim-box">
                      <div className="anim-interieur">
                          <div className="rect rect1"></div>
                          <div className="rect rect2"></div>
                          <div className="rect rect3"></div>
                          <div className="rect rect4"></div>
                          <div className="rect rect5"></div>
                      </div>
                </div>
            
                    
            <MenuBot></MenuBot>


        </>

    )
}