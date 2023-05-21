function comprobarEstructuraEmail(estrucutraEmail,emailData){
    if(emailData.includes(estrucutraEmail)){

        return true;
    }else{

        return false;
    }
} 
function comprobarUserExit(usuarios, usernameData,emailData){
      
       
    let filter= usuarios.filter(user => user.username ==usernameData)
    let secondfilter = filter.filter(users => users.email == emailData)

     if (filter.length < 1 || secondfilter.length < 1) {
        return true; 
    }else{
    return false;
    }
}

export default {
    comprobarEstructuraEmail,
    comprobarUserExit,

}
