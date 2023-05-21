
import { Suspense } from "react"
import "./style/comentario.css"
export default function Comentario(props) {


    return (

        <Suspense fallback={null}>
            <div className="caja-comentBOx">
                <span className="UserNameComent">
                    <h6>{props.user}</h6>
                </span>
                <div className="comentBOXtext">
                <p  className="textComent">{props.comment}
                 </p>
                 </div>
            </div>
        </Suspense>



    )


}