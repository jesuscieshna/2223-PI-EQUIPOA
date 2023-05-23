import "../Paginas/style/Perfil.css"
import CuadroPeliRanking from "./CuadroPeliRanking"

export default function ListaRanking(props){


    const datosPeli = props.dataPunt;
   
 
   
    const uniqueFilms = {}; // Objeto auxiliar para rastrear los valores únicos de "film"
    const datosSinDuplicados = [];
    
    for (const objeto of datosPeli) {
      const film = objeto.film;
      if (!uniqueFilms[film]) {
        uniqueFilms[film] = true;
        datosSinDuplicados.push(objeto);
      }
    }
        
    
    


   
    return(
        <ul className="cajon-Raanking">
            {
             
              datosSinDuplicados.map((peli, id) => {
                
                if(peli != undefined) {
                    return <CuadroPeliRanking key={id} film={peli.film} puntuacion={peli.puntuation}></CuadroPeliRanking>
                }
                   
               })
             
            }    
               
        </ul>
    )
    
}