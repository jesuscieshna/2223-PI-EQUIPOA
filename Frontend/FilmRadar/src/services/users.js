
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

    function comprobarUserExit(){
        console.log(usuarios)
        console.log(usernameData,emailData,passwordData);
       
       let filter= usuarios.filter(user => user.username ==usernameData)
       let secondfilter = filter.filter(users => users.email == emailData)
       console.log(filter,secondfilter)
        if (filter.length < 1 || secondfilter.length < 1) {
           return true; 
        }else{
            return false;
        }
    }
    function comprobarEstructuraEmail(estrucutraEmail,emailData){
        if(emailData.includes(estrucutraEmail)){
            console.log("contiene")
            return true;
        }else{
            console.log("no contirne")
            return false;
        }
    } 
        
    if( comprobarUserExit() == true && comprobarEstructuraEmail(estrucutraEmail,emailData) == true){
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
export default {getUsers, getUser, createUser} 