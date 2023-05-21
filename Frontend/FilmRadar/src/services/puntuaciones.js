const port=3004 //TODO solucionar dotenv en vite

async function getNotas(){
    const response = await fetch(`http://localhost:${port}/api/punctuations`);
    const notas = await response.json();
    return notas;
}

async function putNota(user, idFilm, nota){
    const response = await fetch(`http://localhost:${port}/api/punctuations/${user}`,{
        method:'POST',
        body: JSON.stringify({
            idFilm: idFilm,
            nota: nota
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    const respuesta = response.json()
    return respuesta 
}

export default {getNotas, putNota}