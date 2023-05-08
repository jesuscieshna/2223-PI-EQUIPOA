import "./styleComponet/Menu.css"
import busqueda from "./assets/icons8-búsqueda.svg"


  



export default function Menu() {

    return (

        <>
            <header className="caja-menu">
                <img width={"20px"} height={"20px"} src=""></img>
                
                <h1 className="titulo">INICIO</h1>
                <div className="caja-buscaddor">
                    <input  id="buscador"className="buscador" placeholder="Buscame"></input>
                    <img  className="Lupa"id="botonLupa"  src={busqueda}></img>
                </div>
                <div className="BotonesMenTop">
                    <button>Inicio</button>
                    <button>Favoritos</button>
                    <button>TopPelis</button>
                    <button>Perfil</button>
                </div>
            </header>

        </>


    )

}