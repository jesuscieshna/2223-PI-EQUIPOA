import { returnMovieSearch, sayHello } from "./functions.js";
import express, { response } from "express";
import "dotenv/config.js";
import cors from "cors";
import dbConnect from "./config/mongodb.js";
import routeuser from "./routes/users.js";
import models from "./models/index.js"
import routeUser from "./routes/users.js"

const app = express();

app.use(cors());

const port = process.env.PORT || 8001;

app.use('/api/users', routeuser)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
    sayHello()
})

await dbConnect()
console.log("Conectado a base de datos")

const pepe = new models.usermodel({
    username:"hsfk",
    email:"mksdf@jh.com"
})


const usuarios = async () => {
    const data = (await fetch("http://localhost:3001/api/users")).json()
    console.log(data)
    return data
}

console.log(await usuarios())
