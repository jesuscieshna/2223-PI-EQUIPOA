import "./styleComponet/Menu.css"
import busqueda from "./assests/icons8-búsqueda.svg"


  



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
            </header>

        </>


    )

}