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


await dbConnect()
console.log("Conectado a base de datos")

const pepe = new models.usermodel({
    username:"Angel",
    email:"ange@jh.com",
    password:"asdasd"
})


const usuarios = async () => {
    const data = (await fetch("http://localhost:3004/api/users")).json()
    console.log(data)
    return data
}



pepe.save()
