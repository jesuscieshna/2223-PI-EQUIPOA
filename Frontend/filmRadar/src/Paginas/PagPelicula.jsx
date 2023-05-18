import { useParams, useNavigate } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"

import React, { Suspense } from "react"
import "./style/paginaPeli.css"
import { useEffect, useState } from "react"
import Loader from "../Componentes/loader"
import InfiniteScroll from "react-infinite-scroll-component"

const PeliculaResult = React.lazy(() =>

  import("../Componentes/PeliculaResult")
)
export default function PagPeli() {
  const navigate = useNavigate();
  let { searh } = useParams();
  const [limitPage, setLimitPage] = useState(1);
  const  api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"
  const [total_results, setTotalResults] = useState(0);
  const [re, setRe] = useState([]);
  const [ResultSearhc, setRS] = useState(false);
  const [finPag, setFinpag] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);

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
        setPage((previeMovis) => previeMovis+1)
       }, 500 );
  }  
  }
  useEffect(() => {
    return () => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searh}&page=${page}&language=es`).
        then(response => response.json()).then(data => {
          setRe((previeMovis) => previeMovis.concat(data["results"]))
          var total_result;
          var total_page;
          setTotalResults(data["total_results"])
          total_result = data["total_results"] ? true : false;
          setTotalResults(data["total_results"])
          setLimitPage(total_page)
          setHasMore(data.page<data["total_pages"])
          setRS(total_result)
          setIsLoading(true)
        })
        .catch(error => console.log(error))

    }}, [page,searh]);
  
  

    if(ResultSearhc ==false){
      navigate("/ResultSearchNot")
    }
  return (
    <>     
      <Menu titulo={"Resultados"}></Menu>
          <Suspense fallback={<Loader></Loader>}>
                <ul className="pelisResulSearch">
                {
                    re.map((peli, id) => {
                      return (
                          <PeliculaResult  titulo={peli["title"]} key={peli["id"]} pathUrlImage={peli["poster_path"]} id={peli["id"]}
                          puntuacion={peli["vote_average"]}> </PeliculaResult>
                      )
                    })
                }
                </ul>
                <div>
              <div id="botonMostrarMas">
                  <button className="botonMostrarMas" onClick={followPage}>Mostrar más</button>
                </div>    
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
           </Suspense>
      <MenuBot></MenuBot>
    </>
  )
}