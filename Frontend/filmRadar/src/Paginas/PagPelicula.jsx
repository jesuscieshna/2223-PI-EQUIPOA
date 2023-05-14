import { useParams, useNavigate } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import PeliculaResult from "../Componentes/PeliculaResult"
import "./style/paginaPeli.css"




import { useEffect, useState } from "react"

export default function PagPeli() {
  const navigate = useNavigate();
  let { searh } = useParams();


  const api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"

  const [re, setRe] = useState([]);
  const [ResultSearhc, setRS] = useState(false);
  let page = 1;
  useEffect(() => {


    return () => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searh}&page=${page}`).
        then(response => response.json()).then(data => {
          setRe([data])
          var total_results;
          var total_page;

          console.log(data)
          total_results = data["total_results"] ? true : false;
          total_page = data["total_pages"];

          console.log(total_page)
          setRS(total_results)
        })
        .catch(error => console.log(error))

    }
  }, [])

  


  let data = [];
  if (ResultSearhc != false) {

    re.map((peli) => {


      data = peli["results"]

    })
  } else {
    navigate("/ResultSearchNot")
  }








  return (
    <>
      <Menu titulo={"Resultados"}></Menu>
      <ul className="pelisResulSearch">


        {
          data.map((peli, i) => {
            return <PeliculaResult titulo={peli["title"]} key={i} pathUrlImage={peli["poster_path"]} id={peli["id"]}
            puntuacion={peli["vote_average"]}>


            </PeliculaResult>
          })
        }



      </ul>
      <MenuBot></MenuBot>
    </>
  )
}