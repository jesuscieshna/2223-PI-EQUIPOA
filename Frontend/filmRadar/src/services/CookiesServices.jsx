import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie/cjs/Cookies"


const verifiCookiesUnserName = function (){

    const cookies = new Cookies();
    const navigator = useNavigate();

    if(cookies.get("username")==null){
        navigator("/InicioSesion")
    }
}
const getUserNameForCookies = function(){
    const cookies = new Cookies();    
    return cookies.get("username"); 


}
export  default {
    verifiCookiesUnserName,
    getUserNameForCookies,
}