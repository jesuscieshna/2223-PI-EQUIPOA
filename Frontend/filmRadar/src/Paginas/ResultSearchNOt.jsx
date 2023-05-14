import Menu from "../Componentes/Menu";
import MenuBot from "../Componentes/MenuBot"
import "./style/resultSearchNot.css"

export default function ResultSearchNot(){


    return(
        <>
        
            
        <Menu></Menu>
                <div className="cuerpo-rsn">


                    <h1 className="error-rsn">Busqueda Invalida</h1>
                    <h2 className="mensaje-rsn">Introduzca el titulo de nuevo por favor</h2>
                    


                </div>
        <MenuBot></MenuBot>
        
        </>

        

    )

}