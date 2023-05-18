
const port = 3004
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

    console.log(usernameData,emailData,passwordData)
    const response = await fetch(`http://localhost:${port}/api/users`, {
        method: 'POST',
        body: JSON.stringify({
            username: usernameData,
            email: emailData,
            password: passwordData
        })
    })
    let respuesta = response.json()
    console.log(respuesta)
}

export default {getUsers, getUser, createUser} 