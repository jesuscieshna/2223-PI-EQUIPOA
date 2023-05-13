
import Menu from "../../../filmRadar/src/Componentes/Menu"
import ImagenUserSinFoto from "../assets/blank-profile-picture-973460_640.webp"
import MenuBot from "../Componentes/MenuBot"
import "./style/Perfil.css"
import flechaAbajo from "../assets/icons8-flecha-contraer-30.png"
import ParaVerPerfil from "../Componentes/ParaVerPerfil"

export default function Perfil() {

    return (
        <>
            <Menu titulo="Perfil" ></Menu>
            <body className="cuerpo-principal-perfil">

                <div className="cajon-imagen-pag-perfil">
                    <img src={ImagenUserSinFoto}></img>
                    <h1 className="nombre-user">Angel Acedo</h1>
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