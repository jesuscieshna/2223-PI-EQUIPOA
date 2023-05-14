import { useParams } from "react-router-dom"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
import PeliculaResult from "../Componentes/PeliculaResult"
import "./style/paginaPeli.css"        
                                                         



import { useEffect,  useState } from "react"

export default function PagPeli(){

    let {searh} = useParams();
    console.log(searh)
       
        const api_key = "bfb974e89e4e9ffecd6c9f124bd05ec0"
        
       const [re, setRe]= useState([]);
     
        
     useEffect(() => {
        
     
       return () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searh}`).
        then(response => response.json()).then(data => setRe([data]))        
        .catch(error => console.log(error))
        
       }
     }, [])
     


    
     let data=[];
    re.map((peli)=> {
        
        
        data=peli["results"]
        
    })
   
   
 
    
    
      


    return(
        <>
            <Menu titulo={"Resultados"}></Menu>
            <ul className="pelisResulSearch">


              {
                data.map((peli, i)=> {
                
                 
                  return <PeliculaResult titulo={peli["title"]} key={i} pathUrlImage={peli["poster_path"]}></PeliculaResult>
                })


              }
              
              

            </ul>
            <MenuBot></MenuBot>
        </>
    )
}