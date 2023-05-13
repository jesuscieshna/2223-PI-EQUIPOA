import "./style/pagNOTfound.css"
import Menu from "../Componentes/Menu"
import MenuBot from "../Componentes/MenuBot"
export default function PageNotFound(){

    return(

            <>
                <Menu></Menu>
                <div className="cuerpo-nF">


                    <h1 className="error">Error 404</h1>
                    <h2 className="mensaje-error">No se pudo encontrar esa pagina</h2>
                    


                </div>
                <MenuBot></MenuBot>
            </>

    )



}
