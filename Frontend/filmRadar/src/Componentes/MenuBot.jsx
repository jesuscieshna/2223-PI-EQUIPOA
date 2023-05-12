import { NavLink } from "react-router-dom";
import "./style/MenuBot.css"
import Inicio from "../assets/icons8-casa.svg"
import Favoritos from "../assets/estrella.svg"
import TopPelis from "../assets/estrella-del-trofeo.svg"
import Perfil from "../assets/1564534_customer_man_user_account_profile_icon.svg"
export default function Toppelis() {

    return (

        <>
            <div className="MenuBot">

                <NavLink to="/"><img src={Inicio}></img></NavLink>
                <NavLink to="/Favoritos"><img width={"50px"} src={Favoritos}></img></NavLink>

                <NavLink to="/TopPelis"><img width={"50px"} src={TopPelis} /></NavLink>

                <NavLink to="/Perfil"><img width={"50px"} src={Perfil} /></NavLink>


            </div>


        </>


    )

}