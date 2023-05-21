
import Menu from "../../../filmRadar/src/Componentes/Menu"
import ImagenUserSinFoto from "../assets/blank-profile-picture-973460_640.webp"
import MenuBot from "../Componentes/MenuBot"
import "./style/Perfil.css"
import svck from "../services/CookiesServices"
import ParaVerPerfil from "../Componentes/ParaVerPerfil"
import Cookies from "universal-cookie"
export default function Perfil() {

    svck.verifiCookiesUnserName()
   const nombre= svck.getUserNameForCookies()

    return (
        <>
            <Menu titulo="Perfil" ></Menu>
            <body className="cuerpo-principal-perfil">
                <div className="cajon-imagen-pag-perfil">
                    <img src={ImagenUserSinFoto}></img>
                    <h1 className="nombre-user">{nombre}</h1>
                </div>
                <samp className="Separadot-ranking-user"></samp>
                <div className="texto-ranking-perfil">
                    <h2>Ranking</h2>
                </div>

                <div className="caja-rankis-objects">
                    <h3 className="tituo-prf-fav">Para ver</h3>
                    <div className="cajon-por-ver">
                       <ParaVerPerfil></ParaVerPerfil>
                    </div>
                </div>


            </body>
            <MenuBot></MenuBot>
        </>
    )
}