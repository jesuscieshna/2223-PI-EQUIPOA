import { returnMovieSearch, sayHello } from "./functions.js";
import express, { response } from "express";
import "dotenv/config.js";
import cors from "cors";
import dbConnect from "./config/mongodb.js";
import routeuser from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json())
const port = process.env.PORT || 8001;

app.use('/api/users', routeuser)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

await dbConnect()
console.log("Conectado a base de datos")

