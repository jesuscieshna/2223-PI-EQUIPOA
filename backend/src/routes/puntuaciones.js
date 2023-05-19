import express from "express"
import punctuationController from "../controllers/puntuaciones.js"

const routePunctuation = express.Router()
routePunctuation.get('/', punctuationController.getItems)
routePunctuation.post('/', punctuationController.cretaeItems)


export default routePunctuation;