import {getFilmComments} from "../services/comentarios"
//TODO COmprobar que el metodo funciona correctamente
async function isCommentCreated(idFilm){
    const data = await getFilmComments(idFilm);
    if(Object.keys(data)>0){
        return true
    }
    return false
}

export default {isCommentCreated}