import MenuBot from "../Componentes/MenuBot"
import Menu from "../Componentes/Menu"
import "./style/TopPelis.css"

import React, { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Componentes/loader";
const Top = React.lazy(() =>import("../Componentes/Top.jsx"))

export default function TopPelis() {
    const navigate = useNavigate();



    const api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"

    const [re, setRe] = useState([]);
    const [ResultSearhc, setRS] = useState(false);
   
    useEffect(() => {


        return () => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es`).
                then(response => response.json()).then(data => {
                    setRe([data])
                    var total_results;
                    var total_page;

                   
                    total_results = data["total_results"] ? true : false;
                    total_page = data["total_pages"];

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
            <Menu titulo="TopPelis"></Menu>

            <div className="cuerpo-principal">
                <ol className="listTop">
                    <Suspense fallback={<Loader></Loader>}>
                    {
                        
                            data.map((peli, i) => {
                                if(i<10){
                                    return <Top fechaEstreno={peli["release_date"]} puntuacion={peli["vote_average"]} titulo={peli["title"]}
                                    key={i} pathUrlImage={peli["poster_path"]}  numeroPos={i} haveTrailer={peli[""]}
                                  id={peli["id"]}></Top>
                                }
                             
                            })
                          
                    }
                    </Suspense>
                </ol>

            </div>

            <MenuBot></MenuBot>


        </>

    )
}