import MenuBot from "../Componentes/MenuBot"
import Menu from "../Componentes/Menu"
import "./style/TopPelis.css"
import Top from "../Componentes/Top"
export default function TopPelis(){
    return (
    <>
    <Menu titulo="TopPelis"></Menu>
        
    <div className="cuerpo-principal">
        <ol className="listTop">
            <Top></Top>
            <Top></Top>
        </ol>
        
    </div>
        
    <MenuBot></MenuBot>
       
    
    </>
        
    )
}