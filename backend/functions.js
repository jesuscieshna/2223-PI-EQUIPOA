function sayHello(){
    console.log("Texto de prueba para comprobar que la funcion sayHello se exporta e importa correctamente desde el archivo functions.js")
}

function sayHello2(){
    console.log("hello2")
}

export {
    sayHello,
    sayHello2,
}