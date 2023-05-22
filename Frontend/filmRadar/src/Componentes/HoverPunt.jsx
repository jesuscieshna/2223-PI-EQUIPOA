import { useEffect, useState } from "react"
import "./style/hoverPunt.css"
import send from "../assets/icons8-email-send-24.png"
import ft from "../funtions/functions"
import svCk from "../services/CookiesServices"
export default function HoverPunt(props){
    const [puntUI, setPuntUI] = useState(0)
    const userName = svCk.getUserNameForCookies()
    const idFilm = props.idFilm;
   const setValue =(() => {
        
        let sliderV = document.getElementById("slider").value
        setPuntUI(sliderV)
      
    })
    const pushPunt = () => {
        ft.desView(puntUI,idFilm,userName)
    }
    return (
        <div className="cajon-puntUp ">
             <button id="ButV" className="ButV" onClick={ft.visuliceSlider}>Puntuar</button>
            <div id="PuntSlider"className="PuntSlider">
                <input id="slider" type="range" min={0} max={10} step={1} onChange={setValue} ></input>
                <h3  id="punt">{puntUI}</h3>
            </div>
            <button id="pushPunt" onClick={pushPunt} className="send"><img src={send}></img></button>
        </div>
    )
}