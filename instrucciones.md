# INSTRUCCIONES
### Los node modules **NO** se incluyen en el repo (por eso estan en el .gitignore). Para añadirlos:
-Haced pull del repo y después en la terminal del proyecto => **```pnpm install```**
>Al hacer pull actualizais el package.json (guarda las dependencias entre otras cosas). Y después **```pnpm install```** instala esas dependencias
#### Si esto no funciona puede ser porque no tengais instalado pnpm. Para instalarlo de manera global:
**```npm install -g pnpm```**
### Las variables de entorno tampoco irán al repo. estarán en Discord


## <br />Para ejecutar
**```pnpm run daemon```** <br />
script para ejecutar nodemon


# <br />INFO
## Dependencias
**Express:** Para levantar la página y configurarla <br />
**Dotenv:** Para manejar variables de entorno en el proyecto<br />
**Cors:** Para temas de configuarción del navegador y el cors<br />
**Nodemon:** Para reejecutar node tras guardado del proyecto