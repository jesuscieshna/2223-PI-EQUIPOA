import express from "express";
import commentController from "../controllers/comentarios.js"

const routeuser = express.Router()
routeuser.get('/:film', commentController.getItem)
routeuser.post('/update/:film', commentController.pushItem)
routeuser.get('/', commentController.getItems)



export default routeuser;