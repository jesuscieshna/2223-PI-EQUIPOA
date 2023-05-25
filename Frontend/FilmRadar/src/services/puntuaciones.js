const port=3004 //TODO solucionar dotenv en vite

async function getNotas(){
    const response = await fetch(`https://lm2223equipoa.onrender.com/api/puntuations`);
    const notas = await response.json();
    return notas;
}

async function putNota(user, idFilm, nota){
    const response = await fetch(`https://lm2223equipoa.onrender.com/api/puntuations/${user}`,{
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