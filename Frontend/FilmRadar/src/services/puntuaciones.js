const port=3004 //TODO solucionar dotenv en vite

async function getNotas(){
    const response = await fetch(`http://localhost:${port}/api/punctuations`);
    const notas = await response.json();
    return notas;
}

export default {getNotas}