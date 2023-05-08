import {sayHello} from "./functions.js";
import express from "express";
import "dotenv/config.js";
import cors from "cors";
import dbConnect from "./config/mongodb.js";
import routeuser from "./routes/users.js";

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

