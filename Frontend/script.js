
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.toggle("loader2")
        document.getElementById("html").classList.remove("block-sroll");
        document.getElementById("html").classList.add("block-sroll2");
   
    },2000);
 
   

})

const $openClose = document.getElementById('open-close'), $aside = document.getElementById("aside");
 

$openClose.addEventListener("click",()=> {
    $aside.classList.toggle("desplegar")
    
})


const datos= {
   juan:{
    nombre:"Juan",
    contraseña:"12345"

   }
}


const $input_usuario= document.getElementById("input_usuario");
const $input_contraseña = document.getElementById("input_contraseña");


function verify_usuario() {
        
       Object.values(datos).forEach(usuario => {
        if(($input_usuario.value==usuario["nombre"]) && ($input_contraseña.value==usuario["contraseña"])){
            $input_usuario.style.backgroundColor="#7CFC00";
            $input_contraseña.style.backgroundColor="#7CFC00";
            setTimeout(() => {
                window.location.href="./index.html"
            }, 1000);
            
        }else{
            $input_usuario.style.backgroundColor="#FF0000";
            $input_contraseña.style.backgroundColor="#FF0000";
        }
        
        
        })
       
        

       }

       




    


