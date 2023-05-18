import { json } from "express";

const port = process.env.PORT

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

async function createUser(user){
    const response = await fetch(`http://localhost:${port}/api/users`, {
        method: 'POST',
        body: json.stringify(user)
    })
    respuesta = response.json()
    console.log(response)
}

export default {getUsers, getUser, createUser}