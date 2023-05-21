import express from "express"
import punctuationController from "../controllers/puntuaciones.js"

const routePunctuation = express.Router()
routePunctuation.get('/', punctuationController.getItems)
routePunctuation.post('/:user', punctuationController.pushItem)


export default routePunctuation;