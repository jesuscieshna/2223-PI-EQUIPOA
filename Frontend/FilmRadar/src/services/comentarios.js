const port=3004 //TODO solucionar dotenv en vite

async function getFilmComments(idFilm) {
    const response = await fetch(`http://localhost:${port}/api/users/${idFilm}`);
    const comment = await response.json();
    return comment;
}

async function createComment(idFilm, user, comment){
    const response = await fetch(`http://localhost:${port}/api/users/${idFilm}`,{
        method:'POST',
        body: JSON.stringify({
            username:user,
            comment:comment
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    const respuesta = response.json()
    return respuesta
}

export default { getFilmComments , createComment}