import express from "express";
import commentController from "../controllers/comentarios.js"

const routeuser = express.Router()
routeuser.get('/:film', commentController.getItem)
routeuser.post('/:film', commentController.createItem)
routeuser.post('/update/:film', commentController.updateItem)
routeuser.get('/', commentController.getItems)



export default routeuser;