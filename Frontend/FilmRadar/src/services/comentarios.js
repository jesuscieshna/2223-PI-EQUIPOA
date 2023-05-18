import {isCommentCreated} from "../utils/CommentManagement"
const port=3004 //TODO solucionar dotenv en vite

async function getFilmComments(idFilm) {
    const response = await fetch(`http://localhost:${port}/api/users/${idFilm}`);
    const comment = await response.json();
    return comment;
}

async function createComment(idFilm, user, comment){
    console.log(idFilm,user,comment)
    if(isCommentCreated){
        const response = await fetch(`http://localhost:${port}/api/comment`, {
        method: 'POST',
        body: JSON.stringify({
            id: idFilm,
            comments:[{
                username:user,
                comment:comment
            }]
        }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        let respuesta = response.json()
        console.log(respuesta)
    }

    else{

        //TODO
        const response = await fetch(`http://localhost:${port}/api/comment`, {
        method: 'UPDATE',
        body: JSON.stringify({

        }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        let respuesta = response.json()
        console.log(respuesta)
    }
    
}

export default { getFilmComments , createComment}