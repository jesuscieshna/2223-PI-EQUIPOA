import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie/cjs/Cookies"


const verifiCookiesUnserName = function (){

    const cookies = new Cookies();
    const navigator = useNavigate();

    if(cookies.get("username")==null){
        navigator("/InicioSesion")
    }
}
export  default {
    verifiCookiesUnserName,
}