import "./styleComponet/MenuBot.css"
import  home from  "./assets/icons8-casa.svg"
import favorito from "./assets/estrella.svg" 
import top from "./assets/estrella-del-trofeo.svg"
import usuario from "./assets/1564534_customer_man_user_account_profile_icon.svg"
export default function MenuBot() {

    return (
        
            <div className="menu_bot"> 
                <button><img  src={home} width={"20px"} height={"20px"} ></img></button>

                <button><img src={favorito}width={"20px"} height={"20px"}></img></button>
                <button><img src={top} width={"20px"} height={"20px"}></img></button>
                <button><img src={usuario} width={"20px"} height={"20px"}></img></button>
            </div>


        


    )
}