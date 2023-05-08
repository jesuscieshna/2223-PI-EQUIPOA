import {sayHello} from "./functions.js";
import express from "express";
import "dotenv/config.js";
import cors from "cors";
import dbConnect from "./config/mongodb.js";

const app = express();

app.use(cors());

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
    sayHello()
})

await dbConnect()
console.log("Conectado a base de datos")