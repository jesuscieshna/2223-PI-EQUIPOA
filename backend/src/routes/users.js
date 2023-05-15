import express from "express";
import userController from "../controllers/users.js"

const routeuser = express.Router()
routeuser.get('/:user', userController.getItem)
routeuser.get('/', userController.getItems)


export default routeuser;