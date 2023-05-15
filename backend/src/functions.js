
import { response } from "express";
function sayHello(){
    console.log("Texto de prueba para comprobar que la funcion sayHello se exporta e importa correctamente desde el archivo functions.js")
}

function sayHello2(){
    
    console.log("hello2")
}


function returnMovieSearch(name){
    const api_key = process.env.API_KEY
   /*  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}/)`) */
    console.log(api_key);
    var re;
    const data=null;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}`).
        then(response => response.json()).then((data) => {
            re= data;
            console.log(re);
        } )
        .catch(error => console.log(error))
    return(re)
}
const usuarios = async () => {
    const data = (await fetch("http://localhost:3004/api/users")).json()
    console.log(data)
    return data
}

export {
    usuarios,
    sayHello,
    sayHello2,
    returnMovieSearch,
}

