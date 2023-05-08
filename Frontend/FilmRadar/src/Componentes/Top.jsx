import "./styleComponet/top.css"



export default function Top(titulo, fechaEstreno, director){

    return (
        <div className="cajon-top">
            <div>
                <img className="caratula"></img>
            </div>
            <div className="datos-top">
                <h1>{titulo} </h1>
                <h2>{fechaEstreno}</h2>
                <h2>{director}</h2>
                <div>
                    <button className="botonTrailer"></button>
                </div>
            </div>
        </div>


    )

}