# INSTRUCCIONES
### Los node modules **NO** se incluyen en el repo (por eso estan en el .gitignore). Para añadirlos:
-Haced pull del repo y después ejecutais el script: => **```pnpm run installAll```**
>Al hacer pull actualizais los package.json (guarda las dependencias entre otras cosas). Y después **```pnpm run installAll```** instala esas dependencias en cada uno de los directorios

## <br />Para ejecutar
dentro de la carpeta backend
**```pnpm run daemon```** <br />
script para ejecutar nodemon

# <br />INFO
## Dependencias
<br />BACKEND
<br />**Express:** Para levantar la página y configurarla <br />
**Dotenv:** Para manejar variables de entorno en el proyecto<br />
**Cors:** Para temas de configuarción del navegador y el cors<br />
**Nodemon:** Para reejecutar node tras guardado del proyecto<br />
**Mongoose:** Conexión con base de datos mongo y la generación de esquemas<br />