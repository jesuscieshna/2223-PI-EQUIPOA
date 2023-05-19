import {getFilmComments} from "../services/comentarios"
const length = 255 //TODO pillarlo de variables de entorno

//TODO COmprobar que el metodo funciona correctamente
async function isCommentCreated(idFilm){
    const data = await getFilmComments(idFilm);
    if(Object.keys(data)>0){
        return true
    }
    return false
}

/*
commentLength
get comment text
return false if length isnt valid
return true if is valid
*/
async function commentLength(text){
    if(text.length>length){
        return false
    }
    return true
}

export default {isCommentCreated, commentLength}

