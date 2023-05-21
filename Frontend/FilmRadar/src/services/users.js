
import usersManagment from "../utils/usersManagment"
 
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
    let estrucutraEmail="@gmail.com"
    let usuarios=[];
    await  getUsers().then(users => {
        usuarios=users
    });
  
        
    if( usersManagment.comprobarUserExit(usuarios,usernameData,emailData)== true && usersManagment.comprobarEstructuraEmail(estrucutraEmail,emailData) == true){
            const response = await fetch(`http://localhost:${port}/api/users`,{
                method: 'POST',
                body: JSON.stringify({
                    username: usernameData,
                    email: emailData,
                    password: passwordData,
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            let respuesta = await response.json()
            return true
        }else{
            return false
        }

}

async function addPorVer(usernameData, idFilm){
    const response = await fetch(`http://localhost:${port}/api/users/update`,{
        method:'POST',
        body: JSON.stringify({
            username:usernameData,
            idFilm:idFilm
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    const respuesta = response.json()
    return respuesta
}

export default {getUsers, getUser, createUser, addPorVer} 