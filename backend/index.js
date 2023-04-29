import express from "express";
import "dotenv/config.js";
import cors from "cors";

const app = express();

app.use(cors());

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})