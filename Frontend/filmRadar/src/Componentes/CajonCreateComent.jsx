import "./style/cajonCreateComent.css"
export default function CajonCreateComent(){

    return(

        <div className="cajon-createcomenet">
            <form  className="form-createComent"> 
            <div>
                 <h1>Tu Comentario</h1>
                <textarea type="text" className="textBox"     minLength={10} placeholder="Escribe tu comentario aqui" maxLength={255}></textarea>
               
            </div>
            <input className="btnEnviar" type="submit" value={"Enviar"}></input>
               
            </form>
        </div>

    )
}