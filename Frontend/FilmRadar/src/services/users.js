
const port = 3004 //TODO
async function getUsers() {
    const response = await fetch(`http://localhost:${port}/api/users`);
    const users = await response.json();
    return users;
}

async function getUser(nombre) {
    const response = await fetch(`http://localhost:${port}/api/users/${nombre}`);
    const user = await response.json();
    return user;
}

async function createUser(usernameData, emailData, passwordData){
    try{
    const response = await fetch(`http://localhost:${port}/api/users`,{
        method: 'POST',
        body: JSON.stringify({
            username: usernameData,
            email: emailData,
            password: passwordData,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    let respuesta = response.json()
    console.log(respuesta)
    }catch(error){
        console.log(error)
    }
 
}

export default {getUsers, getUser, createUser} 