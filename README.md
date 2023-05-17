2223-PI-EQUIPO-A 

# FILM RADAR
## [Figma del proyecto](https://www.figma.com/proto/z9CoecW5NXQSLS44S0t7dD/Pagina-Pelis?node-id=11-3&scaling=scale-down&page-id=0%3A1)

## <br />ROLES:

### <br />VISTA

Ángel Acedo.
>Junto a Ángel habrá otro integrante cuando implementemos REACT.

### <br />CONTROL

Jesús Chavero.

### <br />MODELO DE DATOS

Juan María Rangel y David Fernández. <br />
<br />

>Los roles pivotarán entre si para realizar tareas y ayudar en otros roles.

## <br /><br />INTRODUCCIÓN

Aplicación MERN para la búsqueda, clasificación y puntuación de películas. Utilizando la api de IMDB y base de datos mongoDb. Se dará acceso a un registro de infinidad de películas, además de poder generar rankings y compartirlos con otros usarios

## <br />DETALLES

### **Objetivos principales:**
-El usuario podrá crear una cuenta. <br />
-El usuario podrá buscar por nombre y  categoría películas .<br />
-El usuario podrá poner nota a una película, con lo que la página generará automáticamente un ranking con estas. <br />
-El usuario podrá agregar comentarios a una película. <br />
-El usuario podrá guardar películas en un apartado *"por ver"*. <br />


### <br />**Objetivos secundarios:**
-Buscar por actor o director. <br />
-Acceder a rankings de otros usuarios, comentarios ...

## <br />ESTRUCTURA DE DATOS

BASE DE DATOS MONGO INTERNA<br />
Users<br />
-username:string unique <br />
-email: string unique <br />
-password: string <br />

Puntuations <br />
-username:string<br />
-films[{ <br />
    film:string <br />
    Puntuation:number <br />
}]<br />

Comments <br />
-username <br />
-films[{ <br />
    film:string <br />
    comment:string <br />
}] <br />
<br />
En cuanto a la fuente de datos externa usaremos la API de TMDB para obtener las películas (títulos, portadas, categorías, director, reparto...).
[TMDB API info](https://developer.themoviedb.org/reference/intro/getting-started)









