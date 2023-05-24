
import Menu from "../../../filmRadar/src/Componentes/Menu"
import ImagenUserSinFoto from "../assets/blank-profile-picture-973460_640.webp"
import MenuBot from "../Componentes/MenuBot"
import "./style/Perfil.css"
import svck from "../services/CookiesServices"
import svPunt from "../services/puntuaciones"
import Cookies from "universal-cookie"
import CuadroPeliParaVer from "../Componentes/CuadroPeliRanking"
import CuadroPeliRanking from "../Componentes/CuadroPeliRanking"
import { useEffect, useState } from "react"
import ListaRanking from "../Componentes/LsitaRanking"
export default function Perfil() {

    svck.verifiCookiesUnserName()
    const nombre= svck.getUserNameForCookies()
    const  [dataPuntucion, setDatPunt] = useState([])

    const getDataPunt = async function(){
        svPunt.getNotas().then(res => {
       
            setDatPunt(res)
        })

    }
    useEffect(() => {
  
     getDataPunt()
    }, [])
    


    return (
        <>
            <Menu titulo="Perfil" ></Menu>
            
                <div className="cajon-imagen-pag-perfil">
                    <img src={ImagenUserSinFoto}></img>
                    <h1 className="nombre-user">{nombre}</h1>
                </div>
                <samp className="Separadot-ranking-user"></samp>
                <div className="texto-ranking-perfil">
                    <h2>Ranking</h2>
                    {
                        dataPuntucion.map((datos,id) => {
                            
                           
                            if(datos.username === nombre){
                                return  <ListaRanking dataPunt = {datos.puntuations} key={id} user={nombre}></ListaRanking>
                            }
                           
                        })
                        

                    }

                </div>
            <MenuBot></MenuBot>
        </>
    )
}